(this.webpackJsonpauthorquiz=this.webpackJsonpauthorquiz||[]).push([[0],{24:function(e,n,t){e.exports=t(37)},33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(10),r=t.n(i),c=t(16),l=t(6),s=t(12),m=t(13);t(33),t(34),t(35);function u(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"jumbotron col-10 offset-1"},o.a.createElement("h1",null,"Author Quiz"),o.a.createElement("p",null,"Select the book written by the author shown")))}function h(e){var n=e.title,t=e.onClick;return o.a.createElement("div",{className:"answer",onClick:function(){t(n)}},o.a.createElement("h4",null,n))}function g(e){var n=e.author,t=e.books,a=e.highlight,i=e.onAnswerSelected;return o.a.createElement("div",{className:"row turn",style:{backgroundColor:function(e){return{none:"",correct:"#339733",wrong:"#d00811"}[e]}(a)}},o.a.createElement("div",{className:"col-4 offset-1"},o.a.createElement("img",{src:n.imageUrl,className:"authorimage",alt:"Author"})),o.a.createElement("div",{className:"col-6"},t.map((function(e){return o.a.createElement(h,{title:e,key:e,onClick:i})}))))}function d(e){var n=e.show,t=e.onContinue;return o.a.createElement("div",{className:"row continue"},n?o.a.createElement("div",{className:"col-11"},o.a.createElement("button",{className:"btn btn-primary btn-lg float-right",onClick:t},"Continue")):null)}function f(){return o.a.createElement("div",{id:"footer",className:"row"},o.a.createElement("div",{className:"col-10 offset-1"},o.a.createElement("p",{className:"text-muted credit"},"All images are from ",o.a.createElement("a",{href:"http://commons.wikipedia.org/wiki/"},"Wikimedia Commons")," and are in the public domain")))}var k=Object(m.b)((function(e){return{turnData:e.turnData,highlight:e.highlight}}),(function(e){return{onAnswerSelected:function(n){e({type:"ANSWER_SELECTED",answer:n})},onContinue:function(){e({type:"CONTINUE"})}}}))((function(e){var n=e.turnData,t=e.highlight,a=e.onAnswerSelected,i=e.onContinue;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(u,null),o.a.createElement(g,Object.assign({},n,{highlight:t,onAnswerSelected:a})),o.a.createElement(d,{show:"correct"===t,onContinue:i}),o.a.createElement(f,null))})),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=t(20),b=[{name:"Mark Twain",imageUrl:"images/mark-twain.jpg",imageSource:"Wikimedia Commons",books:["The Adventures of Huckleberry Finn","Life on the Mississippi","Roughing It"]},{name:"Stephen King",imageUrl:"images/stephen-king.jpg",imageSource:"Wikimedia Commons",books:["IT","The Shining","Pet Cemetary"]},{name:"J.K. Rowling",imageUrl:"images/jk-rowling.jpg",imageSource:"Wikimedia Commons",books:["Harry Potter","The Silkworm"]},{name:"Charles Dickens",imageUrl:"images/charles-dickens.jpg",imageSource:"Wikimedia Commons",books:["Oliver Twist","David Copperfield"]},{name:"George Orwell",imageUrl:"images/george-orwell.jpg",imageSource:"Wikimedia Commons",books:["Animal Farm","Burmese Days"]},{name:"J.R.R. Tolkien",imageUrl:"images/Tolkien.jpg",imageSource:"Wikimedia Commons",books:["Lord of the Rings","The Children of Hurin"]},{name:"George R.R. Martin",imageUrl:"images/george-martin.jpg",imageSource:"Wikimedia Commons",books:["A Game of Thrones","A Storm of Swords"]},{name:"Chinua Achebe",imageUrl:"images/chinua-achebe.jpg",imageSource:"Wikimedia Commons",books:["A Man of the People","Things Fall Apart"]},{name:"Wole Soyinka",imageUrl:"images/wole-soyinka.jpg",imageSource:"Wikimedia Commons",books:["The Trials of Brother Jero","A Shuttle in the Crypt"]},{name:"William Shakespeare",imageUrl:"images/william-shakespeare.jpg",imageSource:"Wikimedia Commons",books:["Macbeth","Othello","Romeo and Juliet"]}];function E(e){var n=e.reduce((function(e,n,t){return e.concat(n.books)}),[]),t=Object(v.b)(n).slice(0,4),a=Object(v.a)(t);return{books:t,author:e.find((function(e){return e.books.some((function(e){return e===a}))}))}}var C=s.b((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authors:b,turnData:E(b),highlight:""},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ANSWER_SELECTED":var t=e.turnData.author.books.some((function(e){return e===n.answer}));return Object.assign({},e,{highlight:t?"correct":"wrong"});case"CONTINUE":return Object.assign({},e,{highlight:"",turnData:E(e.authors)});default:return e}}));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{exact:!0,path:"/",component:function(){return o.a.createElement(m.a,{store:C},o.a.createElement(k,null))}}),o.a.createElement(l.a,{path:"/add",component:function(e){var n=e.match;return o.a.createElement("div",null,o.a.createElement("h1",null,"Add Author"),o.a.createElement("p",null,JSON.stringify(n)))}})))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/authorquiz",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/authorquiz","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.a4f8e8d6.chunk.js.map