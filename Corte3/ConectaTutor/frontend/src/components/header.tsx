import './header.css'

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="ConectaTutor">
        <span>Conecta</span>
        <span className="brand-highlight">Tutor</span>
      </a>

      <nav className="main-navigation" aria-label="Navegación principal">
        <a className="navigation-link" href="#">
          explorar tutores
        </a>
        <a className="navigation-link navigation-link-active" href="#">
          mis tutorias
        </a>
      </nav>

      <div className="header-actions">
        <button className="notification-button" type="button" aria-label="Notificaciones">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
          </svg>
          <span className="notification-dot" />
        </button>

        <div className="profile">
          <div className="profile-details">
            <span className="profile-name">Juan Filip Coral</span>
            <span className="profile-role">Estudiante - Ing. de Sistemas energéticos</span>
          </div>
          <div className="profile-avatar" aria-label="Perfil de Juan Filip Coral">
            <span>ITM</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header