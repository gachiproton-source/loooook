window.addEventListener("load",()=>{document.querySelectorAll('a[href*="/pages/find-your-look"]').forEach(link=>{link.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation(),window["fp-virtual-mirror-add-on"].homepageTrigger()})})}),window["fp-virtual-mirror-add-on"]={showUpdatedPopup:!1,homepageTrigger:function(){window["fp-virtual-mirror-add-on"].showUpdatedPopup=!0,window["fp-virtual-mirror-add-on"].init({addDialog:!0,addModalOpener:!1,dialogContainer:document.body,openerContainer:document.body,triggerSelector:".button.button--tertiary.fp_button.hp_vm_button"}),window._fpEvent&&window._fpEvent.push(["eventConversion",{value:"fp_vm_button_click"}]),document.querySelector("[data-carousel-vm] .swiper-slide:nth-child(1)")&&document.querySelector("[data-carousel-vm] .swiper-slide:nth-child(1)").click(),document.querySelector(".all-vm-opener button").click()},loadStyle:function(url){return new Promise(function(resolve,reject){var link=document.createElement("link");link.rel="stylesheet",link.href=url,link.onload=function(){resolve(link)},link.onerror=function(){reject(new Error("Failed to load CSS: "+url))},document.head.appendChild(link);let newStyle=document.createElement("style");newStyle.innerHTML=`
            .vm-pop-up-new-design .virtual-mirror-popup-modal__content {
                width: 100%;
                margin-top: 0 !important;
                margin-bottom: 0 !important;
                max-width: 462px !important;
                padding: 0 !important;
                padding-bottom: 16px !important;
            }
            
            .vm-pop-up-new-design .virtual-mirror-popup-modal__content-info>h2 {
                display: none !important;
            }
            
            .vm-pop-up-new-design .virtual-mirror-popup-modal__content-info>p {
                display: none !important;
            }
            
            .vm-pop-up-new-design .virtual-mirror-popup-modal__toggle {
                position: absolute !important;
                right: 16px !important;
                top: 16px !important;
                background: transparent;
                border: oldlace;
                padding: 0;
                width: 32px;
                height: 32px;
                background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='16' fill='white'/%3E%3Cpath d='M8.29101 23.7088C8.34325 23.7611 8.40529 23.8026 8.47358 23.8309C8.54186 23.8592 8.61506 23.8738 8.68898 23.8738C8.7629 23.8738 8.8361 23.8592 8.90438 23.8309C8.97267 23.8026 9.03471 23.7611 9.08695 23.7088L16.0001 16.7957L22.916 23.7088C23.0216 23.8144 23.1647 23.8737 23.314 23.8737C23.4632 23.8737 23.6064 23.8144 23.7119 23.7088C23.8175 23.6033 23.8768 23.4601 23.8768 23.3109C23.8768 23.1616 23.8175 23.0184 23.7119 22.9129L16.796 15.9998L23.7091 9.08383C23.8147 8.97828 23.874 8.83513 23.874 8.68586C23.874 8.53659 23.8147 8.39344 23.7091 8.28789C23.6036 8.18234 23.4604 8.12305 23.3112 8.12305C23.1619 8.12305 23.0187 8.18234 22.9132 8.28789L16.0001 15.2038L9.08414 8.2907C8.97653 8.19855 8.83811 8.1504 8.69654 8.15587C8.55498 8.16133 8.42069 8.22002 8.32051 8.3202C8.22033 8.42038 8.16164 8.55467 8.15617 8.69624C8.15071 8.8378 8.19886 8.97622 8.29101 9.08383L15.2041 15.9998L8.29101 22.9157C8.18625 23.0211 8.12744 23.1637 8.12744 23.3123C8.12744 23.4609 8.18625 23.6034 8.29101 23.7088Z' fill='%23101010'/%3E%3C/svg%3E%0A");
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 500px;
            }
            
            .vm-pop-up-new-design .virtual-mirror-popup-modal__toggle .icon {
                display: none !important;
            }
            
            .vm-pop-up-new-design div#fitmixContainerAll {
                height: calc(100vh - 230px);
                min-height: 470px !important;
                max-height: 520px !important;
            }
            
            .vm-pop-up-new-design .vm-contents {
                margin-top: 0 !important;
                margin-bottom: 0 !important;
                min-height: unset !important;
            }
            
            .vm-pop-up-new-design .virtual-mirror-popup-modal__content {
                height: 100%;
                max-height: 812px;
            }
            
            .vm-pop-up-new-design .vm-contents>.grid {
                flex-direction: column !important;
                margin-bottom: 0 !important;
                margin-left: 0 !important;
            }
            
            .vm-pop-up-new-design .vm-contents>.grid>div {
                width: 100% !important;
            }
            
            .vm-pop-up-new-design .vm-contents>.grid>div.grid__item:not([data-carousel-vm]) {
                padding-bottom: 0 !important;
                padding: 0 !important;
            }
            
            .vm-pop-up-new-design .vm-swiper-slide {
                height: 81px !important;
                width: 107px !important;
                align-items: center;
                justify-content: center;
                border: 1px solid #EBEBEB !important;
                background: #F6F6F6 !important;
            }
            
            .vm-pop-up-new-design div.virtual-mirror-popup-modal__content-info div.swiper.vm-swiper.grid__item[data-carousel-vm] {
                width: calc(100% - 16px) !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 16px !important;
                padding-bottom: 40px !important;
                height: 123px !important;
                min-height: 123px !important;
                max-height: 123px !important;
                position: relative !important;
                bottom: 0 !important;
                margin-top: 16px !important; 
            }
            
            .vm-pop-up-new-design div.virtual-mirror-popup-modal__content-info div.swiper.vm-swiper.grid__item {
                margin: 0 !important;
                margin-left: 16px !important;
                position: relative !important;
                padding: 0 !important;
                padding-bottom: 40px !important;
                bottom: unset !important;
                padding-left: 0 !important;
            }
            
            .vm-pop-up-new-design div.virtual-mirror-popup-modal__content-info:has(.vm-swiper-slide--checked) iframe {
                height: 100% !important;
                overflow: hidden;
                border: 0px;
                max-height: 100% !important;
            }
            
            .vm-pop-up-new-design div.virtual-mirror-popup-modal__content-info {
                height: fit-content !important;
            }
            
            .vm-pop-up-new-design .vm-contents>.grid>div[data-carousel-vm] .swiper-pagination {
                margin-left: -16px;
                bottom: 8px !important;
            }
            
            .vm-pop-up-new-design .vm-contents .swiper-button-prev {
                top: unset !important;
                bottom: 0px !important;
                left: calc(50% - 170px) !important;
                transform: rotate(180deg);
                display: flex;
                align-items: center;
            }
            
            .vm-pop-up-new-design .vm-contents .swiper-button-next {
                top: unset !important;
                bottom: -2px !important;
                right: calc(50% - 135px) !important;
                display: flex;
                align-items: center;
            }
            .vm-pop-up-new-design .vm-contents .swiper-button-next:after{
              content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' rx='10' fill='%23F6F6F6'/%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.617 5.61a.47.47 0 0 0-.132.334.5.5 0 0 0 .132.335l3.28 3.443-3.28 3.444a.485.485 0 0 0 0 .669.44.44 0 0 0 .319.138.44.44 0 0 0 .318-.139l3.598-3.777a.48.48 0 0 0 .132-.335.5.5 0 0 0-.132-.334L9.254 5.61a.45.45 0 0 0-.318-.139.43.43 0 0 0-.319.14' fill='%23101010'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M8.036 14.444V5h5.667v9.444z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
            }
            .vm-pop-up-new-design .vm-contents .swiper-button-prev:after{
              content: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='20' height='20' rx='10' fill='%23F6F6F6'/%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.617 5.61a.47.47 0 0 0-.132.334.5.5 0 0 0 .132.335l3.28 3.443-3.28 3.444a.485.485 0 0 0 0 .669.44.44 0 0 0 .319.138.44.44 0 0 0 .318-.139l3.598-3.777a.48.48 0 0 0 .132-.335.5.5 0 0 0-.132-.334L9.254 5.61a.45.45 0 0 0-.318-.139.43.43 0 0 0-.319.14' fill='%23101010'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M8.036 14.444V5h5.667v9.444z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
            }
            .vm-pop-up-new-design img.vm-swiper-slide--image {
                max-width: 200px;
                width: 100%;
                margin: auto;
                position: relative;
                height: auto;
                width: 89px !important;
                height: 34px !important;
                object-fit: cover !important;
                margin-bottom: 10px !important;
                margin-top: 0 !important;
            }
            
            h3.vm-swiper-slide--title {
                font-family: DIN Condensed;
                font-weight: 700;
                font-size: 14px;
                line-height: 18px;
                letter-spacing: 0.6px;
                text-align: center;
                vertical-align: middle;
                text-transform: uppercase;
            }
            
            .vm-pop-up-new-design .vm-contents .swiper-pagination-bullet {
                width: 8px !important;
                height: 8px !important;
                background: rgba(0, 0, 0, 0.2) !important;
            }
            
            .vm-pop-up-new-design .vm-contents .swiper-pagination-bullet-active {
                width: 8px !important;
                height: 8px !important;
                background: rgba(0, 0, 0, 1) !important;
            }
            
            .vm-pop-up-new-design .glasses-info-container {
                justify-content: space-between !important;
                display: flex !important;
                padding: 13px 16px !important;
                align-items: center !important;
            }
            
            .vm-pop-up-new-design .glasses-info-container .glass-shape {
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                letter-spacing: 0.6px;
                vertical-align: middle;
                text-transform: capitalize;
                color: rgba(16, 16, 16, 1);
            }
            
            .vm-pop-up-new-design .glasses-info-container button {
                border: 0;
                background: transparent;
                font-weight: 500;
                font-size: 14px;
                line-height: 18px;
                letter-spacing: 0.6px;
                text-align: right;
                vertical-align: middle;
                text-transform: capitalize;
                text-decoration: underline;
                text-decoration-style: solid;
                text-decoration-thickness: 1px;
                text-underline-offset: 2px;
                padding: 0;
                cursor: pointer;
            }
            
            .vm-pop-up-new-design .all-vm-hidden-link {
                max-width: 430px;
                width: calc(100vw - 32px);
                margin-left: 16px;
                padding: 0;
            }
            
            @media only screen and (min-width: 750px) {
                .vm-pop-up-new-design .virtual-mirror-popup-modal__content {
                    height: 722px;
                    max-height: calc(100vh - 5rem);
                    margin: auto;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    right: unset;
                    bottom: unset;
                }
            }
            @media only screen and (max-width: 749px) {
                body .vm-pop-up-new-design div#fitmixContainerAll {
                height: calc(100dvh - 200px);
                min-height: unset !important;
                max-height: 530px !important;
            }
            }
            .vm-pop-up-new-design .vm-swiper-slide.selected{
                border-color: rgba(var(--color-button), var(--alpha-button-background)) !important;
                border-width: 2px !important;
                width: 105px !important;
                height: 79px !important;
            }
            .vm-pop-up-new-design .vm-swiper-slide.selected .vm-swiper-slide--checked{
                display: none !important;
            }
            .vm-pop-up-new-design .vm-contents .swiper-pagination-bullet {
              margin: 0 4px !important;
              cursor: pointer;
            }
            .vm-contents>.grid>a {
                width: calc(100% - 32px) !important;
                margin-left: 16px;
            }
      `,document.head.appendChild(newStyle)})},loadScript:function(url){return new Promise(function(resolve,reject){var script=document.createElement("script");script.src=url,script.type="text/javascript",script.onload=function(){resolve(script)},script.onerror=function(){reject(new Error("Failed to load script: "+url))},document.head.appendChild(script)})},fetchPageContent:function(){return fetch("/pages/find-your-look").then(function(response){return response.text()}).then(function(htmlString){var tempDiv=document.createElement("div");return tempDiv.innerHTML=htmlString,tempDiv})},addDialog:function(container){this.fetchPageContent().then(function(parsedHtml){var modalDialog=parsedHtml.querySelector("modal-dialog");if(modalDialog){if(modalDialog.classList.add("all-vm-popup"),modalDialog.classList.add("global-vm-popup"),!document.querySelector(".global-vm-popup")&&container.appendChild(modalDialog),window["fp-virtual-mirror-add-on"].showUpdatedPopup){let updateVmColor2=function(fieldset){const selectedSKU=fieldset.querySelector("input:checked").dataset.fitmixSku,selectedColor=fieldset.querySelector("input:checked").dataset.vmColor;document.querySelectorAll("modal-opener.product-form__sub-cta[data-fitmix-color][data-modal]").forEach(btn=>{btn.setAttribute("data-fitmix-color",selectedColor)});let selectedColorSpan=document.querySelector(".vm-selected-color");selectedColorSpan&&(selectedColorSpan.innerHTML=selectedColor),window._fitmixInstance&&setFrame(selectedSKU)};var updateVmColor=updateVmColor2;modalDialog.classList.add("vm-pop-up-new-design"),modalDialog.querySelector(".all-vm-hidden-link")&&(modalDialog.querySelector(".all-vm-hidden-link").style.display="flex"),modalDialog.querySelector(".vm-contents > .grid > div a:not(.all-vm-hidden-link)")&&(modalDialog.querySelector(".vm-contents > .grid > div a:not(.all-vm-hidden-link)").style.display="none");let slide=modalDialog.querySelector(".swiper-slide.vm-swiper-slide.selected");if(document.querySelectorAll("[data-vm-swatches]").forEach(fieldset=>{fieldset.addEventListener("change",()=>{updateVmColor2(fieldset)})}),slide){slide.click();let button=document.querySelector(".vm-contents>.grid>a");button&&(button.href=slide.getAttribute("data-vm-product-url")),setTimeout(function(){let selectedColorSpan=document.querySelector(".vm-selected-color");const selectedColor=document.querySelector(".virtual-mirror__input.vm-form__input input:checked");selectedColorSpan&&selectedColor&&(selectedColorSpan.innerHTML=selectedColor.dataset.vmColor)},1e3),setTimeout(function(){let selectedColorSpan=document.querySelector(".vm-selected-color");const selectedColor=document.querySelector(".virtual-mirror__input.vm-form__input input:checked");selectedColorSpan&&selectedColor&&(selectedColorSpan.innerHTML=selectedColor.dataset.vmColor)},3e3),setTimeout(function(){let selectedColorSpan=document.querySelector(".vm-selected-color");const selectedColor=document.querySelector(".virtual-mirror__input.vm-form__input input:checked");selectedColorSpan&&selectedColor&&(selectedColorSpan.innerHTML=selectedColor.dataset.vmColor)},5e3),setTimeout(function(){let selectedColorSpan=document.querySelector(".vm-selected-color");const selectedColor=document.querySelector(".virtual-mirror__input.vm-form__input input:checked");selectedColorSpan&&selectedColor&&(selectedColorSpan.innerHTML=selectedColor.dataset.vmColor)},6e3);let shapContainer=modalDialog.querySelector(".shape");shapContainer.innerHTML=slide.getAttribute("data-shape");let modalResetButton=modalDialog.querySelector(".reset-vm");modalResetButton&&modalResetButton.addEventListener("click",function(){let slideSKU=modalDialog.querySelector(".swiper-slide.vm-swiper-slide.selected").dataset.sku;window["fp-virtual-mirror-add-on"].fpVirtualMirror.setFrame(slideSKU),window._fitmixInstanceAll.startVto("live"),window._fitmixInstanceAll.addCss("[vto-advanced-watermark] { display: none !important; }")})}}}else console.warn("Modal dialog element not found")}).catch(function(error){console.error("Error fetching modal dialog:",error)})},addModalOpener:function(container,visible,triggerSelector){this.fetchPageContent().then(parsedHtml=>{var modalOpener=parsedHtml.querySelector("modal-opener");if(modalOpener){if(visible||(modalOpener.style.display="none"),modalOpener.classList.add("all-vm-opener"),container.appendChild(modalOpener),this.initVirtualMirrorInlineScript(),triggerSelector){const triggerElements=document.querySelectorAll(triggerSelector);triggerElements.length>0?triggerElements.forEach(function(triggerElement){triggerElement.addEventListener("click",function(event){event.preventDefault(),window._fpEvent&&window._fpEvent.push(["eventConversion",{value:"fp_vm_button_click"}]),document.querySelector("[data-carousel-vm] .swiper-slide:nth-child(1)")&&document.querySelector("[data-carousel-vm] .swiper-slide:nth-child(1)").click(),document.querySelector(".all-vm-opener button").click()})}):console.warn("Trigger element not found for selector:",triggerSelector)}}else console.warn("Modal opener element not found")}).catch(error=>{console.error("Error fetching modal opener:",error)})},initVirtualMirrorInlineScript:function(){const params={apiKey:"tIMYszmvsul1ftaVCOiBtFwg2WKs1ZKrGrxtCwQ3",css:"[vto-advanced-watermark] { display: none !important; }"},launchBtns=document.querySelectorAll("[data-fitmix-color].all-vm-opener button"),vmFieldsets=document.querySelectorAll("[data-vm-swatches]");if(document.querySelectorAll("[data-fitmix-sku].all-vm-opener:not([disabled])").length<2&&vmFieldsets.forEach(fieldset=>{fieldset.classList.add("hide")}),launchBtns.forEach(btn=>{btn.addEventListener("click",function(){const currentColor=btn.dataset.fitmixColor,vmColorSwatches=Array.from(document.querySelectorAll("[data-fitmix-sku]"));let matchingSwatch=vmColorSwatches.find(swatch=>swatch.dataset.vmColor===currentColor);matchingSwatch||(matchingSwatch=vmColorSwatches[0]),window["fp-virtual-mirror-add-on"].fpVirtualMirror.setFitmix(matchingSwatch),window.waitForCondition(()=>window.Swiper&&typeof window.Swiper=="function"&&document.querySelector(".global-vm-popup [data-carousel-vm]"),()=>{window["fp-virtual-mirror-add-on"].fpVirtualMirror.vmSwiper()},50,1e4)})}),vmFieldsets.forEach(fieldset=>{fieldset.addEventListener("change",()=>{const selectedSKU=fieldset.querySelector("input:checked").dataset.fitmixSku;window["fp-virtual-mirror-add-on"].fpVirtualMirror.setFrame(selectedSKU)})}),window.location.pathname.includes("products")&&window.location.search.includes("show_vm")){const button=document.querySelector("[data-fitmix-color] button");button&&button.click()}else(window.location.pathname.includes("pages/find-your-look")||window.location.pathname.includes("/collections"))&&window.location.search.includes("show_vm")&&window.waitForCondition(()=>window.Swiper&&typeof window.Swiper=="function",()=>{const button=document.querySelector("[data-fitmix-color] button");button&&button.click()},50,1e4)},loadAssets:function(){return Promise.all([this.loadStyle("/cdn/shop/t/690/assets/virtual-mirror.css"),this.loadScript("//vto-advanced-integration-api.fittingbox.com/index.js")])},init:function(options){options=options||{};const{addDialog=!0,addModalOpener=!0,dialogContainer=document.body,openerContainer=document.body,triggerSelector=null}=options;this.loadAssets().then(()=>{addDialog&&this.addDialog(dialogContainer),this.addModalOpener(openerContainer,addModalOpener,triggerSelector),window._fpEvent=window._fpEvent||[],window._fpEvent.push(["eventConversion",{value:"vm_popup_init"}])}).catch(error=>{console.error("Error loading assets: ",error)})},fpVirtualMirror:{populateSwatches:function(btn){const modalFieldset=document.querySelector("[data-vm-plp-fieldset]"),vmProductHandle=btn.dataset.plpVmHandle,vmProductColor=btn.dataset.fitmixColor,currentProduct=JSON.parse(document.querySelector("[data-plp-vm-json]").textContent).find(item=>item.handle===vmProductHandle),currentProductColors=currentProduct.colors.split(" | ").filter(n=>n),currentProductSkus=currentProduct.skus.split(" | ").filter(n=>n);modalFieldset.getAttribute("data-vm-plp-fieldset")!==vmProductHandle+" | "+vmProductColor&&(modalFieldset.setAttribute("data-vm-plp-fieldset",vmProductHandle+" | "+vmProductColor),modalFieldset.innerHTML="",currentProductColors.forEach((color,i2)=>{var swatchEl=document.querySelector('label[title="'+color+'"]'),swatchStyle=swatchEl?swatchEl.getAttribute("style"):"";const colorSwatch=`
          <input 
            type="radio" id="plp-vm-swatch--${i2}"
            name="virtual-mirror__input--btn"
            value="${currentProductSkus[i2]}"
            data-fitmix-sku="${currentProductSkus[i2]}" 
            data-vm-color="${color}"
            ${vmProductColor===color?"checked":""}
          >
          <label 
            for="plp-vm-swatch--${i2}"
            class="virtual-mirror__input--label label--swatch"
            style="${swatchStyle}"> 
            ${color}
          </label>`;modalFieldset.innerHTML+=colorSwatch}))},populateShopBtn:function(btn){let slide=document.querySelector(".swiper-slide.vm-swiper-slide.selected"),slideTitle=slide.getAttribute("data-vm-product-title"),slideURL=slide.getAttribute("data-vm-product-url"),slidePrice=slide.getAttribute("data-price"),slideShape=slide.getAttribute("data-shape");document.querySelectorAll("[data-product-shop]").forEach(function(e){e.innerHTML="Shop "+slideTitle}),document.querySelectorAll("[data-product-shop]").forEach(function(e){e.setAttribute("href",slideURL)})},setFitmix:function(swatch){swatch.checked=!0;let fitmixSKU=swatch.dataset.fitmixSku;document.querySelector(".virtual-mirror-popup-modal.all-vm-popup #fitmixContainer")&&(document.querySelector(".virtual-mirror-popup-modal.all-vm-popup #fitmixContainer").id="fitmixContainerAll"),window._fitmixInstanceAll=FitMix.createWidget("fitmixContainerAll",{apiKey:"tIMYszmvsul1ftaVCOiBtFwg2WKs1ZKrGrxtCwQ3",css:"[vto-advanced-watermark] { display: none !important; }"},function(){window["fp-virtual-mirror-add-on"].fpVirtualMirror.setFrame(fitmixSKU),window._fitmixInstanceAll.startVto("live"),window._fitmixInstanceAll.addCss("[vto-advanced-watermark] { display: none !important; }"),window["fp-virtual-mirror-add-on"].showUpdatedPopup&&window._fitmixInstanceAll.addCss("#vtoAdvLive > vto-advanced-bottom-right-action-button-ui > button { display: none !important; }")})},setFrame:function(sku){window._fitmixInstanceAll.setFrame(sku)},vmSwiper:function(){window["fp-virtual-mirror-add-on"].showUpdatedPopup?(console.log(document.querySelector(".global-vm-popup [data-carousel-vm]").swiper),new Swiper(".global-vm-popup [data-carousel-vm]",{slidesPerView:"auto",spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0,type:"custom",renderCustom:function(swiper,current,total){var out="";for(i=1;i<total+1;i++)i==current?out=out+'<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>':out=out+'<span class="swiper-pagination-bullet" tabindex='+i+' role="button" aria-label="Go to slide '+i+1+'"></span>';return out}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})):new Swiper(".global-vm-popup [data-carousel-vm]",{slidesPerView:2,grid:{rows:1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".global-vm-popup .swiper-pagination",clickable:!0},watchOverflow:!0,spaceBetween:12,breakpoints:{480:{slidesPerView:3,grid:{rows:2},spaceBetween:30}}});var vmSlides=document.querySelectorAll(".vm-swiper-slide");vmSlides.forEach(slide=>{slide.addEventListener("click",function(){let slideSKU=slide.dataset.sku;window["fp-virtual-mirror-add-on"].fpVirtualMirror.setFrame(slideSKU),document.querySelector(".vm-swiper-slide.selected").classList.remove("selected"),slide.classList.add("selected");let slideTitle=slide.getAttribute("data-vm-product-title"),slideURL=slide.getAttribute("data-vm-product-url"),slidePrice=slide.getAttribute("data-price"),slideShape=slide.getAttribute("data-shape");if(slideShape){let shapContainer=document.querySelector(".vm-pop-up-new-design .shape");shapContainer.innerHTML=slideShape}document.querySelectorAll("[data-product-shop]").forEach(function(e){e.innerHTML="Shop "+slideTitle}),document.querySelectorAll("[data-product-shop]").forEach(function(e){e.setAttribute("href",slideURL)});const vmSwatches=document.querySelectorAll("[data-vm-product]");let activeSwatches=0;vmSwatches.forEach(swatch=>{swatch.dataset.vmProduct===slide.dataset.vmProductHandle?(swatch.disabled=!1,activeSwatches++):swatch.disabled=!0,swatch.dataset.fitmixSku===slide.dataset.sku&&(swatch.checked=!0)}),activeSwatches<2&&document.querySelector(".vm-form__input").classList.add("hide");let selectedColorSpan=document.querySelector(".vm-selected-color");const selectedColor=document.querySelector(".virtual-mirror__input.vm-form__input input:checked");selectedColorSpan&&selectedColor&&(selectedColorSpan.innerHTML=selectedColor.dataset.vmColor),setTimeout(function(){let selectedColorSpan2=document.querySelector(".vm-selected-color");const selectedColor2=document.querySelector(".virtual-mirror__input.vm-form__input input:checked");selectedColorSpan2&&selectedColor2&&(selectedColorSpan2.innerHTML=selectedColor2.dataset.vmColor)},200),setTimeout(function(){let selectedColorSpan2=document.querySelector(".vm-selected-color");const selectedColor2=document.querySelector(".virtual-mirror__input.vm-form__input input:checked");selectedColorSpan2&&selectedColor2&&(selectedColorSpan2.innerHTML=selectedColor2.dataset.vmColor)},1e3)})})}}};
//# sourceMappingURL=/cdn/shop/t/690/assets/virtual-mirror-global-object.js.map
