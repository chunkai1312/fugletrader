"use strict";(self.webpackChunk_fugletrader_source=self.webpackChunk_fugletrader_source||[]).push([[4324],{4631:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var r=d(4848),s=d(8453);const c={sidebar_position:1},i="\u5feb\u901f\u958b\u59cb",l={id:"getting-started/quick-start",title:"\u5feb\u901f\u958b\u59cb",description:"\u6700\u5feb\u901f\u555f\u52d5 FugleTrader \u7684\u65b9\u5f0f\u662f\u4f7f\u7528 docker-compose\uff1a",source:"@site/docs/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/fugletrader/docs/getting-started/quick-start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88dd\u8aaa\u660e",permalink:"/fugletrader/docs/getting-started/installation"},next:{title:"\u4e0b\u55ae\u59d4\u8a17",permalink:"/fugletrader/docs/getting-started/place-order"}},t={},h=[{value:"\u555f\u52d5 FugleTrader API \u4f3a\u670d\u5668",id:"\u555f\u52d5-fugletrader-api-\u4f3a\u670d\u5668",level:2},{value:"\u4f7f\u7528 FugleTrader CLI \u5ba2\u6236\u7aef",id:"\u4f7f\u7528-fugletrader-cli-\u5ba2\u6236\u7aef",level:2},{value:"CLI \u6307\u4ee4\u7e3d\u89bd",id:"cli-\u6307\u4ee4\u7e3d\u89bd",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5feb\u901f\u958b\u59cb",children:"\u5feb\u901f\u958b\u59cb"}),"\n",(0,r.jsxs)(n.p,{children:["\u6700\u5feb\u901f\u555f\u52d5 FugleTrader \u7684\u65b9\u5f0f\u662f\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"docker-compose"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'version: "3"\n\nservices:\n  api:\n    image: chunkai1312/fugletrader-api:latest\n    ports:\n      - "3000:3000"\n    environment:\n      - FUGLE_TRADE_CERT_PATH=${FUGLE_TRADE_CERT_PATH}\n      - FUGLE_TRADE_API_URL=${FUGLE_TRADE_API_URL}\n      - FUGLE_TRADE_API_KEY=${FUGLE_TRADE_API_KEY}\n      - FUGLE_TRADE_API_SECRET=${FUGLE_TRADE_API_SECRET}\n      - FUGLE_TRADE_AID=${FUGLE_TRADE_AID}\n      - FUGLE_TRADE_PASSWORD=${FUGLE_TRADE_PASSWORD}\n      - FUGLE_TRADE_CERT_PASS=${FUGLE_TRADE_CERT_PASS}\n      - FUGLE_MARKETDATA_API_KEY=${FUGLE_MARKETDATA_API_KEY}\n      - LINE_NOTIFY_ENABLED=${LINE_NOTIFY_ENABLED}\n      - LINE_NOTIFY_ACCESS_TOKEN=${LINE_NOTIFY_ACCESS_TOKEN}\n      - NGROK_ENABLED=${NGROK_ENABLED}\n      - NGROK_AUTHTOKEN=${NGROK_AUTHTOKEN}\n    volumes:\n      - ./certs:/app/certs\n    restart: always\n\n  cli:\n    image: chunkai1312/fugletrader-cli:latest\n    stdin_open: true\n    tty: true\n    environment:\n      - FUGLETRADER_API_URL=${FUGLETRADER_API_URL}\n\nvolumes:\n  certs:\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u74b0\u5883\u8b8a\u6578\u8aaa\u660e\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_TRADE_CERT_PATH"}),": \u60a8\u7684\u4ea4\u6613\u6191\u8b49\u8def\u5f91\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_TRADE_API_URL"}),": \u5bcc\u679c\u4ea4\u6613 API URL\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_TRADE_API_KEY"}),": \u60a8\u7684\u5bcc\u679c\u4ea4\u6613 API \u91d1\u9470\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_TRADE_API_SECRET"}),": \u60a8\u7684\u5bcc\u679c\u4ea4\u6613 API \u79c1\u9470\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_TRADE_AID"}),": \u60a8\u7684\u8b49\u5238\u5e33\u6236 ID\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_TRADE_PASSWORD"}),": \u60a8\u7684\u8b49\u5238\u5e33\u6236\u5bc6\u78bc\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_TRADE_CERT_PASS"}),": \u60a8\u7684\u4ea4\u6613\u6191\u8b49\u5bc6\u78bc\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLE_MARKETDATA_API_KEY"}),": \u60a8\u7684\u5bcc\u679c\u884c\u60c5 API \u91d1\u9470\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LINE_NOTIFY_ENABLED"}),": \uff08\u53ef\u9078\uff09\u662f\u5426\u555f\u7528 LINE Notify \u901a\u77e5\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"LINE_NOTIFY_ACCESS_TOKEN"}),": \uff08\u53ef\u9078\uff09\u60a8\u7684 LINE Notify \u5b58\u53d6\u6b0a\u6756\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NGROK_ENABLED"}),": \uff08\u53ef\u9078\uff09\u662f\u5426\u555f\u7528 ngrok \u901a\u9053\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"NGROK_AUTHTOKEN"}),": \uff08\u53ef\u9078\uff09\u60a8\u7684 ngrok Authtoken\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"FUGLETRADER_API_URL"}),": CLI \u4f7f\u7528\u7684 FugleTrader API URL\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u555f\u52d5-fugletrader-api-\u4f3a\u670d\u5668",children:"\u555f\u52d5 FugleTrader API \u4f3a\u670d\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u555f\u52d5 FugleTrader API \u4f3a\u670d\u5668\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up api\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528-fugletrader-cli-\u5ba2\u6236\u7aef",children:"\u4f7f\u7528 FugleTrader CLI \u5ba2\u6236\u7aef"}),"\n",(0,r.jsx)(n.p,{children:"\u7576 FugleTrader API \u4f3a\u670d\u5668\u555f\u52d5\u5f8c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 CLI \u8207\u5176\u4e92\u52d5\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose run --rm cli --help\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u82e5\u60a8\u5df2\u7d93\u900f\u904e ",(0,r.jsx)(n.code,{children:"npm"})," \u5168\u57df\u5b89\u88dd\u4e86 CLI\uff0c\u5247\u53ef\u4ee5\u57f7\u884c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"fugletrader --help\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\u4f86\u8a2d\u5b9a ",(0,r.jsx)(n.code,{children:"FUGLETRADER_API_URL"}),"\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"fugletrader config set FUGLETRADER_API_URL=<YOUR_FUGLETRADER_API_URL>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:d(8627).A+"",width:"1364",height:"930"})}),"\n",(0,r.jsx)(n.h2,{id:"cli-\u6307\u4ee4\u7e3d\u89bd",children:"CLI \u6307\u4ee4\u7e3d\u89bd"}),"\n",(0,r.jsxs)(n.p,{children:["\u57f7\u884c ",(0,r.jsx)(n.code,{children:"fugletrader <command> --help"})," \u4f86\u67e5\u770b\u5404\u6307\u4ee4\u7684\u9078\u9805\u8aaa\u660e\u3002\u66f4\u591a\u8a73\u7d30\u5167\u5bb9\u8acb\u53c3\u95b1 ",(0,r.jsx)(n.a,{href:"/fugletrader/docs/cli-command-reference",children:"CLI \u6307\u4ee4\u53c3\u8003"}),"\u3002"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Command"}),(0,r.jsx)(n.th,{children:"Alias"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"quote"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"q"})}),(0,r.jsx)(n.td,{children:"\u986f\u793a\u6700\u65b0\u80a1\u50f9\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"watchlist"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"w"})}),(0,r.jsx)(n.td,{children:"\u7ba1\u7406\u89c0\u5bdf\u6e05\u55ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"place"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"trade"})}),(0,r.jsx)(n.td,{children:"\u59d4\u8a17\u4e0b\u55ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"replace"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u4fee\u6539\u9032\u884c\u4e2d\u7684\u59d4\u8a17\u55ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cancel"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u53d6\u6d88\u9032\u884c\u4e2d\u7684\u59d4\u8a17\u55ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"orders"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u986f\u793a\u73fe\u6709\u7684\u59d4\u8a17\u55ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"transactions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"tx"})}),(0,r.jsx)(n.td,{children:"\u986f\u793a\u4ea4\u6613\u7d00\u9304\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"inventories"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"positions"})}),(0,r.jsx)(n.td,{children:"\u986f\u793a\u5eab\u5b58\u640d\u76ca\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"settlements"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u986f\u793a\u4ea4\u5272\u8cc7\u8a0a\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"balance"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u986f\u793a\u9280\u884c\u9918\u984d\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"webhook"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u8a2d\u5b9a Webhook\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"config"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u914d\u7f6e\u8a2d\u5b9a\u8b8a\u6578\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"help"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"\u986f\u793a\u5e6b\u52a9\u8cc7\u8a0a\u3002"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8627:(e,n,d)=>{d.d(n,{A:()=>r});const r=d.p+"assets/images/fugletrader-50bf2d36cd3b08bcfd04bd6be1bbc594.png"},8453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>l});var r=d(6540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);