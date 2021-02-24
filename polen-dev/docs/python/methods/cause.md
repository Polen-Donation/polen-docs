---
id: cause
title: Cause
---

:::important IMPORTANTE

Para mais detalhes sobre os dados de entrada e saída consulte a [documentação da API](/api-reference).
:::

## Get All Causes
Este método retorna todas as instituições cadastradas no Polen.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 100) - `number`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status_code`: status da requisição.

```python
params = {
  'page': 20,
  'pageSize': 50
}

all_cause = polen.get_all_cause(params)
print(all_cause.content)
```

## Get Category
Este método retorna todas as categorias de causas cadastradas no Polen.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `page`: número de uma página especifica - `number`.
    - `pageSize`: quantidade de items por página (por padrão tem o valor 20) - `number`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status_code`: status da requisição.
```python
params = {
  'page': 0,
  'pageSize': 5
}

categories = polen.get_cause_categories(params)
print(categories.content)
```

## Get Own Causes
Este método retorna as causas apoiadas por uma loja.

- Recebe o argumento `params` que é um dicionário com os campos:
    - `page`: (opcional) número de uma página especifica - `number`.
    - `pageSize`: (opcional) quantidade de items por página (por padrão tem o valor 20) - `number`.
    - `storeId`: (obrigatório) identificador da loja - `string`.
    - `userId`: (opcional) filtra por instituições que o consumidor já apoiou - `string`.
    - `city`: (opcional) filtra por cidade - `string`.
    - `state`: (opcinal) filtra por estado - `string`.
    - `onlySelected`: (opcional) filtra por instituições selecionadas pelo usuário - `boolean`.

- Retorna um objeto com os métodos:
    - `content`: conteúdo da resposta.
        - results: `array`.
        - pageNumber: `number`.
        - nextPage: `string`.
    - `status.code`: status da requisição.
```python
params = {
  'storeId': "id"
}

own_causes = polen.get_own_cause(params)
print(own_causes.content)
```