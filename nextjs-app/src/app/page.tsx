'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { activeProducts } from '@/data/products'

const ambientes = [
  { title: 'Cocinas', image: 'https://marmoleriapietra.com/images/categorias/cocina-6.jpg' },
  { title: 'Sanatarios', image: 'https://marmoleriapietra.com/images/categorias/baño-3.jpg' },
  { title: 'Quinchos & Exteriores', image: 'https://marmoleriapietra.com/images/categorias/quincho.jpg' },
  { title: 'Granitos Exclusivos', image: 'https://marmoleriapietra.com/images/categorias/granito.jpg' },
  { title: 'Materiales Importados', image: 'https://marmoleriapietra.com/images/categorias/marmol.jpg' }
]

const works = [
  'https://marmoleriapietra.com/images/trabajos/cocina/1-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/2-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/3-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/4-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/baños/1-trabajo-baño.jpg',
  'https://marmoleriapietra.com/images/trabajos/baños/2-trabajo-baño.jpg'
]

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

export default function HomePage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>('all')

  const catalogItems = useMemo(() => {
    if (selectedFilter === 'all') return activeProducts
    return activeProducts.filter((product) => normalizeCategory(product.category) === selectedFilter)
  }, [selectedFilter])

  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>
            Lujo en cada detalle de <em>granito</em>
          </h1>
          <p>
            Proveemos e Instalamos todo tipo de mesadas.Consulta cual opcion se adecua mejor a tu
            proyecto.
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/595984756158?text=Hola%20Marmoler%C3%ADa%20Pietra,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              SOLICITAR COTIZACIÓN
            </a>
            <Link href="/#trabajos" className="btn-secondary">
              Ver Trabajos
            </Link>
          </div>
        </div>
      </section>

      <section className="categories-section" id="categorias">
        <div className="container">
          <h2 className="section-title">Varios Ambientes</h2>
          <div className="categories-grid">
            {ambientes.map((ambiente) => (
              <article key={ambiente.title} className="category-card">
                <div className="category-image">
                  <img src={ambiente.image} alt={ambiente.title} />
                  <div className="category-overlay" />
                </div>
                <h3 className="category-title">{ambiente.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section className="special-section" id="destacado">
        <div className="container">
          <div className="material-card special-material-card">
            <Link href="/productos" className="material-image-wrapper">
              <img
                className="material-image"
                src="https://marmoleriapietra.com/images/catalogo/piedra-traslucida.jpg"
                alt="Piedra Traslúcida"
              />
              <span className="material-badge">Especial</span>
            </Link>
            <div className="material-info">
              <h4 className="material-name">Piedra Traslúcida</h4>
              <div className="special-actions">
                <Link href="/productos" className="btn-cotizar btn-dark">
                  Ver más
                </Link>
                <a
                  href="https://wa.me/595984756158?text=Hola%20Marmoler%C3%ADa%20Pietra,%20me%20interesa%20cotizar%20el%20material%20Piedra%20Trasl%C3%BAcida"
                  className="btn-cotizar"
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

      <section className="featured-section" id="nosotros">
        <div className="container featured-content">
          <div className="featured-text">
            <p className="featured-subtitle">Especial de la Casa</p>
            <h2 className="featured-title">Trabajos Personalizados y a Medida</h2>
            <h3>Isla de Cocina con Caída de Mesada al Piso (Efecto Cascada)</h3>
            <p>Ponemos empeño para que cada trabajo realizado se convierta en una creación única.</p>
            <ul className="featured-benefits">
              <li>Materiales de primera calidad importados</li>
              <li>Acabados profesionales garantizados</li>
              <li>Asesoramiento técnico especializado</li>
              <li>Instalación y logística incluida</li>
            </ul>
            <a
              href="https://wa.me/595984756158?text=Hola%20Marmoler%C3%ADa%20Pietra,%20me%20interesa%20el%20producto%20destacado"
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Consultar por este Proyecto
            </a>
          </div>
          <div className="featured-gallery">
            {works.slice(0, 4).map((image, index) => (
              <img key={image} src={image} alt={`Vista ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="works-section" id="trabajos">
        <div className="container">
          <div className="works-header">
            <p className="works-subtitle">Galería de Proyectos</p>
            <h2 className="works-title">Nuestros Trabajos</h2>
          </div>
          <div className="works-category-grid">
            {works.map((image, index) => (
              <article className="works-grid-item" key={image}>
                <img src={image} alt={`Trabajo ${index + 1}`} />
                <div className="works-item-overlay">
                  <span>Ver +</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
