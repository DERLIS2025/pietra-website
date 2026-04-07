'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { activeProducts } from '@/data/products'

const filters = [
  { key: 'all', label: 'Todos' },
  { key: 'granito', label: 'Granitos' },
  { key: 'cuarzo', label: 'Cuarzos' },
  { key: 'marmol', label: 'Mármoles' }
] as const

type FilterKey = (typeof filters)[number]['key']

const normalizeCategory = (category: string): Exclude<FilterKey, 'all'> => {
  const normalized = category.toLowerCase()
  if (normalized.includes('granito')) return 'granito'
  if (normalized.includes('cuarzo')) return 'cuarzo'
  return 'marmol'
}

export default function Catalogo() {
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>('all')

  const catalogItems = useMemo(() => {
    if (selectedFilter === 'all') return activeProducts
    return activeProducts.filter((product) => normalizeCategory(product.category) === selectedFilter)
  }, [selectedFilter])

  return (
    <section className="catalog-section" id="catalogo">
      <div className="container">
        <div className="catalog-header">
          <p className="catalog-subtitle">Materiales Exclusivos</p>
          <h2 className="section-title">Nuestro Catálogo</h2>
        </div>

        <div className="catalog-filters" role="tablist" aria-label="Filtros de catálogo">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${selectedFilter === filter.key ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter.key)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="materials-grid">
          {catalogItems.map((product) => (
            <article key={product.id} className="material-card">
              <Link href={`/productos/${product.slug}`} className="material-image-wrapper">
                <img className="material-image" src={product.images[0]} alt={product.name} />
                <span className="material-badge">{product.category}</span>
              </Link>
              <div className="material-info">
                <h4 className="material-name">{product.name}</h4>
                <Link href={`/productos/${product.slug}`} className="btn-cotizar">
                  Ver detalle
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
