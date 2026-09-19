import {
  Code2,
  Server,
  Database,
  Globe,
  Palette,
  Ruler,
  GitBranch,
  Search,
  Sparkles,
  Layers3,
  ShoppingCart,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: Code2,
      number: "01",
      title: "Frontend Development",
      description:
        "Création d'interfaces modernes, responsives, rapides et orientées expérience utilisateur.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Vue.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },

    {
      icon: Server,
      number: "02",
      title: "Backend Development",
      description:
        "Développement de la logique serveur, applications web, API et systèmes de gestion.",
      technologies: [
        "Python",
        "Django",
        "PHP",
        "Laravel",
        "Node.js",
        "REST API",
      ],
    },

    {
      icon: Database,
      number: "03",
      title: "Bases de données",
      description:
        "Conception, organisation, manipulation et gestion de données pour les applications web.",
      technologies: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "SQL",
        "CRUD",
      ],
    },

    {
      icon: Globe,
      number: "04",
      title: "CMS & Web",
      description:
        "Création et personnalisation de sites professionnels, vitrines et solutions web.",
      technologies: [
        "WordPress",
        "Elementor",
        "PrestaShop",
        "Thèmes",
        "Plugins",
        "Responsive",
      ],
    },

    {
      icon: Search,
      number: "05",
      title: "SEO & Référencement",
      description:
        "Optimisation des sites pour améliorer leur visibilité, leur structure et leurs performances.",
      technologies: [
        "SEO On-Page",
        "Meta Title",
        "Meta Description",
        "Sitemap",
        "Search Console",
        "Performance",
      ],
    },

    {
      icon: Palette,
      number: "06",
      title: "Design graphique",
      description:
        "Conception de supports visuels professionnels, créatifs et adaptés à différents besoins.",
      technologies: [
        "Photoshop",
        "Illustrator",
        "Retouche photo",
        "Logo",
        "Flyer",
        "Identité visuelle",
      ],
    },

    {
      icon: Ruler,
      number: "07",
      title: "AutoCAD 2D & 3D",
      description:
        "Réalisation de dessins techniques, plans précis et modélisations tridimensionnelles.",
      technologies: [
        "AutoCAD 2D",
        "AutoCAD 3D",
        "Dessin technique",
        "Modélisation 3D",
        "Plans",
        "Cotation",
      ],
    },

    {
      icon: GitBranch,
      number: "08",
      title: "Outils & Workflow",
      description:
        "Utilisation d'outils modernes pour organiser, développer et maintenir les projets.",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "npm",
        "API",
        "Déploiement",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="section-container">

        {/* =========================
            HEADER
        ========================= */}
        <div className="section-heading centered">

          <div className="section-label">
            <Sparkles size={15} />
            MON EXPERTISE
          </div>

          <h2>
            Des compétences
            <span> techniques & créatives.</span>
          </h2>

          <p>
            Un profil polyvalent combinant développement web,
            bases de données, CMS, référencement, design graphique
            et conception technique.
          </p>

        </div>

        {/* =========================
            STATISTIQUES
        ========================= */}
        <div className="skills-stats">

          <div className="skills-stat">
            <strong>08+</strong>
            <span>Domaines de compétence</span>
          </div>

          <div className="skills-stat">
            <strong>20+</strong>
            <span>Technologies & outils</span>
          </div>

          <div className="skills-stat">
            <strong>3</strong>
            <span>Univers professionnels</span>
          </div>

        </div>

        {/* =========================
            COMPÉTENCES
        ========================= */}
        <div className="skills-grid">

          {skillGroups.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                className="skill-card"
                key={skill.number}
              >

                {/* Numéro */}
                <div className="skill-card-header">

                  <span className="skill-number">
                    {skill.number}
                  </span>

                  <div className="skill-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                </div>

                {/* Contenu */}
                <div className="skill-content">

                  <h3>{skill.title}</h3>

                  <p>
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="technology-list">

                    {skill.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </div>

                {/* Ligne décorative */}
                <div className="skill-card-line"></div>

              </article>
            );
          })}

        </div>

        {/* =========================
            BOTTOM BANNER
        ========================= */}
        <div className="skills-banner">

          <div className="skills-banner-icon">
            <Wrench size={24} />
          </div>

          <div className="skills-banner-content">
            <span>APPROCHE PROFESSIONNELLE</span>

            <h3>
              Technologie, créativité et précision
              réunies dans un même profil.
            </h3>
          </div>

          <div className="skills-banner-items">

            <div>
              <Layers3 size={18} />
              <span>Full-Stack</span>
            </div>

            <div>
              <ShoppingCart size={18} />
              <span>CMS & E-commerce</span>
            </div>

            <div>
              <Palette size={18} />
              <span>Creative Design</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;