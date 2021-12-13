(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(151)),o=["components"],l={id:"cause",title:"Cause"},c={unversionedId:"python/methods/cause",id:"python/methods/cause",isDocsHomePage:!1,title:"Cause",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/python/methods/cause.md",slug:"/python/methods/cause",permalink:"/docs/python/methods/cause",editUrl:"https://github.com/Polen-Donation/polen-docs/pulls/docs/python/methods/cause.md",version:"current",sidebar:"someSidebar",previous:{title:"Adicionando ao seu projeto",permalink:"/docs/python/python-install"},next:{title:"Company",permalink:"/docs/python/methods/company"}},b=[{value:"Get All Causes",id:"get-all-causes",children:[]},{value:"Get Category",id:"get-category",children:[]},{value:"Get Own Causes",id:"get-own-causes",children:[]}],p={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(i.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(i.b)("h2",{id:"get-all-causes"},"Get All Causes"),Object(i.b)("p",null,"Este m\xe9todo retorna todas as institui\xe7\xf5es cadastradas no Polen."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 100) - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"results: ",Object(i.b)("inlineCode",{parentName:"li"},"array"),"."),Object(i.b)("li",{parentName:"ul"},"pageNumber: ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},"nextPage: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'page': 20,\n  'pageSize': 50\n}\n\nall_cause = polen.get_all_cause(params)\nprint(all_cause.content)\n")),Object(i.b)("h2",{id:"get-category"},"Get Category"),Object(i.b)("p",null,"Este m\xe9todo retorna todas as categorias de causas cadastradas no Polen."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),": n\xfamero de uma p\xe1gina especifica - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pageSize"),": quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"results: ",Object(i.b)("inlineCode",{parentName:"li"},"array"),"."),Object(i.b)("li",{parentName:"ul"},"pageNumber: ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},"nextPage: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'page': 0,\n  'pageSize': 5\n}\n\ncategories = polen.get_cause_categories(params)\nprint(categories.content)\n")),Object(i.b)("h2",{id:"get-own-causes"},"Get Own Causes"),Object(i.b)("p",null,"Este m\xe9todo retorna as causas apoiadas por uma loja."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) identificador da loja - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"userId"),": (opcional) filtra por institui\xe7\xf5es que o consumidor j\xe1 apoiou - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"city"),": (opcional) filtra por cidade - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state"),": (opcinal) filtra por estado - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"onlySelected"),": (opcional) filtra por institui\xe7\xf5es selecionadas pelo usu\xe1rio - ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"results: ",Object(i.b)("inlineCode",{parentName:"li"},"array"),"."),Object(i.b)("li",{parentName:"ul"},"pageNumber: ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},"nextPage: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status.code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'storeId': \"id\"\n}\n\nown_causes = polen.get_own_cause(params)\nprint(own_causes.content)\n")))}s.isMDXComponent=!0},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return a?r.a.createElement(d,l(l({ref:t},b),{},{components:a})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);