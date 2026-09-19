import {
  ArrowUpRight,
  Code2,
  Palette,
  Ruler,
  Sparkles,
} from "lucide-react";

function About() {
  const domains = [
    {
      icon: Code2,
      number: "01",
      title: "Développement Web",
      description:
        "Création d'applications web modernes, rapides, responsives et pensées pour offrir une expérience utilisateur de qualité.",
    },
    {
      icon: Palette,
      number: "02",
      title: "Design Graphique",
      description:
        "Conception de visuels professionnels, identités graphiques, affiches, supports digitaux et créations visuelles.",
    },
    {
      icon: Ruler,
      number: "03",
      title: "Conception AutoCAD",
      description:
        "Réalisation de dessins techniques et de plans précis avec une attention particulière portée aux détails.",
    },
  ];

  return (
    <section id="about" className="about section">

      <div className="section-container">

        {/* =====================================================
            EN-TÊTE
        ===================================================== */}

        <div className="section-heading">

          <div className="section-label">
            <Sparkles size={15} />
            À PROPOS DE MOI
          </div>

          <h2>
            Un profil à la croisée du
            <span> code et de la créativité.</span>
          </h2>

          <p>
            Je combine développement web, design graphique et conception
            technique pour transformer des idées en réalisations concrètes.
          </p>

        </div>

        {/* =====================================================
            CONTENU
        ===================================================== */}

        <div className="about-grid">

          {/* =================================================
              PRÉSENTATION
          ================================================= */}

          <div className="about-text">

            <p className="about-intro">
              Je suis <strong>Ferdino Lahatra</strong>, développeur web et
              créateur polyvalent passionné par la technologie et le design.
            </p>

            <p>
              Mon approche consiste à associer la logique du développement
              informatique à la créativité du design afin de concevoir des
              projets modernes, fonctionnels et visuellement soignés.
            </p>

            <p>
              Du développement d'une interface React à la création d'un
              support graphique ou d'un dessin technique sur AutoCAD, j'aime
              apprendre, expérimenter et transformer une idée en résultat
              professionnel.
            </p>

            {/* =================================================
                LIEN VERS LE PARCOURS
            ================================================= */}

            <a
              href="/#parcours"
              className="about-link"
            >
              <span>En savoir plus sur mon parcours</span>

              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* =================================================
              DOMAINES
          ================================================= */}

          <div className="domains">

            {domains.map((domain) => {
              const Icon = domain.icon;

              return (
                <div
                  className="domain-card"
                  key={domain.number}
                >

                  <div className="domain-top">

                    <span className="domain-number">
                      {domain.number}
                    </span>

                    <div className="domain-icon">
                      <Icon size={21} />
                    </div>

                  </div>

                  <h3>
                    {domain.title}
                  </h3>

                  <p>
                    {domain.description}
                  </p>

                  <ArrowUpRight
                    className="domain-arrow"
                    size={20}
                  />

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;