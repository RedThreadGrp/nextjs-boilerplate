// app/privacy/page.tsx
import React from "react";

export default function PrivacyPage() {
  return (
    <main className="page">
      <header className="hero hero--small">
        <div className="hero-inner">
          <h1 className="hero-title">Privacy Policy</h1>
          <p className="hero-tagline">
            How the Cost of Care Project handles information on this website.
          </p>
        </div>
      </header>

      <section className="section">
        <h2 className="section-title">Overview</h2>
        <p className="section-body">
          The Cost of Care Project values privacy and transparency. This page
          explains what limited information we collect through this website and
          how we use it. This policy applies only to costofcareproject.org and
          does not cover any external sites we may link to.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Information We Collect</h2>
        <p className="section-body">
          We do not collect personally identifiable information unless you
          choose to contact us directly.
        </p>
        <p className="section-body">
          In the normal operation of a website, our hosting and analytics
          providers may collect:
        </p>
        <ul className="list">
          <li>Basic device and browser information.</li>
          <li>Approximate location based on IP address.</li>
          <li>Pages visited and time spent on the site.</li>
          <li>Referring websites or search terms.</li>
        </ul>
        <p className="section-body">
          This information is used in aggregate to understand how people find
          and use our site, so we can improve our content and outreach.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Contact Information</h2>
        <p className="section-body">
          If you email us, we will receive whatever information you choose to
          share (such as your name, email address, and message content). We use
          this information only to respond to your inquiry or to manage an
          ongoing conversation.
        </p>
        <p className="section-body">
          We do not sell, rent, or trade email addresses or other personal
          information.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Cookies and Analytics</h2>
        <p className="section-body">
          This site may use standard web analytics tools (such as Google
          Analytics) to understand traffic patterns. These tools may set cookies
          in your browser. You can control or delete cookies through your browser
          settings.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Data Sharing</h2>
        <p className="section-body">
          We do not share personal information with third parties except:
        </p>
        <ul className="list">
          <li>
            When required by law or legal process; or
          </li>
          <li>
            When necessary to protect our rights, users, or the public.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Updates to This Policy</h2>
        <p className="section-body">
          We may update this Privacy Policy from time to time. Any updates will
          be posted on this page with an updated effective date.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Contact</h2>
        <p className="section-body">
          If you have questions about this policy or how we handle information,
          contact:
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
