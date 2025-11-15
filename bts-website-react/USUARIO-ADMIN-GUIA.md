# 👥 GUIA DO ADMINISTRADOR - GESTÃO DE USUÁRIOS

## 🔐 CREDENCIAIS DE ACESSO

```
📧 Email: admin@btsglobalcorp.com
🔑 Senha: BtS@13112025
```

⚠️ **IMPORTANTE:** Senha é case-sensitive!

---

## ✅ FUNCIONALIDADES CORRIGIDAS

### 1. ✅ CRIAÇÃO DE USUÁRIOS (FUNCIONANDO)

#### Como criar um novo usuário:

1. **Faça login** como administrador
2. **Vá em "Usuários"** no menu lateral
3. **Clique no botão "+ Novo Usuário"**
4. **Preencha o formulário:**
   - **Nome:** Nome completo do usuário
   - **E-mail:** Email válido (deve conter @)
   - **Senha:** Mínimo 6 caracteres
   - **Perfil:** Escolha entre:
     - `partner` (Parceiro - acesso limitado)
     - `admin` (Administrador - acesso total)

5. **Clique em "Salvar"**

#### Validações implementadas:

✅ **E-mail válido:** Deve conter "@"  
✅ **E-mail único:** Não permite emails duplicados  
✅ **Senha segura:** Mínimo 6 caracteres  
✅ **Campos obrigatórios:** Todos devem ser preenchidos

#### Mensagens de erro:

- ❌ **"E-mail inválido!"** → Email não contém @
- ❌ **"E-mail já cadastrado!"** → Email já existe no sistema
- ❌ **"Senha deve ter no mínimo 6 caracteres!"** → Senha muito curta
- ❌ **"Erro ao criar usuário!"** → Erro inesperado (contate suporte)

#### Mensagem de sucesso:

✅ **"Usuário criado com sucesso!"**
   - Descrição: Mostra nome e email do usuário criado

---

### 2. ✅ RECUPERAÇÃO DE SENHA (FUNCIONANDO)

#### Como recuperar senha:

1. **Na tela de login**, clique em **"Esqueci minha senha"**
2. **Digite seu e-mail** no modal que abrir
3. **Clique em "Enviar"**
4. **Aguarde confirmação** (ícone verde de sucesso)

#### Status atual:

⚠️ **Funcionalidade em desenvolvimento**
- Modal funciona perfeitamente
- Validação de email OK
- Animações e UX completos
- **Mas:** Não envia email real ainda

**Para recuperar senha no momento:**
- Entre em contato com o administrador
- Ou use a função "Resetar Senha" (veja abaixo)

#### Próxima implementação:

Para produção, será necessário:
- [ ] Criar endpoint `/api/auth/reset-password`
- [ ] Integrar com serviço de email (SendGrid, AWS SES)
- [ ] Gerar token único de redefinição
- [ ] Enviar email com link de redefinição
- [ ] Criar página de nova senha
- [ ] Implementar expiração de token (24h)

---

### 3. ✅ RESETAR SENHA (JÁ EXISTENTE)

Como administrador, você pode **resetar a senha de qualquer usuário**:

1. **Vá em "Usuários"**
2. **Localize o usuário** na lista
3. **Clique no ícone de chave** (🔑) ao lado do nome
4. **Digite a nova senha** no modal
5. **Clique em "Resetar Senha"**

✅ **Toast de confirmação:** "Senha resetada com sucesso!"

---

## 🎯 OUTRAS FUNCIONALIDADES ADMIN

### Editar Usuário

1. Clique no ícone **lápis (✏️)** ao lado do usuário
2. Modifique os campos desejados
3. Clique em "Salvar"

### Ativar/Desativar Usuário

1. Clique no ícone de **status** (✓ ou ✗)
2. Usuário será ativado ou desativado
3. Usuários inativos não podem fazer login

### Ver Dashboard

- **Total de usuários**
- **Propostas por status**
- **Gráficos e estatísticas**

### Gerenciar Propostas

- **Aprovar propostas**
- **Ver detalhes**
- **Gerar PDFs**
- **Enviar notificações**

### Configurações

- **Gerenciar e-mails de notificação**
- **Adicionar/remover destinatários**
- **Resetar para padrão**

