import { Header } from './components/Header';
import { Footer } from './components/Footer';


const NOMBRE_SITIO = 'Café Andino';
const UBICACION = 'Medellín, Colombia';

/**
 * COMPONENTE RAÍZ: define el layout general (encabezado, página y pie)
 * y envía a cada componente sus datos por props.
 */
function App() {
  return (
    <div className="app">
      <Header
        nombreSitio={NOMBRE_SITIO}
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#inicio' },
          { texto: 'Menú', href: '#menu' },
          { texto: 'Contacto', href: '#contacto' },
        ]}
      />
      <Footer
        ubicacion={UBICACION}
      />
    </div>
  );
}

export default App;