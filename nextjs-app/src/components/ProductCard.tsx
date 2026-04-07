import Link from 'next/link'
import { Product } from '@/types/product'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link href={`/productos/${product.slug}`} className="product-link">
        <div className="product-image-wrap">
          <img src={product.images[0]} alt={product.name} className="product-image" />
          <span className="badge">{product.category}</span>
        </div>
        <div className="product-content">
          <h3>{product.name}</h3>
          <p>{product.shortDescription}</p>
          <span className="view-more">Ver detalle →</span>
        </div>
      </Link>
    </article>
  )
}
