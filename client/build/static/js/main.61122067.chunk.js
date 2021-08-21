(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(66),i=n.n(r),s=(n(89),n(18)),o=n(13),d=n(107),l=n(79),u=n(12),j=n(7);function b(e,t){return 1===t?e:e+"s"}function p(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var d=s.getAll();d.onsuccess=function(){c(d.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var h=n(80),O=n(38),m="UPDATE_PRODUCTS",f="ADD_TO_CART",x="ADD_MULTIPLE_TO_CART",g="REMOVE_FROM_CART",v="UPDATE_CART_QUANTITY",y="TOGGLE_CART",w="UPDATE_CATEGORIES",_="UPDATE_CURRENT_CATEGORY",k=function(e,t){switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{products:Object(O.a)(t.products)});case f:return Object(j.a)(Object(j.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(O.a)(e.cart),[t.product])});case x:return Object(j.a)(Object(j.a)({},e),{},{cart:[].concat(Object(O.a)(e.cart),Object(O.a)(t.products))});case v:return Object(j.a)(Object(j.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case g:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(j.a)(Object(j.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(j.a)(Object(j.a)({},e),{},{cartOpen:!1,cart:[]});case y:return Object(j.a)(Object(j.a)({},e),{},{cartOpen:!e.cartOpen});case w:return Object(j.a)(Object(j.a)({},e),{},{categories:Object(O.a)(t.categories)});case _:return Object(j.a)(Object(j.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var N=n(0),C=["value"],S=Object(c.createContext)(),T=S.Provider,E=function(e){e.value;var t,n=Object(h.a)(e,C),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(k,t)),r=Object(u.a)(a,2),i=r[0],s=r[1];return Object(N.jsx)(T,Object(j.a)({value:[i,s]},n))},A=function(){return Object(c.useContext)(S)};var $,I,D,P,Q,R=function(e){var t=A(),n=Object(u.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,o=e._id,d=e.price,l=e.quantity,h=c.cart;return Object(N.jsxs)("div",{className:"card px-1 py-1",children:[Object(N.jsxs)(s.b,{to:"/products/".concat(o),children:[Object(N.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(N.jsx)("p",{children:i})]}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{children:[l," ",b("item",l)," in stock"]}),Object(N.jsxs)("span",{children:["$",d]})]}),Object(N.jsx)("button",{onClick:function(){var t=h.find((function(e){return e._id===o}));t?(a({type:v,_id:o,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),p("cart","put",Object(j.a)(Object(j.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:f,product:Object(j.a)(Object(j.a)({},e),{},{purchaseQuantity:1})}),p("cart","put",Object(j.a)(Object(j.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},U=n(104),L=n(31),q=n(26),F=Object(q.a)($||($=Object(L.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),W=Object(q.a)(I||(I=Object(L.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),B=(Object(q.a)(D||(D=Object(L.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(q.a)(P||(P=Object(L.a)(["\n{\n  categories {\n    _id\n    name\n  }\n}\n"])))),G=Object(q.a)(Q||(Q=Object(L.a)(["\n{\n  user {\n    firstName\n    lastName\n    orders {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        image\n      }\n    }\n  }\n}\n"]))),Y=n.p+"static/media/spinner.689d9a07.gif";var M=function(){var e=A(),t=Object(u.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(U.a)(F),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:m,products:o.products}),o.products.forEach((function(e){p("products","put",e)}))):s||p("products","get").then((function(e){a({type:m,products:e})}))}),[o,s,a]),Object(N.jsxs)("div",{className:"my-2",children:[Object(N.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(N.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(N.jsx)(R,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(N.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(N.jsx)("img",{src:Y,alt:"loading"}):null]})};var H=function(){var e=A(),t=Object(u.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(U.a)(B),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:w,categories:o.categories}),o.categories.forEach((function(e){p("categories","put",e)}))):s||p("categories","get").then((function(e){a({type:w,categories:e})}))}),[o,s,a]),Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(N.jsx)("button",{onClick:function(){var t;t=e._id,a({type:_,currentCategory:t})},children:e.name},e._id)}))]})},J=n(25),z=n.n(J),V=n(35),K=n(70),X=n(106),Z=function(e){var t=e.item,n=A(),c=Object(u.a)(n,2)[1];return Object(N.jsxs)("div",{className:"flex-row",children:[Object(N.jsx)("div",{children:Object(N.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{children:[t.name,", $",t.price]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Qty:"}),Object(N.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:g,_id:t._id}),p("cart","delete",Object(j.a)({},t))):(c({type:v,_id:t._id,purchaseQuantity:parseInt(n)}),p("cart","put",Object(j.a)(Object(j.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(N.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:g,_id:e._id}),p("cart","delete",Object(j.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ee=n(71),te=n(72),ne=n(58),ce=n.n(ne),ae=new(function(){function e(){Object(ee.a)(this,e)}return Object(te.a)(e,[{key:"getProfile",value:function(){return ce()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ce()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),re=(n(98),Object(K.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ie=function(){var e=A(),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(X.a)(W),i=Object(u.a)(r,2),s=i[0],o=i[1].data;function d(){a({type:y})}return Object(c.useEffect)((function(){o&&re.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(V.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:t=e.sent,a({type:x,products:Object(O.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(N.jsxs)("div",{className:"cart",children:[Object(N.jsx)("div",{className:"close",onClick:d,children:"[close]"}),Object(N.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(N.jsxs)("div",{children:[n.cart.map((function(e){return Object(N.jsx)(Z,{item:e},e._id)})),Object(N.jsxs)("div",{className:"flex-row space-between",children:[Object(N.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),ae.loggedIn()?Object(N.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{products:e}})},children:"Checkout"}):Object(N.jsx)("span",{children:"(log in to check out)"})]})]}):Object(N.jsxs)("h3",{children:[Object(N.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(N.jsx)("div",{className:"cart-closed",onClick:d,children:Object(N.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},se=function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(H,{}),Object(N.jsx)(M,{}),Object(N.jsx)(ie,{})]})};var oe=function(){var e=A(),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(o.f)().id,i=Object(c.useState)({}),d=Object(u.a)(i,2),l=d[0],b=d[1],h=Object(U.a)(F),O=h.loading,x=h.data,y=n.products,w=n.cart;return Object(c.useEffect)((function(){y.length?b(y.find((function(e){return e._id===r}))):x?(a({type:m,products:x.products}),x.products.forEach((function(e){p("products","put",e)}))):O||p("products","get").then((function(e){a({type:m,products:e})}))}),[y,x,O,a,r]),Object(N.jsxs)("div",{children:[l&&w?Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(s.b,{to:"/",children:"\u2190 Back to Products"}),Object(N.jsx)("h2",{children:l.name}),Object(N.jsx)("p",{children:l.description}),Object(N.jsxs)("p",{children:[Object(N.jsx)("strong",{children:"Price:"}),"$",l.price," ",Object(N.jsx)("button",{onClick:function(){var e=w.find((function(e){return e._id===r}));e?(a({type:v,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),p("cart","put",Object(j.a)(Object(j.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:f,product:Object(j.a)(Object(j.a)({},l),{},{purchaseQuantity:1})}),p("cart","put",Object(j.a)(Object(j.a)({},l),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(N.jsx)("button",{disabled:!w.find((function(e){return e._id===l._id})),onClick:function(){a({type:g,_id:l._id}),p("cart","delete",Object(j.a)({},l))},children:"Remove from Cart"})]}),Object(N.jsx)("img",{src:"/images/".concat(l.image),alt:l.name})]}):null,O?Object(N.jsx)("img",{src:Y,alt:"loading"}):null,Object(N.jsx)(ie,{})]})};var de,le,ue,je=function(e){var t=e.children;return Object(N.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},be=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(je,{children:[Object(N.jsx)("h1",{children:"404 Page Not Found"}),Object(N.jsx)("h1",{children:Object(N.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},pe=n(42),he=n(108),Oe=Object(q.a)(de||(de=Object(L.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),me=Object(q.a)(le||(le=Object(L.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      } \n      }\n    }\n  }\n"]))),fe=Object(q.a)(ue||(ue=Object(L.a)(["\n  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var xe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(u.a)(t,2),a=n[0],r=n[1],i=Object(he.a)(Oe),o=Object(u.a)(i,2),d=o[0],l=o[1].error,b=function(){var e=Object(V.a)(z.a.mark((function e(t){var n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,ae.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,n=t.name,c=t.value;r(Object(j.a)(Object(j.a)({},a),{},Object(pe.a)({},n,c)))};return Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(s.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(N.jsx)("h2",{children:"Login"}),Object(N.jsxs)("form",{onSubmit:b,children:[Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(N.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(N.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})]}),l?Object(N.jsx)("div",{children:Object(N.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(N.jsx)("div",{className:"flex-row flex-end",children:Object(N.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ge=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(u.a)(t,2),a=n[0],r=n[1],i=Object(he.a)(fe),o=Object(u.a)(i,1)[0],d=function(){var e=Object(V.a)(z.a.mark((function e(t){var n,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,ae.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.target,n=t.name,c=t.value;r(Object(j.a)(Object(j.a)({},a),{},Object(pe.a)({},n,c)))};return Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(s.b,{to:"/login",children:"\u2190 Go to Login"}),Object(N.jsx)("h2",{children:"Signup"}),Object(N.jsxs)("form",{onSubmit:d,children:[Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(N.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:l})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(N.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:l})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(N.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:l})]}),Object(N.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(N.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(N.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:l})]}),Object(N.jsx)("div",{className:"flex-row flex-end",children:Object(N.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ve=function(){return Object(N.jsxs)("header",{className:"flex-row px-1",children:[Object(N.jsx)("h1",{children:Object(N.jsxs)(s.b,{to:"/",children:[Object(N.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(N.jsx)("nav",{children:ae.loggedIn()?Object(N.jsxs)("ul",{className:"flex-row",children:[Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)(s.b,{to:"/orderHistory",children:"Order History"})}),Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)("a",{href:"/",onClick:function(){return ae.logout()},children:"Logout"})})]}):Object(N.jsxs)("ul",{className:"flex-row",children:[Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)(s.b,{to:"/signup",children:"Signup"})}),Object(N.jsx)("li",{className:"mx-1",children:Object(N.jsx)(s.b,{to:"/login",children:"Login"})})]})})]})};var ye=function(){var e=Object(he.a)(me),t=Object(u.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(V.a)(z.a.mark((function e(){var n,c,a,r;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){p("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(N.jsx)("div",{children:Object(N.jsxs)(je,{children:[Object(N.jsx)("h1",{children:"Success!"}),Object(N.jsx)("h2",{children:"Thank you for your purchase!"}),Object(N.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var we=function(){var e,t=Object(U.a)(G).data;return t&&(e=t.user),Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"container my-1",children:[Object(N.jsx)(s.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(N.jsxs)("div",{children:[Object(N.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(N.jsxs)("div",{className:"my-2",children:[Object(N.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(N.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(N.jsxs)("div",{className:"card px-1 py-1",children:[Object(N.jsxs)(s.b,{to:"/products/".concat(n),children:[Object(N.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(N.jsx)("p",{children:a})]}),Object(N.jsx)("div",{children:Object(N.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},_e=new l.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var ke=function(){return Object(N.jsx)(d.a,{client:_e,children:Object(N.jsx)(s.a,{children:Object(N.jsx)("div",{children:Object(N.jsxs)(E,{children:[Object(N.jsx)(ve,{}),Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",component:se}),Object(N.jsx)(o.a,{exact:!0,path:"/login",component:xe}),Object(N.jsx)(o.a,{exact:!0,path:"/signup",component:ge}),Object(N.jsx)(o.a,{exact:!0,path:"/success",component:ye}),Object(N.jsx)(o.a,{exact:!0,path:"/orderHistory",component:we}),Object(N.jsx)(o.a,{exact:!0,path:"/products/:id",component:oe}),Object(N.jsx)(o.a,{component:be})]})]})})})})},Ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(ke,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ne?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ce(t,e)}))}}()},89:function(e,t,n){},98:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.61122067.chunk.js.map