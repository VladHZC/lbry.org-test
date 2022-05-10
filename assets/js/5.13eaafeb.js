(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{376:function(t,e,n){"use strict";n(389),n(6),n(209),n(210),n(421),n(125),n(94);var i=n(372),a={name:"NavLink",props:{item:{required:!0}},computed:{absLink:function(){var t=this,e=this.$page.frontmatter._aliases?this.$page.frontmatter._aliases.find((function(e){return e.aliases.includes(t.item.link)})):null;return e?e.url:this.item.link},link:function(){return Object(i.b)(this.absLink)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(66),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",class:t.item.class||"",attrs:{role:"button",to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",class:t.item.class||"",attrs:{href:t.link,role:"button",target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},379:function(t,e,n){},393:function(t,e,n){},401:function(t,e,n){},413:function(t,e,n){"use strict";n(379)},427:function(t,e,n){"use strict";n(393)},435:function(t,e,n){"use strict";n(401)},446:function(t,e,n){"use strict";n.r(e);var i=n(373),a=n(374),s=n(378);Object(i.b)(a),Object(i.b)(s);var o={name:"Home",components:{IconifyIcon:i.a},computed:{data:function(){return this.$page.frontmatter}}},r=(n(413),n(66)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{role:"main"}},[n("header",{staticClass:"landing"},[n("div",{staticClass:"hero"},[n("img",{attrs:{src:t.data.heroImage,draggable:"false"}}),t._v(" "),n("div",{staticClass:"hero-text"},[n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(t.data.tagline||t.$description||"Welcome to your VuePress site"))])])]),t._v(" "),t.data.actionButtons&&t.data.actionButtons.length?n("p",{staticClass:"action-buttons"},t._l(t.data.actionButtons,(function(e){return n("a",{key:e.text,staticClass:"action-button",attrs:{target:"_blank",rel:"noopener",href:e.link}},[e.icon?n("IconifyIcon",{attrs:{icon:e.icon}}):t._e(),t._v(" "),n("span",[t._v(t._s(e.text))])],1)})),0):t._e()]),t._v(" "),n("Content",{staticClass:"content"})],1)}),[],!1,null,null,null).exports,c=(n(414),n(416)),u=n(442),h=n(444),f=n(408);function d(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var g={name:"Navbar",components:{SidebarButton:h.a,NavLinks:f.a,SearchBox:u.a,AlgoliaSearchBox:c.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(d(this.$el,"paddingLeft"))+parseInt(d(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},m=(n(427),Object(r.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar",attrs:{role:"navigation"}},[n("SidebarButton",{attrs:{role:"button"},on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$site.themeConfig.logo,alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name"},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{role:"search",options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),p=n(441),b=n(443),v={name:"Footer",components:{NavLink:n(376).a},computed:{data:function(){return this.$page.frontmatter},config:function(){return this.$site.themeConfig.footer||{}}}},_=(n(435),Object(r.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-main"},[t.config.logo?n("img",{attrs:{src:t.config.logo,draggable:"false"}}):t._e(),t._v(" "),t.config.columns&&t.config.columns.length?n("div",{staticClass:"columns"},t._l(t.config.columns,(function(e,i){return n("div",{key:i,staticClass:"column"},[n("span",{staticClass:"col-title"},[t._v(t._s(e.title))]),t._v(" "),e.rows?n("div",{staticClass:"links"},t._l(e.rows,(function(t,e){return n("NavLink",{key:e,attrs:{item:t}})})),1):t._e()])})),0):t._e()]),t._v(" "),t.config.finePrints?n("div",{staticClass:"fine-print"},[n("span",[t._v(t._s(t.config.finePrints[0]))]),t._v(" "),n("i",[t._v(t._s(t.config.finePrints[1]))])]):t._e()])}),[],!1,null,null,null).exports),k=n(372),$={name:"Layout",components:{Home:l,Page:p.a,Sidebar:b.a,Navbar:m,Footer:_},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(k.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},C=Object(r.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.footer&&t.$site.themeConfig.footer?n("Footer"):t._e()],1)}),[],!1,null,null,null);e.default=C.exports}}]);