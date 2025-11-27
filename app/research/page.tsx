// app/research/page.tsx
import React from "react";

export default function ResearchPage() {
  return (
    <main className="page">
      <header className="hero hero--small">
        <div className="hero-inner">
          <h1 className="hero-title">Research & Publications</h1>
          <p className="hero-tagline">
            Independent analysis of ASO agreements, claims integrity, and
            healthcare pricing transparency.
          </p>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Current Research Briefs</h2>
        <div className="research-card">
          <h3 className="research-title">
            ASO Agreements and the Hidden Architecture of Medical Claim Pricing:
            A Transparency Failure
          </h3>
          <p className="research-meta">
            Research Brief &middot; January 2025 &middot; Cost of Care Project
          </p>
          <p className="section-body">
            This brief examines how Administrative Services Only (ASO)
            agreements and related plan documents structure medical claim
            pricing and adjudication. It identifies systemic transparency gaps
            in repricing methodologies, SPD–ASA alignment, and discretionary
            claim handling, and outlines public-interest implications for
            families, unions, and employer-sponsored plans.
          </p>
          <ul className="list">
            <li>ASO transparency and fiduciary oversight</li>
            <li>Claims integrity and pricing inconsistency</li>
            <li>Document architecture (SPD vs. ASA)</li>
          </ul>
          <p className="research-actions">
            <a
              href="/Cost_of_Care_Research_Brief.pdf"
              className="btn-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download full brief (PDF)
            </a>
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Collaboration & Inquiries</h2>
        <p className="section-body">
          Cost of Care Project welcomes collaboration with employer coalitions,
          unions, researchers, policymakers, and transparency organizations
          interested in healthcare pricing, claims adjudication integrity, and
          ASO agreement analysis.
        </p>
        <p className="section-body">
          To discuss research partnerships, co-publication opportunities, or
          additional work in this area, contact:
        </p>
        <p className="contact">
          Email:{" "}
          <a href="mailto:info@costofcareproject.org">
            info@costofcareproject.org
          </a>
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Cost of Care Project. All rights reserved.</p>
        <p>A 501(c)(3) nonprofit organization. EIN: 39-4640897</p>
        <p>Incorporated in Oregon · State Entity ID: 247363492</p>
        <p>
          Contact:{" "}
          <a href="mailto:info@costofcareproject.org">
            info@costofcareproject.org
          </a>
        </p>
      </footer>
    </main>
  );
}
