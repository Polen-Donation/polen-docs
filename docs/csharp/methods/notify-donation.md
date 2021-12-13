---
id: notify-donation
title: Donation Notify
---

:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::
## Get Notify Donation

Traz os detalhes de uma doações específica a partir de seu Id.

- Recebe os argumentos:
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `polenTransactionId`: (opcional) Id da transacao do Polen - `string`.
    - `orderId`: (opcional) id para identificar esta transação- `string`.

- Retorna um json:
    
    - transactionId: `string`.
    - storeId: `string`.
    - orderId: `string`.
    - donation: `number`.
    - userDonation: `number`.
    - purchase: `float`.
    - ngoId: `string`.
    - polenUserId: `string`.
    - userEmail: `string`.
    - status: `string`.
    - tags: `[]`.
    - createAt: `string`.
```csharp
var notifyDonation = await polen.NotifyDonation.GetNotifyDonationDetails(storeId);
Console.Write(notifyDonation);
```

## Get Notify Donation List
Traz os detalhes de uma doação específica a partir do seu id.

- Recebe os argumentos:
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `userId`: (opcional) código para identificar o consumidor - `string`.
    - `ngoId`: (opcional) código da instituição apoiada - `string`.
    - `fromDate`: (opcional) data inicial para fazer uma busca dentro de um espaço de tempo específico - `string`.
    - `toDate`: (opcional) data final para fazer uma busca dentro de um espaço de tempo específico - `string`.

- Retorna um json:
    
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.

```csharp
var list = await polen.NotifyDonation.GetNotifyDonationList(storeId);
Console.Write(list);
```

## Update Notify Donation
Neste método atualizamos o status da doação.

- Recebe o argumento:
    - `storeId`: (obrigatório) identificador da loja - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
    - `polenTransactionId`: (opcional) id da transição do Polen - `string`.
    - `orderId`: (opcional) id da passado na criação da doação - `string`.
    - `status`: (obrigatório) status da doação - `int`.

- Retorna um json:
    
  - transactionId: `string`.
      - storeId: `string`.
      - orderId: `string`.
      - donation: `float`.
      - userDonation: `number`.
      - purchase: `float`.
      - ngoId: `string`.
      - polenUserId: `string`.
      - userEmail: `string`.
      - status: `string`.
      - tags: `[]`.
      - createAt: `string`.
    
```csharp
var update = await polen.NotifyDonation.UpdateNotifyDonation(storeId, body);
Console.Write(update);
```

## Create Notify Donation
Adiciona uma nova doação feita na loja.

- Recebe os argumentos:
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `companyId`: (obrigatório)  identificador da empresa - `string`.

- Recebe o argumento `body` que é um objeto com os campos:
    - `orderId`: (obrigatório) id que você utilizará para identificar esta transação - `string`.
    - `donation`: (obrigatório) valor da doação - `float`.
    - `userId`: (opcional) Id de identificação do usuario - `string`.
    - `ngoId`: (opcional) id da ong que quer apoiar - `string`.
    - `childStoreId`: (opcional) id para segmentar a loja - `string`.
    - `status`: (opcional) status dessa doação - `float`.
    - `storeUrl`: (opcional) URL da loja no Polen - `string`.
    - `createAt`: (opcional) data da criaço desta nova doação - `string`.
    - `purchase`: (opcional) valor da transição - `float`.
    - `storeName`: (opcional) nome da loja - `string`.
    - `userEmail`: (opcional) email do usuário - `string`.
    - `userName`: (opcional) nome do usuário - `string`.
    - `userPhone`: (opcional) telefone do usuário - `string`.
    - `userGender`: (opcional) genero do usuário - `string`.
    - `userDocument`: (opcional) documento indetificador do usuário - `string`.
    - `birthdate`: (opcional) data de nascimento do usuário - `string`.
    - `city`: (opcional) cidade - `string`.
    - `state`: (opcional) estado - `string`.
    - `country`: (opcional) país - `string`.

- Retorna um json:
  
    - transactionId: `string`.
    - storeId: `string`.
    - storeUrl: `string`.
    - orderId: `string`.
    - donation: `float`.
    - userDonation: `float`.
    - purchase: `number`.
    - ngoId: `string`.
    - ngoName: `string`.
    - polenUserId: `string`.
    - userId: `string`.
    - polenUserId: `string`.
    - userEmail: `string`.
    - status: `string`.
    - tags: `[]`.
    - createAt: `string`.
  
```csharp
var create = await polen.NotifyDonation.CreateNotifyDonation(storeId, body);
Console.Write(create);
```
