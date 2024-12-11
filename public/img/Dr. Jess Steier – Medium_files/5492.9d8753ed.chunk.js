"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[5492],{7852:(e,n,t)=>{t.d(n,{e:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"usePublicationSearchResultClickTracker_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"algoliaObjectId"}},{kind:"Field",name:{kind:"Name",value:"domain"}},{kind:"Field",name:{kind:"Name",value:"slug"}}]}}]}},98711:(e,n,t)=>{t.d(n,{Y:()=>m,z:()=>s});var i=t(45458),a=t(77485),r=t(59265),l=t(12790),o=t(55918),c=t(82567),d=t(3545),u=t(7852),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"EntityFollowList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"algoliaObjectId"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"EntityPresentationRankedModulePublishingTracker_entity"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}}]}}].concat((0,i.A)(a.R.definitions),(0,i.A)(r.v0.definitions),(0,i.A)(l.c.definitions),(0,i.A)(o.s.definitions))},m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"EntityFollowList_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"algoliaObjectId"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"EntityPresentationRankedModulePublishingTracker_entity"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePublicationSearchResultClickTracker_collection"}}]}}].concat((0,i.A)(c.$.definitions),(0,i.A)(d.f.definitions),(0,i.A)(l.c.definitions),(0,i.A)(u.e.definitions))}},43825:(e,n,t)=>{t.d(n,{P:()=>T});var i=t(96540),a=t(39931),r=t(36469),l=t(88474),o=t(28899),c=t(87147),d=t(2550),u=t(21335),s=t(23393),m=t(54654),k=t(52290),p=t(86527),g=t(39410),y=t(36557),f=t(72130),v=t(49287),E=t(56774),S=t(79429),F=function(e){var n=e.entity;return"User"===n.__typename?i.createElement(s.H8,{user:n,scale:"XS",link:!0}):i.createElement(o.u,{collection:n,size:s.eV.XS,link:!0})},h=function(e){var n=e.entity,t=e.buttonStyleFn,a=e.susiEntry,r=e.trackingV2;return"User"===n.__typename?i.createElement(m.P,{user:n,buttonSize:"SMALL",buttonStyleFn:t||function(e){return e?"BRAND":"SUBTLE"},susiEntry:a,trackingV2:r}):i.createElement(c.E,{collection:n,buttonSize:"SMALL",buttonStyleFn:t||function(e){return e?"BRAND":"SUBTLE"},susiEntry:a,trackingV2:r})},N=function(e){var n=e.children,t=e.isEnabled,a=e.entity,r=e.trackingV2,l=(0,E.X)({entity:a,trackingV2:r});return t?i.createElement(k.a,{height:"100%",width:"100%",ref:l},n):n},w=function(e){var n=e.entity,t=e.enableEntityPresentationTracking,o=e.susiEntry,c=e.buttonStyleFn,d=e.onClickTracking,s=e.onUserFollowingChange,m=e.trackingV2,f=e.noPadding,v=(0,i.useRef)(null),E=(0,u.cd)("User"===n.__typename?{id:n.id}:null).viewerEdge,S=(0,l.E)("User"===n.__typename?n:null),w=(0,a.p)(n),T=n.name,x="User"===n.__typename?n.bio:n.description;return(0,i.useEffect)((function(){"User"===n.__typename&&s&&(E&&null===v.current?v.current=E.isFollowing:E&&v.current!==E.isFollowing&&(v.current=E.isFollowing,s(E.isFollowing)))}),[null==E?void 0:E.isFollowing,s,v.current,n.__typename]),i.createElement(N,{entity:n,isEnabled:t,trackingV2:m},i.createElement(k.a,{paddingBottom:f?void 0:"16px",width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between",onClickTracking:d},i.createElement(k.a,{display:"flex",marginRight:"8px"},i.createElement(F,{entity:n}),i.createElement(k.a,{marginLeft:"16px",marginRight:"8px"},i.createElement(k.a,{display:"flex",alignItems:"center"},i.createElement(p.N,{href:w},i.createElement(g.hE,{scale:"XS",clamp:2,wordBreak:"break-word"},T)),S&&i.createElement(r.G,{marginLeft:"2px",marginTop:"1px",size:"M",userId:n.id,alignSelf:"flex-end"})),"Collection"===n.__typename&&i.createElement(k.a,{marginTop:"2px",marginBottom:"8px"},i.createElement(y.kZ,{scale:"S",color:"DARKER"},"Publication")),i.createElement(p.N,{href:w},i.createElement(k.a,{marginTop:"4px",wordBreak:"break-word"},i.createElement(y.kZ,{scale:"S",clamp:{xs:1,sm:1,md:1,lg:1,xl:2}},x))))),i.createElement(h,{entity:n,susiEntry:o,buttonStyleFn:c,trackingV2:m})))},T=function(e){var n=e.entities,t=e.children,a=e.enableEntityPresentationTracking,r=void 0!==a&&a,l=e.susiEntry,o=e.enableKilnModulePresentationTracking,c=void 0!==o&&o,u=e.buttonStyleFn,s=e.onAlgoliaClickReport,m=e.onUserFollowingChange,p=e.trackingV2,g=e.onCollectionEntityClick,y=(0,f.$L)(),E=(0,d.A)().viewerId,F=(0,S.s)({onPresentedFn:function(){c&&y.event("entitiesToFollow.presented",{userId:E})}}),h=(0,i.useCallback)((function(e,n){return"Collection"===e.__typename&&g?g(e,n):s?s(e.algoliaObjectId,n):void 0}),[g,s]);return i.createElement(k.a,{ref:F},i.createElement(k.a,null,t),i.createElement(k.a,null,n.map((function(e,t){return i.createElement(v.Ne,{key:"entity-".concat(e.id),extendSource:!0,source:{index:t}},i.createElement(w,{onClickTracking:function(){return h(e,t)},susiEntry:l,entity:e,enableEntityPresentationTracking:r,buttonStyleFn:u,onUserFollowingChange:m,trackingV2:p,noPadding:t===n.length-1}))}))))}},25760:(e,n,t)=>{t.d(n,{E:()=>r});var i=t(96540),a=t(52290),r=function(e){var n=e.children,t=e.marginTop,r=void 0===t?"40px":t,l=e.paddingBottom,o=void 0===l?"0px":l,c=e.showBorderBottom,d=void 0!==c&&c;return i.createElement(a.a,{marginTop:r,paddingBottom:o,borderBottom:d?"neutral.primary":"NONE"},n)}},39931:(e,n,t)=>{t.d(n,{p:()=>r});var i=t(60213),a=t(64122),r=function(e){var n=(0,i.u)(),t=(0,a.W)();return"Collection"===e.__typename?n(e):"User"===e.__typename?t(e):""}},24505:(e,n,t)=>{t.d(n,{y:()=>u});var i=t(58168),a=t(96540),r=t(5811),l=t(5863),o=t(62830),c=t(52290),d=t(57005),u=function(e){var n=e.children,t=e.innerPadding,u=void 0===t?{}:t,s=e.footerPadding,m=e.display,k=void 0===m?"block":m,p=(0,a.useRef)(0),g=(0,a.useRef)(null),y=(0,a.useRef)("stickyToTop"),f=(0,a.useRef)(null),v=(0,l.s)(),E=v.fullNavbarHeight,S=v.topNavUpsellHeight,F=v.addHeightChangeHandler,h=v.removeHeightChangeHandler;return(0,d.E)((function(){var e=function(e){var n=e.currentHeight;g.current&&f.current&&("notSticky"!==y.current&&(g.current.style.top="".concat(n,"px")),f.current.style.minHeight="calc(100vh - ".concat(n,"px)"))};return F(e),function(){h(e)}}),[]),(0,d.E)((function(){var e=function(){if(g.current){var e=window.scrollY>p.current;p.current=window.scrollY;var n=window.innerHeight,t=g.current.offsetHeight-n,i=o.oe;t<=20||(e?("notSticky"===y.current&&window.scrollY>=g.current.offsetTop+t+i+S&&(y.current="stickyToBottom",g.current.style.position="sticky",g.current.style.top="".concat(-t,"px")),"stickyToTop"===y.current&&(y.current="notSticky",g.current.style.position="relative",g.current.style.top="0px",g.current.style.marginTop="0px",g.current.style.marginTop="".concat(Math.max(p.current-g.current.offsetTop,0),"px"))):("notSticky"===y.current&&window.scrollY<=g.current.offsetTop&&(y.current="stickyToTop",g.current.style.position="sticky",g.current.style.top="".concat(i+S,"px"),g.current.style.marginTop="0px"),"stickyToBottom"===y.current&&(y.current="notSticky",g.current.style.position="relative",g.current.style.top="0px",g.current.style.marginTop="0px",g.current.style.marginTop="".concat(p.current-t-g.current.offsetTop-i-S,"px"))))}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[S]),a.createElement(c.a,{position:"sticky",top:"".concat(E,"px"),ref:g,display:k},a.createElement(c.a,(0,i.A)({display:"flex",flexDirection:"column",minHeight:"calc(100vh - ".concat(E,"px)"),ref:f},u),a.createElement(c.a,{flexGrow:"1"},n),a.createElement(r.j,{detailScale:"XS",spacing:"XS",padding:s})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5492.9d8753ed.chunk.js.map