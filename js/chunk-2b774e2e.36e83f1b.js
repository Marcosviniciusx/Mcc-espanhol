(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b774e2e","chunk-1cb29fe6"],{"0c23":function(t,e,s){"use strict";s("8845")},"84a9":function(t,e,s){t.exports=s.p+"img/mini-responsive-samii.cf623f75.png"},8845:function(t,e,s){},a0b4:function(t,e,s){},c987:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"fixed top-0 z-50 w-full h-14"},[e("the-header-app",{attrs:{onMenuClick:t.onMenuClick}})],1),e("div",{staticClass:"min-h-screen bg-gray-50 header-app-height-check"},[e("aside",{staticClass:"fixed h-screen border-r border-gray-200",class:t.collapsed?"w-16":"w-64"},[e("the-menu-app",{attrs:{collapsed:t.collapsed,disabled:t.disabled}})],1),e("main",{staticClass:"mt-14",class:t.collapsed?"ml-16":"ml-64"},[t._t("default")],2)])])},r=[],i=(s("14d9"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white border-b border-gray-200 shadow"},[e("div",{staticClass:"flex flex-wrap items-center px-4 py-2"},[e("div",{staticClass:"mr-4"},[e("sa-icon-button",{attrs:{"with-bg":"",iconClass:"text-xl bx bx-menu"},on:{click:function(e){return e.stopPropagation(),t.onMenuClick.apply(null,arguments)}}})],1),e("div",{staticClass:"flex flex-row flex-wrap items-center space-x-1 no-underline",on:{click:function(e){return t.$router.push({to:"/home"})}}},[t.logo?t._e():e("img",{staticClass:"m-1",attrs:{src:s("84a9"),alt:"",width:"20px"}}),t.logo?e("img",{staticClass:"m-1",attrs:{src:t.logo,alt:"",width:"20px"}}):t._e(),e("span",{staticClass:"font-bold text-gray-600 text-md font-headline"},[t._v(t._s(t.$store.state.business.name||"Fixme up"))])]),e("div",{staticClass:"flex items-center justify-center flex-grow"},[e("div",{staticClass:"w-4/5 sm:w-4/5 md:w-2/3 lg:w-3/5 xl:w-1/3"},[e("el-input",{staticClass:"border rounded-md",attrs:{placeholder:"Buscar en Ã“rdenes, Clientes"},on:{focus:function(e){t.search="",t.orders=[],t.clients=[]},input:t.querySearchAsync},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.orders.length>0||t.clients.length>0?e("div",{staticStyle:{position:"fixed","z-index":"2","background-color":"white",padding:"10px",width:"300px","border-color":"rgb(139, 92, 246)","border-width":"1px"}},[e("div",{staticStyle:{"max-height":"500px","overflow-y":"scroll"}},[e("div",[t._m(0),0===t.clients.length?e("div",{staticClass:"ml-3 pb-2 pt-2"},[t._v(" No hay resultados. ")]):t._e(),t._l(t.clients,(function(s){return e("div",{key:s.id,staticClass:"ml-3 pb-2 pt-2 cursor-pointer"},[e("a",{on:{click:function(e){return t.handleSelectSearch(s,"client")}}},[t._v(t._s(null===s||void 0===s?void 0:s.fullName))])])}))],2),e("div",[t._m(1),0===t.orders.length?e("div",{staticClass:"ml-3 pb-2 pt-2"},[t._v(" No hay resultados. ")]):t._e(),t._l(t.orders,(function(s){return e("div",{key:s.id,staticClass:"ml-3 pb-2 pt-2 cursor-pointer"},[e("a",{on:{click:function(e){return t.handleSelectSearch(s,"order")}}},[t._v(t._s(s.reference))])])}))],2)])]):t._e()],1)]),e("ul",{staticClass:"flex flex-row items-center flex-shrink ml-auto"},[e("quick-start-tip",{attrs:{title:"Acciones Rapidas",content:"Con este boton tendras acceso rapido a las acciones\n        mas comunes que puedes hacer en SAMII",placement:"bottom","bg-purple":1===t.$store.state.quickStart.step,"rounded-full":1===t.$store.state.quickStart.step,value:1===t.$store.state.quickStart.step},on:{onNextStep:t.handleNextStep}},[t.$store.state.account.membershipLimitReached?t._e():e("li",[e("el-dropdown",{attrs:{trigger:"click"}},[e("sa-icon-button",{attrs:{id:"quick-actions-menu",iconClass:"text-4xl bx bx-plus-circle "+(1===t.$store.state.quickStart.step?"text-white":"text-purple-500")}}),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("quick-start-tip",{attrs:{title:"Crear Orden",content:"Da click en la opcion 'Crear orden' para acceder de manera rapida\n                al formulario de las ordenes",placement:"left-start","bg-purple":2===t.$store.state.quickStart.step,value:2===t.$store.state.quickStart.step},on:{onNextStep:t.handleNextStep}},[e("el-dropdown-item",[e("el-button",{staticClass:"text-gray-700",class:{"hover:text-purple-500":0===t.$store.state.quickStart.step},attrs:{type:"text",disabled:0!==t.$store.state.quickStart.step},on:{click:function(e){return t.$router.push({name:"orders.create"})}}},[e("span",{staticClass:"flex items-center",class:{"text-white":2===t.$store.state.quickStart.step}},[e("i",{staticClass:"text-xl bx bx-task"}),t._v(" Crear Orden ")])])],1)],1),e("el-dropdown-item",[e("el-button",{staticClass:"text-gray-700 hover:text-purple-500",attrs:{type:"text",disabled:0!==t.$store.state.quickStart.step},on:{click:function(e){return t.$router.push({name:"products.create"})}}},[e("span",{staticClass:"flex items-center"},[e("i",{staticClass:"text-xl bx bxs-package"}),t._v(" Agregar Producto ")])])],1),e("el-dropdown-item",[e("el-button",{staticClass:"text-gray-700 hover:text-purple-500",attrs:{type:"text",disabled:0!==t.$store.state.quickStart.step},on:{click:function(e){return t.$router.push({name:"clients.create"})}}},[e("span",{staticClass:"flex items-center"},[e("i",{staticClass:"text-xl bx bx-user"}),t._v(" Crear Cliente ")])])],1),e("el-dropdown-item",[e("el-button",{staticClass:"text-gray-700 hover:text-purple-500",attrs:{type:"text",disabled:0!==t.$store.state.quickStart.step},on:{click:function(e){return t.$router.push({name:"suppliers.create"})}}},[e("span",{staticClass:"flex items-center"},[e("i",{staticClass:"text-xl bx bxs-truck"}),t._v(" Crear Proveedor ")])])],1)],1)],1)],1)]),t.$store.state.account.membershipLimitReached?t._e():e("li",{staticClass:"flex items-center"},[e("el-popover",{attrs:{placement:"bottom",width:"500","popper-class":"notifications-popper"}},[e("notifications-mini-list"),e("el-button",{staticClass:"w-full p-0 text-gray-500 cursor-pointer hover:bg-gray-200 rounded-md",attrs:{slot:"reference",type:"text"},slot:"reference"},[e("span",{staticClass:"flex items-center p-2 space-x-2 relative"},[e("i",{staticClass:"text-xl bx bx-bell"}),t.hasNotifications?e("span",{staticClass:"font-semibold absolute top-1 right-1"},[e("i",{staticClass:"text-xs text-red-400 bx bxs-circle"})]):t._e()])])],1)],1),e("li",[e("el-dropdown",{attrs:{trigger:"click"}},[e("div",{staticClass:"p-2 px-3 text-gray-700 rounded el-dropdown-link hover:bg-gray-200"},[e("span",{staticClass:"font-bold"},[t._v(" "+t._s(t.fullname)+" "),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})])]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[1!==t.$store.state.account.accountType?e("el-dropdown-item",[e("el-button",{staticClass:"text-gray-700 hover:text-purple-500",attrs:{type:"text"},on:{click:function(e){return t.navigate("my-data")}}},[e("span",{staticClass:"flex items-center"},[e("i",{staticClass:"text-xl bx bxs-user-circle"}),t._v(" Configurar mi cuenta ")])])],1):t._e(),1===t.$store.state.account.accountType?e("el-dropdown-item",[e("el-button",{staticClass:"text-gray-700 hover:text-purple-500",attrs:{type:"text"},on:{click:function(e){return t.navigate("my-business")}}},[e("span",{staticClass:"flex items-center"},[e("i",{staticClass:"text-xl bx bxs-cog"}),t._v(" Administrar mi negocio ")])])],1):t._e(),e("el-dropdown-item",{attrs:{divided:""}},[e("el-button",{staticClass:"text-gray-700 hover:text-purple-500",attrs:{type:"text"},on:{click:function(e){return t.logout()}}},[e("span",{staticClass:"flex items-center"},[e("i",{staticClass:"text-xl bx bx-log-out-circle"}),t._v(" Cerrar sesiÃ³n ")])])],1)],1)],1)],1)],1)])])}),l=[function(){var t=this,e=t._self._c;return e("h3",[e("strong",[t._v("Clientes")])])},function(){var t=this,e=t._self._c;return e("h3",[e("strong",[t._v("Ordenes")])])}],n=s("2751"),o=s("7459"),c=s("cfd9"),u=s("7ab9"),d=s("4cf1"),p={name:"TheHeaderApp",props:{onMenuClick:Function},components:{NotificationsMiniList:()=>s.e("chunk-2d0b64cc").then(s.bind(null,"1d25"))},data(){return{orders:[],clients:[],search:"",timeout:null}},computed:{email(){return this.$store.state.account.email},fullname(){return this.$store.state.account.fullname},businessName(){return this.$store.state.account.businessName},logo(){return u["a"].logo()},hasNotifications(){return!!this.$store.state.notifications.entities.filter(t=>!t.read).length}},methods:{logout(){n["a"].logout(),this.$router.push({name:"landing.index"})},navigate(t){const e=this.$store.state.account.membershipLimitReached?"my-membership":t;this.$router.push({name:"admin.index",params:{slot:e}})},blurSearch(){this.search="",this.clients=[],this.orders=[]},async querySearchAsync(t){if(t.length>2){const e=await o["a"].GlabalSearch.search(t);this.clients=e.clients,this.orders=e.orders}t.length<=2&&(this.clients=[],this.orders=[])},createFilter(t){return e=>0===e.value.toLowerCase().indexOf(t.toLowerCase())},handleSelectSearch(t,e){let s="";"order"===e&&(s=this.$router.resolve({name:"orders.read",params:{id:t.id}})),"client"===e&&(s=this.$router.resolve({name:"orders.index-filter",params:{clientid:t.id,client:t.fullName}})),this.blurSearch(),window.open(s.href,"_blank")},async handleNextStep(){const t=this.$store.state.quickStart.step;if(await this.$store.dispatch(d["b"],{step:t+1}),1===t){const t=document.getElementById("quick-actions-menu");t.click()}if(2===t){const t=await c["a"].getAll({});if(!t.length)return void this.$toastr.e("No existen ordenes");await this.$router.push({name:"orders.read",params:{id:t[0].id,lockScreen:!0,lockScroll:!0}})}}}},x=p,h=(s("d31e"),s("2877")),b=Object(h["a"])(x,i,l,!1,null,null,null),m=b.exports,f=function(){var t=this,e=t._self._c;return e("nav",{},[e("div",{staticClass:"flex flex-col w-full text-gray-500"},[e("div",[e("ul",{staticClass:"flex flex-col flex-grow py-6 space-y-1",class:{disabled:t.disabled}},[e("li",{staticClass:"flex-grow border-purple-500 cursor-pointer hover:bg-gray-100",class:{"border-l-4 bg-gray-100 border-purple-500 text-purple-500":t.isCurrentRoute("/home"),disabled:t.disabled},attrs:{id:"home"}},[e("a",{on:{click:function(e){return t.navigate("/home")}}},[e("span",{staticClass:"flex items-center p-2 space-x-2",class:t.collapsed?"justify-center":""},[e("i",{staticClass:"text-xl bx bxs-dashboard"}),t.collapsed?t._e():e("span",{staticClass:"font-semibold"},[t._v("Inicio")])])])]),t.collapsed?t._e():e("li",{attrs:{id:"sub-title"}},[e("span",{staticClass:"flex px-4 my-2 mt-4 text-sm font-bold text-gray-400 uppercase"},[t._v("Mi taller")])]),t._l(t.menu,(function(s){return e("li",{key:s.routePath,staticClass:"flex-grow border-purple-500 hover:bg-gray-100",class:{"border-l-4 bg-gray-100 border-purple-500":t.isCurrentRoute(s.routePath),disabled:t.disabled}},[e("a",{class:{disabled:t.disabled},on:{click:function(e){return t.navigate(s.routePath)}}},[e("span",{staticClass:"flex items-center p-2 space-x-2",class:t.collapsed?"justify-center":""},[e("i",{staticClass:"text-xl",class:s.iconClass}),t.collapsed?t._e():e("span",{staticClass:"font-semibold"},[t._v(t._s(s.label))])])])])})),t.collapsed&&1===t.$store.state.account.accountType?e("li",{staticClass:"flex-grow border-purple-500 cursor-pointer hover:bg-gray-100 hover:text-purple-500 fixed w-16 bottom-4",class:{disabled:t.disabled}},[t._m(0)]):t._e()],2)]),t.collapsed||1!==t.$store.state.account.accountType?t._e():e("div",{staticClass:"fixed w-64 bottom-4"},[e("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(e){return t.navigate({name:"admin.index",params:{slot:"users-and-permissions"}})}}},[e("span",{staticClass:"w-full flex items-center p-2 space-x-2 hover:bg-gray-100 hover:text-purple-500",class:{"justify-center":t.collapsed,disabled:t.disabled}},[e("i",{staticClass:"text-xl bx bx-mail-send"}),e("span",{staticClass:"font-bold",attrs:{id:"team-invite"}},[t._v("Invitar a mi equipo")])])])])])])},C=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"flex items-center p-2 space-x-2 justify-center"},[e("i",{staticClass:"text-xl bx bx-mail-send"})])}];const v={orders:{label:"Ã“rdenes",routePath:"/orders",iconClass:"bx bx-task"},products:{label:"Inventario",routePath:"/products",iconClass:"bx bxs-package"},clients:{label:"Clientes",routePath:"/clients",iconClass:"bx bx-user"},suppliers:{label:"Proveedores",routePath:"/suppliers",iconClass:"bx bxs-truck"},services:{label:"Servicios",routePath:"/services",iconClass:"bx bx-wrench"},statistics:{label:"EstadÃ­sticas",routePath:"/stats",iconClass:"bx bx-stats"},courses:{label:"Tutoriales",routePath:"/courses",iconClass:"bx bx-play"}};var g={name:"TheMenuApp",props:{collapsed:Boolean,disabled:Boolean},data(){const{canViewStatistics:t}=this.$store.state.account,e=[v.orders,v.products,v.clients,v.suppliers,v.services];return t&&e.push(v.statistics),e.push(v.courses),{menu:e}},methods:{isCurrentRoute(t){return this.$router.currentRoute.path.includes(t)},navigate(t){this.disabled||this.$router.push(t)}}},w=g,y=(s("0c23"),Object(h["a"])(w,f,C,!1,null,"4574b1b3",null)),k=y.exports,_=s("8266"),$={mixins:[_["a"]],components:{TheHeaderApp:m,TheMenuApp:k},created(){window.addEventListener("resize",this.resize),this.resize()},destroyed(){window.removeEventListener("resize",this.resize)},data(){return{collapsed:!1}},computed:{disabled(){return this.$store.state.account.membershipLimitReached}},methods:{resize(){const t=this.getPercentageWidth();this.collapsed="90%"===t},onMenuClick(){this.collapsed=!this.collapsed}}},S=$,q=(s("ec44"),Object(h["a"])(S,a,r,!1,null,"2228bb91",null));e["default"]=q.exports},d31e:function(t,e,s){"use strict";s("a0b4")},ec44:function(t,e,s){"use strict";s("ec8b")},ec8b:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2b774e2e.36e83f1b.js.map