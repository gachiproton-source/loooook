document.addEventListener('DOMContentLoaded', function() {
  
  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  
  // === PRODUCT PAGE: Color switching logic ===
  function switchProductColor(colorName) {
    var norm = normalize(colorName);
    if (!norm) return;
    
    // 1. Check the matching radio input
    document.querySelectorAll('input[data-input-color]').forEach(function(input) {
      var isMatch = normalize(input.getAttribute('data-input-color')) === norm;
      input.checked = isMatch;
      // Update label visual state
      var label = document.querySelector('label[for="' + input.id + '"]');
      if (label) {
        if (isMatch) label.classList.add('active');
        else label.classList.remove('active');
      }
    });
    
    // 2. Show/hide product images by data-color
    var mediaItems = document.querySelectorAll('.product__media-item[data-color]');
    if (mediaItems.length > 0) {
      mediaItems.forEach(function(item) {
        var itemColor = normalize(item.getAttribute('data-color'));
        if (itemColor === norm) {
          item.style.display = '';
          item.classList.add('is-active');
        } else {
          item.style.display = 'none';
          item.classList.remove('is-active');
        }
      });
    }
    
    // 3. Update color label text
    var colorLabel = document.querySelector('.form__label--color, [data-color-label]');
    if (colorLabel) {
      // Convert "shiny-pink" back to "Shiny Pink"
      colorLabel.textContent = colorName.replace(/(^|\s|-)\w/g, function(c) { return c.toUpperCase(); }).replace(/-/g, ' ');
    }
    
    // 4. Also update swatch highlight on product page
    document.querySelectorAll('.product-form__input label[data-color]').forEach(function(label) {
      if (normalize(label.getAttribute('data-color')) === norm) {
        label.classList.add('checked');
      } else {
        label.classList.remove('checked');
      }
    });
  }
  
  // Add click handlers to product page color inputs
  document.querySelectorAll('input[data-input-color]').forEach(function(input) {
    input.addEventListener('change', function() {
      switchProductColor(this.getAttribute('data-input-color'));
    });
    input.addEventListener('click', function() {
      switchProductColor(this.getAttribute('data-input-color'));
    });
  });
  
  // Also handle label clicks for color swatches on product page
  document.querySelectorAll('.product-form__input label[data-color]').forEach(function(label) {
    label.addEventListener('click', function() {
      var color = this.getAttribute('data-color');
      switchProductColor(color);
    });
  });
  
  // Read ?color= from URL and activate
  var params = new URLSearchParams(window.location.search);
  var selectedColor = params.get('color');
  if (selectedColor) {
    // Small delay to let page render first
    setTimeout(function() {
      switchProductColor(decodeURIComponent(selectedColor));
    }, 100);
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
