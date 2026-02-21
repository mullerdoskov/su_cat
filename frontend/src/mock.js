// Dados mockados para o site Cat Sitting SP (substituir por API quando backend estiver pronto)

export const DEPOIMENTOS = [
  {
    id: 1,
    nome: 'Maria Silva',
    texto: 'A Suzana cuidou do meu Thor com tanto carinho! Voltou relaxado e feliz. Super recomendo.',
    nota: 4,
  },
  {
    id: 2,
    nome: 'João Santos',
    texto: 'Melhor cat sitter de SP. Minha gata é ansiosa e ela soube acolher perfeitamente.',
    nota: 5,
  },
  {
    id: 3,
    nome: 'Ana Costa',
    texto: 'Relatórios diários com fotos e vídeos. Ficamos tranquilos na viagem. Obrigada!',
    nota: 5,
  },
];

// Fotos da galeria "Bons Tratos" – coloque as imagens reais em public/images/gatos/1.jpg ... 6.jpg
export const GALERIA_GATOS = [
  { id: 1, src: '/images/gatos/2.jpg', alt: 'Gato descansando', legenda: 'Soneca' },
  { id: 2, src: '/images/gatos/3.jpg', alt: 'Gato brincando', legenda: 'Brincadeira' },
  { id: 3, src: '/images/gatos/4.jpg', alt: 'Gato curioso', legenda: 'Curioso' },
  { id: 4, src: '/images/gatos/5.jpg', alt: 'Gato no colo', legenda: 'Carinho' },
  { id: 5, src: '/images/gatos/6.jpg', alt: 'Gato dormindo', legenda: 'Tranquilidade' },
];

// Placeholder para quando as imagens locais não existirem (use placehold.co ou substitua por URLs reais)
export const PLACEHOLDER_SUZANA = 'https://placehold.co/400x500/fff7ed/ea580c?text=Suzana+Soave';
export const PLACEHOLDER_GATO = 'https://placehold.co/400x300/fff7ed/c2410c?text=Gatinho';
