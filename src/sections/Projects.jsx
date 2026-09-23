import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  Server,
  X,
} from "lucide-react";

import "../styles/projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* =========================================================
     PROJETS
  ========================================================= */

  const projects = [
    {
      id: 1,

      category: "APPLICATION WEB",

      title: "Gestion des Stages",

      images: [
        "/images/projects/gestion-stages-1.jpg",
        "/images/projects/gestion-stages-2.jpg",
        "/images/projects/gestion-stages-3.jpg",
      ],

      // Remplacez cette adresse par le lien réel de votre application
    link: "https://gestion-stage-frontend-ycmo.onrender.com",

      shortDescription:
        "Plateforme web de gestion et de suivi des stages basée sur une gestion des accès adaptée aux différents rôles des utilisateurs.",

      technologies: [
        "React.js",
        "Django",
        "PostgreSQL",
      ],

      description: `
Le système de Gestion des Stages repose sur quatre rôles principaux afin de répartir les responsabilités et de sécuriser l’accès aux différentes fonctionnalités.

L’Administrateur (ADMIN) assure la gestion globale de la plateforme : il gère les utilisateurs, les entreprises, les offres de stage, les candidatures et les demandes, et il intervient dans la validation des rapports et des différentes opérations administratives.

L’Étudiant (ETUDIANT) utilise la plateforme pour consulter les offres de stage, déposer ses candidatures et ses demandes, transmettre les documents nécessaires, suivre l’évolution de son stage et déposer son journal ainsi que son rapport.

L’Entreprise (ENTREPRISE) participe à la gestion des offres de stage, consulte et traite les candidatures liées à ses offres, suit les stagiaires et peut participer à leur évaluation.

Enfin, l’Enseignant ou Encadreur (ENSEIGNANT) assure le suivi pédagogique des étudiants qui lui sont affectés, consulte les informations nécessaires au déroulement du stage et participe à l’évaluation pédagogique.

Ainsi, chaque utilisateur dispose d’un espace et de permissions adaptés à son rôle, ce qui permet de garantir une meilleure organisation du processus de stage, de protéger les données et d’empêcher les utilisateurs d’accéder aux fonctionnalités qui ne relèvent pas de leurs responsabilités.
`,
    },
  ];

  /* =========================================================
     DÉFILEMENT AUTOMATIQUE
  ========================================================= */

  useEffect(() => {
    const totalSlides = projects[0]?.images?.length || 0;

    if (totalSlides <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentSlide((previous) => {
        return (previous + 1) % totalSlides;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [projects]);

  /* =========================================================
     RESET DU SLIDER LORSQU'ON OUVRE LE MODAL
  ========================================================= */

  useEffect(() => {
    if (selectedProject) {
      setCurrentSlide(0);
    }
  }, [selectedProject]);

  /* =========================================================
     BLOQUER LE SCROLL QUAND LE MODAL EST OUVERT
  ========================================================= */

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /* =========================================================
     FERMER LE MODAL AVEC ÉCHAP
  ========================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  /* =========================================================
     OUVRIR LE PROJET
  ========================================================= */

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  /* =========================================================
     FERMER LE PROJET
  ========================================================= */

  const closeProject = () => {
    setSelectedProject(null);
  };

  /* =========================================================
     SLIDE SUIVANTE
  ========================================================= */

  const nextSlide = () => {
    const images = selectedProject?.images;

    if (!images?.length) {
      return;
    }

    setCurrentSlide(
      (previous) => (previous + 1) % images.length
    );
  };

  /* =========================================================
     SLIDE PRÉCÉDENTE
  ========================================================= */

  const previousSlide = () => {
    const images = selectedProject?.images;

    if (!images?.length) {
      return;
    }

    setCurrentSlide(
      (previous) =>
        (previous - 1 + images.length) % images.length
    );
  };

  /* =========================================================
     ALLER À UNE IMAGE PRÉCISE
  ========================================================= */

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  /* =========================================================
     RENDU
  ========================================================= */

  return (
    <>
      {/* =====================================================
          SECTION PROJETS
      ====================================================== */}

      <section
        id="projects"
        className="section projects-section"
      >
        <div className="section-container">

          {/* =================================================
              EN-TÊTE
          ================================================== */}

          <div className="section-heading">
            <span className="section-label">
              <Code2 size={16} />
              PROJETS WEB
            </span>

            <h2>
              Des solutions web pensées pour
              <span> des besoins réels.</span>
            </h2>

            <p>
              Découvrez une sélection de projets réalisés autour
              du développement web, de la gestion des données et
              de la création d’applications modernes adaptées
              aux besoins des utilisateurs.
            </p>
          </div>

          {/* =================================================
              GRILLE
          ================================================== */}

          <div className="projects-grid">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >

                {/* =================================================
                    VISUEL
                ================================================== */}

                <div className="project-visual">

                  {/* Halo */}

                  <div className="project-glow"></div>

                  {/* =================================================
                      CADRE NAVIGATEUR
                  ================================================== */}

                  <div className="project-browser">

                    {/* Barre navigateur */}

                    <div className="browser-header">

                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="browser-address">
                        <span className="browser-lock">
                          🔒
                        </span>

                        <span>
                          gestion-stages
                        </span>
                      </div>

                      <div className="browser-actions">
                        <span></span>
                        <span></span>
                      </div>

                    </div>

                    {/* =================================================
                        SLIDER
                    ================================================== */}

                    <div className="project-slider">

                      <div
                        className="project-slider-track"
                        style={{
                          transform: `translateX(-${
                            currentSlide * 100
                          }%)`,
                        }}
                      >

                        {project.images.map(
                          (image, index) => (
                            <div
                              className="project-slide"
                              key={image}
                            >
                              <img
                                src={image}
                                alt={`${project.title} - capture ${
                                  index + 1
                                }`}
                              />
                            </div>
                          )
                        )}

                      </div>

                      {/* Flèche précédente */}

                      <button
                        type="button"
                        className="slider-arrow slider-arrow-left"
                        onClick={previousSlide}
                        aria-label="Capture précédente"
                      >
                        <ArrowLeft size={17} />
                      </button>

                      {/* Flèche suivante */}

                      <button
                        type="button"
                        className="slider-arrow slider-arrow-right"
                        onClick={nextSlide}
                        aria-label="Capture suivante"
                      >
                        <ArrowRight size={17} />
                      </button>

                      {/* Indicateurs */}

                      <div className="slider-indicators">

                        {project.images.map(
                          (_, index) => (
                            <button
                              key={index}
                              type="button"
                              className={
                                currentSlide === index
                                  ? "slider-dot active"
                                  : "slider-dot"
                              }
                              onClick={() =>
                                goToSlide(index)
                              }
                              aria-label={`Afficher la capture ${
                                index + 1
                              }`}
                            />
                          )
                        )}

                      </div>

                    </div>
                  </div>

                  {/* =================================================
                      CARTE FLOTTANTE
                  ================================================== */}

                  <div className="project-floating-card">

                    <div className="floating-icon">
                      <Server size={18} />
                    </div>

                    <div>
                      <strong>
                        Application Web
                      </strong>

                      <span>
                        Gestion & Administration
                      </span>
                    </div>

                  </div>

                </div>

                {/* =================================================
                    CONTENU
                ================================================== */}

                <div className="project-content">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}

                  <div className="project-technologies">

                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="technology-tag"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* Actions */}

                  <div className="project-actions">

                    <button
                      type="button"
                      className="project-details-button"
                      onClick={() =>
                        openProject(project)
                      }
                    >
                      <span>
                        Voir les détails
                      </span>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.8}
                      />
                    </button>

                    {project.link &&
                      project.link !==
                        "https://votre-lien-du-projet.com" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-live-button"
                        >
                          <span>
                            Voir le projet
                          </span>

                          <ExternalLink
                            size={17}
                            strokeWidth={1.8}
                          />
                        </a>
                    )}

                  </div>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ====================================================== */}

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={closeProject}
        >

          <div
            className="project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* =================================================
                HEADER MODAL
            ================================================== */}

            <div className="project-modal-header">

              <div>
                <span className="project-category">
                  {selectedProject.category}
                </span>

                <h3>
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                className="project-modal-close"
                onClick={closeProject}
                aria-label="Fermer"
              >
                <X size={22} />
              </button>

            </div>

            {/* =================================================
                SLIDER MODAL
            ================================================== */}

            <div className="modal-project-slider">

              <div
                className="modal-slider-track"
                style={{
                  transform: `translateX(-${
                    currentSlide * 100
                  }%)`,
                }}
              >

                {selectedProject.images.map(
                  (image, index) => (
                    <div
                      className="modal-slide"
                      key={image}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} - capture ${
                          index + 1
                        }`}
                      />
                    </div>
                  )
                )}

              </div>

              {/* Flèche précédente */}

              <button
                type="button"
                className="modal-slider-arrow modal-slider-left"
                onClick={previousSlide}
                aria-label="Image précédente"
              >
                <ArrowLeft size={19} />
              </button>

              {/* Flèche suivante */}

              <button
                type="button"
                className="modal-slider-arrow modal-slider-right"
                onClick={nextSlide}
                aria-label="Image suivante"
              >
                <ArrowRight size={19} />
              </button>

              {/* Indicateurs */}

              <div className="modal-slider-indicators">

                {selectedProject.images.map(
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={
                        currentSlide === index
                          ? "modal-slider-dot active"
                          : "modal-slider-dot"
                      }
                      onClick={() =>
                        goToSlide(index)
                      }
                      aria-label={`Afficher la capture ${
                        index + 1
                      }`}
                    />
                  )
                )}

              </div>

            </div>

            {/* =================================================
                INFOS TECHNIQUES
            ================================================== */}

            <div className="project-modal-tech">

              <div className="modal-tech-item">

                <Code2 size={19} />

                <div>
                  <span>
                    Frontend
                  </span>

                  <strong>
                    React.js
                  </strong>
                </div>

              </div>

              <div className="modal-tech-item">

                <Server size={19} />

                <div>
                  <span>
                    Backend
                  </span>

                  <strong>
                    Django
                  </strong>
                </div>

              </div>

              <div className="modal-tech-item">

                <Database size={19} />

                <div>
                  <span>
                    Base de données
                  </span>

                  <strong>
                    PostgreSQL
                  </strong>
                </div>

              </div>

            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div className="project-modal-description">

              {selectedProject.description
                .trim()
                .split("\n\n")
                .map(
                  (paragraph, index) => (
                    <p key={index}>
                      {paragraph.trim()}
                    </p>
                  )
                )}

            </div>

            {/* =================================================
                TECHNOLOGIES
            ================================================== */}

            <div className="project-modal-tags">

              {selectedProject.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="technology-tag"
                  >
                    {technology}
                  </span>
                )
              )}

            </div>

            {/* =================================================
                LIEN PROJET
            ================================================== */}

            {selectedProject.link &&
              selectedProject.link !==
                "https://votre-lien-du-projet.com" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-project-link"
                >
                  <span>
                    Accéder au projet
                  </span>

                  <ExternalLink
                    size={18}
                    strokeWidth={1.8}
                  />
                </a>
            )}

          </div>
        </div>
      )}
    </>
  );
}

export default Projects;