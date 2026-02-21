# PRD - Cat Sitting SP (Suzana Soave)

## Problema Original
Criar uma plataforma para divulgar o trabalho de cat sitter (especialista em gatos) com:
- Site "bonitinho" com conceito "Cuide do seu gatinho"
- Imagens de pessoas felizes com gatos
- Sistema de agendamento
- Galeria
- Contato direto WhatsApp

## Dados do Cliente
- **Nome:** Suzana Soave
- **WhatsApp:** +55 11 95815-2820
- **Localização:** São Paulo Capital
- **Especialidade:** Cuidados com gatos

## Arquitetura
- **Frontend:** React com Shadcn UI
- **Backend:** FastAPI + MongoDB
- **Deploy:** Ambiente containerizado

## Implementado (04 de Fevereiro 2026)

### Frontend ✅
- **Hero Section** com título principal "Cuide do seu gatinho com amor e carinho"
- **Header** fixo com navegação suave e botão WhatsApp
- **Seção Sobre** apresentando a Suzana com:
  - Foto real da Suzana Soave
  - Design fofo com patinhas decorativas
  - Badge "Cat Lover" 
  - Borda laranja e sombra elegante
- **Seção de Serviços** com 4 cards:
  - Visitas Diárias
  - Hospedagem
  - Cuidados Especiais
  - Relatórios Diários
- **Galeria "Bons Tratos"** com grid 3x2 de imagens de gatos
- **Seção de Depoimentos** com 3 avaliações
- **Sistema de Agendamento** com:
  - Calendário interativo (Shadcn Calendar)
  - Formulário de contato
- **Footer** completo com informações de contato
- **Botão WhatsApp Flutuante** fixo no canto inferior direito
- **Design:** Cores laranja/amber suaves, gradientes sutis, responsivo

### Funcionalidades Implementadas (Mock)
- Navegação suave entre seções
- Calendário funcional para seleção de datas
- Formulário de agendamento com validação
- Link direto para WhatsApp com mensagem pré-preenchida
- Toast notifications para feedback
- Hover effects e animações
- Design mobile-first responsivo
- Foto real da Suzana integrada na seção principal

### Arquivos Criados
- `/app/frontend/src/pages/Home.js` - Página principal (atualizada com foto real)
- `/app/frontend/src/mock.js` - Dados mockados
- `/app/frontend/src/App.js` - Configuração de rotas
- `/app/frontend/src/App.css` - Estilos customizados

## Backlog / Próximas Fases

### P0 - Backend (Fase 2)
- [ ] API de agendamentos (CRUD)
- [ ] API de galeria (upload de imagens)
- [ ] API de depoimentos
- [ ] Integração com MongoDB
- [ ] Notificações WhatsApp (opcional)

### P1 - Melhorias
- [ ] Painel administrativo para Suzana
- [ ] Sistema de autenticação
- [ ] Upload de fotos pelos clientes
- [ ] Blog com dicas de cuidados

### P2 - Features Avançadas
- [ ] Sistema de pagamento online
- [ ] Calendário de disponibilidade em tempo real
- [ ] Chat ao vivo
- [ ] App mobile

## Notas Técnicas
- Frontend usa mock.js para dados temporários
- WhatsApp link funcional com número real
- Design segue guidelines (sem gradientes proibidos purple/pink)
- Uso correto de Shadcn components
- Foto real da Suzana integrada com design fofo e profissional
