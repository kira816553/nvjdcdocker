(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47e08947"],{"0a3a":function(t,e,n){"use strict";n("234c")},1393:function(t,e,n){"use strict";var c=n("23e7"),r=n("857a"),a=n("af03");c({target:"String",proto:!0,forced:a("big")},{big:function(){return r(this,"big","","")}})},"234c":function(t,e,n){},"857a":function(t,e,n){var c=n("1d80"),r=n("577e"),a=/"/g;t.exports=function(t,e,n,i){var u=r(c(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+r(i).replace(a,"&quot;")+'"'),s+">"+u+"</"+e+">"}},af03:function(t,e,n){var c=n("d039");t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},af19:function(t,e,n){"use strict";n.r(e);var c=n("6cd9"),r=(n("f3fc"),n("d50e"),n("eb93")),a=(n("51bb"),n("38e9")),i=(n("4af4"),n("b58f")),u=(n("47b1"),n("dacb")),s=(n("828f"),n("7a23")),o=Object(s["n"])("div",{class:"card-header"},[Object(s["n"])("span",null,"请完成安全验证")],-1),b={class:"card-body"},f={style:{width:"272px",height:"169px",margin:"auto"}},l={id:"captchaTip"},p=["src"],d=["src"],g=Object(s["p"])("确认"),h={class:"card-body"};function O(t,e,n,O,j,m){var w=u["a"],v=i["a"],x=a["a"],k=r["a"],y=c["a"];return Object(s["I"])(),Object(s["m"])(s["b"],null,[Object(s["hb"])(Object(s["q"])(v,{span:24,onTouchend:t.remove},{default:Object(s["gb"])((function(){return[Object(s["q"])(w,{span:24},{default:Object(s["gb"])((function(){return[Object(s["q"])(k,{style:{"max-width":"510px","justify-content":"center",margin:"auto"}},{header:Object(s["gb"])((function(){return[o]})),default:Object(s["gb"])((function(){return[Object(s["n"])("div",b,[Object(s["q"])(v,{class:"demo-autocomplete"},{default:Object(s["gb"])((function(){return[Object(s["q"])(w,null,{default:Object(s["gb"])((function(){return[Object(s["n"])("div",f,[Object(s["n"])("div",l,[Object(s["n"])("img",{id:"cpcImg",src:t.imgUrl,onClick:e[0]||(e[0]=function(){return O.captchaTipclick&&O.captchaTipclick.apply(O,arguments)})},null,8,p),(Object(s["I"])(!0),Object(s["m"])(s["b"],null,Object(s["P"])(t.pointlist,(function(t){return Object(s["I"])(),Object(s["m"])("div",{class:"radio",key:t.tipIndex,style:Object(s["z"])({left:t.left+"px",top:t.top+"px"})},Object(s["V"])(t.tipIndex),5)})),128))])]),Object(s["n"])("img",{id:"cpcTipImg",src:t.imgUrl2,width:"275"},null,8,d)]})),_:1})]})),_:1}),Object(s["q"])(x,{type:"primary",size:"medium",round:"",onClick:O.cap2click},{default:Object(s["gb"])((function(){return[g]})),_:1},8,["onClick"])])]})),_:1})]})),_:1})]})),_:1},8,["onTouchend"]),[[s["db"],t.ShowCaptcha2]]),Object(s["hb"])(Object(s["q"])(v,{span:24,onTouchend:t.remove},{default:Object(s["gb"])((function(){return[Object(s["q"])(w,{span:24},{default:Object(s["gb"])((function(){return[Object(s["q"])(k,{style:{"max-width":"510px","justify-content":"center",margin:"auto"}},{default:Object(s["gb"])((function(){return[Object(s["n"])("div",h,[Object(s["hb"])(Object(s["q"])(y,{icon:"error",title:"错误","sub-title":t.message},null,8,["sub-title"]),[[s["db"],!t.ShowOK]]),Object(s["hb"])(Object(s["q"])(y,{icon:"success",title:"成功","sub-title":t.message},null,8,["sub-title"]),[[s["db"],t.ShowOK]])])]})),_:1})]})),_:1})]})),_:1},8,["onTouchend"]),[[s["db"],!t.ShowCaptcha2]])],64)}var j=n("5530"),m=n("1da1"),w=(n("96cf"),n("1393"),n("c96a"),n("159b"),n("7864")),v=n("365c"),x={props:{id:{type:String,default:""}},setup:function(t){var e=Object(s["M"])({imgUrl:"",imgUrl2:"",ShowCaptcha2:!0,ShowOK:!1,message:"访问错误",pointlist:[]}),n=function(){var n=Object(m["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(""!=t.id){n.next=3;break}return e.ShowCaptcha2=!1,n.abrupt("return",!1);case 3:return n.next=5,Object(v["b"])(t.id);case 5:if(c=n.sent,e.ShowCaptcha2=c.success,c.success){n.next=10;break}return e.message=c.message,n.abrupt("return",!1);case 10:e.imgUrl="data:image/png;base64,"+c.data.big,e.imgUrl2="data:image/png;base64,"+c.data.small;case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(s["F"])(n);var c=function(){var n=Object(m["a"])(regeneratorRuntime.mark((function n(){var c,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(4==e.pointlist.length){n.next=2;break}return n.abrupt("return");case 2:return c=w["a"].service({lock:!0,text:"验证中请稍候.."}),r=[],e.pointlist.forEach((function(t){r.push({tipIndex:t.tipIndex,offsetX:t.offsetX,offsetY:t.offsetY})})),n.next=7,Object(v["g"])({Phone:t.id,point:r});case 7:if(a=n.sent,c.close(),!a.success){n.next=17;break}return w["b"].success("认证成功"),e.ShowCaptcha2=!1,e.message="请返回机器人输入验证码!",e.ShowOK=!0,n.abrupt("return",!0);case 17:if(e.pointlist=[],666!=a.data.status){n.next=24;break}w["b"].error("验证失败,请重试"),e.imgUrl="data:image/png;base64,"+a.data.big,e.imgUrl2="data:image/png;base64,"+a.data.small,n.next=27;break;case 24:return e.ShowCaptcha2=!1,w["b"].error(a.message),n.abrupt("return",!1);case 27:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),r=function(t){if(4!=e.pointlist.length){var n=e.pointlist.length+1,c=t.currentTarget.offsetLeft+t.offsetX-15,r=t.currentTarget.offsetTop+t.offsetY-15;console.log({tipIndex:n,left:c,top:r}),e.pointlist.push({tipIndex:n,left:c,top:r,offsetX:t.offsetX,offsetY:t.offsetY})}};return Object(j["a"])(Object(j["a"])({},Object(s["Y"])(e)),{},{getInfo:n,cap2click:c,captchaTipclick:r})}},k=(n("0a3a"),n("6b0d")),y=n.n(k);const S=y()(x,[["render",O]]);e["default"]=S},c96a:function(t,e,n){"use strict";var c=n("23e7"),r=n("857a"),a=n("af03");c({target:"String",proto:!0,forced:a("small")},{small:function(){return r(this,"small","","")}})},d50e:function(t,e,n){}}]);