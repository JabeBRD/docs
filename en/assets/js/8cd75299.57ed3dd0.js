"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3065],{4733:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(5893),o=i(1151);const r={sidebar_position:2},s="Setup & Configuration",a={id:"guides/setup",title:"Setup & Configuration",description:"Configuration",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/setup.mdx",sourceDirName:"guides",slug:"/guides/setup",permalink:"/en/docs/guides/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/guides/setup.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tips & FAQ",permalink:"/en/docs/guides/"},next:{title:"Charging",permalink:"/en/docs/guides/charging"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"A note on individual tastes",id:"a-note-on-individual-tastes",level:3},{value:"Syntax Error in evcc.yaml",id:"syntax-error-in-evccyaml",level:3},{value:"Common Problems",id:"common-problems",level:2},{value:"Something&#39;s not working. What now?",id:"somethings-not-working-what-now",level:3},{value:"How do I create a log file for error analysis?",id:"how-do-i-create-a-log-file-for-error-analysis",level:3},{value:"More thoughts on device detection",id:"more-thoughts-on-device-detection",level:3},{value:"Common Errors",id:"common-errors",level:2},{value:"The evcc UI isn&#39;t accessible, but I can access it when in Demo Mode.",id:"the-evcc-ui-isnt-accessible-but-i-can-access-it-when-in-demo-mode",level:3},{value:"<code>connection refused</code>",id:"connection-refused",level:3},{value:"<code>i/o timeout</code>",id:"io-timeout",level:3},{value:"<code>/tmp/evcc: operation not permitted</code> and/or <code>bind: address already in use</code>",id:"tmpevcc-operation-not-permitted-andor-bind-address-already-in-use",level:3},{value:"Telemetry &amp; Community Data",id:"telemetry--community-data",level:2},{value:"How do I participate?",id:"how-do-i-participate",level:3},{value:"What data is currently being collected?",id:"what-data-is-currently-being-collected",level:3},{value:"What happens to the data?",id:"what-happens-to-the-data",level:3},{value:"Savings Calculation",id:"savings-calculation",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setup--configuration",children:"Setup & Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"a-note-on-individual-tastes",children:"A note on individual tastes"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"evcc has a lot of settings, knobs, and dials. The default parameters are based on lots of experience from many users, and most of the time, the default should work well for you."})}),"\n",(0,t.jsxs)(n.admonition,{type:"danger",children:[(0,t.jsx)(n.p,{children:"If you start making changes, remember the golden rule:"}),(0,t.jsxs)(n.p,{children:["Since parameters sometimes influence each other, ",(0,t.jsx)(n.strong,{children:"it is STRONGLY encouraged to only make one change at a time"}),", and test the effects of each change before making further modifications."]})]}),"\n",(0,t.jsx)(n.h3,{id:"syntax-error-in-evccyaml",children:"Syntax Error in evcc.yaml"}),"\n",(0,t.jsxs)(n.p,{children:["Yaml is very sensitive to syntax - and errors don't always catch the eye straight away. Linters such as (",(0,t.jsx)(n.a,{href:"https://onlineyamltools.com/validate-yaml",children:"https://onlineyamltools.com/validate-yaml"}),") can be super useful, and are worth checking to find simple mistakes."]}),"\n",(0,t.jsx)(n.h2,{id:"common-problems",children:"Common Problems"}),"\n",(0,t.jsx)(n.h3,{id:"somethings-not-working-what-now",children:"Something's not working. What now?"}),"\n",(0,t.jsxs)(n.p,{children:["We have a ",(0,t.jsx)(n.a,{href:"https://github.com/evcc-io/evcc/discussions",children:"Community Support"})," forum, with developers and users standing by to help solve common issues."]}),"\n",(0,t.jsx)(n.p,{children:"When making a post, it would be super useful to give as much information as possible on the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"As precise an explanation as possible as to what your problem is"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Which devices (vehicles, meters, chargers) are in use?"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Your full, sanitised ",(0,t.jsx)(n.code,{children:"evcc.yaml"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(n.p,{children:["Helper comamnd (",(0,t.jsx)(n.em,{children:"please make sure all usernames, passwords, and other secrets are removed!"}),")."]})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"egrep -v '^#|^\\s+#' evcc.yaml |grep . |sed -E 's/(password|user|token|url|host|broker).*/\\1: *****/'"})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Alternatively, you can use ",(0,t.jsx)(n.code,{children:"evcc dump --cfg >~/config.txt"})," to create an anonymized configuration file at ",(0,t.jsx)(n.code,{children:"~/config.txt"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u26d1\ufe0f First Aid"})}),"\n",(0,t.jsxs)(n.p,{children:["We've added a useful helper utility to evcc to help with the above. By entering ",(0,t.jsx)(n.code,{children:"evcc discuss"}),' in your terminal, our helper wizard will help you create a new discussion topic in our "Erste Hilfe" (first aid) section.\nThis discussion will automatically include any relevant error messages, and the anonymized configuration file - you only need to supply a meaningful title and a description of your problem.']}),"\n",(0,t.jsx)(n.p,{children:"This First Aid utility can only be use for the initial creation of a discussion thread. If you need to supply further information to a topic already in progress, you'll need to do this manually."}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-create-a-log-file-for-error-analysis",children:"How do I create a log file for error analysis?"}),"\n",(0,t.jsxs)(n.p,{children:["In its standard configuration, evcc only issues log messages if an ",(0,t.jsx)(n.em,{children:"error"})," occurs (see also the ",(0,t.jsx)(n.a,{href:"docs/reference/configuration/log#log",children:(0,t.jsx)(n.code,{children:"log"})})," configuration key)."]}),"\n",(0,t.jsxs)(n.p,{children:["When evcc is started directly from the console, log messages are printed directly to the screen (",(0,t.jsx)(n.code,{children:"STDOUT"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["You can test out different parts of your installation using ",(0,t.jsx)(n.code,{children:"evcc charger"}),", ",(0,t.jsx)(n.code,{children:"evcc meter"}),", and ",(0,t.jsx)(n.code,{children:"evcc vehicle"}),". Note that the log level defined in your ",(0,t.jsx)(n.code,{children:"evcc.yaml"})," is used with these commands, but you can override it if necessary:"]}),"\n",(0,t.jsxs)(n.p,{children:["Example: ",(0,t.jsx)(n.code,{children:"evcc -l debug meter"})]}),"\n",(0,t.jsxs)(n.p,{children:["If evcc is started as a Linux system service (as per ",(0,t.jsx)(n.a,{href:"/docs/installation/manual#autostart",children:"Linux Autostart"}),"), you should be able to find your logs using the following commands:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Follow the log in real time","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"sudo journalctl -fau evcc"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Show the log since the last start of the evcc service (exit with Ctrl+C)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"sudo journalctl -u evcc -q"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Save the above log to a file in the home directory","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"sudo journalctl -u evcc -q > ~/evcc.log"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You can also define a Start (",(0,t.jsx)(n.code,{children:"-s"}),") and End (",(0,t.jsx)(n.code,{children:"-e"}),") timestamp:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:'sudo journalctl -u evcc -S "2023-03-21 07:00:00" -U "2023-03-21 08:00:00" -q > ~/evcc.log'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You might find more useful commands here: ",(0,t.jsx)(n.a,{href:"https://wiki.archlinux.org/title/Systemd/Journal#Filtering_output",children:"wiki.archlinux.org/title/Systemd/Journal"})]}),"\n",(0,t.jsxs)(n.p,{children:["If you're using Docker, you should be able to use ",(0,t.jsx)(n.code,{children:"docker logs"}),". See the ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/config/containers/logging/",children:"Docker documentation"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"more-thoughts-on-device-detection",children:"More thoughts on device detection"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"evcc detect"}),' is a special command that attempts to find compatible hardware on your network.\nIn particular, it can sometimes help find "new" Sunspec-compatible modbus devices - however, it is more of a developer / support tool for diagnostic purposes, and can\'t provide detailed results.']}),"\n",(0,t.jsx)(n.h2,{id:"common-errors",children:"Common Errors"}),"\n",(0,t.jsx)(n.h3,{id:"the-evcc-ui-isnt-accessible-but-i-can-access-it-when-in-demo-mode",children:"The evcc UI isn't accessible, but I can access it when in Demo Mode."}),"\n",(0,t.jsx)(n.p,{children:"It's not uncommon for errors to be overlooked in the configuration, saved, and then evcc restarted to have any changes take effect. When this happens, evcc will fail to launch, and the UI won't be accessible."}),"\n",(0,t.jsxs)(n.p,{children:["To help diagnose the problem, run ",(0,t.jsx)(n.code,{children:"evcc"})," directly from the terminal - this should hopefully give you a better idea of what's going on."]}),"\n",(0,t.jsx)(n.h3,{id:"connection-refused",children:(0,t.jsx)(n.code,{children:"connection refused"})}),"\n",(0,t.jsx)(n.p,{children:"This means that the device could be contacted at its given IP address or hostname, but that the device refused to talk to us."}),"\n",(0,t.jsx)(n.p,{children:"There's a number of possible reasons for this. These ones regularly come up:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Make sure the target port is set properly in your ",(0,t.jsx)(n.code,{children:"evcc.yaml"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Does the target device have external access enabled? (For example, Solaredge inverters come with modbus disabled from factory)"}),"\n",(0,t.jsx)(n.li,{children:"The device may have reached the maximum number of simultaneous connections. Other connections (for example, from other home automation systems, or from other instances of evcc) might need to be stopped in order to get evcc connected. We are aware of some devices that only accept a single connection at a time."}),"\n",(0,t.jsx)(n.li,{children:"Make sure there's no firewall between you and the target device, and if there is, that it is configured appropriately to allow traffic"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"io-timeout",children:(0,t.jsx)(n.code,{children:"i/o timeout"})}),"\n",(0,t.jsx)(n.p,{children:"This means the target system didn't respond quickly enough to our request."}),"\n",(0,t.jsx)(n.p,{children:"Typically this is due to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A slow or poor quality network connection (especially when using wireless or Homeplug-style networks)"}),"\n",(0,t.jsx)(n.li,{children:"Incorrect or poor quality cabling or termination (especially with RS485)"}),"\n",(0,t.jsx)(n.li,{children:"The target device may be overloaded"}),"\n",(0,t.jsx)(n.li,{children:"Certain functions requested by evcc from the device may be unavailable (sometimes this is due to outdated firmware or improperly set configuration on the target)"}),"\n",(0,t.jsxs)(n.li,{children:["evcc's timeout or query ",(0,t.jsx)(n.code,{children:"interval"})," is set too short"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"tmpevcc-operation-not-permitted-andor-bind-address-already-in-use",children:[(0,t.jsx)(n.code,{children:"/tmp/evcc: operation not permitted"})," and/or ",(0,t.jsx)(n.code,{children:"bind: address already in use"})]}),"\n",(0,t.jsxs)(n.p,{children:["This error happens if evcc is already running (for example, as a service) and you attempt to launch it again. ",(0,t.jsx)(n.strong,{children:"Only one instance of evcc should be running at a time."})]}),"\n",(0,t.jsxs)(n.p,{children:["You can use a program such as ",(0,t.jsx)(n.code,{children:"htop"})," to help you diagnose whether another instance of evcc is running in the background."]}),"\n",(0,t.jsxs)(n.p,{children:["If you do have a reason to use evcc at the terminal, make sure to stop the service (for example, with ",(0,t.jsx)(n.code,{children:"systemctl stop evcc"}),") beforehand."]}),"\n",(0,t.jsx)(n.h2,{id:"telemetry--community-data",children:"Telemetry & Community Data"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://evcc.io/#live",children:"evcc Website"}),' (and the "Charge Energy Overview" dialog in the evcc UI) shows aggregated live charging data from evcc installations. We collect this data on our central ',(0,t.jsx)(n.em,{children:"api.evcc.io"})," server - participation is completely voluntary."]}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-participate",children:"How do I participate?"}),"\n",(0,t.jsx)(n.p,{children:'Simply turn on the toggle in the "Charge Energy Overview" dialog in the evcc UI.'}),"\n",(0,t.jsxs)(n.p,{children:["You can also activate this using the ",(0,t.jsx)(n.a,{href:"/docs/reference/configuration/telemetry/",children:(0,t.jsx)(n.code,{children:"telemetry: true"})})," key in the configuration, but this is a deprecated method and may be removed at a later date."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A \ud83d\udc9a Sponsor Token is currently required to participate in Community Data"}),". This helps ensure that our data quality stays high, and poor / fake data stays out."]}),"\n",(0,t.jsx)(n.h3,{id:"what-data-is-currently-being-collected",children:"What data is currently being collected?"}),"\n",(0,t.jsx)(n.p,{children:"We currently collect the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"current charging power"}),"\n",(0,t.jsx)(n.li,{children:"current proportion of charging power supplied by solar"}),"\n",(0,t.jsx)(n.li,{children:"total charged energy"}),"\n",(0,t.jsx)(n.li,{children:"total proportion of energy supplied by solar"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["We may collect more data in the future, but this will ",(0,t.jsx)(n.strong,{children:"never"})," be personal data or private information (such as location). Your privacy is really important to us!"]}),"\n",(0,t.jsx)(n.h3,{id:"what-happens-to-the-data",children:"What happens to the data?"}),"\n",(0,t.jsxs)(n.p,{children:["We save the amount of energy aggregated per evcc instance. We ",(0,t.jsx)(n.strong,{children:"do not form user profiles over time"}),", and have no interest in doing this in the future."]}),"\n",(0,t.jsx)(n.p,{children:"Our goal is to inspire more users to use evcc, learn more about how users use evcc, and above all, visualise the potential of renewable solar energy being used by evcc."}),"\n",(0,t.jsxs)(n.p,{children:["The data shown can be called up by anyone using our API (",(0,t.jsx)(n.a,{href:"https://api.evcc.io/v1/total",children:"https://api.evcc.io/v1/total"}),"). If you've got some awesome idea for a creative visualisation, please build something and let us know about it!"]}),"\n",(0,t.jsxs)(n.p,{children:["You can find more information on how we use data at our ",(0,t.jsx)(n.a,{href:"https://sponsor.evcc.io/privacy",children:"Privacy Policy"})," (DE)."]}),"\n",(0,t.jsx)(n.h2,{id:"savings-calculation",children:"Savings Calculation"}),"\n",(0,t.jsxs)(n.p,{children:["In the bottom right of the evcc interface, you'll find the percentage of energy used to charge your vehicle(s) that has come from Solar power (for example, ",(0,t.jsx)(n.em,{children:"85% solar energy"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"If you click on it, you'll get a dialog showing more details, including on total calculated savings versus grid."}),"\n",(0,t.jsxs)(n.p,{children:["To make sure that these figures are accurate, please make sure your ",(0,t.jsx)(n.code,{children:"evcc.yaml"})," includes the appropriate ",(0,t.jsx)(n.code,{children:"tariffs"})," configuration."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    type: fixed\n    price: 0.294 # [currency]/kWh\n\n  feedin:\n    type: fixed\n    price: 0.08 # [currency]/kWh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["More details, including on how to use variable rate tariffs (such as those from Octopus Energy) can be found in ",(0,t.jsx)(n.a,{href:"/docs/reference/configuration/tariffs",children:"Configuration - Tariffs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Please note that these statistics are rough and shouldn't be treated as perfectly accurate."})}),"\n",(0,t.jsx)(n.p,{children:"When calculating savings, evcc uses the total amount of charged energy, and the energy sources used during charging (grid, house battery, solar)."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"What is Solar Energy?"})}),"\n",(0,t.jsx)(n.p,{children:"Solar Energy is energy used directly from the Solar installation, and energy provided by any installed house battery.\nevcc assumes that the house battery is primarily used to store excess, self-produced solar power.\nIf the house battery also discharges to satisfy other loads, or charges from grid supply, this assumption isn't always correct.\nBattery losses from inversion / rectification are also not taken into account."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Calculation of savings / effective price"})}),"\n",(0,t.jsx)(n.p,{children:"The algorithm distinguishes between grid supply and self-generated solar energy (solar and house battery)."}),"\n",(0,t.jsx)(n.p,{children:"The cost advantage of your solar energy is calculated from the difference between your grid import rate (e.g 30ct/kWh) and your feed-in tariff (e.g 8ct/kWh).\nIn this example, each unit of produced energy is 22ct (30ct - 8ct) cheaper than the grid import rate.\nIf you charged a vehicle with 2 kWh of your own energy, this would then correspond to an effective saving of 44ct."}),"\n",(0,t.jsxs)(n.p,{children:["If you charged 100% with your own solar energy, the displayed ",(0,t.jsx)(n.em,{children:"effective energy price"})," would be the cost of not exporting to the grid, i.e the feed-in tariff (9ct/kWh).\nIf you charge with 50% solar energy and 50% grid power, the ",(0,t.jsx)(n.em,{children:"effective energy price"})," adapts accordingly (e.g 19ct/kWh)."]}),"\n",(0,t.jsx)(n.p,{children:"If you don't receive a feed-in tariff for exporting power to the grid, you can set the feed-in price to 0 - the solar energy is then treated as being free of charge."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Calculation of the solar energy share"})}),"\n",(0,t.jsx)(n.p,{children:"If you draw energy from several sources at the same time (e.g. 50% PV, 50% grid), your own energy is first allocated to your home.\nThis means all consumers that are not evcc controlled.\nThe remaining share is then divided among the charging sessions.\nExample: Your PV system generates 3 kW. These 3 kW are completely consumed by the house (e.g. washing machine).\nIn parallel, you charge your car with 3 kW (e.g. mode = fast).\nIn this case, the house is calculated with 100% solar share, the car with 0%."}),"\n",(0,t.jsx)(n.p,{children:"Flexible pricing (Octopus Energy, Awattar, Tibber, etc) is taken into account when determining the effective energy price."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);