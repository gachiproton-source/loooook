document.addEventListener('DOMContentLoaded', function() {
  
  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  
  // === PRODUCT PAGE: Handle ?color= parameter ===
  var params = new URLSearchParams(window.location.search);
  var selectedColor = params.get('color');
  
  if (selectedColor) {
    var norm = normalize(decodeURIComponent(selectedColor));
    
    setTimeout(function() {
      // Find matching radio input by EXACT normalized match
      var inputs = document.querySelectorAll('input[data-input-color]');
      var matched = null;
      
      inputs.forEach(function(input) {
        var inputNorm = normalize(input.getAttribute('data-input-color'));
        if (inputNorm === norm) {
          matched = input;
        }
      });
      
      if (matched) {
        // Click the matching input's label to trigger native behavior
        var label = document.querySelector('label[for="' + matched.id + '"]');
        if (label) {
          label.click();
        } else {
          matched.checked = true;
          matched.dispatchEvent(new Event('change', {bubbles: true}));
        }
        
        // Also show matching images
        var mediaItems = document.querySelectorAll('.product__media-item[data-color]');
        if (mediaItems.length > 0) {
          mediaItems.forEach(function(item) {
            if (normalize(item.getAttribute('data-color')) === norm) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        }
        
        // Update color label
        var colorLabel = document.querySelector('[data-color-label]');
        if (colorLabel) {
          colorLabel.textContent = matched.getAttribute('data-input-color');
        }
      }
    }, 200);
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
