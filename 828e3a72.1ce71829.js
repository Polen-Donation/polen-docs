(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(138)),o={id:"transparency",title:"Transparency"},l={unversionedId:"ruby/methods/transparency",id:"ruby/methods/transparency",isDocsHomePage:!1,title:"Transparency",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/ruby/methods/transparency.md",slug:"/ruby/methods/transparency",permalink:"/polen-docs/docs/ruby/methods/transparency",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ruby/methods/transparency.md",version:"current",sidebar:"someSidebar",previous:{title:"Transaction",permalink:"/polen-docs/docs/ruby/methods/transaction"},next:{title:"User",permalink:"/polen-docs/docs/ruby/methods/user"}},b=[{value:"Get Impact Consolidated",id:"get-impact-consolidated",children:[]},{value:"Get Content Detail",id:"get-content-detail",children:[]},{value:"Get Transparency Receipts",id:"get-transparency-receipts",children:[]},{value:"Get Content List",id:"get-content-list",children:[]}],c={toc:b};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(r.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(r.b)("h2",{id:"get-impact-consolidated"},"Get Impact Consolidated"),Object(r.b)("p",null,"Este m\xe9todo retorna um consolidado do total j\xe1 doado por sua empresa e o impacto que isso teve nas causas apoiadas."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"storeId: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string")),Object(r.b)("li",{parentName:"ul"},"ngos: ",Object(r.b)("inlineCode",{parentName:"li"},"array")),Object(r.b)("li",{parentName:"ul"},"totalRaised: ",Object(r.b)("inlineCode",{parentName:"li"},"number")),Object(r.b)("li",{parentName:"ul"},"totalPurchases: ",Object(r.b)("inlineCode",{parentName:"li"},"number")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  storeId: ""\n}\n\nimpact = polen.get_imapact_consolidated(params)\nputs impact.body\n')),Object(r.b)("h2",{id:"get-content-detail"},"Get Content Detail"),Object(r.b)("p",null,"Este m\xe9todo retorna os detalhes de um conte\xfado espec\xedfico postado pela institui\xe7\xe3o."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"identifier"),": (obrigat\xf3rio) id do conte\xfado - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"id: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"causeId: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"title: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"description: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"contents: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"approved: ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),"."),Object(r.b)("li",{parentName:"ul"},"type: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"date: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"dateOfImpact: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"dateApproved: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  storeId: "",\n  indentifier: ""\n}\n\ndetail = polen.get_content_detail(params)\nputs detail.body\n')),Object(r.b)("h2",{id:"get-transparency-receipts"},"Get Transparency Receipts"),Object(r.b)("p",null,"Este m\xe9todo retorna todos os recibos de doa\xe7\xe3o assinados pelas institui\xe7\xf5es."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"causeId"),": (obrigat\xf3rio) id da causa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"startDate"),": (opcional) filtra por data - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"endDate"),": (opcional) filtra por data - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"results: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"pageNumber: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"nextPage: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  storeId: "",\n  causeId: ""\n}\n\nreceipts = polen.get_transparency_receipts(params)\nputs receipts.body\n')),Object(r.b)("h2",{id:"get-content-list"},"Get Content List"),Object(r.b)("p",null,"Este m\xe9todo todos os conte\xfados postados pelas causas e institui\xe7\xf5es que sua empresa apoia como fotos, v\xeddeos, depoimentos, recibos e comprovantes."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"causeId"),": (obrigat\xf3rio) id da causa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"startDate"),": (opcional) filtra por data - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"endDate"),": (opcional) filtra por data - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"results: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"pageNumber: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"nextPage: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  storeId: "",\n  causeId: ""\n}\n\nlist = polen.get_content_list(params)\nputs list.body\n')))}p.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(o,".").concat(d)]||m[d]||s[d]||r;return a?i.a.createElement(u,l(l({ref:t},c),{},{components:a})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);