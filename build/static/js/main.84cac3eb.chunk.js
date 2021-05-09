(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var c=t(14),a=t.n(c),r=t(3),o=t(1),i=t(0),u=function(e){var n=e.handleSubmit,t=e.handleNameChange,c=e.handleNumberChange,a=e.newName,r=e.newNumber;return Object(i.jsxs)("form",{onSubmit:n,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:a,onChange:t}),"number: ",Object(i.jsx)("input",{value:r,onChange:c})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.filter,t=e.handleFilterChange;return Object(i.jsxs)("div",{children:["filter shown with ",Object(i.jsx)("input",{value:n,onChange:t})]})},s=function(e){var n=e.person,t=e.handleDelete;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:[n.name," ",n.number]})," ",Object(i.jsx)("button",{onClick:function(){return t(n.id)},children:"Delete"})]})},l=function(e){var n=e.persons,t=e.filter,c=e.handleDelete;return Object(i.jsx)("div",{children:n.map((function(e){return e.name.toLowerCase().includes(t)?Object(i.jsx)(s,{person:e,handleDelete:c},e.id):null}))})},b=function(e){var n=e.message;return n?"positive"===n.type?Object(i.jsx)("div",{style:{backgroundColor:"green",fontSize:20,padding:40},children:n.content}):"negative"===n.type?Object(i.jsx)("div",{style:{backgroundColor:"red",fontSize:20,padding:40},children:n.content}):null:null},f=t(4),h=t.n(f),m="/api/persons",j={getAll:function(){return h.a.get(m).then((function(e){return e.data}))},addPerson:function(e){return h.a.post(m,e).then((function(e){return e.data}))},deletePerson:function(e){return h.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},updatePerson:function(e,n){return h.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))}},p=function(){var e=Object(o.useState)([{name:"Arto Hellas",number:1122}]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),s=Object(r.a)(a,2),f=s[0],h=s[1],m=Object(o.useState)(""),p=Object(r.a)(m,2),v=p[0],O=p[1],g=Object(o.useState)(""),x=Object(r.a)(g,2),w=x[0],y=x[1],C=Object(o.useState)({}),S=Object(r.a)(C,2),N=S[0],k=S[1];Object(o.useEffect)((function(){j.getAll().then((function(e){return c(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{message:N}),Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(d,{filter:w,handleFilterChange:function(e){y(e.target.value.toLowerCase())}}),Object(i.jsx)("h2",{children:"Add a new"}),Object(i.jsx)(u,{handleSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name===f||e.number===v})))if(t.find((function(e){return e.name===f&&e.number===v})))window.alert("".concat(f," with the number ").concat(v," already exists"));else{var n=t.find((function(e){return e.name===f||e.number===v})),a={name:f,number:v};window.confirm("Do you really want to update person ".concat(n.name," ").concat(n.number," with ").concat(a.name," ").concat(a.number," ?"))&&j.updatePerson(n.id,a).then((function(e){c(t.map((function(n){return n.id===e.id?e:n})));var a={content:"".concat(n.name," ").concat(n.number," updated with ").concat(e.name," ").concat(e.number),type:"positive"};k(a),setTimeout((function(){k({})}),5e3)})).catch((function(e){k({content:"".concat(n.name," no longer exists"),type:"negative"}),c(t.filter((function(e){return e.id!==n.id}))),setTimeout((function(){k({})}),5e3)}))}else{var r={name:f,number:v};j.addPerson(r).then((function(e){c(t.concat(e));var n={content:"".concat(e.name," added"),type:"positive"};k(n),setTimeout((function(){k({})}),5e3)}))}h(""),O("")},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){O(e.target.value)},newName:f,newNumber:v}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(l,{persons:t,filter:w,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("do you really want to delete ".concat(n.name," ?"))&&j.deletePerson(e).then((function(e){c(t.filter((function(e){return e.name!==n.name})));var a={content:"".concat(n.name," was deleted"),type:"negative"};k(a),setTimeout((function(){k({})}),5e3)})).catch((function(e){k({content:"".concat(n.name," no longer exists"),type:"negative"}),c(t.filter((function(e){return e.id!==n.id}))),setTimeout((function(){k({})}),5e3)}))}})]})};a.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.84cac3eb.chunk.js.map