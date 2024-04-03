"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[2428],{47713:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=i(74848),t=i(28453);const s={sidebar_position:1},o="evcc.yaml",a={id:"reference/configuration/index",title:"evcc.yaml",description:"evcc requires a configuration file to describe the system and cannot be used",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/index.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/",permalink:"/en/docs/reference/configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"References",permalink:"/en/docs/reference/"},next:{title:"site",permalink:"/en/docs/reference/configuration/site"}},c={},d=[{value:"Structure",id:"structure",level:3},{value:"How does evcc work? (A look into the innards)",id:"how-does-evcc-work-a-look-into-the-innards",level:3},{value:"Manipulation Options",id:"manipulation-options",level:4},{value:"Site",id:"site",level:3},{value:"Loadpoint",id:"loadpoint",level:3},{value:"Chargers",id:"chargers",level:3},{value:"Meters",id:"meters",level:3},{value:"Vehicles",id:"vehicles",level:3},{value:"HEMS",id:"hems",level:3},{value:"Messaging",id:"messaging",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"evccyaml",children:"evcc.yaml"}),"\n",(0,r.jsxs)(n.p,{children:["evcc requires a configuration file to describe the system and cannot be used\nwithout it. The file itself is written in\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/YAML",children:"YAML"}),", which is a structured,\nhuman-readable, plain text format."]}),"\n",(0,r.jsxs)(n.p,{children:["To create or edit the configuration file, we recommend using a text editor that\nunderstands YAML and thus helps with the formatting and shows any errors, e.g.\ninstance, ",(0,r.jsx)(n.a,{href:"https://code.visualstudio.com",children:"VS Code"})," with the\n",(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml",children:"YAML extension"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file is called by default ",(0,r.jsx)(n.code,{children:"evcc.yaml"})," and is either in the\nsame directory as evcc itself, or on POSIX (e.g. Linux) systems in\n",(0,r.jsx)(n.code,{children:"/etc/evcc.yaml"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For non-standard paths, the filename can be passed as a command line argument,\ne.g. ",(0,r.jsx)(n.code,{children:"evcc -c /home/evcc.yaml"})]}),"\n",(0,r.jsx)(n.h3,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(n.p,{children:["evcc's configuration file contains multiple sections. In order to refer to\nelements in a different section, each device has a ",(0,r.jsx)(n.code,{children:"name"})," parameter, which is a\nfree text field and is used for identification."]}),"\n",(0,r.jsxs)(n.p,{children:["An example file with many parameters can be found here:\n",(0,r.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/blob/master/evcc.dist.yaml",children:"https://github.com/evcc-io/evcc/blob/master/evcc.dist.yaml"})]}),"\n",(0,r.jsx)(n.p,{children:"Here is an overview of the relationship between the most important parts of the\nconfiguration:"}),"\n",(0,r.jsx)(n.mermaid,{chart:'graph TD;\n    site("site (Zuhause)")\n    subgraph loadpoints\n      loadpointA("Carport (charger: KEBA)")\n      loadpointB("Garage (charger: Wallbe)")\n    end\n    subgraph meters\n      meterGrid("Discovergy")\n      meterPV("SMA Tripower")\n      meterBattery("LG RESU")\n    end\n    subgraph vehicles\n      vehicleA("VW ID.4")\n      vehicleB("Renault Zoe")\n      vehicleC("Tesla Model Y")\n    end\n\n    loadpointA -- loadpoint.1 --\x3e site\n    loadpointB -- loadpoint.2 --\x3e site\n\n    vehicleA --\x3e loadpointA\n    vehicleB --\x3e loadpointA\n    vehicleB --\x3e loadpointB\n    vehicleC --\x3e loadpointB\n\n    meterGrid -- meters.grid --\x3e site\n    meterPV -- meters.pvs --\x3e site\n    meterBattery -- meters.batterys --\x3e site'}),"\n",(0,r.jsx)(n.h3,{id:"how-does-evcc-work-a-look-into-the-innards",children:"How does evcc work? (A look into the innards)"}),"\n",(0,r.jsxs)(n.p,{children:["In order for the system to function, an electricity meter is important. This\nallows us to calculate at any point in time the surplus power. Measuring the\ngenerated power is interesting, but has no effect on the function, with\n",(0,r.jsx)(n.a,{href:"/docs/faq#configuration",children:"this exception"})]}),"\n",(0,r.jsx)(n.p,{children:"The surplus power is compared with the minimum power required to charge. If\nthis is sufficient, the charging process is started."}),"\n",(0,r.jsxs)(n.p,{children:["The minimum power required to charge is calculated from the values ",(0,r.jsx)(n.code,{children:"minCurrent"}),"\nand ",(0,r.jsx)(n.code,{children:"phases"}),", defined per ",(0,r.jsx)(n.code,{children:"loadpoint"})," (a group of colocated chargers)\nSee ",(0,r.jsx)(n.a,{href:"./loadpoints",children:(0,r.jsx)(n.code,{children:"loadpoints"})})," for more\ninformation."]}),"\n",(0,r.jsxs)(n.p,{children:["For example: ",(0,r.jsx)(n.code,{children:"phases: 1"})," und ",(0,r.jsx)(n.code,{children:"minCurrent: 8"})]}),"\n",(0,r.jsx)(n.p,{children:"1 (phases) x 8A (minCurrent) x 230V (mains voltage) = 1840W (minimum power required to charge)"}),"\n",(0,r.jsx)(n.h4,{id:"manipulation-options",children:"Manipulation Options"}),"\n",(0,r.jsx)(n.p,{children:"Normally, the surplus power corresponds to the available charging power.\nHowever, the available charging power can be individually adjusted using\nseveral parameters. These are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Site: ",(0,r.jsx)(n.code,{children:"residualpower"})]}),"\n",(0,r.jsxs)(n.li,{children:["Site: ",(0,r.jsx)(n.code,{children:"prioritySoc"})]}),"\n",(0,r.jsxs)(n.li,{children:["Site: ",(0,r.jsx)(n.code,{children:"bufferSoc"})]}),"\n",(0,r.jsxs)(n.li,{children:["Site: ",(0,r.jsx)(n.code,{children:"aux"})]}),"\n",(0,r.jsxs)(n.li,{children:["Loadpoint: ",(0,r.jsx)(n.code,{children:"enable: threshold"})]}),"\n",(0,r.jsxs)(n.li,{children:["Loadpoint: ",(0,r.jsx)(n.code,{children:"disable: threshold"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Please refer to the description of each respective parameter for the available\nsettings."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./site",children:"Site Configuration Parameters"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./loadpoints",children:"Loadpoint Configuration Parameters"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"site",children:"Site"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"site",children:"Site"})," describes the location with the existing and required devices of\nthe home installation and is responsible for regulating the available power."]}),"\n",(0,r.jsx)(n.h3,{id:"loadpoint",children:"Loadpoint"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"loadpoints",children:"Loadpoint"})," describes the charging infrastructure and combines\nexisting ",(0,r.jsx)(n.em,{children:"Chargers"}),", ",(0,r.jsx)(n.em,{children:"Vehicles"}),", and anything else a charging point needs."]}),"\n",(0,r.jsx)(n.h3,{id:"chargers",children:"Chargers"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"chargers",children:"Chargers"})," include a list of chargers and their properties, such as\nhow they are addressed."]}),"\n",(0,r.jsx)(n.h3,{id:"meters",children:"Meters"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"meters",children:"Meters"})," are a list of devices that measure various power flows. These\ninclude:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Imported, Exported power"}),"\n",(0,r.jsx)(n.li,{children:"PV-generated power"}),"\n",(0,r.jsx)(n.li,{children:"Charging current of EV (if the charger does not support this directly)"}),"\n",(0,r.jsx)(n.li,{children:"Power flow of house battery(ies)"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"vehicles",children:"Vehicles"}),"\n",(0,r.jsxs)(n.p,{children:["To limit the state of charge (SoC) of EVs to a specific level, you can specify\nthe existing ",(0,r.jsx)(n.a,{href:"vehicles",children:"vehicles"})," and online access data here."]}),"\n",(0,r.jsx)(n.h3,{id:"hems",children:"HEMS"}),"\n",(0,r.jsxs)(n.p,{children:["evcc can forward the charging points and their charging currents to another\n",(0,r.jsx)(n.a,{href:"hems",children:"Home Energy Management System (HEMS)"})," so that it can use this\ninformation, for example, to control the house battery."]}),"\n",(0,r.jsx)(n.h3,{id:"messaging",children:"Messaging"}),"\n",(0,r.jsx)(n.p,{children:"In this section, you can define events for which you want to be informed. A\nvariety of different systems are supported for message delivery."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"messaging",children:"More information"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);