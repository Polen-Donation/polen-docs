(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(138)),i={id:"platform",title:"Platform"},c={unversionedId:"python/methods/platform",id:"python/methods/platform",isDocsHomePage:!1,title:"Platform",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/python/methods/platform.md",slug:"/python/methods/platform",permalink:"/polen-docs/docs/python/methods/platform",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/methods/platform.md",version:"current",sidebar:"someSidebar",previous:{title:"Donation Notify",permalink:"/polen-docs/docs/python/methods/notify-donation"},next:{title:"Store",permalink:"/polen-docs/docs/python/methods/store"}},l=[{value:"Get Platform List",id:"get-platform-list",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(o.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(o.b)("h2",{id:"get-platform-list"},"Get Platform List"),Object(o.b)("p",null,"Este m\xe9todo retorna todas as plataformas parceiras que o Polen j\xe1 possui integra\xe7\xe3o nativa."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Recebe o argumento ",Object(o.b)("inlineCode",{parentName:"li"},"params")," que \xe9 um dicion\xe1rio com os campos:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(o.b)("inlineCode",{parentName:"li"},"number"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(o.b)("inlineCode",{parentName:"li"},"number"),".")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Retorna um objeto com os m\xe9todos:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"results: ",Object(o.b)("inlineCode",{parentName:"li"},"array"),"."),Object(o.b)("li",{parentName:"ul"},"pageNumber: ",Object(o.b)("inlineCode",{parentName:"li"},"number"),"."),Object(o.b)("li",{parentName:"ul"},"nextPage: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'storeId': \"id\"\n}\n\nlist = polen.get_platform_list(params)\nprint(list.content)\n")))}s.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,u=m["".concat(i,".").concat(d)]||m[d]||b[d]||o;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);