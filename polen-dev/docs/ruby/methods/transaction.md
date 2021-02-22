---
id: transaction
title: Transaction
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a documentação da API.
:::

## Update Status
Este método deve ser utilizado para atualizações posteriores à compra.

- Recebe o argumento `params` que é um hash com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `orderId`: (obrigatório) id da doação - `string`.
    - `status`: (obrigatório) status da doação - `number`.

- Retorna um objeto com os métodos:
    - `body`: conteúdo da resposta.
        - transactionId: `string`.
        - storeId: `string`.
        - storeUrl: `string`.
        - orderId: `string`.
        - donation: `number`.
        - userDonation: `number`.
        - purchase number
        - ngoId string
        - ngoName string
        - userId string
        - polenUserId string
        - userEmail string
        - status string
        - tags array
        - createAt string

        - `code`: status da requisição.

```ruby
params = {
  storeId: "",
  orderId: "",
  status: 5
}


update = polen.update_status(params)
puts update.body
```