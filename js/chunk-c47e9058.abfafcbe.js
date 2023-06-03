(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c47e9058"],{"608b":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e._self._c;return t("div",[t("content-card",{class:{"quick-start-selected":5===e.$store.state.quickStart.step},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.hasSelectedClient?"Cliente":"Buscar clientes")+" ")]},proxy:!0},{key:"actions",fn:function(){return[e.hasSelectedClient?t("div",[t("sa-icon-button",{attrs:{iconClass:"text-xl bx bx-x",tooltip:"Cancelar"},on:{click:e.clearSelectedClient}})],1):t("div",[t("sa-icon-button",{attrs:{iconClass:"text-xl bx bx-plus",tooltip:"Crear nuevo cliente"},on:{click:function(t){e.visibleDialogClientForm=!0}}})],1)]},proxy:!0}])},[e.hasSelectedClient?t("div",{staticClass:"py-2"},[t("quick-start-tip",{attrs:{title:"Clientes",content:"AquÃ­ puedes elegir o ingresar al cliente que pertenece la Orden.\n        Te recomendamos siempre ingresar el numero de telefono para poder utilizar las funciones de WhatsApp.",placement:"left","bg-purple":!1,value:5===e.$store.state.quickStart.step},on:{onNextStep:e.handleNextStep}},[t("div",{staticClass:"space-y-2"},[t("dl",{staticClass:"flex justify-between"},[t("dd",[t("span",{staticClass:"font-bold"},[e._v("Nombre")])]),t("dt",[t("span",[e._v(e._s(e.selectedClient.fullName))])])]),t("dl",{staticClass:"flex justify-between"},[t("dd",[t("span",{staticClass:"font-bold"},[e._v("Email")])]),t("dt",[t("span",[e._v(e._s(e.selectedClient.email))])])]),t("dl",{staticClass:"flex justify-between"},[t("dd",[t("span",{staticClass:"font-bold"},[e._v("TelÃ©fono")])]),t("dt",[t("span",[e._v(e._s(e.selectedClient.countryCode)+" "+e._s(e.selectedClient.phone))])])])])])],1):t("div",[t("el-select",{staticClass:"w-full",attrs:{"data-is-search":"true",remote:"",clearable:"",filterable:"",autocomplete:"off",placeholder:"Teclea email, nombre o apellido","remote-method":e.searchClient,loading:e.loadingClients},on:{change:e.onSelectedClient},model:{value:e.$state.order.clientId,callback:function(t){e.$set(e.$state.order,"clientId",t)},expression:"$state.order.clientId"}},e._l(e.filteredClients,(function(i){return t("el-option",{key:i.id,staticClass:"h-full border-b border-gray-150",attrs:{label:i.fullName,value:i.id}},[t("div",{staticClass:"flex flex-col py-1"},[t("span",{staticClass:"-mb-4 font-bold"},[e._v(e._s(i.fullName))]),t("span",{staticClass:"text-gray-500"},[e._v(e._s(i.email))])])])})),1)],1)]),t("el-dialog",{attrs:{visible:e.visibleDialogClientForm,width:e.dialogClientWidth},on:{"update:visible":function(t){e.visibleDialogClientForm=t}}},[t("client-form",{staticClass:"px-2",attrs:{"with-title":!0},on:{onCancel:function(t){e.visibleDialogClientForm=!1},onSaved:e.onSavedClient}})],1)],1)},s=[],a=i("4081"),n=i("c134"),o=i("8266"),d=i("2ef0"),r=i.n(d),c=i("4cf1"),u={name:"ClientBlock",components:{ContentCard:()=>Promise.resolve().then(i.bind(null,"3246")),ClientForm:()=>i.e("chunk-2d0d098b").then(i.bind(null,"693e"))},mixins:[o["a"]],data(){return{loadingClients:!1,visibleDialogClientForm:!1,filteredClients:[],dialogClientWidth:"90%",selectedClient:{fullname:void 0,name:void 0,phone:void 0},showQuickStartTip:!1}},computed:{hasSelectedClient(){return this.$state.order.clientId}},created(){window.addEventListener("resize",r.a.debounce(this.resizeDialogWidth,200)),this.resizeDialogWidth(),this.$state=a["e"],setTimeout(()=>{this.selectedClient={fullname:void 0,name:void 0,phone:void 0,...a["e"].client}},1e3),setTimeout(()=>{this.showQuickStartTip=5===this.$store.state.quickStart.step},100)},destroyed(){window.addEventListener("resize",r.a.debounce(this.resizeDialogWidth,200))},methods:{async searchClient(e){try{this.loadingClients=!0,this.clearSelectedClient(),this.filteredClients=""!==e?await n["a"].getAll({textSearch:e}):[]}finally{this.loadingClients=!1}},onSelectedClient(e){this.selectedClient=this.filteredClients.find(t=>t.id==e)},clearSelectedClient(){this.filteredClients=[],this.selectedClient=null,this.$state.order.clientId=null},onSavedClient(e){this.selectedClient=e,this.$state.order.clientId=e.id,this.visibleDialogClientForm=!1},resizeDialogWidth(){this.dialogClientWidth=this.getPercentageWidth()},handleNextStep(){const e=this.$store.state.quickStart.step;this.$store.dispatch(c["b"],{step:e+1}),5===e&&(this.showQuickStartTip=!1)}}},h=u,C=i("2877"),p=Object(C["a"])(h,l,s,!1,null,null,null);t["default"]=p.exports},c134:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var l=i("c177");class s{static async getAll(e){var t;const i=await l["a"].submit({method:"get",url:"clients",parameters:e});return null!==(t=i.data)&&void 0!==t?t:null}static async getbyId(e){var t;const i=await l["a"].submit({method:"get",url:"clients/"+e});return null!==(t=i.data)&&void 0!==t?t:null}static async create(e){var t;const i=await l["a"].submit({method:"post",url:"clients",data:e});return null!==(t=i.data)&&void 0!==t?t:null}static async update(e,t){var i;const s=await l["a"].submit({method:"put",url:"clients/"+e,data:t});return null!==(i=s.data)&&void 0!==i?i:null}static async remove(e){var t;const i=await l["a"].submit({method:"delete",url:"clients/"+e});return null!==(t=i.data)&&void 0!==t?t:null}}}}]);
//# sourceMappingURL=chunk-c47e9058.abfafcbe.js.map