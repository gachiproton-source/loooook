document.addEventListener('DOMContentLoaded', function() {
  
  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  
  // === PRODUCT PAGES: Full color switching ===
  
  function switchColor(colorNorm) {
    if (!colorNorm) return;
    
    // Show/hide images by data-color
    var mediaItems = document.querySelectorAll('.product__media-item[data-color]');
    if (mediaItems.length > 0) {
      mediaItems.forEach(function(item) {
        if (normalize(item.getAttribute('data-color')) === colorNorm) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
      var slider = document.querySelector('.product__media-list');
      if (slider) slider.scrollLeft = 0;
    }
    
    // Check matching radio
    document.querySelectorAll('input[data-input-color]').forEach(function(input) {
      input.checked = normalize(input.getAttribute('data-input-color')) === colorNorm;
    });
    
    // Highlight swatch labels
    document.querySelectorAll('label[data-label-color]').forEach(function(label) {
      if (normalize(label.getAttribute('data-label-color')) === colorNorm) {
        label.style.outline = '1.5px solid #333';
        label.style.outlineOffset = '2px';
      } else {
        label.style.outline = '';
        label.style.outlineOffset = '';
      }
    });
    
    // Update color label text
    var colorLabel = document.querySelector('[data-color-label]');
    if (colorLabel) {
      document.querySelectorAll('input[data-input-color]').forEach(function(inp) {
        if (inp.checked) colorLabel.textContent = inp.getAttribute('data-input-color');
      });
    }
  }
  
  // Click handlers for product page swatches
  document.querySelectorAll('label[data-label-color]').forEach(function(label) {
    label.addEventListener('click', function(e) {
      e.preventDefault();
      switchColor(normalize(this.getAttribute('data-label-color')));
    });
  });
  
  // Read ?color= from URL
  var params = new URLSearchParams(window.location.search);
  var selectedColor = params.get('color');
  if (selectedColor) {
    setTimeout(function() {
      switchColor(normalize(decodeURIComponent(selectedColor)));
    }, 150);
  }
  
  // === COLLECTION PAGES: Listen for clicks on lo-swatch elements ===
  // Use event delegation instead of overriding swapColor
  document.addEventListener('click', function(e) {
    var swatch = e.target.closest('.lo-swatch');
    if (!swatch) return;
    
    var color = normalize(swatch.getAttribute('title'));
    if (!color) return;
    
    var card = swatch.closest('.lo-card');
    if (card) {
      // Small delay to let original swapColor run first
      setTimeout(function() {
        card.querySelectorAll('a[href*="products/"]').forEach(function(a) {
          a.setAttribute('href', a.getAttribute('href').split('?')[0] + '?color=' + encodeURIComponent(color));
        });
      }, 10);
    }
  });
  
  // Also handle label--swatch clicks in other collection pages
  document.addEventListener('click', function(e) {
    var swatch = e.target.closest('.product-option .label--swatch');
    if (!swatch) return;
    
    var bg = swatch.style.backgroundImage || '';
    var m = bg.match(/swatch-([^."]+)/);
    var color = m ? m[1] : '';
    if (!color) return;
    
    var card = swatch.closest('.card-wrapper, .grid__item, li');
    if (card) {
      setTimeout(function() {
        card.querySelectorAll('a[href*="products/"]').forEach(function(a) {
          a.setAttribute('href', a.getAttribute('href').split('?')[0] + '?color=' + encodeURIComponent(color));
        });
      }, 10);
    }
  });
});
