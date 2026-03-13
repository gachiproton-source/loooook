document.addEventListener('DOMContentLoaded', function() {
  
  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  
  // === PRODUCT PAGES: Full color switching ===
  
  function switchColor(colorNorm) {
    if (!colorNorm) return;
    
    // Show/hide images by data-color
    var mediaItems = document.querySelectorAll('li.product__media-item[data-color], .product__media-item[data-color]');
    var shown = 0, hidden = 0;
    if (mediaItems.length > 0) {
      mediaItems.forEach(function(item) {
        var itemColor = normalize(item.getAttribute('data-color'));
        if (itemColor === colorNorm) {
          item.style.display = '';
          item.classList.add('active');
          shown++;
        } else {
          item.style.display = 'none';
          item.classList.remove('active');
          hidden++;
        }
      });
      // Reset scroll
      var slider = document.querySelector('.product__media-list, .slider');
      if (slider) slider.scrollLeft = 0;
    }
    
    // Check matching radio
    document.querySelectorAll('input[data-input-color]').forEach(function(input) {
      input.checked = normalize(input.getAttribute('data-input-color')) === colorNorm;
    });
    
    // Highlight swatch labels
    document.querySelectorAll('label[data-label-color]').forEach(function(label) {
      var isMatch = normalize(label.getAttribute('data-label-color')) === colorNorm;
      label.style.outline = isMatch ? '1.5px solid #333' : '';
      label.style.outlineOffset = isMatch ? '2px' : '';
    });
    
    // Update color label text
    var colorLabel = document.querySelector('[data-color-label]');
    if (colorLabel) {
      document.querySelectorAll('input[data-input-color]').forEach(function(inp) {
        if (inp.checked) colorLabel.textContent = inp.getAttribute('data-input-color');
      });
    }
    
    console.log('[color-link] switchColor:', colorNorm, 'shown:', shown, 'hidden:', hidden, 'total:', mediaItems.length);
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
    var norm = normalize(decodeURIComponent(selectedColor));
    console.log('[color-link] URL color:', norm);
    // Try immediately
    switchColor(norm);
    // Also try after delay in case page is still loading
    setTimeout(function() { switchColor(norm); }, 300);
    setTimeout(function() { switchColor(norm); }, 800);
  }
  
  // === COLLECTION PAGES: event delegation for swatch clicks ===
  document.addEventListener('click', function(e) {
    // lo-swatch (readers.html style)
    var swatch = e.target.closest('.lo-swatch');
    if (swatch) {
      var color = normalize(swatch.getAttribute('title'));
      if (!color) return;
      var card = swatch.closest('.lo-card');
      if (card) {
        setTimeout(function() {
          card.querySelectorAll('a[href*="products/"]').forEach(function(a) {
            a.setAttribute('href', a.getAttribute('href').split('?')[0] + '?color=' + encodeURIComponent(color));
          });
        }, 10);
      }
      return;
    }
    
    // label--swatch (other collection pages)
    var labelSwatch = e.target.closest('.product-option .label--swatch');
    if (labelSwatch) {
      var bg = labelSwatch.style.backgroundImage || '';
      var m = bg.match(/swatch-([^."]+)/);
      var color2 = m ? m[1] : '';
      if (!color2) return;
      var card2 = labelSwatch.closest('.card-wrapper, .grid__item, li');
      if (card2) {
        setTimeout(function() {
          card2.querySelectorAll('a[href*="products/"]').forEach(function(a) {
            a.setAttribute('href', a.getAttribute('href').split('?')[0] + '?color=' + encodeURIComponent(color2));
          });
        }, 10);
      }
    }
  });
});
