---
id: ruby-install
title: Adicionando ao seu projeto
sidebar_label: Adicionando ao seu projeto
---
A instalação da PolenAPI é feita de forma simples conforme os passos descritos a seguir.

## Requisitos

- Versão do Ruby: Deve ser 2.7 ou superior (que pode ser verificado executando `ruby --version`).

## Instalação

A maneira mais fácil de instalar a PolenAPI é usar a ferramenta de linha de comando. Você pode executar este comando em qualquer lugar em um novo repositório ou dentro de um repositório existente.

```shell
gem install polen-api
```

Ou adicionando o `polen-sdk-ruby, ~> 0.1.0` ao seu arquivo Gemfile.

:::caution Atenção
Não é recomendado a instalação de gems como super usuário.
:::

## Como usar
Após a instalação você pode fazer a importação para o seu projeto através do `require` e fazer uma instância da classe `PolenAPI` passando um token de acesso. Esse token pode ser encontrado no [painel do polinizdor](https://www.painel.opolen.com.br//).


```ruby
require 'polen-sdk-ruby'

polen = PolenSdkRuby::PolenAPI.new("token")
```