# 🚀 Cadastro de Usuário

Este é um projeto de **cadastro de usuários** desenvolvido para facilitar a gestão de perfis em uma aplicação web. Ele inclui funcionalidades de criação, edição e remoção de usuários, utilizando tecnologias modernas para um desenvolvimento eficiente e seguro.

---

## 🛠 Tecnologias Utilizadas

- **🖥 Backend:** Node.js com Express
- **💾 Banco de Dados:** MongoDB
- **📡 Outras Tecnologias:** dotenv, bcryptjs, mongoose

---

## ⚙️ Instalação e Configuração

### 📥 1. Clone o Repositório

```bash
git clone https://github.com/fercarneir0/cadastro-usuario.git
cd cadastro-usuario
```

### 📦 2. Instale as Dependências

```bash
npm install
```

### 🛠 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione a seguinte variável:

```env
MONGO_URI=mongodb+srv://...
```

### ▶️ 4. Execute a Aplicação

```bash
npm src index.js
```

A aplicação estará rodando na porta `3000`.

---

## 🌐 Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| **POST** | `/api/users` | Criar um novo usuário |
| **GET** | `/api/users` | Listar todos os usuários |
| **GET** | `/api/users/:id` | Obter um usuário por ID |
| **PUT** | `/api/users/:id` | Atualizar um usuário |
| **DELETE** | `/api/users/:id` | Excluir um usuário |

---

## 🤝 Contribuição

Se deseja contribuir com o projeto, siga os seguintes passos:

1. 🔄 Faça um **fork** do repositório
2. 🛠 Crie uma branch para suas alterações: `git checkout -b minha-nova-feature`
3. 💾 Faça commit das suas alterações: `git commit -m 'Adicionando nova funcionalidade'`
4. 🚀 Faça push para a branch: `git push origin minha-nova-feature`
5. 🎯 Abra um **Pull Request**

