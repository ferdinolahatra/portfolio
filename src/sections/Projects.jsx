import { useState } from "react";
import {
  ArrowUpRight,
  Code2,
  Database,
  Server,
  X,
} from "lucide-react";

import "../styles/projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      category: "APPLICATION WEB",
      title: "Gestion des Stages",

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

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section
        id="projects"
        className="section projects-section"
      >
        <div className="section-container">

          {/* EN-TÊTE */}
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
              Découvrez une sélection de projets réalisés autour du
              développement web, de la gestion des données et de la
              création d’applications modernes adaptées aux besoins
              des utilisateurs.
            </p>
          </div>

          {/* PROJETS */}
          <div className="projects-grid">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >

                {/* VISUEL */}
                <div className="project-visual">

                  <div className="project-glow"></div>

                  <div className="code-window">

                    <div className="code-window-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="code-content">
                      <div className="code-line">
                        <span className="code-number">
                          01
                        </span>

                        <span className="code-purple">
                          const
                        </span>

                        <span className="code-white">
                          {" "}
                          project
                        </span>

                        <span className="code-blue">
                          =
                        </span>
                      </div>

                      <div className="code-line">
                        <span className="code-number">
                          02
                        </span>

                        <span className="code-green">
                          {"{"}
                        </span>
                      </div>

                      <div className="code-line">
                        <span className="code-number">
                          03
                        </span>

                        <span className="code-white">
                          {"  "}
                          frontend:
                        </span>

                        <span className="code-yellow">
                          "React.js"
                        </span>
                      </div>

                      <div className="code-line">
                        <span className="code-number">
                          04
                        </span>

                        <span className="code-white">
                          {"  "}
                          backend:
                        </span>

                        <span className="code-yellow">
                          "Django"
                        </span>
                      </div>

                      <div className="code-line">
                        <span className="code-number">
                          05
                        </span>

                        <span className="code-white">
                          {"  "}
                          database:
                        </span>

                        <span className="code-yellow">
                          "PostgreSQL"
                        </span>
                      </div>

                      <div className="code-line">
                        <span className="code-number">
                          06
                        </span>

                        <span className="code-green">
                          {"}"}
                        </span>
                      </div>

                      <div className="code-line">
                        <span className="code-number">
                          07
                        </span>

                        <span className="code-purple">
                          export
                        </span>

                        <span className="code-white">
                          {" "}
                          default project;
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CARTE FLOTTANTE */}
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

                {/* CONTENU */}
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

                  {/* TECHNOLOGIES */}
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

                  {/* ACTION */}
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

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* MODAL */}
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

            {/* HEADER MODAL */}
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

            {/* INFOS TECHNIQUES */}
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

            {/* DESCRIPTION */}
            <div className="project-modal-description">

              {selectedProject.description
                .trim()
                .split("\n\n")
                .map((paragraph, index) => (
                  <p key={index}>
                    {paragraph.trim()}
                  </p>
                ))}

            </div>

            {/* TECHNOLOGIES */}
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

          </div>
        </div>
      )}
    </>
  );
}

export default Projects;