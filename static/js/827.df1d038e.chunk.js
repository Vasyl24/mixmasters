"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[827],{2860:function(n,e,i){i.d(e,{Z:function(){return y}});var t,A,r,o,a,d,c,p,s,h,x=i(168),l=i(6487),g=l.ZP.li(t||(t=(0,x.Z)(["\n  width: 335px;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media screen and (min-width: 768px) {\n    width: 342px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 400px;\n  }\n"]))),u=l.ZP.img(A||(A=(0,x.Z)(["\n  width: 335px;\n  height: 360px;\n  border-radius: 8px;\n  background: linear-gradient(\n      180deg,\n      rgba(10, 10, 17, 0.02) 51.18%,\n      rgba(10, 10, 17, 0.77) 97.66%\n    ),\n    url(<path-to-image>), lightgray 50% / cover no-repeat;\n\n  @media screen and (min-width: 768px) {\n    width: 342px;\n    height: 360px;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 400px;\n    height: 400px;\n  }\n"]))),m=l.ZP.div(r||(r=(0,x.Z)(["\n  display: flex;\n  margin-top: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 24px;\n  }\n"]))),f=l.ZP.h2(o||(o=(0,x.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n  margin-top: 18px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 24px;\n    margin-top: 24px;\n  }\n"]))),w=l.ZP.h3(a||(a=(0,x.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.28;\n  margin-top: 4px;\n  color: var(--text-color);\n  opacity: 0.5;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n  }\n"]))),v=l.ZP.p(d||(d=(0,x.Z)(["\n  height: 74px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.28;\n  margin-top: 18px;\n\n  @media screen and (min-width: 768px) {\n    height: 110px;\n    font-size: 16px;\n    line-height: 1.38;\n    margin-top: 24px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    height: 90px;\n  }\n"]))),b=i(4315),E=l.zo.button(c||(c=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 40px;\n  border: none;\n  background-color: var(--btn-background-color);\n  margin-left: 8px;\n\n  @media (min-width: 768px) {\n    width: 54px;\n    height: 54px;\n  }\n\n  &:hover,\n  &:active {\n    background-color: var(--hover-btn-color);\n  }\n\n  &:hover svg,\n  &:active svg {\n    stroke: var(--hover-txt-color);\n    fill: var(--hover-btn-color);\n  }\n"]))),j=l.zo.svg(p||(p=(0,x.Z)(["\n  width: 24px;\n  height: 24px;\n  stroke: var(--hover-txt-color);\n  fill: var(--btn-background-color);\n"]))),k=i(5561),B=i(3329),Q=function(n){var e=n.onDelete,i=n.id;return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(E,{onClick:function(){return e(i)},children:(0,B.jsx)(j,{children:(0,B.jsx)("use",{href:k.Z+"#icon-trash"})})})})},Z=i(1087),P=(0,l.zo)(Z.OL)(s||(s=(0,x.Z)(["\n  border-radius: 42px;\n  background-color: var(--btn-background-color);\n  color: var(--btn-text-color);\n  font-size: 14px;\n  font-weight: 600;\n  line-height: calc(18 / 14);\n  text-align: center;\n  padding: 14px 40px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  border: 1px solid transparent;\n  transition: background-color 400ms ease, border-color 400ms ease,\n    color 400ms ease;\n\n  &:hover {\n    background-color: var(--hover-btn-color);\n    color: var(--hover-txt-color);\n  }\n\n  @media (min-width: 768px) {\n    padding: 18px 44px;\n    font-size: 16px;\n    line-height: calc(18 / 16);\n  }\n"]))),M=function(n){var e=n.id;return(0,B.jsx)(P,{to:"/drinks/".concat(e),children:"See more"})},C=function(n){var e=n.drink,i=e._id,t=e.drink,A=e.alcoholic,r=e.description,o=e.drinkThumb,a=n.onDelete;return(0,B.jsxs)(g,{children:[(0,B.jsx)(u,{src:o||b,alt:t,loading:"lazy"}),(0,B.jsx)(f,{children:t}),(0,B.jsx)(w,{children:A}),(0,B.jsx)(v,{children:r}),(0,B.jsxs)(m,{children:[(0,B.jsx)(M,{id:i}),(0,B.jsx)(Q,{type:"button",onDelete:a,id:i})]})]})},I=l.ZP.ul(h||(h=(0,x.Z)(["\n  display: grid;\n  grid-row-gap: 40px;\n  list-style: none;\n  margin-top: 40px;\n  margin-bottom: 54px;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 20px;\n    grid-row-gap: 80px;\n    margin-top: 60px;\n    margin-bottom: 94px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    grid-template-columns: repeat(3, 1fr);\n    margin-top: 62px;\n  }\n"]))),y=function(n){var e=n.drinks,i=n.handleDel;return(0,B.jsx)(I,{children:e.map((function(n){return(0,B.jsx)(C,{drink:n,onDelete:i},n._id)}))})}},3159:function(n,e,i){i.d(e,{Z:function(){return x}});var t,A,r=i(9439),o=i(2791),a=i(168),d=i(6487),c=d.ZP.div(t||(t=(0,a.Z)(["\n  padding: 14px 0;\n  @media screen and (min-width: 768px) {\n    padding: 14px 24px;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  li {\n  }\n\n  button {\n    width: 27px;\n    height: 27px;\n    border-radius: 50%;\n    color: var(--text-color);\n    transition: background-color 0.5s;\n    font-size: 12px;\n    font-weight: 500;\n    background-color: transparent;\n    border: none;\n    font-style: normal;\n    margin: 0 10px;\n  }\n\n  button.active {\n    background-color: var(--pagination-color);\n  }\n"]))),p=d.ZP.button(A||(A=(0,a.Z)(["\n  width: 27px;\n  height: 27px;\n  fill: var(--text-color);\n  opacity: 0.3;\n  background-color: transparent;\n  border: none;\n  margin: 0 10px;\n"]))),s=i(5561),h=i(3329),x=function(n){for(var e=n.drinksPerPage,i=n.totalDrinks,t=n.onPageChange,A=n.pageNumbersToShow,a=(0,o.useState)(1),d=(0,r.Z)(a,2),x=d[0],l=d[1],g=function(n){l(n),t(n),window.scrollTo({top:0,behavior:"smooth"})},u=[],m=1;m<=Math.ceil(i/e);m++)u.push(m);return(0,h.jsx)(c,{children:(0,h.jsxs)("ul",{children:[(0,h.jsx)(p,{type:"button",onClick:function(){return g(x-1)},disabled:1===x,children:(0,h.jsx)("svg",{style:{width:14,height:20,marginRight:30},children:(0,h.jsx)("use",{href:s.Z+"#icon-arrow-left"})})}),function(){var n=Math.floor(A/2),e=u.indexOf(x),i=Math.max(0,e-n),t=Math.min(u.length-1,i+A-1);return u.slice(i,t+1)}().map((function(n){return(0,h.jsx)("li",{children:(0,h.jsx)("button",{onClick:function(){return g(n)},className:n===x?"active":"",children:n})},n)})),(0,h.jsx)(p,{onClick:function(){return g(x+1)},disabled:x===Math.ceil(i/e),children:(0,h.jsx)("svg",{style:{width:14,height:20},children:(0,h.jsx)("use",{href:s.Z+"#icon-arrow-right"})})})]})})}},3757:function(n,e,i){i.d(e,{V:function(){return a}});var t,A=i(168),r=i(6487).ZP.h1(t||(t=(0,A.Z)(["\n  margin-bottom: 40px;\n  font-size: 32px;\n  font-weight: 600;\n  line-height: 1.2;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 60px;\n    font-size: 56px;\n    line-height: 1.1;\n  }\n  @media screen and (min-width: 1440px) {\n    width: 715px;\n    font-size: 64px;\n  }\n"]))),o=i(3329);function a(n){var e=n.title;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(r,{children:e})})}},4827:function(n,e,i){i.r(e),i.d(e,{default:function(){return B}});var t,A,r,o,a=i(9439),d=i(2860),c=i(9434),p=i(2791),s=i(7189),h=i(9067),x=i(168),l=i(6487),g=l.ZP.div(t||(t=(0,x.Z)(["\n  width: 100%;\n  margin: 0;\n  padding-top: 80px;\n  padding-bottom: 80px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 140px;\n    padding-bottom: 140px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 158px;\n    padding-bottom: 140px;\n  }\n"]))),u=l.ZP.div(A||(A=(0,x.Z)(["\n  margin: 0 auto;\n  padding-top: 91px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding-top: 67px;\n  }\n"]))),m=l.ZP.img(r||(r=(0,x.Z)(["\n  width: 198px;\n  height: 247px;\n\n  @media screen and (min-width: 768px) {\n    width: 261px;\n    height: 326px;\n  }\n"]))),f=l.ZP.p(o||(o=(0,x.Z)(["\n  width: 205px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28;\n  margin-top: 32px;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    width: 236px;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.38;\n  }\n"]))),w=i(5218),v=i(5495),b=i(3757),E=i(3159),j=i(9168),k=i(3329),B=function(){var n=(0,c.I0)(),e=(0,c.v9)(h.ms),i=(0,c.v9)(h.xU),t=(0,c.v9)(h.zh),A=(0,p.useState)(1),r=(0,a.Z)(A,2),o=r[0],x=r[1],l=(0,p.useState)(9),B=(0,a.Z)(l,2),Q=B[0],Z=B[1],P=(0,p.useState)(8),M=(0,a.Z)(P,2),C=M[0],I=M[1],y=function(){window.innerWidth<768?(Z(10),I(5)):window.innerWidth>=768&&window.innerWidth<1440?(Z(10),I(8)):window.innerWidth>=1440&&(Z(9),I(8))};(0,p.useEffect)((function(){return y(),window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}}),[]),(0,p.useEffect)((function(){n((0,s.xx)())}),[n]);var D=o*Q,z=D-Q,U=e.slice(z,D);return i?(0,k.jsx)(j.Z,{}):(0,k.jsxs)(g,{children:[(0,k.jsx)(b.V,{title:"My drinks"}),t&&w.Am.error("Something went wrong please try later.",{position:"top-center"}),0!==e.length||i?(0,k.jsx)(d.Z,{drinks:U,handleDel:function(e){var i={id:e};n((0,s.iE)(i))}}):(0,k.jsxs)(u,{children:[(0,k.jsx)(m,{src:"".concat(v),alt:"blue-iced-tea"}),(0,k.jsx)(f,{children:"You haven't added any cocktails yet"})]}),e.length>8&&(0,k.jsx)(E.Z,{drinksPerPage:Q,totalDrinks:e.length,onPageChange:function(n){x(n)},pageNumbersToShow:C})]})}},9067:function(n,e,i){i.d(e,{ms:function(){return t},xU:function(){return A},zh:function(){return r}});var t=function(n){return n.drinks.items},A=function(n){return n.drinks.isLoading},r=function(n){return n.drinks.error}},5495:function(n,e,i){n.exports=i.p+"static/media/blue-iced-tea.1c7629b2a72364b7bf50.png"},4315:function(n){n.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIANwA3AMBIgACEQEDEQH/xAAcAAEBAAMBAQEBAAAAAAAAAAAAAwECBAcFBgj/2gAIAQEAAAAA9N/HAAAAV938DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABm+ZyFspagADp0b8+C8AAAOjTORs1zzgABbaVptL6bR1AABTOlY5pjEwAABRvPeIAAALaV5wAAAHVzYAAAAWiAAAAWiAAAAWiAAABTbOMSAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsgAAAH2fY/AwAAAPr/ANe//8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/2gAIAQIQAAAA9tABnQAAAAAAAipQCBQAhQASgAAAAAAAAAAADOgAc//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQMQAAAA4gAWAAAAAAAAAAAAAAAAAAAAAAAAAAAAsABr/8QAMBAAAgECAwYDCAMBAAAAAAAAAQIDABEEEjEFEyFAQVEGIzIiM1JhYnGRoQcgcCT/2gAIAQEAAT8A8XeLdoeI9o4n/pkXZySMuHgVrIEB4FgNWPNQzzYaVZsPM8Uqm6vGxVgfkRXhf+VooNlJB4gZ5sZG7KJerp0LfP8A00AsQBrQjjUgO12PQUwgDFCCKeLKMynMvf8ArCAC0h0UVvlPqjBryG+JacKD7LXHIxZUUu3U2FOhXzFbML60Sskl72B71vlByhfLtaja5tp/R/YjVOp4nlMrPCgUXIY08eQC7C/aokRyVYm/SiIASDnryO7V5Hdq8ju1IsLNwzd+NO0LsWJavI+qpEjRQRe50B5KJwt1Y2BpYmEovxGt6ZruWHeiN8uYesaitxJ2rcSdqZGQ2ao0bdMVHFq3Enalj3d3k6aCmYuSx5NZXTQ8KaVnFiBSsUIIqQXG8Qmx1HY1c96UFmA71M3tBV0UWqNSxuTZRqakfOfpGg5eN8h+k6ipEyEEG6nQ1FZQ8h6DhSqXa1SMLCNPSP2eZjcWMb+k/qmRlbJbj0piIlyKfaPqPNq53RbUrwBo3JJ5tfcSfcc4vuJPuOcX3En3HNJIUvYA/cVv2+FfxW/f4V/Fb9vhX8U0rMCLL/mk0MmHmmgmUrJE7I69mU2I5vZ3h/a21YHxGAwkksSuULKpIDAA24D51/KfhjZMcMniGBHjxcsuWQI3lucvqI781sLAQ7U2phMFOzrHK1mKEBv2DWx9j4HYuAh2fs+LdYaO5AvcsTqxPUmv/8QAGxEAAgMAAwAAAAAAAAAAAAAAAQIREjAAMXD/2gAIAQIBAT8AAAEDVlDd+UqbCdXekc//xAAYEQEAAwEAAAAAAAAAAAAAAAABABEwcP/aAAgBAwEBPwDUa5Slahc//9k="}}]);
//# sourceMappingURL=827.df1d038e.chunk.js.map