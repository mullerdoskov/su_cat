import React, { useState } from 'react';
import {
  DEPOIMENTOS,
  GALERIA_GATOS,
  PLACEHOLDER_SUZANA,
  PLACEHOLDER_GATO,
} from '../mock';

const WHATSAPP_NUMBER = '5511958152820';

const PAGINAS = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'agendamento', label: 'Vamos lá???' },
  { id: 'blog', label: 'Blog' },
];

function Home() {
  const [paginaAtiva, setPaginaAtiva] = useState('inicio');
  const [agendamento, setAgendamento] = useState({ data: '', nome: '', email: '', mensagem: '' });

  const goToPage = (id) => {
    setPaginaAtiva(id);
    window.scrollTo(0, 0);
  };

  const whatsappUrl = (msg) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg || 'Olá! Gostaria de saber mais sobre os cuidados com meu gatinho.')}`;

  const handleAgendamentoSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de agendar.\nData: ${agendamento.data}\nNome: ${agendamento.nome}\nEmail: ${agendamento.email}\nMensagem: ${agendamento.mensagem}`;
    window.open(whatsappUrl(msg), '_blank');
  };

  return (
    <>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <span style={styles.navSpacer} />
          <span style={styles.logo}>🐱 Tia dos Gatos</span>
          <span style={styles.navSpacer}>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" style={styles.whatsappBtn}>
              WhatsApp
            </a>
          </span>
        </nav>
        <nav style={styles.navPaginacao}>
          {PAGINAS.map((p) => (
            <button
              key={p.id}
              type="button"
              style={{
                ...styles.btnPagina,
                ...(paginaAtiva === p.id ? styles.btnPaginaAtivo : {}),
              }}
              onClick={() => goToPage(p.id)}
            >
              {p.label}
            </button>
          ))}
        </nav>
      </header>

      <main style={paginaAtiva !== 'inicio' ? { paddingTop: 140 } : undefined}>
        {paginaAtiva === 'inicio' && (
          <>
            <section style={styles.hero}>
              <h1 style={styles.heroTitle}>Cuide do seu gatinho com amor e carinho</h1>
              <p style={styles.heroSub}>Suzana Soave · Cat Sitter · São Paulo</p>
            </section>

            <section style={styles.section} id="sobre">
              <h2 style={styles.sectionTitle}>Quem sou eu?</h2>
              <div style={styles.sobreBox}>
                <div style={styles.sobreFotoWrapper}>
                  <img
                    src={`${process.env.PUBLIC_URL || ''}/images/suzana.jpg`}
                    alt="Suzana Soave - Cat Sitter"
                    style={styles.sobreFoto}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = PLACEHOLDER_SUZANA;
                    }}
                  />
                </div>
                <div style={styles.sobreTexto}>
                  <p style={styles.text}>
                    <strong>Suzana Soave</strong> – especialista em cuidados com gatos em São Paulo.
                    Visitas diárias, hospedagem e muito carinho para o seu felino.
                  </p>
                  <p style={styles.patinhas}>🐾 🐾 🐾</p>
                </div>
                <div style={styles.ticker}>
                  Especialista Certificada em Cat Sitting
                </div>
              </div>
            </section>

            <section style={styles.section} id="galeria">
              <h2 style={styles.sectionTitle}>Dando o melhor para nossos gatinhos serem felizes</h2>
              <div style={styles.galeriaGrid}>
                {GALERIA_GATOS.map((item) => (
                  <div key={item.id} style={styles.galeriaItem}>
                    <img
                      src={`${process.env.PUBLIC_URL || ''}${item.src}`}
                      alt={item.alt}
                      style={styles.galeriaImg}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = PLACEHOLDER_GATO;
                      }}
                    />
                    <span style={styles.galeriaLegenda}>{item.legenda}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={styles.section} id="agendamento">
              <h2 style={styles.sectionTitle}>Vamos lá???</h2>
              <form onSubmit={handleAgendamentoSubmit} style={styles.form}>
                <label style={styles.label}>
                  Data desejada
                  <input
                    type="date"
                    value={agendamento.data}
                    onChange={(e) => setAgendamento((a) => ({ ...a, data: e.target.value }))}
                    style={styles.input}
                  />
                </label>
                <label style={styles.label}>
                  Nome
                  <input
                    type="text"
                    value={agendamento.nome}
                    onChange={(e) => setAgendamento((a) => ({ ...a, nome: e.target.value }))}
                    placeholder="Seu nome"
                    style={styles.input}
                  />
                </label>
                <label style={styles.label}>
                  Email
                  <input
                    type="email"
                    value={agendamento.email}
                    onChange={(e) => setAgendamento((a) => ({ ...a, email: e.target.value }))}
                    placeholder="seu@email.com"
                    style={styles.input}
                  />
                </label>
                <label style={styles.label}>
                  Mensagem
                  <textarea
                    value={agendamento.mensagem}
                    onChange={(e) => setAgendamento((a) => ({ ...a, mensagem: e.target.value }))}
                    placeholder="Conte um pouco sobre seu gatinho e o que precisa..."
                    rows={4}
                    style={styles.textarea}
                  />
                </label>
                <button type="submit" style={styles.submitBtn}>
                  Enviar pelo WhatsApp
                </button>
              </form>
            </section>

            <section style={styles.sectionDepoimentos} id="depoimentos">
              <h2 style={styles.sectionTitle}>Depoimentos</h2>
              <div style={styles.depoimentosGrid}>
                {DEPOIMENTOS.map((d) => (
                  <div key={d.id} style={styles.depoimentoCard}>
                    <p style={styles.depoimentoTexto}>"{d.texto}"</p>
                    <p style={styles.depoimentoNome}>{d.nome}</p>
                    <p style={styles.depoimentoNota}>{'★'.repeat(d.nota)}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {paginaAtiva === 'servicos' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Serviços</h2>
            <p style={styles.text}>Conteúdo desta página em breve.</p>
          </section>
        )}

        {paginaAtiva === 'agendamento' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Vamos lá???</h2>
            <form onSubmit={handleAgendamentoSubmit} style={styles.form}>
              <label style={styles.label}>
                Data desejada
                <input
                  type="date"
                  value={agendamento.data}
                  onChange={(e) => setAgendamento((a) => ({ ...a, data: e.target.value }))}
                  style={styles.input}
                />
              </label>
              <label style={styles.label}>
                Nome
                <input
                  type="text"
                  value={agendamento.nome}
                  onChange={(e) => setAgendamento((a) => ({ ...a, nome: e.target.value }))}
                  placeholder="Seu nome"
                  style={styles.input}
                />
              </label>
              <label style={styles.label}>
                Email
                <input
                  type="email"
                  value={agendamento.email}
                  onChange={(e) => setAgendamento((a) => ({ ...a, email: e.target.value }))}
                  placeholder="seu@email.com"
                  style={styles.input}
                />
              </label>
              <label style={styles.label}>
                Mensagem
                <textarea
                  value={agendamento.mensagem}
                  onChange={(e) => setAgendamento((a) => ({ ...a, mensagem: e.target.value }))}
                  placeholder="Conte um pouco sobre seu gatinho e o que precisa..."
                  rows={4}
                  style={styles.textarea}
                />
              </label>
              <button type="submit" style={styles.submitBtn}>
                Enviar pelo WhatsApp
              </button>
            </form>
          </section>
        )}

        {paginaAtiva === 'blog' && (
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Blog</h2>
            <p style={styles.text}>Em breve: dicas e novidades sobre cuidados com gatos.</p>
          </section>
        )}

        {/* Footer */}
        <footer style={styles.footer}>
          <div style={styles.footerInner}>
            <p style={styles.footerNome}>Suzana Soave · Tia dos Gatos</p>
            <p style={styles.footerInfo}>São Paulo, SP</p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
              +55 11 95815-2820
            </a>
            <p style={styles.footerCopy}>© Tia dos Gatos</p>
          </div>
        </footer>
      </main>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.floatWhatsApp}
        aria-label="Abrir WhatsApp"
      >
        💬
      </a>
    </>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: '#fff',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    zIndex: 100,
  },
  nav: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
  },
  navSpacer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  logo: {
    flex: 1,
    textAlign: 'center',
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#ea580c',
  },
  whatsappBtn: {
    padding: '10px 24px',
    minWidth: 140,
    background: '#25d366',
    color: '#fff',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
  },
  navPaginacao: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '0 20px 12px',
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    flexWrap: 'wrap',
    borderTop: '1px solid #f5f5f5',
  },
  btnPagina: {
    padding: '10px 20px',
    background: '#fff',
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 500,
    color: '#57534e',
    fontSize: '0.95rem',
  },
  btnPaginaAtivo: {
    borderColor: '#ea580c',
    color: '#ea580c',
    background: '#fff7ed',
  },
  hero: {
    padding: '160px 20px 60px',
    textAlign: 'center',
    background: 'linear-gradient(180deg, #fff7ed 0%, #fff 60%)',
  },
  heroTitle: {
    margin: 0,
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    color: '#1c1917',
    maxWidth: 640,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heroSub: {
    margin: '12px 0 24px',
    color: '#78716c',
    fontSize: '1.1rem',
  },
  cta: {
    display: 'inline-block',
    padding: '12px 24px',
    background: '#ea580c',
    color: '#fff',
    borderRadius: 8,
    textDecoration: 'none',
    fontWeight: 600,
  },
  section: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '48px 20px',
  },
  sectionTitle: {
    margin: '0 0 8px',
    fontSize: '1.5rem',
    color: '#1c1917',
  },
  text: {
    color: '#57534e',
    lineHeight: 1.6,
    margin: 0,
  },
  sobreBox: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'center',
    padding: 24,
    paddingBottom: 48,
    background: '#fff',
    borderRadius: 16,
    border: '2px solid #ea580c',
    boxShadow: '0 4px 20px rgba(234, 88, 12, 0.15)',
  },
  sobreFotoWrapper: {
    flexShrink: 0,
  },
  sobreFoto: {
    width: 280,
    maxWidth: '100%',
    height: 320,
    objectFit: 'cover',
    borderRadius: 12,
  },
  ticker: {
    position: 'absolute',
    bottom: 12,
    left: 24,
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#ea580c',
  },
  patinhas: {
    margin: '12px 0 0',
    fontSize: '1.25rem',
    opacity: 0.8,
  },
  sobreTexto: {
    flex: '1 1 280px',
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 16,
    marginTop: 16,
  },
  card: {
    padding: 20,
    background: '#fff7ed',
    borderRadius: 12,
    textAlign: 'center',
    fontWeight: 500,
    color: '#9a3412',
  },
  galeriaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: 16,
  },
  galeriaItem: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    background: '#fff7ed',
  },
  galeriaImg: {
    width: '100%',
    height: 220,
    objectFit: 'cover',
    display: 'block',
  },
  galeriaLegenda: {
    display: 'block',
    padding: '10px 12px',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#9a3412',
  },
  sectionDepoimentos: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '48px 20px',
    background: '#fff7ed',
  },
  depoimentosGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 20,
    marginTop: 20,
  },
  depoimentoCard: {
    background: '#fff',
    padding: 24,
    borderRadius: 12,
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
  },
  depoimentoTexto: {
    margin: '0 0 12px',
    color: '#57534e',
    lineHeight: 1.6,
    fontStyle: 'italic',
  },
  depoimentoNome: {
    margin: 0,
    fontWeight: 600,
    color: '#1c1917',
  },
  depoimentoNota: {
    margin: '4px 0 0',
    color: '#ea580c',
    fontSize: '1rem',
  },
  form: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#1c1917',
  },
  input: {
    padding: '10px 12px',
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    fontSize: '1rem',
  },
  textarea: {
    padding: '10px 12px',
    border: '1px solid #e5e5e5',
    borderRadius: 8,
    fontSize: '1rem',
    resize: 'vertical',
  },
  submitBtn: {
    padding: '12px 24px',
    background: '#ea580c',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  footer: {
    background: '#1c1917',
    color: '#a8a29e',
    padding: '40px 20px',
    textAlign: 'center',
  },
  footerInner: {
    maxWidth: 960,
    margin: '0 auto',
  },
  footerNome: {
    margin: '0 0 8px',
    fontWeight: 600,
    color: '#fff',
  },
  footerInfo: {
    margin: '0 0 4px',
    fontSize: '0.95rem',
  },
  footerLink: {
    color: '#25d366',
    textDecoration: 'none',
  },
  footerCopy: {
    margin: '20px 0 0',
    fontSize: '0.85rem',
    opacity: 0.8,
  },
  floatWhatsApp: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: '#25d366',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 99,
  },
};

export default Home;
