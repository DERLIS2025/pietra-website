import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#catalogo', label: 'Catálogo' },
  { href: '/#destacado', label: 'Destacado' },
  { href: '/#trabajos', label: 'Trabajos' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#contacto', label: 'Contacto' }
]

export default function Header() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Principal">
        <Link href="/" className="logo" aria-label="Marmolería Pietra">
          <img
            src="https://marmoleriapietra.com/images/Logo/logo_correcto_v2%20(1).png"
            alt="Marmolería Pietra"
          />
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <a
            href="https://wa.me/595984756158?text=Hola%20Marmoler%C3%ADa%20Pietra,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n"
            className="btn-quote"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar Cotización
          </a>
        </div>
      </nav>
    </header>
  )
}
