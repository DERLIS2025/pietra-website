import ProductCard from '@/components/ProductCard'
import { Product } from '@/types/product'

type RelatedProductsProps = {
  currentProductId: string
  products: Product[]
}

export default function RelatedProducts({ currentProductId, products }: RelatedProductsProps) {
  const related = products.filter((product) => product.id !== currentProductId).slice(0, 3)

  return (
    <section className="related-products">
      <h2>Productos relacionados</h2>
      <div className="products-grid">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
