(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b14ebb5e"],{"097c":function(e,t,s){"use strict";var i=s("4081");const o=i["c"].mapGetResponse,r=e=>{const t={};for(let o=0;o<e.length;o++){const r=e[o];t[r.id]={};for(let e=0;e<r.orderDeviceServices.length;e++){var s;const i=r.orderDeviceServices[e];t[r.id][i.id]={...i,name:(null===(s=i.serviceCategory)||void 0===s?void 0:s.name)||i.name||"- Servicio",type:"Servicio",quantity:1,total:1*i.price}}for(let e=0;e<r.orderDeviceProducts.length;e++){var i;const s=r.orderDeviceProducts[e];t[r.id][s.id]={...s,name:(null===(i=s.productCategory)||void 0===i?void 0:i.name)||s.name||"- Producto",type:"Producto",quantity:s.quantity,total:s.price*s.quantity}}}return t};t["a"]={mapGetResponse:o,mapGetBreakdownResume:r}},"73d0":function(e,t,s){"use strict";s("ea6f")},"74f5":function(e,t,s){"use strict";s.r(t);s("14d9");var i=function(){var e=this,t=e._self._c;return t("app-layout",[t("div",{staticClass:"flex flex-col items-center pb-32"},[t("div",{staticClass:"w-full px-6 pt-6 2xl:w-3/5 2xl:px-0"},[t("div",{staticClass:"w-full mb-4 space-y-4"},[t("div",{staticClass:"flex flex-col md:flex-row py-4"},[t("div",{staticClass:"flex flex-row items-center"},[t("sa-icon-button",{attrs:{"with-bg":"",iconClass:"bx bx-left-arrow-alt"},on:{click:function(t){return e.$router.push({name:"orders.read",params:{id:e.order.id}})}}}),t("span",{staticClass:"mx-2 text-lg font-bold"},[e._v(" Factura ")])],1),t("div",{staticClass:"flex flex-row items-center ml-auto"},[t("div",{staticClass:"whitespace-nowrap"},[e.id&&!e.isMobile?t("el-dropdown",{staticClass:"mx-2",attrs:{"split-button":"",type:"warning"},on:{click:e.print,command:e.print}},[t("span",[e._v("Imprimir")]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"default"}},[e._v("Carta")]),t("el-dropdown-item",{attrs:{command:"thermal"}},[e._v("TÃ©rmico")]),t("el-dropdown-item",{attrs:{disabled:""}},[e._v("Sticker")])],1)],1):e._e(),t("el-button-group",{staticClass:"mr-2",staticStyle:{"margin-top":"-6px"}},[e.id&&e.isMobile?t("span",{staticClass:"el-button el-button--warning p-2",on:{click:e.print}},[t("i",{staticClass:"text-md bx bx-printer"})]):e._e(),e.id&&e.isMobile?t("el-dropdown",{attrs:{trigger:"click"},on:{command:e.print}},[t("span",{staticClass:"el-button el-button--warning p-2"},[t("i",{staticClass:"text-md el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{attrs:{command:"default"}},[e._v("Carta")]),t("el-dropdown-item",{attrs:{command:"thermal"}},[e._v("TÃ©rmico")]),t("el-dropdown-item",{attrs:{disabled:""}},[e._v("Sticker")])],1)],1):e._e()],1),e.id?t("el-button",{staticClass:"el-button--success",class:{"p-2":e.isMobile},on:{click:e.whatsapp}},[e.isMobile?e._e():t("span",[e._v("WhatsApp")]),e.isMobile?t("i",{staticClass:"text-md bx bxl-whatsapp"}):e._e()]):e._e(),t("el-button",{staticClass:"el-button--primary",class:{"p-2":e.isMobile},on:{click:function(t){return e.$router.push({name:"orders.index"})}}},[e.isMobile?e._e():t("span",[e._v("Guardar")]),e.isMobile?t("i",{staticClass:"text-md bx bx-save"}):e._e()])],1)])])]),t("div",{staticClass:"w-full lg:w-1/2 items-center text-center m-auto space-y-4 relative",attrs:{id:"print-area"}},e._l(e.order.orderDevices,(function(s){return t("div",{key:s.id,staticClass:"w-full items-center text-center py-2"},[t("div",{staticClass:"w-full flex flex-col border rounded-sm text-left p-2"},[e._e(),t("div",{staticClass:"text-md"},[t("strong",[e._v("Nombre Cliente: ")]),e._v(" "+e._s(e.order.client.fullName)+" ")]),t("div",{staticClass:"text-md"},[t("strong",[e._v("# Orden: ")]),e._v(" "+e._s(e.order.reference)+" ")]),t("div",{staticClass:"text-md"},[t("strong",[e._v("Dispositivo: ")]),e._v(" "+e._s(s.deviceModel.brand)+" - "+e._s(s.deviceModel.model)+" ")]),t("div",{staticClass:"text-md"},[t("strong",[e._v("Problema: ")]),e._v(" "+e._s(s.diagnosticNotes)+" ")]),e.assigned?t("div",{staticClass:"text-md"},[t("strong",[e._v("Asignado: ")]),e._v(" "+e._s(e.assigned)+" ")]):e._e(),e.dueDate?t("div",{staticClass:"text-md"},[t("strong",[e._v("Fecha Compromiso: ")]),e._v(" "+e._s(e.dueDate)+" ")]):e._e()])])})),0)])])])},o=[],r=s("cfd9"),a=s("097c"),n=s("e419"),d=s("5a50"),l=s("8266"),c={name:"InvoiceSticker",mixins:[l["a"]],components:{AppLayout:()=>s.e("chunk-2b774e2e").then(s.bind(null,"c987"))},data(){return{id:null,order:{reference:null,client:{fullName:null,phone:null,email:null},assigned:null,dueDate:null,orderDevices:[]},isMobile:!1}},created(){window.addEventListener("resize",this.resize),this.resize()},destroyed(){window.removeEventListener("resize",this.resize)},mounted(){this.id=this.$route.params.id,this.load()},computed:{qrCodeValue(){return`${window.location.origin}/my-order-status/${this.id}`},todayDate(){return this.$moment(new Date).format("MM/DD/YYYY hh:mm:ss A")},dueDate(){return this.order.dueDate?this.$moment(this.order.dueDate).format("MM/DD/YYYY"):null},assigned(){return this.order.assignedToAccount?this.order.assignedToAccount.fullname:null}},methods:{whatsapp(){this.order.client.countryCode?Object(n["a"])({code:this.order.client.countryCode,phone:this.order.client.phone,text:`Hola te envÃ­o el comprobante de tu orden.${d["u"].br}${d["u"].br}*${this.qrCodeValue}*`}):this.$toastr.e("El Cliente debe tener registrado el CÃ³digo de Area")},print(e){"string"===typeof e?this.$router.push({name:"invoices."+e,params:{id:this.id}}):window.print()},async load(){const e=await r["a"].getById(this.id);this.order=a["a"].mapGetResponse(e)},resize(){const e=this.getPercentageWidth();this.isMobile="90%"===e}}},u=c,p=(s("73d0"),s("2877")),m=Object(p["a"])(u,i,o,!1,null,"317eb9b4",null);t["default"]=m.exports},ea6f:function(e,t,s){}}]);
//# sourceMappingURL=chunk-b14ebb5e.164f4ff3.js.map