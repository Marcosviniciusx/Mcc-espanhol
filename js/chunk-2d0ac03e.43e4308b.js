(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac03e"],{1878:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"flex flex-col items-center py-4"},[e("div",{staticClass:"w-full xl:px-36 sm:px-8"},[e("div",{staticClass:"flex flex-row items-center py-4"},[s._m(0),e("div",{staticClass:"ml-auto"},[e("sa-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:s.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"items-center px-3 py-3 font-bold rounded",attrs:{type:"primary"},on:{click:s.save}},[s._v(" Guardar ")])],1)]),e("div",{staticClass:"flex flex-col space-y-6"},[e("el-form",{directives:[{name:"loading",rawName:"v-loading",value:s.loading,expression:"loading"}],ref:"myDataForm",attrs:{model:s.form,rules:s.rules}},[e("content-card",[e("div",{staticClass:"w-full flex"},[e("el-form-item",{staticClass:"w-1/3 mr-2",attrs:{prop:"name",autocomplete:"off"}},[e("strong",[s._v("ContraseÃ±a")]),e("el-input",{attrs:{type:s.showPassword?"text":"password",autocomplete:"off"},model:{value:s.form.password,callback:function(e){s.$set(s.form,"password",e)},expression:"form.password"}},[e("span",{staticClass:"el-input__icon cursor-pointer text-sm hover:cursor-pointer flex items-center",class:s.showPassword?"text-red-400 hover:text-red-400":"text-purple-500 hover:text-purple-400",attrs:{slot:"suffix"},on:{click:function(e){s.showPassword=!s.showPassword}},slot:"suffix"},[e("i",{class:s.showPassword?"text-xl bx bx-show text-red-500":"text-xl bx bx-hide"})])])],1)],1)])],1)],1)])])},r=[function(){var s=this,e=s._self._c;return e("h1",{staticClass:"text-lg font-bold inline-flex items-center"},[e("strong",[s._v("Â Seguridad")])])}],o=t("2ef0"),i=t.n(o),l=t("0517"),n=t("7459"),c={name:"Security",mixins:[l["a"]],components:{ContentCard:()=>Promise.resolve().then(t.bind(null,"3246"))},data(){return{form:{password:void 0},rules:{},loading:!1,errorMessage:void 0,showPassword:!1}},watch:{errorMessage:{deep:!0,handler:i.a.debounce((async function(){this.errorMessage&&(await this.$toastr.e(this.errorMessage),this.errorMessage=void 0)}),300)}},methods:{async save(){if(this.form.password){this.loading=!0;try{await n["a"].Security.update({password:this.form.password}),this.$toastr.s("Se actualizo con exito")}catch(s){this.errorMessage=this.getErrorMessage(s)}finally{this.loading=!1}}else this.errorMessage="Por favor ingresa una contraseÃ±a"}}},d=c,u=t("2877"),f=Object(u["a"])(d,a,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0ac03e.43e4308b.js.map