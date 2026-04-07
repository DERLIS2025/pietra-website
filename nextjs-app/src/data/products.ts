import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Granito Negro Absoluto',
    slug: 'granito-negro-absoluto',
    category: 'Granito',
    shortDescription: 'Piedra premium para cocinas modernas y superficies de alto tránsito.',
    description:
      'El Granito Negro Absoluto destaca por su elegancia uniforme, alta resistencia al rayado y baja absorción. Es ideal para proyectos residenciales y corporativos con estética contemporánea.',
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80'
    ],
    applications: ['Mesadas de cocina', 'Islas', 'Escaleras interiores', 'Revestimientos'],
    finishes: ['Pulido brillante', 'Leather', 'Honed satinado'],
    active: true
  },
  {
    id: '2',
    name: 'Mármol Carrara',
    slug: 'marmol-carrara',
    category: 'Mármol',
    shortDescription: 'Clásico italiano con vetas suaves para espacios sofisticados.',
    description:
      'El Mármol Carrara aporta luminosidad y una textura natural única. Muy utilizado en baños, revestimientos y detalles de interiorismo de alta gama.',
    images: [
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80'
    ],
    applications: ['Baños', 'Paredes decorativas', 'Vanitorys', 'Mesas de apoyo'],
    finishes: ['Pulido brillante', 'Mate', 'Cepillado'],
    active: true
  },
  {
    id: '3',
    name: 'Cuarzo Calacatta Gold',
    slug: 'cuarzo-calacatta-gold',
    category: 'Cuarzo',
    shortDescription: 'Superficie tecnológica con vetas doradas inspiradas en mármoles clásicos.',
    description:
      'El Cuarzo Calacatta Gold combina estética de lujo con practicidad diaria. No poroso, fácil de mantener y recomendado para cocinas de uso intenso.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80'
    ],
    applications: ['Mesadas de cocina', 'Salpicaderos', 'Muebles de baño', 'Recepciones'],
    finishes: ['Pulido', 'Suave satinado'],
    active: true
  },
  {
    id: '4',
    name: 'Granito Gris Mara',
    slug: 'granito-gris-mara',
    category: 'Granito',
    shortDescription: 'Tonalidad neutra y durable para proyectos funcionales y elegantes.',
    description:
      'El Granito Gris Mara es una opción versátil y resistente para cocinas, lavaderos y áreas de alto uso, manteniendo una estética sobria y profesional.',
    images: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616594039964-3f5fcd6f4f0f?auto=format&fit=crop&w=1400&q=80'
    ],
    applications: ['Mesadas', 'Lavaderos', 'Escaleras', 'Pisos interiores'],
    finishes: ['Pulido', 'Flameado', 'Satinado'],
    active: true
  },
  {
    id: '5',
    name: 'Mármol Travertino',
    slug: 'marmol-travertino',
    category: 'Mármol',
    shortDescription: 'Textura cálida y natural para ambientes acogedores.',
    description:
      'El Mármol Travertino es apreciado por su color crema y patrón orgánico. Funciona especialmente bien en revestimientos verticales y detalles arquitectónicos.',
    images: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1628745277862-bc0f0f4ddad5?auto=format&fit=crop&w=1400&q=80'
    ],
    applications: ['Revestimientos', 'Halls', 'Escaleras decorativas', 'Paredes interiores'],
    finishes: ['Natural', 'Cepillado', 'Apomazado'],
    active: true
  },
  {
    id: '6',
    name: 'Cuarzo Blanco Stellar',
    slug: 'cuarzo-blanco-stellar',
    category: 'Cuarzo',
    shortDescription: 'Blanco limpio con microbrillos para diseños minimalistas.',
    description:
      'El Cuarzo Blanco Stellar ofrece una base clara con sutiles destellos, ideal para cocinas abiertas y espacios que buscan amplitud visual con mantenimiento simple.',
    images: [
      'https://images.unsplash.com/photo-1600488998754-32422f8d4438?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1556909045-f5ad9e702c66?auto=format&fit=crop&w=1400&q=80'
    ],
    applications: ['Cocinas integradas', 'Barras', 'Muebles de baño', 'Topes de oficina'],
    finishes: ['Pulido', 'Suede'],
    active: true
  }
]

export const activeProducts = products.filter((product) => product.active)

export const findProductBySlug = (slug: string) =>
  activeProducts.find((product) => product.slug === slug)
