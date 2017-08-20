webpackJsonp([14],{178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var e=n(20),o=n.n(e),i=n(214),a=n(455),r=n.n(a),c=n(212),l=n(457),p=n(438),s=n.n(p),u=n(210),d=n(211),f=(n.n(d),n(209)),h=(n.n(f),n(451)),m=(n.n(h),n(129));n.n(m);o.a.use(s.a),o.a.use(l.a),o.a.use(u.a),o.a.http.options.emulateJSON=!0,t.VueEvent=new o.a,new o.a({router:c.a,store:i.a,render:function(t){return t(r.a)}}).$mount("#app")}.call(e,n(47))},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={watch:{$route:"checkLogin"},created:function(){},methods:{checkLogin:function(){}}}},209:function(t,e,n){(function(t){t.ApiUrl={},t.ApiSignKey="vue-admin@#!",t.ApiUrl.baseUlr="https://admin.fastgoo.net",t.ApiUrl.authLogin="/admin.api/admin_base/authLogin",t.ApiUrl.register="/admin.api/admin_base/register",t.ApiUrl.login="/admin.api/admin_base/login",t.ApiUrl.authCeck="/admin.api/admin_base/authCheck",t.ApiUrl.updatePassword="/admin.api/admin_base/updatePassword"}).call(e,n(47))},210:function(t,e,n){"use strict";(function(t,o){var i=n(181),a=n.n(i),r=n(58),c=n.n(r);e.a={install:function(e){e.prototype.postData=function(e,n,i){console.log(e),this.isUrl(e)||(e=ApiUrl.baseUlr+e),console.log(e);var r=(new Date).getTime();r=Math.floor(r/1e3);var l=function(e){var n="",i=[];for(var a in e)i.push(a),"string"==typeof e[a]&&(e[a]=e[a].replace(/\s+/g,""));return i.sort(),t.each(i,function(o,i){var a=e[i];"object"==(void 0===a?"undefined":c()(a))?t.each(a,function(t,e){n+=i+"["+t+"]="+e+"&"}):n+=i+"="+a+"&"}),n+="appKey="+ApiSignKey+"&timestamp="+r,o(n).toUpperCase()}(n),p=JSON.parse(a()(n));p.sign=l,p.timestamp=r;var s=this;this.$http({method:"POST",url:e,body:p,headers:{Authorization:localStorage.getItem("token")}}).then(function(t){200==t.status?-401==t.data.code?VueEvent.$message({message:"用户信息已失效，即将跳转到登录页面",type:"error",onClose:function(){s.$router.push("/login")}}):i(t.data):VueEvent.$message.error("哎呀，服务器好像出错了")},function(t){VueEvent.$message.error("哎呀，服务器好像崩溃了")})},e.prototype.isUrl=function(t){if(""!=t){return!!/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?/.test(t)}},e.prototype.getAdminByToken=function(t){var e=this;this.postData(ApiUrl.authCeck,{},function(t){e.$store.state.adminInfo=t.data,localStorage.setItem("adminInfo",a()(t.data))})},e.prototype.loginOut=function(){localStorage.removeItem("token"),localStorage.removeItem("adminInfo"),this.$router.push("/login")},e.prototype.wsSend=function(t){var e={head:{token:localStorage.getItem("token")},body:t};websocket.send(a()(e))}}}}).call(e,n(453),n(182))},211:function(t,e,n){(function(t){t.websocket=new WebSocket("wss://www.fastgoo.net/wss"),websocket.connectCallback=function(){},websocket.closeCallback=function(){},websocket.onopen=function(t){console.log("连接websocket服务器成功:".evt.data),websocket.connectCallback(t.data)},websocket.onclose=function(t){websocket.closeCallback(t)},websocket.onmessage=function(t){websocket.messageCallback(JSON.parse(t.data))},websocket.onerror=function(t,e){console.log("Error occured: "+t.data)}}).call(e,n(47))},212:function(t,e,n){"use strict";var o=n(20),i=n.n(o),a=n(458);i.a.use(a.a),e.a=new a.a({routes:[{path:"/",redirect:"/login"},{path:"/readme",component:function(t){return n.e(4).then(function(){var e=[n(463)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",component:function(t){return n.e(9).then(function(){var e=[n(470)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/basetable",component:function(t){return n.e(11).then(function(){var e=[n(467)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/vuetable",component:function(t){return n.e(0).then(function(){var e=[n(473)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/baseform",component:function(t){return n.e(12).then(function(){var e=[n(466)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/vueeditor",component:function(t){return n.e(3).then(function(){var e=[n(472)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/markdown",component:function(t){return n.e(1).then(function(){var e=[n(469)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/upload",component:function(t){return n.e(2).then(function(){var e=[n(471)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/basecharts",component:function(t){return n.e(7).then(function(){var e=[n(465)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/drag",component:function(t){return n.e(10).then(function(){var e=[n(468)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/commontable",component:function(t){return n.e(5).then(function(){var e=[n(475)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/robotserver",component:function(t){return n.e(8).then(function(){var e=[n(474)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/login",component:function(t){return n.e(6).then(function(){var e=[n(464)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]})},213:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=[{icon:"el-icon-setting",index:"readme",title:"自述"},{icon:"el-icon-menu",index:"2",title:"表格",subs:[{index:"basetable",icon:"el-icon-setting",title:"基础表格"},{index:"vuetable",title:"Vue表格组件"}]},{icon:"el-icon-date",index:"3",title:"表单",subs:[{index:"baseform",icon:"el-icon-setting",title:"基本表单"},{index:"vueeditor",title:"编辑器"},{index:"markdown",title:"markdown"},{index:"upload",title:"文件上传"}]},{icon:"el-icon-star-on",index:"basecharts",title:"图表"},{icon:"el-icon-upload2",index:"drag",title:"拖拽"},{icon:"el-icon-upload2",index:"commontable",title:"测试表格"},{icon:"el-icon-upload2",index:"robotserver",title:"微信机器人"}]},214:function(t,e,n){"use strict";var o=n(20),i=n.n(o),a=n(184),r=n(213);i.a.use(a.a);var c={count:0,menuData:r.a,adminInfo:{}},l={},p={},s={};e.a=new a.a.Store({state:c,mutations:l,actions:p,getters:s})},430:function(t,e,n){e=t.exports=n(82)(void 0),e.i(n(432),""),e.i(n(431),""),e.push([t.i,"",""])},431:function(t,e,n){e=t.exports=n(82)(void 0),e.push([t.i,".header{background-color:#242f42}.login-wrap{background:#324157}.plugins-tips{background:#eef1f6}.el-upload--text em,.plugins-tips a{color:#20a0ff}.pure-button{background:#20a0ff}",""])},432:function(t,e,n){e=t.exports=n(82)(void 0),e.push([t.i,"*{margin:0;padding:0}#app,.wrapper,body,html{width:100%;height:100%;overflow:hidden}body{font-family:Helvetica Neue,Helvetica,microsoft yahei,arial,STHeiTi,sans-serif}a{text-decoration:none}.content{background:none repeat scroll 0 0 #fff;position:absolute;left:250px;right:0;top:70px;bottom:0;width:auto;padding:40px;box-sizing:border-box;overflow-y:scroll}.crumbs{margin-bottom:20px}.pagination{margin:20px 0;text-align:right}.plugins-tips{padding:20px 10px;margin-bottom:20px}.el-button+.el-tooltip{margin-left:10px}.el-table tr:hover{background:#f6faff}.mgb20{margin-bottom:20px}.move-enter-active,.move-leave-active{transition:opacity .5s}.move-enter,.move-leave{opacity:0}.form-box{width:600px}.form-box .line{text-align:center}.el-time-panel__content:after,.el-time-panel__content:before{margin-top:-7px}.ms-doc .el-checkbox__input.is-disabled+.el-checkbox__label{color:#333;cursor:pointer}.pure-button{width:150px;height:40px;line-height:40px;text-align:center;color:#fff;border-radius:3px}.g-core-image-corp-container .info-aside{height:45px}.el-upload--text{background-color:#fff;border:1px dashed #d9d9d9;border-radius:6px;box-sizing:border-box;width:360px;height:180px;cursor:pointer;position:relative;overflow:hidden}.el-upload--text .el-icon-upload{font-size:67px;color:#97a8be;margin:40px 0 16px;line-height:50px}.el-upload--text{color:#97a8be;font-size:14px;text-align:center}.el-upload--text em{font-style:normal}.ql-container{min-height:400px}.ql-snow .ql-tooltip{transform:translateX(117.5px) translateY(10px)!important}.editor-btn{margin-top:20px}",""])},451:function(t,e){},455:function(t,e,n){n(459);var o=n(180)(n(208),n(456),null,null);t.exports=o.exports},456:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},459:function(t,e,n){var o=n(430);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(179)("0ef47913",o,!0)},461:function(t,e){},462:function(t,e,n){n(129),t.exports=n(178)}},[462]);