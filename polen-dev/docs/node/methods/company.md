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

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
      - id: `string`.
      - document: `string`.
      - name: `string`.
      - logo: `string`.
      - url: `string`.
      - segment: `string`.
    - `status`: status da requisição.

```javascript
const params = {
  companyId: "id",
}

const companyDetail = polen.getCompanyDetails(params)
console.log(companyDetail.data)
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
const params = {
  page: 0,
  pageSize: 20
}

const list = polen.getCompanyList(params)
console.log(list.data)
```

## Get Company Store
Este método retorna todas as empresas da sua conta.

- Recebe o argumento `params` que é um objeto com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status`: status da requisição.

```javascript
const params = {
  companyId: "id",
}

const stores = polen.get_company_stores(params)
console.log(stores.data)
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

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - id: `string`.
        - document: `string`.
        - name: `string`.
        - logo: `string`.
        - url: `string`.
        - segment: `string`.
    - `status`: status da requisição.

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

const update = polen.updateCompany(params, body)
print(update.data)
```

## Create Company
Este método cria uma empresa.

- Recebe o argumento `body` que é um objeto com os campos:
    - `document`: (obrigatório) documento de identificaçao (CNPJ/CPF) - `string`.
    - `name`: nome da empresa - `string`.
    - `logo`: url da logo da empresa -  `string`.
    - `url`: url da página de impacto da empresa - `string`.
    - `segment`: segmento da empresa - `string`.

- Retorna um objeto com os métodos:
    - `data`: conteúdo da resposta.
        - id: `string`.
        - document: `string`.
        - name: `string`.
        - logo: `string`.
        - url: `string`.
        - segment: `string`.
    - `status`: status da requisição.

```javascript

const body = {
  document: "",
  name: "",
  logo: "",
  url: "",
  segment: ""
}

const create = polen.createCompany(body)
print(create.data)
```
