---
id: finance
title: Finance
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a documentação da API.
:::

## Get Finance Billing List
Este método retorna todas as suas faturas de pagamento.

- Recebe o argumento `params` que é um hash com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) id da loja - `string`.
    - `startDate`: (opcional) data incicial - `string`.
    - `endDate`: (opcinal) data final - `string`.

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