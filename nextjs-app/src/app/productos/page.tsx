import type { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { activeProducts } from '@/data/products'

export const metadata: Metadata = {
  title: 'Productos | Marmolería Pietra',
  description:
    'Explorá el catálogo de productos de Marmolería Pietra: granitos, mármoles y cuarzos para proyectos residenciales y comerciales.'
}

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Catálogo</p>
          <h1>Todos los productos</h1>
          <p>Materiales disponibles para cotización y asesoramiento por WhatsApp.</p>
        </div>
        <div className="products-grid">
          {activeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
