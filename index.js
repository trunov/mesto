!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n,r,o,i,u,c){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=u,this._handleDislikeCard=c,this._likes=e.likes,this._currentUserId=r,this._owner=e.owner,this._isLiked=e.likes.some((function(t){return t._id===r}))}var e,n,o;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.cloneNode(!0)}},{key:"getView",value:function(){var t=this;this._view=this._getTemplate(),this._view.querySelector(".cards__element-title").textContent=this._name,this._setEventListeners();var e=this._view.querySelector(".cards__element-img");return e.src=this._link,e.alt=this._name,this._owner._id!==this._currentUserId&&this._view.querySelector(".cards__element-remove").remove(),this._likes.forEach((function(e){e._id==t._currentUserId&&t._view.querySelector(".cards__element-button").classList.add("cards__element-button_active")})),this._cardButton=this._view.querySelector(".cards__element-button"),this._cardItem=this._view.querySelector(".cards__element"),this._counter=this._view.querySelector(".cards__element-like"),this._view.querySelector(".cards__element-like").textContent=this._likes.length,this._view}},{key:"removeCardElement",value:function(){this._cardItem.remove()}},{key:"setLikes",value:function(t){this._counter.textContent=t}},{key:"_renderLikeBtn",value:function(t){t?this._cardButton.classList.add("cards__element-button_active"):this._cardButton.classList.remove("cards__element-button_active")}},{key:"processLikes",value:function(t){this._isLiked=!this._isLiked,this.setLikes(t.likes.length),this._renderLikeBtn(this._isLiked)}},{key:"_handleLike",value:function(){this._isLiked?this._handleDislikeCard():this._handleLikeClick()}},{key:"_setEventListeners",value:function(){this._view.querySelector(".cards__element-remove").addEventListener("click",this._handleDeleteClick),this._view.querySelector(".cards__element-button").addEventListener("click",this._handleLike.bind(this)),this._view.querySelector(".cards__element-img").addEventListener("click",this._handleCardClick)}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._authorization=e.headers.authorization,this._contentType=e.headers["Content-type"]}var e,n,r;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addNewCard",value:function(t){var e=t.name,n=t.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e,link:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._contentType}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editProfile",value:function(t){var e=t.name,n=t.description;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({name:e,about:n})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"editAvatar",value:function(t){var e=t.link;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._contentType},body:JSON.stringify({avatar:"".concat(e)})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&i(e.prototype,n),r&&i(e,r),t}();function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popupSelector=e,this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var e,n,r;return e=t,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupSelector.querySelector(".popup__close-button").addEventListener("click",this.close),this._popupSelector.addEventListener("click",(function(e){e.target.classList.contains("popup")&&t.close()}))}}])&&c(e.prototype,n),r&&c(e,r),t}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(i,t);var e,n,r,o=h(i);function i(t){var e,n=t.popupSelector,r=t.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,n))._handleSubmit=r,e}return e=i,(n=[{key:"open",value:function(t){f(d(i.prototype),"open",this).call(this),this._card=t}},{key:"setEventListeners",value:function(){var t=this;this._popupSelector.querySelector(".popup__submit-button").addEventListener("click",(function(e){e.preventDefault(),t._handleSubmit(t._card)})),f(d(i.prototype),"setEventListeners",this).call(this)}}])&&l(e.prototype,n),r&&l(e,r),i}(a);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==v(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(i,t);var e,n,r,o=k(i);function i(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,t))._popupImg=e,r._popupTitle=n,r}return e=i,(n=[{key:"open",value:function(t,e){this._popupImg.src=t,this._popupImg.alt=e,this._popupTitle.textContent=e,b(w(i.prototype),"open",this).call(this)}}])&&m(e.prototype,n),r&&m(e,r),i}(a);function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e,n){return(O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=I(t);if(e){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}function q(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?T(t):e}function T(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(i,t);var e,n,r,o=P(i);function i(t){var e,n=t.popupSelector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this,n))._handleFormSubmit=r,e._formSubmit=e._formSubmit.bind(T(e)),e}return e=i,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=this._popupSelector.querySelectorAll(".popup__text"),this._values={},this._inputList.forEach((function(e){return t._values[e.name]=e.value})),this._values}},{key:"_formSubmit",value:function(t){t.preventDefault(),this._handleFormSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){this._popupForm=this._popupSelector.querySelector(".popup__form"),this._popupForm.addEventListener("submit",this._formSubmit),O(I(i.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){O(I(i.prototype),"close",this).call(this),this._popupForm.reset()}}])&&L(e.prototype,n),r&&L(e,r),i}(a);function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var B=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=r,this._renderer=o,this._container=n}var e,n,r;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._initialArray.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t,e){e?this._container.append(t):this._container.prepend(t)}}])&&R(e.prototype,n),r&&R(e,r),t}();function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e){var n=e.nameSelector,r=e.description,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n,this._description=r,this._avatar=o}var e,n,r;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent,avatar:this._avatar.style.backgroundImage}}},{key:"setUserInfo",value:function(t,e,n){this._name.textContent=t,this._description.textContent=e,this._avatar.style.backgroundImage="url(".concat(n,")")}}])&&z(e.prototype,n),r&&z(e,r),t}();function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var U=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._activeButtonClass=e.activeButtonClass,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formEl=n,this.enableValidation=this.enableValidation.bind(this)}var e,n,r;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this,e=Array.from(this._formEl.querySelectorAll(this._inputSelector)),n=this._formEl.querySelector(this._submitButtonSelector);this._toggleButtonState(e,n),e.forEach((function(r){r.addEventListener("input",(function(){t._checkInputValidity(t._formEl,r),t._toggleButtonState(e,n)}))}))}},{key:"_checkInputValidity",value:function(t,e){e.validity.valid?this._hideInputError(t,e):this._showInputError(t,e,e.validationMessage)}},{key:"_showInputError",value:function(t,e,n){t.querySelector("#".concat(e.name,"-error")).textContent=n}},{key:"_hideInputError",value:function(t,e){t.querySelector("#".concat(e.name,"-error")).textContent=""}},{key:"_toggleButtonState",value:function(t,e){this._hasInvalidInput(t)?(e.classList.add(this._inactiveButtonClass),e.classList.remove(this._activeButtonClass),e.disabled=!0):(e.classList.add(this._activeButtonClass),e.classList.remove(this._inactiveButtonClass),e.disabled=!1)}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}}])&&V(e.prototype,n),r&&V(e,r),t}(),A={formSelector:".popup__form",inputSelector:".popup__text",submitButtonSelector:".popup__submit",activeButtonClass:"popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__error",errorClass:"popup__error_visible"},F=document.querySelector(".popup-photo"),N=F.querySelector(".popup__img"),M=F.querySelector(".popup__title-photo"),J=document.querySelector(".cards__container"),G=document.querySelector(".profile"),H=G.querySelector(".profile__name"),K=G.querySelector(".profile__description"),Q=G.querySelector(".profile__avatar"),W=G.querySelector(".profile__edit-button"),X=G.querySelector(".profile__add-button"),Y=document.querySelector(".popup-edit"),Z=Y.querySelector(".popup__form"),$=Y.querySelector(".popup__submit"),tt=document.querySelector(".popup-avatar").querySelector(".popup__form"),et=Y.querySelector(".popup__text_type_name"),nt=Y.querySelector(".popup__text_type_description"),rt=document.querySelector(".popup-image"),ot=rt.querySelector(".popup__form"),it=rt.querySelector(".popup__submit"),ut=Array.from(document.querySelectorAll(".popup")),ct=document.querySelector(".popup-confirm"),at=ct.querySelector(".popup__submit-button"),st=document.querySelector(".popup-avatar"),lt=ut.find((function(t){return t.querySelector(".popup-image__form")})),ft=ut.find((function(t){return t.querySelector(".popup-edit__form")})),pt=ut.find((function(t){return t.querySelector(".popup-avatar__form")})),ht=new D({nameSelector:H,description:K,avatar:Q});function _t(t){return t?"Сохранение...":"Сохранить"}new U(A,Z).enableValidation(),new U(A,ot).enableValidation(),new U(A,tt).enableValidation();var dt,yt=new u({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"ae4fa4cf-0e81-45c0-b4da-16ce9ece8f68","Content-type":"application/json"}});function vt(t){var e=new o(t,"#card-template",dt,(function(){Et.open(t.link,t.name)}),(function(){e._id=t._id,bt.open(e)}),(function(){yt.addLike(t._id).then((function(t){e.processLikes(t)})).catch((function(t){return console.log("Error ".concat(t))}))}),(function(){yt.deleteLike(t._id).then((function(t){e.processLikes(t)})).catch((function(t){return console.log("Error ".concat(t))}))}));return e}Promise.all([yt.getUserInfo(),yt.getInitialCards()]).then((function(t){var e,n,r;e=t[0],ht.setUserInfo(e.name,e.about,e.avatar),dt=e._id,n=t[1],(r=new B({items:n,renderer:function(t){var e=vt(t).getView();r.addItem(e,!0)}},J)).renderItems()})).catch((function(t){console.log(t)}));var mt=new x({popupSelector:st,handleFormSubmit:function(t){var e=st.querySelector(".popup__submit-button");e.textContent=_t(!0),yt.editAvatar(t).then((function(t){console.log(t),ht.setUserInfo(t.name,t.about,t.avatar),e.textContent=_t(!1),mt.close()})).catch((function(t){return console.log("Error ".concat(t))}))}});mt.setEventListeners();var bt=new y({popupSelector:ct,handleSubmit:function(t){at.textContent="Удаление...",yt.deleteCard(t._id).then((function(){t.removeCardElement(),bt.close(),at.textContent="Да"})).catch((function(t){return console.log("Error ".concat(t))}))}});function St(t){var e=t.querySelector(".popup__submit");e.classList.add("popup__submit-button_disabled"),e.disabled=!0}bt.setEventListeners();var kt=new B({data:[]},J),gt=new x({popupSelector:Y,handleFormSubmit:function(t){$.textContent=_t(!0),yt.editProfile(t).then((function(t){ht.setUserInfo(t.name,t.about,t.avatar),$.textContent=_t(!1),gt.close()})).catch((function(t){return console.log("Error ".concat(t))}))}});//! WORK AREA
gt.setEventListeners();var wt=new x({popupSelector:rt,handleFormSubmit:function(t){var e={name:t.title,link:t.link};it.textContent=_t(!0),yt.addNewCard(e).then((function(t){var e=vt(t).getView();kt.addItem(e,!1),it.textContent=_t(!1),wt.close()})).catch((function(t){return console.log("Error ".concat(t))}))}});wt.setEventListeners();var Et=new E(F,N,M);Et.setEventListeners(),W.addEventListener("click",(function(){St(ft);var t=ht.getUserInfo();et.value=t.name,nt.value=t.description,gt.open()})),X.addEventListener("click",(function(){St(lt),wt.open()})),Q.addEventListener("click",(function(){St(pt),mt.open()}))}]);