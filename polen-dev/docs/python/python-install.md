---
id: python-install
title: Adicionando ao seu projeto
sidebar_label: Adicionando ao seu projeto
---
A instalação da PolenAPI é feita de forma simples conforme os passos descritos a seguir.

## Requisitos

- Versão do Python: Deve ser igual a 2 ou superior (que pode ser verificado executando `python --version`).

## Instalação

A maneira mais fácil de instalar a PolenAPI é usar a ferramenta de linha de comando. Você pode executar este comando em qualquer lugar em um novo repositório ou dentro de um repositório existente.

```shell
python -m pip install polen-api.whl
```

:::caution Atenção
Não é recomendado a instalação de pip como super usuário.
:::

## Como usar
Após a instalação você pode fazer a importação para o seu projeto através do `import` e fazer uma instância da classe `PolenAPI` passando um token de acesso. Esse token pode ser encontrado no [painel do polinizdor](https://painel.opolen.com.br/).


```python
import polen_sdk

polen = PolenAPI("token")
```