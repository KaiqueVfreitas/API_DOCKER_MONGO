# 📦 API_usuarios

## 🧠 O que é o projeto?
API simples de gerenciamento de usuários com persistência em JSON local.  
O objetivo foi praticar conexão em ambiente Homelab, integrado ao MongoDB via Docker acessado por um middleware externo.

## 📊 Status do projeto
**Dispensado**, acabei concluindo o projeto e apagando antes de enviar a versão final para o github


## 🧰 Tecnologias usadas
Node.js – ambiente de execução JavaScript para back-end

Express 5 – framework

Yarn – gerenciador de pacotes utilizado no projeto

Docker + MongoDB – para integração com banco de dados real via container no Homelab

## 🚀 Como rodar o projeto
Passo a passo para rodar localmente com `yarn` (não está com o arquivo .yml do docker, não irá funcionar):

```bash
# Clone o repositório
git clone https://github.com/KaiqueVfreitas/API_usuarios.git

# Acesse a pasta
cd API_usuarios

# Instale as dependências
yarn install

# Execute o projeto
yarn start


