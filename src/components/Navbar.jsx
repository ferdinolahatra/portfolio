import { useState } from "react";

import {
  Moon,
  Sun,
  Menu,
  X,
  CircleCheck,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  // =========================================================
  // ÉTATS
  // =========================================================

  const [menuOpen, setMenuOpen] = useState(false);
  const [availabilityOpen, setAvailabilityOpen] = useState(false);

  // =========================================================
  // LIENS DE NAVIGATION
  // =========================================================

  const navLinks = [
    {
      name: "Accueil",
      href: "/#accueil",
    },
    {
      name: "À propos",
      href: "/#about",
    },
    {
      name: "Compétences",
      href: "/#skills",
    },
    {
      name: "Projets",
      href: "/#projects",
    },
    {
      name: "Services",
      href: "/#services",
    },
    {
      name: "Parcours",
      href: "/#parcours",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];

  // =========================================================
  // FERMER LES MENUS
  // =========================================================

  const handleLinkClick = () => {
    setMenuOpen(false);
    setAvailabilityOpen(false);
  };

  // =========================================================
  // DISPONIBILITÉ
  // =========================================================

  const handleAvailabilityClick = () => {
    setAvailabilityOpen((previous) => !previous);
  };

  // =========================================================
  // CHANGEMENT DE THÈME
  // =========================================================

  const handleThemeChange = () => {
    setDarkMode((previous) => !previous);
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <a
          href="/#accueil"
          className="logo"
          aria-label="Ferdino Lahatra - Accueil"
          onClick={handleLinkClick}
        >
          <div className="logo-mark">
            <span>F</span>
            <span>L</span>
          </div>

          <div className="logo-content">
            <span className="logo-name">
              FERDINO <strong>LAHATRA</strong>
            </span>

            <span className="logo-specialties">
              WEB • DESIGN • CAD
            </span>
          </div>
        </a>

        {/* =====================================================
            NAVIGATION DESKTOP
        ===================================================== */}

        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* =====================================================
            ACTIONS NAVBAR
        ===================================================== */}

        <div className="nav-actions">

          {/* =================================================
              BOUTON MODE SOMBRE / CLAIR
          ================================================= */}

          <button
            type="button"
            className="theme-button"
            onClick={handleThemeChange}
            aria-label={
              darkMode
                ? "Activer le mode clair"
                : "Activer le mode sombre"
            }
            title={
              darkMode
                ? "Mode clair"
                : "Mode sombre"
            }
          >
            {darkMode ? (
              <Sun
                size={20}
                strokeWidth={1.8}
              />
            ) : (
              <Moon
                size={20}
                strokeWidth={1.8}
              />
            )}
          </button>

          {/* =================================================
              DISPONIBILITÉ DESKTOP
          ================================================= */}

          <div className="availability-wrapper">

            <button
              type="button"
              className="availability-button"
              onClick={handleAvailabilityClick}
              aria-label="Afficher ma disponibilité"
              aria-expanded={availabilityOpen}
            >
              <span className="availability-dot"></span>

              <span>
                Disponible
              </span>
            </button>

            {/* ===============================================
                PANNEAU DISPONIBILITÉ
            =============================================== */}

            {availabilityOpen && (
              <div className="availability-card">

                {/* -------------------------------------------
                    EN-TÊTE
                ------------------------------------------- */}

                <div className="availability-card-header">

                  <div className="availability-icon">
                    <CircleCheck
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <strong>
                      Disponible pour de nouveaux projets
                    </strong>

                    <span>
                      Ouvert aux nouvelles collaborations
                    </span>
                  </div>

                </div>

                {/* -------------------------------------------
                    SÉPARATEUR
                ------------------------------------------- */}

                <div className="availability-divider"></div>

                {/* -------------------------------------------
                    DOMAINES D'INTERVENTION
                ------------------------------------------- */}

                <div className="availability-card-content">

                  <span className="availability-label">
                    DOMAINES D'INTERVENTION
                  </span>

                  <div className="availability-services">

                    <span>
                      Développement Web
                    </span>

                    <span>
                      CMS & E-commerce
                    </span>

                    <span>
                      Design graphique
                    </span>

                    <span>
                      AutoCAD 2D & 3D
                    </span>

                  </div>

                </div>

                {/* -------------------------------------------
                    STATUT
                ------------------------------------------- */}

                <div className="availability-status">

                  <span className="availability-status-dot"></span>

                  <span>
                    Disponible actuellement
                  </span>

                </div>

                {/* -------------------------------------------
                    CONTACT
                ------------------------------------------- */}

                <a
                  href="/#contact"
                  className="availability-contact"
                  onClick={handleLinkClick}
                >
                  <span>
                    Voir le contact
                  </span>

                  <span className="availability-arrow">
                    ↗
                  </span>
                </a>

              </div>
            )}

          </div>

          {/* =================================================
              BOUTON MENU MOBILE
          ================================================= */}

          <button
            type="button"
            className="menu-button"
            onClick={() => {
              setMenuOpen((previous) => !previous);
              setAvailabilityOpen(false);
            }}
            aria-label={
              menuOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X
                size={24}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={24}
                strokeWidth={1.8}
              />
            )}
          </button>

        </div>
      </div>

      {/* =====================================================
          MENU MOBILE
      ===================================================== */}

      {menuOpen && (
        <div className="mobile-menu">

          {/* -----------------------------------------------
              LIENS
          ----------------------------------------------- */}

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
            >
              {link.name}
            </a>
          ))}

          {/* -----------------------------------------------
              DISPONIBILITÉ MOBILE
          ----------------------------------------------- */}

          <button
            type="button"
            className="mobile-availability"
            onClick={() => {
              setAvailabilityOpen(
                (previous) => !previous
              );
            }}
            aria-expanded={availabilityOpen}
          >
            <span className="availability-dot"></span>

            <span>
              Disponible
            </span>
          </button>

          {/* -----------------------------------------------
              PANNEAU DISPONIBILITÉ MOBILE
          ----------------------------------------------- */}

          {availabilityOpen && (
            <div className="mobile-availability-card">

              {/* En-tête */}

              <div className="availability-card-header">

                <div className="availability-icon">
                  <CircleCheck
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <strong>
                    Disponible pour de nouveaux projets
                  </strong>

                  <span>
                    Ouvert aux nouvelles collaborations
                  </span>
                </div>

              </div>

              {/* Services */}

              <div className="availability-services">

                <span>
                  Développement Web
                </span>

                <span>
                  CMS & E-commerce
                </span>

                <span>
                  Design graphique
                </span>

                <span>
                  AutoCAD 2D & 3D
                </span>

              </div>

              {/* Statut */}

              <div className="availability-status">

                <span className="availability-status-dot"></span>

                <span>
                  Disponible actuellement
                </span>

              </div>

              {/* Contact */}

              <a
                href="/#contact"
                className="availability-contact"
                onClick={handleLinkClick}
              >
                <span>
                  Voir le contact
                </span>

                <span>
                  ↗
                </span>
              </a>

            </div>
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;