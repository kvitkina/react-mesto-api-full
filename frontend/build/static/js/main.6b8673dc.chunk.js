(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo-mesto.c6f11019.svg"},22:function(e,t,a){e.exports=a.p+"static/media/success.e38b395c.svg"},23:function(e,t,a){e.exports=a.p+"static/media/fail.4072126c.svg"},26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),i=a(7),s=(a(31),a(24)),l=a(1),p=a(2),u=a(18),m=a.n(u);var _=function(e){var t=e.email,a=e.onSignOut;return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:m.a,className:"logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),o.a.createElement("div",{className:"header__section"},o.a.createElement(p.b,{exact:!0,path:"/"},o.a.createElement("p",{className:"header__email"},t),o.a.createElement(i.b,{to:"/sign-in",className:"header__button",onClick:a},"\u0412\u044b\u0439\u0442\u0438")),o.a.createElement(p.b,{path:"/sign-up"},o.a.createElement(i.b,{to:"/sign-in",className:"header__button"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(p.b,{path:"/sign-in"},o.a.createElement(i.b,{to:"/sign-up",className:"header__button"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))};var d=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("h4",{className:"footer__author"},"\xa9 2020 Mesto Russia"))},h=o.a.createContext();var f=function(e){var t=e.card,a=e.onCardClick,n=e.onCardDelete,r=e.onCardLike,c=e.onCardDislike,i=o.a.useContext(h),s=t.owner._id===i._id,l=t.likes.some((function(e){return e._id===i._id})),p="element__like ".concat(l&&"element__like_theme_black");return o.a.createElement("li",{className:"element"},o.a.createElement("img",{style:{backgroundImage:"url(".concat(t.link,")")},className:"element__image",alt:"",onClick:function(){a(t)}}),s&&o.a.createElement("button",{className:"element__trash",onClick:function(){n(t._id)}}),o.a.createElement("div",{className:"element__info"},o.a.createElement("h3",{className:"element__title"},t.name),o.a.createElement("div",{className:"element__like-container"},o.a.createElement("button",{className:p,onClick:l?function(){c(t)}:function(){r(t)}}),o.a.createElement("p",{className:"element__like-counter"},t.likes.length))))};var E=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,r=e.onCardClick,c=e.cards,i=e.onCardLike,s=e.onCardDislike,l=e.onCardDelete,p=o.a.useContext(h);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("button",{className:"profile__avatar",style:{backgroundImage:"url(".concat(p.avatar,")")},onClick:t}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},p.name),o.a.createElement("button",{className:"profile__edit-button",onClick:a}),o.a.createElement("p",{className:"profile__job"},p.about)),o.a.createElement("button",{className:"profile__add-button",onClick:n})),o.a.createElement("div",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},c.map((function(e){return o.a.createElement(f,{key:e._id,card:e,onCardClick:r,onCardDelete:l,onCardLike:i,onCardDislike:s})})))))};var g,v=function(e){var t=e.card,a=e.onClose,n=e.name;return o.a.createElement("section",{className:"popup popup_".concat(n," ").concat(t&&"popup_opened")},o.a.createElement("div",{className:"popup__container-place"},o.a.createElement("img",{src:t&&t.link,className:"popup__image",alt:t&&t.name}),o.a.createElement("p",{className:"popup__place"},t&&t.name),o.a.createElement("button",{className:"popup__close",onClick:a})))},b=a(20),N=a(21),k=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(b.a)(this,e),this.baseUrl=a,this.headers=n}return Object(N.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status)))}},{key:"getAllInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._handleOriginalResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._handleOriginalResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._handleOriginalResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._handleOriginalResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._handleOriginalResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleOriginalResponse)}}]),e}())({baseUrl:"https://api.kvitkina.students.nomoreparties.space/",headers:{Authorization:"Bearer ".concat(localStorage.getItem(g)),"Content-Type":"application/json"}});var C=function(e){var t=e.isOpen,a=e.children,n=e.onClose,r=e.name,c=e.title,i=e.submit,s=e.onSubmit;return o.a.createElement("section",{className:"popup popup_".concat(r," ").concat(t&&"popup_opened"," "),onClick:function(e){return e.target!==e.currentTarget&&n}},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close",onClick:n}),o.a.createElement("form",{className:"popup__form-container",name:r,onSubmit:s,noValidate:!0},o.a.createElement("h2",{className:"popup__title"},c),o.a.createElement("fieldset",{className:"popup__form"},a,o.a.createElement("input",{type:"submit",className:"popup__button",value:i,onClick:n})))))};var O=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState(""),c=Object(l.a)(r,2),i=c[0],s=c[1],p=o.a.useState(""),u=Object(l.a)(p,2),m=u[0],_=u[1],d=o.a.useContext(h);return o.a.useEffect((function(){s(d.name),_(d.about)}),[d]),o.a.createElement(C,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:m})}},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"text",id:"name",name:"name",className:"popup__name popup__input",placeholder:"\u0418\u043c\u044f",value:i||"",onChange:function(e){s(e.target.value)},required:!0,minLength:"2",maxLength:"40"}),o.a.createElement("span",{className:"popup__input-error",id:"name-error"})),o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"text",id:"job",name:"about",className:"popup__job popup__input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",value:m||"",onChange:function(e){_(e.target.value)},required:!0,minLength:"2",maxLength:"200"}),o.a.createElement("span",{className:"popup__input-error",id:"job-error"})))};var j=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(C,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"url",id:"link",name:"avatar",className:"popup__job popup__job_theme_place popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:r}),o.a.createElement("span",{className:"popup__input-error",id:"link-error"})))};var S=function(e){var t=e.onClose,a=e.isOpen,n=e.onAddPlace,r=o.a.useRef(),c=o.a.useRef();return o.a.createElement(C,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({name:r.current.value,link:c.current.value})}},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"text",id:"place",name:"name",className:"popup__name popup__name_theme_place popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",ref:r}),o.a.createElement("span",{className:"popup__input-error",id:"place-error"})),o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"url",id:"link",name:"link",className:"popup__job popup__job_theme_place popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:c}),o.a.createElement("span",{className:"popup__input-error",id:"link-error"})))};var y=function(e){var t=e.cardId,a=e.isOpen,n=e.onClose,r=e.onSubmit;return o.a.createElement(C,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",submit:"\u0414\u0430",isOpen:a,onClose:n,onSubmit:function(e){e.preventDefault(),r(t)}})};var w=function(e){var t=e.name,a=e.title,n=e.submit,r=e.onLogin,c=o.a.useState(""),i=Object(l.a)(c,2),s=i[0],p=i[1],u=o.a.useState(""),m=Object(l.a)(u,2),_=m[0],d=m[1];return o.a.createElement("section",{className:"popup popup_theme_sign"},o.a.createElement("div",{className:"popup__container popup__container_theme_sign"},o.a.createElement("form",{className:"popup__form-container",name:t,onSubmit:function(e){e.preventDefault(),r(s,_)},noValidate:!0},o.a.createElement("h2",{className:"popup__title popup__title_theme_sign"},a),o.a.createElement("fieldset",{className:"popup__form"},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"email",id:"email",name:"email",className:"popup__name popup__input popup__input_theme_sign",placeholder:"Email",value:s||"",onChange:function(e){p(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"email-error"})),o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"password",id:"password",name:"password",className:"popup__job popup__job_theme_sign popup__input popup__input_theme_sign",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:_||"",onChange:function(e){d(e.target.value)},required:!0,minLength:"4",maxLength:"12"}),o.a.createElement("span",{className:"popup__input-error",id:"password-error"})),o.a.createElement("input",{type:"submit",className:"popup__button popup__button_theme_sign",value:n})))))};var L=function(e){var t=e.name,a=e.title,n=e.submit,r=e.onRegister,c=o.a.useState(""),s=Object(l.a)(c,2),p=s[0],u=s[1],m=o.a.useState(""),_=Object(l.a)(m,2),d=_[0],h=_[1];return o.a.createElement("section",{className:"popup popup_theme_sign"},o.a.createElement("div",{className:"popup__container popup__container_theme_sign"},o.a.createElement("form",{className:"popup__form-container",name:t,onSubmit:function(e){e.preventDefault(),r(p,d)},noValidate:!0},o.a.createElement("h2",{className:"popup__title popup__title_theme_sign"},a),o.a.createElement("fieldset",{className:"popup__form"},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"email",id:"email",name:"email",className:"popup__name popup__input popup__input_theme_sign",placeholder:"Email",value:p||"",onChange:function(e){u(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__input-error",id:"email-error"})),o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"password",id:"password",name:"password",className:"popup__job popup__job_theme_sign popup__input popup__input_theme_sign",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:d||"",onChange:function(e){h(e.target.value)},required:!0,minLength:"4",maxLength:"12"}),o.a.createElement("span",{className:"popup__input-error",id:"password-error"})),o.a.createElement("input",{type:"submit",className:"popup__button popup__button_theme_register",value:n})))),o.a.createElement("div",{className:"popup__sign-in"},o.a.createElement("p",{className:"popup__paragraph"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",o.a.createElement(i.b,{to:"/sign-in",className:"popup__sign-in-link"},"\u0412\u043e\u0439\u0442\u0438"))))},U=a(25),I=function(e){var t=e.component,a=Object(U.a)(e,["component"]);return o.a.createElement(p.b,null,(function(){return a.loggedIn?o.a.createElement(t,a):o.a.createElement(p.a,{to:"./sign-in"})}))},x="https://api.kvitkina.students.nomoreparties.space/",A=a(22),P=a.n(A),D=a(23),T=a.n(D),R=function(e){var t=e.tooltipStatus,a=e.onClose,n=e.isOpen,r=e.message,c=e.errMessage;return o.a.createElement("section",{className:"popup ".concat(n&&"popup_opened"," "),onClick:function(e){return e.target!==e.currentTarget&&a}},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close",onClick:a}),o.a.createElement("img",{className:"popup__icon",src:t?P.a:T.a,alt:"Tooltip"}),o.a.createElement("h2",{className:"popup__title popup__title_theme_tooltip"},t?r:c)))},q=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(l.a)(r,2),i=c[0],u=c[1],m=o.a.useState(!1),f=Object(l.a)(m,2),g=f[0],b=f[1],N=o.a.useState(!1),C=Object(l.a)(N,2),U=C[0],A=C[1],P=o.a.useState(null),D=Object(l.a)(P,2),T=D[0],q=D[1],J=o.a.useState(null),M=Object(l.a)(J,2),z=M[0],B=M[1],V=o.a.useState({}),H=Object(l.a)(V,2),G=H[0],F=H[1],K=o.a.useState([]),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Y=o.a.useState(!1),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=o.a.useState(""),ae=Object(l.a)(te,2),ne=ae[0],oe=ae[1],re=o.a.useState(!1),ce=Object(l.a)(re,2),ie=ce[0],se=ce[1],le=o.a.useState(""),pe=Object(l.a)(le,2),ue=pe[0],me=pe[1],_e=Object(p.g)();o.a.useEffect((function(){de()}));var de=function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(x,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status)))}))}(e).then((function(e){ee(!0),oe(e.data.email),_e.push("/")})).catch((function(e){return 401===e.status?console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"):console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}))};o.a.useEffect((function(){k.getAllInfo().then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];X(a),F(n)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){var e=function(e){"Escape"===e.key&&fe()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var he=function(){se(!0)},fe=function(){n(!1),u(!1),b(!1),q(null),A(!1),se(!1)};return o.a.createElement(h.Provider,{value:G},o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__container"},o.a.createElement(_,{email:ne,onSignOut:function(){localStorage.removeItem("jwt"),ee(!1),_e.push("/signin")}}),o.a.createElement(p.d,null,o.a.createElement(I,{exact:!0,path:"/",loggedIn:$,onEditAvatar:function(){b(!0)},onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onCardClick:function(e){q(e)},onCardDelete:function(e){A(!0),B(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===G._id}));k.putLike(e._id,!t).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));X(a)})).catch((function(e){console.log(e)}))},onCardDislike:function(e){var t=e.likes.some((function(e){return e._id===G._id}));k.removeLike(e._id,!t).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));X(a)})).catch((function(e){console.log(e)}))},cards:W,component:E}),o.a.createElement(p.b,{exact:!0,path:"/"},o.a.createElement(d,null)),o.a.createElement(p.b,{path:"/sign-in"},o.a.createElement(w,{name:"login",title:"\u0412\u0445\u043e\u0434",submit:"\u0412\u043e\u0439\u0442\u0438",onLogin:function(e,t){(function(e,t){return fetch("".concat(x,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status)))})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.jwt),e}))})(e,t).then((function(t){localStorage.setItem("jwt",t.token),ee(!0),oe(e),_e.push("/")})).catch((function(e){return 400===e.status?console.log("\u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status?console.log("\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):console.log("error 500")}))}})),o.a.createElement(p.b,{path:"/sign-up"},o.a.createElement(L,{name:"register",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submit:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onRegister:function(e,t){(function(e,t){return fetch("".concat(x,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status)))}))})(e,t).then((function(e){he(),me(!0),_e.push("/sign-in")})).catch((function(e){400===e.status&&console.log("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439 "),he(),me(!1)}))}}))),o.a.createElement(O,{isOpen:a,onClose:fe,onUpdateUser:function(e){k.setUserInfo(e).then((function(e){F(e),fe()})).catch((function(e){console.log(e)}))}}),o.a.createElement(j,{isOpen:g,onClose:fe,onUpdateAvatar:function(e){k.editAvatar(e).then((function(e){F(e),fe()})).catch((function(e){console.log(e)}))}}),o.a.createElement(S,{isOpen:i,onClose:fe,onAddPlace:function(e){k.addCard(e).then((function(e){X([e].concat(Object(s.a)(W))),fe()})).catch((function(e){console.log(e)}))}}),o.a.createElement(y,{isOpen:U,onClose:fe,cardId:z,onSubmit:function(e){k.deleteCard(e).then((function(){var t=W.filter((function(t){return t._id!==e}));X(t)})).catch((function(e){console.log(e)}))}}),o.a.createElement(v,{name:"photo-zoom",card:T,onClose:fe}),o.a.createElement(R,{isOpen:ie,onClose:fe,tooltipStatus:ue,message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",errMessage:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(q,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.6b8673dc.chunk.js.map