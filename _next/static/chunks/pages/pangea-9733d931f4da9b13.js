(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{8353:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pangea",function(){return i(1046)}])},3119:function(e,n,i){"use strict";i.r(n),n.default={src:"/_next/static/media/pangeaTeaser.fb7bf710.jpg",height:8508,width:13944,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKWK/8QAGxABAAICAwAAAAAAAAAAAAAAAQIDABIhQlL/2gAIAQEAAT8AvrIyTqzDUPXDn//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwCI/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:5}},5434:function(e,n,i){"use strict";i.r(n),n.default={src:"/_next/static/media/pentagon.d7cd4fb8.png",height:512,width:1171,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AdnZlwSY02g6D/j3DkcYfsXzB1QDOR0EPwP9+tmCz/LWAajC+ibH+9Rl3PUAMxPzKHahSt4D9djkdQQIAPryIB5tAcfK9wy38OlT5/IKGpvQFZLzY8YbAPkCUAIJBN4G/fysmyQxREB6mb8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},7782:function(e,n,i){"use strict";i.d(n,{jE:function(){return m},yb:function(){return A},zM:function(){return x}});var t=i(5893),s=i(4829),a=i(728),r=i(1561),c=i(4184),o=i.n(c),l=i(1664),d=i.n(l),u=i(7294),A="headerNav",m=(0,u.memo)(function(e){var n=e.navSections,i="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100",s=o()(i,"text-orange-500"),a=o()(i,"text-neutral-100");return(0,t.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:A,children:(0,t.jsxs)("nav",{className:"flex justify-center gap-x-8",children:[(0,t.jsx)(d(),{href:"/",passHref:!0,children:(0,t.jsx)("a",{className:a,children:"Home"},"home")}),n.map(function(e){return(0,t.jsx)(h,{activeClass:s,current:!1,inactiveClass:a,section:e},e)})]})})}),x=(0,u.memo)(function(e){var n=e.navSections,i=(0,u.useState)(!1),c=i[0],l=i[1],A=(0,u.useCallback)(function(){l(!c)},[c]),m="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",x=o()(m,"bg-neutral-900 text-white font-bold"),g=o()(m,"text-neutral-200 font-medium");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("button",{"aria-label":"Menu Button",className:"fixed top-2 right-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden",onClick:A,children:[(0,t.jsx)(r.Z,{className:"h-8 w-8 text-white"}),(0,t.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,t.jsx)(s.u.Root,{as:u.Fragment,show:c,children:(0,t.jsxs)(a.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:A,children:[(0,t.jsx)(s.u.Child,{as:u.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,t.jsx)(a.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,t.jsx)(s.u.Child,{as:u.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,t.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,t.jsxs)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:[(0,t.jsx)(d(),{href:"/",passHref:!0,children:(0,t.jsx)("a",{className:g,onClick:A,children:"Home"},"home")}),n.map(function(e){return(0,t.jsx)(h,{activeClass:x,current:!1,inactiveClass:g,onClick:A,section:e},e)})]})})})]})})]})}),h=(0,u.memo)(function(e){var n=e.section,i=e.current,s=e.inactiveClass,a=e.activeClass,r=e.onClick;return(0,t.jsx)(d(),{href:"#".concat(n),passHref:!0,children:(0,t.jsx)("a",{className:o()(i?a:s),onClick:r,children:n},n)})})},2535:function(e,n,i){"use strict";i.d(n,{e:function(){return a}});var t=i(7294),s=i(7782),a=function(e,n){(0,t.useEffect)(function(){var i=document.querySelectorAll(e),t=Array.from(i),a=document.getElementById(s.yb),r=new IntersectionObserver(function(e){e.forEach(function(e){var i=e.boundingClientRect.y,s=e.target.getAttribute("id");if(a){var r,c={id:s,currentIndex:t.findIndex(function(e){return e.getAttribute("id")===s}),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:i<a.getBoundingClientRect().y,belowToc:!(i<a.getBoundingClientRect().y)};c.isIntersecting?n(c.id):!c.isIntersecting&&c.currentRatio<1&&c.currentRatio>0&&c.belowToc&&n(null===(r=t[c.currentIndex-1])||void 0===r?void 0:r.getAttribute("id"))}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return i.forEach(function(e){r.observe(e)}),function(){r.disconnect()}},[])}},1046:function(e,n,i){"use strict";i.r(n),i.d(n,{HeaderSectionIdList:function(){return h},SectionId:function(){return x}});var t=i(603),s=i(5893),a=i(7294),r=i(9770),c=i(6571),o=i(3031),l=i(11),d=i(2535),u=i(7782),A=i(5675),m=i.n(A),x={About:"about",Demo:"demo",News:"news",Download:"download",Disclaimer:"disclaimer",Publications:"publications"},h=[x.About,x.Demo,x.News,x.Download,x.Publications,],g=[["2023.4",(0,s.jsxs)(s.Fragment,{children:["Our paper is available on ",(0,s.jsx)("a",{className:"underline text-sky-600",href:"https://arxiv.org/pdf/2304.00553.pdf",children:"arXiv"}),"."]}),],["2023.3",(0,s.jsx)(s.Fragment,{children:"Trail run"}),],],f=(0,a.memo)(function(){return(0,s.jsxs)(r.Z,{description:"P.a.n.g.e.a",title:"Pangea",children:[(0,s.jsx)(p,{}),(0,s.jsx)("div",{className:"relative flex h-screen-no w-screen items-center justify-center bg-neutral-100",children:(0,s.jsxs)("div",{className:"flex flex-col z-10 w-full max-w-screen-lg p-4 lg:px-0 items-center text-center ",children:[(0,s.jsx)("div",{className:"h-20"}),(0,s.jsx)("h1",{className:"text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl p-4",children:"Pangea: Unified Semantic Space for Human Action Understanding"}),(0,s.jsx)("p",{className:"text-gray-600 text-2xl",children:"MVIG-RHOS, SJTU"})]})}),(0,s.jsx)(o.Z,{className:"bg-neutral-100",sectionId:x.About,children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("div",{className:"grid justify-items-center pb-8",children:(0,s.jsx)("div",{className:"w-3/4",children:(0,s.jsx)(m(),{alt:"demo",src:i(3119),className:"place-self-center"})})}),(0,s.jsx)("div",{children:"Action understanding matters and attracts attention. It can be formed as the mapping from the action physical space to the semantic space. Typically, researchers built action datasets according to idiosyncratic choices to define classes and push the envelope of benchmarks respectively. Thus, datasets are incompatible with each other like “Isolated Islands” due to semantic gaps and various class granularities, e.g., do housework in dataset A and wash plate in dataset B. We argue that a more principled semantic space is an urgent need to concentrate the community efforts and enable us to use all datasets together to pursue generalizable action learning. To this end, we design a Poincare action semantic space in view of verb taxonomy hierarchy and covering massive actions. By aligning the classes of previous datasets to our semantic space, we gather (image/video/skeleton/MoCap) datasets into a unified database in a unified label system, i.e., bridging “isolated islands” into a “Pangea”. Accordingly, we propose a bidirectional mapping model between physical and semantic space to fully use Pangea. In extensive experiments, our method shows significant superiority, especially in transfer learning."})]})}),(0,s.jsx)(o.Z,{className:"bg-neutral-100",sectionId:x.Demo,children:(0,s.jsx)(l.Z,{title:"Demo",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("video",{autoPlay:!0,loop:!0,controls:!0,children:(0,s.jsx)("source",{src:"/media/demo_pangea.mp4",type:"video/mp4"})}),(0,s.jsxs)("div",{className:"grid grid-cols-2 pt-6 gap-1",children:[(0,s.jsxs)("p",{children:[" ",(0,s.jsx)("b",{children:"Top"}),": video frames "]}),(0,s.jsxs)("p",{children:[" ",(0,s.jsx)("b",{children:"Left-bottom"}),": semantic prediction visualization "]}),(0,s.jsxs)("p",{children:[" ",(0,s.jsx)("b",{children:"Right-bottom"}),": semantic prediction details "]})]})]})})}),(0,s.jsx)(o.Z,{className:"bg-neutral-100",sectionId:x.News,children:(0,s.jsx)(l.Z,{title:"News and Olds",children:(0,s.jsx)("div",{className:"flex flex-col",children:g.map(function(e,n){var i=(0,t.Z)(e,2),a=i[0],r=i[1];return(0,s.jsxs)("div",{className:"pb-2",children:[(0,s.jsxs)("span",{className:"flex-1 font-bold sm:flex-none",children:["[",a,"] "]}),(0,s.jsx)("span",{className:"flex-1 sm:flex-none",children:r})]},"".concat(a,"-").concat(n))})})})}),(0,s.jsx)(o.Z,{className:"bg-neutral-100",sectionId:x.Demo,children:(0,s.jsx)(l.Z,{title:"Results",children:(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsx)("div",{children:(0,s.jsx)(m(),{alt:"pentagon",src:i(5434),className:"place-self-center"})})})})}),(0,s.jsx)(o.Z,{className:"bg-neutral-100",sectionId:x.Download,children:(0,s.jsx)(l.Z,{title:"Download",children:(0,s.jsx)("div",{className:"flex flex-col",children:(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"Our data and code will come very soon!"})})})})}),(0,s.jsx)(o.Z,{className:"bg-neutral-100",sectionId:x.Publications,children:(0,s.jsx)(l.Z,{title:"Publications",children:(0,s.jsxs)("div",{className:"flex flex-col divide-y-2",children:[(0,s.jsx)("div",{children:"Before using our data and code in your project, please cite:"}),(0,s.jsx)("div",{className:"text-sm bg-neutral-300 p-2",children:(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:"@ARTICLE{li2023isolated,\n  title={From Isolated Islands to Pangea: Unifying Semantic Space for Human Action Understanding},\n  author={Li, Yong-Lu and Wu, Xiaoqian and Liu, Xinpeng and Dou, Yiming and Ji, Yikun \n    and Zhang, Junyi and Li, Yixing and Tan, Jingru and Lu, Xudong and Lu, Cewu},\n  journal={arXiv preprint arXiv:2304.00553},\n  year={2023},\n}"})})})]})})}),(0,s.jsx)(o.Z,{className:"bg-neutral-100",sectionId:x.Disclaimer,children:(0,s.jsx)(l.Z,{title:"Disclaimer",children:(0,s.jsx)("div",{className:"flex flex-col divide-y-4",children:(0,s.jsxs)("p",{children:[(0,s.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc/4.0/",children:(0,s.jsx)("img",{alt:"Creative Commons License",style:{borderWidth:0},src:"https://i.creativecommons.org/l/by-nc/4.0/88x31.png"})}),(0,s.jsx)("br",{}),"This work is licensed under a ",(0,s.jsx)("a",{className:"text-sky-600",rel:"license",href:"http://creativecommons.org/licenses/by-nc/4.0/",children:"Creative Commons Attribution-NonCommercial 4.0 International License"}),"."]})})})}),(0,s.jsx)(c.Z,{})]})}),p=(0,a.memo)(function(){var e=(0,a.useState)(null),n=e[0],i=e[1],t=(0,a.useMemo)(function(){return h},[]),r=(0,a.useCallback)(function(e){e&&i(e)},[]);return(0,d.e)(t.map(function(e){return"#".concat(e)}).join(","),r),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.zM,{currentSection:n,navSections:t}),(0,s.jsx)(u.jE,{currentSection:n,navSections:t})]})});n.default=f}},function(e){e.O(0,[505,526,345,774,888,179],function(){return e(e.s=8353)}),_N_E=e.O()}]);