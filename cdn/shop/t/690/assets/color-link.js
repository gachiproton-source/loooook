document.addEventListener('DOMContentLoaded', function() {
  
  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  
  // === PRODUCT PAGES: Full color switching (replaces missing Shopify JS) ===
  
  function switchColor(colorNorm) {
    if (!colorNorm) return;
    
    // 1. Show/hide images by data-color
    var mediaItems = document.querySelectorAll('.product__media-item[data-color]');
    if (mediaItems.length > 0) {
      var firstVisible = null;
      mediaItems.forEach(function(item) {
        if (normalize(item.getAttribute('data-color')) === colorNorm) {
          item.style.display = '';
          if (!firstVisible) firstVisible = item;
        } else {
          item.style.display = 'none';
        }
      });
      // Scroll to first visible image
      if (firstVisible) {
        var slider = firstVisible.closest('.slider, .product__media-list');
        if (slider) slider.scrollLeft = 0;
      }
    }
    
    // 2. Check the matching radio + update label visual
    document.querySelectorAll('input[data-input-color]').forEach(function(input) {
      var match = normalize(input.getAttribute('data-input-color')) === colorNorm;
      input.checked = match;
    });
    
    // 3. Update swatch label highlights
    document.querySelectorAll('label[data-label-color]').forEach(function(label) {
      if (normalize(label.getAttribute('data-label-color')) === colorNorm) {
        label.style.outline = '1.5px solid #333';
        label.style.outlineOffset = '2px';
      } else {
        label.style.outline = '';
        label.style.outlineOffset = '';
      }
    });
    
    // 4. Update "Color: X" label text
    var colorLabel = document.querySelector('[data-color-label]');
    if (colorLabel) {
      // Find the original name from input
      var matchedInput = document.querySelector('input[data-input-color][checked]');
      if (!matchedInput) {
        document.querySelectorAll('input[data-input-color]').forEach(function(inp) {
          if (inp.checked) matchedInput = inp;
        });
      }
      if (matchedInput) {
        colorLabel.textContent = matchedInput.getAttribute('data-input-color');
      }
    }
  }
  
  // Add click handlers to ALL color swatch labels on product pages
  document.querySelectorAll('label[data-label-color]').forEach(function(label) {
    label.addEventListener('click', function(e) {
      e.preventDefault();
      var color = normalize(this.getAttribute('data-label-color'));
      switchColor(color);
      
      // Also update URL without reload
      var url = new URL(window.location);
      url.searchParams.set('color', color);
      window.history.replaceState({}, '', url);
    });
  });
  
  // Also handle radio input changes directly
  document.querySelectorAll('input[data-input-color]').forEach(function(input) {
    input.addEventListener('change', function() {
      switchColor(normalize(this.getAttribute('data-input-color')));
    });
  });
  
  // Read ?color= from URL on page load
  var params = new URLSearchParams(window.location.search);
  var selectedColor = params.get('color');
  if (selectedColor) {
    setTimeout(function() {
      switchColor(normalize(decodeURIComponent(selectedColor)));
    }, 150);
  }
  
  // === COLLECTION PAGES: update product link when swatch is clicked ===
  
  // lo-swatch style (readers.html)
  if (typeof window.swapColor === 'function') {
    var origSwap = window.swapColor;
    window.swapColor = function(el) {
      origSwap(el);
      var color = normalize(el.getAttribute('title'));
      if (!color) return;
      var card = el.closest('.lo-card');
      if (card) {
        card.querySelectorAll('a[href*="products/"]').forEach(function(a) {
          a.setAttribute('href', a.getAttribute('href').split('?')[0] + '?color=' + encodeURIComponent(color));
        });
      }
    };
  }
  
  // label--swatch style (other pages)
  document.querySelectorAll('.product-option .label--swatch').forEach(function(swatch) {
    swatch.addEventListener('click', function() {
      var bg = this.style.backgroundImage || '';
      var m = bg.match(/swatch-([^."]+)/);
      var color = m ? m[1] : '';
      if (!color) return;
      var card = this.closest('.card-wrapper, .grid__item, li');
      if (card) {
        card.querySelectorAll('a[href*="products/"]').forEach(function(a) {
          a.setAttribute('href', a.getAttribute('href').split('?')[0] + '?color=' + encodeURIComponent(color));
        });
      }
    });
  });
});
