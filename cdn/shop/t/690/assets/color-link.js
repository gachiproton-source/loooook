document.addEventListener('DOMContentLoaded', function() {
  
  // === COLLECTION PAGES: update product link when swatch is clicked ===
  
  // lo-swatch style (readers.html) - wrap original swapColor
  if (typeof window.swapColor === 'function') {
    var origSwap = window.swapColor;
    window.swapColor = function(el) {
      origSwap(el);
      var color = (el.getAttribute('title') || '').toLowerCase().replace(/\s+/g, '-');
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
  
  // === PRODUCT PAGES: read ?color= and select matching color ===
  var params = new URLSearchParams(window.location.search);
  var selectedColor = params.get('color');
  if (!selectedColor) return;
  
  selectedColor = decodeURIComponent(selectedColor).toLowerCase().replace(/\s+/g, '-');
  
  // Normalize: "shiny-forest-green" matches "Shiny Forest Green"
  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }
  
  var found = false;
  
  // Method 1: data-input-color on radio inputs (Shopify product pages)
  document.querySelectorAll('input[data-input-color]').forEach(function(input) {
    if (found) return;
    var inputColor = normalize(input.getAttribute('data-input-color'));
    if (inputColor === selectedColor || inputColor.indexOf(selectedColor) > -1 || selectedColor.indexOf(inputColor) > -1) {
      input.checked = true;
      input.dispatchEvent(new Event('change', {bubbles: true}));
      input.click();
      found = true;
    }
  });
  
  // Method 2: data-color attribute on labels/inputs
  if (!found) {
    document.querySelectorAll('[data-color]').forEach(function(el) {
      if (found) return;
      if (normalize(el.dataset.color) === selectedColor) {
        el.click();
        found = true;
      }
    });
  }
  
  // Method 3: Color radio by value
  if (!found) {
    document.querySelectorAll('input[type="radio"][name="Color"]').forEach(function(input) {
      if (found) return;
      var val = normalize(input.value);
      if (val === selectedColor || val.indexOf(selectedColor) > -1) {
        input.checked = true;
        input.dispatchEvent(new Event('change', {bubbles: true}));
        input.click();
        found = true;
      }
    });
  }
});
