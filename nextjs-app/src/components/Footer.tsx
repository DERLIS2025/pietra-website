export default function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="container footer-inner">
        <div>
          <h4>PIETRA.</h4>
          <p>
            Especialistas en mármol, granito y cuarzo. Diseñando espacios únicos desde 2008.
          </p>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li>Cocinas</li>
            <li>Baños</li>
            <li>Quinchos</li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li>info@pietra.com</li>
            <li>
              <a href="https://wa.me/595984756158" target="_blank" rel="noreferrer">
                +595 984 756 158
              </a>
            </li>
            <li>Asunción, Paraguay</li>
          </ul>
        </div>
        <div>
          <h4>Redes</h4>
          <ul>
            <li>
              <a href="https://instagram.com/marmoleria_pietra" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Desarrollado por eQuantum | © {new Date().getFullYear()} Marmolería Pietra.</p>
      </div>
    </footer>
  )
}
