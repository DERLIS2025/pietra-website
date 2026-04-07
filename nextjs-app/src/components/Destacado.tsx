import Link from 'next/link'

export default function Destacado() {
  return (
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
  )
}
