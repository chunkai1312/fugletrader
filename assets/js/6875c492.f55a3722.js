"use strict";(self.webpackChunk_fugletrader_source=self.webpackChunk_fugletrader_source||[]).push([[813],{7713:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(1312),a=n(9022),i=n(4848);function r(e){var t=e.metadata,n=t.previousPage,r=t.nextPage;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.A,{permalink:n,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.A,{permalink:r,title:(0,i.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(7131),a=n(2514),i=n(4848);function r(e){var t=e.items,n=e.component,r=void 0===n?a.A:n;return(0,i.jsx)(i.Fragment,{children:t.map((function(e){var t=e.content;return(0,i.jsx)(s.i,{content:t,children:(0,i.jsx)(r,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);var s=n(4164),a=n(1312),i=n(5846),r=n(1213),l=n(7559),o=n(8774),c=n(4684),d=n(7713),g=n(1463),u=n(3892),p=n(996),h=n(767),m=n(4848);function x(e){var t,n=(t=(0,i.W)().selectMessage,function(e){return t(e,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:n(e.count),tagName:e.label})}function j(e){var t=e.tag,n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.be,{title:n,description:t.description}),(0,m.jsx)(g.A,{tag:"blog_tags_posts"})]})}function b(e){var t=e.tag,n=e.items,s=e.sidebar,i=e.listMetadata,r=x(t);return(0,m.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(p.A,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(h.A,{as:"h1",children:r}),t.description&&(0,m.jsx)("p",{children:t.description}),(0,m.jsx)(o.A,{href:t.allTagsPath,children:(0,m.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.A,{items:n}),(0,m.jsx)(d.A,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,m.jsx)(j,Object.assign({},e)),(0,m.jsx)(b,Object.assign({},e))]})}},996:(e,t,n)=>{n.d(t,{A:()=>p});n(6540);var s=n(4164),a=n(1312),i=n(5260),r=n(4848);function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),g=n(3714);function u(e){var t=e.className;return(0,r.jsx)(g.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function p(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,Object.assign({},e))]})}}}]);