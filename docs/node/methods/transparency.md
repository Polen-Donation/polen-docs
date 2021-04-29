---
id: transparency
title: Transparency
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Impact Consolidated
Este método retorna um consolidado do total já doado por sua empresa e o impacto que isso teve nas causas apoiadas.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um objeto:
     - storeId: `string`
     - name: `string`
     - logo: `string`
     - ngos: `array`
     - totalRaised: `number`
     - totalPurchases: `number`

```javascript
const params = {
  storeId: ""
}

const impact = await polen.getConsolidatedImpact(params);
console.log(impact);
```

## Get Content Detail
Este método retorna os detalhes de um conteúdo específico postado pela instituição.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `identifier`: (obrigatório) id do conteúdo - `string`.

- Retorna um objeto:
    - id: `string`.
    - causeId: `string`.
    - title: `string`.
    - description: `string`.
    - contents: `array`.
    - approved: `boolean`.
    - type: `number`.
    - date: `string`.
    - dateOfImpact: `string`.
    - dateApproved: `string`.

```javascript
const params = {
  storeId: "",
  indentifier: ""
}

const detail = await polen.getContentDetail(params);
console.log(detail);
```

## Get Transparency Receipts
Este método retorna todos os recibos de doação assinados pelas instituições.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `causeId`: (obrigatório) id da causa - `string`.
    - `startDate`: (opcional) filtra por data - `string`.
    - `endDate`: (opcional) filtra por data - `string`.
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.

```javascript
const params = {
  storeId: "",
  causeId: ""
}

const receipts = await polen.getReceipts(params);
console.log(receipts);
```

## Get Content List
Este método todos os conteúdos postados pelas causas e instituições que sua empresa apoia como fotos, vídeos, depoimentos, recibos e comprovantes.

- Recebe o argumento `params` que é um objeto com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `causeId`: (obrigatório) id da causa - `string`.
    - `startDate`: (opcional) filtra por data - `string`.
    - `endDate`: (opcional) filtra por data - `string`.
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - results: `array`.
    - pageNumber: `number`.
    - nextPage: `string`.

```javascript
const params = {
  storeId: "",
  causeId: ""
}

const list = await polen.getContentList(params);
console.log(list);
```
