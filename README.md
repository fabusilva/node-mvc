# Fatify MVC

Fatify é uma aplicação web que permite gerenciar dados de forma eficiente utilizando Prisma com MongoDB no padrão MVC (Model-View-Controller). O projeto foi desenvolvido para proporcionar uma arquitetura escalável e de fácil manutenção.

## Tecnologias

- **Prisma**: ORM para conectar o banco de dados e facilitar a manipulação dos dados.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os dados.
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Fatify**: Framework web para Node.js, usado para estruturar a aplicação.
- **MVC**: Padrão de arquitetura de software utilizado para organizar a aplicação em Model, View e Controller.

## Instalação

Siga os passos abaixo para rodar o projeto localmente.

### 1. Clonar o repositório

```
git clone https://github.com/fabusilva/node-mvc.git
```
### 2. Instalar dependências
```
npm install
```
### 3. Configuração do MongoDB
Crie uma instância do MongoDB, local ou utilizando um serviço na nuvem, como o MongoDB Atlas. Após isso, crie um arquivo .env na raiz do projeto e adicione a string de conexão:
```
DATABASE_URL="sua-url-do mongodb"
```
### 4. Configuração do Prisma
Execute o comando a seguir para gerar os arquivos de migração e configurar o Prisma para o MongoDB.
```
npx prisma generate
```
### Rodando a aplicação
```
npm run dev
```
