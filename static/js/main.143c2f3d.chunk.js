(this.webpackJsonpauthorquiz=this.webpackJsonpauthorquiz||[]).push([[0],{24:function(e,a,n){e.exports=n(37)},33:function(e,a,n){},34:function(e,a,n){},35:function(e,a,n){},37:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(10),i=n.n(r),l=n(13),m=n(6),c=n(12),s=n(14);n(33),n(34),n(35);function u(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"jumbotron col-10 offset-1"},o.a.createElement("h1",null,"Author Quiz"),o.a.createElement("p",null,"Select the book written by the author shown")))}function h(e){var a=e.title,n=e.onClick;return o.a.createElement("div",{className:"answer",onClick:function(){n(a)}},o.a.createElement("h4",null,a))}function g(e){var a=e.author,n=e.books,t=e.highlight,r=e.onAnswerSelected;return o.a.createElement("div",{className:"row turn",style:{backgroundColor:function(e){return{none:"",correct:"#339733",wrong:"#d00811"}[e]}(t)}},o.a.createElement("div",{className:"col-4 offset-1"},o.a.createElement("img",{src:a.imageUrl,className:"authorimage",alt:"Author"})),o.a.createElement("div",{className:"col-6"},n.map((function(e){return o.a.createElement(h,{title:e,key:e,onClick:r})}))))}function d(e){var a=e.show,n=e.onContinue;return o.a.createElement("div",{className:"row continue"},a?o.a.createElement("div",{className:"col-11"},o.a.createElement("button",{className:"btn btn-primary btn-lg float-right",onClick:n},"Continue")):null)}function k(){return o.a.createElement("div",{id:"footer",className:"row"},o.a.createElement("div",{className:"col-10 offset-1"},o.a.createElement("p",null,o.a.createElement(l.b,{to:"/add"},"Add an author")," "),o.a.createElement("p",{className:"text-muted credit"},"All images are from ",o.a.createElement("a",{href:"http://commons.wikipedia.org/wiki/"},"Wikimedia Commons")," and are in the public domain")))}var f=Object(s.b)((function(e){return{turnData:e.turnData,highlight:e.highlight}}),(function(e){return{onAnswerSelected:function(a){e({type:"ANSWER_SELECTED",answer:a})},onContinue:function(){e({type:"CONTINUE"})}}}))((function(e){var a=e.turnData,n=e.highlight,t=e.onAnswerSelected,r=e.onContinue;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement(u,null),o.a.createElement(g,Object.assign({},a,{highlight:n,onAnswerSelected:t})),o.a.createElement(d,{show:"correct"===n,onContinue:r}),o.a.createElement(k,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=n(20),p=[{name:"Mark Twain",imageUrl:"images/mark-twain.jpg",imageSource:"Wikimedia Commons",books:["The Adventures of Huckleberry Finn","Life on the Mississippi","Roughing It"]},{name:"Stephen King",imageUrl:"images/stephen-king.jpg",imageSource:"Wikimedia Commons",books:["IT","The Shining","Pet Cemetary"]},{name:"J.K. Rowling",imageUrl:"images/jk-rowling.jpg",imageSource:"Wikimedia Commons",books:["Harry Potter","The Silkworm"]},{name:"Charles Dickens",imageUrl:"images/charles-dickens.jpg",imageSource:"Wikimedia Commons",books:["Oliver Twist","David Copperfield"]},{name:"George Orwell",imageUrl:"images/george-orwell.jpg",imageSource:"Wikimedia Commons",books:["Animal Farm","Burmese Days"]},{name:"J.R.R. Tolkien",imageUrl:"images/Tolkien.jpg",imageSource:"Wikimedia Commons",books:["Lord of the Rings","The Children of Hurin"]},{name:"George R.R. Martin",imageUrl:"images/george-martin.jpg",imageSource:"Wikimedia Commons",books:["A Game of Thrones","A Storm of Swords"]},{name:"Chinua Achebe",imageUrl:"images/chinua-achebe.jpg",imageSource:"Wikimedia Commons",books:["A Man of the People","Things Fall Apart"]},{name:"Wole Soyinka",imageUrl:"images/wole-soyinka.jpg",imageSource:"Wikimedia Commons",books:["The Trials of Brother Jero","A Shuttle in the Crypt"]},{name:"William Shakespeare",imageUrl:"images/william-shakespeare.jpg",imageSource:"Wikimedia Commons",books:["Macbeth","Othello","Romeo and Juliet"]}];function b(e){var a=e.reduce((function(e,a,n){return e.concat(a.books)}),[]),n=Object(E.b)(a).slice(0,4),t=Object(E.a)(n);return{books:n,author:e.find((function(e){return e.books.some((function(e){return e===t}))}))}}var w=c.b((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authors:p,turnData:b(p),highlight:""},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ANSWER_SELECTED":var n=e.turnData.author.books.some((function(e){return e===a.answer}));return Object.assign({},e,{highlight:n?"correct":"wrong"});case"CONTINUE":return Object.assign({},e,{highlight:"",turnData:b(e.authors)});default:return e}}));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{basname:"/authorquiz"},o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{exact:!0,path:"/",component:function(){return o.a.createElement(s.a,{store:w},o.a.createElement(f,null))}}),o.a.createElement(m.a,{path:"/add",component:function(e){var a=e.match;return o.a.createElement("div",null,o.a.createElement("h1",null,"Add Author"),o.a.createElement("p",null,JSON.stringify(a)))}})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.143c2f3d.chunk.js.map