(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{612:function(t,e,o){},614:function(t,e,o){"use strict";var n=o(612);o.n(n).a},618:function(t,e,o){"use strict";var n={methods:{socialLogin:function(t){window.location.href="".concat("https://toolicat.dexploitdm.ru/api/","auth/login/").concat(t)}}},r=(o(614),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"social-login"},[o("button",{staticClass:"social-login-btn facebook",on:{click:function(e){return t.socialLogin("facebook")}}},[o("i",{staticClass:"fab fa-facebook"})]),t._v(" "),o("button",{staticClass:"social-login-btn twitter",on:{click:function(e){return t.socialLogin("twitter")}}},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("button",{staticClass:"social-login-btn google",on:{click:function(e){return t.socialLogin("google")}}},[o("i",{staticClass:"fab fa-google"})])])}),[],!1,null,"c99e4cb4",null);e.a=component.exports},638:function(t,e,o){"use strict";o.r(e);o(33);var n,r=o(10),l={middleware:"guest",components:{SocialLogin:o(618).a},data:function(){return{form:{name:"",email:"",password:""},error:this.$route.query.error}},methods:{register:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.post("/auth/register",this.form);case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return");case 8:this.$auth.login({data:this.form}),this.$router.push({name:"index"});case 10:case"end":return t.stop()}}),t,this,[[0,5]])}))),function(){return n.apply(this,arguments)})}},c=o(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page content"},[t._m(0),t._v(" "),o("div",{staticClass:"page-box"},[o("div",{staticClass:"page-box-layout"},[o("h2",{staticClass:"title-h2"},[t._v("Зарегистрироваться с помощью")]),t._v(" "),o("div",{staticClass:"social-box"},[t.error?o("div",{staticClass:"alert alert-danger mb-2",attrs:{role:"alert"}},[t._v("\n                    Ваш токен оказался недействительным. Попробуйте снова.\n                ")]):t._e(),t._v(" "),o("social-login"),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"social-box-other"},[t._v("\n                    Зарегистрироваться с помощью электронной почты\n                ")])],1),t._v(" "),o("form",{staticClass:"form-auth",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Ваше имя")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"t-input",class:{"is-invalid":t.errors.name},attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),t.errors.name?o("div",{staticClass:"invalid-feedback"},[t._v("\n                        "+t._s(t.errors.name[0])+"\n                    ")]):t._e()]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Email адрес")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"t-input",class:{"is-invalid":t.errors.email},attrs:{type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.errors.email?o("div",{staticClass:"invalid-feedback"},[t._v("\n                        "+t._s(t.errors.email[0])+"\n                    ")]):t._e()]),t._v(" "),o("div",{staticClass:"t-control box-control"},[o("span",{staticClass:"t-label"},[t._v("Пароль")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"t-input",class:{"is-invalid":t.errors.password},attrs:{type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),t.errors.password?o("div",{staticClass:"invalid-feedback"},[t._v("\n                        "+t._s(t.errors.password[0])+"\n                    ")]):t._e()]),t._v(" "),o("div",{staticClass:"t-control control-flex  box-control"},[o("div",{staticClass:"form-auth-link"},[t._v("\n                        У вас уже есть аккаунт?\n                        "),o("nuxt-link",{staticClass:"link-auth",attrs:{to:"/auth/login"}},[t._v("\n                            Войти\n                        ")])],1),t._v(" "),o("input",{staticClass:"t-button blue",attrs:{type:"submit",value:"Зарегистрация"}})])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-box"},[e("h1",{staticClass:"title-h1"},[this._v("Регистрация")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"social-box-cube"},[e("div",{staticClass:"social-box-line"}),this._v(" "),e("div",{staticClass:"social-box-text"},[this._v("или")]),this._v(" "),e("div",{staticClass:"social-box-line"})])}],!1,null,null,null);e.default=component.exports}}]);