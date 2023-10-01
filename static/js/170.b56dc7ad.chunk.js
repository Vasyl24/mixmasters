"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{1170:function(n,e,r){r.r(e),r.d(e,{default:function(){return on}});var t,i,o,a,s,l,d,c,p,h,x,u,m,g,b,f=r(4165),w=r(1413),v=r(5861),j=r(9439),Z=r(2791),k=r(9434),P=r(7689),y=r(5705),z=r(8007),S=r(5218),C=r(5561),Y=r(1745),_=r(2580),B=r(168),T=r(1087),q=r(6487),F=r(6275),I=r(1053),A=r(2168),E=r(9492),O=r(4771),V=r(8251),L=q.ZP.div(t||(t=(0,B.Z)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-size: contain;\n  justify-content: center;\n  align-items: center;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: linear-gradient(\n      to right,\n      rgba(6, 6, 9, 1),\n      rgba(10, 10, 17, 0)\n    ),\n    url(",");\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: linear-gradient(\n        to right,\n        rgba(6, 6, 9, 1),\n        rgba(10, 10, 17, 0)\n      ),\n      url(",");\n    justify-content: left;\n  }\n\n  @media (max-width: 767.98px) {\n    justify-content: left;\n    background-image: linear-gradient(\n        to right,\n        rgba(6, 6, 9, 1),\n        rgba(10, 10, 17, 0)\n      ),\n      url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: linear-gradient(\n          to right,\n          rgba(6, 6, 9, 1),\n          rgba(10, 10, 17, 0)\n        ),\n        url(",");\n    }\n  }\n\n  @media (min-width: 1024px) {\n    justify-content: left;\n    background-image: linear-gradient(\n        to right,\n        rgba(6, 6, 9, 1),\n        rgba(10, 10, 17, 0)\n      ),\n      url(",");\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: linear-gradient(\n          to right,\n          rgba(6, 6, 9, 1),\n          rgba(10, 10, 17, 0)\n        ),\n        url(",");\n    }\n  }\n"])),A,E,I,F,O,V),Q=q.ZP.form(i||(i=(0,B.Z)(["\n  width: 335px;\n  height: auto;\n  margin-left: 20px;\n  margin-right: 20px;\n  z-index: 1000;\n\n  @media (min-width: 768px) {\n    width: 400px;\n    margin-left: 64px;\n  }\n\n  @media (min-width: 1024px) {\n    margin-left: 100px;\n  }\n"]))),R=q.ZP.h1(o||(o=(0,B.Z)(["\n  color: var(--text-btn-color);\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1.15;\n\n  @media (min-width: 768px) {\n    font-size: 40px;\n    line-height: 1.1;\n  }\n"]))),U=q.ZP.div(a||(a=(0,B.Z)(["\n  position: relative;\n  margin-top: 28px;\n  margin-bottom: 14px;\n"]))),D=q.ZP.input(s||(s=(0,B.Z)(["\n  width: 100%;\n  height: 54px;\n  border-radius: 200px;\n  border: ",";\n  background-color: transparent;\n  padding-left: 24px;\n  margin-bottom: 14px;\n  color: var(--text-btn-color);\n\n  &::placeholder {\n    color: var(--text-btn-color);\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.3;\n  }\n\n  @media (min-width: 768px) {\n    height: 56px;\n    font-size: 17px;\n    line-height: 1.5;\n\n    &::placeholder {\n      font-size: 17px;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    padding-left: 22px;\n  }\n\n  &:focus,\n  &:hover {\n    border-color: rgba(243, 243, 243, 0.5);\n  }\n"])),(function(n){return n.border||"1px solid rgba(243, 243, 243, 0.2)"})),G=q.ZP.div(l||(l=(0,B.Z)(["\n  margin-top: 1px;\n  position: relative;\n"]))),H=q.ZP.div(d||(d=(0,B.Z)(["\n  position: absolute;\n  top: -10px;\n  transform: translateY(-50%);\n\n  color: var(--error-state-color);\n  font-size: 12px;\n"]))),J=q.ZP.div(c||(c=(0,B.Z)(["\n  margin-top: 1px;\n  position: relative;\n"]))),K=q.ZP.div(p||(p=(0,B.Z)(["\n  position: absolute;\n  top: -10px;\n  transform: translateY(-50%);\n\n  color: var(--correct-state-color);\n  font-size: 12px;\n"]))),M=q.ZP.button(h||(h=(0,B.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  height: 54px;\n\n  border-radius: 42px;\n  border: 1px solid rgba(243, 243, 243, 0.2);\n  background: var(--text-btn-color);\n\n  color: var(--accent-color);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.1;\n\n  outline: none;\n  cursor: pointer;\n  transition: 0.3s ease;\n\n  &focus,\n  &:hover {\n    background: var(--hover-btn-color);\n    color: var(--text-btn-color);\n  }\n\n  &:disabled {\n    pointer-events: none;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),N=(0,q.ZP)(T.OL)(x||(x=(0,B.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  text-decoration-line: underline;\n  padding-top: 14px;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.3;\n  }\n"]))),W=q.ZP.svg(u||(u=(0,B.Z)(["\n  width: 24px;\n  height: 24px;\n\n  position: absolute;\n  right: 20px;\n  top: 96px;\n  transform: translateY(-50%);\n  cursor: pointer;\n"]))),X=q.ZP.svg(m||(m=(0,B.Z)(["\n  width: 24px;\n  height: 24px;\n\n  position: absolute;\n  right: 20px;\n  top: 96px;\n  transform: translateY(-50%);\n  cursor: pointer;\n"]))),$=q.ZP.svg(g||(g=(0,B.Z)(["\n  width: 24px;\n  height: 24px;\n\n  position: absolute;\n  right: 20px;\n  top: 28px;\n  transform: translateY(-50%);\n"]))),nn=q.ZP.svg(b||(b=(0,B.Z)(["\n  width: 24px;\n  height: 24px;\n\n  position: absolute;\n  right: 20px;\n  top: 28px;\n  transform: translateY(-50%);\n"]))),en=r(3329),rn=z.Ry().shape({email:z.Z_().email("Please enter a valid email").required("Email address is required"),password:z.Z_().min(6,(function(n){var e=n.min;return"The password must be at least ".concat(e," characters")})).max(30,(function(n){var e=n.max;return"The password must be no more than ".concat(e," characters")})).required("Password is required")}),tn=function(){var n=(0,Z.useState)(!0),e=(0,j.Z)(n,2),r=e[0],t=e[1],i=(0,k.I0)(),o=(0,k.v9)(_.Qb),a=(0,P.s0)(),s={email:"",password:""},l=function(){var n=(0,v.Z)((0,f.Z)().mark((function n(e){var r;return(0,f.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!o){n.next=3;break}return a("/home",{replace:!0}),n.abrupt("return");case 3:return n.next=5,i((0,Y.zB)((0,w.Z)({},e)));case 5:(r=n.sent)&&r.error?S.Am.error("Incorrect email or password"):d.resetForm({values:s});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=(0,y.TA)({initialValues:s,onSubmit:l,validationSchema:rn,validateOnSubmit:!0});return(0,en.jsx)(L,{children:(0,en.jsxs)(Q,{onSubmit:d.handleSubmit,children:[(0,en.jsx)(R,{children:"Sign In"}),(0,en.jsxs)(U,{children:[(0,en.jsxs)("label",{htmlFor:"email",children:[(0,en.jsx)(D,{name:"email",type:"email",placeholder:"Email",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.email,border:d.touched.email&&(d.errors.email?"1px solid #da1414":"1px solid #3cbc81")}),d.touched.email&&(d.errors.email?(0,en.jsx)(G,{children:(0,en.jsx)(H,{children:d.errors.email})}):(0,en.jsx)(J,{children:(0,en.jsx)(K,{children:"This is a correct email"})})),d.touched.email&&(d.errors.email?(0,en.jsx)(nn,{children:(0,en.jsx)("use",{href:"".concat(C.Z,"#icon-error")})}):(0,en.jsx)($,{children:(0,en.jsx)("use",{href:"".concat(C.Z,"#icon-done")})}))]}),(0,en.jsxs)("label",{htmlFor:"password",children:[(0,en.jsx)(D,{name:"password",type:"password",placeholder:"Password",onChange:d.handleChange,onBlur:d.handleBlur,value:d.values.password,border:d.touched.password&&(d.errors.password?"1px solid #da1414":"1px solid #3cbc81")}),d.touched.password&&(d.errors.password?(0,en.jsx)(G,{children:(0,en.jsx)(H,{children:d.errors.password})}):(0,en.jsx)(J,{children:(0,en.jsx)(K,{children:"This is a correct password"})})),(0,en.jsx)("div",{onClick:function(){return t((function(n){return!n}))},children:r?(0,en.jsx)(W,{children:(0,en.jsx)("use",{href:"".concat(C.Z,"#icon-eye-off")})}):(0,en.jsx)(X,{children:(0,en.jsx)("use",{href:"".concat(C.Z,"#icon-eye")})})})]})]}),(0,en.jsx)(M,{type:"submit",disabled:!d.isValid||d.isSubmitting,children:"Sign In"}),(0,en.jsx)(N,{to:"/signup",children:"Sign Up"})]})})},on=function(){return(0,en.jsx)(en.Fragment,{children:(0,en.jsx)(tn,{})})}},4771:function(n,e,r){n.exports=r.p+"static/media/welcome-desk.38782627b114c7753602.jpg"},8251:function(n,e,r){n.exports=r.p+"static/media/welcome-desk@2x.061eb6ff8715ee1bed59.jpg"},1053:function(n,e,r){n.exports=r.p+"static/media/welcome-mob.cc00c21e562de1207966.jpg"},6275:function(n,e,r){n.exports=r.p+"static/media/welcome-mob@2x.131ba3649665347a7997.jpg"},2168:function(n,e,r){n.exports=r.p+"static/media/welcome-tabl.23820f0f42504bbc0697.jpg"},9492:function(n,e,r){n.exports=r.p+"static/media/welcome-tabl@2x.677f59d9b34848b90af8.jpg"}}]);
//# sourceMappingURL=170.b56dc7ad.chunk.js.map