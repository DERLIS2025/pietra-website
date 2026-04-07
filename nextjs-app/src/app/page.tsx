import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { activeProducts } from '@/data/products'

const ambientes = [
  {
    title: 'Cocinas',
    image: 'https://marmoleriapietra.com/images/categorias/cocina-6.jpg'
  },
  {
    title: 'Sanitarios',
    image: 'https://marmoleriapietra.com/images/categorias/baño-3.jpg'
  },
  {
    title: 'Quinchos & Exteriores',
    image: 'https://marmoleriapietra.com/images/categorias/quincho.jpg'
  },
  {
    title: 'Granitos Exclusivos',
    image: 'https://marmoleriapietra.com/images/categorias/granito.jpg'
  },
  {
    title: 'Materiales Importados',
    image: 'https://marmoleriapietra.com/images/categorias/marmol.jpg'
  }
]

const featuredWorkImages = [
  'https://marmoleriapietra.com/images/trabajos/cocina/1-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/2-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/3-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/4-trabajo-cocina.jpg'
]

const trabajos = [
  'https://marmoleriapietra.com/images/trabajos/cocina/8-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/10-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/baños/3-trabajo-baño.jpg',
  'https://marmoleriapietra.com/images/trabajos/baños/11-trabajo-baño.jpg',
  'https://marmoleriapietra.com/images/trabajos/quinchos/IMG-20260224-WA0014.jpg',
  'https://marmoleriapietra.com/images/trabajos/quinchos/IMG-20260224-WA0090.jpg'
]

export default function HomePage() {
  return (
    <>
      <section className="hero pietra-hero">
        <div className="container">
          <p className="eyebrow">Marmolería Pietra</p>
          <h1>Lujo en cada detalle de granito</h1>
          <p>
            Proveemos e Instalamos todo tipo de mesadas. Consultá cuál opción se adecua mejor a tu
            proyecto.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/595984756158?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n."
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar cotización
            </a>
            <Link href="/#trabajos" className="btn-secondary">
              Ver Trabajos
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="container">
          <div className="section-head">
            <h2>Varios Ambientes</h2>
          </div>
          <div className="ambientes-grid">
            {ambientes.map((ambiente) => (
              <article key={ambiente.title} className="ambiente-card">
                <img src={ambiente.image} alt={ambiente.title} />
                <h3>{ambiente.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="catalogo">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Materiales Exclusivos</p>
            <h2>Nuestro Catálogo</h2>
          </div>
          <div className="products-grid">
            {activeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="catalog-link-wrap">
            <Link href="/productos" className="catalog-link">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="destacado">
        <div className="container">
          <div className="highlight-card">
            <img
              src="https://marmoleriapietra.com/images/catalogo/piedra-traslucida.jpg"
              alt="Piedra Traslúcida"
            />
            <div>
              <p className="eyebrow">Especial de la Casa</p>
              <h3>Piedra Traslúcida</h3>
              <p>Material premium para proyectos decorativos con iluminación y alto impacto visual.</p>
              <div className="highlight-actions">
                <Link href="/productos" className="btn-secondary">
                  Ver más
                </Link>
                <a
                  href="https://wa.me/595984756158?text=Hola%2C%20quiero%20cotizar%20Piedra%20Trasl%C3%BAcida."
                  className="btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cotizar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-feature" id="trabajos">
        <div className="container work-feature-grid">
          <div>
            <h2>Trabajos Personalizados y a Medida</h2>
            <h3>Isla de Cocina con Caída de Mesada al Piso (Efecto Cascada)</h3>
            <p>
              Ponemos empeño para que cada trabajo realizado se convierta en una creación única.
            </p>
            <ul>
              <li>Materiales de primera calidad importados</li>
              <li>Acabados profesionales garantizados</li>
              <li>Asesoramiento técnico especializado</li>
              <li>Instalación y logística incluida</li>
            </ul>
            <a
              href="https://wa.me/595984756158?text=Hola%2C%20quiero%20consultar%20por%20este%20proyecto."
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Consultar por este Proyecto
            </a>
          </div>
          <div className="work-feature-images">
            {featuredWorkImages.map((image, index) => (
              <img key={image} src={image} alt={`Vista ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="nosotros">
        <div className="container">
          <div className="section-head">
            <h2>Nuestros Trabajos</h2>
          </div>
          <div className="works-grid">
            {trabajos.map((image, index) => (
              <article key={image} className="work-card">
                <img src={image} alt={`Trabajo Pietra ${index + 1}`} />
                <span>Ver +</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
