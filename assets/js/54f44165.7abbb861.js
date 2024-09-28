"use strict";(self.webpackChunk_fugletrader_source=self.webpackChunk_fugletrader_source||[]).push([[924],{9997:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(4848),l=t(8453);const a={sidebar_position:1},i="\u5b89\u88dd\u8aaa\u660e",s={id:"getting-started/installation",title:"\u5b89\u88dd\u8aaa\u660e",description:"\u5728\u4f7f\u7528 FugleTrader \u4e4b\u524d\uff0c\u8acb\u6309\u7167\u4ee5\u4e0b\u6b65\u9a5f\u5b8c\u6210\u5b89\u88dd\u3002",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/fugletrader/docs/getting-started/installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5165\u9580",permalink:"/fugletrader/docs/category/\u5feb\u901f\u5165\u9580"},next:{title:"\u5feb\u901f\u958b\u59cb",permalink:"/fugletrader/docs/getting-started/quick-start"}},d={},c=[{value:"\u4e0b\u8f09 FugleTrader API \u6620\u50cf\u6a94",id:"\u4e0b\u8f09-fugletrader-api-\u6620\u50cf\u6a94",level:2},{value:"\u5b89\u88dd FugleTrader CLI \u5ba2\u6236\u7aef",id:"\u5b89\u88dd-fugletrader-cli-\u5ba2\u6236\u7aef",level:2},{value:"\u65b9\u5f0f\u4e00\uff1a\u900f\u904e Docker \u5b89\u88dd CLI",id:"\u65b9\u5f0f\u4e00\u900f\u904e-docker-\u5b89\u88dd-cli",level:3},{value:"\u65b9\u5f0f\u4e8c\uff1a\u900f\u904e npm \u5b89\u88dd CLI\uff08\u63a8\u85a6\uff09",id:"\u65b9\u5f0f\u4e8c\u900f\u904e-npm-\u5b89\u88dd-cli\u63a8\u85a6",level:3}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u5b89\u88dd\u8aaa\u660e",children:"\u5b89\u88dd\u8aaa\u660e"}),"\n",(0,n.jsx)(r.p,{children:"\u5728\u4f7f\u7528 FugleTrader \u4e4b\u524d\uff0c\u8acb\u6309\u7167\u4ee5\u4e0b\u6b65\u9a5f\u5b8c\u6210\u5b89\u88dd\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"\u4e0b\u8f09-fugletrader-api-\u6620\u50cf\u6a94",children:"\u4e0b\u8f09 FugleTrader API \u6620\u50cf\u6a94"}),"\n",(0,n.jsx)(r.p,{children:"\u9996\u5148\uff0c\u60a8\u9700\u8981\u900f\u904e Docker \u4e0b\u8f09 FugleTrader API \u4f3a\u670d\u5668\u7684\u6620\u50cf\u6a94\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"docker pull chunkai1312/fugletrader-api:latest\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u5b89\u88dd-fugletrader-cli-\u5ba2\u6236\u7aef",children:"\u5b89\u88dd FugleTrader CLI \u5ba2\u6236\u7aef"}),"\n",(0,n.jsx)(r.p,{children:"\u63a5\u4e0b\u4f86\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u4ee5\u4e0b\u4efb\u4e00\u65b9\u5f0f\u4f86\u5b89\u88dd\u8207 API \u4e92\u52d5\u7684 CLI \u5de5\u5177\uff1a"}),"\n",(0,n.jsx)(r.h3,{id:"\u65b9\u5f0f\u4e00\u900f\u904e-docker-\u5b89\u88dd-cli",children:"\u65b9\u5f0f\u4e00\uff1a\u900f\u904e Docker \u5b89\u88dd CLI"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"docker pull chunkai1312/fugletrader-api:latest\n"})}),"\n",(0,n.jsx)(r.h3,{id:"\u65b9\u5f0f\u4e8c\u900f\u904e-npm-\u5b89\u88dd-cli\u63a8\u85a6",children:"\u65b9\u5f0f\u4e8c\uff1a\u900f\u904e npm \u5b89\u88dd CLI\uff08\u63a8\u85a6\uff09"}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u60a8\u7684\u7cfb\u7d71\u5df2\u5b89\u88dd ",(0,n.jsx)(r.a,{href:"https://nodejs.org",children:"Node.js"}),"\uff0c\u53ef\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"npm"})," \u6307\u4ee4\u4f86\u5b89\u88dd CLI\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm install -g fugletrader-cli\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5b8c\u6210\u5b89\u88dd\u5f8c\uff0c\u60a8\u5373\u53ef\u4f7f\u7528 FugleTrader \u9032\u884c\u5373\u6642\u80a1\u7968\u4ea4\u6613\u53ca\u8cc7\u6599\u7ba1\u7406\u3002"})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(6540);const l={},a=n.createContext(l);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);