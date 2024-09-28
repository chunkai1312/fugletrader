"use strict";(self.webpackChunk_fugletrader_source=self.webpackChunk_fugletrader_source||[]).push([[537],{7342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var s=r(4848),n=r(8453);const i={sidebar_position:1},o="\u7533\u8acb Fugle API",a={id:"prerequisites/fugle-api",title:"\u7533\u8acb Fugle API",description:"\u5bcc\u679c\u4ea4\u6613 API \u662f\u7531\u5bcc\u679c\u6280\u8853\u5718\u968a\u8207\u7389\u5c71\u8b49\u5238\u5408\u4f5c\u958b\u767c\u7684\u7a0b\u5f0f\u4ea4\u6613 API\u3002\u4f60\u53ef\u4ee5\u5728 Windows\u3001Mac \u548c Linux \u5e73\u53f0\u4e0a\u5229\u7528\u5bcc\u679c\u63d0\u4f9b\u7684 SDK\uff0c\u5728\u53f0\u7063\u80a1\u7968\u5e02\u5834\u9032\u884c\u7a0b\u5f0f\u4ea4\u6613\u3002\u53ea\u8981\u4f60\u5b8c\u6210\u958b\u7acb\u7389\u5c71\u8b49\u5238\u5bcc\u679c\u5e33\u6236\uff0c\u4e26\u7c3d\u7f72\u300cAPI \u670d\u52d9\u7533\u8acb\u540c\u610f\u66f8\u300d\uff0c\u5c31\u53ef\u4ee5\u900f\u904e\u7dda\u4e0a\u7533\u8acb\u53d6\u5f97\u4ea4\u6613\u6b0a\u9650\u3002",source:"@site/docs/prerequisites/fugle-api.md",sourceDirName:"prerequisites",slug:"/prerequisites/fugle-api",permalink:"/fugletrader/docs/prerequisites/fugle-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u524d\u6e96\u5099",permalink:"/fugletrader/docs/category/\u4e8b\u524d\u6e96\u5099"},next:{title:"\u5efa\u7acb Docker \u74b0\u5883",permalink:"/fugletrader/docs/prerequisites/docker"}},c={},u=[{value:"\u4f7f\u7528\u5bcc\u679c\u4ea4\u6613 API",id:"\u4f7f\u7528\u5bcc\u679c\u4ea4\u6613-api",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u7533\u8acb-fugle-api",children:"\u7533\u8acb Fugle API"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://fugletradingapi.esunsec.com.tw/keys/Home/Index",children:"\u5bcc\u679c\u4ea4\u6613 API"})," \u662f\u7531\u5bcc\u679c\u6280\u8853\u5718\u968a\u8207\u7389\u5c71\u8b49\u5238\u5408\u4f5c\u958b\u767c\u7684\u7a0b\u5f0f\u4ea4\u6613 API\u3002\u4f60\u53ef\u4ee5\u5728 Windows\u3001Mac \u548c Linux \u5e73\u53f0\u4e0a\u5229\u7528\u5bcc\u679c\u63d0\u4f9b\u7684 SDK\uff0c\u5728\u53f0\u7063\u80a1\u7968\u5e02\u5834\u9032\u884c\u7a0b\u5f0f\u4ea4\u6613\u3002\u53ea\u8981\u4f60\u5b8c\u6210\u958b\u7acb\u7389\u5c71\u8b49\u5238\u5bcc\u679c\u5e33\u6236\uff0c\u4e26\u7c3d\u7f72\u300c",(0,s.jsx)(t.strong,{children:"API \u670d\u52d9\u7533\u8acb\u540c\u610f\u66f8"}),"\u300d\uff0c\u5c31\u53ef\u4ee5\u900f\u904e\u7dda\u4e0a\u7533\u8acb\u53d6\u5f97\u4ea4\u6613\u6b0a\u9650\u3002"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Fugle Trade",src:r(7403).A+"",width:"1708",height:"960"})}),"\n",(0,s.jsx)(t.h2,{id:"\u4f7f\u7528\u5bcc\u679c\u4ea4\u6613-api",children:"\u4f7f\u7528\u5bcc\u679c\u4ea4\u6613 API"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u9032\u884c\u6b63\u5f0f\u4ea4\u6613\u524d\uff0c\u4f60\u9700\u8981\u5148\u5b8c\u6210\u5bcc\u679c\u4ea4\u6613 API \u6587\u4ef6\u4e2d\u7684 ",(0,s.jsx)(t.a,{href:"https://developer.fugle.tw/docs/trading/prerequisites",children:"\u4e8b\u524d\u6e96\u5099"}),"\uff0c\u5305\u542b ",(0,s.jsx)(t.strong,{children:"\u7533\u8acb\u4f7f\u7528\u4ea4\u6613 API \u670d\u52d9"}),"\uff0c\u4e26\u4e14\u9032\u884c ",(0,s.jsx)(t.strong,{children:"\u6a21\u64ec\u6e2c\u8a66"}),"\uff0c\u4ee5\u78ba\u4fdd\u7a0b\u5f0f\u904b\u4f5c\u6b63\u5e38\u3002\u5b8c\u6210\u9019\u4e9b\u6b65\u9a5f\u5f8c\uff0c\u5373\u53ef\u7372\u5f97\u6b63\u5f0f\u74b0\u5883\u4ea4\u6613\u6b0a\u9650\uff0c\u958b\u59cb\u9ad4\u9a57\u7a0b\u5f0f\u4ea4\u6613\u6240\u5e36\u4f86\u7684\u4fbf\u6377\u8207\u6548\u7387\u3002"]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7403:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/fugle-trade-0a523c7a0fa38f99bfdee675122797f9.png"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(6540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);