import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20 flex flex-col space-y-12">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-digitify-purple">
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-medium text-black dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-day-muted dark:text-agency-muted">
          Last Updated: 2026 Edition · Digitify Agency
        </p>
      </div>

      <div className="border-t border-day-border dark:border-agency-border pt-8 space-y-8 text-sm sm:text-base text-day-subtext dark:text-agency-subtext leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-display text-black dark:text-white font-medium">
            1. Overview & Commitment
          </h2>
          <p>
            Digitify (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to safeguarding the privacy and confidentiality of individuals and business partners who interact with our digital platform, inquiry forms, and client services. This policy outlines how information is gathered, utilized, and safeguarded.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display text-black dark:text-white font-medium">
            2. Information We Collect
          </h2>
          <p>
            When you initiate a project inquiry via our website, we may collect business contact information, including your name, corporate email address, organization name, project scope specifications, and estimated budgetary parameters.
          </p>
          <p>
            We do not sell, rent, monetize, or distribute your personal or commercial contact information to third-party data brokers or marketing syndicates under any circumstances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display text-black dark:text-white font-medium">
            3. Client Confidentiality
          </h2>
          <p>
            All strategic discussions, commercial briefs, brand assets, proprietary roadmaps, and business data shared during consultative discovery phases are governed by strict confidentiality protocols. Non-disclosure agreements (NDAs) are executed prior to in-depth technical or strategic disclosures where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display text-black dark:text-white font-medium">
            4. Analytics & Essential Cookies
          </h2>
          <p>
            Our website utilizes minimal, privacy-conscious technical telemetry to assess page load efficiency, device responsiveness, and user navigation patterns. These logs do not identify individual users and are used solely to improve platform stability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-display text-black dark:text-white font-medium">
            5. Inquiries & Data Rights
          </h2>
          <p>
            If you wish to review, update, or request the deletion of any contact data submitted through our inquiry forms, please contact us at{' '}
            <a
              href="mailto:contact@yourdomain.com"
              className="text-black dark:text-white hover:text-digitify-purple underline font-mono"
            >
              contact@yourdomain.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};
