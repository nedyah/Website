(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{157:function(e,t,a){e.exports=a.p+"static/media/logo.0befb9c2.png"},158:function(e,t,a){e.exports=a.p+"static/media/Search.e3ce38d4.png"},166:function(e,t,a){e.exports=a(237)},171:function(e,t,a){},172:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(36),c=a.n(r),i=(a(171),a(11)),o=a(19),s=a(14),m=a(13),u=a(51),d=a(6),h=a(152),f=a(243),b=a(244),p=(a(172),a(239)),E=a(154),g=a(50);var y=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(h.a,{fluid:"true"},l.a.createElement(p.a,{className:"border-top justify-content-between p-3"},l.a.createElement(E.a,{className:"p-2",md:3,sm:12},"Hayden Miller"),l.a.createElement(E.a,{className:"p-2 d-flex justify-content-center"},l.a.createElement(g.SocialMediaIconsReact,{backgroundColor:"ffffff",iconColor:"000000",icon:"linkedin",url:"https://www.linkedin.com/in/hayden-miller-b471561aa/"}),l.a.createElement(g.SocialMediaIconsReact,{backgroundColor:"ffffff",iconColor:"000000",icon:"instagram",url:"https://www.instagram.com/haydenmmmm/"}),l.a.createElement(g.SocialMediaIconsReact,{backgroundColor:"ffffff",iconColor:"000000",icon:"facebook",url:"https://www.facebook.com/hayden.miller.56/"}),l.a.createElement(g.SocialMediaIconsReact,{backgroundColor:"ffffff",iconColor:"000000",icon:"github",url:"https://github.com/nedyah"})),l.a.createElement(E.a,{className:"p-2 d-flex justify-content-end ",md:3},"Site created by Hayden M."))))},v=a(240),k=a(165);var w=function(e){return l.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid"},l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(k.a,{round:!0,size:300,facebookId:"1593542220"})),l.a.createElement(p.a,{className:"justify-content-center py-5"},l.a.createElement(E.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},S=a(34),C=a(103);var j=function(e){var t=Object(C.b)({opacity:1,from:{opacity:0}});return l.a.createElement(C.a.div,{className:"h-card-info",style:t},l.a.createElement("p",{className:"h-card-title"},e.title),l.a.createElement("p",{className:"h-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var N=function(e){return l.a.createElement("div",{className:"d-inline-block h-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"h-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(j,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},x=a(157),I=a.n(x),O=a(158),M=a.n(O),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(S.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(N,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Boozy App",subTitle:"Find happy hours near you",imgSrc:I.a,link:"https://www.youtube.com/watch?v=Jc6_Rv82WOg",selected:!1},{id:1,title:"Search Engine",subTitle:"Java App to parse webpages",imgSrc:M.a,link:"https://github.com/nedyah/LooksyLoo",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var H=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(T,null))};var A=function(e){return l.a.createElement(h.a,{fluid:!0},l.a.createElement(p.a,{className:"justify-content-center"},l.a.createElement(E.a,{md:8},e.children)))};var F=function(e){return l.a.createElement("div",null,l.a.createElement(w,{title:e.title}),l.a.createElement(A,null,l.a.createElement("p",null,"Hello, my name is Hayden Miller and I am an aspiring full stack engineer with experience with react, react-native, nodejs and java. I also have a lot of experience with C and C++!"),l.a.createElement("p",null,"I am currently a senior at University of San Francisco with a major in Computer Science with a 3.9 GPA. Prior to my schooling in SF I worked for a local background check company in my hometown of Sacramento as a QA Engineer. I have previously graduated with a BA degree from Sonoma State University with a concentration in business management."),l.a.createElement("p",null,"In my spare time I enjoy playing the guitar and various other instruments as well as going to the movies. I hope you enjoy my beautifully made website, that I may or may not have lifted from a youtube tutorial!")))},L=a(33),B=a(242),R=a(241),G=a(159),J=a.n(G),z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log(e);var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(L.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0}),J.a.post("https://4sbfgnvmp3.execute-api.us-east-2.amazonaws.com/latest/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{title:this.props.title}),l.a.createElement(A,null,l.a.createElement(B.a,{onSubmit:this.handleSubmit},l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"full-name"},"Full Name"),l.a.createElement(B.a.Control,{id:"full-name",name:"name",type:this.state.name,onChange:this.handleChange})),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"email"},"Email"),l.a.createElement(B.a.Control,{id:"email",name:"email",type:this.state.email,onChange:this.handleChange})),l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Label,{htmlFor:"message"},"Message"),l.a.createElement(B.a.Control,{id:"message",name:"message",as:"textarea",rows:"4",type:this.state.message,onChange:this.handleChange})),l.a.createElement(R.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled},"Send"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Email Sent"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Email Not Sent"))))}}]),a}(l.a.Component),P=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Hayden Miller",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"H. M. M.",subTitle:"Projects",text:"Discover my projects"},about:{title:"About me"},contact:{title:"Contact me"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(h.a,{className:"p-0",fluid:"true"},l.a.createElement(f.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(f.a.Brand,null,"Hayden Miller"),l.a.createElement(f.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(f.a.Collapse,{id:"navvar-toggle"},l.a.createElement(b.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(H,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(F,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(z,{title:e.state.contact.title})}}),l.a.createElement(y,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(236);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.6fdc345f.chunk.js.map