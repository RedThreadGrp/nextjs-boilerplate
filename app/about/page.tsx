// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="page">
      <header className="hero hero--small">
        <div className="hero-inner">
          <h1 className="hero-title">About the Cost of Care Project</h1>
          <p className="hero-tagline">
            A 501(c)(3) public-benefit research nonprofit focused on healthcare
            pricing, claims integrity, and administrative transparency.
          </p>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-body">
          The Cost of Care Project is an independent research nonprofit that
          examines how medical claims are priced, adjudicated, and communicated
          within employer-sponsored health plans in the United States. We focus
          on the hidden infrastructure of healthcare payments: plan documents,
          Administrative Services Only (ASO) agreements, payment integrity
          tools, and algorithmic decision systems.
        </p>
        <p className="section-body">
          Our goal is to make this infrastructure understandable and challengeable
          for the people who ultimately pay for care—families, unions, and
          employers.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">What We Do</h2>
        <ul className="list">
          <li>Analyze healthcare pricing structures and allowed-amount logic.</li>
          <li>Review ASO agreements and SPD–ASA alignment for transparency gaps.</li>
          <li>
            Study claims adjudication patterns, including denial and reduction
            logic.
          </li>
          <li>
            Examine the use of algorithmic and AI tools in claims review and
            payment integrity programs.
          </li>
          <li>
            Publish public-facing briefs, reports, and practical guidance for
            plan sponsors, unions, and policymakers.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Who We Serve</h2>
        <p className="section-body">
          Our research is designed for:
        </p>
        <ul className="list">
          <li>Employer and union plan sponsors responsible for fiduciary oversight.</li>
          <li>Families and individuals struggling to understand medical billing.</li>
          <li>Researchers, advocates, and policymakers working on health system reform.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Governance</h2>
        <p className="section-body">
          Cost of Care Project is governed by an independent board of directors:
        </p>
        <ul className="list">
          <li><strong>Hannah Moore</strong> – President &amp; Chair</li>
          <li><strong>Joanna Yates</strong> – Vice President &amp; Treasurer</li>
          <li><strong>Angela Warder</strong> – Secretary</li>
        </ul>
        <p className="section-body">
          The organization is incorporated in Oregon and recognized as a
          501(c)(3) nonprofit. EIN: 39-4640897.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Contact</h2>
        <p className="section-body">
          For research inquiries, collaboration, or media requests:
        </p>
        <p className="contact">
          Email:{" "}
          <a href="mailto:info@costofcareproject.org">
            info@costofcareproject.org
          </a>
        </p>
      </section>
    </main>
  );
}
