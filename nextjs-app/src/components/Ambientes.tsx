const ambientes = [
  { title: 'Cocinas', image: 'https://marmoleriapietra.com/images/categorias/cocina-6.jpg' },
  { title: 'Sanatarios', image: 'https://marmoleriapietra.com/images/categorias/baño-3.jpg' },
  { title: 'Quinchos & Exteriores', image: 'https://marmoleriapietra.com/images/categorias/quincho.jpg' },
  { title: 'Granitos Exclusivos', image: 'https://marmoleriapietra.com/images/categorias/granito.jpg' },
  { title: 'Materiales Importados', image: 'https://marmoleriapietra.com/images/categorias/marmol.jpg' }
]

export default function Ambientes() {
  return (
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
  )
}
