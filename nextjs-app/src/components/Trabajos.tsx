const works = [
  'https://marmoleriapietra.com/images/trabajos/cocina/1-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/2-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/3-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/4-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/baños/1-trabajo-baño.jpg',
  'https://marmoleriapietra.com/images/trabajos/baños/2-trabajo-baño.jpg'
]

export default function Trabajos() {
  return (
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
  )
}
