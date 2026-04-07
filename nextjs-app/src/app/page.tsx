import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { activeProducts } from '@/data/products'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Marmolería Pietra</p>
          <h1>Mármol, granito y cuarzo para proyectos de alto nivel</h1>
          <p>
            Descubrí nuestra selección de materiales importados para cocinas, baños y ambientes
            residenciales o comerciales.
          </p>
          <Link href="/productos" className="btn-primary">
            Ver catálogo
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Selección destacada</p>
            <h2>Catálogo profesional</h2>
          </div>
          <div className="products-grid">
            {activeProducts.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
