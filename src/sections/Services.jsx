import {
  Code2,
  Palette,
  Globe,
  ShoppingCart,
  Ruler,
  Search,
  Wrench,
  ArrowUpRight,
  Sparkles,
  X,
  CheckCircle2,
} from "lucide-react";

import { useEffect, useState } from "react";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      number: "01",
      icon: Code2,
      title: "Développement Web",
      shortDescription:
        "Conception et développement d'applications web modernes, performantes et responsives.",
      description:
        "Je développe des applications web modernes et évolutives adaptées aux besoins spécifiques de chaque projet. L'objectif est de créer des interfaces rapides, intuitives et agréables à utiliser tout en assurant une architecture technique propre.",
      features: [
        "Applications React.js",
        "Applications Django",
        "API REST",
        "Interfaces responsives",
        "Authentification utilisateur",
        "Gestion des données",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Python",
        "Django",
        "REST API",
      ],
    },

    {
      number: "02",
      icon: Globe,
      title: "Création de sites Web",
      shortDescription:
        "Création de sites professionnels modernes, responsives et adaptés à votre activité.",
      description:
        "Je conçois des sites web professionnels qui présentent efficacement votre activité, vos services ou votre entreprise. Chaque interface est pensée pour être claire, moderne, responsive et agréable sur ordinateur comme sur mobile.",
      features: [
        "Site vitrine",
        "Landing page",
        "Design responsive",
        "Interface moderne",
        "Optimisation des performances",
        "Structure professionnelle",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Responsive Design",
      ],
    },

    {
      number: "03",
      icon: ShoppingCart,
      title: "E-commerce",
      shortDescription:
        "Création et personnalisation de boutiques en ligne professionnelles.",
      description:
        "Je mets en place des solutions e-commerce permettant de présenter vos produits, gérer les catégories, les clients et les commandes dans une interface professionnelle et facile à administrer.",
      features: [
        "Boutique en ligne",
        "Gestion des produits",
        "Catégories",
        "Gestion des commandes",
        "Pages produits",
        "Optimisation SEO",
      ],
      technologies: [
        "PrestaShop",
        "WordPress",
        "WooCommerce",
        "SEO",
        "Responsive",
      ],
    },

    {
      number: "04",
      icon: Palette,
      title: "Design graphique",
      shortDescription:
        "Création de visuels professionnels pour votre communication et votre identité.",
      description:
        "Je crée des supports graphiques modernes et cohérents afin de renforcer votre identité visuelle et améliorer votre communication auprès de votre public.",
      features: [
        "Création de logo",
        "Flyer",
        "Affiche publicitaire",
        "Retouche photo",
        "Identité visuelle",
        "Supports réseaux sociaux",
      ],
      technologies: [
        "Photoshop",
        "Illustrator",
        "Retouche",
        "Branding",
        "Composition graphique",
      ],
    },

    {
      number: "05",
      icon: Ruler,
      title: "AutoCAD 2D & 3D",
      shortDescription:
        "Réalisation de dessins techniques, plans et modélisations avec précision.",
      description:
        "Je réalise des dessins techniques et des plans précis avec une organisation professionnelle des calques, des cotations et des différents éléments du projet.",
      features: [
        "Plans 2D",
        "Dessin technique",
        "Cotation",
        "Organisation des calques",
        "Modélisation 3D",
        "Présentation technique",
      ],
      technologies: [
        "AutoCAD 2D",
        "AutoCAD 3D",
        "Modélisation",
        "Cotation",
        "Dessin technique",
      ],
    },

    {
      number: "06",
      icon: Search,
      title: "SEO & Référencement",
      shortDescription:
        "Optimisation de votre site pour améliorer sa visibilité sur les moteurs de recherche.",
      description:
        "J'optimise la structure et le contenu des sites web afin d'améliorer leur visibilité, leur compréhension par les moteurs de recherche et leurs performances.",
      features: [
        "SEO On-Page",
        "Meta Title",
        "Meta Description",
        "Structure des pages",
        "Sitemap",
        "Optimisation des performances",
      ],
      technologies: [
        "SEO",
        "Search Console",
        "Sitemap",
        "Performance",
        "Optimisation",
      ],
    },

    {
      number: "07",
      icon: Wrench,
      title: "Maintenance Web",
      shortDescription:
        "Maintenance, correction et amélioration de sites web existants.",
      description:
        "J'interviens sur des sites existants pour corriger les problèmes, améliorer les performances, mettre à jour certains éléments ou ajouter de nouvelles fonctionnalités.",
      features: [
        "Correction de bugs",
        "Mise à jour",
        "Optimisation",
        "Amélioration UI",
        "Ajout de fonctionnalités",
        "Maintenance technique",
      ],
      technologies: [
        "WordPress",
        "React",
        "Django",
        "Git",
        "API",
      ],
    },
  ];

  /* =========================================================
     OUVRIR LE MODAL
  ========================================================= */

  const openService = (service) => {
    setSelectedService(service);
  };

  /* =========================================================
     FERMER LE MODAL
  ========================================================= */

  const closeService = () => {
    setSelectedService(null);
  };

  /* =========================================================
     BLOQUER LE SCROLL QUAND LE MODAL EST OUVERT
  ========================================================= */

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  /* =========================================================
     FERMER AVEC LA TOUCHE ESC
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeService();
      }
    };

    if (selectedService) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedService]);

  return (
    <>
      {/* =====================================================
          SECTION SERVICES
      ===================================================== */}

      <section id="services" className="services section">
        <div className="section-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="section-heading centered">

            <div className="section-label">
              <Sparkles size={15} />
              MES SERVICES
            </div>

            <h2>
              Des solutions adaptées à
              <span> vos besoins.</span>
            </h2>

            <p>
              Je propose des solutions numériques et créatives
              combinant technologie, design et précision pour
              transformer vos idées en réalisations concrètes.
            </p>

          </div>

          {/* =================================================
              SERVICES GRID
          ================================================= */}

          <div className="services-grid">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card"
                  key={service.number}
                >

                  {/* -----------------------------------------
                      TOP CARD
                  ----------------------------------------- */}

                  <div className="service-card-top">

                    <span className="service-number">
                      {service.number}
                    </span>

                    <div className="service-icon">
                      <Icon
                        size={24}
                        strokeWidth={1.8}
                      />
                    </div>

                  </div>

                  {/* -----------------------------------------
                      CONTENT
                  ----------------------------------------- */}

                  <div className="service-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.shortDescription}
                    </p>

                    {/* FEATURES */}

                    <div className="service-features">

                      {service.features
                        .slice(0, 4)
                        .map((feature) => (
                          <span key={feature}>
                            {feature}
                          </span>
                        ))}

                    </div>

                  </div>

                  {/* -----------------------------------------
                      BOUTON EN SAVOIR PLUS
                  ----------------------------------------- */}

                  <button
                    type="button"
                    className="service-bottom service-more-button"
                    onClick={() => openService(service)}
                  >

                    <span>
                      En savoir plus
                    </span>

                    <ArrowUpRight
                      className="service-arrow"
                      size={20}
                    />

                  </button>

                  {/* GLOW */}

                  <div className="service-glow"></div>

                </article>
              );
            })}

          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div className="services-cta">

            <div>

              <span className="services-cta-label">
                UN PROJET EN TÊTE ?
              </span>

              <h3>
                Construisons quelque chose
                <span>
                  {" "}
                  d'utile et de professionnel.
                </span>
              </h3>

            </div>

            <a
              href="/#contact"
              className="services-cta-button"
            >
              Parlons de votre projet

              <ArrowUpRight size={19} />

            </a>

          </div>

        </div>
      </section>

      {/* =====================================================
          MODAL SERVICE
      ===================================================== */}

      {selectedService && (
        <div
          className="service-modal"
          onClick={closeService}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >

          <div
            className="service-modal-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >

            {/* =================================================
                BOUTON FERMER
            ================================================= */}

            <button
              type="button"
              className="service-modal-close"
              onClick={closeService}
              aria-label="Fermer la fenêtre"
            >
              <X size={21} />
            </button>

            {/* =================================================
                HEADER MODAL
            ================================================= */}

            <div className="service-modal-header">

              <div className="service-modal-icon">

                {(() => {
                  const ModalIcon =
                    selectedService.icon;

                  return (
                    <ModalIcon
                      size={30}
                      strokeWidth={1.7}
                    />
                  );
                })()}

              </div>

              <div>

                <span className="service-modal-number">
                  SERVICE {selectedService.number}
                </span>

                <h2 id="service-modal-title">
                  {selectedService.title}
                </h2>

              </div>

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="service-modal-description">
              {selectedService.description}
            </p>

            {/* =================================================
                DETAILS
            ================================================= */}

            <div className="service-modal-grid">

              {/* ---------------------------------------------
                  CE QUE JE PROPOSE
              --------------------------------------------- */}

              <div className="service-modal-column">

                <h3>
                  Ce que je propose
                </h3>

                <div className="service-detail-list">

                  {selectedService.features.map(
                    (feature) => (
                      <div
                        className="service-detail-item"
                        key={feature}
                      >

                        <CheckCircle2
                          size={17}
                        />

                        <span>
                          {feature}
                        </span>

                      </div>
                    )
                  )}

                </div>

              </div>

              {/* ---------------------------------------------
                  TECHNOLOGIES
              --------------------------------------------- */}

              <div className="service-modal-column">

                <h3>
                  Technologies & outils
                </h3>

                <div className="service-modal-technologies">

                  {selectedService.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* =================================================
                FOOTER MODAL
            ================================================= */}

            <div className="service-modal-footer">

              <div>

                <span>
                  Vous avez un projet ?
                </span>

                <strong>
                  Parlons-en ensemble.
                </strong>

              </div>

              <a
                href="/#contact"
                className="service-modal-contact"
                onClick={closeService}
              >
                Demander ce service

                <ArrowUpRight
                  size={18}
                />

              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Services;