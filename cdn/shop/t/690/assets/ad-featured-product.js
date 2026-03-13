(()=>{const LOOK_AD_EXPIRATION_KEY="look_ad_expire",LOOK_AD_EXPIRATION_QUERY_KEY="look_expire",LOOK_AD_TIMESTAMP_KEY="look_ad_string_timestamp",LOOK_AD_STRING_KEY="look_ad_string",LOOK_AD_FEATURED_PRODUCT_KEY="look_ad_featured_product",LOOK_AD_FEATURED_PRODUCT_QUERY_KEY="featured_product",LOOK_AD_FEATURED_COLOR_HIDE_NON_MATCHING_QUERY_KEY="hide_non_matching_color",LOOK_AD_FEATURED_COLOR_KEY="look_ad_featured_color",LOOK_AD_FEATURED_COLOR_QUERY_KEY="featured_color",parsedSearch=new URLSearchParams(window.location.search);let LOOK_AD_STRING_EXPIRATION=3;if((window.localStorage.getItem(LOOK_AD_EXPIRATION_KEY)!==null||parsedSearch.get(LOOK_AD_EXPIRATION_QUERY_KEY)!==null)&&(LOOK_AD_STRING_EXPIRATION=window.localStorage.getItem(LOOK_AD_EXPIRATION_KEY)||parsedSearch.get(LOOK_AD_EXPIRATION_QUERY_KEY),window.localStorage.setItem(LOOK_AD_EXPIRATION_KEY,LOOK_AD_STRING_EXPIRATION)),parsedSearch.get(LOOK_AD_FEATURED_COLOR_HIDE_NON_MATCHING_QUERY_KEY)==="true"&&window.location.pathname.includes("/collections/")&&document.head.insertAdjacentHTML("beforeend",`
            <style>
            #ProductGridContainer #product-grid li.grid__item[data-matching-color-found="false"] {
              display: none !important;
            }
            #ProductGridContainer #product-grid li.grid__item:has(.fp_new-element) {
              display: none !important;
            }
            </style>
        `),window.localStorage.getItem(LOOK_AD_STRING_KEY)===null&&(parsedSearch.get(LOOK_AD_FEATURED_PRODUCT_QUERY_KEY)!==null||parsedSearch.get(LOOK_AD_FEATURED_COLOR_QUERY_KEY)!==null)){if(window.localStorage.setItem(LOOK_AD_STRING_KEY,window.location.search),window.localStorage.setItem(LOOK_AD_TIMESTAMP_KEY,`${Date.now()}`),parsedSearch.get(LOOK_AD_FEATURED_PRODUCT_QUERY_KEY)!==null){const featuredProductHandle=parsedSearch.get(LOOK_AD_FEATURED_PRODUCT_QUERY_KEY).toLowerCase();window.localStorage.setItem(LOOK_AD_FEATURED_PRODUCT_KEY,featuredProductHandle);const productStyle=`
          <style>
            #ProductGridContainer #product-grid li.grid__item[data-product-handle*="${featuredProductHandle}"]:not([data-product-handle*="sun-progressive"]) {
              order: -1 !important;
            }
            div.featured-products .swiper-slide:has(a[href^="/products/${featuredProductHandle}"]) {
              order: -1 !important;
            }
          </style>
        `;(window.location.pathname.includes("/collections/")||window.location.pathname==="/")&&document.head&&document.head.insertAdjacentHTML("beforeend",productStyle)}if(parsedSearch.get(LOOK_AD_FEATURED_COLOR_QUERY_KEY)!==null){const featuredColorHandle=parsedSearch.get(LOOK_AD_FEATURED_COLOR_QUERY_KEY).toLowerCase().replaceAll("-"," ");window.localStorage.setItem(LOOK_AD_FEATURED_COLOR_KEY,featuredColorHandle)}}else{const storedProduct=window.localStorage.getItem(LOOK_AD_FEATURED_PRODUCT_KEY);if(storedProduct){const productStyle=`
          <style>
            #ProductGridContainer #product-grid li.grid__item[data-product-handle*="${storedProduct}"]:not([data-product-handle*="sun-progressive"]) {
              order: -1 !important;
            }
            div.featured-products .swiper-slide:has(a[href^="/products/${storedProduct}"]) {
              order: -1 !important;
            }
          </style>
        `;(window.location.pathname.includes("/collections/")||window.location.pathname==="/")&&document.head&&document.head.insertAdjacentHTML("beforeend",productStyle)}}if(window.localStorage.getItem(LOOK_AD_STRING_KEY)!==null){const timestamp=window.localStorage.getItem(LOOK_AD_TIMESTAMP_KEY);if(timestamp){const timeDifference=Date.now()-Number(timestamp),EXPIRATION_DAYS_IN_MS=LOOK_AD_STRING_EXPIRATION*24*60*60*1e3;timeDifference>EXPIRATION_DAYS_IN_MS&&(window.localStorage.removeItem(LOOK_AD_TIMESTAMP_KEY),window.localStorage.removeItem(LOOK_AD_STRING_KEY),window.localStorage.removeItem(LOOK_AD_FEATURED_PRODUCT_KEY),window.localStorage.removeItem(LOOK_AD_FEATURED_COLOR_KEY))}}})();
//# sourceMappingURL=/cdn/shop/t/690/assets/ad-featured-product.js.map
