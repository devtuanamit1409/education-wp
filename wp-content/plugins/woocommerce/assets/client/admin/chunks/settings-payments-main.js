"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[5712],{36644:(e,t,a)=>{a.r(t),a.d(t,{SettingsPaymentsMain:()=>S,default:()=>f});var n=a(12314),o=a(69307),s=a(65736),r=a(66811),c=a(17062),m=a(346),l=a(67221),i=a(55609),d=a(9818),_=a(14599);const w="woocommerce-payments",y=()=>{const[e,t]=(0,o.useState)(!1),{installAndActivatePlugins:a}=(0,d.useDispatch)(l.PLUGINS_STORE_NAME),{createNotice:n}=(0,d.useDispatch)("core/notices");return(0,o.createElement)(i.Button,{className:"button alignright",onClick:async()=>{if(!e){t(!0),(0,_.recordEvent)("settings_payments_recommendations_setup",{extension_selected:w});try{await a([w]),(async()=>{const e=await(0,d.resolveSelect)(l.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateway(w.replace(/-/g,"_"));e?.settings_url&&(window.location.href=e.settings_url)})()}catch(e){e instanceof Error&&n("error",e.message),t(!1)}}},variant:"secondary",isBusy:e,"aria-disabled":e},(0,s.__)("Install","woocommerce"))},g=({id:e,enabled:t,title:a,method_title:n,method_description:l,settings_url:i})=>{const d=(0,c.O3)("isWooPayEligible",!1),[_,w]=(0,o.useState)(t),[g,p]=(0,o.useState)(!1);return(0,o.createElement)("tr",{"data-gateway_id":e},(0,o.createElement)("td",{className:"sort ui-sortable-handle",width:"1%"}),(0,o.createElement)("td",{className:"name",width:""},(0,o.createElement)("div",{className:"wc-payment-gateway-method__name"},(0,o.createElement)("a",{href:i,className:"wc-payment-gateway-method-title"},n),"pre_install_woocommerce_payments_promotion"!==e&&n!==a&&(0,o.createElement)("span",{className:"wc-payment-gateway-method-name"}," – ",a),"pre_install_woocommerce_payments_promotion"===e&&(0,o.createElement)("div",{className:"pre-install-payment-gateway__subtitle"},(0,o.createElement)(r.WooPaymentMethodsLogos,{isWooPayEligible:d,maxElements:5})))),(0,o.createElement)("td",{className:"status",width:"1%"},(0,o.createElement)("a",{className:"wc-payment-gateway-method-toggle-enabled",href:i,onClick:async t=>{if(t.preventDefault(),p(!0),!window.woocommerce_admin.nonces?.gateway_toggle)return console.warn("Unexpected error: Nonce not found"),void(window.location.href=i);try{const t=await fetch(window.woocommerce_admin.ajax_url,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({action:"woocommerce_toggle_gateway_enabled",security:window.woocommerce_admin.nonces?.gateway_toggle,gateway_id:e})}),a=await t.json();a.success?!0===a.data?w(!0):!1===a.data?w(!1):"needs_setup"===a.data&&(window.location.href=i):window.location.href=i}catch(e){console.error("Error toggling gateway:",e)}finally{p(!1)}}},(0,o.createElement)("span",{className:`woocommerce-input-toggle ${_?"woocommerce-input-toggle--enabled":"woocommerce-input-toggle--disabled"} ${g?"woocommerce-input-toggle--loading":""}`,"aria-label":_?(0,s.sprintf)((0,s.__)('The "%s" payment method is currently enabled',"woocommerce"),n):(0,s.sprintf)((0,s.__)('The "%s" payment method is currently disabled',"woocommerce"),n)},_?(0,s.__)("Yes","woocommerce"):(0,s.__)("No","woocommerce")))),(0,o.createElement)("td",{className:"description",width:"",dangerouslySetInnerHTML:(0,m.ZP)(l)}),(0,o.createElement)("td",{className:"action",width:"1%"},"pre_install_woocommerce_payments_promotion"===e?(0,o.createElement)(y,null):(0,o.createElement)("a",{className:"button alignright","aria-label":t?(0,s.sprintf)((0,s.__)('Manage the "%s" payment method',"woocommerce"),n):(0,s.sprintf)((0,s.__)('Set up the "%s" payment method',"woocommerce"),n),href:i},t?(0,s.__)("Manage","woocommerce"):(0,s.__)("Finish setup","woocommerce"))))};var p=a(60538),u=a(24082),E=a(4396);const h=({additionalGateways:e})=>(0,o.createElement)(o.Fragment,null,e.map((e=>(0,o.createElement)("img",{key:e.id,src:e.image_72x72,alt:e.title,width:"24",height:"24",className:"other-payment-methods__image"}))),(0,s._x)("& more.","More payment providers to discover","woocommerce")),N=()=>{const{paymentGatewaySuggestions:e,installedPaymentGateways:t,isResolving:a,countryCode:n}=(0,d.useSelect)((e=>{const{getSettings:t}=e(l.SETTINGS_STORE_NAME),{general:a={}}=t("general");return{getPaymentGateway:e(l.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateway,installedPaymentGateways:e(l.PAYMENT_GATEWAYS_STORE_NAME).getPaymentGateways(),isResolving:e(l.ONBOARDING_STORE_NAME).isResolving("getPaymentGatewaySuggestions"),paymentGatewaySuggestions:e(l.ONBOARDING_STORE_NAME).getPaymentGatewaySuggestions(),countryCode:(0,u.so)(a.woocommerce_default_country)}}),[]),r=(0,o.useMemo)((()=>(0,E.U6)(t,e)),[t,e]),c=(0,o.useMemo)((()=>(0,E.kQ)(r,n)),[n,r]),m=Array.from(r.values()).some(E.tl),[_,w,y]=(0,o.useMemo)((()=>(0,E.tA)(r,null!=n?n:"",m,c)),[r,n,m,c]);if(a||!_)return null;const g=_.enabled&&!_.needsSetup;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.Button,{className:"is-tertiary",href:"https://woocommerce.com/product-category/woocommerce-extensions/payment-gateways/?utm_source=payments_recommendations",target:"_blank",value:"tertiary",rel:"noreferrer"},(0,o.createElement)("span",{className:"other-payment-methods__button-text"},g?(0,s.__)("Discover additional payment providers","woocommerce"):(0,s.__)("Discover other payment providers","woocommerce")),(0,o.createElement)(p.Z,{size:18})),y.length>0&&(0,o.createElement)(h,{additionalGateways:y}))};var b=a(14567);const S=()=>{const[e,t]=(0,o.useMemo)((()=>{const e=document.getElementById("experimental_wc_settings_payments_gateways");try{if(e&&e.textContent)return[JSON.parse(e.textContent),null];throw new Error("Could not find payment gateways data")}catch(e){return[[],e]}}),[]);return t?(0,o.createElement)("div",null,(0,o.createElement)("h1",null,(0,s.__)("Error loading payment gateways","woocommerce")),(0,o.createElement)("p",null,t.message)):(0,o.createElement)("div",{className:"settings-payments-main__container"},(0,o.createElement)("div",{id:"wc_payments_settings_slotfill"},(0,o.createElement)(b.P,null)),(0,o.createElement)("table",{className:"form-table"},(0,o.createElement)("tbody",null,(0,o.createElement)("tr",null,(0,o.createElement)("td",{className:"wc_payment_gateways_wrapper",colSpan:2},(0,o.createElement)("table",{className:"wc_gateways widefat",cellSpacing:"0","aria-describedby":"payment_gateways_options-description"},(0,o.createElement)("thead",null,(0,o.createElement)("tr",null,(0,o.createElement)("th",{className:"sort"}),(0,o.createElement)("th",{className:"name"},(0,s.__)("Method","woocommerce")),(0,o.createElement)("th",{className:"status"},(0,s.__)("Enabled","woocommerce")),(0,o.createElement)("th",{className:"description"},(0,s.__)("Description","woocommerce")),(0,o.createElement)("th",{className:"action"}))),(0,o.createElement)("tbody",{className:"ui-sortable"},e.map((e=>(0,o.createElement)(g,(0,n.Z)({key:e.id},e)))),(0,o.createElement)("tr",null,(0,o.createElement)("td",{className:"other-payment-methods-row",colSpan:5},(0,o.createElement)(N,null))))))))))},f=S}}]);