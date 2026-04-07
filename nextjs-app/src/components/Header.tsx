import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/productos', label: 'Productos' }
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Marmolería <span>Pietra</span>
        </Link>
        <nav aria-label="Principal">
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
