"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[202],{202:function(n,e,t){t.r(e),t.d(e,{default:function(){return on}});var r,o,i,a,c,u,s,l,d,m,h,p,f,x,b=t(2791),g=t(9434),v=t(168),Z=t(6444),j=Z.ZP.div(r||(r=(0,v.Z)(["\n  text-align: center;\n"]))),w=t(885),y=t(3634),k=function(n){return n.contacts.items},P=function(n){return n.contacts.isLoading},C=function(n){return n.contacts.error},z=function(n){return n.filter},A=function(n){var e=z(n),t=k(n);if(!e)return t;var r=e.toLocaleLowerCase();return t.filter((function(n){var e=n.name,t=n.number;return e.toLocaleLowerCase().includes(r)||t.includes(r)}))},F=t(5984),L=t(8174),S=Z.ZP.form(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 380px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]})),I=Z.ZP.label(i||(i=(0,v.Z)(["\n  display: block;\n  margin-bottom: ","px;\n\n  font-weight: 700;\n  font-size: ","px;\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[4]})),_=Z.ZP.input(a||(a=(0,v.Z)(["\n  display: block;\n  width: 340px;\n  height: 30px;\n  margin-bottom: ","px;\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[1]})),q=Z.ZP.input(c||(c=(0,v.Z)(["\n  display: block;\n  width: 340px;\n  height: 30px;\n  margin-bottom: ","px;\n  padding-left: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[1]})),D=Z.ZP.button(u||(u=(0,v.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  font-weight: 500;\n  font-size: ","px;\n\n  color: ",";\n  background-color: ",";\n  border: none;\n  border-radius: ","px;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.radii.s}),(function(n){return n.theme.colors.hover}),(function(n){return n.theme.shadows.shadow})),N=t(184),K=function(){var n=(0,b.useState)(""),e=(0,w.Z)(n,2),t=e[0],r=e[1],o=(0,b.useState)(""),i=(0,w.Z)(o,2),a=i[0],c=i[1],u=(0,g.v9)(k),s=(0,g.I0)(),l=(0,F.x0)(),d=(0,F.x0)(),m=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":return r(o);case"number":return c(o);default:return}},h=function(n){var e=n.name,t=n.number,r=e.toLowerCase();return u.find((function(n){return n.name.toLowerCase()===r&&n.number===t}))},p=function(){r(""),c("")};return(0,N.jsxs)(S,{onSubmit:function(n){n.preventDefault(),h({name:t,number:a})?L.Am.error("".concat(t," is already in contacts. Please add a new contact.")):(s((0,y.uK)({name:t,number:a})),p())},children:[(0,N.jsx)(I,{htmlFor:l,children:"Name"}),(0,N.jsx)(_,{id:l,type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Homer Simpson",required:!0,onChange:m}),(0,N.jsx)(I,{htmlFor:d,children:"Number"}),(0,N.jsx)(q,{id:d,type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"742-987-4457",required:!0,onChange:m}),(0,N.jsx)(D,{type:"submit",children:"Add contact"})]})},T=Z.ZP.ul(s||(s=(0,v.Z)(["\n  width: 520px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),B=Z.ZP.li(l||(l=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-bottom: ","px;\n\n  border-bottom: 1px solid ",";\n\n  :not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.space[1]})),E=Z.ZP.p(d||(d=(0,v.Z)([""]))),G=Z.ZP.button(m||(m=(0,v.Z)(["\n  display: inline-block;\n  padding: ","px ","px;\n  font-weight: 400;\n\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ","px;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.s}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.delete}),(function(n){return n.theme.shadows.shadow})),H=function(){var n=(0,g.v9)(A),e=(0,g.I0)();return(0,N.jsx)(T,{children:n.map((function(n){var t=n.id,r=n.name,o=n.number;return(0,N.jsxs)(B,{children:[(0,N.jsxs)(E,{children:[r,": ",(0,N.jsx)("span",{children:o})]}),(0,N.jsx)(G,{type:"button",onClick:function(){return function(n){e((0,y.GK)(n))}(t)},children:"Delete"})]},t)}))})},J=t(4808),M=Z.ZP.label(h||(h=(0,v.Z)(["\n  display: block;\n  margin-bottom: ","px;\n\n  font-weight: 500;\n  font-size: ","px;\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[3]})),R=Z.ZP.input(p||(p=(0,v.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  height: 30px;\n  padding-left: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[5]})),W=function(){var n=(0,F.x0)(),e=(0,g.v9)(z),t=(0,g.I0)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(M,{htmlFor:n,children:"Find contacts by name"}),(0,N.jsx)(R,{id:n,type:"text",name:"filter",value:e,placeholder:"Search...",onChange:function(n){var e=n.target.value;t((0,J.T)(e))}})]})},Y=Z.ZP.h2(f||(f=(0,v.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),$=function(n){var e=n.title,t=n.children;return(0,N.jsxs)("div",{children:[(0,N.jsx)(Y,{children:e}),t]})},O=t(2007),Q=t.n(O),U=Z.ZP.h1(x||(x=(0,v.Z)(["\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]})),V=function(n){var e=n.title;return(0,N.jsx)(U,{children:e})};V.propTopes={title:Q().string.isRequired};var X,nn=function(n){var e=n.message;return(0,N.jsx)("p",{children:e})},en=t(8402),tn=Z.ZP.div(X||(X=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),rn=function(){return(0,N.jsx)(tn,{children:(0,N.jsx)(en.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"32",visible:!0})})},on=function(){var n=(0,g.I0)(),e=(0,g.v9)(k),t=(0,g.v9)(P),r=(0,g.v9)(C);return(0,b.useEffect)((function(){n((0,y.yF)())}),[n]),(0,N.jsxs)(j,{children:[(0,N.jsx)(V,{title:"Phonebook"}),(0,N.jsx)(K,{}),(0,N.jsxs)($,{title:"Contacts",children:[(0,N.jsx)(W,{}),t&&!r&&(0,N.jsx)(rn,{}),e.length>0&&(0,N.jsx)(H,{}),0===e.length&&!t&&(0,N.jsx)(nn,{message:"You don't have contacts yet..."})]})]})}}}]);
//# sourceMappingURL=202.3da3aec2.chunk.js.map