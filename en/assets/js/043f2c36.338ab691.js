"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[9297],{74043:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(85893),i=t(11151);const o={sidebar_position:15},c="influx",s={id:"reference/configuration/influx",title:"influx",description:"Defines the configuration required to write data to Influx.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/influx.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/influx",permalink:"/en/docs/reference/configuration/influx",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/influx.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"mqtt",permalink:"/en/docs/reference/configuration/mqtt"},next:{title:"sponsortoken",permalink:"/en/docs/reference/configuration/sponsortoken"}},l={},u=[{value:"InfluxDB v1.8.x",id:"influxdb-v18x",level:2},{value:"InfluxDB v2.x",id:"influxdb-v2x",level:2}];function a(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"influx",children:(0,r.jsx)(e.code,{children:"influx"})}),"\n",(0,r.jsx)(e.p,{children:"Defines the configuration required to write data to Influx."}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"influxdb-v18x",children:"InfluxDB v1.8.x"}),"\n",(0,r.jsx)(e.admonition,{type:"important",children:(0,r.jsx)(e.p,{children:"Requires at least InfluxDB 1.8.3"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Example for Influx v1"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"influx:\n  url: http://localhost:8086\n  database: evcc\n  # user:\n  # password:\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"influxdb-v2x",children:"InfluxDB v2.x"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Example for Influx v2"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"influx:\n  url: http://localhost:8086\n  database: evcc # InfluxDB v2.x uses the term `bucket`, but for compatibility, it's still named `database` here\n  token: 1234567890abcdef\n  org: home\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>c});var r=t(67294);const i={},o=r.createContext(i);function c(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);