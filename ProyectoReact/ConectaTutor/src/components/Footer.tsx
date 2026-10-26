import './Footer.css';

/** Un enlace del menú de navegación. */
interface Enlace {
  texto: string;
  href: string;
}

// PROPS TIPADAS: la interfaz describe qué recibe el componente.
interface FooterProps {
  nombreSitio: string;
  enlaces: Enlace[];
  ubicacion: string;
}

export function Footer({ nombreSitio, enlaces, ubicacion }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__marca">
        <span className="footer__logo" aria-hidden="true">
          CA
        </span>
        <h1 className="footer__titulo">{nombreSitio}</h1>
      </div>

      <nav aria-label="Navegación principal">
        <ul className="footer__menu">
          {/* map() crea un <li> por cada enlace; key debe ser única */}
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a href={enlace.href}>{enlace.texto}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="footer__detalles">
        <address className="footer__ubicacion">{ubicacion}</address>
        <small className="footer__copyright">
          © {new Date().getFullYear()} {nombreSitio}
        </small>
      </div>
    </footer>
  );
}