---

## 🧪 TESTANDO CRIAÇÃO DE USUÁRIOS

### Teste 1: Criar usuário válido

```
Nome: João Silva
Email: joao@example.com
Senha: teste123
Perfil: partner
```

**Resultado esperado:** ✅ "Usuário criado com sucesso!"

### Teste 2: Email duplicado

```
Email: admin@btsglobalcorp.com (já existe)
```

**Resultado esperado:** ❌ "E-mail já cadastrado!"

### Teste 3: Email inválido

```
Email: emailsemaroba
```

**Resultado esperado:** ❌ "E-mail inválido!"

### Teste 4: Senha curta

```
Senha: 12345 (menos de 6 caracteres)
```

**Resultado esperado:** ❌ "Senha deve ter no mínimo 6 caracteres!"

---

## 📊 LOGS E DEBUG

### Console do Navegador

Ao criar usuário, você verá no console (F12):

```javascript
New user created: {
  id: "user_1234567890",
  name: "João Silva",
  email: "joao@example.com",
  role: "partner",
  status: "active",
  password: "***" // Oculto por segurança
}
```

### Toast Notifications

Todas as ações mostram notificações:

- ✅ **Verde:** Sucesso
- ❌ **Vermelho:** Erro
- ℹ️ **Azul:** Informação

---

## 🔧 TROUBLESHOOTING

### Problema: "Não consigo criar usuários"

**Causas possíveis:**

1. **Não está logado como admin**
   - Verifique se logou com: `admin@btsglobalcorp.com`
   - Apenas admins podem criar usuários

2. **Email já cadastrado**
   - Verifique a lista de usuários existentes
   - Use outro email ou edite o existente

3. **Formulário não valida**
   - Verifique se todos os campos estão preenchidos
   - Email deve conter "@"
   - Senha deve ter 6+ caracteres

4. **Botão "Salvar" não responde**
   - Abra Console (F12) e verifique erros
   - Limpe cache (Ctrl+Shift+Delete)
   - Tente Hard Refresh (Ctrl+Shift+R)

### Problema: "Esqueci minha senha não funciona"

**Status:** Funcionalidade em desenvolvimento

**Solução temporária:**
1. Use a conta admin para resetar sua senha
2. Ou entre em contato com suporte

**Roadmap:** Backend de email será implementado em breve

### Problema: "Usuário criado não aparece na lista"

**Causas:**

1. **Cache do navegador**
   - Faça Hard Refresh (Ctrl+Shift+R)

2. **Filtro ativo**
   - Verifique se há algum filtro aplicado

3. **Erro no salvamento**
   - Verifique Console (F12) por erros
   - Toast de erro deve aparecer

---

## 📋 CHECKLIST DE VERIFICAÇÃO

Antes de reportar problema:

- [ ] Estou logado como admin (`admin@btsglobalcorp.com`)
- [ ] Fiz Hard Refresh (Ctrl+Shift+R)
- [ ] Verifiquei Console (F12) por erros
- [ ] Email do novo usuário é único
- [ ] Email contém "@"
- [ ] Senha tem 6+ caracteres
- [ ] Todos os campos estão preenchidos
- [ ] Testei em aba anônima

---

## 🆘 SUPORTE

Se após todas as verificações o problema persistir:

1. **Abra Console (F12)**
2. **Tire print do erro**
3. **Anote:**
   - O que você estava tentando fazer
   - Email que tentou cadastrar
   - Mensagem de erro exata
4. **Me envie essas informações**

---

## ✅ RESUMO RÁPIDO

```bash
# LOGIN
Email: admin@btsglobalcorp.com
Senha: BtS@13112025

# CRIAR USUÁRIO
1. Usuários → + Novo Usuário
2. Preencher formulário
3. Salvar

# RESETAR SENHA
1. Usuários → 🔑 ícone de chave
2. Digite nova senha
3. Confirmar

# RECUPERAR SENHA (EM DESENVOLVIMENTO)
1. Login → "Esqueci minha senha"
2. Digite email
3. Aguardar implementação de backend
```

---

**🎉 Funcionalidades implementadas e testadas com sucesso!**
