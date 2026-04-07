const works = [
  'https://marmoleriapietra.com/images/trabajos/cocina/1-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/2-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/3-trabajo-cocina.jpg',
  'https://marmoleriapietra.com/images/trabajos/cocina/4-trabajo-cocina.jpg'
]

export default function TrabajosPersonalizados() {
  return (
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
          {works.map((image, index) => (
            <img key={image} src={image} alt={`Vista ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
