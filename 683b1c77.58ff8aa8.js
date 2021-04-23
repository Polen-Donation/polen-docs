(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,u=m["".concat(o,".").concat(s)]||m[s]||d[s]||r;return n?i.a.createElement(u,l(l({ref:t},c),{},{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(138)),o={id:"company",title:"Company"},l={unversionedId:"python/methods/company",id:"python/methods/company",isDocsHomePage:!1,title:"Company",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/python/methods/company.md",slug:"/python/methods/company",permalink:"/polen-docs/docs/python/methods/company",editUrl:"https://github.com/Polen-Donation/polen-docs/pulls/docs/python/methods/company.md",version:"current",sidebar:"someSidebar",previous:{title:"Cause",permalink:"/polen-docs/docs/python/methods/cause"},next:{title:"Donation Direct",permalink:"/polen-docs/docs/python/methods/donation-direct"}},b=[{value:"Get Company Details",id:"get-company-details",children:[]},{value:"Get Company List",id:"get-company-list",children:[]},{value:"Get Company Store",id:"get-company-store",children:[]},{value:"Update Company",id:"update-company",children:[]},{value:"Create Company",id:"create-company",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(r.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(r.b)("h2",{id:"get-company-details"},"Get Company Details"),Object(r.b)("p",null,"Este m\xe9todo retorna os detalhes de uma empresa espec\xedfica."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da Empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"id: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"url: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"segment: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'companyId': \"id\",\n}\n\ncompany_detail = polen.get_company_details(params)\nprint(company_detail.content)\n")),Object(r.b)("h2",{id:"get-company-list"},"Get Company List"),Object(r.b)("p",null,"Este m\xe9todo retorna todas as empresas da sua conta."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"results: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"pageNumber: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"nextPage: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'page': 0,\n  'pageSize': 20\n}\n\nlist = polen.get_company_list(params)\nprint(list.content)\n")),Object(r.b)("h2",{id:"get-company-store"},"Get Company Store"),Object(r.b)("p",null,"Este m\xe9todo retorna todas as empresas da sua conta."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"results: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"pageNumber: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"nextPage: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'companyId': \"id\",\n}\n\nstores = polen.get_company_stores(params)\nprint(stores.content)\n")),Object(r.b)("h2",{id:"update-company"},"Update Company"),Object(r.b)("p",null,"Este m\xe9todo atualiza dados de uma empresa."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um dicion\xe1rio com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um dicion\xe1rio com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"document"),": (obrigat\xf3rio) documento de identifica\xe7ao (CNPJ/CPF) - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),":(obrigat\xf3rio) nome da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"logo"),": (opcional) url da logo da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"url"),": (opcional) url da p\xe1gina de impacto da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"segment"),": (opcional) segmento da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"id: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"url: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"segment: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"params = {\n  'companyId': \"\"\n}\n\nbody = {\n  'document': \"\",\n  'name': \"\",\n  'logo': \"\",\n  'url': \"\",\n  'segment': \"\"\n}\n\nupdate = polen.update_company(params, body)\nprint(update.content)\n")),Object(r.b)("h2",{id:"create-company"},"Create Company"),Object(r.b)("p",null,"Este m\xe9todo cria uma empresa."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um dicion\xe1rio com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"document"),": (obrigat\xf3rio) documento de identifica\xe7ao (CNPJ/CPF) - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": nome da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"logo"),": url da logo da empresa -  ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"url"),": url da p\xe1gina de impacto da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"segment"),": segmento da empresa - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"content"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"id: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"url: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"segment: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status_code"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-python"},"\nbody = {\n  'document': \"\",\n  'name': \"\",\n  'logo': \"\",\n  'url': \"\",\n  'segment': \"\"\n}\n\ncreate = polen.create_company(body)\nprint(create.content)\n")))}p.isMDXComponent=!0}}]);