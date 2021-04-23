---
id: company
title: Company
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Company Details
Este método retorna os detalhes de uma empresa específica.

- Recebe o argumento `params` que é um hash com os campos:
    - `companyId`: (obrigatório) id da Empresa - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
      - id: `string`.
      - document: `string`.
      - name: `string`.
      - logo: `string`.
      - url: `string`.
      - segment: `string`.
    - `code`: status da requisição.

```ruby
params = {
  companyId: "id",
}

company_detail = polen.get_company_details(params)
puts company_detail.body
```

## Get Company List
Este método retorna todas as empresas da sua conta.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.

```ruby
params = {
  page: 0,
  pageSize: 20
}

list = polen.get_company_list(params)
puts list.body
```

## Get Company Store
Este método retorna todas as empresas da sua conta.

- Recebe o argumento `params` que é um hash com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.

```ruby
params = {
  companyId: "id",
  page: 0,
  pageSize: 20
}

stores = polen.get_company_stores(params)
puts stores.body
```

## Update Company
Este método atualiza dados de uma empresa.

- Recebe o argumento `params` que é um hash com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.

- Recebe o argumento `payload` que é um hash com os campos:
    - `document`: (obrigatório) documento de identificaçao (CNPJ/CPF) - `string`.
    - `name`:(obrigatório) nome da empresa - `string`.
    - `logo`: (opcional) url da logo da empresa - `string`.
    - `url`: (opcional) url da página de impacto da empresa - `string`.
    - `segment`: (opcional) segmento da empresa - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - id: `string`.
        - document: `string`.
        - name: `string`.
        - logo: `string`.
        - url: `string`.
        - segment: `string`.
    - `code`: status da requisição.

```ruby
params = {
  companyId: ""
}

payload = {
  document: "",
  name: "",
  logo: "",
  url: "",
  segment: ""
}

update = polen.update_company(params, payload)
puts update.body
```

## Create Company
Este método cria uma empresa.

- Recebe o argumento `payload` que é um hash com os campos:
    - `document`: (obrigatório) documento de identificaçao (CNPJ/CPF) - `string`.
    - `name`: nome da empresa - `string`.
    - `logo`: url da logo da empresa -  `string`.
    - `url`: url da página de impacto da empresa - `string`.
    - `segment`: segmento da empresa - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - id: `string`.
        - document: `string`.
        - name: `string`.
        - logo: `string`.
        - url: `string`.
        - segment: `string`.
    - `code`: status da requisição.

```ruby

payload = {
  document: "",
  name: "",
  logo: "",
  url: "",
  segment: ""
}

create = polen.create_company(payload)
puts crate.body
```
