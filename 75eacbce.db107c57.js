(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{138:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return u}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),c=function(e){var a=i.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=c(e.components);return i.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},s=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=c(t),s=n,u=m["".concat(l,".").concat(s)]||m[s]||d[s]||r;return t?i.a.createElement(u,o(o({ref:a},p),{},{components:t})):i.a.createElement(u,o({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var b in a)hasOwnProperty.call(a,b)&&(o[b]=a[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},97:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return c}));var n=t(3),i=t(7),r=(t(0),t(138)),l={id:"company",title:"Company"},o={unversionedId:"ruby/methods/company",id:"ruby/methods/company",isDocsHomePage:!1,title:"Company",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/ruby/methods/company.md",slug:"/ruby/methods/company",permalink:"/polen-docs/docs/ruby/methods/company",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ruby/methods/company.md",version:"current",sidebar:"someSidebar",previous:{title:"Cause",permalink:"/polen-docs/docs/ruby/methods/cause"},next:{title:"Donation Direct",permalink:"/polen-docs/docs/ruby/methods/donation-direct"}},b=[{value:"Get Company Details",id:"get-company-details",children:[]},{value:"Get Company List",id:"get-company-list",children:[]},{value:"Get Company Store",id:"get-company-store",children:[]},{value:"Update Company",id:"update-company",children:[]},{value:"Create Company",id:"create-company",children:[]}],p={toc:b};function c(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(r.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(r.b)("h2",{id:"get-company-details"},"Get Company Details"),Object(r.b)("p",null,"Este m\xe9todo retorna os detalhes de uma empresa espec\xedfica."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da Empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"id: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"url: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"segment: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  companyId: "id",\n}\n\ncompany_detail = polen.get_company_details(params)\nputs company_detail.body\n')),Object(r.b)("h2",{id:"get-company-list"},"Get Company List"),Object(r.b)("p",null,"Este m\xe9todo retorna todas as empresas da sua conta."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"results: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"pageNumber: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"nextPage: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},"params = {\n  page: 0,\n  pageSize: 20\n}\n\nlist = polen.get_company_list(params)\nputs list.body\n")),Object(r.b)("h2",{id:"get-company-store"},"Get Company Store"),Object(r.b)("p",null,"Este m\xe9todo retorna todas as empresas da sua conta."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"results: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"pageNumber: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"nextPage: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  companyId: "id",\n  page: 0,\n  pageSize: 20\n}\n\nstores = polen.get_company_stores(params)\nputs stores.body\n')),Object(r.b)("h2",{id:"update-company"},"Update Company"),Object(r.b)("p",null,"Este m\xe9todo atualiza dados de uma empresa."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"payload")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"document"),": (obrigat\xf3rio) documento de identifica\xe7ao (CNPJ/CPF) - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),":(obrigat\xf3rio) nome da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"logo"),": (opcional) url da logo da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"url"),": (opcional) url da p\xe1gina de impacto da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"segment"),": (opcional) segmento da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"id: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"url: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"segment: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  companyId: ""\n}\n\npayload = {\n  document: "",\n  name: "",\n  logo: "",\n  url: "",\n  segment: ""\n}\n\nupdate = polen.update_company(params, payload)\nputs update.body\n')),Object(r.b)("h2",{id:"create-company"},"Create Company"),Object(r.b)("p",null,"Este m\xe9todo cria uma empresa."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"payload")," que \xe9 um hash com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"document"),": (obrigat\xf3rio) documento de identifica\xe7ao (CNPJ/CPF) - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": nome da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"logo"),": url da logo da empresa -  ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"url"),": url da p\xe1gina de impacto da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"segment"),": segmento da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"id: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"url: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"segment: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},'\npayload = {\n  document: "",\n  name: "",\n  logo: "",\n  url: "",\n  segment: ""\n}\n\ncreate = polen.create_company(payload)\nputs crate.body\n')))}c.isMDXComponent=!0}}]);