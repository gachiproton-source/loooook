document.addEventListener('DOMContentLoaded', function() {
  // === COLLECTION PAGES: update product link when swatch is clicked ===
  // For lo-card style (readers.html)
  var origSwapColor = window.swapColor;
  window.swapColor = function(el) {
    // Call original swap
    if (origSwapColor) origSwapColor(el);
    
    // Get color from title attribute
    var color = (el.getAttribute('title') || '').toLowerCase().replace(/\s+/g, '-');
    if (!color) return;
    
    // Update the card link with ?color=
    var card = el.closest('.lo-card');
    if (card) {
      var links = card.querySelectorAll('a[href*="products/"]');
      links.forEach(function(a) {
        var base = a.getAttribute('href').split('?')[0];
        a.setAttribute('href', base + '?color=' + encodeURIComponent(color));
      });
    }
  };
  
  // For label--swatch style (other collection pages)
  document.querySelectorAll('.product-option .label--swatch').forEach(function(swatch) {
    swatch.addEventListener('click', function() {
      var color = this.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      if (!color) {
        // Try getting from style background-image filename
        var bg = this.style.backgroundImage || '';
        var m = bg.match(/swatch-([^.]+)\./);
        if (m) color = m[1];
      }
      if (!color) return;
      
      var card = this.closest('.card-wrapper, .grid__item, li');
      if (card) {
        var links = card.querySelectorAll('a[href*="products/"]');
        links.forEach(function(a) {
          var base = a.getAttribute('href').split('?')[0];
          a.setAttribute('href', base + '?color=' + encodeURIComponent(color));
        });
      }
    });
  });
  
  // === PRODUCT PAGES: read ?color= and activate the matching swatch ===
  var params = new URLSearchParams(window.location.search);
  var selectedColor = params.get('color');
  if (selectedColor) {
    selectedColor = decodeURIComponent(selectedColor).toLowerCase();
    
    // Try to find and click the matching color swatch
    var found = false;
    
    // Method 1: data-color attribute
    document.querySelectorAll('[data-color]').forEach(function(el) {
      if (el.dataset.color.toLowerCase() === selectedColor && !found) {
        el.click();
        found = true;
      }
    });
    
    // Method 2: swatch with title matching
    if (!found) {
      document.querySelectorAll('.product-form__input .color-swatch, .product-form__input input[type="radio"]').forEach(function(el) {
        var val = (el.getAttribute('value') || el.getAttribute('title') || '').toLowerCase().replace(/\s+/g, '-');
        if (val.indexOf(selectedColor) > -1 && !found) {
          el.click();
          found = true;
        }
      });
    }
    
    // Method 3: label with data-color
    if (!found) {
      document.querySelectorAll('label[data-color]').forEach(function(el) {
        if (el.dataset.color.toLowerCase() === selectedColor && !found) {
          el.click();
          found = true;
        }
      });
    }
  }
});
