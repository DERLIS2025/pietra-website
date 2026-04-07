import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductGallery from '@/components/ProductGallery'
import RelatedProducts from '@/components/RelatedProducts'
import WhatsAppButton from '@/components/WhatsAppButton'
import { activeProducts, findProductBySlug } from '@/data/products'

type ProductPageParams = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
  const { slug } = await params
  const product = findProductBySlug(slug)

  if (!product) {
    return {
      title: 'Producto no encontrado | Marmolería Pietra',
      description: 'El producto solicitado no se encuentra disponible en el catálogo actual.'
    }
  }

  return {
    title: `${product.name} | Marmolería Pietra`,
    description: product.shortDescription
  }
}

export default async function ProductPage({ params }: ProductPageParams) {
  const { slug } = await params
  const product = findProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const productUrl = `https://pietra.com.py/productos/${product.slug}`

  return (
    <section className="section">
      <div className="container product-detail">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <div className="product-description">
            <h2>Descripción del material</h2>
            <p className="lead">{product.shortDescription}</p>
            <p>{product.description}</p>
          </div>
          <WhatsAppButton productName={product.name} productUrl={productUrl} />
          <ul className="benefits-list" aria-label="Beneficios del material">
            <li>✔ Alta resistencia</li>
            <li>✔ Bajo mantenimiento</li>
            <li>✔ Ideal para cocinas y baños</li>
          </ul>

          <p className="lead">{product.description}</p>
          <WhatsAppButton productName={product.name} productUrl={productUrl} />
 main
        </div>

        <ProductGallery name={product.name} images={product.images} />

        <div className="product-specs">
          <div>
            <h2>Aplicaciones</h2>
            <ul>
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Acabados</h2>
            <ul>
              {product.finishes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <RelatedProducts currentProductId={product.id} products={activeProducts} />
      </div>
    </section>
  )
}
