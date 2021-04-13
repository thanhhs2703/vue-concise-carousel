import{r as t,o as a,c as s,a as n,w as e,F as i,b as o,d as p,e as l,p as r,f as c,g as u,h as d,i as g,v as h,j as k,k as m,l as f}from"./vendor.0e3691b3.js";!function(t=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(s){const n=new URL(t,location),e=t=>{URL.revokeObjectURL(t.src),t.remove()};self[a]=t=>new Promise(((s,i)=>{const o=new URL(t,n);if(self[a].moduleMap[o])return s(self[a].moduleMap[o]);const p=new Blob([`import * as m from '${o}';`,`${a}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(p),onerror(){i(new Error(`Failed to import: ${t}`)),e(l)},onload(){s(self[a].moduleMap[o]),e(l)}});document.head.appendChild(l)})),self[a].moduleMap={}}}("/assets/");const v={name:"ExampleBasic"},b={class:"content"},P=n("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 1. Basic ",-1),y=n("p",null,"No options configured, 10 slides added to the carousel.",-1),C={class:"example-basic",style:{"margin-bottom":"50px"}},x={class:"preview"},w=n("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),T=p('<div class="template"><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);v.render=function(p,l,r,c,u,d){const g=t("slide"),h=t("carousel");return a(),s("div",b,[P,y,n("div",C,[n("div",x,[n(h,null,{default:e((()=>[(a(),s(i,null,o(10,(t=>n(g,{key:t},{default:e((()=>[w])),_:2},1024))),64))])),_:1})]),T])])};const S={name:"ExampleResponsive"},$={class:"content"},M=n("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 2. Responsive ",-1),O=n("p",null," Configured breakpoints: 2 slides on mobile (<= 480px), 3 slides on tablet (<= 768). ",-1),E={class:"example-responsive",style:{"margin-bottom":"50px"}},L={class:"preview"},A=n("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),W=p('<div class="template"><p>Template</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:per-page-custom</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>[[480, 2], [768, 3]]<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);S.render=function(p,l,r,c,u,d){const g=t("slide"),h=t("carousel");return a(),s("div",$,[M,O,n("div",E,[n("div",L,[n(h,{"per-page-custom":[[480,2],[768,3]]},{default:e((()=>[(a(),s(i,null,o(10,(t=>n(g,{key:t},{default:e((()=>[A])),_:2},1024))),64))])),_:1})]),W])])};const N={name:"ExampleScrollPerPage"},j={class:"content"},B=n("h3",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," 3. Scroll per page false ",-1),H=n("p",null," Instead of scrolling per page, the carousel will scroll on a per item basis or perPageCustom with each movement. ",-1),V={class:"example-scroll-per-page",style:{"margin-bottom":"50px"}},D={class:"preview"},z=n("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),R=p('<div class="template"><p>Template</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:scroll-per-page</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1);N.render=function(p,l,r,c,u,d){const g=t("slide"),h=t("carousel");return a(),s("div",j,[B,H,n("div",V,[n("div",D,[n(h,{"scroll-per-page":!1},{default:e((()=>[(a(),s(i,null,o(10,(t=>n(g,{key:t},{default:e((()=>[z])),_:2},1024))),64))])),_:1})]),R])])};const I={name:"App",components:{ExampleBasic:v,ExampleResponsive:S,ExampleScrollPerPage:N},setup:()=>({slideCount:6})},_={id:"hero",style:{"margin-top":"50px","margin-bottom":"50px"}},q=n("h1",{style:{"text-align":"center"}}," Vue Concise Carousel is SSR and CSR friendly. ",-1),X=n("p",{class:"action",style:{"text-align":"center"}},[n("a",{class:"button",href:"#install"},"GET STARTED"),n("a",{class:"button white",href:"https://github.com/jambonn/vue-concise-carousel#readme"}," GITHUB ")],-1),F={id:"example"},U=n("img",{style:{width:"100%"},src:"https://via.placeholder.com/1080.png/09f/fff"},null,-1),Y=p('<div id="install" class="container"><h2 id="installation" style="border-bottom:1px solid #eaecef;padding-bottom:0.3em;"> Installation </h2><h3>yarn/npm</h3><pre class="language-bash"><code class="language-bash"><span class="token comment"># npm</span>\n<span class="token function">npm</span> i @jambonn/vue-concise-carousel\n<span class="token comment"># yarn</span>\n<span class="token function">yarn</span> <span class="token function">add</span> @jambonn/vue-concise-carousel</code></pre></div><div id="quick-start" class="container"><h2 style="border-bottom:1px solid #eaecef;padding-bottom:0.3em;"> Quick Start </h2><p> See <a href="https://github.com/jambonn/vue-concise-carousel#configuration"> Configuration </a> to learn advanced usage. </p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>carousel</span> <span class="token attr-name">:center-mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:navigation-enabled</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slide</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slide</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>carousel</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> { Carousel, Slide } <span class="token keyword">from</span> <span class="token string">&#39;@jambonn/vue-concise-carousel&#39;</span>\n  <span class="token keyword">import</span> <span class="token string">&#39;@jambonn/vue-concise-carousel/dist/vue-concise-carousel.css&#39;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">&#39;ConciseCarouselComponent&#39;</span><span class="token punctuation">,</span>\n    components<span class="token punctuation">:</span> <span class="token punctuation">{</span> Carousel, Slide <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></code></pre></div>',2),G={id:"example-full",class:"container"},K=n("h2",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," Examples ",-1),Q=n("div",{id:"license",class:"container"},[n("h2",{style:{"border-bottom":"1px solid #eaecef","padding-bottom":"0.3em"}}," License "),n("p",null,[l(" This software is licensed under the "),n("a",{href:"https://github.com/jambonn/vue-concise-carousel/blob/next/LICENSE.md"}," MIT "),l(" . ")])],-1);I.render=function(p,l,r,c,u,d){const g=t("slide"),h=t("carousel"),k=t("example-basic"),m=t("example-responsive"),f=t("example-scroll-per-page");return a(),s("div",_,[q,X,n("div",F,[n(h,{"per-page-custom":[[480,1],[768,4]],"center-mode":!0,"adjustable-height":!1,"navigation-enabled":!0},{default:e((()=>[(a(!0),s(i,null,o(c.slideCount,(t=>(a(),s(g,{key:t},{default:e((()=>[U])),_:2},1024)))),128))])),_:1})]),Y,n("div",G,[K,n(k),n(m),n(f)]),Q])};const J="undefined"==typeof window;const Z={name:"navigation",inject:["carousel"],emits:["navigation-click"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance(t){this.$emit("navigation-click",t)}}},tt=d();r("data-v-dc1832dc");const at={class:"VueCarousel-navigation"};c();const st=tt(((t,e,i,o,p,l)=>(a(),s("div",at,[n("button",{type:"button","aria-label":"Previous page",tabindex:l.canAdvanceBackward?0:-1,class:["VueCarousel-navigation-button VueCarousel-navigation-prev",{"VueCarousel-navigation--disabled":!l.canAdvanceBackward}],onClick:e[1]||(e[1]=u((t=>l.triggerPageAdvance("backward")),["prevent"])),style:`padding: ${i.clickTargetSize}px; margin-right: -${i.clickTargetSize}px;`,innerHTML:i.prevLabel},null,14,["tabindex","innerHTML"]),n("button",{type:"button","aria-label":"Next page",tabindex:l.canAdvanceForward?0:-1,class:["VueCarousel-navigation-button VueCarousel-navigation-next",{"VueCarousel-navigation--disabled":!l.canAdvanceForward}],onClick:e[2]||(e[2]=u((t=>l.triggerPageAdvance("forward")),["prevent"])),style:`padding: ${i.clickTargetSize}px; margin-left: -${i.clickTargetSize}px;`,innerHTML:i.nextLabel},null,14,["tabindex","innerHTML"])]))));Z.render=st,Z.__scopeId="data-v-dc1832dc";const nt={name:"pagination",inject:["carousel"],emits:["pagination-click"],computed:{paginationPositionModifierName(){const{paginationPosition:t}=this.carousel;if(!(t.indexOf("overlay")<0))return t},paginationPropertyBasedOnPosition(){return this.carousel.paginationPosition.indexOf("top")>=0?"bottom":"top"},paginationCount(){return this.carousel&&this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount||0},dotContainerStyle(){const{carousel:t}=this;if(-1===t.maxPaginationDotCount)return{"margin-top":2*t.paginationPadding+"px"};const a=2*t.paginationPadding,s=t.maxPaginationDotCount*(t.paginationSize+a);return{"margin-top":2*t.paginationPadding+"px",overflow:"hidden",width:`${s}px`,margin:"0 auto","white-space":"nowrap"}}},methods:{goToPage(t){this.$emit("pagination-click",t)},isCurrentDot(t){return t===this.carousel.currentPage},dotStyle(t){const{carousel:a}=this,s={};if(s[`margin-${this.paginationPropertyBasedOnPosition}`]=2*a.paginationPadding+"px",Object.assign(s,{padding:`${a.paginationPadding}px`,width:`${a.paginationSize}px`,height:`${a.paginationSize}px`,"background-color":`${this.isCurrentDot(t)?a.paginationActiveColor:a.paginationColor}`}),-1===a.maxPaginationDotCount)return s;const n=a.paginationSize+2*a.paginationPadding,e=a.pageCount-a.maxPaginationDotCount,i=0-n*(a.currentPage>e?e:a.currentPage<=a.maxPaginationDotCount/2?0:a.currentPage-Math.ceil(a.maxPaginationDotCount/2)+1);return Object.assign(s,{"-webkit-transform":`translate3d(${i}px,0,0)`,transform:`translate3d(${i}px,0,0)`,"-webkit-transition":`-webkit-transform ${a.speed/1e3}s`,transition:`transform ${a.speed/1e3}s`})}}},et=d()(((t,e,p,l,r,c)=>g((a(),s("div",{class:["VueCarousel-pagination",{[`VueCarousel-pagination--${c.paginationPositionModifierName}`]:c.paginationPositionModifierName}]},[n("div",{class:"VueCarousel-dot-container",role:"tablist",style:c.dotContainerStyle},[(a(!0),s(i,null,o(c.paginationCount,((t,n)=>(a(),s("button",{key:`${t}_${n}`,class:["VueCarousel-dot",{"VueCarousel-dot--active":c.isCurrentDot(n)}],"aria-hidden":"false",role:"tab","aria-selected":c.isCurrentDot(n)?"true":"false",onClick:t=>c.goToPage(n),style:c.dotStyle(n)},null,14,["aria-selected","onClick"])))),128))],4)],2)),[[h,c.carousel.pageCount>1]])));nt.render=et,nt.__scopeId="data-v-5e3e3ccc";const it={onwebkittransitionstart:"webkitTransitionStart",onmoztransitionstart:"transitionstart",onotransitionstart:"oTransitionStart otransitionstart",ontransitionstart:"transitionstart"},ot={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},pt={name:"carousel",beforeUpdate(){this.computeCarouselWidth()},components:{Navigation:Z,Pagination:nt},data:()=>({browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!=typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend",currentHeight:"auto",slotSlides:[],autoplayInterval:null}),provide(){return{carousel:this}},emits:["input","mounted","page-change","navigation-click","pagination-click","transition-start","transition-end"],props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(t){return-1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)||t.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"}},watch:{value(t){t!==this.currentPage&&(this.goToPage(t),this.render())},navigateTo:{immediate:!0,handler(t){"object"==typeof t?(!1===t[1]&&(this.dragging=!0,setTimeout((()=>{this.dragging=!1}),this.refreshRate)),this.$nextTick((()=>{this.goToPage(t[0])}))):this.$nextTick((()=>{this.goToPage(t)}))}},currentPage(t){this.$emit("page-change",t),this.$emit("input",t)},autoplay(t){!1===t?this.pauseAutoplay():this.restartAutoplay()}},computed:{breakpointSlidesPerPage(){if(!this.perPageCustom)return this.perPage;const t=this.perPageCustom,a=this.browserWidth,s=t.sort(((t,a)=>t[0]>a[0]?-1:1)).filter((t=>a>=t[0]));return s[0]&&s[0][1]||this.perPage},canAdvanceForward(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward(){return this.loop||this.currentPage>0},currentPerPage(){return!this.perPageCustom||J?this.perPage:this.breakpointSlidesPerPage},currentOffset(){return this.isCenterModeEnabled?0:this.rtl?this.offset-this.dragOffset:-1*(this.offset+this.dragOffset)},isHidden(){return this.carouselWidth<=0},maxOffset(){return Math.max(this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor,0)},pageCount(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-this.currentPerPage+1},slideWidth(){return(this.carouselWidth-2*this.spacePadding)/this.currentPerPage},isNavigationRequired(){return this.slideCount>this.currentPerPage},isCenterModeEnabled(){return this.centerMode&&!this.isNavigationRequired},transitionStyle(){const t=this.speed/1e3+"s",a=`${t} ${this.easing} transform`;return this.adjustableHeight?`${a}, height ${t} ${this.adjustableHeightEasing||this.easing}`:a},padding(){const t=this.spacePadding;return t>0&&t}},methods:{getNextPage(){return this.currentPage<this.pageCount-1?+this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation")},goToLastSlide(){this.dragging=!0,setTimeout((()=>{this.dragging=!1}),this.refreshRate),this.$nextTick((()=>{this.goToPage(this.pageCount)}))},attachMutationObserver(){const t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(t){let a={attributes:!0,data:!0};if(this.adjustableHeight){const t={childList:!0,subtree:!0,characterData:!0};a=Object.assign({},a,t)}if(this.mutationObserver=new t((()=>{this.$nextTick((()=>{this.computeCarouselWidth(),this.computeCarouselHeight()}))})),this.$parent.$el){let t=this.$el.getElementsByClassName("VueCarousel-inner");for(let s=0;s<t.length;s++)this.mutationObserver.observe(t[s],a)}}},handleNavigation(t){this.advancePage(t),this.pauseAutoplay(),this.$emit("navigation-click",t)},detachMutationObserver(){this.mutationObserver&&this.mutationObserver.disconnect()},getBrowserWidth(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth(){let t=this.$el.getElementsByClassName("VueCarousel-inner");for(let a=0;a<t.length;a++)t[a].clientWidth>0&&(this.carouselWidth=t[a].clientWidth||0);return this.carouselWidth},getCarouselHeight(){if(!this.adjustableHeight)return"auto";const t=this.currentPerPage*(+this.currentPage+1)-1,a=[...Array(this.currentPerPage)].map(((a,s)=>this.getSlide(t+s))).reduce(((t,a)=>Math.max(t,a&&a.clientHeight||0)),0);return this.currentHeight=0===a?"auto":`${a}px`,this.currentHeight},getSlideCount(){this.slotSlides=this.$el.getElementsByClassName("VueCarousel-slide")||[],this.slideCount=this.slotSlides.length},getSlide(t){return this.slotSlides[t]},goToPage(t,a){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):this.slideWidth*t,this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t,this.dragMomentum=0,"pagination"===a&&(this.pauseAutoplay(),this.$emit("pagination-click",t)))},onStart(t){2!==t.button&&(document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY)},onEnd(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.pauseAutoplay();const a=this.isTouch?t.changedTouches[0].clientX:t.clientX,s=this.dragStartX-a;if(this.dragMomentum=s/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(s)>=this.minSwipeDistance){const t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(s)*(t/2)}this.rtl?this.offset-=this.dragOffset:this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0)},onDrag(t){const a=this.isTouch?t.touches[0].clientX:t.clientX,s=this.isTouch?t.touches[0].clientY:t.clientY,n=this.dragStartX-a,e=this.dragStartY-s;if(this.isTouch&&Math.abs(n)<Math.abs(e))return;t.stopImmediatePropagation(),this.dragOffset=n;const i=this.offset+this.dragOffset;this.rtl?0===this.offset&&this.dragOffset>0?this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset):this.offset===this.maxOffset&&this.dragOffset<0&&(this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset)):i<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):i>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset))},onResize(){this.computeCarouselWidth(),this.computeCarouselHeight(),this.dragging=!0,this.render(),setTimeout((()=>{this.dragging=!1}),this.refreshRate)},render(){this.rtl?this.offset-=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth:this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;const t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth,a=t*Math.floor(this.slideCount/(this.currentPerPage-1)),s=a+this.slideWidth*(this.slideCount%this.currentPerPage);this.offset>(a+s)/2?this.offset=s:this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth)},computeCarouselWidth(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds()},computeCarouselHeight(){this.getCarouselHeight()},setCurrentPageInBounds(){if(!this.canAdvanceForward&&this.scrollPerPage){const t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset))}},handleTransitionStart(){this.$emit("transition-start")},handleTransitionEnd(){this.$emit("transition-end")},pauseAutoplay(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay(){this.autoplay&&(this.autoplayInterval=setInterval(this.autoplayAdvancePage,this.autoplayTimeout))},restartAutoplay(){this.pauseAutoplay(),this.startAutoplay()},autoplayAdvancePage(){this.advancePage(this.autoplayDirection)}},mounted(){!J&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay(),window.addEventListener("resize",((t,a,s)=>{let n;return()=>{const e=void 0,i=s&&!n;clearTimeout(n),n=setTimeout((()=>{n=null,s||t.apply(e)}),a),i&&t.apply(e)}})(this.onResize,this.refreshRate)),(this.isTouch&&this.touchDrag||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.computeCarouselHeight(),this.transitionstart=(()=>{for(let t in it)if(t in window)return it[t]})(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=(()=>{for(let t in ot)if(t in window)return ot[t]})(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted"),"backward"===this.autoplayDirection&&this.goToLastSlide()},beforeUnmount(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart)},unmounted(){J||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))}},lt={class:"VueCarousel-wrapper",ref:"VueCarousel-wrapper"};pt.render=function(e,i,o,p,l,r){const c=t("navigation"),u=t("pagination");return a(),s("div",{class:["VueCarousel",{"VueCarousel--reverse":"top"===o.paginationPosition}]},[n("div",lt,[n("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":r.isCenterModeEnabled}],style:{transform:`translate(${r.currentOffset}px, 0)`,transition:l.dragging?"none":r.transitionStyle,"ms-flex-preferred-size":`${r.slideWidth}px`,"webkit-flex-basis":`${r.slideWidth}px`,"flex-basis":`${r.slideWidth}px`,visibility:r.slideWidth?"visible":"hidden",height:`${l.currentHeight}`,"padding-left":`${r.padding}px`,"padding-right":`${r.padding}px`}},[k(e.$slots,"default")],6)],512),o.navigationEnabled&&r.isNavigationRequired?k(e.$slots,"navigation",{key:0},(()=>[n(c,{clickTargetSize:o.navigationClickTargetSize,nextLabel:o.navigationNextLabel,prevLabel:o.navigationPrevLabel,onNavigationClick:r.handleNavigation},null,8,["clickTargetSize","nextLabel","prevLabel","onNavigationClick"])])):m("v-if",!0),o.paginationEnabled?k(e.$slots,"pagination",{key:1},(()=>[n(u,{onPaginationClick:i[1]||(i[1]=t=>r.goToPage(t,"pagination"))})])):m("v-if",!0)],2)};const rt={name:"slide",data:()=>({width:null}),inject:["carousel"],emits:["slide-click"],mounted(){J||this.$el.addEventListener("dragstart",(t=>t.preventDefault())),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd)},computed:{isAdjustableHeight(){const{adjustableHeight:t}=this.carousel;return t}},methods:{onTouchEnd(t){const a=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,s=this.carousel.dragStartX-a;(0===this.carousel.minSwipeDistance||Math.abs(s)<this.carousel.minSwipeDistance)&&this.$emit("slide-click",Object.assign({},t.currentTarget.dataset))}}};rt.render=function(t,n,e,i,o,p){return a(),s("div",{class:["VueCarousel-slide",{"VueCarousel-slide-adjustableHeight":p.isAdjustableHeight}],tabindex:"-1",role:"tabpanel"},[k(t.$slots,"default")],2)};const ct=f(I);ct.component(pt.name,pt),ct.component(rt.name,rt),ct.mount("#app");