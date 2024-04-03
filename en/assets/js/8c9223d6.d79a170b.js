"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[518],{78797:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var r=s(74848),i=s(28453);const c={sidebar_position:12},d="messaging",t={id:"reference/configuration/messaging",title:"messaging",description:"evcc supports the transmission of status information via Telegram, PushOver, ntfy, and many other services using the shoutrrr system. The configuration allows defining custom messages for specific events and systems.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/messaging.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/messaging",permalink:"/en/docs/reference/configuration/messaging",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/reference/configuration/messaging.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"tariffs",permalink:"/en/docs/reference/configuration/tariffs"},next:{title:"eebus",permalink:"/en/docs/reference/configuration/eebus"}},l={},o=[{value:"<code>events</code>",id:"events",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>msg</code>",id:"msg",level:3},{value:"<code>services</code>",id:"services",level:2},{value:"<code>type</code>",id:"type",level:3},{value:"Supported Services",id:"supported-services",level:2},{value:"<code>pushover</code>",id:"pushover",level:3},{value:"<code>telegram</code>",id:"telegram",level:3},{value:"<code>email</code>",id:"email",level:3},{value:"<code>shout</code>",id:"shout",level:3},{value:"<code>ntfy</code>",id:"ntfy",level:3},{value:"<code>script</code>",id:"script",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"messaging",children:(0,r.jsx)(n.code,{children:"messaging"})}),"\n",(0,r.jsxs)(n.p,{children:["evcc supports the transmission of status information via ",(0,r.jsx)(n.a,{href:"https://telegram.org",children:"Telegram"}),", ",(0,r.jsx)(n.a,{href:"https://pushover.net",children:"PushOver"}),", ",(0,r.jsx)(n.a,{href:"https://ntfy.sh",children:"ntfy"}),", and many other services using the ",(0,r.jsx)(n.a,{href:"https://containrrr.dev/shoutrrr/",children:"shoutrrr"})," system. The configuration allows defining custom messages for specific events and systems."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"messaging"})," defines in sub-elements what and how to send. The events for which messages should be sent must be defined under ",(0,r.jsx)(n.code,{children:"events"})," and the services through which the messages should be sent must be defined under ",(0,r.jsx)(n.code,{children:"services"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"messaging:\n  events: ...\n  services: ...\n"})}),"\n",(0,r.jsx)(n.h2,{id:"events",children:(0,r.jsx)(n.code,{children:"events"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"events"})," defines the message content for various predefined events."]}),"\n",(0,r.jsx)(n.p,{children:"The available events are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"start"}),": Charging has started"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"stop"}),": Charging has stopped"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"connect"}),": Vehicle connected"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disconnect"}),": Vehicle disconnected"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"soc"}),": Vehicle battery state of charge changed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"guest"}),": Unknown vehicle detected"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'start: # charge start event\n  title: Charge started\n  msg: Started charging in "${mode}" mode\n'})}),"\n",(0,r.jsx)(n.h3,{id:"title",children:(0,r.jsx)(n.code,{children:"title"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"title"})," defines the text for the message title."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"title: Charge started\n"})}),"\n",(0,r.jsx)(n.h3,{id:"msg",children:(0,r.jsx)(n.code,{children:"msg"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"msg"})," defines the text for the message content. Various variables in the format ",(0,r.jsx)(n.code,{children:"${<variable name>}"})," can be used to display evcc information in the text."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"When using variables, make sure to use the correct capitalisation (uppercase/lowercase)!"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Useful messages for use in evcc notifications"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"msg Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${chargedEnergy:%.1fk}"})}),(0,r.jsx)(n.td,{children:"Energy amount charged in kWh"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${chargeDuration}"})}),(0,r.jsx)(n.td,{children:"Charging duration"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${connectedDuration}"})}),(0,r.jsx)(n.td,{children:"Charger connection duration"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${loadpoint}"})}),(0,r.jsxs)(n.td,{children:["Number of ",(0,r.jsx)(n.a,{href:"loadpoints",children:(0,r.jsx)(n.code,{children:"loadpoints"})})," (charging point) 1,2..."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${mode}"})}),(0,r.jsxs)(n.td,{children:["Active charging mode (see ",(0,r.jsx)(n.a,{href:"loadpoints#mode",children:(0,r.jsx)(n.code,{children:"mode"})})," of ",(0,r.jsx)(n.a,{href:"loadpoints",children:(0,r.jsx)(n.code,{children:"loadpoints"})}),")"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${pvPower:%.1fk}"})}),(0,r.jsx)(n.td,{children:"Currently measured PV power in kW"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${title}"})}),(0,r.jsxs)(n.td,{children:["Charging point: Text from ",(0,r.jsx)(n.a,{href:"loadpoints",children:(0,r.jsx)(n.code,{children:"loadpoints"})})," ",(0,r.jsx)(n.a,{href:"loadpoints#title",children:(0,r.jsx)(n.code,{children:"title"})})," parameter"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"${vehicleTitle}"})}),(0,r.jsxs)(n.td,{children:["Vehicle: Text from ",(0,r.jsx)(n.a,{href:"vehicles",children:(0,r.jsx)(n.code,{children:"vehicles"})})," ",(0,r.jsx)(n.a,{href:"vehicles#title",children:(0,r.jsx)(n.code,{children:"title"})})," parameter"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  # Message examples using evcc variables\n  # start\n  msg: Charger ${title} started charging ${vehicleTitle} in ${mode} mode\n  # stop\n  msg: Charger ${title} finished charging ${vehicleTitle} with ${chargedEnergy:%.1fk}kWh in ${chargeDuration}\n  # connect\n  msg: ${vehicleTitle} connected on Charger ${title} at ${pvPower:%.1fk}kW PV\n  # disconnect\n  msg: ${vehicleTitle} disconnected of Charger ${title} after ${connectedDuration}\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["To render the ",(0,r.jsx)(n.code,{children:"msg"})," texts, you can also use the ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/text/template",children:"go text/template"})," syntax in combination with ",(0,r.jsx)(n.a,{href:"http://masterminds.github.io/sprig/",children:"sprig functions"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Message config using evcc go-text-template rendering, evcc variables and sprig-functions\nmessaging:\n  events:\n    start: # charge start event\n      title: Charge of {{.vehicleTitle}} started\n      msg: |\n        Charger {{.title}} started charging {{.vehicleTitle}} in {{ toString .mode | upper }} mode.\n        --------------------------\n        evcc Status {{printf `(%d-%02d-%02d %02d:%02d:%02d)` now.Year now.Month now.Day now.Hour now.Minute now.Second}}\n        Grid power: {{round (divf .gridPower 1000) 3 }} kW\n        Solar power: {{round (divf .pvPower 1000) 3 }} kW\n        Home consumption: {{round (divf .homePower 1000) 3 }} kW\n        {{if .batteryConfigured}}Battery storage status: {{round (divf .batteryPower 1000) 3 }} kW ({{.batterySoc }} %){{end}}\n    stop: # charge stop event\n      title: Charge of {{.vehicleTitle}} finished\n      msg: |\n        Charger {{.title}} finished charging {{.vehicleTitle}} \n        with {{round (divf .chargedEnergy 1000) 2 }} kWh in {{.chargeDuration}}.\n        --------------------------\n        evcc Status {{printf `(%d-%02d-%02d %02d:%02d:%02d)` now.Year now.Month now.Day now.Hour now.Minute now.Second}}\n        Grid power: {{round (divf .gridPower 1000) 3 }} kW\n        Solar power: {{round (divf .pvPower 1000) 3 }} kW\n        Home consumption: {{round (divf .homePower 1000) 3 }} kW\n        {{if .batteryConfigured}}Battery storage status: {{round (divf .batteryPower 1000) 3 }} kW ({{.batterySoc }} %){{end}}\n    connect: # vehicle connect event\n      title: "{{.vehicleTitle}} connected on Charger {{.title}}"\n      msg: |\n        {{.vehicleTitle}} connected on Charger {{.title}} at {{round (divf .pvPower 1000) 2 }} kW PV.\n        --------------------------\n        evcc Status {{printf `(%d-%02d-%02d %02d:%02d:%02d)` now.Year now.Month now.Day now.Hour now.Minute now.Second}}\n        Grid power: {{round (divf .gridPower 1000) 3 }} kW\n        Solar power: {{round (divf .pvPower 1000) 3 }} kW\n        Home consumption: {{round (divf .homePower 1000) 3 }} kW\n        {{if .batteryConfigured}}Battery storage status: {{round (divf .batteryPower 1000) 3 }} kW ({{.batterySoc }} %){{end}}\n    disconnect: # vehicle connected event\n      title: "{{.vehicleTitle}} disconnected of Charger {{.title}}"\n      msg: |\n        {{.vehicleTitle}} disconnected of Charger {{.title}} after {{.connectedDuration}}.\n        --------------------------\n        evcc Status {{printf `(%d-%02d-%02d %02d:%02d:%02d)` now.Year now.Month now.Day now.Hour now.Minute now.Second}}\n        Grid power: {{round (divf .gridPower 1000) 3 }} kW\n        Solar power: {{round (divf .pvPower 1000) 3 }} kW\n\n\n        Home consumption: {{round (divf .homePower 1000) 3 }} kW\n        {{if .batteryConfigured}}Battery storage status: {{round (divf .batteryPower 1000) 3 }} kW ({{.batterySoc }} %){{end}}\n'})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"List of all evcc-provided variables"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The variables provided by evcc (also see /api/state) must be defined as ",(0,r.jsx)(n.code,{children:"${<VariableName>}"})," or in the go-template format ",(0,r.jsx)(n.code,{children:"{{<VariableName>}}"})," in the message text. Multiple variables in the message text are possible."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Site","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"site",children:(0,r.jsx)(n.code,{children:"siteTitle"})})," - Main headline of the evcc app (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"site#prioritysoc",children:(0,r.jsx)(n.code,{children:"prioritySoc"})})," - Minimum Powerwall state of charge in percent before ",(0,r.jsx)(n.a,{href:"loadpoints#mode",children:"PV mode"})," release (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"batteryConfigured"})," - Indicator, home battery/Powerwall meter configured (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gridConfigured"})," - Indicator, smart/grid meter configured (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pvConfigured"})," - Indicator, solar panels/photovoltaic meter configured (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Tariff Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"tariffs",children:(0,r.jsx)(n.code,{children:"currency"})})," - Tariff currency (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"tariffs#feedin",children:(0,r.jsx)(n.code,{children:"tariffFeedIn"})})," - PV feed-in remuneration per kWh in tariff currency (float)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"tariffs#grid",children:(0,r.jsx)(n.code,{children:"tariffGrid"})})," - Grid consumption price per kWh in tariff currency (float)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Meter Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"batteryPower"})," - Current home battery/Powerwall power in watts (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"batterySoc"})," - Current state of charge of home battery/Powerwall in percent (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"gridPower"})," - Current grid feed-in(-) or consumption(+) in watts (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"homePower"})," - Current home consumption power (excluding Charger consumption) in watts (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pvPower"})," - Current solar panels power in watts (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Charging Point (loadpoint)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"loadpoints",children:(0,r.jsx)(n.code,{children:"loadpoint"})})," - Loadpoint index (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"loadpoints#maxcurrent",children:(0,r.jsx)(n.code,{children:"maxCurrent"})})," - Maximum charging current in amperes (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"loadpoints#mincurrent",children:(0,r.jsx)(n.code,{children:"minCurrent"})})," - Minimum charging current in amperes (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"loadpoints#mode",children:(0,r.jsx)(n.code,{children:"mode"})})," - Initial mode of the charging point after evcc start ",(0,r.jsx)(n.code,{children:"off"}),"/",(0,r.jsx)(n.code,{children:"now"}),"/",(0,r.jsx)(n.code,{children:"min"}),"/",(0,r.jsx)(n.code,{children:"pv"})," (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"loadpoints#phases",children:(0,r.jsx)(n.code,{children:"phases"})})," - Initial active number of phases of the charging point after evcc start (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"loadpoints#title",children:(0,r.jsx)(n.code,{children:"title"})})," - Label of the charging point in the evcc app (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"activePhases"}),"- Currently active number of phases of the charging point (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chargeCurrent"})," - Current total charging current in amperes (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chargeCurrents"})," - Current charging current per active phase in amperes (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chargeDuration"})," - Charging duration in nanoseconds (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chargePower"})," - Current charging power in watts (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chargeRemainingDuration"})," - Charging time in nanoseconds until the target state of charge (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chargeRemainingEnergy"})," - Required energy until the target state of charge in watt-hours (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"chargedEnergy"})," - Energy charged so far in watt-hours (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"charging"})," - Indicator, charging process active (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"enabled"})," - Indicator, charging enabled (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"hasVehicle"})," - Indicator, vehicle definitions assigned to the charging point (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"targetTime"})," - Target charging time in nanoseconds since 1970 UTC (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pvAction"})," - Control variable for PV timer control ",(0,r.jsx)(n.code,{children:"enable"}),"/",(0,r.jsx)(n.code,{children:"disable"})," (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pvRemaining"})," - Required PV remaining charging time with activated timer control in nanoseconds (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Vehicles (vehicles)","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"vehicles#capacity",children:(0,r.jsx)(n.code,{children:"vehicleCapacity"})}),"- Capacity of the vehicle battery in watt-hours (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"vehicles#title",children:(0,r.jsx)(n.code,{children:"vehicleTitle"})})," - Label of the vehicle in the evcc app (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"climater"})," - Status of vehicle climatisation ",(0,r.jsx)(n.code,{children:"on"}),"/",(0,r.jsx)(n.code,{children:"off"}),"/",(0,r.jsx)(n.code,{children:"heating"}),"/",(0,r.jsx)(n.code,{children:"cooling"})," (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"connected"})," - Indicator, vehicle connected to the charging point (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"connectedDuration"})," - Duration of vehicle connection in nanoseconds (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vehicleOdometer"})," - Current vehicle odometer reading in kilometers (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vehiclePresent"})," - Indicator, evcc can access vehicle data (",(0,r.jsx)(n.em,{children:"bool"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vehicleRange"})," - Current vehicle range in kilometers (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"vehicleSoc"})," - Current state of charge of the vehicle battery in percent (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Savings Efficiency Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"savingsAmount"})," - Sum of evcc savings (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"savingsEffectivePrice"})," - Calculated savings price (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"savingsGridCharged"})," - Consumed grid energy in Wh (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"savingsSelfConsumptionCharged"})," - Consumed solar energy in Wh (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"savingsSelfConsumptionPercent"})," - Percentage of consumed solar energy in Wh (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"savingsSince"})," - Time period of savings calculation in nanoseconds (",(0,r.jsx)(n.em,{children:"integer"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"savingsTotalCharged"})," - Total energy consumed in Wh (",(0,r.jsx)(n.em,{children:"float"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Charging Session Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sessionSolarPercentage"})," - Solar percentage of the session"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sessionPrice"})," - Price of the charged energy of the session"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sessionPricePerKWh"})," - Average price of energy per kWh of the session"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sessionCO<sub>2</sub>PerKWh"})," - Average CO",(0,r.jsx)("sub",{children:"2"})," emissions per kWh"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Sponsor","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Configuration","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"sponsortoken",children:(0,r.jsx)(n.code,{children:"auth"})})," - Authentication token of the evcc sponsor (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Information","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sponsor"})," - Name of the evcc sponsor (",(0,r.jsx)(n.em,{children:"string"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"services",children:(0,r.jsx)(n.code,{children:"services"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"services"})," defines a list of message services to be used."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"services:\n  - type: pushover\n    app: 12345\n    recipients:\n      - 234567\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following sections will now explain all the required parameters."}),"\n",(0,r.jsx)(n.h3,{id:"type",children:(0,r.jsx)(n.code,{children:"type"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"type"})," defines the type of message service to be used."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Possible values"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"pushover"}),": ",(0,r.jsx)(n.a,{href:"https://pushover.net/",children:"Pushover"}),". See ",(0,r.jsx)(n.a,{href:"#pushover",children:(0,r.jsx)(n.code,{children:"pushover"})})," definition"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"telegram"}),": ",(0,r.jsx)(n.a,{href:"https://telegram.org/",children:"Telegram Messenger"}),". See ",(0,r.jsx)(n.a,{href:"#telegram",children:(0,r.jsx)(n.code,{children:"telegram"})})," definition"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"email"}),": Email. See ",(0,r.jsx)(n.a,{href:"#email",children:(0,r.jsx)(n.code,{children:"email"})})," definition"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"shout"}),": [shoutrrr](",(0,r.jsx)(n.a,{href:"https://contain",children:"https://contain"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["rrr.dev/shoutrrr). See ",(0,r.jsx)(n.a,{href:"#shout",children:(0,r.jsx)(n.code,{children:"shout"})})," definition"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"script"}),": Can initiate external scripts to send messages. It's also useful to include any kind of external functionality. See ",(0,r.jsx)(n.a,{href:"#script",children:(0,r.jsx)(n.code,{children:"script"})})," definition"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"services:\n  - type: pushover\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"supported-services",children:"Supported Services"}),"\n",(0,r.jsx)(n.h3,{id:"pushover",children:(0,r.jsx)(n.code,{children:"pushover"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"pushover"})," uses the ",(0,r.jsx)(n.a,{href:"https://pushover.net/",children:"Pushover"})," service. Details can be found at ",(0,r.jsx)(n.a,{href:"https://pushover.net/api",children:"Pushover API"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- type: pushover\n  app: # API Token/Key of the created application in Pushover\n  recipients:\n    -  # List of recipients: either User Key or Delivery Group. Groups created in Pushover can be limited to specific devices.\n  devices:\n    - Johns phone\n    - Mias ticker\n"})}),"\n",(0,r.jsx)(n.h3,{id:"telegram",children:(0,r.jsx)(n.code,{children:"telegram"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"telegram"})," uses the ",(0,r.jsx)(n.a,{href:"https://telegram.org/",children:"Telegram Messenger"})," service."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- type: telegram\n  token: # bot id : each running instance of evcc needs its own bot id\n  chats:\n    -  # List of chat or group IDs. Each entry requires a - sign in the beginning and must be in a separate line.\n    - -GroupID #Note: Group IDs in Telegram have a - sign\n    - ChatID\n"})}),"\n",(0,r.jsx)(n.h3,{id:"email",children:(0,r.jsx)(n.code,{children:"email"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"email"})," uses the ",(0,r.jsx)(n.a,{href:"https://containrrr.dev/shoutrrr",children:"shoutrrr"})," service."]}),"\n",(0,r.jsxs)(n.p,{children:["Here, the parameter ",(0,r.jsx)(n.code,{children:"uri"})," with the value ",(0,r.jsx)(n.code,{children:"smtp://<user>:<password>@<host>:<port>/?fromAddress=<from>&toAddresses=<to>"})," is expected. The placeholders are to be replaced as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<host>"}),": Address (hostname or IP address) of the email server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<port>"}),": Port address of the email server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<user>"}),": Username for the email server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<password>"}),": User password"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<from>"}),": Sender's email address"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<to>"}),": Recipient's email address"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- type: email\n  uri: smtp://username:password@emailserver.domain:1234/?fromAddress=sender@mail.com&toAddresses=recipient@mail.com\n"})}),"\n",(0,r.jsx)(n.h3,{id:"shout",children:(0,r.jsx)(n.code,{children:"shout"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"shout"})," uses the ",(0,r.jsx)(n.a,{href:"https://containrrr.dev/shoutrrr",children:"shoutrrr"})," service and supports all its services."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration is shown in the following example using ",(0,r.jsx)(n.a,{href:"https://gotify.net/",children:"Gotify"}),", and the same applies to the other options through the same method."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- type: shout\n  uri: gotify://gotify.example.com:443/AzyoeNS.D4iJLVa/?priority=1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Further information can be found in the ",(0,r.jsx)(n.a,{href:"https://containrrr.dev/shoutrrr/v0.5/services/overview/",children:"shoutrrr documentation"})," on ",(0,r.jsx)(n.a,{href:"https://containrrr.dev/shoutrrr/v0.5/services/overview/",children:"supported services"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"ntfy",children:(0,r.jsx)(n.code,{children:"ntfy"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ntfy"})," uses the ",(0,r.jsx)(n.a,{href:"https://ntfy.sh",children:"ntfy"})," service."]}),"\n",(0,r.jsxs)(n.p,{children:["Here, the parameter ",(0,r.jsx)(n.code,{children:"uri"})," with the value ",(0,r.jsx)(n.code,{children:"https://<host>/<topics>"})," is expected. The placeholders are to be replaced as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<host>"}),": Address (hostname or IP address) of the ntfy server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<topics>"}),": Subscribed topic or topics"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Optional parameters are ",(0,r.jsx)(n.code,{children:"priority"})," and ",(0,r.jsx)(n.code,{children:"tags"}),". All parameters are passed as strings."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- type: ntfy\n  uri: https://ntfy.sh/evcctestalerts\n  priority: default\n  tags: electric_plug,blue_car\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Further information can be found in the ",(0,r.jsx)(n.a,{href:"https://docs.ntfy.sh",children:"ntfy documentation"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"script",children:(0,r.jsx)(n.code,{children:"script"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"script"})," starts shell scripts or other commands to send messages or start any action based on the ",(0,r.jsx)(n.a,{href:"#events",children:"events"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The path to the script must be specified in ",(0,r.jsx)(n.code,{children:"cmdline"}),". Likewise, a ",(0,r.jsx)(n.code,{children:"timeout"})," should be set. The ",(0,r.jsx)(n.code,{children:"timeout"})," specifies after how much time the script will be aborted."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"- type: script\n  cmdline: /home/pi/sendSignalMessage.sh\n  timeout: 50s\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(96540);const i={},c=r.createContext(i);function d(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);