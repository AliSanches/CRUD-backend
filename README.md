# CRUD - Backend

Sistema de CRUD ( create, read, update, delete )

## Descrição

Sistema backend com a finalidade de realizar operações basicas de uma aplicação.

## Tecnologias frontend utilizadas

- Nodejs
- Express
- Prisma
- Banco de dados MariaDB (https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.5.2&os=windows&cpu=x86_64&pkg=msi&mirror=fder)
- Obs: Configuração do banco para facilitar, usuário: root, senha: 123

## Instalação / Configuração

- Clone esse repositório para sua máquina local
- Com o projeto aberto pelo Visual Studio Code abra o cmd (Windows) e rode um "npm install" para Instalação das dependências
- Na raiz do projeto crie um arquivo chamado ".env" onde você ira copiar as informações do arquivo ".env-example" e configurar conforme sua configuração do banco de dados
- Após criar o arquivo abra novamente o cmd e execute "npx prisma db push" para criar as tabela no banco de dados
- Agora basta digitar "npm start" para iniciar seu servidor backend
