"use strict";(self.webpackChunk_fugletrader_source=self.webpackChunk_fugletrader_source||[]).push([[8895],{1959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>g,toc:()=>s});var n=r(4848),i=r(8453);const a={slug:"2024/09/29/how-to-set-up-signal-trading-with-tradingview",title:"\u5982\u4f55\u4f7f\u7528 TradingView \u8a2d\u5b9a\u8a0a\u865f\u4ea4\u6613\uff1f",authors:"kevin.wang",tags:["fugletrader","tradingview","webhook"]},o=void 0,g={permalink:"/fugletrader/blog/2024/09/29/how-to-set-up-signal-trading-with-tradingview",source:"@site/blog/2024-09-29-tradingview/index.md",title:"\u5982\u4f55\u4f7f\u7528 TradingView \u8a2d\u5b9a\u8a0a\u865f\u4ea4\u6613\uff1f",description:"TradingView \u662f\u4e00\u500b\u5f37\u5927\u7684\u7dda\u4e0a\u91d1\u878d\u5e02\u5834\u5206\u6790\u5e73\u53f0\uff0c\u63d0\u4f9b\u591a\u6a23\u5316\u7684\u5716\u8868\u5de5\u5177\u3001\u6280\u8853\u5206\u6790\u6307\u6a19\u3001\u4ea4\u6613\u4fe1\u865f\u53ca\u793e\u7fa4\u4e92\u52d5\u529f\u80fd\u3002\u900f\u904e\u5176 \u5feb\u8a0a (Alerts) \u8207 Webhooks \u529f\u80fd\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u8a2d\u7acb\u8b66\u793a\u6216\u57f7\u884c\u4ea4\u6613\u7b56\u7565\u3002\u7576\u9019\u4e9b\u8b66\u793a\u6216\u7b56\u7565\u88ab\u89f8\u767c\u6642\uff0cTradingView \u6703\u5411 FugleTrader API \u767c\u9001\u4e00\u5247\u5305\u542b\u80a1\u7968\u4ee3\u865f\u3001\u4ea4\u6613\u65b9\u5411\u3001\u50f9\u683c\u3001\u6578\u91cf\u7b49\u8cc7\u8a0a\u7684 Webhook \u8a0a\u606f\uff0c\u8b93 FugleTrader \u81ea\u52d5\u57f7\u884c\u4ea4\u6613\u3002",date:"2024-09-29T00:00:00.000Z",tags:[{inline:!1,label:"FugleTrader",permalink:"/fugletrader/blog/tags/fugletrader",description:"FugleTrader tag description"},{inline:!1,label:"TradingView",permalink:"/fugletrader/blog/tags/tradingview",description:"TradingView tag description"},{inline:!1,label:"Webhook",permalink:"/fugletrader/blog/tags/webhook",description:"Webhook tag description"}],readingTime:4.625,hasTruncateMarker:!0,authors:[{name:"Kevin Wang",title:"Sr. Backend Engineer @ Fugle",url:"https://github.com/chunkai1312",imageURL:"https://github.com/chunkai1312.png",key:"kevin.wang"}],frontMatter:{slug:"2024/09/29/how-to-set-up-signal-trading-with-tradingview",title:"\u5982\u4f55\u4f7f\u7528 TradingView \u8a2d\u5b9a\u8a0a\u865f\u4ea4\u6613\uff1f",authors:"kevin.wang",tags:["fugletrader","tradingview","webhook"]},unlisted:!1,prevItem:{title:"FugleTrader v0.2.0",permalink:"/fugletrader/blog/2024/09/30/fugletrader-v0-2-0"},nextItem:{title:"FugleTrader v0.1.0\uff1a\u57fa\u65bc Docker \u7684\u5bcc\u679c\u4ea4\u6613 API \u5ba2\u6236\u7aef\u61c9\u7528\u7a0b\u5f0f",permalink:"/fugletrader/blog/2024/09/28/fugletrader-v0-1-0"}},l={authorsImageUrls:[void 0]},s=[];function d(e){const t={a:"a",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://tw.tradingview.com",children:"TradingView"})," \u662f\u4e00\u500b\u5f37\u5927\u7684\u7dda\u4e0a\u91d1\u878d\u5e02\u5834\u5206\u6790\u5e73\u53f0\uff0c\u63d0\u4f9b\u591a\u6a23\u5316\u7684\u5716\u8868\u5de5\u5177\u3001\u6280\u8853\u5206\u6790\u6307\u6a19\u3001\u4ea4\u6613\u4fe1\u865f\u53ca\u793e\u7fa4\u4e92\u52d5\u529f\u80fd\u3002\u900f\u904e\u5176 ",(0,n.jsx)(t.strong,{children:"\u5feb\u8a0a (Alerts)"})," \u8207 ",(0,n.jsx)(t.strong,{children:"Webhooks"})," \u529f\u80fd\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u8a2d\u7acb\u8b66\u793a\u6216\u57f7\u884c\u4ea4\u6613\u7b56\u7565\u3002\u7576\u9019\u4e9b\u8b66\u793a\u6216\u7b56\u7565\u88ab\u89f8\u767c\u6642\uff0cTradingView \u6703\u5411 FugleTrader API \u767c\u9001\u4e00\u5247\u5305\u542b\u80a1\u7968\u4ee3\u865f\u3001\u4ea4\u6613\u65b9\u5411\u3001\u50f9\u683c\u3001\u6578\u91cf\u7b49\u8cc7\u8a0a\u7684 Webhook \u8a0a\u606f\uff0c\u8b93 FugleTrader \u81ea\u52d5\u57f7\u884c\u4ea4\u6613\u3002"]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>g});var n=r(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function g(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);