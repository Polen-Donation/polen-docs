(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{138:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),d=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=d(t),s=a,u=m["".concat(o,".").concat(s)]||m[s]||p[s]||i;return t?r.a.createElement(u,l(l({ref:n},b),{},{components:t})):r.a.createElement(u,l({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(138)),o={id:"donation-direct",title:"Donation Direct"},l={unversionedId:"node/methods/donation-direct",id:"node/methods/donation-direct",isDocsHomePage:!1,title:"Donation Direct",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/node/methods/donation-direct.md",slug:"/node/methods/donation-direct",permalink:"/polen-docs/docs/node/methods/donation-direct",editUrl:"https://github.com/Polen-Donation/polen-docs/pulls/docs/node/methods/donation-direct.md",version:"current",sidebar:"someSidebar",previous:{title:"Company",permalink:"/polen-docs/docs/node/methods/company"},next:{title:"Finance",permalink:"/polen-docs/docs/node/methods/finance"}},c=[{value:"Create Donation Direct",id:"create-donation-direct",children:[]}],b={toc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(i.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(i.b)("h2",{id:"create-donation-direct"},"Create Donation Direct"),Object(i.b)("p",null,"Este m\xe9todo cria uma doa\xe7\xe3o direta."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recebe o argumento ",Object(i.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um objeto com os campos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da empresa - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"paymentMethod"),": (obrigat\xf3rio) forma de pagamento - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"donor"),": (obrigat\xf3rio) dados do doador - ",Object(i.b)("inlineCode",{parentName:"li"},"object"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"creditCardData"),": (obrigat\xf3rio para pagamento c/ cart\xe3o de cr\xe9dito) dados do cart\xe3o de cr\xe9dito - ",Object(i.b)("inlineCode",{parentName:"li"},"object"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bankSlipData"),": (obrigat\xf3rio para pagamento c/ boleto) dados para gerar boleto - ",Object(i.b)("inlineCode",{parentName:"li"},"object"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"address"),": (opcinal) endere\xe7o do doador - ",Object(i.b)("inlineCode",{parentName:"li"},"object"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"causes"),": (obrigat\xf3rio) causas que deseja apoiar - ",Object(i.b)("inlineCode",{parentName:"li"},"array"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"childStoreId"),":(opcional) lojas segmento - ",Object(i.b)("inlineCode",{parentName:"li"},"array"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"orderId"),": id para identifica\xe7\xe3o da doa\xe7\xe3o - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bankFeeCovered"),": taxa de servi\xe7os - ",Object(i.b)("inlineCode",{parentName:"li"},"number")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hasMatchFunding"),": caso em que usu\xe1rio doa, a marca tamb\xe9m doa - ",Object(i.b)("inlineCode",{parentName:"li"},"boolean"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"matchingDonation"),": o valor que a marca doar\xe1 - ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"notes"),": notas de observa\xe7\xe3o - ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": conte\xfado da resposta.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"transactionId: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"storeId: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"storeUrl: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"orderId: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"donation: ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},"userDonation: ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},"purchase: ",Object(i.b)("inlineCode",{parentName:"li"},"number"),"."),Object(i.b)("li",{parentName:"ul"},"ngoId: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"ngoName: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"userId: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"polenUserId: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"userEmail: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"status: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."),Object(i.b)("li",{parentName:"ul"},"tags: ",Object(i.b)("inlineCode",{parentName:"li"},"array"),"."),Object(i.b)("li",{parentName:"ul"},"createAt: ",Object(i.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"status"),": status da requisi\xe7\xe3o.")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'const body = {\n  storeId: "",\n  childStoreId: "",\n  isTest: false,\n  campaignId: "00000000-0000-0000-0000-000000000000",\n  paymentMethod: 0,\n  orderId: "",\n  bankFeeCovered: -100000000,\n  hasMatchFunding: false,\n  matchingDonation: -100000000,\n  notes: "",\n  donor: {\n    identifier: "",\n    email: "",\n    name: "",\n    phone: "",\n    document: "",\n    gender: "",\n    birthDate: "",\n    verified: false,\n    optIn: false\n  },\n  creditCardData: {\n    paymentSystem: 0,\n    fullName: "",\n    cardNumber: "",\n    expirationDate: "",\n    securityCode: "",\n    installmentQuantity: -100000000\n  },\n  bankSlipData: {\n    paymentSystem: 0,\n    dueDate: -100000000\n  },\n  address: {\n    zipCode: "",\n    street: "",\n    number: "",\n    complement: "",\n    district: "",\n    city: "",\n    state: "",\n    country: ""\n  },\n  causes: [\n    {\n      causeId: "",\n      donation: -100000000\n    }\n  ]\n}\n\nconst donation = polen.createDirectDonation(body)\nconsole.log(donation.data)\n')))}d.isMDXComponent=!0}}]);