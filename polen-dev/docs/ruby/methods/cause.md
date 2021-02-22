---
id: cause
title: Cause
---

:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a documentação da API.
:::

## Get All Causes
Este método retorna todas as instituições cadastradas no Polen.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 100) - `number`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `[]`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.

```ruby
params = {
  page: 20,
  pageSize: 50
}

all_cause = polen.get_all_cause(params)
puts all_cause.body
```

## Get Category
Este método retorna todas as categorias de causas cadastradas no Polen.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: número de uma página especifica - `number`.
    - `pageSize`: quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `[]`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.
```ruby
params = {
  page: 0,
  pageSize: 5
}

categories = polen.get_cause_categories(params)
puts categories.body
```

## Get Own Causes
Este método retorna as causas apoiadas por uma loja.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `userId`: (opcional) filtra por instituições que o consumidor já apoiou - `string`.
    - `city`: (opcional) filtra por cidade - `string`.
    - `state`: (opcinal) filtra por estado - `string`.
    - `onlySelected`: (opcional) filtra por instituições selecionadas pelo usuário - `boolean`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `[]`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.
```ruby
params = {
  page: 0,
  pageSize: 5,
  storeId: "id"
}

own_causes = polen.get_own_cause(params)
puts own_causes.body
```