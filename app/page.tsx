// app/page.tsx
import React from "react";

export default function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Cost of Care Project</h1>
          <p className="hero-tagline">
            Independent research on healthcare pricing, claims integrity, and
            transparency in the United States.
          </p>
          <p className="hero-sub">
            A 501(c)(3) public benefit research nonprofit.
          </p>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Mission</h2>
        <p className="section-body">
          Cost of Care Project conducts independent, evidence-based research on
          how medical claims are priced, adjudicated, and communicated to
          patients, unions, and employer health plans. We focus on uncovering
          systemic pricing failures, strengthening fiduciary accountability, and
          making healthcare costs understandable and challengeable for the
          people who actually pay them.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Research Focus</h2>
        <ul className="list">
          <li>Healthcare pricing transparency and cost structures</li>
          <li>Claims adjudication integrity and error patterns</li>
          <li>
            Administrative Services Only (ASO) agreement language and its impact
            on costs
          </li>
          <li>Fraud, waste, and abuse indicators in claims data</li>
          <li>
            Ethical and accountable use of AI in claims review and healthcare
            payment systems
          </li>
          <li>
            Public-facing reports, briefings, and tools that translate technical
            findings into practical guidance
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Current Programs</h2>
        <ul className="list">
          <li>
            <strong>Claims Integrity Review:</strong> Pattern analysis of
            mispricing, denials, and fiduciary failures.
          </li>
          <li>
            <strong>ASO Transparency Analysis:</strong> Reviewing contract
            language that shapes how claims are paid and communicated.
          </li>
          <li>
            <strong>Cost of Care Narratives:</strong> Documenting the real-world
            impact of opaque pricing on families, unions, and employers.
          </li>
          <li>
            <strong>AI & Healthcare Payments Pilot:</strong> Evaluating how
            algorithmic tools are used in claim decisions and what safeguards
            are missing.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Board & Leadership</h2>
        <ul className="list">
          <li>
            <strong>Hannah Moore</strong> – President & Chair
          </li>
          <li>
            <strong>Joanna Yates</strong> – Vice President & Treasurer
          </li>
          <li>
            <strong>Angela Warder</strong> – Secretary
          </li>
        </ul>
        <p className="section-body">
          The board provides independent governance and oversight. Day-to-day
          research leadership is provided by Hannah Moore, a healthcare
          compliance and pricing specialist with experience in ASO agreements,
          claims auditing, and cost-of-care investigations.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">For Funders & Partners</h2>
        <p className="section-body">
          Cost of Care Project is seeking support for Year&nbsp;1 research and
          publication activities, including data acquisition, analysis, and
          public reporting on healthcare pricing and claims integrity.
        </p>
        <p className="section-body">
          To request our full funders packet or discuss collaboration:
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
