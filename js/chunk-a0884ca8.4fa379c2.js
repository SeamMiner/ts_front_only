(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0884ca8"],{"0625":function(t,e,s){t.exports=s.p+"img/success.b2ce841e.png"},"07af":function(t,e,s){t.exports=s.p+"img/education.6ca34037.svg"},"17cc":function(t,e,s){t.exports=s.p+"img/mailbox.330eeb62.png"},2076:function(t,e,s){},"6c6f":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"primaryButton",class:{disabled:t.disabled},attrs:{type:t.type}},[t._t("default")],2)},i=[],n={name:"PrimaryButton",props:{disabled:{type:Boolean,default:!1},type:{type:String,default:"button"}}},l=n,r=(s("a098"),s("2877")),o=Object(r["a"])(l,a,i,!1,null,"cc4c0d6c",null);e["a"]=o.exports},"859a":function(t,e,s){"use strict";s("ded0")},a098:function(t,e,s){"use strict";s("2076")},b4f8:function(t,e,s){t.exports=s.p+"img/lock.769d25c5.png"},cb38:function(t,e,s){t.exports=s.p+"img/warning.85b996c2.svg"},ded0:function(t,e,s){},f9ea:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"settingsPage"}},[a("MainHeader",{ref:"header"}),a("b-container",{staticClass:"settingsBlock"},[a("b-row",[a("b-col",{staticClass:"d-flex justify-content-center align-items-center flex-column",attrs:{cols:"12"}},[a("form",{staticClass:"form-wrapper position-relative",on:{submit:function(e){return e.preventDefault(),t.$router.push("/profile")}}},[a("h1",[t._v("Настройки")]),a("p",{staticClass:"subtitle"},[t._v("Личные данные")]),a("div",{staticClass:"nameEmailBlock mb-md-3 flex-column flex-md-row"},[a("div",{staticClass:"fieldWrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"inputField",attrs:{type:"text",id:"nameInput",placeholder:"Саша",maxlength:"254"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("label",{staticClass:"labelInput",attrs:{for:"nameInput"}},[t._v("Имя")]),a("img",{staticClass:"imgInput user-select-none",attrs:{draggable:"false",src:s("07af"),alt:"Education icon"}})]),a("div",{staticClass:"fieldWrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"inputField",attrs:{disabled:"",type:"email",id:"emailInput",placeholder:"sasha@gmail.com",maxlength:"254"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{staticClass:"labelInput disabledLabel",attrs:{for:"emailInput"}},[t._v("Email")]),a("img",{staticClass:"imgInput disabledImg user-select-none",attrs:{draggable:"false",src:s("17cc"),alt:"Mailbox icon"}})])]),a("div",{staticClass:"passwordBlock special-mb flex-column flex-md-row"},[a("div",{staticClass:"fieldWrapper"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"bigInputField",class:{disabledInput:t.registeredWithGoogle},attrs:{disabled:t.registeredWithGoogle,type:"password",id:"passwordInput",placeholder:"•••••••",maxlength:"254"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{staticClass:"labelInput",class:{disabledLabel:t.registeredWithGoogle},attrs:{for:"passwordInput"}},[t._v("Новый пароль")]),a("img",{staticClass:"imgBigInput user-select-none",class:{disabledImg:t.registeredWithGoogle},attrs:{draggable:"false",src:s("b4f8"),alt:"Lock icon"}})]),a("PrimaryButton",{attrs:{type:"submit"}},[t._v(" Сохранить ")])],1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.clientError&&!t.successUpdating?a("div",{key:"errorHint",staticClass:"errorHintBlock position-absolute mb-4"},[a("img",{staticClass:"errorHintImage user-select-none",attrs:{src:s("cb38"),alt:"Warning icon"}}),a("p",{staticClass:"errorHintDescription"},[t._v(t._s(t.clientError))])]):t._e(),t.successUpdating?a("div",{key:"successHint",staticClass:"successHintBlock position-absolute mb-4"},[a("img",{staticClass:"successHintImage user-select-none",attrs:{src:s("0625"),alt:"Success icon"}}),a("p",{staticClass:"successHintDescription"},[t._v("Настройки успешно сохранены")])]):t._e()])],1)])],1)],1)],1)},i=[],n=(s("b0c0"),s("dc2a")),l=s("6c6f"),r={name:"Settings",components:{MainHeader:n["default"],PrimaryButton:l["a"]},data:function(){return{clientError:null,name:"",email:"",password:"",successUpdating:!1,registeredWithGoogle:!1}},mounted:function(){this.$emit("end-loading")},methods:{updateUserInfoStorage:function(){var t=this.$root.$children[0].$data.userInfo;t&&(this.name=t.name,this.email=t.email,this.registeredWithGoogle=t.registeredWithGoogle,this.$emit("end-loading"))}}},o=r,c=(s("859a"),s("2877")),d=Object(c["a"])(o,a,i,!1,null,"603d34be",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-a0884ca8.4fa379c2.js.map