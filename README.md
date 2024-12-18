# .Net-Angular

**Visão Geral do Projeto**

Este repositório contém dois projetos integrados:

1. **ApiUserManagement**: Backend desenvolvido em .NET 8, responsável por fornecer as APIs para gerenciamento de usuários.

2. **AppUserManagement**: Frontend desenvolvido em Angular 18, utilizado para interagir com o sistema de forma amigável ao usuário.

    Ambos os projetos estão localizados dentro da pasta principal .Net-Angular.


## 📋 Funcionalidades

### Funcionalidades do Backend (ApiUserManagement)
**Gerenciamento de Usuários:**

- Cadastro de usuários.
- Atualização de dados de usuários existentes.
- Exclusão de usuários.
- Listagem e busca de usuários.

**Validações:**

- Verificação de dados obrigatórios.
- Validação de datas para evitar valores no futuro.
- Verificação de formato de e-mail.

### Funcionalidades do Frontend (AppUserManagement)

**Interface Amigável:**

- Tabelas para exibição dos usuários cadastrados.
- Formulários para cadastro e edição de usuários.

**Busca de Usuários:**

- Campo de pesquisa para filtrar os usuários com base em nome, sobrenome ou nível de educação.

- **Feedback ao Usuário:**

- Exibição de mensagens de erro e sucesso.

- **Modal de Exclusão:**

- Confirmação antes de excluir um usuário.

## 🛠️ Tecnologias Utilizadas
### Backend
- **.NET 8** 
- **Entity Framework Core** 
- **SQL Server** 

### Frontend
- **Angular 18** 
- **Bootstrap** 
---

## 🚀 Configuração do Ambiente

### Configuração do Código
1. Clone o repositório:
    ```bash
    git clone https://github.com/qwe-rtyui/.Net-Angular.git
    cd .netangular    

**2. Configuração do Backend (ApiUserManagement).**

1. Navegue até a pasta do backend:
    ```bash
    cd ApiUserManagement
    ```

2. Restaure os pacotes do .NET:

3. Configure o banco de dados no arquivo `appsettings.json`.

4. Execute as migrações para configurar o banco de dados:    
    ```bash
    dotnet ef database update   
    ```

5. Execute a aplicação:
    ```bash
    dotnet run
    ```

6. A API estará disponível em: `http://localhost:5066`.

### **3. Configuração do Frontend (AppUserManagement)**

1. Navegue até a pasta do frontend:
    ```bash
    cd AppUserManagement
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Execute a aplicação:
    ```bash
    ng serve
    ```

4. O frontend estará disponível em: http://localhost:4200

### **4. Caso seja necessario alterar 'http://localhost:4200' ou e 'http://localhost:5066'**

### Backend
    ```
    └── Program.cs (alterar para o localhost do frontend)
    ```

### Frontend
    ```
    src/
    │
    ├── app/
    │   │
    │   ├── _services/
    │   │   ├── users.service.ts (altere apiUrl para o novo localhost +'/api/users';)
    
    ```

## ▶️ Executando a Aplicação
Compile o projeto.

Execute a aplicação backend diretamente no Visual Studio ou no terminal:
    ```
    dotnet run
    ```

Execute a aplicação frontend diretamente no Visual Studio ou no terminal:
    ```
    ng Serve
    ```   

## 📂 Estrutura do Projeto
    ```
        .netangular/
    ├── ApiUserManagement/   # Backend
    └── AppUserManagement/   # Frontend
    ```

### Backend
    ```
    │   
    ├── Controllers/
    │   ├── UserController.cs
    ├── Models/
    │   ├── User.cs
    │   ├── UserContext.cs    
    └── Program.cs
    ```

### Frontend
    ```
    src/
    │
    ├── app/
    │   ├── _components/
    │   │   ├── user-form/
    │   │   ├── user-card/
    │   │   ├── user-delete-modal/
    │   │   ├── alert/
    │   ├── _services/
    │   │   ├── users.service.ts
    │   ├── _models/
    │   │   ├── user.ts
    │   ├── app.module.ts
    │   └── app.component.ts
    │
    ├── assets/
    ├── environments/
    ├── index.html
    └── styles.css
    ```

<h2>📸 Capturas de Tela</h2>

<div style="display:flex;">
    <img src="https://github.com/qwe-rtyui/.Net-Angular/blob/main/imgs/N-A_userList.png" style="heigth:500px; width:550px">

- Lista dos usuários adicionados.
- Botões p/ (Adicionar, Editar e Remover) usuários.
- Interface moderna e estilizada com funcionalidades úteis como validação de campos.
- Alerts.
</div>

--

<div style="display:flex;">    
    <img src="https://github.com/qwe-rtyui/.Net-Angular/blob/main/imgs/N-A_userAdd.png" style="heigth:500px; width:550px"> 
    
- Adiciona e Remove User.
</div>

--

## 👨‍💻 Contribuição
Sinta-se à vontade para abrir Issues ou enviar Pull Requests para melhorias ou correções. 💡

## 📝 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

## 📞 Contato
- **Email:** kesleyjuan.dev@gmail.com

