webpackJsonp([85915039154555],{39:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(1),m=l(r),i=a(6),d=(l(i),function(e){function t(){return s(this,t),c(this,e.call(this))}return n(t,e),t.prototype.componentDidMount=function(){function e(e){return"!"==e[0]}function t(e,t,s){function c(){var e=a(t);if(e.days>=100)var c=3;else var c=2;r.innerHTML=l(e.days,c),m.innerHTML=l(e.hours,2),i.innerHTML=l(e.minutes,2),d.innerHTML=l(e.seconds,2),s&&(document.title=l(e.days,c)+":"+l(e.hours,2)+":"+l(e.minutes,2)+":"+l(e.seconds,2)),e.total<=0&&clearInterval(o)}var n=document.getElementById(e),r=n.querySelector(".days"),m=n.querySelector(".hours"),i=n.querySelector(".minutes"),d=n.querySelector(".seconds");c();var o=setInterval(c,1e3)}function a(e){var t=Math.abs(Date.parse(e)-Date.parse(new Date)),a=t/1e3,l=Math.floor(a%60),s=Math.floor(a/60%60),c=Math.floor(a/3600%24),n=Math.floor(a/86400);return{total:t,seconds:l,minutes:s,hours:c,days:n}}function l(e,t){return("0"+e).slice(-t)}for(var s=document.getElementsByClassName("clock"),c=0;c<s.length;c++){var n=s[c],r=n.id,m=e(r);if(m)var i=r.substring(1);else var i=r;t(r,i,m)}},t.prototype.render=function(){return m.default.createElement("div",null,m.default.createElement("div",{className:"section-2-et block-4 z-11 p-40"},m.default.createElement("div",{className:"container relative-text p-40"},m.default.createElement("div",{className:"row mb0"},m.default.createElement("div",{className:"col s12 center-align"},m.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"2-DAY Mastermind Experience")),m.default.createElement("div",{className:"col s12 center-align"},m.default.createElement("div",{className:"hide-on-med-and-up"},m.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"December ",m.default.createElement("br",{className:"hide-on-med-and-up"})," 9th & 10th")),m.default.createElement("div",{className:"hide-on-small-only"},m.default.createElement("div",{className:"clock",id:"2017-12-09T09:30:00-2000"},m.default.createElement("div",null,m.default.createElement("span",{className:"days f-100"}),m.default.createElement("div",{className:"label text-uppercase"},"days")),m.default.createElement("div",null,m.default.createElement("span",{className:"hours f-100"}),m.default.createElement("div",{className:"label text-uppercase"},"hours")),m.default.createElement("div",null,m.default.createElement("span",{className:"minutes f-100"}),m.default.createElement("div",{className:"label text-uppercase"},"mins")),m.default.createElement("div",null,m.default.createElement("span",{className:"seconds f-100"}),m.default.createElement("div",{className:"label text-uppercase"}," sec ")))))))))},t}(r.Component));t.default=d,e.exports=t.default},201:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(1),c=l(s),n=a(32),r=(l(n),a(39)),m=l(r),i=a(41),d=l(i),o=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"row m0"},c.default.createElement("div",{className:"col s12 p0"},c.default.createElement("div",{className:"section-1-et"},c.default.createElement("div",{className:"container p-40"},c.default.createElement("div",{className:"row mb0 p-40"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"Eric Thomas ",c.default.createElement("span",{className:"text-normal"},"&")," F",c.default.createElement("span",{className:"brand-text"},"OWN"),"ders ",c.default.createElement("span",{className:"text-normal"},"Presents ",c.default.createElement("br",{className:"hide-on-med-and-down"}))," ",c.default.createElement("span",{className:"f-84"},"Take ",c.default.createElement("span",{className:"brand-text"},"Own"),"ership")),c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",target:"_blank",href:"http://www.fownders.co/mastermind-step-1"},"RESERVE YOUR SPOT"),c.default.createElement("br",null),c.default.createElement("br",null))))),c.default.createElement("div",{className:"section-2-et block-3 z-10 p-40"},c.default.createElement("div",{className:"container relative-text p-40"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"2-DAY Mastermind Experience")),c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("div",{className:"hide-on-med-and-up"},c.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase"},"December ",c.default.createElement("br",{className:"hide-on-med-and-up"})," 9th & 10th")),c.default.createElement("div",{className:"hide-on-small-only"},c.default.createElement(m.default,null)))))),c.default.createElement("div",{className:"section-3-et block-4 z-11"},c.default.createElement("div",{className:"container relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("br",{className:"hide-on-med-and-up"}),c.default.createElement("h1",{className:"f-38 black-text bold-text text-uppercase"},"This is a private closed door ",c.default.createElement("span",{className:"f-100 ls-5"},"Mastermind")),c.default.createElement("p",{className:"f-22 brand-text center-align"},"Within this select group of entrepreneurs you will find mentors, leaders, and business owners from all over the globe. Join our powerful circle of influence, form new connections, and make a real investment in yourself. "))),c.default.createElement("div",{className:"row m0 valign-wrapper hide-on-small-only"},c.default.createElement("div",{className:"col s12 m6 l7 center-align p0"},c.default.createElement("img",{className:"img-sticky responsive-img",src:"https://fownders.s3.us-east-2.amazonaws.com/Mastermind-et-g.png",alt:"Gerard Adams & Eric Thomas"})),c.default.createElement("div",{className:"col s12 m6 l5 center-align p0"},c.default.createElement("h1",{className:"f-62 brand-text text-uppercase text-normal right-align mobile-center mb0"},"Make Your ",c.default.createElement("span",{className:"f-84 ls-3 black-text bold-text m0"},"Impact")),c.default.createElement("p",{className:"f-26 brand-text right-align mobile-center m0"},"This is not a boring ",c.default.createElement("br",{className:"hide-on-med-and-down"})," seminar or secret sales event."),c.default.createElement("p",{className:"f-32 grey-text-3 text-normal text-uppercase right-align mobile-center m0"},"There is no gimmick."),c.default.createElement("h1",{className:"f-32 brand-text text-uppercase right-align mobile-center"},"Just leaders ",c.default.createElement("br",{className:"hide-on-med-and-down"})," creating leaders."),c.default.createElement("div",{className:"col s12 center-align p0"},c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",target:"_blank",href:"http://www.fownders.co/mastermind-step-1"},"   RSVP NOW   "),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("br",{className:"hide-on-small-only"}),c.default.createElement("br",{className:"hide-on-small-only"})))),c.default.createElement("div",{className:"row m0 hide-on-med-and-up"},c.default.createElement("div",{className:"col s12 m6 center-align p0"},c.default.createElement("h1",{className:"f-62 brand-text text-uppercase text-normal right-align mobile-center m0"},"Make Your ",c.default.createElement("span",{className:"f-impact black-text bold-text"},"Impact")),c.default.createElement("p",{className:"f-22 brand-text right-align mobile-center m0"},"This is not a boring seminar or secret sales event."),c.default.createElement("p",{className:"f-38 grey-text-3 text-normal text-uppercase right-align mobile-center m0"},"There is no gimmick."),c.default.createElement("h1",{className:"f-38 brand-text text-uppercase right-align mobile-center"},"Just leaders creating leaders."),c.default.createElement("div",{className:"col s12 center-align p0"},c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",target:"_blank",href:"http://www.fownders.co/mastermind-step-1"},"   RSVP NOW   "))),c.default.createElement("div",{className:"col s12 m6 center-align p0"},c.default.createElement("img",{className:"img-sticky responsive-img",src:"https://fownders.s3.us-east-2.amazonaws.com/Mastermind-et-g.png",alt:"Gerard Adams & Eric Thomas"}))))),c.default.createElement("div",{className:"section-4-et block-3 z-12 pb-40"},c.default.createElement("div",{className:"container relative-text p-40"},c.default.createElement("div",{className:"row p-40"},c.default.createElement("div",{className:"col s12 l10 offset-l1 center-align p0"},c.default.createElement("div",{className:"video-container"},c.default.createElement("iframe",{src:"https://player.vimeo.com/video/240791567",width:640,height:360,frameBorder:0,webkitallowfullscreen:!0,mozallowfullscreen:!0,allowFullScreen:!0})))))),c.default.createElement("div",{className:"section-5-et block-4 z-13"},c.default.createElement("div",{className:"container relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 m7 left-align mobile-center"},c.default.createElement("br",null),c.default.createElement("img",{className:"responsive-img relative-text",src:"../static/Mastermind-Take-Ownership-Text.png"})),c.default.createElement("div",{className:"col s12 m5 center-align"},c.default.createElement("img",{className:"img-neg-m img-sticky img-reverse",src:"../static/Mastermind-ET-2.png",alt:"Eric Thomas"}))))),c.default.createElement("div",{className:"section-6-et block-2 z-14"},c.default.createElement("div",{className:"container relative-text pb-40"},c.default.createElement("div",{className:"row pb-40"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("img",{className:"responsive-img",src:"../static/Mastermind-text-1-to-BG-6.png",alt:"This is real entrepreneurship"})),c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("p",{className:"f-18 bold-text white-text"},"Take Ownership is a motivating, impactful, pure value mastermind with like-minded entrepreneurs from around the globe."))))),c.default.createElement("div",{className:"section-3-et block-4 z-15"},c.default.createElement("div",{className:"container relative-text p-40"},c.default.createElement("div",{className:"row m0 valign-wrapper hide-on-small-only"},c.default.createElement("div",{className:"col s12 m7 center-align"},c.default.createElement("br",{className:"hide-on-small-only"}),c.default.createElement("p",{className:"f-38 brand-text text-normal right-align mobile-center text-uppercase mb0"},"Founder & Leader"),c.default.createElement("h1",{className:"f-62 black-text bold-text text-uppercase right-align mobile-center mb0 text-shadow-blue"},"Gerard",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-5 black-text"},"Adams")," "),c.default.createElement("p",{className:"f-18 black-text right-align mobile-center"},"“Your life is a direct result of your dominant thoughts and your daily actions. Stop allowing outside situations mess with you internally and hold you back from moving forward.”"),c.default.createElement("p",{className:"f-18 black-text right-align mobile-center"},"At this mastermind, I will have only one focus, to help get you get ",c.default.createElement("span",{className:"f-26 bold-text text-uppercase ls-3"},"RESULTS.")),c.default.createElement("div",{className:"col s12 center-align p0"},c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",target:"_blank",href:"http://www.fownders.co/mastermind-step-1"},"   RSVP NOW   "),c.default.createElement("br",null))),c.default.createElement("div",{className:"col s12 m5"},c.default.createElement("img",{className:"img-sticky responsive-img relative-text",src:"../static/Mastermind-Gerard-Adams.png",alt:"Gerard Adams"}))),c.default.createElement("div",{className:"row m0 hide-on-med-and-up"},c.default.createElement("div",{className:"col s12 m7 center-align p0"},c.default.createElement("br",{className:"hide-on-small-only"}),c.default.createElement("p",{className:"f-26 brand-text right-align mobile-center text-uppercase mb0"},"Founder & Leader"),c.default.createElement("h1",{className:"f-62 black-text bold-text text-uppercase right-align mobile-center mb0 text-shadow-blue"},"Gerard",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-5 black-text"},"Adams")," "),c.default.createElement("p",{className:"f-18 black-text right-align mobile-center"},"“Your life is a direct result of your dominant thoughts and your daily actions. Stop allowing outside situations mess with you internally and hold you back from moving forward.”"),c.default.createElement("p",{className:"f-18 black-text right-align mobile-center"},"At this mastermind, I will have only one focus, to help get you get ",c.default.createElement("span",{className:"f-26 bold-text text-uppercase ls-3"},"RESULTS.")),c.default.createElement("div",{className:"col s12 center-align p0"},c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",target:"_blank",href:"http://www.fownders.co/mastermind-step-1"},"   RSVP NOW   "),c.default.createElement("br",null))),c.default.createElement("div",{className:"col s12 m5 p0"},c.default.createElement("img",{className:"img-sticky responsive-img relative-text",src:"../static/Mastermind-Gerard-Adams.png"}))))),c.default.createElement("div",{className:"black block-3 z-16"},c.default.createElement("div",{className:"container relative-text p-40"},c.default.createElement("div",{className:"row m0"},c.default.createElement("div",{className:"col s12 m5 left-align hide-on-small-only"},c.default.createElement("img",{className:"img-sticky responsive-img relative-text",src:"../static/Mastermind-ET-3.png"})),c.default.createElement("div",{className:"col s12 m7 left-align p0"},c.default.createElement("h1",{className:"f-62 white-text bold-text text-uppercase mobile-center mb0 text-shadow-blue"},"Dr. Eric",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-5 white-text"},"Thomas")," "),c.default.createElement("p",{className:"f-32 white-text bold-text left-align mobile-center m0"},"will be in the building!"),c.default.createElement("p",{className:"f-18 white-text mobile-center"},"Meet face-to-face with Eric Thomas, ET, The Hip Hop Preacher is bringing his motivation to Newark, NJ for the TAKE OWNERSHIP mastermind experience"),c.default.createElement("br",null),c.default.createElement("p",{className:"f-18 white-text mobile-center"},c.default.createElement("span",{className:"f-26 bold-text"},"TAKE OWNERSHIP")," is the end of the year mastermind event for people looking to make one new connection, learn one new strategy, and get leverage on themselves to exponentially grow their business."),c.default.createElement("div",{className:"col s12 center-align p0"},c.default.createElement("br",null),c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",target:"_blank",href:"http://www.fownders.co/mastermind-step-1"},"   RSVP NOW   "),c.default.createElement("br",null)),c.default.createElement("div",{className:"col s12 m5 left-align hide-on-med-and-up"},c.default.createElement("img",{className:"img-sticky responsive-img relative-text",src:"../static/Mastermind-ET-3.png"})))))),c.default.createElement("div",{className:"section-8-et block-4 z-17"},c.default.createElement("div",{className:"container relative-text pb-40"},c.default.createElement("div",{className:"row mb0 p-40"},c.default.createElement("div",{className:"col s12 p0 center-align"},c.default.createElement("h1",{className:"f-32 white-text bold-text text-uppercase"},"This is for anyone who wants to get",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100"},"LEVEL UP.")," ")),c.default.createElement("div",{className:"col s12 m10 offset-m2 center-align"},c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Digital Marketers & Copywriters")),c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Real Estate Agents")),c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Social Media Agency Founders")),c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Creatives, Designers & Photographers")),c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Ecommerce Entrepreneurs")),c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Coaches & Consultants")),c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 white-text white-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-22 m0 pb-8 text-uppercase"},"Young Professionals")))))),c.default.createElement("div",{className:"section-3-et z-18"},c.default.createElement("div",{className:"container p-40"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-38 black-text bold-text text-uppercase"},"What To Expect"))),c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 m6 left-align p0"},c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Now that you are on the inside, you’ll listen to our speakers share the strategies they have used to build and scale their businesses."))),c.default.createElement("div",{className:"col s12 m6 left-align p0"},c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Rapid fire specific questions and receive tactical answers you can implement to overcome obstacles holding your business initiatives back. ")))),c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 m6 left-align p0"},c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Gain new business expertise and recognize more of your potential. Leave with applicable tactics you can use to improve your business and an unbreakable mindset to support you on your journey."))),c.default.createElement("div",{className:"col s12 m6 left-align p0"},c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Leverage the minds of entrepreneurs who have solved the problems your company is currently facing and get breakthrough mentorship to take your business to the next level.")))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col s12 m6 left-align p0"},c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"Gain insight on the most cutting edge tools, you can leverage to start, build, and grow your business efforts."))),c.default.createElement("div",{className:"col s12 m6 left-align p0"},c.default.createElement("div",{className:"col s1 m1 left-align"},c.default.createElement("i",{className:"fa fa-check f-18 brand-text brand-border-all","aria-hidden":"true"})),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"black-text f-18 m0 pb-8"},"You’ll learn to expand your capacity to take responsibility and recognize what it take to market your early stage company. Nothing will be more fun than learning how to take extreme ownership of your results while becoming a Fownder ",c.default.createElement("br",null),".")))))),c.default.createElement("div",{className:"section-7-et block-4 z-19"},c.default.createElement("div",{className:"container relative-text p-40"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col s12 left-align"},c.default.createElement("h1",{className:"f-38 white-text bold-text text-uppercase mobile-center mb0"},"This is where you become the",c.default.createElement("br",null),c.default.createElement("span",{className:"f-62 ls-5 white-text"},"the best version of ",c.default.createElement("br",null)),c.default.createElement("span",{className:"f-100 ls-5 white-text"},"Yourself")," ")),c.default.createElement("div",{className:"col s12 m9 left-align"},c.default.createElement("p",{className:"f-18 white-text mobile-center"},"We instantly focus on you, your business, and your brand. We begin providing you the value that can help you make the right next step on your journey."),c.default.createElement("br",null),c.default.createElement("div",{className:"col s12 left-align mobile-center"},c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",target:"_blank",href:"http://www.fownders.co/mastermind-step-1"},"   RSVP NOW   "),c.default.createElement("br",null),c.default.createElement("br",null)))))),c.default.createElement("div",{className:"section-5-et block-3 z-20"},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 p0 center-align"},c.default.createElement("h1",{className:"f-62 white-text bold-text text-uppercase"},"The",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-5"},"Experience")," "))),c.default.createElement("div",{className:"row white p-20-all"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-42 ls-3 brand-text bold-text text-uppercase"},"Upon Arrival"),c.default.createElement("p",{className:"f-18 brand-text text-uppercase bold-text left-align mobile-center"},"You’ll immediately recognize some of the faces in the room. Eric Thomas and Gerard Adams will lead day 1, which will be on self-mastery. Day 2 will focus on mastering your business."))),c.default.createElement("div",{className:"row white p-20-all"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-42 ls-3 brand-text bold-text text-uppercase"},"BY THE END"),c.default.createElement("p",{className:"f-18 brand-text text-uppercase bold-text left-align mobile-center"},"YOU’LL WALK AWAY FROM THIS EVENT WITH A FRESH PERSPECTIVE, NEW TOOLS AND TECHNIQUES, AND THE CONFIDENCE TO PUT THEM INTO PRACTICE. YOU WILL HAVE A PRACTICAL ACTION PLAN THAT WILL EXPONENTIALLY IMPROVE YOUR BUSINESS. WHETHER YOU ARE LOOKING TO WORK ON TEAM BUILDING, LEADERSHIP, MARKETING, OR MINDSET ONE OF OUR LEADERS CAN DEFINITELY HELP. "))),c.default.createElement("br",null))),c.default.createElement("div",{className:"section-9-et block-4 z-21"},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 p0 center-align"},c.default.createElement("h1",{className:"f-62 ls-3 white-text bold-text text-uppercase mb0"},"How it",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-6"},"Works")," "),c.default.createElement("p",{className:"white-text f-16 pb-8"},"UPON ARRIVAL, YOU WILL HAVE A GROUP OF ELITE ENTREPRENEURS ",c.default.createElement("br",{className:"hide-on-small-only"})," TOTALLY FOCUSED ON EXCHANGING VALUE AND ",c.default.createElement("br",{className:"hide-on-small-only"})," BUILDING REAL RELATIONSHIPS."))))),c.default.createElement("div",{className:"section-10-et white-border-top"},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 left-align"},c.default.createElement("h1",{className:"f-22 white-text bold-text text-uppercase"},"TAKE OWNERSHIP 1-DAY TICKET")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"1 DAY MASTERMIND EXPERIENCE WITH ERIC THOMAS AND GERARD ADAMS")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"1 GROUP COACHING  SESSION ON BUSINESS DEVELOPMENT, PERSONAL DEVELOPMENT, OR INFLUENCER DEVELOPMENT"))))),c.default.createElement("div",{className:"section-11-et white-border-top"},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 left-align"},c.default.createElement("h1",{className:"f-22 white-text bold-text text-uppercase"},"TAKE OWNERSHIP 2-DAY TICKET")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"2 DAY MASTERMIND EXPERIENCE")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 1 WITH ERIC THOMAS AND GERARD ADAMS")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"1 GROUP COACHING SESSION ON BUSINESS DEVELOPMENT, PERSONAL DEVELOPMENT, OR INFLUENCER DEVELOPMENT"))))),c.default.createElement("div",{className:"section-12-et white-border-top"},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 left-align"},c.default.createElement("h1",{className:"f-22 white-text bold-text text-uppercase"},"TAKE OWNERSHIP VIP  2-DAY TICKET + FOWNDERS GALA")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"2  DAY MASTERMIND EXPERIENCE")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 1 WITH ERIC THOMAS AND GERARD ADAMS")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 1 VIP SESSION WITH GERARD ADAMS & ERIC THOMAS ")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"DAY 2 VIP SESSION WITH GERARD ADAMS AND OTHER EXPERTS")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"GUARANTEED LIVE HOT SEAT ON DAY 2")),c.default.createElement("div",{className:"col s1 m1 right-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"•")),c.default.createElement("div",{className:"col s11 m11 left-align"},c.default.createElement("p",{className:"white-text f-16 pb-8"},"BONUS: TICKET TO FOWNDERS GALA ")),c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("a",{className:"btn-large cta-org waves-effect waves-light",href:"https://www.eventbrite.com/e/eric-thomas-fownders-presents-take-ownership-tickets-39204971124?aff=es2"},"   RSVP NOW   "),c.default.createElement("br",null),c.default.createElement("br",null))))),c.default.createElement("div",{className:"section-13-et z-22 p-40"
},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-62 brand-text bold-text text-uppercase"},"Take the",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-5 white-text"},"Next Step:")," "))),c.default.createElement("div",{className:"row mb0 p-40"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-62 white-text text-uppercase"},"RSVP IF YOU WANT",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-5 white-text bold-text"},"To Take ",c.default.createElement("span",{className:"f-100 ls-5 brand-text bold-text"},"OWN"),"ership")," "))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-32 white-text text-uppercase text-normal"},"Our Next Mastermind Is On",c.default.createElement("br",null),c.default.createElement("span",{className:"bold-text white-text"},"December 9th & 10th")))),c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-32 white-text text-uppercase text-normal"},"The location of the Mastermind is",c.default.createElement("br",null),c.default.createElement("span",{className:"bold-text white-text"},"Newark NJ")))))),c.default.createElement("div",{className:"brand-blue-4 z-16"},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 p0 center-align"},c.default.createElement("h1",{className:"f-62 white-text bold-text text-uppercase mb0"},"Join Us At",c.default.createElement("br",null),c.default.createElement("span",{className:"f-100 ls-5 white-text"},'"Take ',c.default.createElement("span",{className:"brand-text"},"Own"),'ership"')))))),c.default.createElement("div",{className:"section-18-et z- p-40"},c.default.createElement("div",{className:"container p-40 relative-text"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("h1",{className:"f-100 ls-5 black-text bolder-text text-uppercase mb0"},"THE TIME IS NOW",c.default.createElement("br",null)))),c.default.createElement("br",{className:"hide-on-small-only"}),c.default.createElement("br",{className:"hide-on-small-only"}),c.default.createElement("br",null),c.default.createElement("div",{className:"row mb0 black-box p-40 white-border-all"},c.default.createElement("div",{className:"col s12 left-align mobile-center"},c.default.createElement("h1",{className:"f-32 white-text bold-text text-uppercase mb0"},"THE OPPORTUNITY IS EXTREMELY LIMITED",c.default.createElement("br",null)),c.default.createElement("p",{className:"f-18 white-text"},"If you’re serious about taking your success to the next level, or maybe just getting started in business for yourself, you owe it to yourself to TAKE OWNERSHIP of your future by signing up for this 2-DAY ONLY mastermind experience! Dr. Thomas has taken his unique brand of success and shared it with millions all around the globe! In December, 2017, he’s touching down in Newark, Nj to give you the tools you’ll need to TAKE OWNERSHIP of your future! Space is limited and seats are going fast! Isn’t it time you took control of your success? You won’t want to miss this event powered by Fownders."))))),c.default.createElement(d.default,null))))};t.default=o,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-learnmore-js-01050955354b793b15d8.js.map