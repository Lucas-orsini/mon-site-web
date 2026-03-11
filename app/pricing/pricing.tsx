import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        .pricing-root {
          --noir: #0a0a0a;
          --noir-doux: #111111;
          --or: #c9a84c;
          --or-clair: #e8c97a;
          --or-pale: #f5e6b8;
          --blanc: #f8f5f0;
          --gris-clair: #d4cfc8;
          --gris-moyen: #8a847c;
          --bordure: rgba(201, 168, 76, 0.25);
          background-color: var(--noir);
          color: var(--blanc);
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
        }
        .pricing-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(ellipse at 20% 20%, rgba(201, 168, 76, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(201, 168, 76, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
        .pricing-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 40px;
          position: relative;
          z-index: 1;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 90px;
          opacity: 0;
          animation: fadeUp 1s ease forwards 0.2s;
        }
        .header-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 24px;
        }
        .header-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 300;
          line-height: 1.05;
          color: var(--blanc);
          margin-bottom: 12px;
          letter-spacing: 0.02em;
        }
        .header-title em {
          font-style: italic;
          color: var(--or-clair);
        }
        .header-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          font-style: italic;
          color: var(--gris-moyen);
          letter-spacing: 0.05em;
          margin-top: 16px;
        }
        .header-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--or), transparent);
          margin: 32px auto 0;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-bottom: 80px;
        }
        .card {
          background: var(--noir-doux);
          border: 1px solid var(--bordure);
          padding: 52px 40px 48px;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transition: border-color 0.4s ease, transform 0.4s ease;
          cursor: default;
        }
        .card:nth-child(1) { animation: fadeUp 0.9s ease forwards 0.4s; }
        .card:nth-child(2) { animation: fadeUp 0.9s ease forwards 0.55s; }
        .card:nth-child(3) { animation: fadeUp 0.9s ease forwards 0.7s; }
        .card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--or), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201, 168, 76, 0.05) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .card:hover {
          border-color: rgba(201, 168, 76, 0.5);
          transform: translateY(-4px);
        }
        .card:hover::before,
        .card:hover::after { opacity: 1; }
        .card.featured {
          border-color: rgba(201, 168, 76, 0.4);
          background: linear-gradient(160deg, #141210 0%, #0f0e0c 100%);
        }
        .card.featured::before { opacity: 1; }
        .card-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .card-number::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--bordure);
          max-width: 40px;
        }
        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 300;
          color: var(--blanc);
          line-height: 1.2;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }
        .card-title em {
          font-style: italic;
          color: var(--or-clair);
        }
        .card-usage {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gris-moyen);
          margin-bottom: 36px;
          line-height: 1.6;
        }
        .card-price {
          margin-bottom: 40px;
          padding-bottom: 36px;
          border-bottom: 1px solid var(--bordure);
        }
        .price-from {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gris-moyen);
          margin-bottom: 6px;
        }
        .price-amount {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          color: var(--blanc);
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .price-amount sup {
          font-size: 22px;
          vertical-align: super;
          color: var(--or);
          font-weight: 400;
          margin-right: 2px;
        }
        .price-range {
          font-size: 11px;
          color: var(--gris-moyen);
          letter-spacing: 0.1em;
          margin-top: 6px;
        }
        .section-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 16px;
        }
        .features-list {
          list-style: none;
          margin-bottom: 36px;
          padding: 0;
        }
        .features-list li {
          font-size: 12.5px;
          font-weight: 300;
          color: var(--gris-clair);
          line-height: 1.5;
          padding: 7px 0;
          border-bottom: 1px solid rgba(201, 168, 76, 0.08);
          display: flex;
          align-items: flex-start;
          gap: 12px;
          letter-spacing: 0.03em;
        }
        .features-list li:last-child { border-bottom: none; }
        .features-list li::before {
          content: '—';
          color: var(--or);
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .deliverables {
          background: rgba(201, 168, 76, 0.04);
          border: 1px solid rgba(201, 168, 76, 0.12);
          padding: 20px 22px;
        }
        .deliverables-list {
          list-style: none;
          padding: 0;
        }
        .deliverables-list li {
          font-size: 12px;
          font-weight: 400;
          color: var(--or-pale);
          padding: 5px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          letter-spacing: 0.04em;
        }
        .deliverables-list li::before {
          content: '◆';
          font-size: 5px;
          color: var(--or);
          flex-shrink: 0;
        }
        .featured-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--or);
          color: var(--noir);
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 5px 10px;
        }
        .card-delay {
          margin-top: 28px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gris-moyen);
        }
        .card-delay::before {
          content: '';
          display: block;
          width: 16px;
          height: 1px;
          background: var(--or);
        }
        .footer-note {
          text-align: center;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards 1s;
        }
        .footer-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, transparent, var(--or), transparent);
          margin: 0 auto 32px;
        }
        .footer-note p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 300;
          font-style: italic;
          color: var(--gris-moyen);
          letter-spacing: 0.05em;
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 12px;
        }
        .footer-contact {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--or);
          margin-top: 24px;
        }
        .express-note {
          display: inline-block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gris-moyen);
          border: 1px solid var(--bordure);
          padding: 12px 24px;
          margin-top: 40px;
        }
        .express-note span { color: var(--or); }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr; gap: 2px; }
          .pricing-container { padding: 60px 24px; }
          .card { padding: 44px 32px 40px; }
        }
      `}</style>

      <div className="pricing-root">
        <div className="pricing-container">

          {/* EN-TÊTE */}
          <header className="pricing-header">
            <p className="header-eyebrow">Cinématographie immobilière</p>
            <h1 className="header-title">Mes <em>Prestations</em></h1>
            <p className="header-subtitle">Chaque propriété mérite une vision singulière</p>
            <div className="header-line" />
          </header>

          {/* GRILLE */}
          <div className="pricing-grid">

            {/* CARTE 1 */}
            <div className="card">
              <p className="card-number">01</p>
              <h2 className="card-title">FPV<br /><em>Highlight</em></h2>
              <p className="card-usage">Appartements & maisons haut de gamme<br />Contenu social & digital</p>
              <div className="card-price">
                <p className="price-from">À partir de</p>
                <div className="price-amount"><sup>€</sup>1 000</div>
                <p className="price-range">jusqu&apos;à 1 200 €</p>
              </div>
              <p className="section-label">Inclus</p>
              <ul className="features-list">
                <li>1 lieu de tournage</li>
                <li>FPV intérieur &amp; extérieur</li>
                <li>Montage cinématique</li>
                <li>Étalonnage professionnel</li>
                <li>Musique licenciée</li>
              </ul>
              <p className="section-label">Livrables</p>
              <div className="deliverables">
                <ul className="deliverables-list">
                  <li>Vidéo 30–60 sec — format vertical</li>
                  <li>Vidéo 30–60 sec — format horizontal</li>
                </ul>
              </div>
              <p className="card-delay">Livraison sous 2–3 jours ouvrés</p>
            </div>

            {/* CARTE 2 — FEATURED */}
            <div className="card featured">
              <div className="featured-badge">Le plus demandé</div>
              <p className="card-number">02</p>
              <h2 className="card-title">Cinematic<br /><em>Property Tour</em></h2>
              <p className="card-usage">Propriétés d&apos;exception<br />Biens de prestige</p>
              <div className="card-price">
                <p className="price-from">À partir de</p>
                <div className="price-amount"><sup>€</sup>1 500</div>
                <p className="price-range">jusqu&apos;à 1 700 €</p>
              </div>
              <p className="section-label">Inclus</p>
              <ul className="features-list">
                <li>1 journée de tournage</li>
                <li>FPV intérieur &amp; extérieur</li>
                <li>Plans drone cinématiques</li>
                <li>Montage storytelling</li>
                <li>Étalonnage professionnel</li>
                <li>Musique licenciée</li>
              </ul>
              <p className="section-label">Livrables</p>
              <div className="deliverables">
                <ul className="deliverables-list">
                  <li>Film principal 60–90 sec</li>
                  <li>2 versions réseaux sociaux</li>
                  <li>Sélection de visuels marketing</li>
                </ul>
              </div>
              <p className="card-delay">Livraison sous 5–7 jours ouvrés</p>
            </div>

            {/* CARTE 3 */}
            <div className="card">
              <p className="card-number">03</p>
              <h2 className="card-title">Signature<br /><em>Estate Film</em></h2>
              <p className="card-usage">Hôtels particuliers<br />Marketing international</p>
              <div className="card-price">
                <p className="price-from">À partir de</p>
                <div className="price-amount"><sup>€</sup>2 200</div>
                <p className="price-range">sur devis</p>
              </div>
              <p className="section-label">Inclus</p>
              <ul className="features-list">
                <li>1 à 2 journées de tournage</li>
                <li>FPV intérieur &amp; extérieur</li>
                <li>Plans drone cinématiques</li>
                <li>Direction artistique dédiée</li>
                <li>Étalonnage premium</li>
                <li>Musique licenciée ou originale</li>
              </ul>
              <p className="section-label">Livrables</p>
              <div className="deliverables">
                <ul className="deliverables-list">
                  <li>Film immobilier 2–3 min</li>
                  <li>3 versions réseaux sociaux</li>
                  <li>Sélection de visuels marketing</li>
                </ul>
              </div>
              <p className="card-delay">Livraison sous 10–15 jours ouvrés</p>
            </div>

          </div>

          {/* FOOTER */}
          <footer className="footer-note">
            <div className="footer-line" />
            <p>
              Chaque projet fait l&apos;objet d&apos;un brief personnalisé.<br />
              Les tarifs sont indicatifs et peuvent être ajustés selon la complexité du bien,
              sa localisation et les exigences de production.
            </p>
            <p style={{ marginTop: "16px" }}>
              <span className="express-note">
                Option express disponible — <span>délai réduit sur demande</span>
              </span>
            </p>
            <p className="footer-contact">Demande de devis sur mesure</p>
          </footer>

        </div>
      </div>
    </>
  );
}
