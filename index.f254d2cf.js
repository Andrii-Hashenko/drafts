function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,i,r={};n=void 0!==t?t:"undefined"!=typeof window?window:r,i=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",r="Warning",o="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},l=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=l(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!c("body"))return!1;t||f.Notify.init({});var g=l(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var m={};"object"==typeof d?m=d:"object"==typeof p&&(m=p),t=l(!0,t,m)}var y,v,_=t[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(y=u,(v=e.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=l(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(_.fontAwesomeIconColor=_.background),t.cssAnimation||(t.cssAnimationDuration=0);var b=e.document.getElementById(s.wrapID)||e.document.createElement("div");if(b.id=s.wrapID,b.style.width=t.width,b.style.zIndex=t.zindex,b.style.opacity=t.opacity,"center-center"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.top=t.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===t.position?(b.style.left=t.distance,b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===t.position?(b.style.right=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.left="auto"):"left-top"===t.position?(b.style.left=t.distance,b.style.top=t.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===t.position?(b.style.left=t.distance,b.style.bottom=t.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=t.distance,b.style.top=t.distance,b.style.left="auto",b.style.bottom="auto"),t.backOverlay){var w=e.document.getElementById(s.overlayID)||e.document.createElement("div");w.id=s.overlayID,w.style.width="100%",w.style.height="100%",w.style.position="fixed",w.style.zIndex=t.zindex-1,w.style.left=0,w.style.top=0,w.style.right=0,w.style.bottom=0,w.style.background=_.backOverlayColor||t.backOverlayColor,w.className=t.cssAnimation?"nx-with-animation":"",w.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(s.overlayID)||e.document.body.appendChild(w)}e.document.getElementById(s.wrapID)||e.document.body.appendChild(b);var k=e.document.createElement("div");k.id=t.ID+"-"+h,k.className=t.className+" "+_.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=t.fontSize,k.style.color=_.textColor,k.style.background=_.background,k.style.borderRadius=t.borderRadius,k.style.pointerEvents="all",t.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(k.style.animationDuration=t.cssAnimationDuration+"ms");var E="";if(t.closeButton&&"function"!=typeof d&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+_.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)k.innerHTML='<i style="color:'+_.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+_.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?E:"");else{var I="";a===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===o&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+_.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?E:"")}else k.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?E:"");if("left-bottom"===t.position||"right-bottom"===t.position){var C=e.document.getElementById(s.wrapID);C.insertBefore(k,C.firstChild)}else e.document.getElementById(s.wrapID).appendChild(k);var S=e.document.getElementById(k.id);if(S){var x,T,N=function(){S.classList.add("nx-remove");var t=e.document.getElementById(s.overlayID);t&&b.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(x)},O=function(){if(S&&null!==S.parentNode&&S.parentNode.removeChild(S),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var t=e.document.getElementById(s.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(T)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&S.addEventListener("click",(function(){"function"==typeof d&&d(),N();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var R=function(){x=setTimeout((function(){N()}),t.timeout),T=setTimeout((function(){O()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(S.addEventListener("mouseenter",(function(){S.classList.add("nx-paused"),clearTimeout(x),clearTimeout(T)})),S.addEventListener("mouseleave",(function(){S.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&h>0)for(var P=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),A=0;A<P.length;A++){var L=P[A];null!==L.parentNode&&L.parentNode.removeChild(L)}t=l(!0,t,g)},f={Notify:{init:function(n){t=l(!0,s,n),function(t,n){if(!c("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=l(!0,t,e)},success:function(e,t,i){d(n,e,t,i)},failure:function(e,t,n){d(i,e,t,n)},warning:function(e,t,n){d(r,e,t,n)},info:function(e,t,n){d(o,e,t,n)}}};return"object"==typeof e.Notiflix?l(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return i(n)})):"object"==typeof r?r=i(n):n.Notiflix=i(n);var o,s,a,c=o={};function l(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function h(e){if(s===setTimeout)return setTimeout(e,0);if((s===l||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:l}catch(e){s=l}try{a="function"==typeof clearTimeout?clearTimeout:u}catch(e){a=u}}();var d,f=[],p=!1,g=-1;function m(){p&&d&&(p=!1,d.length?f=d.concat(f):g=-1,f.length&&y())}function y(){if(!p){var e=h(m);p=!0;for(var t=f.length;t;){for(d=f,f=[];++g<t;)d&&d[g].run();g=-1,t=f.length}d=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===u||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function _(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||p||h(y)},v.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=_,c.addListener=_,c.once=_,c.off=_,c.removeListener=_,c.removeAllListeners=_,c.emit=_,c.prependListener=_,c.prependOnceListener=_,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=!1,w=!1,k="${JSCORE_VERSION}",E=function(e,t){if(!e)throw I(t)},I=function(e){return new Error("Firebase Database ("+k+") INTERNAL ASSERT FAILED: "+e)},C=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(C(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw new x;const c=r<<2|o>>4;if(i.push(c),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T=function(e){const t=C(e);return S.encodeByteArray(t,!0)},N=function(e){return T(e).replace(/\./g,"")},O=function(e){try{return S.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){return P(void 0,e)}function P(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=P(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,L=()=>{try{return A()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&O(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},D=e=>{var t,n;return null===(n=null===(t=L())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},M=e=>{const t=D(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},U=e=>{var t;return null===(t=L())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[N(JSON.stringify({alg:"none",type:"JWT"})),N(JSON.stringify(o)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function q(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(F())}function H(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function z(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function W(){const e=F();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function V(){return!0===b||!0===w}function $(){try{return"object"==typeof indexedDB}catch(e){return!1}}class K extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G.prototype.create)}}class G{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(J,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new K(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const J=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){return JSON.parse(e)}function Q(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=Y(O(o[0])||""),n=Y(O(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Z=function(e){const t=X(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ee=function(e){const t=X(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ne(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ie(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function re(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function oe(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(se(n)&&se(o)){if(!oe(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function se(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ce(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function le(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^s&(a^c),r=1518500249):(i=s^a^c,r=1859775393):e<60?(i=s&a|c&(s|a),r=2400959708):(i=s^a^c,r=3395469782);const t=(o<<5|o>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(0===o)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function he(e,t){const n=new de(e,t);return n.subscribe.bind(n)}class de{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=fe),void 0===i.error&&(i.error=fe),void 0===i.complete&&(i.complete=fe);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function fe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,E(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},me=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ye(e){return e&&e._delegate?e._delegate:e}class ve{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new j;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class be{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _e(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=[];var ke,Ee;(Ee=ke||(ke={}))[Ee.DEBUG=0]="DEBUG",Ee[Ee.VERBOSE=1]="VERBOSE",Ee[Ee.INFO=2]="INFO",Ee[Ee.WARN=3]="WARN",Ee[Ee.ERROR=4]="ERROR",Ee[Ee.SILENT=5]="SILENT";const Ie={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Ce=ke.INFO,Se={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},xe=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Se[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Te{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ie[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Ce,this._logHandler=xe,this._userLogHandler=null,we.push(this)}}let Ne,Oe;const Re=new WeakMap,Pe=new WeakMap,Ae=new WeakMap,Le=new WeakMap,De=new WeakMap;let Me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Pe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ae.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ue(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Oe||(Oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Fe(this),t),Be(Re.get(this))}:function(...t){return Be(e.apply(Fe(this),t))}:function(t,...n){const i=e.call(Fe(this),t,...n);return Ae.set(i,t.sort?t.sort():[t]),Be(i)}}function je(e){return"function"==typeof e?Ue(e):(e instanceof IDBTransaction&&function(e){if(Pe.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));Pe.set(e,t)}(e),t=e,(Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Me):e);var t}function Be(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(Be(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Re.set(t,e)})).catch((()=>{})),De.set(t,e),t}(e);if(Le.has(e))return Le.get(e);const t=je(e);return t!==e&&(Le.set(e,t),De.set(t,e)),t}const Fe=e=>De.get(e);function qe(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=Be(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(Be(s.result),e.oldVersion,e.newVersion,Be(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const He=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],We=new Map;function Ve(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(We.get(t))return We.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ze.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!He.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return We.set(t,o),o}Me=(e=>({...e,get:(t,n,i)=>Ve(t,n)||e.get(t,n,i),has:(t,n)=>!!Ve(t,n)||e.has(t,n)}))(Me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ke=new Te("@firebase/app"),Ge={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Je=new Map,Ye=new Map;function Qe(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xe(e){const t=e.name;if(Ye.has(t))return Ke.debug(`There were multiple attempts to register component ${t}.`),!1;Ye.set(t,e);for(const t of Je.values())Qe(t,e);return!0}function Ze(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const et=new G("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ve("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw et.create("bad-app-name",{appName:String(r)});var o;if(n||(n=null===(o=L())||void 0===o?void 0:o.config),!n)throw et.create("no-options");const s=Je.get(r);if(s){if(oe(n,s.options)&&oe(i,s.config))return s;throw et.create("duplicate-app",{appName:r})}const a=new be(r);for(const e of Ye.values())a.addComponent(e);const c=new tt(n,i,a);return Je.set(r,c),c}function it(e="[DEFAULT]"){const t=Je.get(e);if(!t&&"[DEFAULT]"===e)return nt();if(!t)throw et.create("no-app",{appName:e});return t}function rt(e,t,n){var i;let r=null!==(i=Ge[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ke.warn(e.join(" "))}Xe(new ve(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let ot=null;function st(){return ot||(ot=qe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw et.create("idb-open",{originalErrorMessage:e.message})}))),ot}async function at(e,t){try{const n=(await st()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,ct(e)),n.done}catch(e){if(e instanceof K)Ke.warn(e.message);else{const t=et.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}function ct(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ut();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ut(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),dt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),dt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=N(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ht(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function ut(){return(new Date).toISOString().substring(0,10)}class ht{async runIndexedDBEnvironmentCheck(){return!!$()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await st()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ct(e))}catch(e){if(e instanceof K)Ke.warn(e.message);else{const t=et.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return at(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return at(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function dt(e){return N(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;ft="",Xe(new ve("platform-logger",(e=>new $e(e)),"PRIVATE")),Xe(new ve("heartbeat",(e=>new lt(e)),"PRIVATE")),rt("@firebase/app","0.9.8",ft),rt("@firebase/app","0.9.8","esm2017"),rt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
rt("firebase","9.20.0","app");function pt(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function gt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mt=gt,yt=new G("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),vt=new Te("@firebase/auth");function _t(e,...t){vt.logLevel<=ke.ERROR&&vt.error(`Auth (9.20.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,...t){throw It(e,...t)}function wt(e,...t){return It(e,...t)}function kt(e,t,n){const i=Object.assign(Object.assign({},mt()),{[t]:n});return new G("auth","Firebase",i).create(t,{appName:e.name})}function Et(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&bt(e,"argument-error"),kt(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function It(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return yt.create(e,...t)}function Ct(e,t,...n){if(!e)throw It(t,...n)}function St(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _t(t),new Error(t)}function xt(e,t){e||St(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Nt(){return"http:"===Ot()||"https:"===Ot()}function Ot(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Nt()||H()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{get(){return Rt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,xt(t>e,"Short delay should be less than long delay!"),this.isMobile=q()||z()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Mt=new Pt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function jt(e,t,n,i,r={}){return Bt(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const s=ae(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Lt.fetch()(qt(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Bt(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Dt),t);try{const t=new Ht(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zt(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw zt(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw zt(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw zt(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw kt(e,a,s);bt(e,a)}}catch(t){if(t instanceof K)throw t;bt(e,"network-request-failed",{message:String(t)})}}async function Ft(e,t,n,i,r={}){const o=await jt(e,t,n,i,r);return"mfaPendingCredential"in o&&bt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function qt(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?At(e.config,r):`${e.config.apiScheme}://${r}`}class Ht{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(wt(this.auth,"network-request-failed"))),Mt.get())}))}}function zt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=wt(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){return 1e3*Number(e)}function $t(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return _t("JWT malformed, contained fewer than 3 sections"),null;try{const e=O(n);return e?JSON.parse(e):(_t("Failed to decode base64 JWT payload"),null)}catch(e){return _t("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Kt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof K&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Gt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Kt(e,async function(e,t){return jt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Ct(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=pt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=s,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Jt(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ct(e.idToken,"internal-error"),Ct(void 0!==e.idToken,"internal-error"),Ct(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$t(e);return Ct(t,"internal-error"),Ct(void 0!==t.exp,"internal-error"),Ct(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ct(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Bt(e,{},(async()=>{const n=ae({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=qt(e,i,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Lt.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Qt;return n&&(Ct("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(Ct("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(Ct("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qt,this.toJSON())}_performRefresh(){return St("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){Ct("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Zt{async getIdToken(e){const t=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return Ct(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ye(e),i=await n.getIdToken(t),r=$t(i);Ct(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Wt(Vt(r.auth_time)),issuedAtTime:Wt(Vt(r.iat)),expirationTime:Wt(Vt(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ye(e);await Yt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ct(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ct(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Yt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kt(this,async function(e,t){return jt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:k}=t;Ct(v&&k,e,"internal-error");const E=Qt.fromJSON(this.name,k);Ct("string"==typeof v,e,"internal-error"),Xt(u,e.name),Xt(h,e.name),Ct("boolean"==typeof _,e,"internal-error"),Ct("boolean"==typeof b,e,"internal-error"),Xt(d,e.name),Xt(f,e.name),Xt(p,e.name),Xt(g,e.name),Xt(m,e.name),Xt(y,e.name);const I=new Zt({uid:v,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new Qt;i.updateFromServerResponse(t);const r=new Zt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Yt(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=pt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Jt(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Map;function tn(e){xt(e instanceof Function,"Expected a class definition");let t=en.get(e);return t?(xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,en.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}nn.type="NONE";const rn=nn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(e,t,n){return`firebase:${e}:${t}:${n}`}class sn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new sn(tn(rn),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||tn(rn);const o=on(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=Zt._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new sn(r,e,n)):new sn(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=on(this.userKey,i.apiKey,r),this.fullPersistenceKey=on("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fn(t))return"Blackberry";if(pn(t))return"Webos";if(ln(t))return"Safari";if((t.includes("chrome/")||un(t))&&!t.includes("edge/"))return"Chrome";if(dn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function cn(e=F()){return/firefox\//i.test(e)}function ln(e=F()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function un(e=F()){return/crios\//i.test(e)}function hn(e=F()){return/iemobile/i.test(e)}function dn(e=F()){return/android/i.test(e)}function fn(e=F()){return/blackberry/i.test(e)}function pn(e=F()){return/webos/i.test(e)}function gn(e=F()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function mn(){return W()&&10===document.documentMode}function yn(e=F()){return gn(e)||dn(e)||pn(e)||fn(e)||/windows phone/i.test(e)||hn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vn(e,t=[]){let n;switch(e){case"Browser":n=an(F());break;case"Worker":n=`${an(F())}-${e}`;break;default:n=e}return`${n}/JsCore/9.20.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t){return jt(e,"GET","/v2/recaptchaConfig",Ut(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e){return void 0!==e&&void 0!==e.enterprise}class wn{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=wt("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function En(e){return`__${e}${Math.floor(1e6*Math.random())}`}class In{async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;bn(r)?r.enterprise.ready((()=>{try{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((e=>{i(e)}))}catch(e){i(e)}})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{_n(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new wn(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&bn(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));kn("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=Tn(e)}}async function Cn(e,t,n,i=!1){const r=new In(e);let o;try{o=await r.verify(n)}catch(e){o=await r.verify(n,!0)}const s=Object.assign({},t);return i?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tn(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ct(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ye(e):null;return t&&Ct(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ct(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(tn(e))}))}async initializeRecaptchaConfig(){const e=await _n(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new wn(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new In(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new G("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tn(e)||this._popupRedirectResolver;Ct(t,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[tn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Ct(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ct(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){vt.logLevel<=ke.WARN&&vt.warn(`Auth (9.20.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nn(this),this.idTokenSubscription=new Nn(this),this.beforeStateQueue=new Sn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function Tn(e){return ye(e)}class Nn{get next(){return Ct(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=he((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e,t,n){const i=Tn(e);Ct(i._canInitEmulator,i,"emulator-config-failed"),Ct(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=Rn(t),{host:s,port:a}=function(e){const t=Rn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Pn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Pn(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Rn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Pn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class An{toJSON(){return St("not implemented")}_getIdTokenResponse(e){return St("not implemented")}_linkToIdToken(e,t){return St("not implemented")}_getReauthenticationResolver(e){return St("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(e,t){return jt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Dn(e,t){return Ft(e,"POST","/v1/accounts:signInWithPassword",Ut(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn extends An{static _fromEmailAndPassword(e,t){return new Mn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Mn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Cn(e,n,"signInWithPassword");return Dn(e,t)}return Dn(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Cn(e,n,"signInWithPassword");return Dn(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithEmailLink",Ut(e,t))}(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ln(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithEmailLink",Ut(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Un(e,t){return Ft(e,"POST","/v1/accounts:signInWithIdp",Ut(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends An{static _fromParams(e){const t=new jn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):bt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=pt(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new jn(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return Un(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Un(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Un(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ae(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn extends An{static _fromVerification(e,t){return new Fn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",Ut(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",Ut(e,t));if(n.temporaryProof)throw zt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ft(e,"POST","/v1/accounts:signInWithPhoneNumber",Ut(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Bn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Fn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{static parseLink(e){const t=function(e){const t=ce(le(e)).link,n=t?ce(le(t)).deep_link_id:null,i=ce(le(e)).deep_link_id;return(i?ce(le(i)).link:null)||i||n||t||e}(e);try{return new qn(t)}catch(e){return null}}constructor(e){var t,n,i,r,o,s;const a=ce(le(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Ct(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hn{static credential(e,t){return Mn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=qn.parseLink(t);return Ct(n,"argument-error"),Mn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Hn.PROVIDER_ID}}Hn.PROVIDER_ID="password",Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends zn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vn extends Wn{static credential(e){return jn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Vn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $n extends Wn{static credential(e,t){return jn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $n.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}$n.GOOGLE_SIGN_IN_METHOD="google.com",$n.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn extends Wn{static credential(e){return jn._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Kn.GITHUB_SIGN_IN_METHOD="github.com",Kn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gn extends Wn{static credential(e,t){return jn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Gn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jn(e,t){return Ft(e,"POST","/v1/accounts:signUp",Ut(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn.TWITTER_SIGN_IN_METHOD="twitter.com",Gn.PROVIDER_ID="twitter.com";class Yn{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Zt._fromIdTokenResponse(e,n,i),o=Qn(n);return new Yn({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qn(n);return new Yn({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Qn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xn extends K{static _fromErrorAndOperation(e,t,n,i){return new Xn(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Xn.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Zn(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Xn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e,t,n=!1){const i=await Kt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Yn._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ti(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await Kt(e,Zn(i,r,t,e),n);Ct(o.idToken,i,"internal-error");const s=$t(o.idToken);Ct(s,i,"internal-error");const{sub:a}=s;return Ct(e.uid===a,i,"user-mismatch"),Yn._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&bt(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(e,t,n=!1){const i="signIn",r=await Zn(e,i,t),o=await Yn._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function ii(e,t){return ni(Tn(e),t)}async function ri(e,t,n){var i;const r=Tn(e),o={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await Cn(r,o,"signUpPassword");s=Jn(r,e)}else s=Jn(r,o).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Cn(r,o,"signUpPassword");return Jn(r,e)}return Promise.reject(e)}));const a=await s.catch((e=>Promise.reject(e))),c=await Yn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function oi(e,t,n){return ii(ye(e),Hn.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends si{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);mn()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=F();return ln(e)||gn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=yn(),this._shouldAllowMigration=!0}}ai.type="LOCAL";const ci=ai;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends si{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}li.type="SESSION";const ui=li;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new hi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.receivers=[];class fi{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const c=di("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gi(){return void 0!==pi().WorkerGlobalScope&&"function"==typeof pi().importScripts}class mi{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function yi(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function vi(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new mi(e).toPromise()}(),t(await vi()))}))}))}async function _i(e,t,n){const i=yi(e,!0).put({fbase_key:t,value:n});return new mi(i).toPromise()}function bi(e,t){const n=yi(e,!0).delete(t);return new mi(n).toPromise()}class wi{async _openDb(){return this.db||(this.db=await vi()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hi._getInstance(gi()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new fi(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vi();return await _i(e,"__sak","1"),await bi(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>_i(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=yi(e,!1).get(t),i=await new mi(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>bi(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=yi(e,!1).getAll();return new mi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}wi.type="LOCAL";const ki=wi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
En("rcb"),new Pt(3e4,6e4);async function Ei(e,t,n){var i;const r=await n.verify();try{let o;if(Ct("string"==typeof r,e,"argument-error"),Ct("recaptcha"===n.type,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){Ct("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return jt(e,"POST","/v2/accounts/mfaEnrollment:start",Ut(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Ct("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;Ct(n,e,"missing-multi-factor-info");const s=await function(e,t){return jt(e,"POST","/v2/accounts/mfaSignIn:start",Ut(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return jt(e,"POST","/v1/accounts:sendVerificationCode",Ut(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ii{verifyPhoneNumber(e,t){return Ei(this.auth,e,ye(t))}static credential(e,t){return Fn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ii.credentialFromTaggedObject(t)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fn._fromTokenResponse(t,n):null}constructor(e){this.providerId=Ii.PROVIDER_ID,this.auth=Tn(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ci(e,t){return t?tn(t):(Ct(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ii.PROVIDER_ID="phone",Ii.PHONE_SIGN_IN_METHOD="phone";class Si extends An{_getIdTokenResponse(e){return Un(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Un(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Un(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function xi(e){return ni(e.auth,new Si(e),e.bypassAuthState)}function Ti(e){const{auth:t,user:n}=e;return Ct(n,t,"internal-error"),ti(n,new Si(e),e.bypassAuthState)}async function Ni(e){const{auth:t,user:n}=e;return Ct(n,t,"internal-error"),ei(n,new Si(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xi;case"linkViaPopup":case"linkViaRedirect":return Ni;case"reauthViaPopup":case"reauthViaRedirect":return Ti;default:bt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new Pt(2e3,1e4);async function Pi(e,t,n){const i=Tn(e);Et(e,t,zn);const r=Ci(i,n);return new Ai(i,"signInViaPopup",t,r).executeNotNull()}class Ai extends Oi{async executeNotNull(){const e=await this.execute();return Ct(e,this.auth,"internal-error"),e}async onExecution(){xt(1===this.filter.length,"Popup operations only handle one event");const e=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(wt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ri.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}}Ai.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Li=new Map;class Di extends Oi{async execute(){let e=Li.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ji(t),i=Ui(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Li.set(this.auth._key(),e)}return this.bypassAuthState||Li.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Mi(e,t){Li.set(e._key(),t)}function Ui(e){return tn(e._redirectPersistence)}function ji(e){return on("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e,t,n=!1){const i=Tn(e),r=Ci(i,t),o=new Di(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class Fi{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hi(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(qi(e))}saveEventToCache(e){this.cachedEventUids.add(qi(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function qi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wi=/^https?/;async function Vi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return jt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if($i(e))return}catch(e){}bt(e,"unauthorized-domain")}function $i(e){const t=Tt(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Wi.test(n))return!1;if(zi.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Pt(3e4,6e4);function Gi(){const e=pi().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ji=null;function Yi(e){return Ji=Ji||function(e){return new Promise(((t,n)=>{var i,r,o;function s(){Gi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gi(),n(wt(e,"network-request-failed"))},timeout:Ki.get()})}if(null===(r=null===(i=pi().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=pi().gapi)||void 0===o?void 0:o.load)){const t=En("iframefcb");return pi()[t]=()=>{gapi.load?s():n(wt(e,"network-request-failed"))},kn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Ji=null,e}))}(e),Ji}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new Pt(5e3,15e3),Xi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function er(e){const t=e.config;Ct(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?At(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.20.0"},r=Zi.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${ae(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const tr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function ir(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tr),{width:i.toString(),height:r.toString(),top:o,left:s}),l=F().toLowerCase();n&&(a=un(l)?"_blank":n),cn(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=F()){var t;return gn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new nr(null);const h=window.open(t||"",a,u);Ct(h,e,"popup-blocked");try{h.focus()}catch(e){}return new nr(h)}const rr=encodeURIComponent("fac");async function or(e,t,n,i,r,o){Ct(e.config.authDomain,e,"auth-domain-config-required"),Ct(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.20.0",eventId:r};if(t instanceof zn){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ie(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof Wn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${rr}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?At(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ae(a).slice(1)}${l}`}const sr=class{async _openPopup(e,t,n,i){var r;xt(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return ir(e,await or(e,t,n,Tt(),i),di())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){pi().location.href=e}(await or(e,t,n,Tt(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(xt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Yi(e),n=pi().gapi;return Ct(n,e,"internal-error"),t.open({where:document.body,url:er(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xi,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=wt(e,"network-request-failed"),o=pi().setTimeout((()=>{i(r)}),Qi.get());function s(){pi().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new Fi(e);return t.register("authEvent",(t=>{Ct(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),bt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yn()||ln()||gn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ui,this._completeRedirectFn=Bi,this._overrideRedirectResult=Mi}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ct(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cr=U("authIdTokenMaxAge")||300;let lr=null;var ur;ur="Browser",Xe(new ve("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:s}=n.options;Ct(o&&!o.includes(":"),"invalid-api-key",{appName:n.name}),Ct(!(null==s?void 0:s.includes(":")),"argument-error",{appName:n.name});const a={apiKey:o,authDomain:s,clientPlatform:ur,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vn(ur)},c=new xn(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(tn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Xe(new ve("auth-internal",(e=>{const t=Tn(e.getProvider("auth").getImmediate());return new ar(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),rt("@firebase/auth","0.23.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ur)),rt("@firebase/auth","0.23.0","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hr="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Y(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return te(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new dr(t)}}catch(e){}return new fr},gr=pr("localStorage"),mr=pr("sessionStorage"),yr=new Te("@firebase/database"),vr=function(){let e=1;return function(){return e++}}(),_r=function(e){const t=ge(e),n=new ue;n.update(t);const i=n.digest();return S.encodeByteArray(i)},br=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=br.apply(null,i):t+="object"==typeof i?Q(i):i,t+=" "}return t};let wr=null,kr=!0;const Er=function(e,t){E(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(yr.logLevel=ke.VERBOSE,wr=yr.log.bind(yr),t&&mr.set("logging_enabled",!0)):"function"==typeof e?wr=e:(wr=null,mr.remove("logging_enabled"))},Ir=function(...e){if(!0===kr&&(kr=!1,null===wr&&!0===mr.get("logging_enabled")&&Er(!0)),wr){const t=br.apply(null,e);wr(t)}},Cr=function(e){return function(...t){Ir(e,...t)}},Sr=function(...e){const t="FIREBASE INTERNAL ERROR: "+br(...e);yr.error(t)},xr=function(...e){const t=`FIREBASE FATAL ERROR: ${br(...e)}`;throw yr.error(t),new Error(t)},Tr=function(...e){const t="FIREBASE WARNING: "+br(...e);yr.warn(t)},Nr=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Or=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=jr(e),i=jr(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Rr=function(e,t){return e===t?0:e<t?-1:1},Pr=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Q(t))},Ar=function(e){if("object"!=typeof e||null===e)return Q(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Q(t[i]),n+=":",n+=Ar(e[t[i]]);return n+="}",n},Lr=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Dr(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Mr=function(e){E(!Nr(e),"Invalid JSON number");const t=1023;let n,i,r,o,s;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(s=0;s<64;s+=8){let e=parseInt(c.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Ur=new RegExp("^-?(0*)\\d{1,10}$"),jr=function(e){if(Ur.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Br=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Tr("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Fr=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Tr(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ir("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Tr(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class zr{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}zr.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,o="",s=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gr.get("host:"+e)||this._host}}function $r(e,t,n){let i;if(E("string"==typeof t,"typeof type must == string"),E("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Dr(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{incrementCounter(e,t=1){te(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return R(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={},Jr={};function Yr(e){const t=e.toString();return Gr[t]||(Gr[t]=new Kr),Gr[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Br((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Qr(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(V()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zr(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Wr.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Xr.forceAllow_=!0}static forceDisallow(){Xr.forceDisallow_=!0}static isAvailable(){return!V()&&(!!Xr.forceAllow_||!(Xr.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=T(t),i=Lr(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(V())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cr(e),this.stats_=Yr(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),$r(t,"long_polling",e))}}class Zr{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ir("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){V()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ir("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,V())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=vr(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Zr.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Ir("frame writing exception"),e.stack&&Ir(e.stack),Ir(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=null;"undefined"!=typeof MozWebSocket?eo=MozWebSocket:"undefined"!=typeof WebSocket&&(eo=WebSocket);class to{static connectionURL_(e,t,n,i,r){const o={v:"5"};return!V()&&"undefined"!=typeof location&&location.hostname&&Wr.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o.ac=i),r&&(o.p=r),$r(e,"websocket",o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gr.set("previous_websocket_failure",!0);try{let e;if(V()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${hr}/${o.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new eo(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){to.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==eo&&!to.forceDisallow_}static previouslyFailed(){return gr.isInMemoryStorage||!0===gr.get("previous_websocket_failure")}markConnectionHealthy(){gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Y(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Lr(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cr(this.connId),this.stats_=Yr(t),this.connURL=to.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}}to.responsesRequiredToBeHealthy=2,to.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class no{static get ALL_TRANSPORTS(){return[Xr,to]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=to&&to.isAvailable();let n=t&&!to.previouslyFailed();if(e.webSocketOnly&&(t||Tr("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[to];else{const e=this.transports_=[];for(const t of no.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);no.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}no.globalTransportInitialized_=!1;class io{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fr((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Pr("t",e),n=Pr("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Pr("t",e),n=Pr("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Pr("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Sr("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Tr("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Fr((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fr((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,o,s,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cr("c:"+this.id+":"),this.transportManager_=new no(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){E(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends oo{static getInstance(){return new so}getInitialEvent(e){return E("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||q()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function co(){return new ao("")}function lo(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function uo(e){return e.pieces_.length-e.pieceNum_}function ho(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ao(e.pieces_,t)}function fo(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function po(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function go(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ao(t,0)}function mo(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ao)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ao(n,0)}function yo(e){return e.pieceNum_>=e.pieces_.length}function vo(e,t){const n=lo(e),i=lo(t);if(null===n)return t;if(n===i)return vo(ho(e),ho(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function _o(e,t){if(uo(e)!==uo(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function bo(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(uo(e)>uo(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class wo{constructor(e,t){this.errorPrefix_=t,this.parts_=po(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=me(this.parts_[e]);ko(this)}}function ko(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Eo(e))}function Eo(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends oo{static getInstance(){return new Io}getInitialEvent(e){return E("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends ro{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Q(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new j,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const o=r.d,s=r.s;Co.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&te(e,"w")){const n=ne(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Tr(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ee(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Z(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Q(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Sr("Unrecognized action received from server: "+Q(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Co.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},c=function(e){E(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?Ir("getToken() completed but was canceled"):(Ir("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,s=new io(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Tr(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Tr(e),a())}}}interrupt(e){Ir("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ir("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ie(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ar(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ao(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Ir("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ir("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";V()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+hr.replace(/\./g,"-")]=1,q()?e["framework.cordova"]=1:z()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=so.getInstance().currentlyOnline();return ie(this.interruptReasons_)&&e}constructor(e,t,n,i,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Co.nextPersistentConnectionId_++,this.log_=Cr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!V())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Io.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&so.getInstance().on("online",this.onOnline_,this)}}Co.nextPersistentConnectionId_=0,Co.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{static Wrap(e,t){return new So(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new So("[MIN_NAME]",e),i=new So("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return So.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To;class No extends xo{static get __EMPTY_NODE(){return To}static set __EMPTY_NODE(e){To=e}compare(e,t){return Or(e.name,t.name)}isDefinedOn(e){throw I("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return So.MIN}maxPost(){return new So("[MAX_NAME]",To)}makePost(e,t){return E("string"==typeof e,"KeyIndex indexValue must always be a string."),new So(e,To)}toString(){return".key"}}const Oo=new No;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Po{copy(e,t,n,i,r){return new Po(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ao.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ao.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Po.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Po.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Po.RED,this.left=null!=i?i:Ao.EMPTY_NODE,this.right=null!=r?r:Ao.EMPTY_NODE}}Po.RED=!0,Po.BLACK=!1;class Ao{insert(e,t){return new Ao(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Po.BLACK,null,null))}remove(e){return new Ao(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Po.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ro(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ro(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ro(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Ao.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lo(e,t){return Or(e.name,t.name)}function Do(e,t){return Or(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo;Ao.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Po(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Uo=function(e){return"number"==typeof e?"number:"+Mr(e):"string:"+e},jo=function(e){if(e.isLeafNode()){const t=e.val();E("string"==typeof t||"number"==typeof t||"object"==typeof t&&te(t,".sv"),"Priority must be a string or number.")}else E(e===Mo||e.isEmpty(),"priority of unexpected type.");E(e===Mo||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Bo,Fo,qo;class Ho{static set __childrenNodeConstructor(e){Bo=e}static get __childrenNodeConstructor(){return Bo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ho(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ho.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yo(e)?this:".priority"===lo(e)?this.priorityNode_:Ho.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ho.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=lo(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(E(".priority"!==n||1===uo(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ho.__childrenNodeConstructor.EMPTY_NODE.updateChild(ho(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uo(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Mr(this.value_):this.value_,this.lazyHash_=_r(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ho.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ho.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Ho.VALUE_TYPE_ORDER.indexOf(t),r=Ho.VALUE_TYPE_ORDER.indexOf(n);return E(i>=0,"Unknown leaf type: "+t),E(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Ho.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,E(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),jo(this.priorityNode_)}}Ho.VALUE_TYPE_ORDER=["object","boolean","number","string"];const zo=new class extends xo{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Or(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return So.MIN}maxPost(){return new So("[MAX_NAME]",new Ho("[PRIORITY-POST]",qo))}makePost(e,t){const n=Fo(e);return new So(t,new Ho("[PRIORITY-POST]",n))}toString(){return".priority"}},Wo=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Wo,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const $o=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Po(a,s.node,Po.BLACK,null,null);{const c=parseInt(o/2,10)+t,l=r(t,c),u=r(c+1,i);return s=e[c],a=n?n(s):s,new Po(a,s.node,Po.BLACK,l,u)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const l=r(o+1,a),u=e[o],h=n?n(u):u;c(new Po(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Po.BLACK):(a(i,Po.BLACK),a(i,Po.RED))}return o}(new Vo(e.length));return new Ao(i||t,o)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko;const Go={};class Jo{static get Default(){return E(Go&&zo,"ChildrenNode.ts has not been loaded"),Ko=Ko||new Jo({".priority":Go},{".priority":zo}),Ko}get(e){const t=ne(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ao?t:null}hasIndex(e){return te(this.indexSet_,e.toString())}addIndex(e,t){E(e!==Oo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(So.Wrap);let o,s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();o=i?$o(n,e.getCompare()):Go;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=o,new Jo(l,c)}addToIndexes(e,t){const n=re(this.indexes_,((n,i)=>{const r=ne(this.indexSet_,i);if(E(r,"Missing index implementation for "+i),n===Go){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(So.Wrap);let o=i.getNext();for(;o;)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),$o(n,r.getCompare())}return Go}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new So(e.name,i))),r.insert(e,e.node)}}));return new Jo(n,this.indexSet_)}removeFromIndexes(e,t){const n=re(this.indexes_,(n=>{if(n===Go)return n;{const i=t.get(e.name);return i?n.remove(new So(e.name,i)):n}}));return new Jo(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;class Qo{static get EMPTY_NODE(){return Yo||(Yo=new Qo(new Ao(Do),null,Jo.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yo}updatePriority(e){return this.children_.isEmpty()?this:new Qo(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Yo:t}}getChild(e){const t=lo(e);return null===t?this:this.getImmediateChild(t).getChild(ho(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(E(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new So(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?Yo:this.priorityNode_;return new Qo(i,o,r)}}updateChild(e,t){const n=lo(e);if(null===n)return t;{E(".priority"!==lo(e)||1===uo(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(ho(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(zo,((o,s)=>{t[o]=s.val(e),n++,r&&Qo.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uo(this.getPriority().val())+":"),this.forEachChild(zo,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":_r(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new So(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new So(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new So(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,So.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,So.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xo?-1:0}withIndex(e){if(e===Oo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Qo(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Oo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(zo),n=t.getIterator(zo);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Oo?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&jo(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Qo.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Xo=new class extends Qo{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Qo.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Ao(Do),Qo.EMPTY_NODE,Jo.Default)}};Object.defineProperties(So,{MIN:{value:new So("[MIN_NAME]",Qo.EMPTY_NODE)},MAX:{value:new So("[MAX_NAME]",Xo)}}),No.__EMPTY_NODE=Qo.EMPTY_NODE,Ho.__childrenNodeConstructor=Qo,Mo=Xo,function(e){qo=e}(Xo);function Zo(e,t=null){if(null===e)return Qo.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),E(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ho(e,Zo(t))}if(e instanceof Array){let n=Qo.EMPTY_NODE;return Dr(e,((t,i)=>{if(te(e,t)&&"."!==t.substring(0,1)){const e=Zo(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Zo(t))}{const n=[];let i=!1;if(Dr(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Zo(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new So(e,r)))}})),0===n.length)return Qo.EMPTY_NODE;const r=$o(n,Lo,(e=>e.name),Do);if(i){const e=$o(n,zo.getCompare());return new Qo(r,Zo(t),new Jo({".priority":e},{".priority":zo}))}return new Qo(r,Zo(t),Jo.Default)}}!function(e){Fo=e}(Zo);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class es extends xo{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Or(e.name,t.name):r}makePost(e,t){const n=Zo(e),i=Qo.EMPTY_NODE.updateChild(this.indexPath_,n);return new So(t,i)}maxPost(){const e=Qo.EMPTY_NODE.updateChild(this.indexPath_,Xo);return new So("[MAX_NAME]",e)}toString(){return po(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,E(!yo(e)&&".priority"!==lo(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new class extends xo{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Or(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return So.MIN}maxPost(){return So.MAX}makePost(e,t){const n=Zo(e);return new So(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e){return{type:"value",snapshotNode:e}}function is(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function rs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function os(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===zo}copy(){const e=new ss;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=zo}}function as(e){const t={};if(e.isDefault())return t;let n;if(e.index_===zo?n="$priority":e.index_===ts?n="$value":e.index_===Oo?n="$key":(E(e.index_ instanceof es,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Q(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Q(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Q(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Q(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Q(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function cs(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==zo&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends ro{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ls.getListenId_(e,n),s={};this.listens_[o]=s;const a=as(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ne(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=ls.getListenId_(e,t);delete this.listens_[n]}get(e){const t=as(e._queryParams),n=e._path.toString(),i=new j;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ae(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=Y(s.responseText)}catch(e){Tr("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&Tr("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Cr("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Qo.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){return{value:null,children:new Map}}function ds(e,t,n){if(yo(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=lo(t);e.children.has(i)||e.children.set(i,hs());ds(e.children.get(i),t=ho(t),n)}}function fs(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{fs(i,new ao(t.toString()+"/"+e),n)}))}class ps{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Dr(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Dr(e,((e,i)=>{i>0&&te(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Fr(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ps(e);const n=1e4+2e4*Math.random();Fr(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ms,ys;function vs(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ys=ms||(ms={}))[ys.OVERWRITE=0]="OVERWRITE",ys[ys.MERGE=1]="MERGE",ys[ys.ACK_USER_WRITE=2]="ACK_USER_WRITE",ys[ys.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class _s{operationForChild(e){if(yo(this.path)){if(null!=this.affectedTree.value)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ao(e));return new _s(co(),t,this.revert)}}return E(lo(this.path)===e,"operationForChild called for unrelated child."),new _s(ho(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ms.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bs{operationForChild(e){return yo(this.path)?new bs(this.source,co(),this.snap.getImmediateChild(e)):new bs(this.source,ho(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ms.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{operationForChild(e){if(yo(this.path)){const t=this.children.subtree(new ao(e));return t.isEmpty()?null:t.value?new bs(this.source,co(),t.value):new ws(this.source,co(),t)}return E(lo(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ws(this.source,ho(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ms.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yo(e))return this.isFullyInitialized()&&!this.filtered_;const t=lo(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw I("Should only compare child_ events.");const i=new So(t.childName,t.snapshotNode),r=new So(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Is(e,t){return{eventCache:e,serverCache:t}}function Cs(e,t,n,i){return Is(new ks(t,n,i),e.serverCache)}function Ss(e,t,n,i){return Is(e.eventCache,new ks(t,n,i))}function xs(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ts(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class Os{static fromObject(e){let t=new Os(null);return Dr(e,((e,n)=>{t=t.set(new ao(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:co(),value:this.value};if(yo(e))return null;{const n=lo(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(ho(e),t);if(null!=r){return{path:mo(new ao(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(yo(e))return this;{const t=lo(e),n=this.children.get(t);return null!==n?n.subtree(ho(e)):new Os(null)}}set(e,t){if(yo(e))return new Os(t,this.children);{const n=lo(e),i=(this.children.get(n)||new Os(null)).set(ho(e),t),r=this.children.insert(n,i);return new Os(this.value,r)}}remove(e){if(yo(e))return this.children.isEmpty()?new Os(null):new Os(null,this.children);{const t=lo(e),n=this.children.get(t);if(n){const i=n.remove(ho(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Os(null):new Os(this.value,r)}return this}}get(e){if(yo(e))return this.value;{const t=lo(e),n=this.children.get(t);return n?n.get(ho(e)):null}}setTree(e,t){if(yo(e))return t;{const n=lo(e),i=(this.children.get(n)||new Os(null)).setTree(ho(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Os(this.value,r)}}fold(e){return this.fold_(co(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(mo(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,co(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yo(e))return null;{const i=lo(e),r=this.children.get(i);return r?r.findOnPath_(ho(e),mo(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,co(),t)}foreachOnPath_(e,t,n){if(yo(e))return this;{this.value&&n(t,this.value);const i=lo(e),r=this.children.get(i);return r?r.foreachOnPath_(ho(e),mo(t,i),n):new Os(null)}}foreach(e){this.foreach_(co(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(mo(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Ns||(Ns=new Ao(Rr)),Ns))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static empty(){return new Rs(new Os(null))}constructor(e){this.writeTree_=e}}function Ps(e,t,n){if(yo(t))return new Rs(new Os(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=vo(r,t);return o=o.updateChild(s,n),new Rs(e.writeTree_.set(r,o))}{const i=new Os(n),r=e.writeTree_.setTree(t,i);return new Rs(r)}}}function As(e,t,n){let i=e;return Dr(n,((e,n)=>{i=Ps(i,mo(t,e),n)})),i}function Ls(e,t){if(yo(t))return Rs.empty();{const n=e.writeTree_.setTree(t,new Os(null));return new Rs(n)}}function Ds(e,t){return null!=Ms(e,t)}function Ms(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(vo(n.path,t)):null}function Us(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(zo,((e,n)=>{t.push(new So(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new So(e,n.value))})),t}function js(e,t){if(yo(t))return e;{const n=Ms(e,t);return new Rs(null!=n?new Os(n):e.writeTree_.subtree(t))}}function Bs(e){return e.writeTree_.isEmpty()}function Fs(e,t){return qs(co(),e.writeTree_,t)}function qs(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(E(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=qs(mo(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(mo(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e,t){return ta(t,e)}function zs(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));E(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&Ws(t,i.path)?r=!1:bo(i.path,t.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=$s(e.allWrites,Vs,co()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ls(e.visibleWrites,i.path);else{Dr(i.children,(t=>{e.visibleWrites=Ls(e.visibleWrites,mo(i.path,t))}))}return!0}return!1}function Ws(e,t){if(e.snap)return bo(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&bo(mo(e.path,n),t))return!0;return!1}function Vs(e){return e.visible}function $s(e,t,n){let i=Rs.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)bo(n,e)?(t=vo(n,e),i=Ps(i,t,o.snap)):bo(e,n)&&(t=vo(e,n),i=Ps(i,co(),o.snap.getChild(t)));else{if(!o.children)throw I("WriteRecord should have .snap or .children");if(bo(n,e))t=vo(n,e),i=As(i,t,o.children);else if(bo(e,n))if(t=vo(e,n),yo(t))i=As(i,co(),o.children);else{const e=ne(o.children,lo(t));if(e){const n=e.getChild(ho(t));i=Ps(i,co(),n)}}}}}return i}function Ks(e,t,n,i,r){if(i||r){const o=js(e.visibleWrites,t);if(!r&&Bs(o))return n;if(r||null!=n||Ds(o,co())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(bo(e.path,t)||bo(t,e.path))};return Fs($s(e.allWrites,o,t),n||Qo.EMPTY_NODE)}return null}{const i=Ms(e.visibleWrites,t);if(null!=i)return i;{const i=js(e.visibleWrites,t);if(Bs(i))return n;if(null!=n||Ds(i,co())){return Fs(i,n||Qo.EMPTY_NODE)}return null}}}function Gs(e,t,n,i){return Ks(e.writeTree,e.treePath,t,n,i)}function Js(e,t){return function(e,t,n){let i=Qo.EMPTY_NODE;const r=Ms(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(zo,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=js(e.visibleWrites,t);return n.forEachChild(zo,((e,t)=>{const n=Fs(js(r,new ao(e)),t);i=i.updateImmediateChild(e,n)})),Us(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Us(js(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Ys(e,t,n,i){return function(e,t,n,i,r){E(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=mo(t,n);if(Ds(e.visibleWrites,o))return null;{const t=js(e.visibleWrites,o);return Bs(t)?r.getChild(n):Fs(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Qs(e,t){return function(e,t){return Ms(e.visibleWrites,t)}(e.writeTree,mo(e.treePath,t))}function Xs(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){let a;const c=js(e.visibleWrites,t),l=Ms(c,co());if(null!=l)a=l;else{if(null==n)return[];a=Fs(c,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,o)}function Zs(e,t,n){return function(e,t,n,i){const r=mo(t,n),o=Ms(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n))return Fs(js(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ea(e,t){return ta(mo(e.treePath,t),e.writeTree)}function ta(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{trackChildChange(e){const t=e.type,n=e.childName;E("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),E(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,os(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,rs(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,is(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw I("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,os(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ra{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new ks(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zs(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ts(this.viewCache_),r=Xs(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e,t,n,i,r){const o=new na;let s,a;if(n.type===ms.OVERWRITE){const c=n;c.source.fromUser?s=ca(e,t,c.path,c.snap,i,r,o):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!yo(c.path),s=aa(e,t,c.path,c.snap,i,r,a,o))}else if(n.type===ms.MERGE){const c=n;c.source.fromUser?s=function(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,c)=>{const l=mo(n,i);la(t,lo(l))&&(a=ca(e,a,l,c,r,o,s))})),i.foreach(((i,c)=>{const l=mo(n,i);la(t,lo(l))||(a=ca(e,a,l,c,r,o,s))})),a}(e,t,c.path,c.children,i,r,o):(E(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),s=ha(e,t,c.path,c.children,i,r,a,o))}else if(n.type===ms.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,r,o){let s;if(null!=Qs(i,n))return t;{const a=new ra(i,t,r),c=t.eventCache.getNode();let l;if(yo(n)||".priority"===lo(n)){let n;if(t.serverCache.isFullyInitialized())n=Gs(i,Ts(t));else{const e=t.serverCache.getNode();E(e instanceof Qo,"serverChildren would be complete if leaf node"),n=Js(i,e)}l=e.filter.updateFullNode(c,n,o)}else{const r=lo(n);let u=Zs(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),l=null!=u?e.filter.updateChild(c,r,u,ho(n),a,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,Qo.EMPTY_NODE,ho(n),a,o):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Gs(i,Ts(t)),s.isLeafNode()&&(l=e.filter.updateFullNode(l,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=Qs(i,co()),Cs(t,l,s,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,o):function(e,t,n,i,r,o,s){if(null!=Qs(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yo(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return aa(e,t,n,c.getNode().getChild(n),r,o,a,s);if(yo(n)){let i=new Os(null);return c.getNode().forEachChild(Oo,((e,t)=>{i=i.set(new ao(e),t)})),ha(e,t,n,i,r,o,a,s)}return t}{let l=new Os(null);return i.foreach(((e,t)=>{const i=mo(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),ha(e,t,n,l,r,o,a,s)}}(e,t,a.path,a.affectedTree,i,r,o)}else{if(n.type!==ms.LISTEN_COMPLETE)throw I("Unknown operation type: "+n.type);s=function(e,t,n,i,r){const o=t.serverCache,s=Ss(t,o.getNode(),o.isFullyInitialized()||yo(n),o.isFiltered());return sa(e,s,n,i,ia,r)}(e,t,n.path,i,o)}const c=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=xs(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(ns(xs(t)))}}(t,s,c),{viewCache:s,changes:c}}function sa(e,t,n,i,r,o){const s=t.eventCache;if(null!=Qs(i,n))return t;{let a,c;if(yo(n))if(E(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ts(t),r=Js(i,n instanceof Qo?n:Qo.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=Gs(i,Ts(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const l=lo(n);if(".priority"===l){E(1===uo(n),"Can't have a priority with additional path components");const r=s.getNode();c=t.serverCache.getNode();const o=Ys(i,n,r,c);a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const u=ho(n);let h;if(s.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Ys(i,n,s.getNode(),c);h=null!=e?s.getNode().getImmediateChild(l).updateChild(u,e):s.getNode().getImmediateChild(l)}else h=Zs(i,l,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),l,h,u,r,o):s.getNode()}}return Cs(t,a,s.isFullyInitialized()||yo(n),e.filter.filtersNodes())}}function aa(e,t,n,i,r,o,s,a){const c=t.serverCache;let l;const u=s?e.filter:e.filter.getIndexedFilter();if(yo(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=lo(n);if(!c.isCompleteForPath(n)&&uo(n)>1)return t;const r=ho(n),o=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),o):u.updateChild(c.getNode(),e,o,r,ia,null)}const h=Ss(t,l,c.isFullyInitialized()||yo(n),u.filtersNodes());return sa(e,h,n,r,new ra(r,h,o),a)}function ca(e,t,n,i,r,o,s){const a=t.eventCache;let c,l;const u=new ra(r,t,o);if(yo(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,s),c=Cs(t,l,!0,e.filter.filtersNodes());else{const r=lo(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Cs(t,l,a.isFullyInitialized(),a.isFiltered());else{const o=ho(n),l=a.getNode().getImmediateChild(r);let h;if(yo(o))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===fo(o)&&e.getChild(go(o)).isEmpty()?e:e.updateChild(o,i):Qo.EMPTY_NODE}if(l.equals(h))c=t;else{c=Cs(t,e.filter.updateChild(a.getNode(),r,h,o,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function la(e,t){return e.eventCache.isCompleteForChild(t)}function ua(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ha(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=yo(n)?i:new Os(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=ua(0,t.serverCache.getNode().getImmediateChild(n),i);l=aa(e,l,new ao(n),c,r,o,s,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=ua(0,t.serverCache.getNode().getImmediateChild(n),i);l=aa(e,l,new ao(n),c,r,o,s,a)}})),l}function da(e,t){const n=Ts(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yo(t)&&!n.getImmediateChild(lo(t)).isEmpty())?n.getChild(t):null}function fa(e,t,n,i){t.type===ms.MERGE&&null!==t.source.queryId&&(E(Ts(e.viewCache_),"We should always have a full cache before handling merges"),E(xs(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=oa(e.processor_,r,t,n,i);var s,a;return s=e.processor_,a=o.viewCache,E(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),E(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),E(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,pa(e,o.changes,o.viewCache.eventCache.getNode(),null)}function pa(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],o=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Es(e,r,"child_removed",t,i,n),Es(e,r,"child_added",t,i,n),Es(e,r,"child_moved",o,i,n),Es(e,r,"child_changed",t,i,n),Es(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga,ma;function ya(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return E(null!=o,"SyncTree gave us an op for an invalid query."),fa(o,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(fa(o,t,n,i));return r}}function va(e,t){let n=null;for(const i of e.views.values())n=n||da(i,t);return n}class _a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Os(null),this.pendingWriteTree_={visibleWrites:Rs.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ba(e,t,n,i,r){return function(e,t,n,i,r){E(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Ps(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Ca(e,new bs({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function wa(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(zs(e.pendingWriteTree_,t)){let t=new Os(null);return null!=i.snap?t=t.set(co(),!0):Dr(i.children,(e=>{t=t.set(new ao(e),!0)})),Ca(e,new _s(i.path,t,n))}return[]}function ka(e,t,n){return Ca(e,new bs({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ea(e,t,n,i){const r=Ta(e,i);if(null!=r){const i=Na(r),o=i.path,s=i.queryId,a=vo(o,t);return Oa(e,o,new bs(vs(s),a,n))}return[]}function Ia(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=va(n,vo(e,t));if(i)return i}));return Ks(i,t,r,n,!0)}function Ca(e,t){return Sa(t,e.syncPointTree_,null,Hs(e.pendingWriteTree_,co()))}function Sa(e,t,n,i){if(yo(e.path))return xa(e,t,n,i);{const r=t.get(co());null==n&&null!=r&&(n=va(r,co()));let o=[];const s=lo(e.path),a=e.operationForChild(s),c=t.children.get(s);if(c&&a){const e=n?n.getImmediateChild(s):null,t=ea(i,s);o=o.concat(Sa(a,c,e,t))}return r&&(o=o.concat(ya(r,e,i,n))),o}}function xa(e,t,n,i){const r=t.get(co());null==n&&null!=r&&(n=va(r,co()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=ea(i,t),c=e.operationForChild(t);c&&(o=o.concat(xa(c,r,s,a)))})),r&&(o=o.concat(ya(r,e,i,n))),o}function Ta(e,t){return e.tagToQueryMap.get(t)}function Na(e){const t=e.indexOf("$");return E(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ao(e.substr(0,t))}}function Oa(e,t,n){const i=e.syncPointTree_.get(t);E(i,"Missing sync point for query tag that we're tracking");return ya(i,n,Hs(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ra(t)}node(){return this.node_}constructor(e){this.node_=e}}class Pa{getImmediateChild(e){const t=mo(this.path_,e);return new Pa(this.syncTree_,t)}node(){return Ia(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Aa=function(e,t,n){return e&&"object"==typeof e?(E(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?La(e[".sv"],t,n):"object"==typeof e[".sv"]?Da(e[".sv"],t):void E(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},La=function(e,t,n){if("timestamp"===e)return n.timestamp;E(!1,"Unexpected server value: "+e)},Da=function(e,t,n){e.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&E(!1,"Unexpected increment value: "+i);const r=t.node();if(E(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},Ma=function(e,t,n,i){return ja(t,new Pa(n,e),i)},Ua=function(e,t,n){return ja(e,new Ra(t),n)};function ja(e,t,n){const i=e.getPriority().val(),r=Aa(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=Aa(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new Ho(o,Zo(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new Ho(r))),i.forEachChild(zo,((e,i)=>{const r=ja(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Fa(e,t){let n=t instanceof ao?t:new ao(t),i=e,r=lo(n);for(;null!==r;){const e=ne(i.node.children,r)||{children:{},childCount:0};i=new Ba(r,i,e),n=ho(n),r=lo(n)}return i}function qa(e){return e.node.value}function Ha(e,t){e.node.value=t,Ka(e)}function za(e){return e.node.childCount>0}function Wa(e,t){Dr(e.node.children,((n,i)=>{t(new Ba(n,e,i))}))}function Va(e,t,n,i){n&&!i&&t(e),Wa(e,(e=>{Va(e,t,!0,i)})),n&&i&&t(e)}function $a(e){return new ao(null===e.parent?e.name:$a(e.parent)+"/"+e.name)}function Ka(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===qa(e)&&!za(e)}(n),r=te(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Ka(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Ka(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Ga=/[\[\].#$\/\u0000-\u001F\u007F]/,Ja=/[\[\].#$\u0000-\u001F\u007F]/,Ya=function(e){return"string"==typeof e&&0!==e.length&&!Ga.test(e)},Qa=function(e){return"string"==typeof e&&0!==e.length&&!Ja.test(e)},Xa=function(e,t,n,i){i&&void 0===t||Za(pe(e,"value"),t,n)},Za=function(e,t,n){const i=n instanceof ao?new wo(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Eo(i));if("function"==typeof t)throw new Error(e+"contains a function "+Eo(i)+" with contents = "+t.toString());if(Nr(t))throw new Error(e+"contains "+t.toString()+" "+Eo(i));if("string"==typeof t&&t.length>10485760/3&&me(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Eo(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Dr(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ya(t)))throw new Error(e+" contains an invalid key ("+t+") "+Eo(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=me(a),ko(s),Za(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=me(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Eo(i)+" in addition to actual children.")}},ec=function(e,t,n,i){if(!(i&&void 0===n||Qa(n)))throw new Error(pe(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},tc=function(e,t){if(".info"===lo(t))throw new Error(e+" failed = Can't modify data under /.info/")},nc=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ya(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Qa(e)}(n))throw new Error(pe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ic{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rc(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||_o(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function oc(e,t,n){rc(e,n),sc(e,(e=>bo(e,t)||bo(t,e)))}function sc(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(ac(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ac(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();wr&&Ir("event: "+n.toString()),Br(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ic,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hs(),this.transactionQueueTree_=new Ba,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function lc(e,t,n){if(e.stats_=Yr(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ls(e.repoInfo_,((t,n,i,r)=>{dc(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>fc(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Q(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Co(e.repoInfo_,t,((t,n,i,r)=>{dc(e,t,n,i,r)}),(t=>{fc(e,t)}),(t=>{!function(e,t){Dr(t,((t,n)=>{pc(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Jr[n]||(Jr[n]=t()),Jr[n]}(e.repoInfo_,(()=>new gs(e.stats_,e.server_))),e.infoData_=new us,e.infoSyncTree_=new _a({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=ka(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),pc(e,"connected",!1),e.serverSyncTree_=new _a({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);oc(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function uc(e){const t=e.infoData_.getNode(new ao(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function hc(e){return(t=(t={timestamp:uc(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function dc(e,t,n,i,r){e.dataUpdateCount++;const o=new ao(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(r)if(i){const t=re(n,(e=>Zo(e)));s=function(e,t,n,i){const r=Ta(e,i);if(r){const i=Na(r),o=i.path,s=i.queryId,a=vo(o,t),c=Os.fromObject(n);return Oa(e,o,new ws(vs(s),a,c))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=Zo(n);s=Ea(e.serverSyncTree_,o,t,r)}else if(i){const t=re(n,(e=>Zo(e)));s=function(e,t,n){const i=Os.fromObject(n);return Ca(e,new ws({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=Zo(n);s=ka(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=kc(e,o)),oc(e.eventQueue_,a,s)}function fc(e,t){pc(e,"connected",t),!1===t&&function(e){vc(e,"onDisconnectEvents");const t=hc(e),n=hs();fs(e.onDisconnect_,co(),((i,r)=>{const o=Ma(i,r,e.serverSyncTree_,t);ds(n,i,o)}));let i=[];fs(n,co(),((t,n)=>{i=i.concat(ka(e.serverSyncTree_,t,n));const r=xc(e,t);kc(e,r)})),e.onDisconnect_=hs(),oc(e.eventQueue_,co(),i)}(e)}function pc(e,t,n){const i=new ao("/.info/"+t),r=Zo(n);e.infoData_.updateSnapshot(i,r);const o=ka(e.infoSyncTree_,i,r);oc(e.eventQueue_,i,o)}function gc(e){return e.nextWriteId_++}function mc(e,t,n,i,r){vc(e,"set",{path:t.toString(),value:n,priority:i});const o=hc(e),s=Zo(n,i),a=Ia(e.serverSyncTree_,t),c=Ua(s,a,o),l=gc(e),u=ba(e.serverSyncTree_,t,c,l,!0);rc(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const o="ok"===n;o||Tr("set at "+t+" failed: "+n);const s=wa(e.serverSyncTree_,l,!o);oc(e.eventQueue_,t,s),_c(e,r,n,i)}));const h=xc(e,t);kc(e,h),oc(e.eventQueue_,h,[])}function yc(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function vc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ir(n,...t)}function _c(e,t,n,i){t&&Br((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const o=new Error(r);o.code=e,t(o)}}))}function bc(e,t,n){return Ia(e.serverSyncTree_,t,n)||Qo.EMPTY_NODE}function wc(e,t=e.transactionQueueTree_){if(t||Sc(e,t),qa(t)){const n=Ic(e,t);E(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=bc(e,t,i);let o=r;const s=r.hash();for(let e=0;e<n.length;e++){const i=n[e];E(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=vo(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const a=o.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{vc(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(wa(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Sc(e,Fa(e.transactionQueueTree_,t)),wc(e,e.transactionQueueTree_),oc(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Br(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Tr("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}kc(e,t)}}),s)}(e,$a(t),n)}else za(t)&&Wa(t,(t=>{wc(e,t)}))}function kc(e,t){const n=Ec(e,t),i=$a(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=vo(n,c.path);let u,h=!1;if(E(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,r=r.concat(wa(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",r=r.concat(wa(e.serverSyncTree_,c.currentWriteId,!0));else{const n=bc(e,c.path,o);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Za("transaction failed: Data returned ",i,c.path);let t=Zo(i);"object"==typeof i&&null!=i&&te(i,".priority")||(t=t.updatePriority(n.getPriority()));const s=c.currentWriteId,a=hc(e),l=Ua(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=gc(e),o.splice(o.indexOf(s),1),r=r.concat(ba(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(wa(e.serverSyncTree_,s,!0))}else h=!0,u="nodata",r=r.concat(wa(e.serverSyncTree_,c.currentWriteId,!0))}oc(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var s;Sc(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Br(i[e]);wc(e,e.transactionQueueTree_)}(e,Ic(e,n),i),i}function Ec(e,t){let n,i=e.transactionQueueTree_;for(n=lo(t);null!==n&&void 0===qa(i);)i=Fa(i,n),n=lo(t=ho(t));return i}function Ic(e,t){const n=[];return Cc(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Cc(e,t,n){const i=qa(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Wa(t,(t=>{Cc(e,t,n)}))}function Sc(e,t){const n=qa(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ha(t,n.length>0?n:void 0)}Wa(t,(t=>{Sc(e,t)}))}function xc(e,t){const n=$a(Ec(e,t)),i=Fa(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Tc(e,t)})),Tc(e,i),Va(i,(t=>{Tc(e,t)})),n}function Tc(e,t){const n=qa(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(E(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(E(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(wa(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ha(t,void 0):n.length=o+1,oc(e.eventQueue_,$a(t),r);for(let e=0;e<i.length;e++)Br(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=function(e,t){const n=Oc(e),i=n.namespace;"firebase.com"===n.domain&&xr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Tr("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Vr(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ao(n.pathString)}},Oc=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Tr(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(s="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in d&&(o=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rc{get key(){return yo(this._path)?null:fo(this._path)}get ref(){return new Pc(this._repo,this._path)}get _queryIdentifier(){const e=cs(this._queryParams),t=Ar(e);return"{}"===t?"default":t}get _queryObject(){return cs(this._queryParams)}isEqual(e){if(!((e=ye(e))instanceof Rc))return!1;const t=this._repo===e._repo,n=_o(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Pc extends Rc{get parent(){const e=go(this._path);return null===e?null:new Pc(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new ss,!1)}}function Ac(e,t){return(e=ye(e))._checkNotDeleted("ref"),void 0!==t?Lc(e._root,t):e._root}function Lc(e,t){var n,i,r,o;return null===lo((e=ye(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),ec(n,i,r,o)):ec("child","path",t,!1),new Pc(e._repo,mo(e._path,t))}function Dc(e,t){e=ye(e),tc("set",e._path),Xa("set",t,e._path,!1);const n=new j;return mc(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}!function(e){E(!ga,"__referenceConstructor has already been defined"),ga=e}(Pc),function(e){E(!ma,"__referenceConstructor has already been defined"),ma=e}(Pc);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mc={};let Uc=!1;function jc(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ir("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,c,l=Nc(s,r),u=l.repoInfo;void 0!==o&&o.env&&(c=o.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,s=`http://${c}?ns=${u.namespace}`,l=Nc(s,r),u=l.repoInfo):a=!l.repoInfo.secure;const h=r&&a?new zr(zr.OWNER):new Hr(e.name,e.options,t);nc("Invalid Firebase Database URL",l),yo(l.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=Mc[t.name];r||(r={},Mc[t.name]=r);let o=r[e.toURLString()];o&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new cc(e,Uc,n,i),r[e.toURLString()]=o,o}(u,e,h,new qr(e.name,n));return new Bc(d,e)}class Bc{get _repo(){return this._instanceStarted||(lc(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pc(this._repo,co())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Mc[t];n&&n[e.key]===e||xr(`Database ${t}(${e.repoInfo_}) has already been deleted.`),yc(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&xr("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Co.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Co.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){hr="9.20.0",Xe(new ve("database",((e,{instanceIdentifier:t})=>jc(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),rt("@firebase/database","0.14.4",e),rt("@firebase/database","0.14.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();var Fc={};function qc(){return{form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),btnAddWatched:document.querySelector(".watched"),btnAddQueue:document.querySelector(".queue"),libraryPage:document.querySelector(".library-link"),btnSectionInLibrary:document.querySelector(".btn-section"),homePage:document.querySelector(".home-link"),headerByClass:document.querySelector(".header"),headerByTeg:document.querySelector("header"),search:document.querySelector(".search-list"),searchItem:document.querySelector(".search-item"),searchInput:document.querySelector(".search_input"),pagination:document.querySelector(".tui-pagination"),openSignInModalBtn:document.querySelector("#openSignInModalBtn"),logoutBtn:document.querySelector("#logoutBtn"),userDetails:document.querySelector("#userDetails"),slider:document.querySelector(".slider"),sliderContainer:document.querySelector(".slider-container"),goUpBtn:document.querySelector(".go-up"),maskLoader:document.querySelector(".mask"),prevSliderBtn:document.querySelector('.tns-controls button[data-controls="prev"]'),nextSliderBtn:document.querySelector('button[data-controls="next"]')}}Fc=function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var c=void 0;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return r(t[s][1][e]||e)}),u,u.exports,e,t,n,i)}return n[s].exports}for(var o=void 0,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var s=r(o,"IMG"),a=r(o,"VIDEO"),c=r(o,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1);var Hc;function zc(t){const n=[],i=function(e,t){return e.map((e=>t.genres.filter((t=>t.id===e)))).flat()}(t,e(Hc));for(let e of i){let t=localStorage.getItem("lang");null===t&&(t="en-US"),n.push(e.name[t])}return 0===n.length?"No data":n.length<2?n.join(", "):n.slice(0,2).join(", ")+", "+function(){const e=localStorage.getItem("lang");if(!e||"en-US"===e)return"Other";if("uk-UA"===e)return"Інші";if("ru-RU"===e)return"Другие"}()}Hc=JSON.parse('{"genres":[{"id":28,"name":{"en-US":"Action","uk-UA":"Бойовик","ru-RU":"Боевик"}},{"id":12,"name":{"en-US":"Adventure","uk-UA":"Пригоди","ru-RU":"Приключения"}},{"id":16,"name":{"en-US":"Animation","uk-UA":"Анімація","ru-RU":"Анимация"}},{"id":35,"name":{"en-US":"Comedy","uk-UA":"Комедія","ru-RU":"Комедия"}},{"id":80,"name":{"en-US":"Crime","uk-UA":"Злочини","ru-RU":"Преступления"}},{"id":99,"name":{"en-US":"Documentary","uk-UA":"Документальний","ru-RU":"Документальный"}},{"id":18,"name":{"en-US":"Drama","uk-UA":"Драма","ru-RU":"Драма"}},{"id":10751,"name":{"en-US":"Family","uk-UA":"Сімейний","ru-RU":"Семейный"}},{"id":14,"name":{"en-US":"Fantasy","uk-UA":"Фантастика","ru-RU":"Фантастика"}},{"id":36,"name":{"en-US":"History","uk-UA":"Історичний","ru-RU":"Исторический"}},{"id":27,"name":{"en-US":"Horror","uk-UA":"Жахи","ru-RU":"Ужасы"}},{"id":10402,"name":{"en-US":"Music","uk-UA":"Мюзикл","ru-RU":"Мюзикл"}},{"id":9648,"name":{"en-US":"Mystery","uk-UA":"Містика","ru-RU":"Мистика"}},{"id":10749,"name":{"en-US":"Romance","uk-UA":"Романтика","ru-RU":"Романтика"}},{"id":878,"name":{"en-US":"Science fiction","uk-UA":"Наукова фантастика","ru-RU":"Научная фантастика"}},{"id":10770,"name":{"en-US":"TV Movie","uk-UA":"Серіал","ru-RU":"Сериал"}},{"id":53,"name":{"en-US":"Thriller","uk-UA":"Трилер","ru-RU":"Триллер"}},{"id":10752,"name":{"en-US":"War","uk-UA":"Про війну","ru-RU":"Военный"}},{"id":37,"name":{"en-US":"Western","uk-UA":"Вестерн","ru-RU":"Вестерн"}}]}');const Wc=qc();function Vc(e){const t=e.map((({poster_path:e,title:t,genre_ids:n,release_date:i,id:r,vote_average:o})=>{const s=zc(n);return`\n      <div class="movie-card">\n        <a href="javascript:void(0)" class="movie-link">\n          <div class="movie-poster-wrapper">\n            <span class="movie-rating-wrapper">            \n              <div class="movie-rating">${o}</div>\n            </span>\n            <picture>\n                <source srcset="\n                ${$c(e,"original")} 1x,\n                ${$c(e,"original")} 2x\n                " \n                media="(min-width: 1024px)"\n                >\n                <source srcset="\n                ${$c(e,"w500")} 1x,\n                ${$c(e,"w500")} 2x\n                " \n                media="(min-width: 768px)"\n                >\n              <source srcset="\n                ${$c(e,"w300")} 1x,\n                ${$c(e,"w300")} 2x\n                " \n                >\n\n              <img src="${$c(e,"w300")}" \n              alt=""\n              class="movie-card-img movie-poster"\n              data-id="${r}" \n              loading="lazy"/>\n            </picture>\n          </div>\n          <div class="movie-info">\n            <p class="movie-title">${Kc(t.toUpperCase())}</p>\n            <div class="movie-genres-year-wrapper">\n              <span class="movie-genres">${Kc(s)}</span>\n              <div class="movie-year-wrapper">\n                <span class="movie-years">${a=i,a?a.slice(0,4):"No data"}</span>\n              </div>\n          </div>\n          </div>\n        </a>\n      </div>`;var a})).join("");Wc.gallery.insertAdjacentHTML("beforeend",t)}function $c(e,t){return null===e?"https://wipfilms.net/wp-content/data/posters/tt0338683.jpg":`https://image.tmdb.org/t/p/${t}${e}`}function Kc(e){return e.length>33?`${e.substring(0,30)} <span class="string">...</span>`:e}const Gc=qc(),Jc={watchedBtnEl:document.querySelector(".btn-watched"),queueBtnEl:document.querySelector(".btn-queue")};function Yc(e){return function(e){try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: Error")}}(e).map((e=>(e.genre_ids=e.genres.map((e=>e.id)),e)))}function Qc(e){Gc.slider.innerHTML="",Gc.sliderContainer.innerHTML="",Gc.gallery.innerHTML="",Vc(Yc(e))}function Xc(){Qc("queue"),Jc.queueBtnEl.classList.add("library-btn-active"),Jc.watchedBtnEl.classList.remove("library-btn-active")}function Zc(){const e=Jc.watchedBtnEl.classList.contains("library-btn-active");Jc.queueBtnEl.classList.contains("library-btn-active")?Qc("queue"):e&&Qc("watched")}function el(e){const t=localStorage.getItem("lang");return t&&"en-US"!==t?"uk-UA"===t?e.ua:"ru-RU"===t?e.ru:void 0:e.en}Gc.libraryPage.addEventListener("click",(()=>{Xc()})),Jc.watchedBtnEl.addEventListener("click",(()=>{Qc("watched"),Jc.watchedBtnEl.classList.add("library-btn-active"),Jc.queueBtnEl.classList.remove("library-btn-active")})),Jc.queueBtnEl.addEventListener("click",(()=>{Xc()}));var tl;tl=JSON.parse('{"apifilms":{"failure":{"en":"Ooops, nothing was found","ua":"Йой, нічого не знайдено","ru":"не-а, давай ещё раз"}},"watched":{"failure":{"en":"Film removed from watched","ua":"Фільм видалено з переглянутих","ru":"Фильм удалён из просмотренных"},"success":{"en":"Film added to watched","ua":"Фільм додано до переглянутих","ru":"Фильм добавлен к просмотренным"}},"queue":{"failure":{"en":"Film removed from queue","ua":"Фільм видалено з обраних","ru":"Фильм удалён из избранных"},"success":{"en":"Film added to queue","ua":"Фільм додано до обраних","ru":"Фильм добавлен к избранным"}},"auth":{"failure":{"en":"Oops, something went wrong!","ua":"Щось пішло не так","ru":"Не сработало"},"created":{"en":"User created","ua":"Користувача створено","ru":"Пользователь создан"},"login":{"en":"User logged","ua":"Користувача авторизовано","ru":"Пользователь авторизирован"},"loginFail":{"en":"Wrong username or password","ua":"Невірне ім\'я або пароль","ru":"Неправильное имя или пароль"},"logout":{"en":"User logged out","ua":"Користувач вийшов","ru":"Пользователь вышел"},"logwith":{"google":{"en":"User logged in with Google","ua":"Користувач авторизувався через Google","ru":"Пользователь авторизировался через Google"},"facebook":{"en":"User logged in with Facebook","ua":"Користувач авторизувався через Facebook","ru":"Пользователь авторизировался через Facebook"},"github":{"en":"User logged in with Github","ua":"Користувач авторизувався через Github","ru":"Пользователь авторизировался через Github"}}}}');var nl;nl=JSON.parse('{"watch":{"add":{"en":"add to watched","ua":"додати до переглянутих","ru":"добавить в просмотренные"},"remove":{"en":"remove from watched","ua":"видалити з переглянутих","ru":"удалить из просмотренных"}},"queue":{"add":{"en":"add to queue","ua":"додати до обраного","ru":"добавить в избранное"},"remove":{"en":"remove from queue","ua":"видалити з обраного","ru":"удалить из избранных"}}}');const il=e(tl).watched.failure,rl=e(tl).watched.success,ol=e(tl).queue.failure,sl=e(tl).queue.success,al=e(nl).watch.add,cl=e(nl).watch.remove,ll=e(nl).queue.add,ul=e(nl).queue.remove;function hl(e,t,n,i){e.addEventListener("click",(e=>{e.path[1].children[1].classList.contains("pressed")&&!e.target.classList.contains("pressed")&&(e.path[1].children[1].classList.remove("pressed"),e.path[1].children[1].textContent=el(ll),i.splice(i.findIndex((e=>e.id===t.id)),1),localStorage.setItem("queue",JSON.stringify(i))),e.target.classList.contains("pressed")?(e.target.classList.remove("pressed"),e.target.textContent=el(al),n.splice(n.findIndex((e=>e.id===t.id)),1),localStorage.setItem("watched",JSON.stringify(n)),setTimeout((()=>r.Notify.failure(el(il))),250),Zc()):(e.target.classList.add("pressed"),e.target.textContent=el(cl),n.push(t),localStorage.setItem("watched",JSON.stringify(n)),Zc(),setTimeout((()=>r.Notify.success(el(rl))),250))}))}function dl(e,t,n,i){e.addEventListener("click",(e=>{e.path[1].children[0].classList.contains("pressed")&&!e.target.classList.contains("pressed")&&(e.path[1].children[0].classList.remove("pressed"),e.path[1].children[0].textContent=el(ll),i.splice(i.findIndex((e=>e.id===t.id)),1),localStorage.setItem("watched",JSON.stringify(i))),e.target.classList.contains("pressed")?(e.target.classList.remove("pressed"),e.target.textContent=el(ll),n.splice(n.findIndex((e=>e.id===t.id)),1),localStorage.setItem("queue",JSON.stringify(n)),setTimeout((()=>r.Notify.failure(el(ol))),250),Zc()):(e.target.classList.add("pressed"),e.target.textContent=el(ul),n.push(t),localStorage.setItem("queue",JSON.stringify(n)),Zc(),setTimeout((()=>r.Notify.success(el(sl))),250))}))}let fl=localStorage.getItem("watched")?[...JSON.parse(localStorage.getItem("watched"))]:[],pl=localStorage.getItem("queue")?[...JSON.parse(localStorage.getItem("queue"))]:[],gl="",ml="";function yl(e){const{genres:t,title:n,vote_average:i,vote_count:r,poster_path:o,popularity:s,original_title:a,overview:c}=e,l=t.map((e=>e.name)).join(", ");gl=-1!==fl.findIndex((t=>t.id===e.id))?'<button type="button" class="button-add btn-animated wathed pressed" data-key="remove-watched">remove from Watched</button>':'<button type="button" class="button-add wathed" data-key="add-watched">add to Watched</button>',ml=-1!==pl.findIndex((t=>t.id===e.id))?'<button type="button" class="button-add btn-animated queue pressed" data-key="remove-queue">remove from queue</button>':'<button type="button" class="button-add queue" data-key="add-queue">add to queue</button>';Fc.create(`<div class="modal modal-container"> \n           <button type="button" class="btn-close">\n           <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute"><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"/></svg>\n           </button>\n           <div class="modal-card">\n        <div class="modal-image">\n          <img src="${u=o,null===u?"https://wipfilms.net/wp-content/data/posters/tt0338683.jpg":`https://image.tmdb.org/t/p/w300${o}`}" alt="movie-poster" class="movie-poster" />\n          <button type="button" class="btn-open-trailer">\n\n        </button>\n        </div>\n        <div class="modal-info">\n          <h2 class="modal-info-title">${n}</h2>\n           <table>\n        <tr>\n          <th class="info-table-td" data-key="vote">Vote / Votes</td>\n          <td> <span class="info-table-vote_average">${i}</span>/<span class="info-table-vote_count"> ${r} </span></td>\n        </tr>\n        <tr>\n          <th class="info-table-td" data-key="popularity">Popularity</td>\n          <td>${s}</td>\n        </tr>\n        <tr>\n          <th class="info-table-td" data-key="original-title">Original Title</td>\n          <td class="info-table-original_title" valign="bottom">${a}</td>\n        </tr>\n        <tr>\n          <th class="info-table-td" data-key="genre">Genre</td>\n          <td>${l}</td>\n        </tr>\n      </table>\n            <h3 class="modal-about" data-key="about">ABOUT</h3>\n            <p class="modal-info-about">${c}</p>\n        <div class="modal-btn-container">\n          ${gl}\n          ${ml}\n        </div>\n        </div>\n      </div>\n    </div>\n  `,{onShow:e=>{document.addEventListener("keydown",(function(t){"Escape"===t.code&&e.close()})),e.element().querySelector(".btn-close").onclick=e.close},onClose:e=>{document.removeEventListener("keydown",(function(t){"Escape"===t.code&&e.close()}))}}).show();var u;const h=document.querySelector(".wathed"),d=document.querySelector(".queue");hl(h,e,fl,pl),dl(d,e,pl,fl)}function vl(e){return(vl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bl(e,t){if("object"!==vl(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==vl(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function wl(e){var t=bl(e,"string");return"symbol"===vl(t)?t:String(t)}function kl(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,wl(i.key),i)}}function El(e,t,n){return t&&kl(e.prototype,t),n&&kl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Il(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Cl(e,t){return(Cl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function Sl(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Cl(e,t)}function xl(e,t){if(t&&("object"===vl(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Il(e)}function Tl(e){return(Tl=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Nl(e,t,n){return(t=wl(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ol(e){if(Array.isArray(e))return e}function Rl(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function Pl(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Al(e,t){if(e){if("string"==typeof e)return Pl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Pl(e,t):void 0}}function Ll(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Dl(e){return Ol(e)||Rl(e)||Al(e)||Ll()}function Ml(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Ul(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ml(Object(n),!0).forEach((function(t){Nl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ml(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var jl={type:"logger",log:function(e){this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(e,t){console&&console[e]&&console[e].apply(console,t)}},Bl=new(function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_l(this,e),this.init(t,n)}return El(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||jl,this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,t,n,i){return i&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(n).concat(this.prefix," ").concat(e[0])),this.logger[t](e))}},{key:"create",value:function(t){return new e(this.logger,Ul(Ul({},{prefix:"".concat(this.prefix,":").concat(t,":")}),this.options))}},{key:"clone",value:function(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new e(this.logger,t)}}]),e}()),Fl=function(){function e(){_l(this,e),this.observers={}}return El(e,[{key:"on",value:function(e,t){var n=this;return e.split(" ").forEach((function(e){n.observers[e]=n.observers[e]||[],n.observers[e].push(t)})),this}},{key:"off",value:function(e,t){this.observers[e]&&(t?this.observers[e]=this.observers[e].filter((function(e){return e!==t})):delete this.observers[e])}},{key:"emit",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(this.observers[e]){var r=[].concat(this.observers[e]);r.forEach((function(e){e.apply(void 0,n)}))}if(this.observers["*"]){var o=[].concat(this.observers["*"]);o.forEach((function(t){t.apply(t,[e].concat(n))}))}}}]),e}();function ql(){var e,t,n=new Promise((function(n,i){e=n,t=i}));return n.resolve=e,n.reject=t,n}function Hl(e){return null==e?"":""+e}function zl(e,t,n){e.forEach((function(e){t[e]&&(n[e]=t[e])}))}function Wl(e,t,n){function i(e){return e&&e.indexOf("###")>-1?e.replace(/###/g,"."):e}function r(){return!e||"string"==typeof e}for(var o="string"!=typeof t?[].concat(t):t.split(".");o.length>1;){if(r())return{};var s=i(o.shift());!e[s]&&n&&(e[s]=new n),e=Object.prototype.hasOwnProperty.call(e,s)?e[s]:{}}return r()?{}:{obj:e,k:i(o.shift())}}function Vl(e,t,n){var i=Wl(e,t,Object);i.obj[i.k]=n}function $l(e,t){var n=Wl(e,t),i=n.obj,r=n.k;if(i)return i[r]}function Kl(e,t,n){var i=$l(e,n);return void 0!==i?i:$l(t,n)}function Gl(e,t,n){for(var i in t)"__proto__"!==i&&"constructor"!==i&&(i in e?"string"==typeof e[i]||e[i]instanceof String||"string"==typeof t[i]||t[i]instanceof String?n&&(e[i]=t[i]):Gl(e[i],t[i],n):e[i]=t[i]);return e}function Jl(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Yl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Ql(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,(function(e){return Yl[e]})):e}var Xl="undefined"!=typeof window&&window.navigator&&void 0===window.navigator.userAgentData&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Zl=[" ",",","?","!",";"];function eu(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(e){if(e[t])return e[t];for(var i=t.split(n),r=e,o=0;o<i.length;++o){if(!r)return;if("string"==typeof r[i[o]]&&o+1<i.length)return;if(void 0===r[i[o]]){for(var s=2,a=i.slice(o,o+s).join(n),c=r[a];void 0===c&&i.length>o+s;)s++,c=r[a=i.slice(o,o+s).join(n)];if(void 0===c)return;if(null===c)return null;if(t.endsWith(a)){if("string"==typeof c)return c;if(a&&"string"==typeof c[a])return c[a]}var l=i.slice(o+s).join(n);return l?eu(c,l,n):void 0}r=r[i[o]]}return r}}function tu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function nu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tu(Object(n),!0).forEach((function(t){Nl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tu(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function iu(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Tl(e);if(t){var r=Tl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return xl(this,n)}}var ru=function(e){Sl(n,Fl);var t=iu(n);function n(e){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};return _l(this,n),i=t.call(this),Xl&&Fl.call(Il(i)),i.data=e||{},i.options=r,void 0===i.options.keySeparator&&(i.options.keySeparator="."),void 0===i.options.ignoreJSONStructure&&(i.options.ignoreJSONStructure=!0),i}return El(n,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{key:"removeNamespaces",value:function(e){var t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=void 0!==i.keySeparator?i.keySeparator:this.options.keySeparator,o=void 0!==i.ignoreJSONStructure?i.ignoreJSONStructure:this.options.ignoreJSONStructure,s=[e,t];n&&"string"!=typeof n&&(s=s.concat(n)),n&&"string"==typeof n&&(s=s.concat(r?n.split(r):n)),e.indexOf(".")>-1&&(s=e.split("."));var a=$l(this.data,s);return a||!o||"string"!=typeof n?a:eu(this.data&&this.data[e]&&this.data[e][t],n,r)}},{key:"addResource",value:function(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},o=this.options.keySeparator;void 0===o&&(o=".");var s=[e,t];n&&(s=s.concat(o?n.split(o):n)),e.indexOf(".")>-1&&(i=t,t=(s=e.split("."))[1]),this.addNamespaces(t),Vl(this.data,s,i),r.silent||this.emit("added",e,t,n,i)}},{key:"addResources",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in n)"string"!=typeof n[r]&&"[object Array]"!==Object.prototype.toString.apply(n[r])||this.addResource(e,t,r,n[r],{silent:!0});i.silent||this.emit("added",e,t,n)}},{key:"addResourceBundle",value:function(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];e.indexOf(".")>-1&&(i=n,n=t,t=(s=e.split("."))[1]),this.addNamespaces(t);var a=$l(this.data,s)||{};i?Gl(a,n,r):a=nu(nu({},a),n),Vl(this.data,s,a),o.silent||this.emit("added",e,t,n)}},{key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t||(t=this.options.defaultNS),"v1"===this.options.compatibilityAPI?nu(nu({},{}),this.getResource(e,t)):this.getResource(e,t)}},{key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"hasLanguageSomeTranslations",value:function(e){var t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find((function(e){return t[e]&&Object.keys(t[e]).length>0}))}},{key:"toJSON",value:function(){return this.data}}]),n}(),ou={processors:{},addPostProcessor:function(e){this.processors[e.name]=e},handle:function(e,t,n,i,r){var o=this;return e.forEach((function(e){o.processors[e]&&(t=o.processors[e].process(t,n,i,r))})),t}};function su(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function au(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?su(Object(n),!0).forEach((function(t){Nl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):su(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function cu(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Tl(e);if(t){var r=Tl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return xl(this,n)}}var lu={},uu=function(e){Sl(n,Fl);var t=cu(n);function n(e){var i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return _l(this,n),i=t.call(this),Xl&&Fl.call(Il(i)),zl(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,Il(i)),i.options=r,void 0===i.options.keySeparator&&(i.options.keySeparator="."),i.logger=Bl.create("translator"),i}return El(n,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==e)return!1;var n=this.resolve(e,t);return n&&void 0!==n.res}},{key:"extractFromKey",value:function(e,t){var n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");var i=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,r=t.ns||this.options.defaultNS||[],o=n&&e.indexOf(n)>-1,s=!(this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||function(e,t,n){t=t||"",n=n||"";var i=Zl.filter((function(e){return t.indexOf(e)<0&&n.indexOf(e)<0}));if(0===i.length)return!0;var r=new RegExp("(".concat(i.map((function(e){return"?"===e?"\\?":e})).join("|"),")")),o=!r.test(e);if(!o){var s=e.indexOf(n);s>0&&!r.test(e.substring(0,s))&&(o=!0)}return o}(e,n,i));if(o&&!s){var a=e.match(this.interpolator.nestingRegexp);if(a&&a.length>0)return{key:e,namespaces:r};var c=e.split(n);(n!==i||n===i&&this.options.ns.indexOf(c[0])>-1)&&(r=c.shift()),e=c.join(i)}return"string"==typeof r&&(r=[r]),{key:e,namespaces:r}}},{key:"translate",value:function(e,t,i){var r=this;if("object"!==vl(t)&&this.options.overloadTranslationOptionHandler&&(t=this.options.overloadTranslationOptionHandler(arguments)),"object"===vl(t)&&(t=au({},t)),t||(t={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);var o=void 0!==t.returnDetails?t.returnDetails:this.options.returnDetails,s=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator,a=this.extractFromKey(e[e.length-1],t),c=a.key,l=a.namespaces,u=l[l.length-1],h=t.lng||this.language,d=t.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(h&&"cimode"===h.toLowerCase()){if(d){var f=t.nsSeparator||this.options.nsSeparator;return o?{res:"".concat(u).concat(f).concat(c),usedKey:c,exactUsedKey:c,usedLng:h,usedNS:u}:"".concat(u).concat(f).concat(c)}return o?{res:c,usedKey:c,exactUsedKey:c,usedLng:h,usedNS:u}:c}var p=this.resolve(e,t),g=p&&p.res,m=p&&p.usedKey||c,y=p&&p.exactUsedKey||c,v=Object.prototype.toString.apply(g),_=["[object Number]","[object Function]","[object RegExp]"],b=void 0!==t.joinArrays?t.joinArrays:this.options.joinArrays,w=!this.i18nFormat||this.i18nFormat.handleAsObject,k="string"!=typeof g&&"boolean"!=typeof g&&"number"!=typeof g;if(w&&g&&k&&_.indexOf(v)<0&&("string"!=typeof b||"[object Array]"!==v)){if(!t.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var E=this.options.returnedObjectHandler?this.options.returnedObjectHandler(m,g,au(au({},t),{},{ns:l})):"key '".concat(c," (").concat(this.language,")' returned an object instead of string.");return o?(p.res=E,p):E}if(s){var I="[object Array]"===v,C=I?[]:{},S=I?y:m;for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var T="".concat(S).concat(s).concat(x);C[x]=this.translate(T,au(au({},t),{joinArrays:!1,ns:l})),C[x]===T&&(C[x]=g[x])}g=C}}else if(w&&"string"==typeof b&&"[object Array]"===v)(g=g.join(b))&&(g=this.extendTranslation(g,e,t,i));else{var N=!1,O=!1,R=void 0!==t.count&&"string"!=typeof t.count,P=n.hasDefaultValue(t),A=R?this.pluralResolver.getSuffix(h,t.count,t):"",L=t["defaultValue".concat(A)]||t.defaultValue;!this.isValidLookup(g)&&P&&(N=!0,g=L),this.isValidLookup(g)||(O=!0,g=c);var D=t.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,M=D&&O?void 0:g,U=P&&L!==g&&this.options.updateMissing;if(O||N||U){if(this.logger.log(U?"updateKey":"missingKey",h,u,c,U?L:g),s){var j=this.resolve(c,au(au({},t),{},{keySeparator:!1}));j&&j.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var B=[],F=this.languageUtils.getFallbackCodes(this.options.fallbackLng,t.lng||this.language);if("fallback"===this.options.saveMissingTo&&F&&F[0])for(var q=0;q<F.length;q++)B.push(F[q]);else"all"===this.options.saveMissingTo?B=this.languageUtils.toResolveHierarchy(t.lng||this.language):B.push(t.lng||this.language);var H=function(e,n,i){var o=P&&i!==g?i:M;r.options.missingKeyHandler?r.options.missingKeyHandler(e,u,n,o,U,t):r.backendConnector&&r.backendConnector.saveMissing&&r.backendConnector.saveMissing(e,u,n,o,U,t),r.emit("missingKey",e,u,n,g)};this.options.saveMissing&&(this.options.saveMissingPlurals&&R?B.forEach((function(e){r.pluralResolver.getSuffixes(e,t).forEach((function(n){H([e],c+n,t["defaultValue".concat(n)]||L)}))})):H(B,c,L))}g=this.extendTranslation(g,e,t,p,i),O&&g===c&&this.options.appendNamespaceToMissingKey&&(g="".concat(u,":").concat(c)),(O||N)&&this.options.parseMissingKeyHandler&&(g="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(u,":").concat(c):c,N?g:void 0):this.options.parseMissingKeyHandler(g))}return o?(p.res=g,p):g}},{key:"extendTranslation",value:function(e,t,n,i,r){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,au(au({},this.options.interpolation.defaultVariables),n),i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init(au(au({},n),{interpolation:au(au({},this.options.interpolation),n.interpolation)}));var s,a="string"==typeof e&&(n&&n.interpolation&&void 0!==n.interpolation.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);if(a){var c=e.match(this.interpolator.nestingRegexp);s=c&&c.length}var l=n.replace&&"string"!=typeof n.replace?n.replace:n;if(this.options.interpolation.defaultVariables&&(l=au(au({},this.options.interpolation.defaultVariables),l)),e=this.interpolator.interpolate(e,l,n.lng||this.language,n),a){var u=e.match(this.interpolator.nestingRegexp);s<(u&&u.length)&&(n.nest=!1)}!n.lng&&"v1"!==this.options.compatibilityAPI&&i&&i.res&&(n.lng=i.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return r&&r[0]===i[0]&&!n.context?(o.logger.warn("It seems you are nesting recursively key: ".concat(i[0]," in key: ").concat(t[0])),null):o.translate.apply(o,i.concat([t]))}),n)),n.interpolation&&this.interpolator.reset()}var h=n.postProcess||this.options.postProcess,d="string"==typeof h?[h]:h;return null!=e&&d&&d.length&&!1!==n.applyPostProcessor&&(e=ou.handle(d,e,t,this.options&&this.options.postProcessPassResolved?au({i18nResolved:i},n):n,this)),e}},{key:"resolve",value:function(e){var t,n,i,r,o,s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e=[e]),e.forEach((function(e){if(!s.isValidLookup(t)){var c=s.extractFromKey(e,a),l=c.key;n=l;var u=c.namespaces;s.options.fallbackNS&&(u=u.concat(s.options.fallbackNS));var h=void 0!==a.count&&"string"!=typeof a.count,d=h&&!a.ordinal&&0===a.count&&s.pluralResolver.shouldUseIntlApi(),f=void 0!==a.context&&("string"==typeof a.context||"number"==typeof a.context)&&""!==a.context,p=a.lngs?a.lngs:s.languageUtils.toResolveHierarchy(a.lng||s.language,a.fallbackLng);u.forEach((function(e){s.isValidLookup(t)||(o=e,!lu["".concat(p[0],"-").concat(e)]&&s.utils&&s.utils.hasLoadedNamespace&&!s.utils.hasLoadedNamespace(o)&&(lu["".concat(p[0],"-").concat(e)]=!0,s.logger.warn('key "'.concat(n,'" for languages "').concat(p.join(", "),'" won\'t get resolved as namespace "').concat(o,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach((function(n){if(!s.isValidLookup(t)){r=n;var o,c=[l];if(s.i18nFormat&&s.i18nFormat.addLookupKeys)s.i18nFormat.addLookupKeys(c,l,n,e,a);else{var u;h&&(u=s.pluralResolver.getSuffix(n,a.count,a));var p="".concat(s.options.pluralSeparator,"zero");if(h&&(c.push(l+u),d&&c.push(l+p)),f){var g="".concat(l).concat(s.options.contextSeparator).concat(a.context);c.push(g),h&&(c.push(g+u),d&&c.push(g+p))}}for(;o=c.pop();)s.isValidLookup(t)||(i=o,t=s.getResource(n,e,o,a))}})))}))}})),{res:t,usedKey:n,exactUsedKey:i,usedLng:r,usedNS:o}}},{key:"isValidLookup",value:function(e){return!(void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,t,n,i):this.resourceStore.getResource(e,t,n,i)}}],[{key:"hasDefaultValue",value:function(e){var t="defaultValue";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&void 0!==e[n])return!0;return!1}}]),n}();function hu(e){return e.charAt(0).toUpperCase()+e.slice(1)}var du=function(){function e(t){_l(this,e),this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Bl.create("languageUtils")}return El(e,[{key:"getScriptPartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return null;var t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){if(!e||e.indexOf("-")<0)return e;var t=e.split("-");return this.formatLanguageCode(t[0])}},{key:"formatLanguageCode",value:function(e){if("string"==typeof e&&e.indexOf("-")>-1){var t=["hans","hant","latn","cyrl","cans","mong","arab"],n=e.split("-");return this.options.lowerCaseLng?n=n.map((function(e){return e.toLowerCase()})):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=hu(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),t.indexOf(n[1].toLowerCase())>-1&&(n[1]=hu(n[1].toLowerCase())),t.indexOf(n[2].toLowerCase())>-1&&(n[2]=hu(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{key:"isSupportedCode",value:function(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}},{key:"getBestMatchFromCodes",value:function(e){var t,n=this;return e?(e.forEach((function(e){if(!t){var i=n.formatLanguageCode(e);n.options.supportedLngs&&!n.isSupportedCode(i)||(t=i)}})),!t&&this.options.supportedLngs&&e.forEach((function(e){if(!t){var i=n.getLanguagePartFromCode(e);if(n.isSupportedCode(i))return t=i;t=n.options.supportedLngs.find((function(e){return e===i?e:e.indexOf("-")<0&&i.indexOf("-")<0?void 0:0===e.indexOf(i)?e:void 0}))}})),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t):null}},{key:"getFallbackCodes",value:function(e,t){if(!e)return[];if("function"==typeof e&&(e=e(t)),"string"==typeof e&&(e=[e]),"[object Array]"===Object.prototype.toString.apply(e))return e;if(!t)return e.default||[];var n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}},{key:"toResolveHierarchy",value:function(e,t){var n=this,i=this.getFallbackCodes(t||this.options.fallbackLng||[],e),r=[],o=function(e){e&&(n.isSupportedCode(e)?r.push(e):n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))};return"string"==typeof e&&e.indexOf("-")>-1?("languageOnly"!==this.options.load&&o(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&o(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&o(this.getLanguagePartFromCode(e))):"string"==typeof e&&o(this.formatLanguageCode(e)),i.forEach((function(e){r.indexOf(e)<0&&o(n.formatLanguageCode(e))})),r}}]),e}(),fu=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],pu={1:function(e){return Number(e>1)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},5:function(e){return Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5)},6:function(e){return Number(1==e?0:e>=2&&e<=4?1:2)},7:function(e){return Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2)},8:function(e){return Number(1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(e>=2)},10:function(e){return Number(1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3)},12:function(e){return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2)},16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3)},20:function(e){return Number(1==e?0:0==e||e%100>0&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},22:function(e){return Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)}},gu=["v1","v2","v3"],mu={zero:0,one:1,two:2,few:3,many:4,other:5};function yu(){var e={};return fu.forEach((function(t){t.lngs.forEach((function(n){e[n]={numbers:t.nr,plurals:pu[t.fc]}}))})),e}var vu=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_l(this,e),this.languageUtils=t,this.options=n,this.logger=Bl.create("pluralResolver"),this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=yu()}return El(e,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(e,{type:t.ordinal?"ordinal":"cardinal"})}catch(e){return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map((function(e){return"".concat(t).concat(e)}))}},{key:"getSuffixes",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.getRule(e,n);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((function(e,t){return mu[e]-mu[t]})).map((function(e){return"".concat(t.options.prepend).concat(e)})):i.numbers.map((function(i){return t.getSuffix(e,i,n)})):[]}},{key:"getSuffix",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this.getRule(e,n);return i?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(i.select(t)):this.getSuffixRetroCompatible(i,t):(this.logger.warn("no plural rule found for: ".concat(e)),"")}},{key:"getSuffixRetroCompatible",value:function(e,t){var n=this,i=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),r=e.numbers[i];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===r?r="plural":1===r&&(r=""));var o=function(){return n.options.prepend&&r.toString()?n.options.prepend+r.toString():r.toString()};return"v1"===this.options.compatibilityJSON?1===r?"":"number"==typeof r?"_plural_".concat(r.toString()):o():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?o():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}},{key:"shouldUseIntlApi",value:function(){return!gu.includes(this.options.compatibilityJSON)}}]),e}();function _u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function bu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_u(Object(n),!0).forEach((function(t){Nl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function wu(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=Kl(e,t,n);return!o&&r&&"string"==typeof n&&void 0===(o=eu(e,n,i))&&(o=eu(t,n,i)),o}var ku=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_l(this,e),this.logger=Bl.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||function(e){return e},this.init(t)}return El(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});var t=e.interpolation;this.escape=void 0!==t.escape?t.escape:Ql,this.escapeValue=void 0===t.escapeValue||t.escapeValue,this.useRawValueToEscape=void 0!==t.useRawValueToEscape&&t.useRawValueToEscape,this.prefix=t.prefix?Jl(t.prefix):t.prefixEscaped||"{{",this.suffix=t.suffix?Jl(t.suffix):t.suffixEscaped||"}}",this.formatSeparator=t.formatSeparator?t.formatSeparator:t.formatSeparator||",",this.unescapePrefix=t.unescapeSuffix?"":t.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":t.unescapeSuffix||"",this.nestingPrefix=t.nestingPrefix?Jl(t.nestingPrefix):t.nestingPrefixEscaped||Jl("$t("),this.nestingSuffix=t.nestingSuffix?Jl(t.nestingSuffix):t.nestingSuffixEscaped||Jl(")"),this.nestingOptionsSeparator=t.nestingOptionsSeparator?t.nestingOptionsSeparator:t.nestingOptionsSeparator||",",this.maxReplaces=t.maxReplaces?t.maxReplaces:1e3,this.alwaysFormat=void 0!==t.alwaysFormat&&t.alwaysFormat,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g");var t="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(t,"g");var n="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(n,"g")}},{key:"interpolate",value:function(e,t,n,i){var r,o,s,a=this,c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function l(e){return e.replace(/\$/g,"$$$$")}var u=function(e){if(e.indexOf(a.formatSeparator)<0){var r=wu(t,c,e,a.options.keySeparator,a.options.ignoreJSONStructure);return a.alwaysFormat?a.format(r,void 0,n,bu(bu(bu({},i),t),{},{interpolationkey:e})):r}var o=e.split(a.formatSeparator),s=o.shift().trim(),l=o.join(a.formatSeparator).trim();return a.format(wu(t,c,s,a.options.keySeparator,a.options.ignoreJSONStructure),l,n,bu(bu(bu({},i),t),{},{interpolationkey:s}))};this.resetRegExp();var h=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&void 0!==i.interpolation.skipOnVariables?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,f=[{regex:this.regexpUnescape,safeValue:function(e){return l(e)}},{regex:this.regexp,safeValue:function(e){return a.escapeValue?l(a.escape(e)):l(e)}}];return f.forEach((function(t){for(s=0;r=t.regex.exec(e);){var n=r[1].trim();if(void 0===(o=u(n)))if("function"==typeof h){var c=h(e,r,i);o="string"==typeof c?c:""}else if(i&&Object.prototype.hasOwnProperty.call(i,n))o="";else{if(d){o=r[0];continue}a.logger.warn("missed to pass in variable ".concat(n," for interpolating ").concat(e)),o=""}else"string"==typeof o||a.useRawValueToEscape||(o=Hl(o));var l=t.safeValue(o);if(e=e.replace(r[0],l),d?(t.regex.lastIndex+=o.length,t.regex.lastIndex-=r[0].length):t.regex.lastIndex=0,++s>=a.maxReplaces)break}})),e}},{key:"nest",value:function(e,t){var n,i,r,o=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function a(e,t){var n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;var i=e.split(new RegExp("".concat(n,"[ ]*{"))),o="{".concat(i[1]);e=i[0];var s=(o=this.interpolate(o,r)).match(/'/g),a=o.match(/"/g);(s&&s.length%2==0&&!a||a.length%2!=0)&&(o=o.replace(/'/g,'"'));try{r=JSON.parse(o),t&&(r=bu(bu({},t),r))}catch(t){return this.logger.warn("failed parsing options string in nesting for key ".concat(e),t),"".concat(e).concat(n).concat(o)}return delete r.defaultValue,e}for(;n=this.nestingRegexp.exec(e);){var c=[];(r=(r=bu({},s)).replace&&"string"!=typeof r.replace?r.replace:r).applyPostProcessor=!1,delete r.defaultValue;var l=!1;if(-1!==n[0].indexOf(this.formatSeparator)&&!/{.*}/.test(n[1])){var u=n[1].split(this.formatSeparator).map((function(e){return e.trim()}));n[1]=u.shift(),c=u,l=!0}if((i=t(a.call(this,n[1].trim(),r),r))&&n[0]===e&&"string"!=typeof i)return i;"string"!=typeof i&&(i=Hl(i)),i||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),i=""),l&&(i=c.reduce((function(e,t){return o.format(e,t,s.lng,bu(bu({},s),{},{interpolationkey:n[1].trim()}))}),i.trim())),e=e.replace(n[0],i),this.regexp.lastIndex=0}return e}}]),e}();function Eu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Iu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Eu(Object(n),!0).forEach((function(t){Nl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eu(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Cu(e){var t=e.toLowerCase().trim(),n={};if(e.indexOf("(")>-1){var i=e.split("(");t=i[0].toLowerCase().trim();var r=i[1].substring(0,i[1].length-1);if("currency"===t&&r.indexOf(":")<0)n.currency||(n.currency=r.trim());else if("relativetime"===t&&r.indexOf(":")<0)n.range||(n.range=r.trim());else{r.split(";").forEach((function(e){if(e){var t=Dl(e.split(":")),i=t[0],r=t.slice(1).join(":").trim().replace(/^'+|'+$/g,"");n[i.trim()]||(n[i.trim()]=r),"false"===r&&(n[i.trim()]=!1),"true"===r&&(n[i.trim()]=!0),isNaN(r)||(n[i.trim()]=parseInt(r,10))}}))}}return{formatName:t,formatOptions:n}}function Su(e){var t={};return function(n,i,r){var o=i+JSON.stringify(r),s=t[o];return s||(s=e(i,r),t[o]=s),s(n)}}var xu=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_l(this,e),this.logger=Bl.create("formatter"),this.options=t,this.formats={number:Su((function(e,t){var n=new Intl.NumberFormat(e,Iu({},t));return function(e){return n.format(e)}})),currency:Su((function(e,t){var n=new Intl.NumberFormat(e,Iu(Iu({},t),{},{style:"currency"}));return function(e){return n.format(e)}})),datetime:Su((function(e,t){var n=new Intl.DateTimeFormat(e,Iu({},t));return function(e){return n.format(e)}})),relativetime:Su((function(e,t){var n=new Intl.RelativeTimeFormat(e,Iu({},t));return function(e){return n.format(e,t.range||"day")}})),list:Su((function(e,t){var n=new Intl.ListFormat(e,Iu({},t));return function(e){return n.format(e)}}))},this.init(t)}return El(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=t.interpolation;this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||","}},{key:"add",value:function(e,t){this.formats[e.toLowerCase().trim()]=t}},{key:"addCached",value:function(e,t){this.formats[e.toLowerCase().trim()]=Su(t)}},{key:"format",value:function(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=t.split(this.formatSeparator),s=o.reduce((function(e,t){var o=Cu(t),s=o.formatName,a=o.formatOptions;if(i.formats[s]){var c=e;try{var l=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},u=l.locale||l.lng||r.locale||r.lng||n;c=i.formats[s](e,u,Iu(Iu(Iu({},a),r),l))}catch(e){i.logger.warn(e)}return c}return i.logger.warn("there was no format function for ".concat(s)),e}),e);return s}}]),e}();function Tu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Nu(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tu(Object(n),!0).forEach((function(t){Nl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tu(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ou(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Tl(e);if(t){var r=Tl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return xl(this,n)}}var Ru=function(e){Sl(n,Fl);var t=Ou(n);function n(e,i,r){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return _l(this,n),o=t.call(this),Xl&&Fl.call(Il(o)),o.backend=e,o.store=i,o.services=r,o.languageUtils=r.languageUtils,o.options=s,o.logger=Bl.create("backendConnector"),o.waitingReads=[],o.maxParallelReads=s.maxParallelReads||10,o.readingCalls=0,o.maxRetries=s.maxRetries>=0?s.maxRetries:5,o.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,o.state={},o.queue=[],o.backend&&o.backend.init&&o.backend.init(r,s.backend,s),o}return El(n,[{key:"queueLoad",value:function(e,t,n,i){var r=this,o={},s={},a={},c={};return e.forEach((function(e){var i=!0;t.forEach((function(t){var a="".concat(e,"|").concat(t);!n.reload&&r.store.hasResourceBundle(e,t)?r.state[a]=2:r.state[a]<0||(1===r.state[a]?void 0===s[a]&&(s[a]=!0):(r.state[a]=1,i=!1,void 0===s[a]&&(s[a]=!0),void 0===o[a]&&(o[a]=!0),void 0===c[t]&&(c[t]=!0)))})),i||(a[e]=!0)})),(Object.keys(o).length||Object.keys(s).length)&&this.queue.push({pending:s,pendingCount:Object.keys(s).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(s),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(c)}}},{key:"loaded",value:function(e,t,n){var i=e.split("|"),r=i[0],o=i[1];t&&this.emit("failedLoading",r,o,t),n&&this.store.addResourceBundle(r,o,n),this.state[e]=t?-1:2;var s={};this.queue.forEach((function(n){var i,a,c,l,u,h;i=n.loaded,a=o,l=Wl(i,[r],Object),u=l.obj,h=l.k,u[h]=u[h]||[],c&&(u[h]=u[h].concat(a)),c||u[h].push(a),function(e,t){void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)}(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach((function(e){s[e]||(s[e]={});var t=n.loaded[e];t.length&&t.forEach((function(t){void 0===s[e][t]&&(s[e][t]=!0)}))})),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())})),this.emit("loaded",s),this.queue=this.queue.filter((function(e){return!e.done}))}},{key:"read",value:function(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,s=arguments.length>5?arguments[5]:void 0;if(!e.length)return s(null,{});if(this.readingCalls>=this.maxParallelReads)this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:o,callback:s});else{this.readingCalls++;var a=function(a,c){if(i.readingCalls--,i.waitingReads.length>0){var l=i.waitingReads.shift();i.read(l.lng,l.ns,l.fcName,l.tried,l.wait,l.callback)}a&&c&&r<i.maxRetries?setTimeout((function(){i.read.call(i,e,t,n,r+1,2*o,s)}),o):s(a,c)},c=this.backend[n].bind(this.backend);if(2!==c.length)return c(e,t,a);try{var l=c(e,t);l&&"function"==typeof l.then?l.then((function(e){return a(null,e)})).catch(a):a(null,l)}catch(e){a(e)}}}},{key:"prepareLoading",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();"string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),"string"==typeof t&&(t=[t]);var o=this.queueLoad(e,t,i,r);if(!o.toLoad.length)return o.pending.length||r(),null;o.toLoad.forEach((function(e){n.loadOne(e)}))}},{key:"load",value:function(e,t,n){this.prepareLoading(e,t,{},n)}},{key:"reload",value:function(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}},{key:"loadOne",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=e.split("|"),r=i[0],o=i[1];this.read(r,o,"read",void 0,void 0,(function(i,s){i&&t.logger.warn("".concat(n,"loading namespace ").concat(o," for language ").concat(r," failed"),i),!i&&s&&t.logger.log("".concat(n,"loaded namespace ").concat(o," for language ").concat(r),s),t.loaded(e,i,s)}))}},{key:"saveMissing",value:function(e,t,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t))this.logger.warn('did not save key "'.concat(n,'" as the namespace "').concat(t,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=n&&""!==n){if(this.backend&&this.backend.create){var a=Nu(Nu({},o),{},{isUpdate:r}),c=this.backend.create.bind(this.backend);if(c.length<6)try{var l;(l=5===c.length?c(e,t,n,i,a):c(e,t,n,i))&&"function"==typeof l.then?l.then((function(e){return s(null,e)})).catch(s):s(null,l)}catch(e){s(e)}else c(e,t,n,i,s,a)}e&&e[0]&&this.store.addResource(e[0],t,n,i)}}}]),n}();function Pu(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t={};if("object"===vl(e[1])&&(t=e[1]),"string"==typeof e[1]&&(t.defaultValue=e[1]),"string"==typeof e[2]&&(t.tDescription=e[2]),"object"===vl(e[2])||"object"===vl(e[3])){var n=e[3]||e[2];Object.keys(n).forEach((function(e){t[e]=n[e]}))}return t},interpolation:{escapeValue:!0,format:function(e,t,n,i){return e},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Au(e){return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Lu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Du(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Lu(Object(n),!0).forEach((function(t){Nl(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lu(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Mu(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Tl(e);if(t){var r=Tl(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return xl(this,n)}}function Uu(){}function ju(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t){"function"==typeof e[t]&&(e[t]=e[t].bind(e))}))}var Bu=function(e){Sl(n,Fl);var t=Mu(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(_l(this,n),e=t.call(this),Xl&&Fl.call(Il(e)),e.options=Au(i),e.services={},e.logger=Bl,e.modules={external:[]},ju(Il(e)),r&&!e.isInitialized&&!i.isClone){if(!e.options.initImmediate)return e.init(i,r),xl(e,Il(e));setTimeout((function(){e.init(i,r)}),0)}return e}return El(n,[{key:"init",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;"function"==typeof t&&(n=t,t={}),!t.defaultNS&&!1!==t.defaultNS&&t.ns&&("string"==typeof t.ns?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));var i=Pu();function r(e){return e?"function"==typeof e?new e:e:null}if(this.options=Du(Du(Du({},i),this.options),Au(t)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=Du(Du({},i.interpolation),this.options.interpolation)),void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator),!this.options.isClone){var o;this.modules.logger?Bl.init(r(this.modules.logger),this.options):Bl.init(null,this.options),this.modules.formatter?o=this.modules.formatter:"undefined"!=typeof Intl&&(o=xu);var s=new du(this.options);this.store=new ru(this.options.resources,this.options);var a=this.services;a.logger=Bl,a.resourceStore=this.store,a.languageUtils=s,a.pluralResolver=new vu(s,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!o||this.options.interpolation.format&&this.options.interpolation.format!==i.interpolation.format||(a.formatter=r(o),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new ku(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new Ru(r(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];e.emit.apply(e,[t].concat(i))})),this.modules.languageDetector&&(a.languageDetector=r(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=r(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new uu(this.services,this.options),this.translator.on("*",(function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];e.emit.apply(e,[t].concat(i))})),this.modules.external.forEach((function(t){t.init&&t.init(e)}))}if(this.format=this.options.interpolation.format,n||(n=Uu),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&"dev"!==c[0]&&(this.options.lng=c[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");var l=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];l.forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}}));var u=["addResource","addResources","addResourceBundle","removeResourceBundle"];u.forEach((function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments),e}}));var h=ql(),d=function(){var t=function(t,i){e.isInitialized&&!e.initializedStoreOnce&&e.logger.warn("init: i18next is already initialized. You should call init just once!"),e.isInitialized=!0,e.options.isClone||e.logger.log("initialized",e.options),e.emit("initialized",e.options),h.resolve(i),n(t,i)};if(e.languages&&"v1"!==e.options.compatibilityAPI&&!e.isInitialized)return t(null,e.t.bind(e));e.changeLanguage(e.options.lng,t)};return this.options.resources||!this.options.initImmediate?d():setTimeout(d,0),h}},{key:"loadResources",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Uu,i=n,r="string"==typeof e?e:this.language;if("function"==typeof e&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&"cimode"===r.toLowerCase())return i();var o=[],s=function(e){e&&t.services.languageUtils.toResolveHierarchy(e).forEach((function(e){o.indexOf(e)<0&&o.push(e)}))};if(r)s(r);else{var a=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);a.forEach((function(e){return s(e)}))}this.options.preload&&this.options.preload.forEach((function(e){return s(e)})),this.services.backendConnector.load(o,this.options.ns,(function(e){e||t.resolvedLanguage||!t.language||t.setResolvedLanguage(t.language),i(e)}))}else i(null)}},{key:"reloadResources",value:function(e,t,n){var i=ql();return e||(e=this.languages),t||(t=this.options.ns),n||(n=Uu),this.services.backendConnector.reload(e,t,(function(e){i.resolve(),n(e)})),i}},{key:"use",value:function(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&ou.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}},{key:"setResolvedLanguage",value:function(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(var t=0;t<this.languages.length;t++){var n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}},{key:"changeLanguage",value:function(e,t){var n=this;this.isLanguageChangingTo=e;var i=ql();this.emit("languageChanging",e);var r=function(e){n.language=e,n.languages=n.services.languageUtils.toResolveHierarchy(e),n.resolvedLanguage=void 0,n.setResolvedLanguage(e)},o=function(o){e||o||!n.services.languageDetector||(o=[]);var s="string"==typeof o?o:n.services.languageUtils.getBestMatchFromCodes(o);s&&(n.language||r(s),n.translator.language||n.translator.changeLanguage(s),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage&&n.services.languageDetector.cacheUserLanguage(s)),n.loadResources(s,(function(e){!function(e,o){o?(r(o),n.translator.changeLanguage(o),n.isLanguageChangingTo=void 0,n.emit("languageChanged",o),n.logger.log("languageChanged",o)):n.isLanguageChangingTo=void 0,i.resolve((function(){return n.t.apply(n,arguments)})),t&&t(e,(function(){return n.t.apply(n,arguments)}))}(e,s)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(o):this.services.languageDetector.detect(o):o(e):o(this.services.languageDetector.detect()),i}},{key:"getFixedT",value:function(e,t,n){var i=this,r=function e(t,r){var o;if("object"!==vl(r)){for(var s=arguments.length,a=new Array(s>2?s-2:0),c=2;c<s;c++)a[c-2]=arguments[c];o=i.options.overloadTranslationOptionHandler([t,r].concat(a))}else o=Du({},r);o.lng=o.lng||e.lng,o.lngs=o.lngs||e.lngs,o.ns=o.ns||e.ns,o.keyPrefix=o.keyPrefix||n||e.keyPrefix;var l,u=i.options.keySeparator||".";return l=o.keyPrefix&&Array.isArray(t)?t.map((function(e){return"".concat(o.keyPrefix).concat(u).concat(e)})):o.keyPrefix?"".concat(o.keyPrefix).concat(u).concat(t):t,i.t(l,o)};return"string"==typeof e?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}},{key:"t",value:function(){var e;return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var i=this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===i.toLowerCase())return!0;var s=function(e,n){var i=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===i||2===i};if(n.precheck){var a=n.precheck(this,s);if(void 0!==a)return a}return!!this.hasResourceBundle(i,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!s(i,e)||r&&!s(o,e)))}},{key:"loadNamespaces",value:function(e,t){var n=this,i=ql();return this.options.ns?("string"==typeof e&&(e=[e]),e.forEach((function(e){n.options.ns.indexOf(e)<0&&n.options.ns.push(e)})),this.loadResources((function(e){i.resolve(),t&&t(e)})),i):(t&&t(),Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var n=ql();"string"==typeof e&&(e=[e]);var i=this.options.preload||[],r=e.filter((function(e){return i.indexOf(e)<0}));return r.length?(this.options.preload=i.concat(r),this.loadResources((function(e){n.resolve(),t&&t(e)})),n):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";var t=this.services&&this.services.languageUtils||new du(Pu());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Uu,r=Du(Du(Du({},this.options),t),{isClone:!0}),o=new n(r);void 0===t.debug&&void 0===t.prefix||(o.logger=o.logger.clone(t));var s=["store","services","language"];return s.forEach((function(t){o[t]=e[t]})),o.services=Du({},this.services),o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o.translator=new uu(o.services,o.options),o.translator.on("*",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];o.emit.apply(o,[e].concat(n))})),o.init(r,i),o.translator.options=o.options,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),n}();Nl(Bu,"createInstance",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return new Bu(e,t)}));var Fu=Bu.createInstance();Fu.createInstance=Bu.createInstance;Fu.createInstance,Fu.dir,Fu.init,Fu.loadResources,Fu.reloadResources,Fu.use,Fu.changeLanguage,Fu.getFixedT,Fu.t,Fu.exists,Fu.setDefaultNamespace,Fu.hasLoadedNamespace,Fu.loadNamespaces,Fu.loadLanguages;var qu,Hu,zu,Wu,Vu={};qu=Vu,Hu="Spinner",zu=function(){return Gu},Wu=function(e){return Gu=e},Object.defineProperty(qu,Hu,{get:zu,set:Wu,enumerable:!0,configurable:!0});var $u=function(){return $u=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},$u.apply(this,arguments)},Ku={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",animation:"spinner-line-fade-default",rotate:0,direction:1,speed:1,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"0 0 1px transparent",position:"absolute"},Gu=function(){function e(e){void 0===e&&(e={}),this.opts=$u($u({},Ku),e)}return e.prototype.spin=function(e){return this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),Ju(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),e&&e.insertBefore(this.el,e.firstChild||null),function(e,t){var n=Math.round(t.corners*t.width*500)/1e3+"px",i="none";!0===t.shadow?i="0 2px 4px #000":"string"==typeof t.shadow&&(i=t.shadow);for(var r=function(e){for(var t=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,r=e.split(",");i<r.length;i++){var o=r[i].match(t);if(null!==o){var s=+o[2],a=+o[5],c=o[4],l=o[7];0!==s||c||(c=l),0!==a||l||(l=c),c===l&&n.push({prefix:o[1]||"",x:s,y:a,xUnits:c,yUnits:l,end:o[8]})}}return n}(i),o=0;o<t.lines;o++){var s=~~(360/t.lines*o+t.rotate),a=Ju(document.createElement("div"),{position:"absolute",top:-t.width/2+"px",width:t.length+t.width+"px",height:t.width+"px",background:Yu(t.fadeColor,o),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+t.radius+"px)"}),c=o*t.direction/t.lines/t.speed;c-=1/t.speed;var l=Ju(document.createElement("div"),{width:"100%",height:"100%",background:Yu(t.color,o),borderRadius:n,boxShadow:Qu(r,s),animation:1/t.speed+"s linear "+c+"s infinite "+t.animation});a.appendChild(l),e.appendChild(a)}}(this.el,this.opts),this},e.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},e}();function Ju(e,t){for(var n in t)e.style[n]=t[n];return e}function Yu(e,t){return"string"==typeof e?e:e[t%e.length]}function Qu(e,t){for(var n=[],i=0,r=e;i<r.length;i++){var o=r[i],s=Xu(o.x,o.y,t);n.push(o.prefix+s[0]+o.xUnits+" "+s[1]+o.yUnits+o.end)}return n.join(", ")}function Xu(e,t,n){var i=n*Math.PI/180,r=Math.sin(i),o=Math.cos(i);return[Math.round(1e3*(e*o+t*r))/1e3,Math.round(1e3*(-e*r+t*o))/1e3]}var Zu={lines:15,length:0,width:15,radius:40,scale:1.25,corners:1,speed:1.4,rotate:0,animation:"spinner-line-fade-default",direction:1,color:"#B92F2C",fadeColor:"transparent",top:"42%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"fixed"};function eh(e,t){return function(){return e.apply(t,arguments)}}const{toString:th}=Object.prototype,{getPrototypeOf:nh}=Object,ih=(rh=Object.create(null),e=>{const t=th.call(e);return rh[t]||(rh[t]=t.slice(8,-1).toLowerCase())});var rh;const oh=e=>(e=e.toLowerCase(),t=>ih(t)===e),sh=e=>t=>typeof t===e,{isArray:ah}=Array,ch=sh("undefined");const lh=oh("ArrayBuffer");const uh=sh("string"),hh=sh("function"),dh=sh("number"),fh=e=>null!==e&&"object"==typeof e,ph=e=>{if("object"!==ih(e))return!1;const t=nh(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},gh=oh("Date"),mh=oh("File"),yh=oh("Blob"),vh=oh("FileList"),_h=oh("URLSearchParams");function bh(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),ah(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let s;for(i=0;i<o;i++)s=r[i],t.call(null,e[s],s,e)}}function wh(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const kh="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,Eh=e=>!ch(e)&&e!==kh;const Ih=(Ch="undefined"!=typeof Uint8Array&&nh(Uint8Array),e=>Ch&&e instanceof Ch);var Ch;const Sh=oh("HTMLFormElement"),xh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Th=oh("RegExp"),Nh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};bh(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)},Oh={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var Rh={isArray:ah,isArrayBuffer:lh,isBuffer:function(e){return null!==e&&!ch(e)&&null!==e.constructor&&!ch(e.constructor)&&hh(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||hh(e.append)&&("formdata"===(t=ih(e))||"object"===t&&hh(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&lh(e.buffer),t},isString:uh,isNumber:dh,isBoolean:e=>!0===e||!1===e,isObject:fh,isPlainObject:ph,isUndefined:ch,isDate:gh,isFile:mh,isBlob:yh,isRegExp:Th,isFunction:hh,isStream:e=>fh(e)&&hh(e.pipe),isURLSearchParams:_h,isTypedArray:Ih,isFileList:vh,forEach:bh,merge:function e(){const{caseless:t}=Eh(this)&&this||{},n={},i=(i,r)=>{const o=t&&wh(n,r)||r;ph(n[o])&&ph(i)?n[o]=e(n[o],i):ph(i)?n[o]=e({},i):ah(i)?n[o]=i.slice():n[o]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&bh(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(bh(t,((t,i)=>{n&&hh(t)?e[i]=eh(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,o,s;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)s=r[o],i&&!i(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&nh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ih,kindOfTest:oh,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(ah(e))return e;let t=e.length;if(!dh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:Sh,hasOwnProperty:xh,hasOwnProp:xh,reduceDescriptors:Nh,freezeMethods:e=>{Nh(e,((t,n)=>{if(hh(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];hh(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return ah(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:wh,global:kh,isContextDefined:Eh,ALPHABET:Oh,generateString:(e=16,t=Oh.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&hh(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(fh(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=ah(e)?[]:{};return bh(e,((e,t)=>{const o=n(e,i+1);!ch(o)&&(r[t]=o)})),t[i]=void 0,r}}return e};return n(e,0)}};function Ph(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}Rh.inherits(Ph,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Rh.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ah=Ph.prototype,Lh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Lh[e]={value:e}})),Object.defineProperties(Ph,Lh),Object.defineProperty(Ah,"isAxiosError",{value:!0}),Ph.from=(e,t,n,i,r,o)=>{const s=Object.create(Ah);return Rh.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Ph.call(s,e.message,t,n,i,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var Dh,Mh,Uh,jh=Ph;Mh=function(e){var t,n,i=Kh(e),r=i[0],o=i[1],s=new zh(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),a=0,c=o>0?r-4:r;for(n=0;n<c;n+=4)t=Hh[e.charCodeAt(n)]<<18|Hh[e.charCodeAt(n+1)]<<12|Hh[e.charCodeAt(n+2)]<<6|Hh[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===o&&(t=Hh[e.charCodeAt(n)]<<2|Hh[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===o&&(t=Hh[e.charCodeAt(n)]<<10|Hh[e.charCodeAt(n+1)]<<4|Hh[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},Uh=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(Gh(e,s,s+o>a?a:s+o));1===i?(t=e[n-1],r.push(qh[t>>2]+qh[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(qh[t>>10]+qh[t>>4&63]+qh[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Bh,Fh,qh=[],Hh=[],zh="undefined"!=typeof Uint8Array?Uint8Array:Array,Wh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vh=0,$h=Wh.length;Vh<$h;++Vh)qh[Vh]=Wh[Vh],Hh[Wh.charCodeAt(Vh)]=Vh;function Kh(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Gh(e,t,n){for(var i,r,o=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(qh[(r=i)>>18&63]+qh[r>>12&63]+qh[r>>6&63]+qh[63&r]);return o.join("")}Hh["-".charCodeAt(0)]=62,Hh["_".charCodeAt(0)]=63,Bh=function(e,t,n,i,r){var o,s,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,o=f&(1<<-u)-1,f>>=-u,u+=a;u>0;o=256*o+e[t+h],h+=d,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=i;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===o)o=1-l;else{if(o===c)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=l}return(f?-1:1)*s*Math.pow(2,o-i)},Fh=function(e,t,n,i,r,o){var s,a,c,l=8*o-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(s++,c/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*c-1)*Math.pow(2,r),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,l+=r;l>0;e[n+f]=255&s,f+=p,s/=256,l-=8);e[n+f-p]|=128*g};const Jh="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;Dh=Qh;function Yh(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Qh.prototype),t}function Qh(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return ed(e)}return Xh(e,t,n)}function Xh(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Qh.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|rd(e,t);let i=Yh(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Ud(e,Uint8Array)){const t=new Uint8Array(e);return nd(t.buffer,t.byteOffset,t.byteLength)}return td(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Ud(e,ArrayBuffer)||e&&Ud(e.buffer,ArrayBuffer))return nd(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Ud(e,SharedArrayBuffer)||e&&Ud(e.buffer,SharedArrayBuffer)))return nd(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return Qh.from(i,t,n);const r=function(e){if(Qh.isBuffer(e)){const t=0|id(e.length),n=Yh(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||jd(e.length)?Yh(0):td(e);if("Buffer"===e.type&&Array.isArray(e.data))return td(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Qh.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Zh(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ed(e){return Zh(e),Yh(e<0?0:0|id(e))}function td(e){const t=e.length<0?0:0|id(e.length),n=Yh(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function nd(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,Qh.prototype),i}function id(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function rd(e,t){if(Qh.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Ud(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ld(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Dd(e).length;default:if(r)return i?-1:Ld(e).length;t=(""+t).toLowerCase(),r=!0}}function od(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return vd(this,t,n);case"utf8":case"utf-8":return gd(this,t,n);case"ascii":return md(this,t,n);case"latin1":case"binary":return yd(this,t,n);case"base64":return pd(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _d(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function sd(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function ad(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),jd(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=Qh.from(t,i)),Qh.isBuffer(t))return 0===t.length?-1:cd(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):cd(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function cd(e,t,n,i,r){let o,s=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,n/=2}function l(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let i=-1;for(o=n;o<a;o++)if(l(e,o)===l(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===c)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+c>a&&(n=a-c),o=n;o>=0;o--){let n=!0;for(let i=0;i<c;i++)if(l(e,o+i)!==l(t,i)){n=!1;break}if(n)return o}return-1}function ld(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(jd(i))return s;e[n+s]=i}return s}function ud(e,t,n,i){return Md(Ld(t,e.length-n),e,n,i)}function hd(e,t,n,i){return Md(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function dd(e,t,n,i){return Md(Dd(t),e,n,i)}function fd(e,t,n,i){return Md(function(e,t){let n,i,r;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function pd(e,t,n){return 0===t&&n===e.length?Uh(e):Uh(e.slice(t,n))}function gd(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=n){let n,i,a,c;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(o=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}Qh.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Qh.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Qh.prototype,"parent",{enumerable:!0,get:function(){if(Qh.isBuffer(this))return this.buffer}}),Object.defineProperty(Qh.prototype,"offset",{enumerable:!0,get:function(){if(Qh.isBuffer(this))return this.byteOffset}}),Qh.poolSize=8192,Qh.from=function(e,t,n){return Xh(e,t,n)},Object.setPrototypeOf(Qh.prototype,Uint8Array.prototype),Object.setPrototypeOf(Qh,Uint8Array),Qh.alloc=function(e,t,n){return function(e,t,n){return Zh(e),e<=0?Yh(e):void 0!==t?"string"==typeof n?Yh(e).fill(t,n):Yh(e).fill(t):Yh(e)}(e,t,n)},Qh.allocUnsafe=function(e){return ed(e)},Qh.allocUnsafeSlow=function(e){return ed(e)},Qh.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Qh.prototype},Qh.compare=function(e,t){if(Ud(e,Uint8Array)&&(e=Qh.from(e,e.offset,e.byteLength)),Ud(t,Uint8Array)&&(t=Qh.from(t,t.offset,t.byteLength)),!Qh.isBuffer(e)||!Qh.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},Qh.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Qh.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Qh.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=Qh.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Ud(t,Uint8Array))r+t.length>i.length?(Qh.isBuffer(t)||(t=Qh.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!Qh.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},Qh.byteLength=rd,Qh.prototype._isBuffer=!0,Qh.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)sd(this,t,t+1);return this},Qh.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)sd(this,t,t+3),sd(this,t+1,t+2);return this},Qh.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)sd(this,t,t+7),sd(this,t+1,t+6),sd(this,t+2,t+5),sd(this,t+3,t+4);return this},Qh.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?gd(this,0,e):od.apply(this,arguments)},Qh.prototype.toLocaleString=Qh.prototype.toString,Qh.prototype.equals=function(e){if(!Qh.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Qh.compare(this,e)},Qh.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},Jh&&(Qh.prototype[Jh]=Qh.prototype.inspect),Qh.prototype.compare=function(e,t,n,i,r){if(Ud(e,Uint8Array)&&(e=Qh.from(e,e.offset,e.byteLength)),!Qh.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){o=c[e],s=l[e];break}return o<s?-1:s<o?1:0},Qh.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Qh.prototype.indexOf=function(e,t,n){return ad(this,e,t,n,!0)},Qh.prototype.lastIndexOf=function(e,t,n){return ad(this,e,t,n,!1)},Qh.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return ld(this,e,t,n);case"utf8":case"utf-8":return ud(this,e,t,n);case"ascii":case"latin1":case"binary":return hd(this,e,t,n);case"base64":return dd(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fd(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},Qh.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function md(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function yd(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function vd(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=Bd[e[i]];return r}function _d(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function bd(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function wd(e,t,n,i,r,o){if(!Qh.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function kd(e,t,n,i,r){Od(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function Ed(e,t,n,i,r){Od(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function Id(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Cd(e,t,n,i,r){return t=+t,n>>>=0,r||Id(e,0,n,4),Fh(e,t,n,i,23,4),n+4}function Sd(e,t,n,i,r){return t=+t,n>>>=0,r||Id(e,0,n,8),Fh(e,t,n,i,52,8),n+8}Qh.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,Qh.prototype),i},Qh.prototype.readUintLE=Qh.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||bd(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},Qh.prototype.readUintBE=Qh.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||bd(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},Qh.prototype.readUint8=Qh.prototype.readUInt8=function(e,t){return e>>>=0,t||bd(e,1,this.length),this[e]},Qh.prototype.readUint16LE=Qh.prototype.readUInt16LE=function(e,t){return e>>>=0,t||bd(e,2,this.length),this[e]|this[e+1]<<8},Qh.prototype.readUint16BE=Qh.prototype.readUInt16BE=function(e,t){return e>>>=0,t||bd(e,2,this.length),this[e]<<8|this[e+1]},Qh.prototype.readUint32LE=Qh.prototype.readUInt32LE=function(e,t){return e>>>=0,t||bd(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Qh.prototype.readUint32BE=Qh.prototype.readUInt32BE=function(e,t){return e>>>=0,t||bd(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Qh.prototype.readBigUInt64LE=Fd((function(e){Rd(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Pd(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Qh.prototype.readBigUInt64BE=Fd((function(e){Rd(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Pd(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Qh.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||bd(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},Qh.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||bd(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},Qh.prototype.readInt8=function(e,t){return e>>>=0,t||bd(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Qh.prototype.readInt16LE=function(e,t){e>>>=0,t||bd(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Qh.prototype.readInt16BE=function(e,t){e>>>=0,t||bd(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Qh.prototype.readInt32LE=function(e,t){return e>>>=0,t||bd(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Qh.prototype.readInt32BE=function(e,t){return e>>>=0,t||bd(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Qh.prototype.readBigInt64LE=Fd((function(e){Rd(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Pd(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Qh.prototype.readBigInt64BE=Fd((function(e){Rd(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||Pd(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Qh.prototype.readFloatLE=function(e,t){return e>>>=0,t||bd(e,4,this.length),Bh(this,e,!0,23,4)},Qh.prototype.readFloatBE=function(e,t){return e>>>=0,t||bd(e,4,this.length),Bh(this,e,!1,23,4)},Qh.prototype.readDoubleLE=function(e,t){return e>>>=0,t||bd(e,8,this.length),Bh(this,e,!0,52,8)},Qh.prototype.readDoubleBE=function(e,t){return e>>>=0,t||bd(e,8,this.length),Bh(this,e,!1,52,8)},Qh.prototype.writeUintLE=Qh.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){wd(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},Qh.prototype.writeUintBE=Qh.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){wd(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},Qh.prototype.writeUint8=Qh.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,1,255,0),this[t]=255&e,t+1},Qh.prototype.writeUint16LE=Qh.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Qh.prototype.writeUint16BE=Qh.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Qh.prototype.writeUint32LE=Qh.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Qh.prototype.writeUint32BE=Qh.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Qh.prototype.writeBigUInt64LE=Fd((function(e,t=0){return kd(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Qh.prototype.writeBigUInt64BE=Fd((function(e,t=0){return Ed(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Qh.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);wd(this,e,t,n,i-1,-i)}let r=0,o=1,s=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},Qh.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);wd(this,e,t,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},Qh.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Qh.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Qh.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Qh.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Qh.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||wd(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Qh.prototype.writeBigInt64LE=Fd((function(e,t=0){return kd(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Qh.prototype.writeBigInt64BE=Fd((function(e,t=0){return Ed(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Qh.prototype.writeFloatLE=function(e,t,n){return Cd(this,e,t,!0,n)},Qh.prototype.writeFloatBE=function(e,t,n){return Cd(this,e,t,!1,n)},Qh.prototype.writeDoubleLE=function(e,t,n){return Sd(this,e,t,!0,n)},Qh.prototype.writeDoubleBE=function(e,t,n){return Sd(this,e,t,!1,n)},Qh.prototype.copy=function(e,t,n,i){if(!Qh.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},Qh.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Qh.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=Qh.isBuffer(e)?e:Qh.from(e,i),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%s]}return this};const xd={};function Td(e,t,n){xd[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Nd(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Od(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new xd.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Rd(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||Pd(t,e.length-(n+1))}(i,r,o)}function Rd(e,t){if("number"!=typeof e)throw new xd.ERR_INVALID_ARG_TYPE(t,"number",e)}function Pd(e,t,n){if(Math.floor(e)!==e)throw Rd(e,n),new xd.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new xd.ERR_BUFFER_OUT_OF_BOUNDS;throw new xd.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}Td("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Td("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),Td("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Nd(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Nd(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const Ad=/[^+/0-9A-Za-z-_]/g;function Ld(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Dd(e){return Mh(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ad,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Md(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Ud(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function jd(e){return e!=e}const Bd=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function Fd(e){return"undefined"==typeof BigInt?qd:e}function qd(){throw new Error("BigInt not supported")}var Hd=Dh;function zd(e){return Rh.isPlainObject(e)||Rh.isArray(e)}function Wd(e){return Rh.endsWith(e,"[]")?e.slice(0,-2):e}function Vd(e,t,n){return e?e.concat(t).map((function(e,t){return e=Wd(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const $d=Rh.toFlatObject(Rh,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Kd=function(e,t,n){if(!Rh.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(n=Rh.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Rh.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&Rh.isSpecCompliantForm(t);if(!Rh.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(Rh.isDate(e))return e.toISOString();if(!a&&Rh.isBlob(e))throw new jh("Blob is not supported. Use a Buffer instead.");return Rh.isArrayBuffer(e)||Rh.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Hd.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(Rh.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(Rh.isArray(e)&&function(e){return Rh.isArray(e)&&!e.some(zd)}(e)||(Rh.isFileList(e)||Rh.endsWith(n,"[]"))&&(a=Rh.toArray(e)))return n=Wd(n),a.forEach((function(e,i){!Rh.isUndefined(e)&&null!==e&&t.append(!0===s?Vd([n],i,o):null===s?n:n+"[]",c(e))})),!1;return!!zd(e)||(t.append(Vd(r,n,o),c(e)),!1)}const u=[],h=Object.assign($d,{defaultVisitor:l,convertValue:c,isVisitable:zd});if(!Rh.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!Rh.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),Rh.forEach(n,(function(n,o){!0===(!(Rh.isUndefined(n)||null===n)&&r.call(t,n,Rh.isString(o)?o.trim():o,i,h))&&e(n,i?i.concat(o):[o])})),u.pop()}}(e),t};function Gd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Jd(e,t){this._pairs=[],e&&Kd(e,this,t)}const Yd=Jd.prototype;Yd.append=function(e,t){this._pairs.push([e,t])},Yd.toString=function(e){const t=e?function(t){return e.call(this,t,Gd)}:Gd;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Qd=Jd;function Xd(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zd(e,t,n){if(!t)return e;const i=n&&n.encode||Xd,r=n&&n.serialize;let o;if(o=r?r(t,n):Rh.isURLSearchParams(t)?t.toString():new Qd(t,n).toString(i),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}var ef=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Rh.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},tf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var nf={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Qd,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function rf(e,t){return Kd(e,new nf.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return nf.isNode&&Rh.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var of=function(e){function t(e,n,i,r){let o=e[r++];const s=Number.isFinite(+o),a=r>=e.length;if(o=!o&&Rh.isArray(i)?i.length:o,a)return Rh.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&Rh.isObject(i[o])||(i[o]=[]);return t(e,n,i[o],r)&&Rh.isArray(i[o])&&(i[o]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}(i[o])),!s}if(Rh.isFormData(e)&&Rh.isFunction(e.entries)){const n={};return Rh.forEachEntry(e,((e,i)=>{t(function(e){return Rh.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const sf={"Content-Type":void 0};const af={transitional:tf,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=Rh.isObject(e);r&&Rh.isHTMLForm(e)&&(e=new FormData(e));if(Rh.isFormData(e))return i&&i?JSON.stringify(of(e)):e;if(Rh.isArrayBuffer(e)||Rh.isBuffer(e)||Rh.isStream(e)||Rh.isFile(e)||Rh.isBlob(e))return e;if(Rh.isArrayBufferView(e))return e.buffer;if(Rh.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return rf(e,this.formSerializer).toString();if((o=Rh.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Kd(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(Rh.isString(e))try{return(t||JSON.parse)(e),Rh.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||af.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&Rh.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw jh.from(e,jh.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nf.classes.FormData,Blob:nf.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Rh.forEach(["delete","get","head"],(function(e){af.headers[e]={}})),Rh.forEach(["post","put","patch"],(function(e){af.headers[e]=Rh.merge(sf)}));var cf=af;const lf=Rh.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var uf=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&lf[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const hf=Symbol("internals");function df(e){return e&&String(e).trim().toLowerCase()}function ff(e){return!1===e||null==e?e:Rh.isArray(e)?e.map(ff):String(e)}function pf(e,t,n,i,r){return Rh.isFunction(i)?i.call(this,t,n):(r&&(t=n),Rh.isString(t)?Rh.isString(i)?-1!==t.indexOf(i):Rh.isRegExp(i)?i.test(t):void 0:void 0)}let gf=Symbol.iterator,mf=Symbol.toStringTag;class yf{set(e,t,n){const i=this;function r(e,t,n){const r=df(t);if(!r)throw new Error("header name must be a non-empty string");const o=Rh.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||t]=ff(e))}const o=(e,t)=>Rh.forEach(e,((e,n)=>r(e,n,t)));return Rh.isPlainObject(e)||e instanceof this.constructor?o(e,t):Rh.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?o(uf(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=df(e)){const n=Rh.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(Rh.isFunction(t))return t.call(this,e,n);if(Rh.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=df(e)){const n=Rh.findKey(this,e);return!(!n||void 0===this[n]||t&&!pf(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=df(e)){const r=Rh.findKey(n,e);!r||t&&!pf(0,n[r],r,t)||(delete n[r],i=!0)}}return Rh.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!pf(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return Rh.forEach(this,((i,r)=>{const o=Rh.findKey(n,r);if(o)return t[o]=ff(i),void delete t[r];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete t[r],t[s]=ff(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Rh.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&Rh.isArray(n)?n.join(", "):n)})),t}[gf](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[mf](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[hf]=this[hf]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=df(e);t[i]||(!function(e,t){const n=Rh.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return Rh.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}yf.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Rh.freezeMethods(yf.prototype),Rh.freezeMethods(yf);var vf=yf;function _f(e,t){const n=this||cf,i=t||n,r=vf.from(i.headers);let o=i.data;return Rh.forEach(e,(function(e){o=e.call(n,o,r.normalize(),t?t.status:void 0)})),r.normalize(),o}function bf(e){return!(!e||!e.__CANCEL__)}function wf(e,t,n){jh.call(this,null==e?"canceled":e,jh.ERR_CANCELED,t,n),this.name="CanceledError"}Rh.inherits(wf,jh,{__CANCEL__:!0});var kf=wf;function Ef(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new jh("Request failed with status code "+n.status,[jh.ERR_BAD_REQUEST,jh.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var If=nf.isStandardBrowserEnv?{write:function(e,t,n,i,r,o){const s=[];s.push(e+"="+encodeURIComponent(t)),Rh.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Rh.isString(i)&&s.push("path="+i),Rh.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Cf(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Sf(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Cf(e,t):t}var xf=nf.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=Rh.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Tf(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Nf=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[s];r||(r=c),n[o]=a,i[o]=c;let u=s,h=0;for(;u!==o;)h+=n[u++],u%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function Of(e,t){let n=0;const i=Nf(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,c=i(a);n=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&o<=s?(s-o)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}var Rf="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=vf.from(e.headers).normalize(),o=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}Rh.isFormData(i)&&(nf.isStandardBrowserEnv||nf.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=Sf(e.baseURL,e.url);function u(){if(!c)return;const i=vf.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());Ef((function(e){t(e),a()}),(function(e){n(e),a()}),{data:o&&"text"!==o&&"json"!==o?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),Zd(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new jh("Request aborted",jh.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new jh("Network Error",jh.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||tf;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new jh(t,i.clarifyTimeoutError?jh.ETIMEDOUT:jh.ECONNABORTED,e,c)),c=null},nf.isStandardBrowserEnv){const t=(e.withCredentials||xf(l))&&e.xsrfCookieName&&If.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&Rh.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),Rh.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&"json"!==o&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",Of(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Of(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new kf(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=Tf(l);h&&-1===nf.protocols.indexOf(h)?n(new jh("Unsupported protocol "+h+":",jh.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const Pf={http:null,xhr:Rf};Rh.forEach(Pf,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Af={getAdapter:e=>{e=Rh.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=Rh.isString(n)?Pf[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new jh(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Rh.hasOwnProp(Pf,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Rh.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Pf};function Lf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new kf(null,e)}function Df(e){Lf(e),e.headers=vf.from(e.headers),e.data=_f.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Af.getAdapter(e.adapter||cf.adapter)(e).then((function(t){return Lf(e),t.data=_f.call(e,e.transformResponse,t),t.headers=vf.from(t.headers),t}),(function(t){return bf(t)||(Lf(e),t&&t.response&&(t.response.data=_f.call(e,e.transformResponse,t.response),t.response.headers=vf.from(t.response.headers))),Promise.reject(t)}))}const Mf=e=>e instanceof vf?e.toJSON():e;function Uf(e,t){t=t||{};const n={};function i(e,t,n){return Rh.isPlainObject(e)&&Rh.isPlainObject(t)?Rh.merge.call({caseless:n},e,t):Rh.isPlainObject(t)?Rh.merge({},t):Rh.isArray(t)?t.slice():t}function r(e,t,n){return Rh.isUndefined(t)?Rh.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function o(e,t){if(!Rh.isUndefined(t))return i(void 0,t)}function s(e,t){return Rh.isUndefined(t)?Rh.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(Mf(e),Mf(t),!0)};return Rh.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const o=c[i]||r,s=o(e[i],t[i],i);Rh.isUndefined(s)&&o!==a||(n[i]=s)})),n}const jf={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{jf[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Bf={};jf.transitional=function(e,t,n){function i(e,t){return"[Axios v1.3.6] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,o)=>{if(!1===e)throw new jh(i(r," has been removed"+(t?" in "+t:"")),jh.ERR_DEPRECATED);return t&&!Bf[r]&&(Bf[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}};var Ff={assertOptions:function(e,t,n){if("object"!=typeof e)throw new jh("options must be an object",jh.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const o=i[r],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new jh("option "+o+" must be "+n,jh.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new jh("Unknown option "+o,jh.ERR_BAD_OPTION)}},validators:jf};const qf=Ff.validators;class Hf{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Uf(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let o;void 0!==n&&Ff.assertOptions(n,{silentJSONParsing:qf.transitional(qf.boolean),forcedJSONParsing:qf.transitional(qf.boolean),clarifyTimeoutError:qf.transitional(qf.boolean)},!1),null!=i&&(Rh.isFunction(i)?t.paramsSerializer={serialize:i}:Ff.assertOptions(i,{encode:qf.function,serialize:qf.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=r&&Rh.merge(r.common,r[t.method]),o&&Rh.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=vf.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Df.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);h<u;)l=l.then(e[h++],e[h++]);return l}u=s.length;let d=t;for(h=0;h<u;){const e=s[h++],t=s[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=Df.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(e){return Zd(Sf((e=Uf(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new ef,response:new ef}}}Rh.forEach(["delete","get","head","options"],(function(e){Hf.prototype[e]=function(t,n){return this.request(Uf(n||{},{method:e,url:t,data:(n||{}).data}))}})),Rh.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Uf(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Hf.prototype[e]=t(),Hf.prototype[e+"Form"]=t(!0)}));var zf=Hf;class Wf{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Wf((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new kf(e,i,r),t(n.reason))}))}}var Vf=Wf;const $f={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($f).forEach((([e,t])=>{$f[t]=e}));var Kf=$f;const Gf=function e(t){const n=new zf(t),i=eh(zf.prototype.request,n);return Rh.extend(i,zf.prototype,n,{allOwnKeys:!0}),Rh.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Uf(t,n))},i}(cf);Gf.Axios=zf,Gf.CanceledError=kf,Gf.CancelToken=Vf,Gf.isCancel=bf,Gf.VERSION="1.3.6",Gf.toFormData=Kd,Gf.AxiosError=jh,Gf.Cancel=Gf.CanceledError,Gf.all=function(e){return Promise.all(e)},Gf.spread=function(e){return function(t){return e.apply(null,t)}},Gf.isAxiosError=function(e){return Rh.isObject(e)&&!0===e.isAxiosError},Gf.mergeConfig=Uf,Gf.AxiosHeaders=vf,Gf.formToJSON=e=>of(Rh.isHTMLForm(e)?new FormData(e):e),Gf.HttpStatusCode=Kf,Gf.default=Gf;var Jf=Gf;const{Axios:Yf,AxiosError:Qf,CanceledError:Xf,isCancel:Zf,CancelToken:ep,VERSION:tp,all:np,Cancel:ip,isAxiosError:rp,spread:op,toFormData:sp,AxiosHeaders:ap,HttpStatusCode:cp,formToJSON:lp,mergeConfig:up}=Jf;class hp{async getPopularMovies(){var e=document.querySelector("body"),t=new(0,Vu.Spinner)(Zu).spin(e);try{const e=await Jf.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=900c3c2e823d6abe3929dac959f94e63&language=${this.setLanguage()}&page=${this._page}`);return t.stop(),e}catch(e){console.error(e)}}async getSearchMovies(){var e=document.querySelector("body"),t=new(0,Vu.Spinner)(Zu).spin(e);try{const e=await Jf.get(`https://api.themoviedb.org/3/search/movie?api_key=900c3c2e823d6abe3929dac959f94e63&language=${this.setLanguage()}&page=${this._page}&query=${this.searchQuery}`);return t.stop(),e}catch(e){console.error(e)}}async getMoviesById(){var e=document.querySelector("body"),t=new(0,Vu.Spinner)(Zu).spin(e);try{const e=await Jf.get(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=900c3c2e823d6abe3929dac959f94e63&language=${this.setLanguage()}`);return t.stop(),e}catch(e){console.error(e)}}async getUpcomingMovies(){var e=document.querySelector("body"),t=new(0,Vu.Spinner)(Zu).spin(e);try{const e=await Jf.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=900c3c2e823d6abe3929dac959f94e63&language=${this.setLanguage()}&page=1`);return t.stop(),e}catch(e){console.error(e)}}async getMoviesTrailer(){try{return await Jf.get(`https://api.themoviedb.org/3/movie/${this.movieId}/videos?api_key=900c3c2e823d6abe3929dac959f94e63&language=${this.setLanguage()}`)}catch(e){console.error(e)}}setLanguage(){return localStorage.getItem("lang")?this.language=localStorage.getItem("lang"):this.language="en-US"}incrementPage(){this._page+=1}resetPage(){this._page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get id(){return this.movieId}set id(e){this.movieId=e}set page(e){this._page=e}get page(){return this._page}constructor(){this.searchQuery="",this.movieId="",this._page=1,this.language="en-US"}}const dp=new hp,fp=qc();function pp(e){setTimeout((()=>{document.querySelectorAll(e).forEach(mp)}),150)}function gp(){document.querySelectorAll("[data-key]").forEach(mp)}function mp(e){const t=e.getAttribute("data-key");"INPUT"===e.tagName&&(e.placeholder=Fu.t(t)),e.innerText=Fu.t(t)}Fu.init({lng:localStorage.getItem("lang"),debug:!0,returnObjects:!0,resources:{"en-US":{translation:{home:"Home","my-library":"My library","log-in":"Log in","log-out":"Log out",watched:"Watched",queue:"Queue","soon-in-theaters":"soon in theaters",rights:"| All rights reserved |",developed:"Developed with",students:"by GoIT Students",vote:"Vote / Vote",about:"About",genre:"Genre",popularity:"Popularity","original-title":"Original title","form-name":"Log In",description:"To log in, enter your email address and password","modal-login":"Log In",authorization:"Authorization with social networks","sign-up":"Sign up","sign-up-btn":"Sign up","remove-watched":"remove from watched","add-watched":"add to watched",email:"E-mail",password:"Password",search:"Search a movie","remove-queue":"remove from queue","add-queue":"add to queue",our:"Our",team:"Team","dev-pos":"Developer"}},"uk-UA":{translation:{home:"Головна","my-library":"Бібліотека","log-in":"Вхід","log-out":"Вихід",watched:"Переглянуті",queue:"Обране","soon-in-theaters":"скоро в кінотеатрах",rights:"| Всі права захищені |",developed:"Розроблено з",students:"Студентами GoIT",vote:"Оцінка / Проголосувало",about:"Опис",genre:"Жанр",popularity:"Популярність","original-title":"Оригінальна назва","form-name":"Вхід",description:"Для входу, введіть адресу електронної пошти та пароль","modal-login":"Вхід",authorization:"Авторизуйтесь з допомогою","sign-up":"Реєстрація","sign-up-btn":"Приєднатися","remove-watched":"видалити з переглянутих","add-watched":"додати до переглянутих",email:"Пошта",password:"Пароль",search:"Пошук фільмів","remove-queue":"видалити з обраного","add-queue":"додати до обраного",our:"Наша",team:"Команда","dev-pos":"Розробник"}},"ru-RU":{translation:{home:"Главная","my-library":"Библиотека","log-in":"Вход","log-out":"Выход",watched:"Просмотренные",queue:"Избранное","soon-in-theaters":"скоро в кинотеатрах",rights:"| Все права защищены |",developed:"Разработано с",students:"Студентами GoIT",vote:"Оценка / Проголосовало",about:"Описание",genre:"Жанр",popularity:"Популярность","original-title":"Оригинальное название","form-name":"Вход",description:"Для входа введите адрес электронной почты и пароль","modal-login":"Вход",authorization:"Авторизируйтесь с помощью","sign-up":"Регистрация","sign-up-btn":"Зарегистрироваться","remove-watched":"удалить из просмотренных","add-watched":"добавить в просмотренные",email:"Почта",password:"Пароль",search:"Поиск фильмов","remove-queue":"удалить из избранных","add-queue":"добавить в избранное",our:"Наша",team:"Команда","dev-pos":"Разработчик"}}}},(function(e,t){localStorage.getItem("lang")||Fu.changeLanguage("en-US"),gp(),function(){const e=document.querySelector("[data-switcher]");e.value=Fu.language,e.onchange=e=>{const t=document.querySelector(".library-link");var n;n=e.target.value,localStorage.setItem("lang",n),Fu.changeLanguage(n),t.classList.contains("current")||(fp.gallery.innerHTML="",dp.resetPage(),dp.getPopularMovies().then((e=>{Vc(e.data.results)})))}}()})),Fu.on("languageChanged",(()=>{gp()}));const yp=e(tl).auth.created,vp=e(tl).auth.failure,_p=e(tl).auth.login,bp=e(tl).auth.loginFail,wp=e(tl).auth.logwith.google,kp=e(tl).auth.logwith.facebook,Ep=e(tl).auth.logwith.github,Ip=e(tl).auth.logout,Cp=(nt({apiKey:"AIzaSyDru_yvb94CLLyga06XJjVjjbcRtcd4DxY",authDomain:"authentication-app-78afc.firebaseapp.com",databaseURL:"https://authentication-app-78afc-default-rtdb.firebaseio.com",projectId:"authentication-app-78afc",storageBucket:"authentication-app-78afc.appspot.com",messagingSenderId:"25662515291",appId:"1:25662515291:web:91dceb30df0dad99c1377e"}),function(e=it()){const t=Ze(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ze(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(oe(n.getOptions(),null!=t?t:{}))return e;bt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:sr,persistence:[ki,ci,ui]}),i=U("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>cr)return;const i=null==t?void 0:t.token;lr!==i&&(lr=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){ye(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){ye(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const o=D("auth");return o&&On(n,`http://${o}`),n}()),Sp=new $n,xp=new Vn,Tp=new Kn,Np=function(e=it(),t){const n=Ze(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=M("database");e&&function(e,t,n,i={}){(e=ye(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&xr("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&xr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new zr(zr.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:B(i.mockUserToken,e.app.options.projectId);o=new zr(t)}!function(e,t,n,i){e.repoInfo_=new Vr(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,o)}(n,...e)}return n}(),Op=qc();Op.logoutBtn.style.display="none";const Rp=Fc.create('\n  <div class="modal">\n    <div class="modal-auth-container">\n      <div class="login-signup-container">\n        <h3 class="auth-container-title" data-key="form-name">Log in</h3>\n        <button id="openSignUpModalBtn" class="sign-up-btn" data-key="sign-up">Sign up</button>\n      </div>\n      <button type="button" id="close-modal-btn">\n        <svg width="25" height="25">\n          <use href="/Filmoteka-Project-10/sprite.ba1893dc.svg#close-btn"></use>\n        </svg>\n      </button>\n        <p class="auth-container-text" data-key="description">To log in, enter your email address and password</p>\n        <input type="email" placeholder="E-mail" class="email-input" id="login-email" data-key="email">\n        <input type="password" placeholder="Password" class="passw-input" id="login-password" data-key="password">\n        <button class="login-btn" id="loginBtn" data-key="modal-login">Log in</button>\n        <p class="auth-google-text" data-key="authorization">Authorization with social networks</p>\n        <div class="auth-social">\n          <ul class="social-list">\n            <li class="social-items">\n              <a id="login-google" class="social-login-btn">\n                <svg width="25" height="25">\n                  <use href="/Filmoteka-Project/sprite.ba1893dc.svg#icon-google"></use>\n                </svg>\n              </a>\n            </li>\n            <li class="social-items">\n              <a id="login-fb" class="social-login-btn fb-btn">\n                <svg width="25" height="25">\n                  <use href="/Filmoteka-Project/sprite.ba1893dc.svg#facebook"></use>\n                </svg>\n              </a>\n            </li>\n            <li class="social-items">\n              <a id="login-github" class="social-login-btn git-btn">\n                <svg width="25" height="25">\n                  <use href="/Filmoteka-Project/sprite.ba1893dc.svg#icon-github"</use>\n                </svg>\n              </a>\n            </li>            \n          </ul>\n        </div>\n      </div>\n  </div>\n',{onShow:e=>{e.element().querySelector("#close-modal-btn").onclick=e.close}}),Pp=Fc.create('\n  <div class="modal">\n  <div class="modal-auth-container">\n    <div class="login-signup-container">\n      <h3 class="auth-container-title" data-key="sign-up">Sign up</h3>\n      <button id="alreadyHaveAccount" class="login-up-btn" data-key="form-name">Log in</button>\n    </div>\n      <button type="button" id="close-modal-btn">\n        <svg width="25" height="25">\n          <use href="/Filmoteka-Project/sprite.ba1893dc.svg#close-btn"></use>\n        </svg>\n      </button>\n        <input type="email" placeholder="E-mail" class="email-input sign-up" id="sign-email" data-key="email">\n        <input type="password" placeholder="Password" class="passw-input" id="sign-password" data-key="password">\n    <button class="login-btn" id="signUp" data-key="sign-up-btn">Sign up</button>\n  </div>\n\n</div>\n',{onShow:e=>{e.element().querySelector("#close-modal-btn").onclick=e.close}});function Ap(){Pp.close(),Rp.show();document.querySelector("#openSignUpModalBtn").addEventListener("click",Lp);document.querySelector("#loginBtn").addEventListener("click",Mp);document.querySelector("#login-google").addEventListener("click",Up);document.querySelector("#login-fb").addEventListener("click",jp);document.querySelector("#login-github").addEventListener("click",Bp),pp(".modal-auth-container [data-key]")}function Lp(){Rp.close(),Pp.show();document.querySelector("#alreadyHaveAccount").addEventListener("click",Ap);document.querySelector("#signUp").addEventListener("click",Dp),pp(".modal-auth-container [data-key]")}function Dp(){let e=document.getElementById("sign-email").value,t=document.getElementById("sign-password").value;ri(Cp,e,t).then((e=>{r.Notify.success(el(yp),{position:"center-top"}),Pp.close()})).catch((e=>{r.Notify.failure(el(vp),{position:"center-top"}),console.log(e)}))}function Mp(){let e=document.getElementById("login-email").value,t=document.getElementById("login-password").value;oi(Cp,e,t).then((e=>{r.Notify.success(el(_p),{position:"center-top"}),Rp.close()})).catch((e=>{r.Notify.failure(el(bp),{position:"center-top"}),console.log(e)}))}function Up(){Pi(Cp,Sp).then((e=>{Fp(e.user),Rp.close(),r.Notify.success(el(wp),{position:"center-top"})})).catch((e=>{r.Notify.failure(el(vp),{position:"center-top"}),console.log(e)}))}function jp(){Pi(Cp,xp).then((e=>{Fp(e.user),Rp.close(),r.Notify.success(el(kp),{position:"center-top"})})).catch((e=>{r.Notify.failure(el(vp),{position:"center-top"}),console.log(e)}))}function Bp(){Pi(Cp,Tp).then((e=>{Fp(e.user),Rp.close(),r.Notify.success(el(Ep),{position:"center-top"})})).catch((e=>{r.Notify.failure(el(vp),{position:"center-top"}),console.log(e)}))}function Fp(e){e.photoURL?Op.userDetails.innerHTML=`\n  <img class="user-img" src="${e.photoURL}" width=25"px">\n  <p class="user-name">${e.displayName}</p>`:Op.userDetails.innerHTML=`<p class="user-email">${e.email}</p>`}var qp,Hp,zp;Op.openSignInModalBtn.addEventListener("click",Ap),Op.logoutBtn.addEventListener("click",(function(){(e=Cp,ye(e).signOut()).then((()=>{r.Notify.success(el(Ip),{position:"center-top"}),Op.userDetails.innerHTML="",Op.openSignInModalBtn.style.display="block",Op.logoutBtn.style.display="none",location.reload()})).catch((e=>{r.Notify.failure(el(vp),{position:"center-top"}),console.log(e)}));var e})),qp=e=>{if(e){document.querySelector(".menu_item_slide").classList.remove("position"),Fp(e),Op.openSignInModalBtn.style.display="none",Op.logoutBtn.style.display="block";const{displayName:t,email:n,uid:i,photoURL:r}=e;!function(e,t,n,i){Dc(Ac(Np,"users/"+n),{Name:e,Email:t,Watched:fl,Queue:pl})}(t,n,i)}else document.querySelector(".menu_item_slide").classList.add("position")},ye(Cp).onAuthStateChanged(qp,Hp,zp);var Wp=window,Vp=Wp.requestAnimationFrame||Wp.webkitRequestAnimationFrame||Wp.mozRequestAnimationFrame||Wp.msRequestAnimationFrame||function(e){return setTimeout(e,16)},$p=window,Kp=$p.cancelAnimationFrame||$p.mozCancelAnimationFrame||function(e){clearTimeout(e)};function Gp(){for(var e,t,n,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(e=arguments[r]))for(t in e)i!==(n=e[t])&&void 0!==n&&(i[t]=n);return i}function Jp(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function Yp(e,t,n,i){if(i)try{e.setItem(t,n)}catch(e){}return n}function Qp(){var e=document,t=e.body;return t||((t=e.createElement("body")).fake=!0),t}var Xp=document.documentElement;function Zp(e){var t="";return e.fake&&(t=Xp.style.overflow,e.style.background="",e.style.overflow=Xp.style.overflow="hidden",Xp.appendChild(e)),t}function eg(e,t){e.fake&&(e.remove(),Xp.style.overflow=t,Xp.offsetHeight)}function tg(){var e=document,t=Qp(),n=Zp(t),i=e.createElement("div"),r=!1;t.appendChild(i);try{for(var o,s="(10px * 10)",a=["calc"+s,"-moz-calc"+s,"-webkit-calc"+s],c=0;c<3;c++)if(o=a[c],i.style.width=o,100===i.offsetWidth){r=o.replace(s,"");break}}catch(e){}return t.fake?eg(t,n):i.remove(),r}function ng(){var e,t=document,n=Qp(),i=Zp(n),r=t.createElement("div"),o=t.createElement("div"),s="";r.className="tns-t-subp2",o.className="tns-t-ct";for(var a=0;a<70;a++)s+="<div></div>";return o.innerHTML=s,r.appendChild(o),n.appendChild(r),e=Math.abs(r.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?eg(n,i):r.remove(),e}function ig(){if(window.matchMedia||window.msMatchMedia)return!0;var e,t=document,n=Qp(),i=Zp(n),r=t.createElement("div"),o=t.createElement("style"),s="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",r.className="tns-mq-test",n.appendChild(o),n.appendChild(r),o.styleSheet?o.styleSheet.cssText=s:o.appendChild(t.createTextNode(s)),e=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?eg(n,i):r.remove(),"absolute"===e}function rg(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function og(e,t){"deleteRule"in e?e.deleteRule(t):e.removeRule(t)}function sg(e){return("insertRule"in e?e.cssRules:e.rules).length}function ag(e,t,n){for(var i=0,r=e.length;i<r;i++)t.call(n,e[i],i)}var cg="classList"in document.createElement("_"),lg=cg?function(e,t){return e.classList.contains(t)}:function(e,t){return e.className.indexOf(t)>=0},ug=cg?function(e,t){lg(e,t)||e.classList.add(t)}:function(e,t){lg(e,t)||(e.className+=" "+t)},hg=cg?function(e,t){lg(e,t)&&e.classList.remove(t)}:function(e,t){lg(e,t)&&(e.className=e.className.replace(t,""))};function dg(e,t){return e.hasAttribute(t)}function fg(e,t){return e.getAttribute(t)}function pg(e){return void 0!==e.item}function gg(e,t){if(e=pg(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function mg(e,t){e=pg(e)||e instanceof Array?e:[e];for(var n=(t=t instanceof Array?t:[t]).length,i=e.length;i--;)for(var r=n;r--;)e[i].removeAttribute(t[r])}function yg(e){for(var t=[],n=0,i=e.length;n<i;n++)t.push(e[n]);return t}function vg(e,t){"none"!==e.style.display&&(e.style.display="none")}function _g(e,t){"none"===e.style.display&&(e.style.display="")}function bg(e){return"none"!==window.getComputedStyle(e).display}function wg(e){if("string"==typeof e){var t=[e],n=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==e||t.push(i+n)})),e=t}for(var i=document.createElement("fakeelement"),r=(e.length,0);r<e.length;r++){var o=e[r];if(void 0!==i.style[o])return o}return!1}function kg(e){if(!e)return!1;if(!window.getComputedStyle)return!1;var t,n=document,i=Qp(),r=Zp(i),o=n.createElement("p"),s=e.length>9?"-"+e.slice(0,-9).toLowerCase()+"-":"";return s+="transform",i.insertBefore(o,null),o.style[e]="translate3d(1px,1px,1px)",t=window.getComputedStyle(o).getPropertyValue(s),i.fake?eg(i,r):o.remove(),void 0!==t&&t.length>0&&"none"!==t}function Eg(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}var Ig=!1;try{var Cg=Object.defineProperty({},"passive",{get:function(){Ig=!0}});window.addEventListener("test",null,Cg)}catch(qu){}var Sg=!!Ig&&{passive:!0};function xg(e,t,n){for(var i in t){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&Sg;e.addEventListener(i,t[i],r)}}function Tg(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&Sg;e.removeEventListener(n,t[n],i)}}function Ng(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){t.type=e,this.topics[e]&&this.topics[e].forEach((function(n){n(t,e)}))}}}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Og=function(e){e=Gp({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},e||{});var t=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},r={},o=e.useLocalStorage;if(o){var s=navigator.userAgent,a=new Date;try{(r=n.localStorage)?(r.setItem(a,a),o=r.getItem(a)==a,r.removeItem(a)):o=!1,o||(r={})}catch(e){o=!1}o&&(r.tnsApp&&r.tnsApp!==s&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(e){r.removeItem(e)})),localStorage.tnsApp=s)}var c=r.tC?Jp(r.tC):Yp(r,"tC",tg(),o),l=r.tPL?Jp(r.tPL):Yp(r,"tPL",ng(),o),u=r.tMQ?Jp(r.tMQ):Yp(r,"tMQ",ig(),o),h=r.tTf?Jp(r.tTf):Yp(r,"tTf",wg("transform"),o),d=r.t3D?Jp(r.t3D):Yp(r,"t3D",kg(h),o),f=r.tTDu?Jp(r.tTDu):Yp(r,"tTDu",wg("transitionDuration"),o),p=r.tTDe?Jp(r.tTDe):Yp(r,"tTDe",wg("transitionDelay"),o),g=r.tADu?Jp(r.tADu):Yp(r,"tADu",wg("animationDuration"),o),m=r.tADe?Jp(r.tADe):Yp(r,"tADe",wg("animationDelay"),o),y=r.tTE?Jp(r.tTE):Yp(r,"tTE",Eg(f,"Transition"),o),v=r.tAE?Jp(r.tAE):Yp(r,"tAE",Eg(g,"Animation"),o),_=n.console&&"function"==typeof n.console.warn,b=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],w={};if(b.forEach((function(n){if("string"==typeof e[n]){var i=e[n],r=t.querySelector(i);if(w[n]=i,!r||!r.nodeName)return void(_&&console.warn("Can't find",e[n]));e[n]=r}})),!(e.container.children.length<1)){var k=e.responsive,E=e.nested,I="carousel"===e.mode;if(k){0 in k&&(e=Gp(e,k[0]),delete k[0]);var C={};for(var S in k){var x=k[S];x="number"==typeof x?{items:x}:x,C[S]=x}k=C,C=null}if(I||function e(t){for(var n in t)I||("slideBy"===n&&(t[n]="page"),"edgePadding"===n&&(t[n]=!1),"autoHeight"===n&&(t[n]=!1)),"responsive"===n&&e(t[n])}(e),!I){e.axis="horizontal",e.slideBy="page",e.edgePadding=!1;var T=e.animateIn,N=e.animateOut,O=e.animateDelay,R=e.animateNormal}var P,A,L="horizontal"===e.axis,D=t.createElement("div"),M=t.createElement("div"),U=e.container,j=U.parentNode,B=U.outerHTML,F=U.children,q=F.length,H=on(),z=!1;k&&Sn(),I&&(U.className+=" tns-vpfix");var W,V,$,K,G,J,Y,Q,X,Z=e.autoWidth,ee=un("fixedWidth"),te=un("edgePadding"),ne=un("gutter"),ie=cn(),re=un("center"),oe=Z?1:Math.floor(un("items")),se=un("slideBy"),ae=e.viewportMax||e.fixedWidthViewportWidth,ce=un("arrowKeys"),le=un("speed"),ue=e.rewind,he=!ue&&e.loop,de=un("autoHeight"),fe=un("controls"),pe=un("controlsText"),ge=un("nav"),me=un("touch"),ye=un("mouseDrag"),ve=un("autoplay"),_e=un("autoplayTimeout"),be=un("autoplayText"),we=un("autoplayHoverPause"),ke=un("autoplayResetOnVisibility"),Ee=(Y=null,Q=un("nonce"),X=document.createElement("style"),Y&&X.setAttribute("media",Y),Q&&X.setAttribute("nonce",Q),document.querySelector("head").appendChild(X),X.sheet?X.sheet:X.styleSheet),Ie=e.lazyload,Ce=e.lazyloadSelector,Se=[],xe=he?(G=function(){if(Z||ee&&!ae)return q-1;var t=ee?"fixedWidth":"items",n=[];if((ee||e[t]<q)&&n.push(e[t]),k)for(var i in k){var r=k[i][t];r&&(ee||r<q)&&n.push(r)}return n.length||n.push(0),Math.ceil(ee?ae/Math.min.apply(null,n):Math.max.apply(null,n))}(),J=I?Math.ceil((5*G-q)/2):4*G-q,J=Math.max(G,J),ln("edgePadding")?J+1:J):0,Te=I?q+2*xe:q+xe,Ne=!(!ee&&!Z||he),Oe=ee?Xn():null,Re=!I||!he,Pe=L?"left":"top",Ae="",Le="",De=ee?function(){return re&&!he?q-1:Math.ceil(-Oe/(ee+ne))}:Z?function(){for(var e=0;e<Te;e++)if(W[e]>=-Oe)return e}:function(){return re&&I&&!he?q-1:he||I?Math.max(0,Te-Math.ceil(oe)):Te-1},Me=tn(un("startIndex")),Ue=Me,je=(en(),0),Be=Z?null:De(),Fe=e.preventActionWhenRunning,qe=e.swipeAngle,He=!qe||"?",ze=!1,We=e.onInit,Ve=new Ng,$e=" tns-slider tns-"+e.mode,Ke=U.id||(K=window.tnsId,window.tnsId=K?K+1:1,"tns"+window.tnsId),Ge=un("disable"),Je=!1,Ye=e.freezable,Qe=!(!Ye||Z)&&Cn(),Xe=!1,Ze={click:ai,keydown:function(e){e=gi(e);var t=[i.LEFT,i.RIGHT].indexOf(e.keyCode);t>=0&&(0===t?wt.disabled||ai(e,-1):kt.disabled||ai(e,1))}},et={click:function(e){if(ze){if(Fe)return;oi()}var t=mi(e=gi(e));for(;t!==St&&!dg(t,"data-nav");)t=t.parentNode;if(dg(t,"data-nav")){var n=Ot=Number(fg(t,"data-nav")),i=ee||Z?n*q/Tt:n*oe;si(ct?n:Math.min(Math.ceil(i),q-1),e),Rt===n&&(Ut&&di(),Ot=-1)}},keydown:function(e){e=gi(e);var n=t.activeElement;if(!dg(n,"data-nav"))return;var r=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(e.keyCode),o=Number(fg(n,"data-nav"));r>=0&&(0===r?o>0&&pi(Ct[o-1]):1===r?o<Tt-1&&pi(Ct[o+1]):(Ot=o,si(o,e)))}},tt={mouseover:function(){Ut&&(li(),jt=!0)},mouseout:function(){jt&&(ci(),jt=!1)}},nt={visibilitychange:function(){t.hidden?Ut&&(li(),Ft=!0):Ft&&(ci(),Ft=!1)}},it={keydown:function(e){e=gi(e);var t=[i.LEFT,i.RIGHT].indexOf(e.keyCode);t>=0&&ai(e,0===t?-1:1)}},rt={touchstart:bi,touchmove:wi,touchend:Ei,touchcancel:Ei},ot={mousedown:bi,mousemove:wi,mouseup:Ei,mouseleave:Ei},st=ln("controls"),at=ln("nav"),ct=!!Z||e.navAsThumbnails,lt=ln("autoplay"),ut=ln("touch"),ht=ln("mouseDrag"),dt="tns-slide-active",ft="tns-slide-cloned",pt="tns-complete",gt={load:function(e){Dn(mi(e))},error:function(e){t=mi(e),ug(t,"failed"),Mn(t);var t}},mt="force"===e.preventScrollOnTouch;if(st)var yt,vt,_t=e.controlsContainer,bt=e.controlsContainer?e.controlsContainer.outerHTML:"",wt=e.prevButton,kt=e.nextButton,Et=e.prevButton?e.prevButton.outerHTML:"",It=e.nextButton?e.nextButton.outerHTML:"";if(at)var Ct,St=e.navContainer,xt=e.navContainer?e.navContainer.outerHTML:"",Tt=Z?q:Ci(),Nt=0,Ot=-1,Rt=rn(),Pt=Rt,At="tns-nav-active",Lt="Carousel Page ",Dt=" (Current Slide)";if(lt)var Mt,Ut,jt,Bt,Ft,qt="forward"===e.autoplayDirection?1:-1,Ht=e.autoplayButton,zt=e.autoplayButton?e.autoplayButton.outerHTML:"",Wt=["<span class='tns-visually-hidden'>"," animation</span>"];if(ut||ht)var Vt,$t,Kt={},Gt={},Jt=!1,Yt=L?function(e,t){return e.x-t.x}:function(e,t){return e.y-t.y};Z||Zt(Ge||Qe),h&&(Pe=h,Ae="translate",d?(Ae+=L?"3d(":"3d(0px, ",Le=L?", 0px, 0px)":", 0px)"):(Ae+=L?"X(":"Y(",Le=")")),I&&(U.className=U.className.replace("tns-vpfix","")),function(){ln("gutter");D.className="tns-outer",M.className="tns-inner",D.id=Ke+"-ow",M.id=Ke+"-iw",""===U.id&&(U.id=Ke);$e+=l||Z?" tns-subpixel":" tns-no-subpixel",$e+=c?" tns-calc":" tns-no-calc",Z&&($e+=" tns-autowidth");$e+=" tns-"+e.axis,U.className+=$e,I?((P=t.createElement("div")).id=Ke+"-mw",P.className="tns-ovh",D.appendChild(P),P.appendChild(M)):D.appendChild(M);if(de){(P||M).className+=" tns-ah"}if(j.insertBefore(D,U),M.appendChild(U),ag(F,(function(e,t){ug(e,"tns-item"),e.id||(e.id=Ke+"-item"+t),!I&&R&&ug(e,R),gg(e,{"aria-hidden":"true",tabindex:"-1"})})),xe){for(var n=t.createDocumentFragment(),i=t.createDocumentFragment(),r=xe;r--;){var o=r%q,s=F[o].cloneNode(!0);if(ug(s,ft),mg(s,"id"),i.insertBefore(s,i.firstChild),I){var a=F[q-1-o].cloneNode(!0);ug(a,ft),mg(a,"id"),n.appendChild(a)}}U.insertBefore(n,U.firstChild),U.appendChild(i),F=U.children}}(),function(){if(!I)for(var t=Me,i=Me+Math.min(q,oe);t<i;t++){var r=F[t];r.style.left=100*(t-Me)/oe+"%",ug(r,T),hg(r,R)}L&&(l||Z?(rg(Ee,"#"+Ke+" > .tns-item","font-size:"+n.getComputedStyle(F[0]).fontSize+";",sg(Ee)),rg(Ee,"#"+Ke,"font-size:0;",sg(Ee))):I&&ag(F,(function(e,t){e.style.marginLeft=function(e){return c?c+"("+100*e+"% / "+Te+")":100*e/Te+"%"}(t)})));if(u){if(f){var o=P&&e.autoHeight?mn(e.speed):"";rg(Ee,"#"+Ke+"-mw",o,sg(Ee))}o=hn(e.edgePadding,e.gutter,e.fixedWidth,e.speed,e.autoHeight),rg(Ee,"#"+Ke+"-iw",o,sg(Ee)),I&&(o=L&&!Z?"width:"+dn(e.fixedWidth,e.gutter,e.items)+";":"",f&&(o+=mn(le)),rg(Ee,"#"+Ke,o,sg(Ee))),o=L&&!Z?fn(e.fixedWidth,e.gutter,e.items):"",e.gutter&&(o+=pn(e.gutter)),I||(f&&(o+=mn(le)),g&&(o+=yn(le))),o&&rg(Ee,"#"+Ke+" > .tns-item",o,sg(Ee))}else{I&&de&&(P.style[f]=le/1e3+"s"),M.style.cssText=hn(te,ne,ee,de),I&&L&&!Z&&(U.style.width=dn(ee,ne,oe));o=L&&!Z?fn(ee,ne,oe):"";ne&&(o+=pn(ne)),o&&rg(Ee,"#"+Ke+" > .tns-item",o,sg(Ee))}if(k&&u)for(var s in k){s=parseInt(s);var a=k[s],h=(o="",""),d="",p="",m="",y=Z?null:un("items",s),v=un("fixedWidth",s),_=un("speed",s),b=un("edgePadding",s),w=un("autoHeight",s),E=un("gutter",s);f&&P&&un("autoHeight",s)&&"speed"in a&&(h="#"+Ke+"-mw{"+mn(_)+"}"),("edgePadding"in a||"gutter"in a)&&(d="#"+Ke+"-iw{"+hn(b,E,v,_,w)+"}"),I&&L&&!Z&&("fixedWidth"in a||"items"in a||ee&&"gutter"in a)&&(p="width:"+dn(v,E,y)+";"),f&&"speed"in a&&(p+=mn(_)),p&&(p="#"+Ke+"{"+p+"}"),("fixedWidth"in a||ee&&"gutter"in a||!I&&"items"in a)&&(m+=fn(v,E,y)),"gutter"in a&&(m+=pn(E)),!I&&"speed"in a&&(f&&(m+=mn(_)),g&&(m+=yn(_))),m&&(m="#"+Ke+" > .tns-item{"+m+"}"),(o=h+d+p+m)&&Ee.insertRule("@media (min-width: "+s/16+"em) {"+o+"}",Ee.cssRules.length)}}(),vn();var Qt=he?I?function(){var e=je,t=Be;e+=se,t-=se,te?(e+=1,t-=1):ee&&(ie+ne)%(ee+ne)&&(t-=1),xe&&(Me>t?Me-=q:Me<e&&(Me+=q))}:function(){if(Me>Be)for(;Me>=je+q;)Me-=q;else if(Me<je)for(;Me<=Be-q;)Me+=q}:function(){Me=Math.max(je,Math.min(Be,Me))},Xt=I?function(){Yn(U,""),f||!le?(ti(),le&&bg(U)||oi()):function(e,t,n,i,r,o,s){var a=Math.min(o,10),c=r.indexOf("%")>=0?"%":"px",l=(r=r.replace(c,""),Number(e.style[t].replace(n,"").replace(i,"").replace(c,""))),u=(r-l)/o*a;setTimeout((function r(){o-=a,l+=u,e.style[t]=n+l+c+i,o>0?setTimeout(r,a):s()}),a)}(U,Pe,Ae,Le,Zn(),le,oi),L||Ii()}:function(){Se=[];var e={};e[y]=e[v]=oi,Tg(F[Ue],e),xg(F[Me],e),ni(Ue,T,N,!0),ni(Me,R,T),y&&v&&le&&bg(U)||oi()};return{version:"2.9.4",getInfo:xi,events:Ve,goTo:si,play:function(){ve&&!Ut&&(hi(),Bt=!1)},pause:function(){Ut&&(di(),Bt=!0)},isOn:z,updateSliderHeight:Hn,refresh:vn,destroy:function(){if(Ee.disabled=!0,Ee.ownerNode&&Ee.ownerNode.remove(),Tg(n,{resize:En}),ce&&Tg(t,it),_t&&Tg(_t,Ze),St&&Tg(St,et),Tg(U,tt),Tg(U,nt),Ht&&Tg(Ht,{click:fi}),ve&&clearInterval(Mt),I&&y){var i={};i[y]=oi,Tg(U,i)}me&&Tg(U,rt),ye&&Tg(U,ot);var r=[B,bt,Et,It,xt,zt];for(var o in b.forEach((function(t,n){var i="container"===t?D:e[t];if("object"==typeof i&&i){var o=!!i.previousElementSibling&&i.previousElementSibling,s=i.parentNode;i.outerHTML=r[n],e[t]=o?o.nextElementSibling:s.firstElementChild}})),b=T=N=O=R=L=D=M=U=j=B=F=q=A=H=Z=ee=te=ne=ie=oe=se=ae=ce=le=ue=he=de=Ee=Ie=W=Se=xe=Te=Ne=Oe=Re=Pe=Ae=Le=De=Me=Ue=je=Be=qe=He=ze=We=Ve=$e=Ke=Ge=Je=Ye=Qe=Xe=Ze=et=tt=nt=it=rt=ot=st=at=ct=lt=ut=ht=dt=pt=gt=V=fe=pe=_t=bt=wt=kt=yt=vt=ge=St=xt=Ct=Tt=Nt=Ot=Rt=Pt=At=Lt=Dt=ve=_e=qt=be=we=Ht=zt=ke=Wt=Mt=Ut=jt=Bt=Ft=Kt=Gt=Vt=Jt=$t=Yt=me=ye=null,this)"rebuild"!==o&&(this[o]=null);z=!1},rebuild:function(){return Og(Gp(e,w))}}}function Zt(e){e&&(fe=ge=me=ye=ce=ve=we=ke=!1)}function en(){for(var e=I?Me-xe:Me;e<0;)e+=q;return e%q+1}function tn(e){return e=e?Math.max(0,Math.min(he?q-1:q-oe,e)):0,I?e+xe:e}function nn(e){for(null==e&&(e=Me),I&&(e-=xe);e<0;)e+=q;return Math.floor(e%q)}function rn(){var e,t=nn();return e=ct?t:ee||Z?Math.ceil((t+1)*Tt/q-1):Math.floor(t/oe),!he&&I&&Me===Be&&(e=Tt-1),e}function on(){return n.innerWidth||t.documentElement.clientWidth||t.body.clientWidth}function sn(e){return"top"===e?"afterbegin":"beforeend"}function an(e){if(null!=e){var n,i,r=t.createElement("div");return e.appendChild(r),i=(n=r.getBoundingClientRect()).right-n.left,r.remove(),i||an(e.parentNode)}}function cn(){var e=te?2*te-ne:0;return an(j)-e}function ln(t){if(e[t])return!0;if(k)for(var n in k)if(k[n][t])return!0;return!1}function un(t,n){if(null==n&&(n=H),"items"===t&&ee)return Math.floor((ie+ne)/(ee+ne))||1;var i=e[t];if(k)for(var r in k)n>=parseInt(r)&&t in k[r]&&(i=k[r][t]);return"slideBy"===t&&"page"===i&&(i=un("items")),I||"slideBy"!==t&&"items"!==t||(i=Math.floor(i)),i}function hn(e,t,n,i,r){var o="";if(void 0!==e){var s=e;t&&(s-=t),o=L?"margin: 0 "+s+"px 0 "+e+"px;":"margin: "+e+"px 0 "+s+"px 0;"}else if(t&&!n){var a="-"+t+"px";o="margin: 0 "+(L?a+" 0 0":"0 "+a+" 0")+";"}return!I&&r&&f&&i&&(o+=mn(i)),o}function dn(e,t,n){return e?(e+t)*Te+"px":c?c+"("+100*Te+"% / "+n+")":100*Te/n+"%"}function fn(e,t,n){var i;if(e)i=e+t+"px";else{I||(n=Math.floor(n));var r=I?Te:n;i=c?c+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==E?i+";":i+" !important;"}function pn(e){var t="";!1!==e&&(t=(L?"padding-":"margin-")+(L?"right":"bottom")+": "+e+"px;");return t}function gn(e,t){var n=e.substring(0,e.length-t).toLowerCase();return n&&(n="-"+n+"-"),n}function mn(e){return gn(f,18)+"transition-duration:"+e/1e3+"s;"}function yn(e){return gn(g,17)+"animation-duration:"+e/1e3+"s;"}function vn(){if(ln("autoHeight")||Z||!L){var e=U.querySelectorAll("img");ag(e,(function(e){var t=e.src;Ie||(t&&t.indexOf("data:image")<0?(e.src="",xg(e,gt),ug(e,"loading"),e.src=t):Dn(e))})),Vp((function(){Bn(yg(e),(function(){V=!0}))})),ln("autoHeight")&&(e=Un(Me,Math.min(Me+oe-1,Te-1))),Ie?_n():Vp((function(){Bn(yg(e),_n)}))}else I&&ei(),wn(),kn()}function _n(){if(Z&&q>1){var e=he?Me:q-1;!function t(){var n=F[e].getBoundingClientRect().left,i=F[e-1].getBoundingClientRect().right;Math.abs(n-i)<=1?bn():setTimeout((function(){t()}),16)}()}else bn()}function bn(){L&&!Z||(zn(),Z?(Oe=Xn(),Ye&&(Qe=Cn()),Be=De(),Zt(Ge||Qe)):Ii()),I&&ei(),wn(),kn()}function wn(){if(Wn(),D.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Pn()+"</span>  of "+q+"</div>"),$=D.querySelector(".tns-liveregion .current"),lt){var t=ve?"stop":"start";Ht?gg(Ht,{"data-action":t}):e.autoplayButtonOutput&&(D.insertAdjacentHTML(sn(e.autoplayPosition),'<button type="button" data-action="'+t+'">'+Wt[0]+t+Wt[1]+be[0]+"</button>"),Ht=D.querySelector("[data-action]")),Ht&&xg(Ht,{click:fi}),ve&&(hi(),we&&xg(U,tt),ke&&xg(U,nt))}if(at){if(St)gg(St,{"aria-label":"Carousel Pagination"}),ag(Ct=St.children,(function(e,t){gg(e,{"data-nav":t,tabindex:"-1","aria-label":Lt+(t+1),"aria-controls":Ke})}));else{for(var n="",i=ct?"":'style="display:none"',r=0;r<q;r++)n+='<button type="button" data-nav="'+r+'" tabindex="-1" aria-controls="'+Ke+'" '+i+' aria-label="'+Lt+(r+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",D.insertAdjacentHTML(sn(e.navPosition),n),St=D.querySelector(".tns-nav"),Ct=St.children}if(Si(),f){var o=f.substring(0,f.length-18).toLowerCase(),s="transition: all "+le/1e3+"s";o&&(s="-"+o+"-"+s),rg(Ee,"[aria-controls^="+Ke+"-item]",s,sg(Ee))}gg(Ct[Rt],{"aria-label":Lt+(Rt+1)+Dt}),mg(Ct[Rt],"tabindex"),ug(Ct[Rt],At),xg(St,et)}st&&(_t||wt&&kt||(D.insertAdjacentHTML(sn(e.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Ke+'">'+pe[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Ke+'">'+pe[1]+"</button></div>"),_t=D.querySelector(".tns-controls")),wt&&kt||(wt=_t.children[0],kt=_t.children[1]),e.controlsContainer&&gg(_t,{"aria-label":"Carousel Navigation",tabindex:"0"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&gg([wt,kt],{"aria-controls":Ke,tabindex:"-1"}),(e.controlsContainer||e.prevButton&&e.nextButton)&&(gg(wt,{"data-controls":"prev"}),gg(kt,{"data-controls":"next"})),yt=$n(wt),vt=$n(kt),Jn(),_t?xg(_t,Ze):(xg(wt,Ze),xg(kt,Ze))),xn()}function kn(){if(I&&y){var i={};i[y]=oi,xg(U,i)}me&&xg(U,rt,e.preventScrollOnTouch),ye&&xg(U,ot),ce&&xg(t,it),"inner"===E?Ve.on("outerResized",(function(){In(),Ve.emit("innerLoaded",xi())})):(k||ee||Z||de||!L)&&xg(n,{resize:En}),de&&("outer"===E?Ve.on("innerLoaded",jn):Ge||jn()),Ln(),Ge?On():Qe&&Nn(),Ve.on("indexChanged",Fn),"inner"===E&&Ve.emit("innerLoaded",xi()),"function"==typeof We&&We(xi()),z=!0}function En(e){Vp((function(){In(gi(e))}))}function In(n){if(z){"outer"===E&&Ve.emit("outerResized",xi(n)),H=on();var i,r=A,o=!1;k&&(Sn(),(i=r!==A)&&Ve.emit("newBreakpointStart",xi(n)));var s,a,c=oe,l=Ge,h=Qe,d=ce,f=fe,p=ge,g=me,m=ye,y=ve,v=we,_=ke,b=Me;if(i){var w=ee,C=de,S=pe,x=re,O=be;if(!u)var P=ne,D=te}if(ce=un("arrowKeys"),fe=un("controls"),ge=un("nav"),me=un("touch"),re=un("center"),ye=un("mouseDrag"),ve=un("autoplay"),we=un("autoplayHoverPause"),ke=un("autoplayResetOnVisibility"),i&&(Ge=un("disable"),ee=un("fixedWidth"),le=un("speed"),de=un("autoHeight"),pe=un("controlsText"),be=un("autoplayText"),_e=un("autoplayTimeout"),u||(te=un("edgePadding"),ne=un("gutter"))),Zt(Ge),ie=cn(),L&&!Z||Ge||(zn(),L||(Ii(),o=!0)),(ee||Z)&&(Oe=Xn(),Be=De()),(i||ee)&&(oe=un("items"),se=un("slideBy"),(a=oe!==c)&&(ee||Z||(Be=De()),Qt())),i&&Ge!==l&&(Ge?On():function(){if(!Je)return;if(Ee.disabled=!1,U.className+=$e,ei(),he)for(var e=xe;e--;)I&&_g(F[e]),_g(F[Te-e-1]);if(!I)for(var t=Me,n=Me+q;t<n;t++){var i=F[t],r=t<Me+oe?T:R;i.style.left=100*(t-Me)/oe+"%",ug(i,r)}Tn(),Je=!1}()),Ye&&(i||ee||Z)&&(Qe=Cn())!==h&&(Qe?(ti(Zn(tn(0))),Nn()):(!function(){if(!Xe)return;te&&u&&(M.style.margin="");if(xe)for(var e="tns-transparent",t=xe;t--;)I&&hg(F[t],e),hg(F[Te-t-1],e);Tn(),Xe=!1}(),o=!0)),Zt(Ge||Qe),ve||(we=ke=!1),ce!==d&&(ce?xg(t,it):Tg(t,it)),fe!==f&&(fe?_t?_g(_t):(wt&&_g(wt),kt&&_g(kt)):_t?vg(_t):(wt&&vg(wt),kt&&vg(kt))),ge!==p&&(ge?(_g(St),Si()):vg(St)),me!==g&&(me?xg(U,rt,e.preventScrollOnTouch):Tg(U,rt)),ye!==m&&(ye?xg(U,ot):Tg(U,ot)),ve!==y&&(ve?(Ht&&_g(Ht),Ut||Bt||hi()):(Ht&&vg(Ht),Ut&&di())),we!==v&&(we?xg(U,tt):Tg(U,tt)),ke!==_&&(ke?xg(t,nt):Tg(t,nt)),i){if(ee===w&&re===x||(o=!0),de!==C&&(de||(M.style.height="")),fe&&pe!==S&&(wt.innerHTML=pe[0],kt.innerHTML=pe[1]),Ht&&be!==O){var j=ve?1:0,B=Ht.innerHTML,W=B.length-O[j].length;B.substring(W)===O[j]&&(Ht.innerHTML=B.substring(0,W)+be[j])}}else re&&(ee||Z)&&(o=!0);if((a||ee&&!Z)&&(Tt=Ci(),Si()),(s=Me!==b)?(Ve.emit("indexChanged",xi()),o=!0):a?s||Fn():(ee||Z)&&(Ln(),Wn(),Rn()),a&&!I&&function(){for(var e=Me+Math.min(q,oe),t=Te;t--;){var n=F[t];t>=Me&&t<e?(ug(n,"tns-moving"),n.style.left=100*(t-Me)/oe+"%",ug(n,T),hg(n,R)):n.style.left&&(n.style.left="",ug(n,R),hg(n,T)),hg(n,N)}setTimeout((function(){ag(F,(function(e){hg(e,"tns-moving")}))}),300)}(),!Ge&&!Qe){if(i&&!u&&(te===D&&ne===P||(M.style.cssText=hn(te,ne,ee,le,de)),L)){I&&(U.style.width=dn(ee,ne,oe));var V=fn(ee,ne,oe)+pn(ne);og(Ee,sg(Ee)-1),rg(Ee,"#"+Ke+" > .tns-item",V,sg(Ee))}de&&jn(),o&&(ei(),Ue=Me)}i&&Ve.emit("newBreakpointEnd",xi(n))}}function Cn(){if(!ee&&!Z)return q<=(re?oe-(oe-1)/2:oe);var e=ee?(ee+ne)*q:W[q],t=te?ie+2*te:ie+ne;return re&&(t-=ee?(ie-ee)/2:(ie-(W[Me+1]-W[Me]-ne))/2),e<=t}function Sn(){for(var e in A=0,k)e=parseInt(e),H>=e&&(A=e)}function xn(){!ve&&Ht&&vg(Ht),!ge&&St&&vg(St),fe||(_t?vg(_t):(wt&&vg(wt),kt&&vg(kt)))}function Tn(){ve&&Ht&&_g(Ht),ge&&St&&_g(St),fe&&(_t?_g(_t):(wt&&_g(wt),kt&&_g(kt)))}function Nn(){if(!Xe){if(te&&(M.style.margin="0px"),xe)for(var e="tns-transparent",t=xe;t--;)I&&ug(F[t],e),ug(F[Te-t-1],e);xn(),Xe=!0}}function On(){if(!Je){if(Ee.disabled=!0,U.className=U.className.replace($e.substring(1),""),mg(U,["style"]),he)for(var e=xe;e--;)I&&vg(F[e]),vg(F[Te-e-1]);if(L&&I||mg(M,["style"]),!I)for(var t=Me,n=Me+q;t<n;t++){var i=F[t];mg(i,["style"]),hg(i,T),hg(i,R)}xn(),Je=!0}}function Rn(){var e=Pn();$.innerHTML!==e&&($.innerHTML=e)}function Pn(){var e=An(),t=e[0]+1,n=e[1]+1;return t===n?t+"":t+" to "+n}function An(e){null==e&&(e=Zn());var t,n,i,r=Me;if(re||te?(Z||ee)&&(n=-(parseFloat(e)+te),i=n+ie+2*te):Z&&(n=W[Me],i=n+ie),Z)W.forEach((function(e,o){o<Te&&((re||te)&&e<=n+.5&&(r=o),i-e>=.5&&(t=o))}));else{if(ee){var o=ee+ne;re||te?(r=Math.floor(n/o),t=Math.ceil(i/o-1)):t=r+Math.ceil(ie/o)-1}else if(re||te){var s=oe-1;if(re?(r-=s/2,t=Me+s/2):t=Me+s,te){var a=te*oe/ie;r-=a,t+=a}r=Math.floor(r),t=Math.ceil(t)}else t=r+oe-1;r=Math.max(r,0),t=Math.min(t,Te-1)}return[r,t]}function Ln(){if(Ie&&!Ge){var e=An();e.push(Ce),Un.apply(null,e).forEach((function(e){if(!lg(e,pt)){var t={};t[y]=function(e){e.stopPropagation()},xg(e,t),xg(e,gt),e.src=fg(e,"data-src");var n=fg(e,"data-srcset");n&&(e.srcset=n),ug(e,"loading")}}))}}function Dn(e){ug(e,"loaded"),Mn(e)}function Mn(e){ug(e,pt),hg(e,"loading"),Tg(e,gt)}function Un(e,t,n){var i=[];for(n||(n="img");e<=t;)ag(F[e].querySelectorAll(n),(function(e){i.push(e)})),e++;return i}function jn(){var e=Un.apply(null,An());Vp((function(){Bn(e,Hn)}))}function Bn(e,t){return V?t():(e.forEach((function(t,n){!Ie&&t.complete&&Mn(t),lg(t,pt)&&e.splice(n,1)})),e.length?void Vp((function(){Bn(e,t)})):t())}function Fn(){Ln(),Wn(),Rn(),Jn(),function(){if(ge&&(Rt=Ot>=0?Ot:rn(),Ot=-1,Rt!==Pt)){var e=Ct[Pt],t=Ct[Rt];gg(e,{tabindex:"-1","aria-label":Lt+(Pt+1)}),hg(e,At),gg(t,{"aria-label":Lt+(Rt+1)+Dt}),mg(t,"tabindex"),ug(t,At),Pt=Rt}}()}function qn(e,t){for(var n=[],i=e,r=Math.min(e+t,Te);i<r;i++)n.push(F[i].offsetHeight);return Math.max.apply(null,n)}function Hn(){var e=de?qn(Me,oe):qn(xe,q),t=P||M;t.style.height!==e&&(t.style.height=e+"px")}function zn(){W=[0];var e=L?"left":"top",t=L?"right":"bottom",n=F[0].getBoundingClientRect()[e];ag(F,(function(i,r){r&&W.push(i.getBoundingClientRect()[e]-n),r===Te-1&&W.push(i.getBoundingClientRect()[t]-n)}))}function Wn(){var e=An(),t=e[0],n=e[1];ag(F,(function(e,i){i>=t&&i<=n?dg(e,"aria-hidden")&&(mg(e,["aria-hidden","tabindex"]),ug(e,dt)):dg(e,"aria-hidden")||(gg(e,{"aria-hidden":"true",tabindex:"-1"}),hg(e,dt))}))}function Vn(e){return e.nodeName.toLowerCase()}function $n(e){return"button"===Vn(e)}function Kn(e){return"true"===e.getAttribute("aria-disabled")}function Gn(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function Jn(){if(fe&&!ue&&!he){var e=yt?wt.disabled:Kn(wt),t=vt?kt.disabled:Kn(kt),n=Me<=je,i=!ue&&Me>=Be;n&&!e&&Gn(yt,wt,!0),!n&&e&&Gn(yt,wt,!1),i&&!t&&Gn(vt,kt,!0),!i&&t&&Gn(vt,kt,!1)}}function Yn(e,t){f&&(e.style[f]=t)}function Qn(e){return null==e&&(e=Me),Z?(ie-(te?ne:0)-(W[e+1]-W[e]-ne))/2:ee?(ie-ee)/2:(oe-1)/2}function Xn(){var e=ie+(te?ne:0)-(ee?(ee+ne)*Te:W[Te]);return re&&!he&&(e=ee?-(ee+ne)*(Te-1)-Qn():Qn(Te-1)-W[Te-1]),e>0&&(e=0),e}function Zn(e){var t;if(null==e&&(e=Me),L&&!Z)if(ee)t=-(ee+ne)*e,re&&(t+=Qn());else{var n=h?Te:oe;re&&(e-=Qn()),t=100*-e/n}else t=-W[e],re&&Z&&(t+=Qn());return Ne&&(t=Math.max(t,Oe)),t+=!L||Z||ee?"px":"%"}function ei(e){Yn(U,"0s"),ti(e)}function ti(e){null==e&&(e=Zn()),U.style[Pe]=Ae+e+Le}function ni(e,t,n,i){var r=e+oe;he||(r=Math.min(r,Te));for(var o=e;o<r;o++){var s=F[o];i||(s.style.left=100*(o-Me)/oe+"%"),O&&p&&(s.style[p]=s.style[m]=O*(o-e)/1e3+"s"),hg(s,t),ug(s,n),i&&Se.push(s)}}function ii(e,t){Re&&Qt(),(Me!==Ue||t)&&(Ve.emit("indexChanged",xi()),Ve.emit("transitionStart",xi()),de&&jn(),Ut&&e&&["click","keydown"].indexOf(e.type)>=0&&di(),ze=!0,Xt())}function ri(e){return e.toLowerCase().replace(/-/g,"")}function oi(e){if(I||ze){if(Ve.emit("transitionEnd",xi(e)),!I&&Se.length>0)for(var t=0;t<Se.length;t++){var n=Se[t];n.style.left="",m&&p&&(n.style[m]="",n.style[p]=""),hg(n,N),ug(n,R)}if(!e||!I&&e.target.parentNode===U||e.target===U&&ri(e.propertyName)===ri(Pe)){if(!Re){var i=Me;Qt(),Me!==i&&(Ve.emit("indexChanged",xi()),ei())}"inner"===E&&Ve.emit("innerLoaded",xi()),ze=!1,Ue=Me}}}function si(e,t){if(!Qe)if("prev"===e)ai(t,-1);else if("next"===e)ai(t,1);else{if(ze){if(Fe)return;oi()}var n=nn(),i=0;if("first"===e?i=-n:"last"===e?i=I?q-oe-n:q-1-n:("number"!=typeof e&&(e=parseInt(e)),isNaN(e)||(t||(e=Math.max(0,Math.min(q-1,e))),i=e-n)),!I&&i&&Math.abs(i)<oe){var r=i>0?1:-1;i+=Me+i-q>=je?q*r:2*q*r*-1}Me+=i,I&&he&&(Me<je&&(Me+=q),Me>Be&&(Me-=q)),nn(Me)!==nn(Ue)&&ii(t)}}function ai(e,t){if(ze){if(Fe)return;oi()}var n;if(!t){for(var i=mi(e=gi(e));i!==_t&&[wt,kt].indexOf(i)<0;)i=i.parentNode;var r=[wt,kt].indexOf(i);r>=0&&(n=!0,t=0===r?-1:1)}if(ue){if(Me===je&&-1===t)return void si("last",e);if(Me===Be&&1===t)return void si("first",e)}t&&(Me+=se*t,Z&&(Me=Math.floor(Me)),ii(n||e&&"keydown"===e.type?e:null))}function ci(){Mt=setInterval((function(){ai(null,qt)}),_e),Ut=!0}function li(){clearInterval(Mt),Ut=!1}function ui(e,t){gg(Ht,{"data-action":e}),Ht.innerHTML=Wt[0]+e+Wt[1]+t}function hi(){ci(),Ht&&ui("stop",be[1])}function di(){li(),Ht&&ui("start",be[0])}function fi(){Ut?(di(),Bt=!0):(hi(),Bt=!1)}function pi(e){e.focus()}function gi(e){return yi(e=e||n.event)?e.changedTouches[0]:e}function mi(e){return e.target||n.event.srcElement}function yi(e){return e.type.indexOf("touch")>=0}function vi(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function _i(){return o=Gt.y-Kt.y,s=Gt.x-Kt.x,t=Math.atan2(o,s)*(180/Math.PI),n=qe,i=!1,(r=Math.abs(90-Math.abs(t)))>=90-n?i="horizontal":r<=n&&(i="vertical"),i===e.axis;var t,n,i,r,o,s}function bi(e){if(ze){if(Fe)return;oi()}ve&&Ut&&li(),Jt=!0,$t&&(Kp($t),$t=null);var t=gi(e);Ve.emit(yi(e)?"touchStart":"dragStart",xi(e)),!yi(e)&&["img","a"].indexOf(Vn(mi(e)))>=0&&vi(e),Gt.x=Kt.x=t.clientX,Gt.y=Kt.y=t.clientY,I&&(Vt=parseFloat(U.style[Pe].replace(Ae,"")),Yn(U,"0s"))}function wi(e){if(Jt){var t=gi(e);Gt.x=t.clientX,Gt.y=t.clientY,I?$t||($t=Vp((function(){ki(e)}))):("?"===He&&(He=_i()),He&&(mt=!0)),("boolean"!=typeof e.cancelable||e.cancelable)&&mt&&e.preventDefault()}}function ki(e){if(He){if(Kp($t),Jt&&($t=Vp((function(){ki(e)}))),"?"===He&&(He=_i()),He){!mt&&yi(e)&&(mt=!0);try{e.type&&Ve.emit(yi(e)?"touchMove":"dragMove",xi(e))}catch(e){}var t=Vt,n=Yt(Gt,Kt);if(!L||ee||Z)t+=n,t+="px";else t+=h?n*oe*100/((ie+ne)*Te):100*n/(ie+ne),t+="%";U.style[Pe]=Ae+t+Le}}else Jt=!1}function Ei(t){if(Jt){$t&&(Kp($t),$t=null),I&&Yn(U,""),Jt=!1;var n=gi(t);Gt.x=n.clientX,Gt.y=n.clientY;var i=Yt(Gt,Kt);if(Math.abs(i)){if(!yi(t)){var r=mi(t);xg(r,{click:function e(t){vi(t),Tg(r,{click:e})}})}I?$t=Vp((function(){if(L&&!Z){var e=-i*oe/(ie+ne);e=i>0?Math.floor(e):Math.ceil(e),Me+=e}else{var n=-(Vt+i);if(n<=0)Me=je;else if(n>=W[Te-1])Me=Be;else for(var r=0;r<Te&&n>=W[r];)Me=r,n>W[r]&&i<0&&(Me+=1),r++}ii(t,i),Ve.emit(yi(t)?"touchEnd":"dragEnd",xi(t))})):He&&ai(t,i>0?-1:1)}}"auto"===e.preventScrollOnTouch&&(mt=!1),qe&&(He="?"),ve&&!Ut&&ci()}function Ii(){(P||M).style.height=W[Me+oe]-W[Me]+"px"}function Ci(){var e=ee?(ee+ne)*q/ie:q/oe;return Math.min(Math.ceil(e),q)}function Si(){if(ge&&!ct&&Tt!==Nt){var e=Nt,t=Tt,n=_g;for(Nt>Tt&&(e=Tt,t=Nt,n=vg);e<t;)n(Ct[e]),e++;Nt=Tt}}function xi(e){return{container:U,slideItems:F,navContainer:St,navItems:Ct,controlsContainer:_t,hasControls:st,prevButton:wt,nextButton:kt,items:oe,slideBy:se,cloneCount:xe,slideCount:q,slideCountNew:Te,index:Me,indexCached:Ue,displayIndex:en(),navCurrentIndex:Rt,navCurrentIndexCached:Pt,pages:Tt,pagesCached:Nt,sheet:Ee,isOn:z,event:e||{}}}_&&console.warn("No slides found in",e.container)};function Rg(e){const t=document.querySelector(".btn-open-trailer"),n=Fc.create(`\n                <div class="modal">\n                        <iframe width="640" height="480" frameborder="0" allowfullscreen allow='autoplay'\n                                src="https://www.youtube.com/embed/${e[0].key}?autoplay=1" >\n                        </iframe>\n                        <button type="button" class="modal-trailer-close-btn">\n                                <svg width="35" height="35" fill="#fff" xmlns="http://www.w3.org/2000/svg" ><path d="m8 8 14 14M8 22 22 8" stroke="#000" stroke-width="2"></path></svg>\n                        </button>\n                </div>\n        `,{onShow:e=>{e.element().querySelector(".modal-trailer-close-btn").onclick=e.close}});t.addEventListener("click",(()=>{n.show()}))}const Pg=qc(),Ag=new hp;function Lg(e){if(window.screen.width>=1024)return e.map((e=>{const{poster_path:t,id:n}=e,i=`<a><img src="${r=t,null===r?"https://wipfilms.net/wp-content/data/posters/tt0338683.jpg":`https://image.tmdb.org/t/p/w500${r}`}" alt="" data-id="${n}"/></a>`;var r;return Pg.slider.insertAdjacentHTML("beforeend",i)})),Dg(),Dg().play();Dg().destroy()}function Dg(){return Og({container:".slider",items:9,controlsContainer:".slider",navContainer:!1,navAsThumbnails:!1,autoplay:!0,autoplayTimeout:3e3,autoplayButton:!1,autoplayButtonOutput:!1,speed:1e3,nav:!1,rewind:!1,mouseDrag:!0})}Pg.slider.addEventListener("click",(e=>{e.target.parentNode.classList.contains("tns-slide-active")&&(Ag.id=e.target.dataset.id,Ag.getMoviesById().then((e=>{yl(e.data),pp(".modal-card [data-key]"),setTimeout((()=>{Ag.getMoviesTrailer().then((e=>{Rg(e.data.results)}))}),500)})))}));var Mg={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */!function(e,t){Mg=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,i,r,o,s=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])s.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var i=n(2),r=n(17),o=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):o(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){var i=n(2);e.exports=function(e,t,n){var r,o;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(o=t.length,r=n;n>=0&&r<o;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){var i=n(29),r=n(30),o=n(5),s={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=o(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=s},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var i=n(13),r=n(7),o=n(0),s=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(e,t){this._options=o({},l,t),this._currentPage=0,this._view=new a(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),o=this._getEdge(e);return t.leftPageNumber=o.left,t.rightPageNumber=o.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),o=this._options.visiblePages,s=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(o/2),(n=(t=Math.max(e-i,1))+o-1)>r&&(t=Math.max(r-o+1,1),n=r)):(t=(s-1)*o+1,n=s*o,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){s(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),e.exports=u},function(e,t,n){var i=n(0),r=n(14),o=n(4),s=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){i(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var i=this;o(e)?(e=e.split(u),l(e,(function(e){i._bindEvent(e,t,n)}))):s(e)&&(n=t,l(e,(function(e,t){i.on(t,e,n)})))},h.prototype.once=function(e,t,n){var i=this;if(s(e))return n=t,void l(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,i=0;if(a(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},h.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,o=t===i.context,s=r&&o;return s&&n._forgetContext(i.context),s}},h.prototype._offByEventName=function(e,t){var n=this,i=c(t),r=n._matchHandler(t);e=e.split(u),l(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(l(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);l(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?l(e,(function(e,t){i.off(t,e)})):o(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},h.prototype.off=function(e,t){o(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):s(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var i=n(3),r=n(7),o=n(21),s=n(22),a=n(24),c=n(25),l=n(0),u=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],g=["prev","next"],m=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=l({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(g,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||c(t,this._firstItemClassName),n!==r||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();s(t,"click",(function(t){var n,i,r=o(t);a(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!d.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=m},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var i=n(4),r=n(3),o=n(23);function s(e,t,n,i){function s(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,s):"attachEvent"in e&&e.attachEvent("on"+t,s),function(e,t,n,i){var s=o(e,t),a=!1;r(s,(function(e){return e.handler!==n||(a=!0,!1)})),a||s.push({handler:n,wrappedHandler:i})}(e,t,n,s)}e.exports=function(e,t,n,o){i(t)?r(t.split(/\s+/g),(function(t){s(e,t,n,o)})):r(t,(function(t,i){s(e,i,t,n)}))}},function(e,t,n){var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var i=n(3),r=n(8),o=n(26),s=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,c=[];a?i(n,(function(t){e.classList.add(t)})):((t=o(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,c)<0&&c.push(e)})),s(e,c))}},function(e,t,n){var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var i=n(8),r=n(3),o=n(2),s=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,g=/^-?\d+\.?\d*$/,m={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],o=0,s=0;return r(t,(function(e,r){0===e.indexOf("if")?o+=1:"/if"===e?o-=1:o||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(s,r)),s=r+1)})),i.push(t.slice(s)),{exps:n,sourcesInsideIf:i}}(e,t),o=!1,s="";return r(i.exps,(function(e,t){return(o=b(e,n))&&(s=w(i.sourcesInsideIf[t],n)),!o})),s},each:function(e,t,n){var i=b(e,n),s=o(i)?"@index":"@key",c={},l="";return r(i,(function(e,i){c[s]=i,c["@this"]=e,a(n,c),l+=w(t.slice(),n)})),l},with:function(e,t,n){var r=i("as",e),o=e[r+1],s=b(e.slice(0,r),n),c={};return c[o]=s,w(t,a(n,c))||""}},y=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],o=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(o,i)),o=i+n[0].length,n=t.exec(e);return r.push(e.slice(o)),r};function v(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:f.test(e)?i=e.replace(p,""):l.test(e)?i=v((n=e.split(u))[0],t)[v(n[1],t)]:h.test(e)?i=v((n=e.split(d))[0],t)[n[1]]:g.test(e)&&(i=parseFloat(e)),i}function _(e,t,n){for(var i,r,o,a,c=m[e],l=1,u=2,h=t[u];l&&s(h);)0===h.indexOf(e)?l+=1:0===h.indexOf("/"+e)&&(l-=1,i=u),h=t[u+=2];if(l)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(r=0,o=i,(a=t.splice(r+1,o-r)).pop(),a),n),t}function b(e,t){var n=v(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(v(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function w(e,t){for(var n,i,r,o=1,a=e[o];s(a);)i=(n=a.split(" "))[0],m[i]?(r=_(i,e.splice(o,e.length-o),t),e=e.concat(r)):e[o]=b(n,t),a=e[o+=2];return e.join("")}e.exports=function(e,t){return w(y(e,c),t)}},function(e,t,n){var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",s=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(e){return(new Date).getTime()-e>6048e5}(s)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}));const Ug=new hp,jg=qc();function Bg(t){const n=document.getElementById("tui-pagination-container");let i={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};const r=window.matchMedia("(max-width: 768px)");function o(e){e.matches&&(i.visiblePages=3)}r.addEventListener("change",o),o(r);new(e(Mg))(n,i).on("afterMove",(function(e){jg.gallery.innerHTML="",Ug.page=e.page,Ug.getPopularMovies().then((e=>{Vc(e.data.results)}))}))}const Fg=new hp,qg=qc();function Hg(){qg.gallery.innerHTML="",Fg.resetPage(),Fg.getPopularMovies().then((e=>{Bg(e.data.total_results),Vc(e.data.results),document.querySelector(".gallery").addEventListener("click",(e=>{Fg.id=e.target.dataset.id,Fg.getMoviesById().then((e=>{yl(e.data),pp(".modal-card [data-key]")})),setTimeout((()=>{Fg.getMoviesTrailer().then((e=>{Rg(e.data.results)}))}),500)}))}))}arrowTop.onclick=function(){window.scrollTo({pageXOffset:pageXOffset,top:0,behavior:"smooth"})},window.addEventListener("scroll",(function(){arrowTop.hidden=pageYOffset<document.documentElement.clientHeight})),Fg.getUpcomingMovies().then((e=>{Lg(e.data.results)}));const zg=qc();zg.libraryPage.addEventListener("click",(function(e){e.preventDefault(),zg.form.classList.add("is-hidden"),zg.btnSectionInLibrary.classList.remove("is-hidden"),zg.btnSectionInLibrary.classList.add("btn-list"),zg.homePage.classList.remove("current"),zg.libraryPage.classList.add("current"),zg.headerByClass.classList.remove("header"),zg.headerByTeg.classList.add("header-library"),zg.search.classList.add("is-hidden"),zg.pagination.classList.add("pagination-off"),zg.search.innerHTML=""}));var Wg;function Vg(e,t,n){var i,r,o,s,a;function c(){var l=Date.now()-s;l<t&&l>=0?i=setTimeout(c,t-l):(i=null,n||(a=e.apply(o,r),o=r=null))}null==t&&(t=100);var l=function(){o=this,r=arguments,s=Date.now();var l=n&&!i;return i||(i=setTimeout(c,t)),l&&(a=e.apply(o,r),o=r=null),a};return l.clear=function(){i&&(clearTimeout(i),i=null)},l.flush=function(){i&&(a=e.apply(o,r),o=r=null,clearTimeout(i),i=null)},l}Vg.debounce=Vg,Wg=Vg;const $g=new hp,Kg=qc();function Gg(t,n){const i=document.getElementById("tui-pagination-container"),r={totalItems:t,itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},o=window.matchMedia("(max-width: 768px)");function s(e){e.matches&&(r.visiblePages=3)}o.addEventListener("change",s),s(o);const a=new(e(Mg))(i,r);a.off("afterMove",(function(e){Kg.gallery.innerHTML="",$g.page=e.page,$g.getPopularMovies().then((e=>{Vc(e.data.results)}))})),a.on("afterMove",(function(e){$g.page=e.page,Kg.gallery.innerHTML="",$g.query=n,$g.getSearchMovies().then((e=>{Vc(e.data.results)}))}))}const Jg=e(tl).apifilms.failure,Yg=new hp,Qg=qc();Qg.form.addEventListener("input",e(Wg)((function(e){e.preventDefault(),Yg.resetPage();const t=Qg.searchInput.value;if(""===t)return void Hg();Qg.gallery.innerHTML="",function(e,t){Yg.query=e,Yg.getSearchMovies().then((n=>{Gg(n.data.total_results,e),0!==n.data.results.length?t(n.data.results):r.Notify.failure(el(Jg))}))}(t,Vc)}),500));const Xg=new hp,Zg=qc();function em(){try{"dark"===localStorage.getItem("theme")?(document.querySelector(".bg").classList.add("dark"),document.querySelector(".themetoggle span").textContent="nightlight_round"):(document.querySelector(".bg").classList.remove("dark"),document.querySelector(".themetoggle span").textContent="wb_sunny")}catch(e){}}Zg.form.addEventListener("submit",(function(e){e.preventDefault();const{elements:{searchQuery:t}}=e.currentTarget;Zg.gallery.innerHTML="",Xg.query=t.value,Xg.getSearchMovies().then((e=>{console.log(e.data),Vc(e.data.results),Gg(e.data.total_results,t)})),t.value=""})),Hg(),document.querySelector(".themetoggle").addEventListener("click",(e=>{e.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","dark"),em()})),em();
//# sourceMappingURL=index.f254d2cf.js.map
