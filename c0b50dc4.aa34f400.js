(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(138)),o={id:"finance",title:"Finance"},c={unversionedId:"python/methods/finance",id:"python/methods/finance",isDocsHomePage:!1,title:"Finance",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/python/methods/finance.md",slug:"/python/methods/finance",permalink:"/polen-docs/docs/python/methods/finance",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/methods/finance.md",version:"current",sidebar:"someSidebar",previous:{title:"Donation Direct",permalink:"/polen-docs/docs/python/methods/donation-direct"},next:{title:"Donation Notify",permalink:"/polen-docs/docs/python/methods/notify-donation"}},l=[{value:"Get Finance Billing List",id:"get-finance-billing-list",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(i.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(i.b)("h2",{id:"get-finance-billing-list"},"Get Finance Billing List"),Object(i.b)("p",null,"Este m\xe9todo retorna todas as suas faturas de pagamento."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"startDate"),": (opcional) data incicial - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"endDate"),": (opcinal) data final - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"results: ",Object(i.b)("inlineCode",{parentName:"li"},"array"),"."),Object(i.b)("li",{parentName:"ul"},"pageNumber: ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},"nextPage: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'storeId': \"id\"\n}\n\nlist = polen.get_finance_billing_list(params)\nprint(list.content)\n")))}b.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);