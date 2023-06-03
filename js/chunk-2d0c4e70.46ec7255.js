(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4e70"],{"3d8a":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("quick-start-tip",{attrs:{title:"Servicios y Productos",content:"En Samii puedes agregar o crear los servicios y/o productos que necesites para tus reparaciones,\n    puedes editar el costo/precio y se vera relfejado automaticamente en el monto de la orden.",placement:"left","bg-purple":!1,delay:200,value:4===e.$store.state.quickStart.step},on:{onNextStep:e.handleNextStep}},[t("div",{staticClass:"space-y-2 py-4",class:{"quick-start-selected":4===e.$store.state.quickStart.step}},[t("div",{staticClass:"w-full flex justify-between"},[t("span",{staticClass:"font-bold text-md"},[e._v("Servicios de reparaciÃ³n")]),t("a",{staticClass:"text-purple-400",on:{click:e.showService}},[t("strong",[e._v("+ Agregar nuevo servicio")])])]),t("div",[t("div",{staticClass:"flex flex-row space-x-2"},[t("el-input",{attrs:{type:"text"},on:{input:function(t){return e.showServicesDialog(!0)}},model:{value:e.serviceTextSearch,callback:function(t){e.serviceTextSearch=t},expression:"serviceTextSearch"}},[t("i",{staticClass:"mt-2 text-xl bx bx-search",attrs:{slot:"prefix"},slot:"prefix"})]),t("sa-button",{attrs:{size:"mini",type:"secondary"},on:{click:function(t){return e.showServicesDialog(!0)}}},[e._v(" Explorar ")])],1)])])]),e._l(e.orderDevice.orderDeviceServices,(function(i,s){return t("div",{key:"orderDeviceServices-"+s,staticClass:"w-full border border-gray-200 rounded-md mb-2"},[t("div",[t("div",{staticClass:"text-right"},[t("button",{on:{click:function(t){return e.removeService(s)}}},[t("i",{staticClass:"text-md bx bx-x"})])])]),t("el-form",{ref:"service-"+s,refInFor:!0,attrs:{model:i,rules:e.serviceRules}},[t("div",{staticClass:"w-full flex flex-col lg:flex-row lg:space-x-2 p-2 pt-0"},[t("div",{staticClass:"w-full"},[t("div",[t("strong",[e._v(e._s(i.name))]),t("div",[t("el-input",{attrs:{type:"textarea",rows:1,placeholder:"DescripciÃ³n del Servicio..."},model:{value:i.description,callback:function(t){e.$set(i,"description",t)},expression:"service.description"}})],1)])]),t("div",{staticClass:"w-full lg:w-40"},[t("span",[e._v("Costo")]),t("el-form-item",{attrs:{prop:"cost"}},[e.$store.state.account.canEditOrdersPrices?t("el-input",{staticClass:"w-full el-input-text-right",attrs:{type:"number",placeholder:"0.00"},model:{value:i.cost,callback:function(t){e.$set(i,"cost",t)},expression:"service.cost"}}):e._e(),e.$store.state.account.canEditOrdersPrices?e._e():t("el-input",{attrs:{disabled:"",placeholder:"***"}})],1)],1),t("div",{staticClass:"w-full lg:w-40"},[t("span",[e._v("Precio")]),e.$store.state.account.canEditOrdersPrices?t("el-input",{staticClass:"w-full el-input-text-right",attrs:{type:"number",placeholder:"0.00"},model:{value:i.price,callback:function(t){e.$set(i,"price",t)},expression:"service.price"}}):e._e(),e.$store.state.account.canEditOrdersPrices?e._e():t("el-input",{attrs:{disabled:"",placeholder:"***"}})],1)])])],1)})),e.hasOrderDeviceServices?t("div",{staticClass:"py-2"},[t("div",{staticClass:"mb-4"},[t("el-checkbox",{model:{value:e.orderDevice.hasWarranty,callback:function(t){e.$set(e.orderDevice,"hasWarranty",t)},expression:"orderDevice.hasWarranty"}},[t("span",[e._v(" "+e._s(e.orderDevice.hasWarranty?"DÃ­as de garantÃ­a":"Â¿Agregar tiempo de garantÃ­a?")+" ")])])],1),t("div",{staticClass:"w-1/3"},[e.orderDevice.hasWarranty?t("el-input",{staticClass:"align-middle",attrs:{type:"number",placeholder:"0"},model:{value:e.orderDevice.warrantyDays,callback:function(t){e.$set(e.orderDevice,"warrantyDays",t)},expression:"orderDevice.warrantyDays"}},[t("span",{staticClass:"el-input__icon",attrs:{slot:"suffix"},slot:"suffix"},[e._v(" dÃ­a(s) ")])]):e._e()],1)]):e._e(),t("el-dialog",{attrs:{visible:e.isVisibleSearchServicesDialog,width:e.dialogClientWidth},on:{"update:visible":function(t){e.isVisibleSearchServicesDialog=t},close:e.onCloseSearchServicesDialog}},[t("div",{staticClass:"-mx-5"},[e.isVisibleSearchServicesDialog?t("device-services-search",{attrs:{textSearch:e.serviceTextSearch},on:{cancel:function(t){return e.showServicesDialog(!1)},onSelectServices:e.onSelectServices}}):e._e()],1)])],2)},r=[],a=(i("d9e2"),i("4081")),c=i("22a1"),o=i("8266"),l=i("5a50"),n=i("2ef0"),d=i.n(n),v=i("f61c"),u=i("179a"),p=i("4cf1"),h={name:"ServicesBlock",components:{DeviceServicesSearch:()=>i.e("chunk-2d0d0b88").then(i.bind(null,"68d4"))},mixins:[o["a"]],props:{orderDeviceIndex:{type:Number,default:()=>null}},data(){return{dialogClientWidth:"40%",serviceTextSearch:null,isVisibleSearchServicesDialog:!1,subscription:null,ServiceEnumDict:l["t"],CategoryEnum:u["a"],commandSubscription:null,serviceRules:{cost:[{required:!0,validator(e,t,i){(null===t||void 0===t||""===t||t<0)&&i(new Error("El costo debe ser 0 o un nÃºmero mayor para continuar"))}}]}}},created(){this.subscription=c["b"].subscribe(this.commands),this.commandSubscription=v["a"].subscribe(this.customCommands),window.addEventListener("resize",d.a.debounce(this.resizeDialogWidth,200))},destroyed(){this.subscription.unsubscribe(),this.commandSubscription.unsubscribe(),window.removeEventListener("resize",d.a.debounce(this.resizeDialogWidth,200))},computed:{orderDevice(){return a["e"].order.orderDevices[this.orderDeviceIndex]},hasOrderDeviceServices(){return!!this.orderDevice.orderDeviceServices&&this.orderDevice.orderDeviceServices.length>0}},watch:{"orderDevice.orderDeviceServices":{deep:!0,handler:d.a.debounce((async function(){const e=Object.keys(this.$refs);for(let t=0;t<e.length;t++){const i=this.$refs[e[t]][0];i&&i.validate().catch(()=>{})}}),300)}},methods:{customCommands({type:e,payload:t}){switch(e){case v["b"].create:this.categoryCreate(t);break;default:}},commands({type:e,payload:t}){switch(e){case c["a"].create:a["d"].addOrderDeviceService(this.orderDeviceIndex,{id:t.id,name:t.name});break;default:}},removeService(e){a["d"].removeOrderDeviceService(this.orderDeviceIndex,e)},onCloseSearchServicesDialog(){this.serviceTextSearch=null},showServicesDialog(e){this.isVisibleSearchServicesDialog=e},showService(){v["c"].show({type:u["a"].Service})},onSelectServices(e){for(let t=0;t<e.length;t++){const i=e[t];a["d"].addOrderDeviceService(this.orderDeviceIndex,{id:i.id,name:i.name})}this.showServicesDialog(!1)},resizeDialogWidth(){this.dialogClientWidth=this.getPercentageWidth()},categoryCreate(e){e.type===u["a"].Service&&a["d"].addOrderDeviceService(this.orderDeviceIndex,{id:e.id,name:e.name})},handleNextStep(){const e=this.$store.state.quickStart.step;this.$store.dispatch(p["b"],{step:e+1})}}},S=h,m=i("2877"),b=Object(m["a"])(S,s,r,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0c4e70.46ec7255.js.map