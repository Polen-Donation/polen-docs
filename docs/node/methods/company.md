---
id: company
title: Company
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Company Details
Este método retorna os detalhes de uma empresa específica.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `companyId`: (obrigatório) id da Empresa - `string`.

- Retorna um objeto:
  - id: `string`.
  - document: `string`.
  - name: `string`.
  - logo: `string`.
  - url: `string`.
  - segment: `string`.

```javascript
const params = {
  companyId: "id",
}

const companyDetail = await polen.getCompanyDetails(params);
console.log(companyDetail);
```

## Get Company List
Este método retorna todas as empresas da sua conta.

- Recebe o argumento `params` que é um objeto com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status`: status da requisição.

```javascript
const list = await polen.getCompanyList();
console.log(list);
```

## Get Company Store
Este método retorna todas as lojas de uma empresa.

- Recebe o argumento `params` que é um objeto com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto:
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.

```javascript
const params = {
  companyId: "id",
}

const stores = await polen.getCompanyStores(params);
console.log(stores);
```

## Update Company
Este método atualiza dados de uma empresa.

- Recebe o argumento `params` que é um objeto com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
    - `document`: (obrigatório) documento de identificaçao (CNPJ/CPF) - `string`.
    - `name`:(obrigatório) nome da empresa - `string`.
    - `logo`: (opcional) url da logo da empresa - `string`.
    - `url`: (opcional) url da página de impacto da empresa - `string`.
    - `segment`: (opcional) segmento da empresa - `string`.

- Retorna um objeto:
    - id: `string`.
    - document: `string`.
    - name: `string`.
    - logo: `string`.
    - url: `string`.
    - segment: `string`.
    

```javascript
const params = {
  companyId: ""
}

const body = {
  document: "",
  name: "",
  logo: "",
  url: "",
  segment: ""
}

const update = await polen.updateCompany(params, body);
console.log(update);
```

## Create Company
Este método cria uma empresa.

- Recebe o argumento `body` que é um objeto com os campos:
    - `document`: (obrigatório) documento de identificaçao (CNPJ/CPF) - `string`.
    - `name`: nome da empresa - `string`.
    - `logo`: url da logo da empresa -  `string`.
    - `url`: url da página de impacto da empresa - `string`.
    - `segment`: segmento da empresa - `string`.

- Retorna um objeto:
    - id: `string`.
    - document: `string`.
    - name: `string`.
    - logo: `string`.
    - url: `string`.
    - segment: `string`.

```javascript

const body = {
  document: "",
  name: "",
  logo: "",
  url: "",
  segment: ""
}

const create = await polen.createCompany(body);
console.log(create);
```
