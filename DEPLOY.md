# Como subir o site "Tia dos Gatos" na internet

Para **mostrar para sua amiga**, basta colocar o **frontend** no ar. O site funciona sem backend (formulário abre direto no WhatsApp).

---

## Opção 1: Vercel (recomendado, grátis)

1. **Crie uma conta** em [vercel.com](https://vercel.com) (pode usar login com GitHub).

2. **Suba o projeto no GitHub** (se ainda não estiver):
   - Crie um repositório no GitHub.
   - No seu PC, na pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Tia dos Gatos - site inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

3. **Conecte no Vercel**:
   - Em [vercel.com/new](https://vercel.com/new), clique em **Import** no repositório do projeto.
   - **Root Directory:** clique em **Edit** e coloque: `frontend`.
   - **Build Command:** `npm run build` (já vem assim).
   - **Output Directory:** `build` (já vem assim).
   - Clique em **Deploy**.

4. Em 1–2 minutos você recebe um link tipo:  
   `https://tia-dos-gatos-xxx.vercel.app`  
   Pode enviar esse link para sua amiga.

**Dica:** Depois você pode configurar um domínio próprio (ex.: `tiadosgatos.com.br`) nas configurações do projeto no Vercel.

---

## Opção 2: Netlify (também grátis)

1. Conta em [netlify.com](https://netlify.com).

2. **Build local** (no seu PC):
   ```bash
   cd frontend
   npm install
   npm run build
   ```
   Isso gera a pasta `frontend/build`.

3. No Netlify: **Sites → Add new site → Deploy manually**.
   - Arraste a pasta **`frontend/build`** para a área de upload.
   - O site sobe e você ganha um link tipo `https://random-name.netlify.app`.

Ou conecte o repositório do GitHub no Netlify e configure:
- **Base directory:** `frontend`
- **Build command:** `npm run build`
- **Publish directory:** `frontend/build`

---

## Resumo

| Onde       | Custo  | O que fazer |
|-----------|--------|-------------|
| **Vercel** | Grátis | Conectar GitHub, root = `frontend`, deploy automático |
| **Netlify** | Grátis | Conectar GitHub ou arrastar a pasta `frontend/build` |

Só o frontend já deixa o site **Tia dos Gatos** funcionando (textos, fotos, WhatsApp). Backend e banco de dados são necessários só se no futuro você quiser salvar agendamentos ou ter painel administrativo.
