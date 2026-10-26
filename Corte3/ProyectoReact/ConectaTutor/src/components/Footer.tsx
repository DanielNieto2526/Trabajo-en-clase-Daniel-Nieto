import './Footer.css';

const ANIO_ACTUAL = new Date().getFullYear();

interface FooterProps {
  ubicacion: string;
}

export function Footer({ ubicacion }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__detalles">
        <address className="footer__ubicacion">{ubicacion}</address>
        <small className="footer__copyright">© {ANIO_ACTUAL}</small>
      </div>
    </footer>
  );
}
