import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Building2,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

function Parcours() {
  const parcours = [
    // =====================================================
    // 01 — LICENCE 3
    // =====================================================
    {
      id: 1,
      type: "formation",
      date: "2026 — En cours",
      icon: GraduationCap,
      title: "Licence 3 — Informatique",
      organization: "Institut Supérieur R.L.G",
      location: "Manjakaray, Antananarivo",
      description:
        "Poursuite de ma formation supérieure en informatique avec une orientation particulière vers le développement web, la conception d'applications et les technologies numériques.",
      tags: [
        "Informatique",
        "Développement Web",
        "Applications",
        "Technologies numériques",
      ],
    },

    // =====================================================
    // 02 — PROJET ACADÉMIQUE
    // =====================================================
    {
      id: 2,
      type: "projet",
      date: "2026",
      icon: Code2,
      title: "Projet académique — Gestion de stages",
      organization: "Institut Supérieur R.L.G",
      location: "Antananarivo",
      description:
        "Conception et développement d'une application web de gestion des stages académiques. Le projet a été réalisé avec Django pour le backend, React.js pour le frontend et PostgreSQL pour la gestion de la base de données. L'application permet de centraliser et de faciliter la gestion des stages, notamment le suivi des étudiants, des entreprises d'accueil, des stages et des informations associées.",
      tags: [
        "Django",
        "Python",
        "React.js",
        "PostgreSQL",
        "API REST",
        "Gestion de stages",
      ],
    },

    // =====================================================
    // 03 — RESPONSABLE PERFORMANCE DIGITALE
    // =====================================================
    {
      id: 3,
      type: "experience",
      date: "2026",
      icon: BriefcaseBusiness,
      title: "Responsable Performance Digitale & Référencement",
      organization: "JS Company",
      location: "Ankadifotsy, Antananarivo",
      description:
        "Participation à l'amélioration de la visibilité et des performances digitales des plateformes web. Mise en œuvre de stratégies SEO, suivi de l'indexation et optimisation de campagnes publicitaires.",
      tags: [
        "SEO",
        "Google Search Console",
        "Google Ads",
        "Performance Web",
      ],
    },

    // =====================================================
    // 04 — DÉVELOPPEUR WEB & INTÉGRATEUR
    // =====================================================
    {
      id: 4,
      type: "experience",
      date: "2026",
      icon: Code2,
      title: "Développeur Web & Intégrateur",
      organization: "JS Company",
      location: "Ankadifotsy, Antananarivo",
      description:
        "Conception et déploiement de sites web professionnels, notamment des sites vitrines et e-commerce. Intégration et personnalisation d'interfaces avec WordPress, Elementor, HTML, CSS et JavaScript.",
      tags: [
        "WordPress",
        "Elementor",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },

    // =====================================================
    // 05 — FREELANCE
    // =====================================================
    {
      id: 5,
      type: "experience",
      date: "Novembre 2025 — Janvier 2026",
      icon: Code2,
      title: "Développeur Web — Freelance",
      organization: "Freelance",
      location: "Antananarivo",
      description:
        "Réalisation de sites vitrines et e-commerce, intégration de maquettes Figma et conception d'interfaces modernes en respectant les principes UX/UI. Optimisation des performances et de l'expérience utilisateur.",
      tags: [
        "WordPress",
        "HTML",
        "CSS",
        "JavaScript",
        "Figma",
        "UX/UI",
      ],
    },

    // =====================================================
    // 06 — STAGE CHU
    // =====================================================
    {
      id: 6,
      type: "experience",
      date: "Février — Mai 2025",
      icon: Building2,
      title: "Stage — Développeur Web",
      organization: "CHU Joseph Raseta Befelatanana",
      location: "Antananarivo",
      description:
        "Réalisation d'une application web destinée à la gestion des patients dans le cadre d'un stage de trois mois. Participation à la conception et au développement de la solution avec Django pour le backend et Vue.js pour le frontend.",
      tags: [
        "Django",
        "Python",
        "Vue.js",
        "Développement Web",
        "Base de données",
      ],
    },

    // =====================================================
    // 07 — DTS
    // =====================================================
    {
      id: 7,
      type: "formation",
      date: "2025",
      icon: GraduationCap,
      title: "DTS — Informatique",
      organization:
        "Université Saint Vaincent de Paul Akamasoa",
      location: "Vohitsara, Antananarivo",
      description:
        "Obtention du Diplôme de Technicien Supérieur en Informatique après un parcours orienté vers les technologies informatiques et le développement.",
      tags: [
        "DTS",
        "Informatique",
        "Développement",
      ],
    },

    // =====================================================
    // 08 — L1
    // =====================================================
    {
      id: 8,
      type: "formation",
      date: "2024",
      icon: GraduationCap,
      title: "L1 — Informatique",
      organization:
        "Université Saint Vaincent de Paul Akamasoa",
      location: "Vohitsara, Antananarivo",
      description:
        "Première année d'études supérieures en informatique, permettant de construire les bases techniques nécessaires à la poursuite du parcours dans le développement informatique.",
      tags: [
        "Informatique",
        "Programmation",
        "Bases techniques",
      ],
    },

    // =====================================================
    // 09 — BACCALAURÉAT
    // =====================================================
    {
      id: 9,
      type: "formation",
      date: "2023",
      icon: GraduationCap,
      title: "Baccalauréat — Enseignement Général",
      organization: "Lycée M.A.AFAKA",
      location: "Ambohidahy, Antananarivo",
      description:
        "Obtention du baccalauréat de l'enseignement général avant l'entrée dans le parcours supérieur en informatique.",
      tags: [
        "Baccalauréat",
        "Enseignement Général",
      ],
    },

    // =====================================================
    // 10 — ART ORATOIRE
    // =====================================================
    {
      id: 10,
      type: "formation",
      date: "2023",
      icon: Sparkles,
      title: "Formation en Art Oratoire Malgache",
      organization:
        "Paroisse EKAR Notre Dame de Fatima",
      location: "Ambohimirary, Antananarivo",
      description:
        "Formation en art oratoire malgache (Kabary), permettant de développer les capacités d'expression, de communication et de prise de parole.",
      tags: [
        "Art oratoire",
        "Communication",
        "Kabary",
      ],
    },
  ];

  return (
    <section id="parcours" className="parcours section">
      <div className="section-container">

        {/* =================================================
            TITRE DE LA SECTION
        ================================================= */}
        <div className="section-heading centered">
          <div className="section-label">
            <Sparkles size={15} />
            MON PARCOURS
          </div>

          <h2>
            Une évolution construite
            <span> étape par étape.</span>
          </h2>

          <p>
            De la formation académique aux expériences
            professionnelles, découvrez les principales étapes
            qui ont construit mon parcours dans l'informatique,
            le développement web et les technologies numériques.
          </p>
        </div>

        {/* =================================================
            TIMELINE
        ================================================= */}
        <div className="parcours-timeline">

          {/* Ligne centrale */}
          <div className="parcours-line"></div>

          {parcours.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`parcours-item ${
                  index % 2 === 0
                    ? "parcours-item-left"
                    : "parcours-item-right"
                }`}
                key={item.id}
              >

                {/* Marqueur */}
                <div className="parcours-marker">
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Carte */}
                <div className="parcours-card">

                  {/* Haut de la carte */}
                  <div className="parcours-card-top">

                    <span className="parcours-date">
                      <CalendarDays size={14} />
                      {item.date}
                    </span>

                    <span
                      className={`parcours-type parcours-type-${item.type}`}
                    >
                      {item.type === "formation" &&
                        "FORMATION"}

                      {item.type === "experience" &&
                        "EXPÉRIENCE"}

                      {item.type === "projet" &&
                        "PROJET"}
                    </span>
                  </div>

                  {/* Contenu */}
                  <div className="parcours-card-content">

                    <h3>{item.title}</h3>

                    <div className="parcours-organization">
                      <BriefcaseBusiness size={16} />
                      <span>
                        {item.organization}
                      </span>
                    </div>

                    <div className="parcours-location">
                      <MapPin size={15} />
                      <span>
                        {item.location}
                      </span>
                    </div>

                    <p>
                      {item.description}
                    </p>

                  </div>

                  {/* Technologies / compétences */}
                  <div className="parcours-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Effet lumineux */}
                  <div className="parcours-card-glow"></div>

                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            CTA FINAL
        ================================================= */}
        <div className="parcours-bottom">

          <div className="parcours-bottom-content">

            <span className="parcours-bottom-label">
              AUJOURD'HUI
            </span>

            <h3>
              Je continue à développer mes
              <span>
                {" "}
                compétences et mes projets.
              </span>
            </h3>

            <p>
              Mon objectif est de transformer mes connaissances
              techniques en solutions concrètes, modernes et
              utiles.
            </p>

          </div>

          <a
            href="/#contact"
            className="parcours-bottom-button"
          >
            Échangeons sur votre projet
            <ArrowUpRight size={19} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Parcours;