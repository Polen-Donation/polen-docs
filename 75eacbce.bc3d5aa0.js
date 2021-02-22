(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,s=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?r.a.createElement(s,l(l({ref:t},p),{},{components:n})):r.a.createElement(s,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(117)),o={id:"company",title:"Company"},l={unversionedId:"ruby/methods/company",id:"ruby/methods/company",isDocsHomePage:!1,title:"Company",description:"Get Company Details",source:"@site/docs/ruby/methods/company.md",slug:"/ruby/methods/company",permalink:"/polen-docs/docs/ruby/methods/company",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ruby/methods/company.md",version:"current",sidebar:"someSidebar",previous:{title:"Cause",permalink:"/polen-docs/docs/ruby/methods/cause"},next:{title:"Donation Direct",permalink:"/polen-docs/docs/ruby/methods/donation-direct"}},b=[{value:"Get Company Details",id:"get-company-details",children:[]},{value:"Get Company Store",id:"get-company-store",children:[]},{value:"Update Company",id:"update-company",children:[]},{value:"Create Company",id:"create-company",children:[]}],p={toc:b};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"get-company-details"},"Get Company Details"),Object(i.b)("p",null,"Este m\xe9todo retorna os detalhes de uma empresa espec\xedfica."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da Empresa - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"challenges: ",Object(i.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(i.b)("li",{parentName:"ul"},"request: ",Object(i.b)("inlineCode",{parentName:"li"},"object"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  companyId: "id",\n}\n\ncompany_detail = polen.get_company_details(params)\nputs company_detail.body\n')),Object(i.b)("h2",{id:"get-company-store"},"Get Company Store"),Object(i.b)("p",null,"Este m\xe9todo retorna todas as empresas da sua conta."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um hash com os campos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"id: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"document: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"name: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"logo: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"url: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"segment: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"params = {\n  page: 20,\n  pageSize: 50\n}\n\nstores = polen.get_company_stores(params)\nputs stores.body\n")),Object(i.b)("h2",{id:"update-company"},"Update Company"),Object(i.b)("p",null,"Este m\xe9todo atualiza dados de uma empresa."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"li"},"params")," que \xe9 um hash com os campos:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio) id da empresa - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),".")))),Object(i.b)("p",null,"-Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"payload")," que \xe9 um hash com os campos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"document"),": (obrigat\xf3rio) documento de identifica\xe7ao (CNPJ/CPF) - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name"),":(obrigat\xf3rio) nome da empresa - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logo"),": (opcional) url da logo da empresa -  ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"url"),": (opcional) url da p\xe1gina de impacto da empresa - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"segment"),": (opcional) segmento da empresa - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"Retorna um objeto com os m\xe9todos:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"id: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"document: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"name: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"logo: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"url: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"segment: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},'params = {\n  companyId: ""\n}\n\npayload = {\n  document: "",\n  name: "",\n  logo: "",\n  url: "",\n  segment: ""\n}\n\nupdate = polen.update_company(params, payload)\nputs update.body\n')),Object(i.b)("h2",{id:"create-company"},"Create Company"),Object(i.b)("p",null,"Este m\xe9todo cria uma empresa."),Object(i.b)("p",null,"-Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"payload")," que \xe9 um hash com os campos:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"document"),": (obrigat\xf3rio) documento de identifica\xe7ao (CNPJ/CPF) - ",Object(i.b)("inlineCode",{parentName:"p"},"string"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"name"),": nome da empresa - ",Object(i.b)("inlineCode",{parentName:"p"},"string"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"logo"),": url da logo da empresa -  ",Object(i.b)("inlineCode",{parentName:"p"},"string"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"url"),": url da p\xe1gina de impacto da empresa - ",Object(i.b)("inlineCode",{parentName:"p"},"string"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"segment"),": segmento da empresa - ",Object(i.b)("inlineCode",{parentName:"p"},"string"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"body"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"id: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"document: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"name: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"logo: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"url: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"segment: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"code"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},'\npayload = {\n  document: "",\n  name: "",\n  logo: "",\n  url: "",\n  segment: ""\n}\n\ncreate = polen.create_company(payload)\nputs crate.body\n')))}c.isMDXComponent=!0}}]);