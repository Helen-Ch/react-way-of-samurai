(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{281:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogs__items:"Dialogs_dialogs__items__1o0VM",dialog:"Dialogs_dialog__lk_cw",active:"Dialogs_active__2sQhs",dialogs__messages:"Dialogs_dialogs__messages__39nLV",message:"Dialogs_message__1xIDh"}},288:function(e,a,t){"use strict";t.r(a);var s=t(101),n=t(0),i=t.n(n),l=t(281),o=t.n(l),c=t(20),m=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:o.a.dialog+" "+o.a.active},i.a.createElement(c.b,{to:a},e.name))},d=function(e){return i.a.createElement("div",{className:o.a.message},e.message)},r=t(94),g=t(124),u=t(37),_=t(89),b=Object(_.a)(50),E=Object(g.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(r.a,{component:u.b,validate:[_.b,b],name:"newMessageBody",placeholder:"Enter your message"})),i.a.createElement("div",null,i.a.createElement("button",null,"Send")))})),v=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(m,{key:e.id,name:e.name,id:e.id})})),s=a.messages.map((function(e){return i.a.createElement(d,{key:e.id,message:e.message})}));return i.a.createElement("div",{className:o.a.dialogs},i.a.createElement("div",{className:o.a.dialogs__items},t),i.a.createElement("div",{className:o.a.dialogs__messages},i.a.createElement("div",null,s),i.a.createElement("div",null,i.a.createElement(E,{onSubmit:function(a){e.onSendMessage(a.newMessageBody)}}))))},f=t(19),p=t(134),h=t(16);a.default=Object(h.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onSendMessage:function(a){e(Object(s.b)(a))}}})),p.a)(v)}}]);
//# sourceMappingURL=4.64a599fb.chunk.js.map