(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n=a(0),o=a.n(n),r=a(162),i=a(172);function c(e){var t=e.location;return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{location:t,title:"DailyJSX"},o.a.createElement("h1",null," Privacy Policy for www.dailyjsx.com "),o.a.createElement("p",null,"If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at dailyjsxblog@gmail.com."),o.a.createElement("p",null,"At ",o.a.createElement("a",null,"www.dailyjsx.com"),", the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by"," ",o.a.createElement("a",null,"www.dailyjsx.com")," and how it is used."),o.a.createElement("p",null,o.a.createElement("b",null,"Log Files"),o.a.createElement("br",null)," Like many other Web sites, ",o.a.createElement("a",null,"www.dailyjsx.com")," makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track users movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable."),o.a.createElement("p",null,o.a.createElement("b",null,"Cookies and Web Beacons"),o.a.createElement("br",null)," ",o.a.createElement("a",null,"www.dailyjsx.com")," does not use cookies."),o.a.createElement("b",null,"DoubleClick DART Cookie"),o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement("ul",null,o.a.createElement("li",null,"Google, as a third party vendor, uses cookies to serve ads on"," ",o.a.createElement("a",null,"www.dailyjsx.com"),"."),o.a.createElement("li",null,"Google's use of the DART cookie enables it to serve ads to your users based on their visit to ",o.a.createElement("a",null,"www.dailyjsx.com")," and other sites on the Internet."),o.a.createElement("li",null,"Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL -",o.a.createElement("a",{href:"https://policies.google.com/technologies/ads"},"https://policies.google.com/technologies/ads")))),o.a.createElement("p",null,"Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include ....... ",o.a.createElement("br",null)," Google Adsense",o.a.createElement("br",null)),o.a.createElement("p",null,"These third-party ad servers or ad networks use technology to the advertisements and links that appear on ",o.a.createElement("a",null,"www.dailyjsx.com")," send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see."),o.a.createElement("p",null,o.a.createElement("a",null,"www.dailyjsx.com")," has no access to or control over these cookies that are used by third-party advertisers."),o.a.createElement("p",null,"You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. ",o.a.createElement("a",null,"www.dailyjsx.com"),"'s privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites."),o.a.createElement("p",null,"If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites."),o.a.createElement(i.a,null)))}},161:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});a(166),a(167);var n=a(168),o=a.n(n),r=a(169),i=a.n(r);i.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete i.a.googleFonts;var c=new o.a(i.a);var l=c.rhythm,s=c.scale},162:function(e,t,a){"use strict";a(18);var n=a(7),o=a.n(n),r=a(0),i=a.n(r),c=a(56),l=a(76),s=a.n(l),h=a(35),d=a.n(h);a(170);function u(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}var m=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=a.handleClick.bind(d()(a)),a.handleTouchStart=a.handleTouchStart.bind(d()(a)),a.handleTouchMove=a.handleTouchMove.bind(d()(a)),a.handleTouchEnd=a.handleTouchEnd.bind(d()(a)),a.handleTouchCancel=a.handleTouchCancel.bind(d()(a)),a.handleFocus=a.handleFocus.bind(d()(a)),a.handleBlur=a.handleBlur.bind(d()(a)),a.previouslyChecked=!(!t.checked&&!t.defaultChecked),a.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},a}o()(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){"checked"in e&&(this.setState({checked:!!e.checked}),this.previouslyChecked=!!e.checked)},a.handleClick=function(e){var t=this.input;if(this.previouslyChecked=t.checked,e.target!==t&&!this.moved)return e.preventDefault(),t.focus(),void t.click();this.setState({checked:t.checked})},a.handleTouchStart=function(e){this.startX=u(e).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},a.handleTouchMove=function(e){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var t=u(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t):!this.state.checked&&t-15>this.startX&&(this.setState({checked:!0}),this.startX=t)}},a.handleTouchEnd=function(e){if(this.touchMoved){var t=this.input;e.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&t.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},a.handleTouchCancel=function(e){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},a.handleFocus=function(e){var t=this.props.onFocus;t&&t(e),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},a.handleBlur=function(e){var t=this.props.onBlur;t&&t(e),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},a.getIcon=function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null},a.render=function(){var e=this,t=this.props,a=t.className,n=(t.icons,s()(t,["className","icons"])),o="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(a?" "+a:"");return i.a.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},i.a.createElement("div",{className:"react-toggle-track"},i.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.a.createElement("div",{className:"react-toggle-thumb"}),i.a.createElement("input",Object.assign({},n,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},t}(r.PureComponent),g=a(165),p=a.n(g),A=a(161),v=a(163),y=a.n(v),f=a(164),b=a.n(f),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={theme:null},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.renderHeader=function(){var e=this.props,t=e.location,a=e.title;return"/"===t.pathname?i.a.createElement("h1",{style:Object.assign({},Object(A.b)(.75),{marginBottom:0,marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textTitle)"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:0,height:42,lineHeight:"2.625rem"}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"rgb(255, 167, 196)"},to:"/"},a))},a.render=function(){var e=this.props.children;return i.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},i.a.createElement(p.a,{meta:[{name:"theme-color",content:"light"===this.state.theme?"#ffa8c5":"#282c35"}]}),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(A.a)(24),padding:"2.625rem "+Object(A.a)(.75)}},i.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2.625rem"}},this.renderHeader(),null!==this.state.theme?i.a.createElement(m,{icons:{checked:i.a.createElement("img",{src:b.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:i.a.createElement("img",{src:y.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(e){return window.__setPreferredTheme(e.target.checked?"dark":"light")}}):i.a.createElement("div",{style:{height:"24px"}})),e))},t}(i.a.Component);t.a=k},163:function(e,t){e.exports="data:image/png;base64,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"},164:function(e,t){e.exports="data:image/png;base64,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"},172:function(e,t,a){"use strict";var n=a(7),o=a.n(n),r=a(0),i=a.n(r),c=a(56),l=a(161),s=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{style:{marginTop:Object(l.a)(2.5),paddingTop:Object(l.a)(1)}},i.a.createElement("div",{style:{float:"right"}},i.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),i.a.createElement("a",{href:"https://mobile.twitter.com/nadmatrix",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",i.a.createElement("a",{href:"https://github.com/nadunindunil",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",i.a.createElement("a",{href:"https://stackoverflow.com/users/4525429/nadun",target:"_blank",rel:"noopener noreferrer"},"stack overflow"),"•"," ",i.a.createElement(c.Link,{to:"privacy-policy"},"privacy policy"),"•"," ",i.a.createElement(c.Link,{to:"/about-us"},"about us"),"•"," ",i.a.createElement(c.Link,{to:"/contact-us"},"contact us"))},t}(i.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-privacy-policy-js-a302c53bca8b01a14a7f.js.map