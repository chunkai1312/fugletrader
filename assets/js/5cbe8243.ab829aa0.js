"use strict";(self.webpackChunk_fugletrader_source=self.webpackChunk_fugletrader_source||[]).push([[89],{3984:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"FugleTrader","href":"/fugletrader/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"\u4e8b\u524d\u6e96\u5099","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u7533\u8acb Fugle API","href":"/fugletrader/docs/prerequisites/fugle-api","docId":"prerequisites/fugle-api","unlisted":false},{"type":"link","label":"\u5efa\u7acb Docker \u74b0\u5883","href":"/fugletrader/docs/prerequisites/docker","docId":"prerequisites/docker","unlisted":false},{"type":"link","label":"\u555f\u7528 LINE Notify (\u53ef\u9078)","href":"/fugletrader/docs/prerequisites/line-notify","docId":"prerequisites/line-notify","unlisted":false},{"type":"link","label":"\u555f\u7528 ngrok (\u53ef\u9078)","href":"/fugletrader/docs/prerequisites/ngrok","docId":"prerequisites/ngrok","unlisted":false}],"href":"/fugletrader/docs/category/\u4e8b\u524d\u6e96\u5099"},{"type":"category","label":"\u5feb\u901f\u5165\u9580","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u5b89\u88dd\u8aaa\u660e","href":"/fugletrader/docs/getting-started/installation","docId":"getting-started/installation","unlisted":false},{"type":"link","label":"\u5feb\u901f\u958b\u59cb","href":"/fugletrader/docs/getting-started/quick-start","docId":"getting-started/quick-start","unlisted":false},{"type":"link","label":"\u4e0b\u55ae\u59d4\u8a17","href":"/fugletrader/docs/getting-started/place-order","docId":"getting-started/place-order","unlisted":false}],"href":"/fugletrader/docs/category/\u5feb\u901f\u5165\u9580"},{"type":"link","label":"CLI \u6307\u4ee4\u53c3\u8003","href":"/fugletrader/docs/cli-command-reference","docId":"cli-command-reference","unlisted":false}]},"docs":{"cli-command-reference":{"id":"cli-command-reference","title":"CLI \u6307\u4ee4\u53c3\u8003","description":"fugletrader buy","sidebar":"tutorialSidebar"},"getting-started/installation":{"id":"getting-started/installation","title":"\u5b89\u88dd\u8aaa\u660e","description":"\u5728\u958b\u59cb\u4f7f\u7528 FugleTrader \u524d\uff0c\u8acb\u6309\u7167\u4ee5\u4e0b\u6b65\u9a5f\u9032\u884c\u5b89\u88dd\u3002","sidebar":"tutorialSidebar"},"getting-started/place-order":{"id":"getting-started/place-order","title":"\u4e0b\u55ae\u59d4\u8a17","description":"\u5728\u672c\u7bc0\u4e2d\uff0c\u6211\u5011\u5c07\u70ba\u60a8\u793a\u7bc4\u5982\u4f55\u4f7f\u7528 FugleTrader CLI \u9032\u884c\u4e0b\u55ae\u59d4\u8a17\u64cd\u4f5c\u3002","sidebar":"tutorialSidebar"},"getting-started/quick-start":{"id":"getting-started/quick-start","title":"\u5feb\u901f\u958b\u59cb","description":"\u6700\u5feb\u7684\u65b9\u5f0f\u662f\u4f7f\u7528 docker-compose\uff1a","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"FugleTrader","description":"\u6b61\u8fce\u4f86\u5230 FugleTrader \u6559\u5b78\uff01\u5728\u672c\u6307\u5357\u4e2d\uff0c\u60a8\u5c07\u5b78\u7fd2\u5982\u4f55\u6709\u6548\u5730\u4f7f\u7528 FugleTrader CLI \u5de5\u5177\u8207\u5bcc\u679c API \u9032\u884c\u7121\u7e2b\u4e92\u52d5\u3002\u672c\u6559\u5b78\u5c07\u70ba\u60a8\u63d0\u4f9b\u9010\u6b65\u7684\u6307\u5c0e\uff0c\u5e6b\u52a9\u60a8\u8a2d\u7f6e\u74b0\u5883\u3001\u57f7\u884c\u4ea4\u6613\u4e26\u6709\u6548\u7ba1\u7406\u6578\u64da\u3002\u8b93\u6211\u5011\u958b\u59cb\u63d0\u5347\u60a8\u7684\u4ea4\u6613\u9ad4\u9a57\u5427\uff01","sidebar":"tutorialSidebar"},"prerequisites/docker":{"id":"prerequisites/docker","title":"\u5efa\u7acb Docker \u74b0\u5883","description":"FugleTrader \u662f\u57fa\u65bc Docker \u904b\u884c\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u5229\u7528\u5bb9\u5668\u5316\u6280\u8853\u5c07\u61c9\u7528\u7a0b\u5f0f\u53ca\u5176\u76f8\u4f9d\u5957\u4ef6\u5c01\u88dd\u5728\u8f15\u91cf\u5bb9\u5668\u4e2d\uff0c\u78ba\u4fdd\u80fd\u5728\u5404\u7a2e\u74b0\u5883\u4e2d\u904b\u884c\uff0c\u5305\u62ec\u672c\u6a5f\u3001\u6e2c\u8a66\u548c\u751f\u7522\u74b0\u5883\u3002\u9019\u7a2e\u6280\u8853\u63d0\u4f9b\u4e86\u4e00\u81f4\u6027\u548c\u53ef\u79fb\u690d\u6027\uff0c\u986f\u8457\u63d0\u5347\u4e86\u90e8\u7f72\u6548\u7387\u4e26\u78ba\u4fdd\u74b0\u5883\u4e4b\u9593\u7684\u4e00\u81f4\u6027\u3002","sidebar":"tutorialSidebar"},"prerequisites/fugle-api":{"id":"prerequisites/fugle-api","title":"\u7533\u8acb Fugle API","description":"\u5bcc\u679c\u4ea4\u6613 API \u662f\u7531\u5bcc\u679c\u6280\u8853\u5718\u968a\u8207\u7389\u5c71\u8b49\u5238\u5408\u4f5c\u958b\u767c\u7684\u7a0b\u5f0f\u4ea4\u6613 API\u3002\u4f60\u53ef\u4ee5\u5728 Windows\u3001Mac \u548c Linux \u5e73\u53f0\u4e0a\u5229\u7528\u5bcc\u679c\u63d0\u4f9b\u7684 SDK\uff0c\u5728\u53f0\u7063\u80a1\u7968\u5e02\u5834\u9032\u884c\u7a0b\u5f0f\u4ea4\u6613\u3002\u53ea\u8981\u4f60\u5b8c\u6210\u958b\u7acb\u7389\u5c71\u8b49\u5238\u5bcc\u679c\u5e33\u6236\uff0c\u4e26\u7c3d\u7f72\u300cAPI \u670d\u52d9\u7533\u8acb\u540c\u610f\u66f8\u300d\uff0c\u5c31\u53ef\u4ee5\u900f\u904e\u7dda\u4e0a\u7533\u8acb\u53d6\u5f97\u4ea4\u6613\u6b0a\u9650\u3002","sidebar":"tutorialSidebar"},"prerequisites/line-notify":{"id":"prerequisites/line-notify","title":"\u555f\u7528 LINE Notify (\u53ef\u9078)","description":"LINE Notify \u662f\u4e00\u500b\u7531 LINE \u63d0\u4f9b\u7684\u670d\u52d9\uff0c\u5141\u8a31\u4f7f\u7528\u8005\u900f\u904e LINE \u61c9\u7528\u7a0b\u5f0f\u63a5\u6536\u5373\u6642\u901a\u77e5\u548c\u8a0a\u606f\u3002FugleTrader \u6574\u5408\u4e86 LINE Notify \u670d\u52d9\uff0c\u8b93\u60a8\u53ef\u4ee5\u5373\u6642\u7372\u53d6\u4e0b\u55ae\u7684\u59d4\u8a17\u56de\u5831\u548c\u6210\u4ea4\u56de\u5831\uff0c\u63d0\u5347\u4ea4\u6613\u7684\u4fbf\u5229\u6027\u8207\u5373\u6642\u6027\u3002","sidebar":"tutorialSidebar"},"prerequisites/ngrok":{"id":"prerequisites/ngrok","title":"\u555f\u7528 ngrok (\u53ef\u9078)","description":"ngrok \u662f\u4e00\u6b3e\u80fd\u5c07\u672c\u5730\u61c9\u7528\u7a0b\u5f0f\u66b4\u9732\u65bc\u7db2\u969b\u7db2\u8def\u4e0a\u7684\u5de5\u5177\u3002\u5b83\u900f\u904e\u5efa\u7acb\u5b89\u5168\u96a7\u9053\uff0c\u8b93\u5916\u90e8\u7528\u6236\u80fd\u5920\u900f\u904e ngrok \u63d0\u4f9b\u7684\u516c\u5171\u7db2\u5740\u8a2a\u554f\u60a8\u672c\u5730\u904b\u884c\u7684\u670d\u52d9\u3002","sidebar":"tutorialSidebar"}}}}')}}]);