---
id: transparency
title: Transparency
---
:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get Impact Consolidated
Este método retorna um consolidado do total já doado por sua empresa e o impacto que isso teve nas causas apoiadas.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - storeId: `string`
        - name: `string`
        - logo: `string`
        - ngos: `array`
        - totalRaised: `number`
        - totalPurchases: `number`
    - `status_code`: status da requisição.

```python
params = {
  'storeId': ""
}

impact = polen.get_imapact_consolidated(params)
print(impact.content)
```

## Get Content Detail
Este método retorna os detalhes de um conteúdo específico postado pela instituição.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `identifier`: (obrigatório) id do conteúdo - `string`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
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
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
  'indentifier': ""
}

detail = polen.get_content_detail(params)
print(detail.content)
```

## Get Transparency Receipts
Este método retorna todos os recibos de doação assinados pelas instituições.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `causeId`: (obrigatório) id da causa - `string`.
    - `startDate`: (opcional) filtra por data - `string`.
    - `endDate`: (opcional) filtra por data - `string`.
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
  'causeId': ""
}

receipts = polen.get_transparency_receipts(params)
print(receipts.content)
```

## Get Content List
Este método todos os conteúdos postados pelas causas e instituições que sua empresa apoia como fotos, vídeos, depoimentos, recibos e comprovantes.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `storeId`: (obrigatório) id da loja - `string`.
    - `causeId`: (obrigatório) id da causa - `string`.
    - `startDate`: (opcional) filtra por data - `string`.
    - `endDate`: (opcional) filtra por data - `string`.
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status_code`: status da requisição.

```python
params = {
  'storeId': "",
  'causeId': ""
}

list = polen.get_content_list(params)
print(list.content)
```