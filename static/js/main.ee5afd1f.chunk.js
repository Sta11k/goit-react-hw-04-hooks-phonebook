(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={label:"Filter_label__741XG",input:"Filter_input__IBHzj"}},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(11),o=n.n(s),i=(n(18),n(19),n(13)),r=n(5),l=(n(20),n(12)),b=n(7),u=n(9),j=n(3),m=n.n(j),d=n(24),O=n(0),h={name:"",number:"",association:"Other"};var p=function(e,t){var n=Object(d.a)(),c=Object(d.a)(),s=Object(a.useState)(h),o=Object(r.a)(s,2),i=o[0],j=o[1],p=function(e){j(Object(u.a)(Object(u.a)({},i),{},Object(b.a)({},e.target.name,e.target.value)))},f=i.name,_=i.number,x=i.association;return Object(O.jsxs)("form",{onSubmit:function(a){a.preventDefault(),console.log("NAME",f),console.log(e);var c,s=Object(l.a)(e);try{for(s.s();!(c=s.n()).done;){var o=c.value.name;if(o===i.name)return void alert("".concat(o," is already in contacts"))}}catch(b){s.e(b)}finally{s.f()}var r={id:n,name:i.name,number:i.number,association:i.association};t(r),j({name:"",number:"",association:"Other"})},className:m.a.m,children:[Object(O.jsx)("h2",{className:m.a.title,children:"Phonebook"}),Object(O.jsxs)("label",{htmlFor:n,className:m.a.form__name,children:["Name",Object(O.jsx)("input",{id:n,onChange:p,type:"text",value:f,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{htmlFor:c,className:m.a.form__number,children:["Number",Object(O.jsx)("input",{id:c,onChange:p,type:"tel",value:_,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsxs)("div",{className:m.a.radio__btn,children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Work",onChange:p,checked:"Work"===x}),"Work"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Family",onChange:p,checked:"Family"===x}),"Family"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Friends",onChange:p,checked:"Friends"===x}),"Friends"]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:"association",value:"Other",onChange:p,checked:"Other"===x}),"Other"]})]}),Object(O.jsx)("button",{type:"submit",children:"Add contacts"})]})},f=n(6),_=n.n(f);var x=function(e){var t=e.contactsOll,n=e.onDeleteContact,a=e.filterContactsOll;console.log("LIST",t);var c=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return Object(O.jsx)("ul",{className:_.a.contacts__list,children:c.map((function(e){var t=e.id,a=e.name,c=e.number,s=e.association;return Object(O.jsxs)("li",{className:_.a.item,children:[" ",Object(O.jsxs)("p",{className:_.a.name__contact,children:["Association: ",s," | ",Object(O.jsxs)("span",{children:[" name: ",a," | "]}),Object(O.jsxs)("span",{children:["number: ",c," |"]})]}),Object(O.jsxs)("button",{className:_.a.btn,type:"button",onClick:function(){return n(t)},children:[" ","DELETE contact"]})]},t)}))})},v=n(10),g=n.n(v);var C=function(e){var t=e.filterContactsOll,n=e.handleFilter;return Object(O.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(O.jsx)("input",{className:g.a.input,type:"text",value:t,onChange:n})]})};var y=function(){var e="contactsOll",t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),b=l[0],u=l[1];return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));t&&s(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c))}),[c]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(p,{OnSubmit:function(e){s([].concat(Object(i.a)(c),[e]))},contactsOll:c}),Object(O.jsx)(C,{filterContactsOll:b,handleFilter:function(e){return u(e.target.value)}}),Object(O.jsx)(x,{contactsOll:c,filterContactsOll:b,onDeleteContact:function(e){var t=c.filter((function(t){return t.id!==e}));u(t)}})]})};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={radio__btn:"Form_radio__btn__2vhTC",title:"Form_title__2DM7h"}},6:function(e,t,n){e.exports={contacts__list:"Todolist_contacts__list__2p6pG",item:"Todolist_item__3lhk8"}}},[[22,1,2]]]);
//# sourceMappingURL=main.ee5afd1f.chunk.js.map