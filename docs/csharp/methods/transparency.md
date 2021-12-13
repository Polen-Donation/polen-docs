---
id: transparency
title: Transparency
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Impact Consolidated
Este método retorna um consolidado do total já doado por sua empresa e o impacto que isso teve nas causas apoiadas.

- Recebe o argumento:
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um json:
     - storeId: `string`
     - name: `string`
     - logo: `string`
     - ngos: `array`
     - totalRaised: `float`
     - totalPurchases: `float`

```csharp
var impact = await polen.Transparency.GetConsolidatedImpact(storeId);
Console.Write(impact);
```

## Get Content Detail
Este método retorna os detalhes de um conteúdo específico postado pela instituição.

- Recebe os argumentos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `identifier`: (obrigatório) id do conteúdo - `string`.

- Retorna um json:
    - id: `string`.
    - causeId: `string`.
    - title: `string`.
    - description: `string`.
    - contents: `array`.
    - approved: `boo`.
    - type: `int`.
    - date: `string`.
    - dateOfImpact: `string`.
    - dateApproved: `string`.

```csharp
var detail = await polen.Transparency.GetContentDetail(storeId, identifier);
Console.Write(detail);
```

## Get Transparency Receipts
Este método retorna todos os recibos de doação assinados pelas instituições.

- Recebe os argumentos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `causeId`: (obrigatório) id da causa - `string`.
    - `startDate`: (opcional) filtra por data - `string`.
    - `endDate`: (opcional) filtra por data - `string`.
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.

- Retorna um json:
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.

```csharp
var receipts = await polen.Transparency.GetReceipts(storeId, causeId);
Console.Write(receipts);
```

## Get Content List
Este método todos os conteúdos postados pelas causas e instituições que sua empresa apoia como fotos, vídeos, depoimentos, recibos e comprovantes.

- Recebe os argumentos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `causeId`: (obrigatório) id da causa - `string`.
    - `startDate`: (opcional) filtra por data - `string`.
    - `endDate`: (opcional) filtra por data - `string`.
    - `page`: (opcional) número de uma página especifica - `int`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `int`.

- Retorna um json:
    - results: `array`.
    - pageNumber: `int`.
    - nextPage: `string`.

```csharp
var list = await polen.Transparency.getContentList(storeId, causeId);
Console.Write(list);
```
