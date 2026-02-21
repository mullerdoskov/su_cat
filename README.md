# Tia dos Gatos

Site da cat sitter Suzana Soave (Tia dos Gatos). Roda em **localhost** ou pode ser hospedado na internet.

**→ Quer colocar no ar para mostrar?** Veja **[DEPLOY.md](DEPLOY.md)** (Vercel ou Netlify, grátis).

## Como rodar em localhost

### 1. MongoDB

O backend usa MongoDB. Suba um MongoDB local na porta 27017 ou ajuste `backend/.env`:

- `MONGO_URL=mongodb://localhost:27017`
- `DB_NAME=test_database`

### 2. Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

API: http://localhost:8000  
Docs: http://localhost:8000/docs

### 3. Frontend (React)

```bash
cd frontend
npm install
npm start
```

(ou `yarn install` e `yarn start` se usar Yarn.)

Site: http://localhost:3000

O frontend usa `REACT_APP_BACKEND_URL=http://localhost:8000` (em `frontend/.env`).

## Estrutura

- `backend/` – API FastAPI + MongoDB
- `frontend/` – React (CRACO), página Cat Sitting
- `memory/` – PRD e documentação
- `tests/` – testes
