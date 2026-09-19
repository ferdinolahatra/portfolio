import {
  ArrowUpRight,
  Download,
  Code2,
  Palette,
  Ruler,
} from "lucide-react";

function Hero() {
  return (
    <section id="accueil" className="hero">

      {/* =====================================================
          ARRIÈRE-PLAN
      ===================================================== */}

      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>

      <div className="hero-container">

        {/* =====================================================
            PARTIE GAUCHE — PRÉSENTATION
        ===================================================== */}

        <div className="hero-content">

          {/* Disponibilité */}

          <div className="hero-badge">
            <span className="status-dot"></span>

            Disponible pour de nouveaux projets
          </div>

          {/* Introduction */}

          <p className="hero-intro">
            Bonjour, je suis
          </p>

          {/* Nom */}

          <h1>
            Ferdino
            <span> Lahatra</span>
          </h1>

          {/* Profession */}

          <h2>
            Développeur Web
            <span> & Designer Créatif</span>
          </h2>

          {/* Description */}

          <p className="hero-description">
            Je conçois des expériences digitales modernes,
            des applications web performantes et des créations
            visuelles professionnelles.
          </p>

          {/* =================================================
              BOUTONS
          ================================================= */}

          <div className="hero-buttons">

            {/* Voir les projets */}

            <a
              href="/#projects"
              className="primary-button"
            >
              <span>Voir mes projets</span>

              <ArrowUpRight
                size={19}
                strokeWidth={1.8}
              />
            </a>

            {/* Télécharger le CV */}

            <a
              href="/documents/CV-Ferdino-Lahatra.pdf"
              className="secondary-button"
              download="CV-Ferdino-Lahatra.pdf"
            >
              <span>Télécharger mon CV</span>

              <Download
                size={18}
                strokeWidth={1.8}
              />
            </a>

          </div>

          {/* =================================================
              DOMAINES
          ================================================= */}

          <div className="hero-skills">

            {/* Web */}

            <div className="hero-skill">

              <Code2
                size={20}
                strokeWidth={1.8}
              />

              <div>
                <strong>
                  Web
                </strong>

                <span>
                  React · Django
                </span>
              </div>

            </div>

            {/* Design */}

            <div className="hero-skill">

              <Palette
                size={20}
                strokeWidth={1.8}
              />

              <div>
                <strong>
                  Design
                </strong>

                <span>
                  PS · Illustrator
                </span>
              </div>

            </div>

            {/* AutoCAD */}

            <div className="hero-skill">

              <Ruler
                size={20}
                strokeWidth={1.8}
              />

              <div>
                <strong>
                  AutoCAD
                </strong>

                <span>
                  Dessin technique
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PARTIE DROITE — VISUEL
        ===================================================== */}

        <div className="hero-visual">

          <div className="visual-card">

            {/* Barre supérieure */}

            <div className="visual-card-top">

              <span className="circle"></span>
              <span className="circle"></span>
              <span className="circle"></span>

            </div>

            {/* Code */}

            <div className="code-display">

              <span className="code-line">
                <i>const</i>{" "}
                developer = {"{"}
              </span>

              <span className="code-line indent">
                name: <b>"Ferdino Lahatra"</b>,
              </span>

              <span className="code-line indent">
                role: <b>"Web Developer"</b>,
              </span>

              <span className="code-line indent">
                design: <b>true</b>,
              </span>

              <span className="code-line indent">
                autocad: <b>true</b>
              </span>

              <span className="code-line">
                {"}"};
              </span>

            </div>

          </div>

          {/* Carte React */}

          <div className="floating-card floating-card-one">

            <Code2
              size={21}
              strokeWidth={1.8}
            />

            <span>
              React
            </span>

          </div>

          {/* Carte Creative */}

          <div className="floating-card floating-card-two">

            <Palette
              size={21}
              strokeWidth={1.8}
            />

            <span>
              Creative
            </span>

          </div>

        </div>

      </div>

      {/* =====================================================
          INDICATEUR DE SCROLL
      ===================================================== */}

      <div className="scroll-indicator">

        <span></span>

        Scroll pour découvrir

      </div>

    </section>
  );
}

export default Hero;