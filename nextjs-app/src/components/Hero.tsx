import Link from 'next/link'

export default function Hero() {
  return (
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
  )
}
