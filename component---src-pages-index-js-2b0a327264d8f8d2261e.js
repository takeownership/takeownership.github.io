webpackJsonp([35783957827783],{89:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=Object.defineProperty,n=Object.getOwnPropertyNames,r=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,i=m&&m(Object);e.exports=function e(t,d,o){if("string"!=typeof d){if(i){var f=m(d);f&&f!==i&&e(t,f,o)}var u=n(d);r&&(u=u.concat(r(d)));for(var E=0;E<u.length;++E){var p=u[E];if(!(a[p]||l[p]||o&&o[p])){var N=c(d,p);try{s(t,p,N)}catch(e){}}}return t}return t}},58:function(e,t){function a(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function s(e){if(d===setTimeout)return setTimeout(e,0);if((d===a||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function n(e){if(o===clearTimeout)return clearTimeout(e);if((o===l||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}function r(){p&&u&&(p=!1,u.length?E=u.concat(E):N=-1,E.length&&c())}function c(){if(!p){var e=s(r);p=!0;for(var t=E.length;t;){for(u=E,E=[];++N<t;)u&&u[N].run();N=-1,t=E.length}u=null,p=!1,n(e)}}function m(e,t){this.fun=e,this.array=t}function i(){}var d,o,f=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:a}catch(e){d=a}try{o="function"==typeof clearTimeout?clearTimeout:l}catch(e){o=l}}();var u,E=[],p=!1,N=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];E.push(new m(e,t)),1!==E.length||p||s(c)},m.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=i,f.addListener=i,f.once=i,f.off=i,f.removeListener=i,f.removeAllListeners=i,f.emit=i,f.prependListener=i,f.prependOnceListener=i,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},178:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(4),m=l(c),i=a(59),d=(l(i),function(e){function t(){return s(this,t),n(this,e.call(this))}return r(t,e),t.prototype.componentDidMount=function(){function e(e){return"!"==e[0]}function t(e,t,s){function n(){var e=a(t);if(e.days>=100)var n=3;else var n=2;c.innerHTML=l(e.days,n),m.innerHTML=l(e.hours,2),i.innerHTML=l(e.minutes,2),d.innerHTML=l(e.seconds,2),s&&(document.title=l(e.days,n)+":"+l(e.hours,2)+":"+l(e.minutes,2)+":"+l(e.seconds,2)),e.total<=0&&clearInterval(o)}var r=document.getElementById(e),c=r.querySelector(".days"),m=r.querySelector(".hours"),i=r.querySelector(".minutes"),d=r.querySelector(".seconds");n();var o=setInterval(n,1e3)}function a(e){var t=Math.abs(Date.parse(e)-Date.parse(new Date)),a=t/1e3,l=Math.floor(a%60),s=Math.floor(a/60%60),n=Math.floor(a/3600%24),r=Math.floor(a/86400);return{total:t,seconds:l,minutes:s,hours:n,days:r}}function l(e,t){return("0"+e).slice(-t)}for(var s=document.getElementsByClassName("clock"),n=0;n<s.length;n++){var r=s[n],c=r.id,m=e(c);if(m)var i=c.substring(1);else var i=c;t(c,i,m)}},t.prototype.render=function(){return m.default.createElement("div",null,m.default.createElement("div",{className:"clock",id:"2017-12-09T09:30:00-2000"},m.default.createElement("div",null,m.default.createElement("span",{className:"days f-100"}),m.default.createElement("div",{className:"label text-uppercase"},"days")),m.default.createElement("div",null,m.default.createElement("span",{className:"hours f-100"}),m.default.createElement("div",{className:"label text-uppercase"},"hours")),m.default.createElement("div",null,m.default.createElement("span",{className:"minutes f-100"}),m.default.createElement("div",{className:"label text-uppercase"},"mins")),m.default.createElement("div",null,m.default.createElement("span",{className:"seconds f-100"}),m.default.createElement("div",{className:"label text-uppercase"}," sec "))))},t}(c.Component));t.default=d,e.exports=t.default},179:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=a(4),m=l(c),i=a(59),d=(l(i),function(e){function t(){return s(this,t),n(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return m.default.createElement("div",null,m.default.createElement("div",{className:"section section-2-et white-border-top"},m.default.createElement("div",{className:"container p-40"},m.default.createElement("div",{className:"row mb0 p-20"},m.default.createElement("div",{className:"col s12 center-align mobile-center"},m.default.createElement("iframe",{src:"//eventbrite.com/tickets-external?eid=39204971124&ref=etckt",frameBorder:0,height:500,width:"100%",vspace:0,hspace:0,marginHeight:5,marginWidth:5,scrolling:"auto",allowTransparency:"true"}))))),m.default.createElement("div",{className:"section white"},m.default.createElement("div",{className:"container p-40"},m.default.createElement("div",{className:"row mb0 p-20"},m.default.createElement("div",{className:"col s12 center-align mobile-center"},m.default.createElement("img",{src:"https://fownders.s3.us-east-2.amazonaws.com/Fownders%20Logo%20%281%29.png",alt:"Fownders Icon Logo",height:100}),m.default.createElement("p",{className:"f-22 brand-text bold-text"},"The learning ecosystem for entrepreneurs by entrepreneurs")),m.default.createElement("div",{className:"col s3 m1 offset-m4 center-align"},m.default.createElement("a",{href:"https://www.youtube.com/channel/UColDe80cdpOMHn3d7ecJxVg",target:"_blank"},m.default.createElement("i",{className:"fa fa-youtube-play fa-lg brand-text","aria-hidden":"true"}))),m.default.createElement("div",{className:"col s3 m1 center-align"},m.default.createElement("a",{href:"https://twitter.com/Fownders?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",target:"_blank"},m.default.createElement("i",{className:"fa fa-twitter fa-lg brand-text","aria-hidden":"true"}))),m.default.createElement("div",{className:"col s3 m1 center-align"},m.default.createElement("a",{href:"https://www.facebook.com/fowndersnewark/",target:"_blank"},m.default.createElement("i",{className:"fa fa-facebook-square fa-lg brand-text","aria-hidden":"true"}))),m.default.createElement("div",{className:"col s3 m1 center-align"},m.default.createElement("a",{href:"https://www.instagram.com/fownders/?hl=en",target:"_blank"},m.default.createElement("i",{className:"fa fa-instagram fa-lg brand-text","aria-hidden":"true"})))))),m.default.createElement("div",{className:"section black"},m.default.createElement("div",{className:"container p-20"},m.default.createElement("div",{className:"row mb0"},m.default.createElement("div",{className:"col s12 m6 left-align mobile-center"},m.default.createElement("a",{className:"f-14 white-text"},"© Copyright 2017 Fownders. All Rights Reserved.")),m.default.createElement("div",{className:"col s12 m6 right-align mobile-center"},m.default.createElement("a",{className:"f-14 white-text text-uppercase",href:"http://www.fownders.co/hubfs/Fownders%20Docs/Privacy%20Policy-%20Fownders.pdf",target:"_blank"},"Privacy Policy"))))))},t}(c.Component));t.default=d,e.exports=t.default},182:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(4),n=l(s),r=a(86),c=(l(r),a(178)),m=l(c),i=a(179),d=l(i),o=function(){return n.default.createElement("div",null,n.default.createElement("div",{className:"row m0"},n.default.createElement("div",{className:"col s12 p0"},n.default.createElement("div",{className:"section-1-et"},n.default.createElement("div",{className:"container p-40"},n.default.createElement("div",{className:"row mb0 p-40"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"Eric Thomas ",n.default.createElement("span",{className:"text-normal"},"&")," F",n.default.createElement("span",{className:"brand-text"},"OWN"),"ders ",n.default.createElement("span",{className:"text-normal"},"Presents ",n.default.createElement("br",{className:"hide-on-med-and-down"}))," ",n.default.createElement("span",{className:"f-84"},"Take ",n.default.createElement("span",{className:"brand-text"},"Own"),"ership")),n.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "),n.default.createElement("br",null),n.default.createElement("br",null))))),n.default.createElement("div",{className:"section-2-et block-3 z-10 p-40"},n.default.createElement("div",{className:"container relative-text p-40"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"2-DAY Mastermind Experience")),n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("div",{className:"hide-on-med-and-up"},n.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"December ",n.default.createElement("br",{className:"hide-on-med-and-up"})," 9th & 10th")),n.default.createElement("div",{className:"hide-on-small-only"},n.default.createElement(m.default,null)))))),n.default.createElement("div",{className:"section-3-et block-4 z-11"},n.default.createElement("div",{className:"container relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("div",{className:""},n.default.createElement("br",{className:"hide-on-med-and-up"}),n.default.createElement("h1",{className:"f-32 black-text bold-text text-uppercase"},"This is a private closed door ",n.default.createElement("span",{className:"f-84"},"Mastermind")),n.default.createElement("p",{className:"f-22 brand-text center-align"},"Within this select group of entrepreneurs you will find mentors, leaders, and business owners from all over the globe. Join our powerful circle of influence, form new connections, and make a real investment in yourself. ")))),n.default.createElement("div",{className:"row m0 valign-wrapper hide-on-small-only"},n.default.createElement("div",{className:"col s12 m6 l7 center-align p0"},n.default.createElement("img",{className:"img-sticky responsive-img",src:"https://fownders.s3.us-east-2.amazonaws.com/Mastermind-et-g.png",alt:"Gerard Adams & Eric Thomas"})),n.default.createElement("div",{className:"col s12 m6 l5 center-align p0"},n.default.createElement("h1",{className:"f-52 brand-text text-uppercase right-align mobile-center mb0"},"Make Your ",n.default.createElement("span",{className:"f-84 black-text bold-text m0"},"Impact")),n.default.createElement("p",{className:"f-26 brand-text right-align mobile-center m0"},"This is not a boring ",n.default.createElement("br",{className:"hide-on-med-and-down"})," seminar or secret sales event."),n.default.createElement("p",{className:"f-38 grey-text-3 text-normal right-align mobile-center m0"},"There is no gimmick."),n.default.createElement("h1",{className:"f-32 brand-text text-uppercase right-align mobile-center"},"Just leaders ",n.default.createElement("br",{className:"hide-on-med-and-down"})," creating leaders."),n.default.createElement("div",{className:"col s12 center-align p0"},n.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement("br",{className:"hide-on-small-only"}),n.default.createElement("br",{className:"hide-on-small-only"})))),n.default.createElement("div",{className:"row m0 hide-on-med-and-up"},n.default.createElement("div",{className:"col s12 m6 center-align p0"},n.default.createElement("h1",{className:"f-52 brand-text text-uppercase right-align mobile-center m0"},"Make Your ",n.default.createElement("span",{className:"f-impact black-text bold-text"},"Impact")),n.default.createElement("p",{className:"f-22 brand-text right-align mobile-center m0"},"This is not a boring seminar or secret sales event."),n.default.createElement("p",{className:"f-38 grey-text-3 text-normal right-align mobile-center m0"},"There is no gimmick."),n.default.createElement("h1",{className:"f-38 brand-text text-uppercase right-align mobile-center"},"Just leaders creating leaders."),n.default.createElement("div",{className:"col s12 center-align p0"},n.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "))),n.default.createElement("div",{className:"col s12 m6 center-align p0"},n.default.createElement("img",{className:"img-sticky responsive-img",src:"https://fownders.s3.us-east-2.amazonaws.com/Mastermind-et-g.png",alt:"Gerard Adams & Eric Thomas"}))))),n.default.createElement("div",{className:"section-4-et block-3 z-12"},n.default.createElement("div",{className:"container relative-text p-40"},n.default.createElement("div",{className:"row p-40"},n.default.createElement("div",{className:"col s12 l10 offset-l1 center-align"},n.default.createElement("div",{className:"wistia_responsive_padding"},n.default.createElement("div",{className:"wistia_responsive_wrapper"},n.default.createElement("iframe",{className:"wistia_embed z-depth-4",src:"//fast.wistia.net/embed/iframe/3fjajt3029?videoFoam=true",name:"wistia_embed",width:"100%",height:"100%",frameBorder:0,scrolling:"no",allowFullScreen:"allowfullscreen"}))))))),n.default.createElement("div",{className:"section-5-et block-4 z-13"},n.default.createElement("div",{className:"container relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 m7 left-align mobile-center"},n.default.createElement("br",null),n.default.createElement("img",{className:"responsive-img relative-text",src:"../static/Mastermind-Take-Ownership-Text.png"})),n.default.createElement("div",{className:"col s12 m5 center-align"},n.default.createElement("img",{className:"img-neg-m img-sticky img-reverse",src:"../static/Mastermind-ET-2.png",alt:"Gerard Adams & Eric Thomas"}))))),n.default.createElement("div",{className:"section-6-et block-2 z-14"},n.default.createElement("div",{className:"container relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("img",{className:"responsive-img",src:"https://fownders.s3.us-east-2.amazonaws.com/Mastermind-text-1-to-BG-5.png"}))))),n.default.createElement("div",{className:"section-3-et block-4 z-15 "},n.default.createElement("div",{className:"container relative-text p-40"},n.default.createElement("div",{className:"row m0"},n.default.createElement("div",{className:"col s12 m6 center-align p0"},n.default.createElement("p",{className:"f-26 brand-text right-align mobile-center text-uppercase mb0"},"Founder & Leader"),n.default.createElement("h1",{className:"f-62 black-text bold-text text-uppercase right-align mobile-center mb0 text-shadow-blue"},"Gerard",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100 ls-5 black-text"},"Adams")," "),n.default.createElement("p",{className:"f-18 black-text right-align mobile-center"},"“Your life is a direct result of your dominant thoughts and your daily actions. Stop allowing outside situations mess with you internally and hold you back from moving forward.”"),n.default.createElement("p",{className:"f-18 black-text right-align mobile-center"},"At this mastermind, I will have only one focus, to help get you get ",n.default.createElement("span",{className:"f-32 bold-text text-uppercase ls-3"},"RESULTS.")),n.default.createElement("div",{className:"col s12 center-align p0"},n.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "),n.default.createElement("br",null))),n.default.createElement("div",{className:"col s12 m6 p0"},n.default.createElement("br",null),n.default.createElement("br",{className:"hide-on-small-only"}),n.default.createElement("br",{className:"hide-on-small-only"}),n.default.createElement("br",{className:"hide-on-small-only"}),n.default.createElement("img",{className:"img-sticky responsive-img relative-text",src:"../static/Mastermind-Gerard-Adams.png"}))))),n.default.createElement("div",{className:"black block-3 z-16 "},n.default.createElement("div",{className:"container relative-text p-40"},n.default.createElement("div",{className:"row m0"},n.default.createElement("div",{className:"col s12 m5 p0 left-align hide-on-small-only"},n.default.createElement("img",{className:"img-sticky responsive-img relative-text",src:"../static/Mastermind-ET-3.png"})),n.default.createElement("div",{className:"col s12 m7 left-align p0"},n.default.createElement("h1",{className:"f-62 white-text bold-text text-uppercase mobile-center mb0 text-shadow-blue"},"Dr. Eric",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100 ls-5 white-text"},"Thomas")," "),n.default.createElement("p",{className:"f-32 white-text bold-text left-align mobile-center m0"},"will be in the building!"),n.default.createElement("p",{className:"f-18 white-text mobile-center"},"Meet face-to-face with Eric Thomas, ET, The Hip Hop Preacher is bringing his motivation to Newark, NJ for the TAKE OWNERSHIP mastermind experience"),n.default.createElement("br",null),n.default.createElement("p",{className:"f-18 white-text mobile-center"},n.default.createElement("span",{className:"f-26 bold-text"},"TAKE OWNERSHIP")," is the end of the year mastermind event for people looking to make one new connection, learn one new strategy, and get leverage on themselves to exponentially grow their business."),n.default.createElement("div",{className:"col s12 center-align p0"},n.default.createElement("br",null),n.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "),n.default.createElement("br",null)),n.default.createElement("div",{className:"col s12 m5 p0 left-align hide-on-med-and-up"},n.default.createElement("img",{className:"img-sticky responsive-img relative-text",src:"../static/Mastermind-ET-3.png"})))))),n.default.createElement("div",{className:"section-8-et block z-17"},n.default.createElement("div",{className:"container relative-text"},n.default.createElement("div",{className:"row mb0 p-40"},n.default.createElement("div",{className:"col s12 p0 center-align"},n.default.createElement("h1",{className:"f-32 white-text bold-text text-uppercase"},"This is for anyone who wants to get",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100"},"1% Better.")," ")),n.default.createElement("div",{className:"col s12 m10 offset-m2 center-align"},n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Digital Marketers & Copywriters")),n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Real Estate Agents")),n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Social Media Agency Founders")),n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Creatives, Designers & Photographers")),n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Ecommerce Entrepreneurs")),n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Coaches & Consultants")),n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Young Professionals")))))),n.default.createElement("div",{className:"section-3-et"},n.default.createElement("div",{className:"container p-40"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-38 black-text bold-text text-uppercase"},"What To Expect"))),n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 m6 left-align p0"},n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Now that you are on the inside, you’ll listen to our speakers share the strategies they have used to build and scale their businesses."))),n.default.createElement("div",{className:"col s12 m6 left-align p0"},n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Rapid fire specific questions and receive tactical answers you can implement to overcome obstacles holding your business initiatives back. ")))),n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 m6 left-align p0"},n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Gain new business expertise and recognize more of your potential. Leave with applicable tactics you can use to improve your business and an unbreakable mindset to support you on your journey."))),n.default.createElement("div",{className:"col s12 m6 left-align p0"},n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Leverage the minds of entrepreneurs who have solved the problems your company is currently facing and get breakthrough mentorship to take your business to the next level.")))),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col s12 m6 left-align p0"},n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Gain insight on the most cutting edge tools, you can leverage to start, build, and grow your business efforts."))),n.default.createElement("div",{className:"col s12 m6 left-align p0"},n.default.createElement("div",{className:"col s1 m1 left-align"},n.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"You’ll learn to expand your capacity to take responsibility and recognize what it take to market your early stage company. Nothing will be more fun than learning how to take extreme ownership of your results while becoming a Fownder ",n.default.createElement("br",null),".")))))),n.default.createElement("div",{className:"section-7-et block-4 z-16"},n.default.createElement("div",{className:"container relative-text p-40"},n.default.createElement("div",{className:"row m0"},n.default.createElement("div",{className:"col s12 left-align"},n.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase mobile-center mb0"},"This is where you become the",n.default.createElement("br",null),n.default.createElement("span",{className:"f-62 ls-5 white-text"},"the best version of ",n.default.createElement("br",null)),n.default.createElement("span",{className:"f-100 ls-5 white-text"},"Yourself")," ")),n.default.createElement("div",{className:"col s12 m9 left-align"},n.default.createElement("p",{className:"f-18 white-text mobile-center"},"We instantly focus on you, your business, and your brand. We begin providing you the value that can help you make the right next step on your journey."),n.default.createElement("br",null),n.default.createElement("div",{className:"col s12 left-align mobile-center"},n.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "),n.default.createElement("br",null),n.default.createElement("br",null)))))),n.default.createElement("div",{className:"section-5-et block-3 z-16"},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 p0 center-align"},n.default.createElement("h1",{className:"f-62 white-text bold-text text-uppercase"},"The",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100 ls-5"},"Experience")," "))),n.default.createElement("div",{className:"row white p-20-all"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-42 ls-3 brand-text bold-text text-uppercase"},"Upon Arrival"),n.default.createElement("p",{className:"f-18 brand-text text-uppercase bold-text left-align mobile-center"},"You’ll immediately recognize some of the faces in the room. Eric Thomas and Gerard Adams will lead day 1, which will be on self-mastery. Day 2 will focus on mastering your business."))),n.default.createElement("div",{className:"row white p-20-all"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-42 ls-3 brand-text bold-text text-uppercase"},"BY THE END"),n.default.createElement("p",{className:"f-18 brand-text text-uppercase bold-text left-align mobile-center"},"YOU’LL WALK AWAY FROM THIS EVENT WITH A FRESH PERSPECTIVE, NEW TOOLS AND TECHNIQUES, AND THE CONFIDENCE TO PUT THEM INTO PRACTICE. YOU WILL HAVE A PRACTICAL ACTION PLAN THAT WILL EXPONENTIALLY IMPROVE YOUR BUSINESS. WHETHER YOU ARE LOOKING TO WORK ON TEAM BUILDING, LEADERSHIP, MARKETING, OR MINDSET ONE OF OUR LEADERS CAN DEFINITELY HELP. "))),n.default.createElement("br",null))),n.default.createElement("div",{className:"section-9-et block-4 z-18"},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 p0 center-align"},n.default.createElement("h1",{className:"f-62 ls-3 white-text bold-text text-uppercase mb0"},"How it",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100 ls-6"},"Works")," "),n.default.createElement("p",{className:"white-text f-16 pb-8"},"UPON ARRIVAL, YOU WILL HAVE A GROUP OF ELITE ENTREPRENEURS ",n.default.createElement("br",{className:"hide-on-small-only"})," TOTALLY FOCUSED ON EXCHANGING VALUE AND ",n.default.createElement("br",{className:"hide-on-small-only"})," BUILDING REAL RELATIONSHIPS."))))),n.default.createElement("div",{className:"section-10-et white-border-top"},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 left-align"},n.default.createElement("h1",{className:"f-22 white-text bold-text text-uppercase"},"TAKE OWNERSHIP 1-DAY TICKET")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"1 DAY MASTERMIND EXPERIENCE WITH ERIC THOMAS AND GERARD ADAMS")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"1 GROUP COACHING  SESSION ON BUSINESS DEVELOPMENT, PERSONAL DEVELOPMENT, OR INFLUENCER DEVELOPMENT"))))),n.default.createElement("div",{className:"section-11-et white-border-top"
},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 left-align"},n.default.createElement("h1",{className:"f-22 white-text bold-text text-uppercase"},"TAKE OWNERSHIP 2-DAY TICKET")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"2 DAY MASTERMIND EXPERIENCE")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 1 WITH ERIC THOMAS AND GERARD ADAMS")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"1 GROUP COACHING SESSION ON BUSINESS DEVELOPMENT, PERSONAL DEVELOPMENT, OR INFLUENCER DEVELOPMENT"))))),n.default.createElement("div",{className:"section-12-et white-border-top"},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 left-align"},n.default.createElement("h1",{className:"f-22 white-text bold-text text-uppercase"},"TAKE OWNERSHIP VIP  2-DAY TICKET + FOWNDERS GALA")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"2  DAY MASTERMIND EXPERIENCE")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 1 WITH ERIC THOMAS AND GERARD ADAMS")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 1 VIP SESSION WITH GERARD ADAMS & ERIC THOMAS ")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 2 VIP SESSION WITH GERARD ADAMS AND OTHER EXPERTS")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"GUARANTEED LIVE HOT SEAT ON DAY 2")),n.default.createElement("div",{className:"col s1 m1 right-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),n.default.createElement("div",{className:"col s11 m11 left-align"},n.default.createElement("p",{className:"white-text f-16 pb-8"},"BONUS: TICKET TO FOWNDERS GALA ")),n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "),n.default.createElement("br",null),n.default.createElement("br",null))))),n.default.createElement("div",{className:"section-13-et z-16 p-40"},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-62 brand-text bold-text text-uppercase"},"Take the",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100 ls-5 white-text"},"Next Step:")," "))),n.default.createElement("div",{className:"row mb0 p-40"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-62 white-text text-uppercase"},"RSVP IF YOU WANT",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100 ls-5 white-text bold-text"},"To Take ",n.default.createElement("span",{className:"f-100 ls-5 brand-text bold-text"},"OWN"),"ership")," "))),n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-32 white-text text-uppercase text-normal"},"Our Next Mastermind Is On",n.default.createElement("br",null),n.default.createElement("span",{className:"bold-text white-text"},"December 9th & 10th")))),n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-32 white-text text-uppercase text-normal"},"The location of the Mastermind is",n.default.createElement("br",null),n.default.createElement("span",{className:"bold-text white-text"},"Newark NJ")))))),n.default.createElement("div",{className:"brand-blue-4 z-16"},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 p0 center-align"},n.default.createElement("h1",{className:"f-62 white-text bold-text text-uppercase mb0"},"Join Us At",n.default.createElement("br",null),n.default.createElement("span",{className:"f-100 ls-5 white-text"},"Take ",n.default.createElement("span",{className:"brand-text"},"Own"),"ership")," "))))),n.default.createElement("div",{className:"section-18-et z- p-40"},n.default.createElement("div",{className:"container p-40 relative-text"},n.default.createElement("div",{className:"row mb0"},n.default.createElement("div",{className:"col s12 center-align"},n.default.createElement("h1",{className:"f-100 black-text bold-text text-uppercase mb0"},"THE TIME IS NOW",n.default.createElement("br",null)))),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement("br",null),n.default.createElement("div",{className:"row mb0 black-box p-40 white-border-all"},n.default.createElement("div",{className:"col s12 left-align mobile-center"},n.default.createElement("h1",{className:"f-32 white-text bold-text text-uppercase mb0"},"THE OPPORTUNITY IS EXTREMELY LIMITED",n.default.createElement("br",null)),n.default.createElement("p",{className:"f-18 white-text"},"If you’re serious about taking your success to the next level, or maybe just getting started in business for yourself, you owe it to yourself to TAKE OWNERSHIP of your future by signing up for this 2 DAY ONLY mastermind experience! Dr. Thomas has taken his unique brand of success and shared it with millions all around the globe! In December, 2017, he’s touching down in Newark, Nj to give you the tools you’ll need to TAKE OWNERSHIP of your future! Space is limited, and seats are going fast! Isn’t it time you took control of your success? You won’t want to miss this event powered by Fownders. "))))),n.default.createElement(d.default,null))))};t.default=o,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-2b0a327264d8f8d2261e.js.map