(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(151)),r=["components"],l={id:"notify-donation",title:"Donation Notify"},b={unversionedId:"csharp/methods/notify-donation",id:"csharp/methods/notify-donation",isDocsHomePage:!1,title:"Donation Notify",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/csharp/methods/notify-donation.md",slug:"/csharp/methods/notify-donation",permalink:"/docs/csharp/methods/notify-donation",editUrl:"https://github.com/Polen-Donation/polen-docs/pulls/docs/csharp/methods/notify-donation.md",version:"current",sidebar:"someSidebar",previous:{title:"Finance",permalink:"/docs/csharp/methods/finance"},next:{title:"Platform",permalink:"/docs/csharp/methods/platform"}},c=[{value:"Get Notify Donation",id:"get-notify-donation",children:[]},{value:"Get Notify Donation List",id:"get-notify-donation-list",children:[]},{value:"Update Notify Donation",id:"update-notify-donation",children:[]},{value:"Create Notify Donation",id:"create-notify-donation",children:[]}],p={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(o.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(o.b)("h2",{id:"get-notify-donation"},"Get Notify Donation"),Object(o.b)("p",null,"Traz os detalhes de uma doa\xe7\xf5es espec\xedfica a partir de seu Id."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Recebe os argumentos:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) identificador da loja - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"polenTransactionId"),": (opcional) Id da transacao do Polen - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"orderId"),": (opcional) id para identificar esta transa\xe7\xe3o- ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Retorna um json:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"transactionId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"storeId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"orderId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"donation: ",Object(o.b)("inlineCode",{parentName:"li"},"number"),"."),Object(o.b)("li",{parentName:"ul"},"userDonation: ",Object(o.b)("inlineCode",{parentName:"li"},"number"),"."),Object(o.b)("li",{parentName:"ul"},"purchase: ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},"ngoId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"polenUserId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"userEmail: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"status: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"tags: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},"createAt: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),".")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"var notifyDonation = await polen.NotifyDonation.GetNotifyDonationDetails(storeId);\nConsole.Write(notifyDonation);\n")),Object(o.b)("h2",{id:"get-notify-donation-list"},"Get Notify Donation List"),Object(o.b)("p",null,"Traz os detalhes de uma doa\xe7\xe3o espec\xedfica a partir do seu id."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Recebe os argumentos:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(o.b)("inlineCode",{parentName:"li"},"int"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(o.b)("inlineCode",{parentName:"li"},"int"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) identificador da loja - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userId"),": (opcional) c\xf3digo para identificar o consumidor - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ngoId"),": (opcional) c\xf3digo da institui\xe7\xe3o apoiada - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"fromDate"),": (opcional) data inicial para fazer uma busca dentro de um espa\xe7o de tempo espec\xedfico - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toDate"),": (opcional) data final para fazer uma busca dentro de um espa\xe7o de tempo espec\xedfico - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Retorna um json:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"results: ",Object(o.b)("inlineCode",{parentName:"li"},"array"),"."),Object(o.b)("li",{parentName:"ul"},"pageNumber: ",Object(o.b)("inlineCode",{parentName:"li"},"int"),"."),Object(o.b)("li",{parentName:"ul"},"nextPage: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),".")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"var list = await polen.NotifyDonation.GetNotifyDonationList(storeId);\nConsole.Write(list);\n")),Object(o.b)("h2",{id:"update-notify-donation"},"Update Notify Donation"),Object(o.b)("p",null,"Neste m\xe9todo atualizamos o status da doa\xe7\xe3o."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Recebe o argumento:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) identificador da loja - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Recebe o argumento ",Object(o.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um objeto com os campos:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"polenTransactionId"),": (opcional) id da transi\xe7\xe3o do Polen - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"orderId"),": (opcional) id da passado na cria\xe7\xe3o da doa\xe7\xe3o - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"status"),": (obrigat\xf3rio) status da doa\xe7\xe3o - ",Object(o.b)("inlineCode",{parentName:"li"},"int"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Retorna um json:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"transactionId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"storeId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"orderId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"donation: ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},"userDonation: ",Object(o.b)("inlineCode",{parentName:"li"},"number"),"."),Object(o.b)("li",{parentName:"ul"},"purchase: ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},"ngoId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"polenUserId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"userEmail: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"status: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"tags: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},"createAt: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),".")))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"var update = await polen.NotifyDonation.UpdateNotifyDonation(storeId, body);\nConsole.Write(update);\n")),Object(o.b)("h2",{id:"create-notify-donation"},"Create Notify Donation"),Object(o.b)("p",null,"Adiciona uma nova doa\xe7\xe3o feita na loja."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Recebe os argumentos:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) identificador da loja - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"companyId"),": (obrigat\xf3rio)  identificador da empresa - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Recebe o argumento ",Object(o.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um objeto com os campos:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"orderId"),": (obrigat\xf3rio) id que voc\xea utilizar\xe1 para identificar esta transa\xe7\xe3o - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"donation"),": (obrigat\xf3rio) valor da doa\xe7\xe3o - ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userId"),": (opcional) Id de identifica\xe7\xe3o do usuario - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ngoId"),": (opcional) id da ong que quer apoiar - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"childStoreId"),": (opcional) id para segmentar a loja - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"status"),": (opcional) status dessa doa\xe7\xe3o - ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storeUrl"),": (opcional) URL da loja no Polen - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"createAt"),": (opcional) data da cria\xe7o desta nova doa\xe7\xe3o - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"purchase"),": (opcional) valor da transi\xe7\xe3o - ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storeName"),": (opcional) nome da loja - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userEmail"),": (opcional) email do usu\xe1rio - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userName"),": (opcional) nome do usu\xe1rio - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userPhone"),": (opcional) telefone do usu\xe1rio - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userGender"),": (opcional) genero do usu\xe1rio - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"userDocument"),": (opcional) documento indetificador do usu\xe1rio - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"birthdate"),": (opcional) data de nascimento do usu\xe1rio - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"city"),": (opcional) cidade - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state"),": (opcional) estado - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"country"),": (opcional) pa\xeds - ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Retorna um json:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"transactionId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"storeId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"storeUrl: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"orderId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"donation: ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},"userDonation: ",Object(o.b)("inlineCode",{parentName:"li"},"float"),"."),Object(o.b)("li",{parentName:"ul"},"purchase: ",Object(o.b)("inlineCode",{parentName:"li"},"number"),"."),Object(o.b)("li",{parentName:"ul"},"ngoId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"ngoName: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"polenUserId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"userId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"polenUserId: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"userEmail: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"status: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),"."),Object(o.b)("li",{parentName:"ul"},"tags: ",Object(o.b)("inlineCode",{parentName:"li"},"[]"),"."),Object(o.b)("li",{parentName:"ul"},"createAt: ",Object(o.b)("inlineCode",{parentName:"li"},"string"),".")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"var create = await polen.NotifyDonation.CreateNotifyDonation(storeId, body);\nConsole.Write(create);\n")))}d.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,j=d["".concat(r,".").concat(s)]||d[s]||m[s]||o;return n?i.a.createElement(j,l(l({ref:t},c),{},{components:n})):i.a.createElement(j,l({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);