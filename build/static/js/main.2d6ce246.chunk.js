(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},63:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(17),o=a.n(s),r=(a(52),a(15)),i=(a.p,a(53),a(54),a(93)),l=a(22),u=l.a.initializeApp({apiKey:"AIzaSyA_pbAXtoVL8_xzNDJBgM_UMFe0EvWL5pQ",authDomain:"instagram-clone-b289f.firebaseapp.com",databaseURL:"https://instagram-clone-b289f-default-rtdb.firebaseio.com",projectId:"instagram-clone-b289f",storageBucket:"instagram-clone-b289f.appspot.com",messagingSenderId:"719854682378",appId:"1:719854682378:web:53d72e5420b04bcb173af3",measurementId:"G-X8Y3DNK56F"}).firestore(),p=l.a.auth(),d=l.a.storage(),j=a(5);var m=function(e){var t=e.postId,a=e.user,c=e.username,s=e.caption,o=e.imageUrl,p=Object(n.useState)([]),d=Object(r.a)(p,2),m=d[0],b=d[1],g=Object(n.useState)(""),f=Object(r.a)(g,2),h=f[0],O=f[1];return Object(n.useEffect)((function(){var e;return t&&(e=u.collection("posts").doc(t).collection("comments").orderBy("timestamp","desc").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))),function(){e()}}),[t]),Object(j.jsxs)("div",{className:"post",children:[Object(j.jsxs)("div",{className:"post__header",children:[Object(j.jsx)(i.a,{className:"post__avatar",alt:"Aryama",src:"https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg"}),Object(j.jsx)("h3",{children:c})]}),Object(j.jsx)("img",{className:"post__image",src:o,alt:""}),Object(j.jsxs)("h4",{className:"post__text",children:[" ",Object(j.jsxs)("strong",{children:[c," "]})," ",s]}),Object(j.jsx)("div",{className:"post__comments",children:m.map((function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:e.username})," ",e.text]})}))}),a&&Object(j.jsxs)("form",{className:"post__CommentBox",children:[Object(j.jsx)("input",{className:"post__input",type:"text",placeholder:"Add a comment...",value:h,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{className:"post__button",type:"submit",disabled:!h,onClick:function(e){e.preventDefault(),u.collection("posts").doc(t).collection("comments").add({text:h,username:a.displayName,timestamp:l.a.firestore.FieldValue.serverTimestamp()}),O("")},children:"Post"})]})]})},b=a(92),g=a(91),f=a(89),h=a(90);a(63);var O=function(e){var t=e.username,a=Object(n.useState)(null),c=Object(r.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)(0),p=Object(r.a)(i,2),m=p[0],b=p[1],f=Object(n.useState)(""),h=Object(r.a)(f,2),O=h[0],x=h[1];return Object(j.jsxs)("div",{className:"imageUpload",children:[Object(j.jsx)("progress",{className:"imageUpload__progress",value:m,max:"100"}),Object(j.jsx)("input",{type:"text",placeholder:"Enter a caption..",onChange:function(e){return x(e.target.value)},value:O}),Object(j.jsx)("input",{type:"file",onChange:function(e){e.target.files[0]&&o(e.target.files[0])}}),Object(j.jsx)(g.a,{onClick:function(){d.ref("images/".concat(s.name)).put(s).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);b(t)}),(function(e){console.log(e)}),(function(){d.ref("images").child(s.name).getDownloadURL().then((function(e){u.collection("posts").add({timestamp:l.a.firestore.FieldValue.serverTimestamp(),caption:O,imageUrl:e,username:t}),b(0),x(""),o(null)}))}))},children:"Upload"})]})};a(64);function x(){return Math.round(20*Math.random())-10}function v(){var e=50+x(),t=50+x();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var _=Object(f.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var y=function(){var e=_(),t=Object(n.useState)(v),a=Object(r.a)(t,1)[0],c=Object(n.useState)([]),s=Object(r.a)(c,2),o=s[0],i=s[1],l=Object(n.useState)(!1),d=Object(r.a)(l,2),f=d[0],x=d[1],y=Object(n.useState)(!1),N=Object(r.a)(y,2),w=N[0],S=N[1],C=Object(n.useState)(""),I=Object(r.a)(C,2),k=I[0],U=I[1],A=Object(n.useState)(""),B=Object(r.a)(A,2),D=B[0],E=B[1],F=Object(n.useState)(""),L=Object(r.a)(F,2),M=L[0],P=L[1],T=Object(n.useState)(null),z=Object(r.a)(T,2),J=z[0],V=z[1];return Object(n.useEffect)((function(){var e=p.onAuthStateChanged((function(e){e?(console.log(e),V(e)):V(null)}));return function(){e()}}),[J,k]),Object(n.useEffect)((function(){u.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){i(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h.a,{open:f,onClose:function(){return x(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__signup",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(j.jsx)(b.a,{placeholder:"username",type:"username",value:k,onChange:function(e){return U(e.target.value)}}),Object(j.jsx)(b.a,{placeholder:"email",type:"text",value:D,onChange:function(e){return E(e.target.value)}}),Object(j.jsx)(b.a,{placeholder:"password",type:"password",value:M,onChange:function(e){return P(e.target.value)}}),Object(j.jsx)(g.a,{type:"submit",onClick:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(D,M).then((function(e){return e.user.updateProfile({displayName:k})})).catch((function(e){return alert(e.message)})),x(!1)},children:" Sign Up"})]})})}),Object(j.jsx)(h.a,{open:w,onClose:function(){return S(!1)},children:Object(j.jsx)("div",{style:a,className:e.paper,children:Object(j.jsxs)("form",{className:"app__signup",children:[Object(j.jsx)("center",{children:Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""})}),Object(j.jsx)(b.a,{placeholder:"email",type:"text",value:D,onChange:function(e){return E(e.target.value)}}),Object(j.jsx)(b.a,{placeholder:"password",type:"password",value:M,onChange:function(e){return P(e.target.value)}}),Object(j.jsx)(g.a,{type:"submit",onClick:function(e){e.preventDefault(),p.signInWithEmailAndPassword(D,M).catch((function(e){return alert(e.message)})),S(!1)},children:" Sign In"})]})})}),Object(j.jsxs)("div",{className:"app__header",children:[Object(j.jsx)("img",{className:"app__headerImage",src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:""}),J?Object(j.jsx)(g.a,{onClick:function(){return p.signOut()},children:" Logout"}):Object(j.jsxs)("div",{className:"app__loginContainer",children:[Object(j.jsx)(g.a,{onClick:function(){return S(!0)},children:" Sign In"}),Object(j.jsx)(g.a,{onClick:function(){return x(!0)},children:" Sign Up"})]})]}),Object(j.jsx)("div",{className:"app__posts",children:Object(j.jsx)("center",{children:o.map((function(e){var t=e.id,a=e.post;return Object(j.jsx)(m,{postId:t,username:a.username,user:J,caption:a.caption,imageUrl:a.imageUrl},t)}))})}),(null===J||void 0===J?void 0:J.displayName)?Object(j.jsx)(O,{username:J.displayName}):Object(j.jsx)("center",{children:Object(j.jsx)("h3",{children:" Sorry , you need to Login to upload"})})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),N()}},[[67,1,2]]]);
//# sourceMappingURL=main.2d6ce246.chunk.js.map