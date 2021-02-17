---
id: platform
title: Platform
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a documentação da API.
:::

## Get Platform List
Este método retorna todas as plataformas parceiras que o Polen já possui integração nativa.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - results: `[]`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `code`: status da requisição.
```ruby
params = {
  storeId: "id"
}

list = polen.get_finance_billing_list(params)
puts list.body
```