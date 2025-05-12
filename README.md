# Projeto - Desenvolvimento de Gerenciador de Tarefas

## Como configurar o projeto
Instalar o [MySQL Server](https://dev.mysql.com/downloads/mysql/) na porta 3306 e senha de sua escolha.
Instalar o [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) e criar uma nova conexão com os parâmetros:
1. Nome: Local
2. Connection Method: TCP/IP
3. Hostname:localhost Port:3306
4. Username:root
5. Password/StoreinVault: "senha definida"
Estabelecer uma nova Conexão 
6. create database "nome de escolha"

Instalar o [PHP 8.4.3](https://www.php.net/releases/).
- Habilitar as seguintes extensões no php.
    - pdo_mysql
    - mysqli
Instalar o [Node 22.12.0](https://nodejs.org/pt/blog/release/v22.12.0).
Instalar o [Composer](https://getcomposer.org/download/).

## Após a instalação configurar o arquivo .env para a conexão com o banco.

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE="nome_do_banco"
DB_USERNAME=root
DB_PASSWORD="senha definida"

## Comandos para configuração do projeto

- composer install
- npm run install
- php artisan migrate
- php artisan db:seed --class=TaskSeeder
- npm run dev
- php artisan serve

## Tecnologias Utilizadas
- Node 22.12.0
- MySQL Server 8.3.0
- Laravel 12.13.0
- Vue 3.5.13
- TailwindCSS 3.4.17
- HTML5

## Ambiente de Desenvolvimento

Para o ambiente de desenvolvimento, foi feita utilização do Visual Studio Code (VSCode) com extensões relacionadas ao desenvolvimento do projeto.

## Desafios e Limitações

Desenvolver este projeto foi um grande aprendizado, especialmente por integrar Vue.js 3 (frontend) com Laravel (backend).

Inicialmente, tive dificuldades em configurar o Vue para consumir a API Laravel corretamente, especialmente em relação às rotas e ao CORS. Aprender a estruturar as requisições axios e garantir que os endpoints respondessem com JSON.

Modularidade dos Componentes:

Organizar a lógica entre componentes, composables e stores (Pinia) para manter o código limpo e reutilizável. Decidir o que ficaria no componente (EditTask.vue), no composable (useEditTask.js) e na store (taskStores.js) não foi trivial, mas acabou sendo essencial para um fluxo de dados eficiente.

Tratamento de Erros:

Lidar com respostas inesperadas da API (como HTML em vez de JSON) e exibir tanto no Vue quanto no Laravel.

Gerenciamento de Estado:

Usar o Pinia para centralizar as chamadas à API e sincronizar os dados entre componentes foi desafiador no começo, mas acabou simplificando muito a manutenção do código.

## Agradecimentos e Considerações Finais

Apesar dos desafios, este projeto foi uma experiência valiosa para aprofundar meus conhecimentos em desenvolvimento full-stack. Agradeço pela oportunidade de realizar o teste técnico para que ao menos eu possa continuar a me desenvolver tanto acadêmicamente quanto profissionalmente.