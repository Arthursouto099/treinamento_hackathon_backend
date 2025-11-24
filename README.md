A seguir preparei um **README organizado**, dividido em **duas grandes partes para duas pessoas** trabalharem separadamente no backend, mantendo toda a arquitetura MVC, autenticação JWT, validações e requisitos de segurança.

Caso queira, também posso gerar a **estrutura completa das pastas**, **exemplos de código**, ou separar também a parte do frontend.

---

# 📘 README – Arquitetura do Projeto (Backend em Duas Pessoas)

Este documento descreve todos os requisitos do backend, dividido claramente para **Pessoa A** e **Pessoa B**, garantindo que o trabalho seja simultâneo, modular e sem conflito.

O sistema será desenvolvido **100% em TypeScript**, com backend seguindo **MVC estrito**, autenticação JWT, validações rígidas e segurança reforçada.

---

# 🧩 **Divisão do Backend entre Duas Pessoas**

---

# 👤 **Pessoa A — Infraestrutura, Autenticação e Estrutura Base**

Responsável por tudo que sustenta o backend: configuração do servidor, rotas base, middlewares, JWT, conexão com banco, estrutura MVC, padrões de resposta, logs e segurança.

---

## ✅ **Responsabilidades da Pessoa A**

### 1. **Configuração do Projeto**

* Criar estrutura inicial do projeto em TypeScript.
* Configurar tsconfig, scripts, eslint/prettier.
* Configurar dotenv para variáveis de ambiente.
* Criar estrutura de pastas MVC:

```
/src
  /models
  /controllers
  /routes
  /middlewares
  /services (opcional)
  /config
  /utils
```

---

### 2. **Configuração do Servidor**

* Criar `server.ts` usando Express.
* Registrar rotas importadas.
* Aplicar middlewares de segurança:

  * Helmet
  * Rate limit
  * Express.json()
* Configurar CORS.

---

### 3. **Autenticação com JWT**

Implementar:

* `/auth/login`
* Geração de token JWT assinado com chave secreta segura
* Tempo de expiração
* Hash de senha (bcrypt)
* **Nunca enviar token no body**, apenas via resposta de login
* Não expor dados sensíveis

---

### 4. **Middleware de validação JWT**

* Validar:

  * Estrutura
  * Assinatura
  * Expiração
* Rejeitar acesso com 401/403.
* Token deve vir em `Authorization: Bearer token`.

---

### 5. **Configuração e Segurança do Banco**

* Criar conexão segura (SQL ou NoSQL).
* Criar camada anti-injection:

  * Queries parametrizadas (SQL)
  * Sanitização de inputs
* Nunca permitir acesso direto ao banco sem validação.

---

### 6. **Middleware Global de Validação de Dados**

Criar utilitários de validação para:

* Campos obrigatórios
* Tipos de dados
* Sanitização básica
* Erros padronizados

---

### 7. **Padronização de Retornos**

Criar formato único de retorno:

```ts
{
  success: boolean;
  message: string;
  data?: any;
}
```

---

### 8. **Sistema de Logs**

* Logs sem informações sensíveis
* Registros de:

  * Acesso
  * Erros
  * Tentativas inválidas

---

### 9. **Rotas Públicas**

Criar:

* `/auth/login`
* `/health` (opcional para testes)

Rotas protegidas serão responsabilidade da Pessoa B, mas **Pessoa A define a infraestrutura delas** no sistema de rotas.

---

---

# 👤 **Pessoa B — Regras de Negócio do Hemocentro e CRUD Completo**

Responsável pelos Models, Controllers e regras de negócio dos doadores.

---

## ✅ **Responsabilidades da Pessoa B**

### 1. **Model do Doador (`DonorModel.ts`)**

Com os campos obrigatórios:

* nome
* idade (18 a 69)
* peso (≥ 50 kg)
* tipoSanguineo (A+, A-, B+, B-, AB+, AB-, O+, O-)
* dataUltimaDoacao (dd/mm/aaaa)

**Somente estrutura + regras de dados.
Sem lógica de API.**

---

### 2. **Validações obrigatórias**

Implementar validações completas:

#### 🧬 Tipo sanguíneo

Aceitar somente:

```
A+, A-, B+, B-, AB+, AB-, O+, O-
```

#### 🎂 Idade

* mínimo: **18**
* máximo: **69**

#### ⚖️ Peso

* mínimo: **50 kg**

#### 📅 Data da última doação

* somente formato **dd/mm/aaaa**

#### ❗ Cadastro incompleto não é permitido

---

### 3. **Controllers**

Responsável pela regra de negócio (sem lógica de visualização):

### **3.1 Criar doador**

* Validar todos os campos
* Proibir cadastro incompleto
* Criar no banco

### **3.2 Listar doadores**

* Retornar todos
* Sem expor dados sensíveis

### **3.3 Buscar por tipo sanguíneo**

* Validar tipo sanguíneo
* Retornar lista filtrada

### **3.4 Buscar por data da última doação**

* Comparar datas corretamente
* Retornar apenas quem doou antes da data informada

### **3.5 Atualizar dados**

* Validar tudo novamente
* Impedir alterações inválidas

### **3.6 Excluir doador**

* Remover do banco
* Tratar caso não exista

---

### 4. **Rotas Protegidas**

Criar somente a definição das rotas, sem lógica.

```
POST   /doador
GET    /doador
GET    /doador/tipo/:tipo
GET    /doador/data/:data
PUT    /doador/:id
DELETE /doador/:id
```

Todas as rotas devem usar o middleware JWT da Pessoa A.

---

### 5. **Segurança**

* Não retornar tokens
* Não expor informações internas do servidor
* Validar dados antes do acesso ao banco
* Sanitizar entradas
* Aplicar respostas padronizadas

---

---

# 📂 Estrutura Final das Pastas (Resultado da Integração)

```
/src
  /config
    database.ts
    env.ts
  /controllers
    AuthController.ts
    DonorController.ts
  /middlewares
    authMiddleware.ts
    validationMiddleware.ts
  /models
    DonorModel.ts
    UserModel.ts
  /routes
    auth.routes.ts
    donor.routes.ts
    index.ts
  /utils
    validators.ts
    logger.ts
    response.ts
  server.ts
```

---

# 🧑‍🤝‍🧑 Como as Duas Pessoas Trabalham Juntas

| Tarefa                    | Pessoa A  | Pessoa B                  |
| ------------------------- | --------- | ------------------------- |
| Estrutura do projeto      | ✔️        |                           |
| Banco de dados            | ✔️        |                           |
| Middleware JWT            | ✔️        |                           |
| Rotas protegidas          | ✔️ define | ✔️ implementa controllers |
| Model do Doador           |           | ✔️                        |
| CRUD completo             |           | ✔️                        |
| Validações do domínio     |           | ✔️                        |
| Segurança de API          | ✔️        | ✔️                        |
| Padronização de respostas | ✔️        | usa                       |
| Login e token             | ✔️        |                           |

---

# ✔️ Conclusão

Este README divide claramente o backend entre duas pessoas sem conflitos e mantendo:

✔️ MVC estrito
✔️ Autenticação JWT
✔️ Segurança reforçada
✔️ CRUD completo
✔️ Validações completas
✔️ Sem lógica misturada
✔️ Estrutura modular e escalável

---

Se quiser, posso gerar também:

✅ Estrutura de pastas automatizada
✅ Código completo dos arquivos
✅ Versão separada do frontend
✅ Checklist para cada pessoa
✅ Diagrama da arquitetura

Basta pedir!
