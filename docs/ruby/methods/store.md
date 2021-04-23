---
id: store
title: Store
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Store Details
Este método retorna os detalhes de uma loja específica.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - apiKey: `string`.
        - apiToken: `string`.
        - storeId: `string`.
        - storeUrl: `string`.
        - childStoreId: `array`.
        - email: `string`.
        - name: `string`.
        - logo: `string`.
        - phone: `string`.
        - domain: `string`.
        - document: `string`.
        - causesList: `array`.
        - active: `boolean`.
        - test: `boolean`.
        - totalDonated: `number`.
        - totalBackers: `number`.
        - errorCode: `number`.
    - `code`: status da requisição.

```ruby
params = {
  storeId: "id",
}

store_detail = polen.get_store_details(params)
puts store_detail.body
```

## Get Store List
Este método retorna todas as lojas da sua conta.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - result: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.

```ruby
params = {
  page: 20,
  pageSize: 50
}

list = polen.get_company_stores(params)
puts list.body
```

## Update Store
Este método atualiza dados de uma empresa.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

-Recebe o argumento `payload` que é um hash com os campos:
- `causeList`: (opcional) lista de causas apoiadas - `string`.
- `storeName`: (opcional) nome da loja - `string`.
- `email`: (opcional) email do usuário - `string`.
- `name`: (opcional) nome do usuário - `string`.
- `domain`: (opcional) url da loja -  `string`.
- `phone`: (opcional) telefone da loja - `string`.
- `logo`: (opcional) logo da loja - `string`.
- `address`: (opcional) endereço da loja - `string`
- `segment`: (opcional) segmento da empresa - `string`.
- `city`: (opcional) cidade da loja - `string`.
- `state`: (opcional) estado onde se encotra a loja - `string`.
- `zipcode`: (opcional) CEP da loja - `string`.
- `document`: (opcional) documento de identificação - `string`.
- `nameContact`: (opcional) nome do responsável pela loja - `string`.
- `tags`: (opcional) novos id's - `array`.
- `test`: (opcional) usado para contabilizarmos as doações feitas nesta loja - `boolean`.
- `active`: (opcional) usado para ativar a loja - `boolean`.
- `platformId`: (opcional) id da plataforma - `string`.
- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - apiKey: `string`.
        - apiToken: `string`.
        - storeId: `string`.
        - storeUrl: `string`.
        - childStoreId: `array`.
        - email: `string`.
        - name: `string`.
        - logo: `string`.
        - phone: `string`.
        - domain: `string`.
        - document: `string`.
        - causesList: `array`.
        - active: `boolean`.
        - test: `boolean`.
        - totalDonated: `number`.
        - totalBackers: `number`.
        - errorCode: `number`.
    - `code`: status da requisição.

```ruby
params = {
  storeId: ""
}

payload = {
  email: "",
  storeUrl: "",
  storeName: "",
  tags: [
    ""
  ],
  domain: "",
  nameContact: "",
  phone: "",
  document: "",
  logo: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  platformId: "",
  test: false,
  active: false
}

update = polen.update_store(params, payload)
puts update.body
```

## Add Cause Store
Este método adiciona causas a uma loja.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Recebe o argumento `payload` que é um hash com os campos:
- `Array de string`: lista de ids das Causas ou Instituicoes que serao apoiadas - `array`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
      - apiKey: `string`.
      - apiToken: `string`.
      - storeId: `string`.
      - storeUrl: `string`.
      - childStoreId: `array`.
      - email: `string`.
      - name: `string`.
      - logo: `string`.
      - phone: `string`.
      - domain: `string`.
      - document: `string`.
      - causesList: `string`.
      - active: `boolean`.
      - test: `boolean`.
      - totalDonated: `number`.
      - totalBackers: `number`. 
      - errorCode: `number`.
    - `code`: status da requisição.

```ruby
params = {
  storeId: "id"
}

payload = [""]

add_cause = polen.add_cause_store(params, payload)
puts add_cause.body
```

## Create Store
Este método cria uma nova loja.

- Recebe o argumento `params` que é um hash com os campos:
    - `companyId`: (obrigatório) id da empresa - `string`.

- Recebe o argumento `payload` que é um hash com os campos:
    - `storeName`: (opcional) nome da loja - `string`.
    - `causesList`: (opcional) lista de causa apoiadas - `array`.
    - `storeUrl`: (opcional) url da loja - `string`.
    - `email`: (opcional) email do usuário - `string`.
    - `name`: (opcional) nome do usuário - `string`.
    - `domain`: (opcional) url da loja -  `string`.
    - `phone`: (opcional) telefone da loja - `string`.
    - `logo`: (opcional) logo da loja - `string`.
    - `address`: (opcional) endereço da loja - `string`
    - `segment`: (opcional) segmento da empresa - `string`.
    - `city`: (opcional) cidade da loja - `string`.
    - `state`: (opcional) estado onde se encotra a loja - `string`.
    - `zipcode`: (opcional) CEP da loja - `string`.
    - `document`: (opcional) documento de identificação - `string`.
    - `nameContact`: (opcional) nome do responsável pela loja - `string`.
    - `tags`: (opcional) novos id's - `array`.
    - `test`: (opcional) usado para contabilizarmos as doações feitas nesta loja - `boolean`.
    - `active`: (opcional) usado para ativar a loja - `boolean`.
    - `platformId`: (opcional) id da plataforma - `string`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - apiKey: `string`.
        - apiToken: `string`.
        - storeId: `string`.
        - storeUrl: `string`.
        - childStoreId: `array`.
        - email: `string`.
        - name: `string`.
        - logo: `string`.
        - phone: `string`.
        - domain: `string`.
        - document: `string`.
        - causesList: `array`.
        - active: `boolean`.
        - test: `boolean`.
        - totalDonated: `number`.
        - totalBackers: `number`.
        - errorCode: `number`.
    - `code`: status da requisição.

```ruby
params = {
  companyId: ""
}

payload = {
  email: "",
  storeUrl: "",
  storeName: "",
  tags: [
    ""
  ],
  domain: "",
  nameContact: "",
  phone: "",
  document: "",
  logo: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  platformId: "",
  test: false,
  active: false
}

create = polen.create_store(params, payload)
puts create.body
```

## Remove Cause Store
Este método remove causas de uma loja.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

-Recebe o argumento `payload` que é um array:
- `Array de string`: lista de ids das causas ou instituições que serão removidas - `array`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - apiKey: `string`.
        - apiToken: `string`.
        - storeId: `string`.
        - storeUrl: `string`.
        - childStoreId: `array`.
        - email: `string`.
        - name: `string`.
        - logo: `string`.
        - phone: `string`.
        - domain: `string`.
        - document: `string`.
        - causesList: `array`.
        - active: `boolean`.
        - test: `boolean`.
        - totalDonated: `number`
        - totalBackers: `number`
        - errorCode: `number`

    - `code`: status da requisição.

```ruby
params = {
  storeId: "id"
}

payload = [""]

remove_cause = polen.remove_cause_store(params, payload)
puts remove_cause.body
```