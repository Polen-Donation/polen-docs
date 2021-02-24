(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(138)),l={id:"user",title:"User"},b={unversionedId:"node/methods/user",id:"node/methods/user",isDocsHomePage:!1,title:"User",description:"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a documenta\xe7\xe3o da API.",source:"@site/docs/node/methods/user.md",slug:"/node/methods/user",permalink:"/polen-docs/docs/node/methods/user",editUrl:"https://github.com/Polen-Donation/polen-docs/pulls/docs/node/methods/user.md",version:"current",sidebar:"someSidebar",previous:{title:"Transparency",permalink:"/polen-docs/docs/node/methods/transparency"}},o=[{value:"Get User Detail",id:"get-user-detail",children:[]},{value:"Delete User",id:"delete-user",children:[]},{value:"Get User List",id:"get-user-list",children:[]},{value:"Update User",id:"update-user",children:[]},{value:"Create User",id:"create-user",children:[]},{value:"Add User Cause",id:"add-user-cause",children:[]}],c={toc:o};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANTE")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Para mais detalhes sobre os dados de entrada e sa\xedda consulte a ",Object(r.b)("a",{parentName:"p",href:"/api-reference"},"documenta\xe7\xe3o da API"),"."))),Object(r.b)("h2",{id:"get-user-detail"},"Get User Detail"),Object(r.b)("p",null,"Este m\xe9todo retorna detalhes de um usu\xe1rio espec\xedfico."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"userId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"identifier: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"email: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"phone: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"causesList: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const params = {\n  storeId: "",\n  userId: "",\n}\n\nconst impact = polen.getImapactConsolidated(params)\nconsole.log(impact.data)\n')),Object(r.b)("h2",{id:"delete-user"},"Delete User"),Object(r.b)("p",null,"Este m\xe9todo deleta um usu\xe1rio espec\xedfico."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"userId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"success: ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),"."),Object(r.b)("li",{parentName:"ul"},"errorCode: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"error: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'params = {\n  storeId: "",\n  userId: "",\n}\n\nconst deleteUser = polen.delete_user(params)\nconsole.log(deleteUser.data)\n')),Object(r.b)("h2",{id:"get-user-list"},"Get User List"),Object(r.b)("p",null,"Este m\xe9todo retorna uma lista de usu\xe1rios."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"page"),": (opcional) n\xfamero de uma p\xe1gina especifica - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pageSize"),": (opcional) quantidade de items por p\xe1gina (por padr\xe3o tem o valor 20) - ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"results: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"pageNumber: ",Object(r.b)("inlineCode",{parentName:"li"},"number"),"."),Object(r.b)("li",{parentName:"ul"},"nextPage: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),".   ."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const params = {\n  storeId: "",\n}\n\nconst list = polen.getUserList(params)\nconsole.log(list.data)\n')),Object(r.b)("h2",{id:"update-user"},"Update User"),Object(r.b)("p",null,"Este m\xe9todo atualiza dados de um usu\xe1rio."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"userId"),": (obrigat\xf3rio) id do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email"),": (opciona) email do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": (obrigat\xf3rio) nome do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"phone"),": (opcional) telefone do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"document"),": (opcional) documento de identifica\xe7\xe3o (rg, cpf, cnpj) - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gender"),": (opcional) genero do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"birthdate"),": (opcional) data de nascimento do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"city"),": (opcional) cidade do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"state"),": (opcional) estado do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"country"),": (opcional) pa\xeds do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verified"),": (opcional) para verifica\xe7\xf5es adicionais - ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"optIn"),": (opcional) verifica se deve enviar um email ao usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createAt"),": (opcional) data da requisi\xe7\xe3o - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"identifier: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"email: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"phone: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"causesList: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const params = {\n  storeId: "",\n}\n\nconst body = {\n  userId: "",\n  email: "",\n  name: "",\n  phone: "",\n  document: "",\n  gender: "",\n  birthdate: "",\n  city: "",\n  state: "",\n  country: "",\n  verified: false,\n  optIn: false,\n  createAt: "2021-02-12T12:49:25.636Z"\n}\n\nconst update = polen.updateUser(payload, body)\nconsole.log(update.data)\n')),Object(r.b)("h2",{id:"create-user"},"Create User"),Object(r.b)("p",null,"Este m\xe9todo adiciona um novo usu\xe1rio."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um obejto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"causeList"),": (opcional) lista de causas que ser\xe3o apoiadas - ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"userId"),": (obrigat\xf3rio) id do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"email"),": (opciona) email do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"name"),": (obrigat\xf3rio) nome do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"phone"),": (opcional) telefone do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"document"),": (opcional) documento de identifica\xe7\xe3o (rg, cpf, cnpj) - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gender"),": (opcional) genero do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"birthdate"),": (opcional) data de nascimento do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"city"),": (opcional) cidade do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"state"),": (opcional) estado do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"country"),": (opcional) pa\xeds do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"verified"),": (opcional) para verifica\xe7\xf5es adicionais - ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"optIn"),": (opcional) verifica se deve enviar um email ao usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"boolean"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"createAt"),": (opcional) data da requisi\xe7\xe3o - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"identifier: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"email: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"phone: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"causesList: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const params = {\n  storeId: "",\n}\n\nconst body = {\n  causeList: [],\n  userId: "",\n  email: "",\n  name: "",\n  phone: "",\n  document: "",\n  gender: "",\n  birthdate: "",\n  city: "",\n  state: "",\n  country: "",\n  verified: false,\n  optIn: false,\n  createAt: "2021-02-12T12:49:25.636Z"\n}\n\nconst create = polen.createUser(payload, body)\nconsole.log(create.data)\n')),Object(r.b)("h2",{id:"add-user-cause"},"Add User Cause"),Object(r.b)("p",null,"Este m\xe9todo associa/desassocia causas a um usu\xe1rio."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"params")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storeId"),": (obrigat\xf3rio) id da loja - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"userId"),": (obrigat\xf3rio) id do usu\xe1rio - ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Recebe o argumento ",Object(r.b)("inlineCode",{parentName:"p"},"body")," que \xe9 um objeto com os campos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addCauseList"),": (opcional) causas que deseja adicionar - ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"disableCausesList"),": (obrigat\xf3rio) causas que deseja remover - ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Retorna um objeto com os m\xe9todos:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": conte\xfado da resposta.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"apiKey: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"apiToken: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"storeId: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"storeUrl: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"childStoreId: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"email: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"name: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"phone: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"document: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"causesList: ",Object(r.b)("inlineCode",{parentName:"li"},"array"),"."),Object(r.b)("li",{parentName:"ul"},"logo: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"domain: ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"active: ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")),Object(r.b)("li",{parentName:"ul"},"test: ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")),Object(r.b)("li",{parentName:"ul"},"totalDonated: ",Object(r.b)("inlineCode",{parentName:"li"},"number")),Object(r.b)("li",{parentName:"ul"},"totalBackers: ",Object(r.b)("inlineCode",{parentName:"li"},"number")),Object(r.b)("li",{parentName:"ul"},"errorCode: ",Object(r.b)("inlineCode",{parentName:"li"},"number")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status"),": status da requisi\xe7\xe3o.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'const params = {\n  storeId: "",\n  userId: "",\n}\n\nconst body = {\n  addCausesList: [\n    ""\n  ],\n  disableCausesList: [\n    ""\n  ]\n}\n\nconst add = polen.add_user_cause(payload, body)\nconsole.log(add.data)\n')))}p.isMDXComponent=!0},138:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),s=n,u=m["".concat(l,".").concat(s)]||m[s]||d[s]||r;return a?i.a.createElement(u,b(b({ref:t},c),{},{components:a})):i.a.createElement(u,b({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);