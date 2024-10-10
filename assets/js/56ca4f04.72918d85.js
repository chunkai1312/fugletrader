"use strict";(self.webpackChunk_fugletrader_source=self.webpackChunk_fugletrader_source||[]).push([[1396],{968:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var l=n(4848),i=n(8453);const t={slug:"2024/10/10/using-fugletrader-cli-command-manage-watchlist",title:"\u4f7f\u7528 FugleTrader CLI \u6307\u4ee4\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae",authors:["kevin.wang"],tags:["fugletrader","cli","watchlist"]},r=void 0,d={permalink:"/fugletrader/blog/2024/10/10/using-fugletrader-cli-command-manage-watchlist",source:"@site/blog/2024-10-10-watchlist/index.md",title:"\u4f7f\u7528 FugleTrader CLI \u6307\u4ee4\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae",description:"\u5728\u80a1\u7968\u4ea4\u6613\u7684\u904e\u7a0b\u4e2d\uff0c\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae\u53ef\u4ee5\u5e6b\u52a9\u6295\u8cc7\u8005\u5feb\u901f\u8ddf\u8e2a\u95dc\u6ce8\u7684\u80a1\u7968\u3002FugleTrader \u7684 watchlist \u6307\u4ee4\u8b93\u60a8\u8f15\u9b06\u5efa\u7acb\u548c\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae\uff0c\u5373\u6642\u76e3\u63a7\u5e02\u5834\u8b8a\u52d5\u3002\u672c\u6587\u5c07\u4ecb\u7d39\u8a72\u6307\u4ee4\u7684\u57fa\u672c\u7528\u6cd5\u8207\u529f\u80fd\uff0c\u5e6b\u52a9\u60a8\u6709\u6548\u7ba1\u7406\u81ea\u9078\u80a1\u3002",date:"2024-10-10T00:00:00.000Z",tags:[{inline:!1,label:"FugleTrader",permalink:"/fugletrader/blog/tags/fugletrader",description:"FugleTrader tag description"},{inline:!1,label:"CLI",permalink:"/fugletrader/blog/tags/cli",description:"CLI tag description"},{inline:!1,label:"Watchlist",permalink:"/fugletrader/blog/tags/watchlist",description:"Watchlist tag description"}],readingTime:4.085,hasTruncateMarker:!0,authors:[{name:"Kevin Wang",title:"Sr. Backend Engineer @ Fugle",url:"https://github.com/chunkai1312",imageURL:"https://github.com/chunkai1312.png",key:"kevin.wang"}],frontMatter:{slug:"2024/10/10/using-fugletrader-cli-command-manage-watchlist",title:"\u4f7f\u7528 FugleTrader CLI \u6307\u4ee4\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae",authors:["kevin.wang"],tags:["fugletrader","cli","watchlist"]},unlisted:!1,nextItem:{title:"FugleTrader v0.3.0",permalink:"/fugletrader/blog/2024/10/06/fugletrader-v0-3-0"}},a={authorsImageUrls:[void 0]},c=[{value:"\u6307\u4ee4\u7c21\u4ecb",id:"\u6307\u4ee4\u7c21\u4ecb",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"Options",id:"options",level:3},{value:"Commands \u5b50\u6307\u4ee4\u4ecb\u7d39",id:"commands-\u5b50\u6307\u4ee4\u4ecb\u7d39",level:2},{value:"\u5217\u51fa\u6240\u6709\u81ea\u9078\u80a1\u6e05\u55ae",id:"\u5217\u51fa\u6240\u6709\u81ea\u9078\u80a1\u6e05\u55ae",level:3},{value:"\u5efa\u7acb\u65b0\u7684\u81ea\u9078\u80a1\u6e05\u55ae",id:"\u5efa\u7acb\u65b0\u7684\u81ea\u9078\u80a1\u6e05\u55ae",level:3},{value:"\u52a0\u5165\u80a1\u7968\u5230\u81ea\u9078\u80a1\u6e05\u55ae",id:"\u52a0\u5165\u80a1\u7968\u5230\u81ea\u9078\u80a1\u6e05\u55ae",level:3},{value:"\u67e5\u770b\u7279\u5b9a\u81ea\u9078\u80a1\u6e05\u55ae",id:"\u67e5\u770b\u7279\u5b9a\u81ea\u9078\u80a1\u6e05\u55ae",level:3},{value:"\u5f9e\u81ea\u9078\u80a1\u6e05\u55ae\u79fb\u9664\u80a1\u7968",id:"\u5f9e\u81ea\u9078\u80a1\u6e05\u55ae\u79fb\u9664\u80a1\u7968",level:3},{value:"\u522a\u9664\u6574\u500b\u81ea\u9078\u80a1\u6e05\u55ae",id:"\u522a\u9664\u6574\u500b\u81ea\u9078\u80a1\u6e05\u55ae",level:3},{value:"\u7d50\u8a9e",id:"\u7d50\u8a9e",level:2}];function h(e){const s={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["\u5728\u80a1\u7968\u4ea4\u6613\u7684\u904e\u7a0b\u4e2d\uff0c\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae\u53ef\u4ee5\u5e6b\u52a9\u6295\u8cc7\u8005\u5feb\u901f\u8ddf\u8e2a\u95dc\u6ce8\u7684\u80a1\u7968\u3002FugleTrader \u7684 ",(0,l.jsx)(s.code,{children:"watchlist"})," \u6307\u4ee4\u8b93\u60a8\u8f15\u9b06\u5efa\u7acb\u548c\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae\uff0c\u5373\u6642\u76e3\u63a7\u5e02\u5834\u8b8a\u52d5\u3002\u672c\u6587\u5c07\u4ecb\u7d39\u8a72\u6307\u4ee4\u7684\u57fa\u672c\u7528\u6cd5\u8207\u529f\u80fd\uff0c\u5e6b\u52a9\u60a8\u6709\u6548\u7ba1\u7406\u81ea\u9078\u80a1\u3002"]}),"\n",(0,l.jsx)(s.h2,{id:"\u6307\u4ee4\u7c21\u4ecb",children:"\u6307\u4ee4\u7c21\u4ecb"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"fugletrader watchlist"})," \u6307\u4ee4\u63d0\u4f9b\u4e86\u7ba1\u7406\u81ea\u9078\u80a1\u6e05\u55ae\u7684\u529f\u80fd\uff0c\u5305\u62ec\u67e5\u770b\u6e05\u55ae\u3001\u5efa\u7acb\u65b0\u7684\u6e05\u55ae\u3001\u52a0\u5165\u6216\u79fb\u9664\u80a1\u7968\uff0c\u4ee5\u53ca\u522a\u9664\u6574\u500b\u6e05\u55ae\u3002\u7121\u8ad6\u60a8\u662f\u65b0\u624b\u6295\u8cc7\u8005\u9084\u662f\u6709\u7d93\u9a57\u7684\u4ea4\u6613\u8005\uff0c\u90fd\u53ef\u4ee5\u900f\u904e\u9019\u4e9b\u7c21\u55ae\u7684\u6307\u4ee4\u4f86\u65b9\u4fbf\u5730\u7ba1\u7406\u60a8\u7684\u81ea\u9078\u80a1\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"Usage: fugletrader watchlist|w [options] [command]\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u9019\u662f ",(0,l.jsx)(s.code,{children:"watchlist"})," \u6307\u4ee4\u7684\u57fa\u672c\u7528\u6cd5\uff0c",(0,l.jsx)(s.code,{children:"fugletrader watchlist"})," \u6216\u5176\u7c21\u5beb\u5f62\u5f0f ",(0,l.jsx)(s.code,{children:"fugletrader w"})," \u90fd\u53ef\u4ee5\u4f7f\u7528\u3002\u63a5\u4e0b\u4f86\u8b93\u6211\u5011\u770b\u770b\u8a72\u6307\u4ee4\u6240\u652f\u63f4\u7684\u9078\u9805\u8207\u5b50\u6307\u4ee4\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"options",children:"Options"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"-h, --help"}),"\uff1a\u986f\u793a\u8a72\u6307\u4ee4\u7684\u5e6b\u52a9\u8cc7\u8a0a\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["\u9019\u662f\u901a\u7528\u7684\u5e6b\u52a9\u9078\u9805\uff0c\u7576\u60a8\u5c0d\u4efb\u4f55\u6307\u4ee4\u4e0d\u78ba\u5b9a\u6642\uff0c\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"--help"})," \u6703\u63d0\u4f9b\u8a73\u7d30\u7684\u6307\u4ee4\u8aaa\u660e\u3002"]}),"\n",(0,l.jsx)(s.h2,{id:"commands-\u5b50\u6307\u4ee4\u4ecb\u7d39",children:"Commands \u5b50\u6307\u4ee4\u4ecb\u7d39"}),"\n",(0,l.jsx)(s.h3,{id:"\u5217\u51fa\u6240\u6709\u81ea\u9078\u80a1\u6e05\u55ae",children:"\u5217\u51fa\u6240\u6709\u81ea\u9078\u80a1\u6e05\u55ae"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"fugletrader watchlist list\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"list"})," \u5b50\u6307\u4ee4\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u67e5\u770b\u6240\u6709\u5df2\u5efa\u7acb\u7684\u81ea\u9078\u80a1\u6e05\u55ae\u3002\u5982\u679c\u60a8\u7ba1\u7406\u591a\u500b\u4e0d\u540c\u7684\u6e05\u55ae\uff0c\u6b64\u6307\u4ee4\u5c07\u662f\u7ba1\u7406\u5b83\u5011\u7684\u7b2c\u4e00\u6b65\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u5efa\u7acb\u65b0\u7684\u81ea\u9078\u80a1\u6e05\u55ae",children:"\u5efa\u7acb\u65b0\u7684\u81ea\u9078\u80a1\u6e05\u55ae"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"fugletrader watchlist new [list-name]\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u82e5\u60a8\u60f3\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u81ea\u9078\u80a1\u6e05\u55ae\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"new"})," \u6307\u4ee4\u3002",(0,l.jsx)(s.code,{children:"list-name"})," \u662f\u9078\u586b\u9805\uff0c\u5982\u679c\u60a8\u672a\u6307\u5b9a\u6e05\u55ae\u540d\u7a31\uff0c\u7cfb\u7d71\u6703\u8acb\u60a8\u6307\u5b9a\u4e00\u500b\u6e05\u55ae\u540d\u7a31\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u7bc4\u4f8b\uff1a"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(7161).A+"",width:"1364",height:"546"})}),"\n",(0,l.jsxs)(s.p,{children:["\u6b64\u7bc4\u4f8b\u5efa\u7acb\u4e86\u4e00\u500b\u540d\u70ba ",(0,l.jsx)(s.code,{children:"\u6676\u5713\u4ee3\u5de5"})," \u7684\u6e05\u55ae\uff0c\u5c08\u9580\u7528\u4f86\u8ffd\u8e64\u6676\u5713\u4ee3\u5de5\u6982\u5ff5\u80a1\u3002"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(9661).A+"",width:"1364",height:"546"})}),"\n",(0,l.jsx)(s.h3,{id:"\u52a0\u5165\u80a1\u7968\u5230\u81ea\u9078\u80a1\u6e05\u55ae",children:"\u52a0\u5165\u80a1\u7968\u5230\u81ea\u9078\u80a1\u6e05\u55ae"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"fugletrader watchlist add [list-name]\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u7576\u60a8\u6709\u65b0\u7684\u80a1\u7968\u60f3\u52a0\u5165\u67d0\u500b\u81ea\u9078\u80a1\u6e05\u55ae\u6642\uff0c\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"add"})," \u6307\u4ee4\u4f86\u5b8c\u6210\u3002\u53ea\u9700\u63d0\u4f9b\u6e05\u55ae\u540d\u7a31\u53ca\u80a1\u7968\u4ee3\u78bc\uff0c\u5373\u53ef\u5c07\u80a1\u7968\u52a0\u5165\u9032\u53bb\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u7bc4\u4f8b\uff1a"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(7266).A+"",width:"1364",height:"514"})}),"\n",(0,l.jsxs)(s.p,{children:["\u9019\u5c07\u628a ",(0,l.jsx)(s.strong,{children:"\u529b\u7a4d\u96fb\uff086770\uff09"})," \u80a1\u7968\u52a0\u5165\u81f3 ",(0,l.jsx)(s.code,{children:"\u6676\u5713\u4ee3\u5de5"})," \u6e05\u55ae\u4e2d\u3002"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(5686).A+"",width:"1364",height:"546"})}),"\n",(0,l.jsx)(s.h3,{id:"\u67e5\u770b\u7279\u5b9a\u81ea\u9078\u80a1\u6e05\u55ae",children:"\u67e5\u770b\u7279\u5b9a\u81ea\u9078\u80a1\u6e05\u55ae"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"fugletrader watchlist view [list-name]\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"view"})," \u6307\u4ee4\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b\u7279\u5b9a\u6e05\u55ae\u4e2d\u7684\u6240\u6709\u80a1\u7968\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u7bc4\u4f8b\uff1a"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(9320).A+"",width:"2134",height:"770"})}),"\n",(0,l.jsxs)(s.p,{children:["\u9019\u5c07\u986f\u793a ",(0,l.jsx)(s.code,{children:"\u6676\u5713\u4ee3\u5de5"})," \u6e05\u55ae\u4e2d\u7684\u6240\u6709\u80a1\u7968\u3002"]}),"\n",(0,l.jsx)(s.h3,{id:"\u5f9e\u81ea\u9078\u80a1\u6e05\u55ae\u79fb\u9664\u80a1\u7968",children:"\u5f9e\u81ea\u9078\u80a1\u6e05\u55ae\u79fb\u9664\u80a1\u7968"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"fugletrader watchlist remove [list-name]\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u4e0d\u518d\u95dc\u6ce8\u67d0\u4e9b\u80a1\u7968\uff0c\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"remove"})," \u6307\u4ee4\u53ef\u4ee5\u5c07\u5b83\u5011\u5f9e\u6e05\u55ae\u4e2d\u79fb\u9664\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u7bc4\u4f8b\uff1a"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(3475).A+"",width:"1364",height:"514"})}),"\n",(0,l.jsxs)(s.p,{children:["\u9019\u5c07\u628a ",(0,l.jsx)(s.strong,{children:"\u529b\u7a4d\u96fb\uff086770\uff09"})," \u80a1\u7968\u5f9e ",(0,l.jsx)(s.code,{children:"\u6676\u5713\u4ee3\u5de5"})," \u6e05\u55ae\u4e2d\u79fb\u9664\u3002"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(2623).A+"",width:"1364",height:"546"})}),"\n",(0,l.jsx)(s.h3,{id:"\u522a\u9664\u6574\u500b\u81ea\u9078\u80a1\u6e05\u55ae",children:"\u522a\u9664\u6574\u500b\u81ea\u9078\u80a1\u6e05\u55ae"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"fugletrader watchlist delete [list-name]\n"})}),"\n",(0,l.jsxs)(s.p,{children:["\u5982\u679c\u67d0\u500b\u81ea\u9078\u80a1\u6e05\u55ae\u5df2\u7d93\u4e0d\u518d\u9700\u8981\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"delete"})," \u6307\u4ee4\u5c07\u8a72\u6e05\u55ae\u522a\u9664\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u7bc4\u4f8b\uff1a"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(7906).A+"",width:"1364",height:"482"})}),"\n",(0,l.jsxs)(s.p,{children:["\u6b64\u6307\u4ee4\u5c07\u522a\u9664 ",(0,l.jsx)(s.code,{children:"\u6676\u5713\u4ee3\u5de5"})," \u6e05\u55ae\u53ca\u5176\u5167\u5bb9\u3002"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(1296).A+"",width:"1364",height:"482"})}),"\n",(0,l.jsx)(s.h2,{id:"\u7d50\u8a9e",children:"\u7d50\u8a9e"}),"\n",(0,l.jsxs)(s.p,{children:["\u900f\u904e\u4f7f\u7528 ",(0,l.jsx)(s.code,{children:"fugletrader watchlist"})," \u6307\u4ee4\uff0c\u60a8\u53ef\u4ee5\u65b9\u4fbf\u5730\u5efa\u7acb\u3001\u7ba1\u7406\u548c\u67e5\u770b\u60a8\u7684\u81ea\u9078\u80a1\u6e05\u55ae\uff0c\u8f15\u9b06\u8ffd\u8e64\u5e02\u5834\u8b8a\u5316\u3002\u7121\u8ad6\u662f\u52a0\u5165\u65b0\u80a1\u7968\u9084\u662f\u79fb\u9664\u4e0d\u518d\u95dc\u6ce8\u7684\u6a19\u7684\uff0c\u9019\u4e9b\u529f\u80fd\u90fd\u80fd\u5e6b\u52a9\u60a8\u66f4\u9748\u6d3b\u5730\u7ba1\u7406\u6295\u8cc7\u7d44\u5408\u3002"]}),"\n",(0,l.jsx)(s.p,{children:"\u958b\u59cb\u4f7f\u7528\u9019\u4e9b\u6307\u4ee4\uff0c\u70ba\u60a8\u7684\u6295\u8cc7\u65c5\u7a0b\u589e\u6dfb\u4fbf\u5229\u5427\uff01"})]})}function g(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7266:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-add-1538bfb4fe752b58f14ac231a272351a.png"},7906:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-delete-08cca679abacdb8bd70cbcd0bdfa708d.png"},9661:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-list-1-25c3e8f09633eff22822db1a79299e2a.png"},5686:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-list-2-8f133ebbf0ac7b52e157197007e3d215.png"},2623:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-list-3-870523e12b86673a49b3dac7b089baca.png"},1296:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-list-4-9a3a5a48a534a8629881e504bba685d1.png"},7161:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-new-fb5013a1621110350af92ea3ca45916c.png"},3475:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-remove-08499df8e501788fffc0cb0f313994bf.png"},9320:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/fugletrader-watchlist-view-6c8358026900de4c40539eb647f9d106.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var l=n(6540);const i={},t=l.createContext(i);function r(e){const s=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:s},e.children)}}}]);