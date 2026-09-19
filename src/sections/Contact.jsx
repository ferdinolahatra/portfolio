import {
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const mailSubject = encodeURIComponent(
      subject || "Contact depuis mon portfolio"
    );

    const mailBody = encodeURIComponent(
      `Bonjour Ferdino,\n\n` +
        `Nom : ${name}\n` +
        `Email : ${email}\n\n` +
        `Message :\n${message}\n\n` +
        `Envoyé depuis mon portfolio.`
    );

    window.location.href =
      `mailto:ferdinolahatra@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    setStatus(
      "Votre message est prêt à être envoyé."
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInformations = [
    {
      icon: Mail,
      label: "Email",
      value: "ferdinolahatra@gmail.com",
      href: "mailto:ferdinolahatra@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "0385329214",
      href: "https://wa.me/261385329214",
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "0385329214",
      href: "tel:+261385329214",
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Antananarivo, Madagascar",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="contact section"
    >
      <div className="section-container">

        {/* =====================================================
            EN-TÊTE
        ===================================================== */}

        <div className="section-heading centered">

          <div className="section-label">
            <Sparkles size={15} />
            CONTACT
          </div>

          <h2>
            Parlons de votre
            <span> projet.</span>
          </h2>

          <p>
            Vous avez une idée, un projet web ou besoin
            d'une solution digitale ? Je serais ravi
            d'échanger avec vous et de voir comment nous
            pouvons le concrétiser.
          </p>

        </div>

        {/* =====================================================
            CONTENU PRINCIPAL
        ===================================================== */}

        <div className="contact-layout">

          {/* ===================================================
              INFORMATIONS
          =================================================== */}

          <div className="contact-information">

            <div className="contact-introduction">

              <span className="contact-mini-label">
                UN PROJET EN TÊTE ?
              </span>

              <h3>
                Créons quelque chose de
                <span> professionnel.</span>
              </h3>

              <p>
                Que ce soit pour un site web, une
                application, une boutique en ligne,
                un projet graphique ou une solution
                technique, n'hésitez pas à me contacter.
              </p>

            </div>

            {/* Informations */}

            <div className="contact-details">

              {contactInformations.map((item) => {

                const Icon = item.icon;

                return (
                  <div
                    className="contact-detail"
                    key={item.label}
                  >

                    <div className="contact-detail-icon">
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="contact-detail-content">

                      <span>
                        {item.label}
                      </span>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <strong>
                          {item.value}
                        </strong>
                      )}

                    </div>

                  </div>
                );
              })}

            </div>

            {/* =================================================
                RÉSEAUX SOCIAUX
            ================================================= */}

            <div className="contact-socials">

              <span>
                ME RETROUVER SUR
              </span>

              <div className="contact-social-links">

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/ferdinolahatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="contact-social-link linkedin"
                >
                  <span className="social-text">
                    in
                  </span>
                </a>

                {/* WhatsApp */}

                <a
                  href="https://wa.me/261385329214"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="contact-social-link whatsapp"
                >
                  <MessageCircle
                    size={19}
                    strokeWidth={2}
                  />
                </a>

                {/* Email */}

                <a
                  href="mailto:ferdinolahatra@gmail.com"
                  aria-label="Email"
                  className="contact-social-link email"
                >
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                  />
                </a>

              </div>

            </div>

            {/* =================================================
                DISPONIBILITÉ
            ================================================= */}

            <div className="contact-availability">

              <div className="contact-availability-dot"></div>

              <div>

                <strong>
                  Disponible pour de nouveaux projets
                </strong>

                <span>
                  N'hésitez pas à me contacter pour
                  discuter de votre projet.
                </span>

              </div>

            </div>

          </div>

          {/* ===================================================
              FORMULAIRE
          =================================================== */}

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-header">

                <span className="contact-form-number">
                  01
                </span>

                <div>

                  <h3>
                    Envoyez-moi un message
                  </h3>

                  <p>
                    Présentez-moi votre projet en
                    quelques lignes.
                  </p>

                </div>

              </div>

              {/* Nom + Email */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="name">
                    Nom complet
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />

                </div>

                <div className="contact-field">

                  <label htmlFor="email">
                    Adresse email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />

                </div>

              </div>

              {/* Sujet */}

              <div className="contact-field">

                <label htmlFor="subject">
                  Sujet
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ex : Création d'un site web"
                  required
                />

              </div>

              {/* Message */}

              <div className="contact-field">

                <label htmlFor="message">
                  Votre message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet, vos besoins ou votre demande..."
                  rows="7"
                  required
                ></textarea>

              </div>

              {/* Status */}

              {status && (
                <div className="contact-status">

                  <CheckCircle2 size={17} />

                  <span>
                    {status}
                  </span>

                </div>
              )}

              {/* Bouton */}

              <button
                type="submit"
                className="contact-submit"
              >

                <span>
                  Envoyer le message
                </span>

                <div className="contact-submit-icon">

                  <Send
                    size={18}
                    strokeWidth={1.8}
                  />

                </div>

              </button>

              <p className="contact-form-note">
                En cliquant sur « Envoyer le message »,
                votre application email sera ouverte
                pour finaliser l'envoi.
              </p>

            </form>

          </div>

        </div>

        {/* =====================================================
            ÉTAPES
        ===================================================== */}

        <div className="contact-bottom">

          <div className="contact-bottom-item">

            <span>01</span>

            <div>

              <strong>
                Échange
              </strong>

              <p>
                Comprendre votre besoin et vos objectifs.
              </p>

            </div>

          </div>

          <div className="contact-bottom-line"></div>

          <div className="contact-bottom-item">

            <span>02</span>

            <div>

              <strong>
                Conception
              </strong>

              <p>
                Définir une solution adaptée à votre projet.
              </p>

            </div>

          </div>

          <div className="contact-bottom-line"></div>

          <div className="contact-bottom-item">

            <span>03</span>

            <div>

              <strong>
                Réalisation
              </strong>

              <p>
                Transformer l'idée en une solution concrète.
              </p>

            </div>

          </div>

        </div>

        {/* =====================================================
            CTA FINAL
        ===================================================== */}

        <div className="contact-cta">

          <div>

            <span>
              PRÊT À COMMENCER ?
            </span>

            <h3>
              Votre prochain projet commence
              <strong>
                {" "}par une conversation.
              </strong>
            </h3>

          </div>

          <a
            href="mailto:ferdinolahatra@gmail.com"
            className="contact-cta-button"
          >
            Me contacter

            <ArrowUpRight size={19} />

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;