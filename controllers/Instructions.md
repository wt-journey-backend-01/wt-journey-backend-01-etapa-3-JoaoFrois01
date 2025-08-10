# Instruções para o Projeto - Persistência com PostgreSQL e Knex.js

## 1. Subir o banco com Docker
Certifique-se de ter o Docker instalado e rodando em sua máquina(basta deixar o docker desktop aberto,se for Windows). Na raiz do projeto, execute o comando abaixo para subir o container do PostgreSQL com volume persistente:
```bash
docker-compose up -d
```
## 2. Executar Migrations
Para criar o arquivo usamos o comando:
```npx knex migrate:make solution_migrations.js```
Dentro do arquivo do migrations vamos criar a tabela, usando os devidos comandos.
Segue abaixo um exemplo da criação da tabela com somente o campo ID criado.
EX: 
```return knex.schema.createTable('casos', (table) => {table.increments('id').primary();});
```
Depois de Preencher corretamente o arquivo, rodamos o comando abaixo no terminal para que as tabelas sejam realmente criadas.
```npx knex migrate:latest```

## 2. Rodar Seeds
As seeds serão o que complementará nosso banco de dados com as informações, para rodar as seeds, primeiro é necessário criar o arquivo
com o comando: ```npx knex seed:make solution_migrations.js```.
Após criado e preenchido, para executar e as tabelas serem preenchidas de fato, rode o comando a seguir:
```npx knex seed:run```
 

