import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTypes: [] as string[],
    budget: '₹50K–₹1L',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    'Branding & Identity',
    'Performance Marketing',
    'Social Media Management',
    'Web Design & Dev',
    'Graphic Design',
    'Full Retainer',
  ];

  const budgetOptions = ['₹25K–₹50K', '₹50K–₹1L', '₹1L–₹2.5L', '₹2.5L+'];

  const toggleProjectType = (type: string) => {
    setFormData((prev) => {
      const exists = prev.projectTypes.includes(type);
      if (exists) {
        return {
          ...prev,
          projectTypes: prev.projectTypes.filter((t) => t !== type),
        };
      } else {
        return {
          ...prev,
          projectTypes: [...prev.projectTypes, type],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex flex-col space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="flex flex-col space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>Project Inquiries</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1] text-black dark:text-white">
          LET’S TALK<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-day-subtext dark:text-agency-subtext leading-relaxed max-w-2xl pt-2 border-t border-day-border dark:border-agency-border">
          Tell us what you’re building, what you’re solving, or where you want to go.
        </p>
      </section>

      {/* Main Grid: Form & Contact Meta */}
      <section className="border-t border-day-border dark:border-agency-border pt-8 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Inquiry Form */}
          <div className="lg:col-span-8 bg-day-surface dark:bg-agency-surface border border-day-border dark:border-agency-border rounded-xl p-5 sm:p-8">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-digitify-purple/15 border border-digitify-purple flex items-center justify-center text-digitify-purple mb-1">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-black dark:text-white">
                  Enquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-day-subtext dark:text-agency-subtext max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have received your project details and our team will review your brief within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      projectTypes: [],
                      budget: '₹50K–₹1L',
                      message: '',
                    });
                  }}
                  className="mt-4 px-5 py-2 rounded-full border border-day-border dark:border-agency-border text-xs uppercase tracking-widest text-black dark:text-white hover:bg-day-elevated dark:hover:bg-agency-elevated transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white dark:bg-[#0d0d10] border border-day-border dark:border-agency-border rounded-lg px-3.5 py-2.5 text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white dark:bg-[#0d0d10] border border-day-border dark:border-agency-border rounded-lg px-3.5 py-2.5 text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="company"
                    className="block text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted"
                  >
                    Company / Brand Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your brand or organization"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full bg-white dark:bg-[#0d0d10] border border-day-border dark:border-agency-border rounded-lg px-3.5 py-2.5 text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>

                {/* Project Types (Multi-select pills) */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
                    Project Type (Select All Applicable)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypeOptions.map((type) => {
                      const isSelected = formData.projectTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleProjectType(type)}
                          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                              : 'bg-white dark:bg-agency-surface text-day-subtext dark:text-agency-subtext border border-day-border dark:border-agency-border hover:border-black dark:hover:border-white/40'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selection in INR */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
                    Estimated Budget (INR)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {budgetOptions.map((b) => {
                      const isSelected = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-3 rounded-lg text-xs font-mono text-center transition-all border cursor-pointer ${
                            isSelected
                              ? 'bg-black text-white dark:bg-white dark:text-black font-semibold border-black dark:border-white'
                              : 'bg-white dark:bg-[#0d0d10] text-day-subtext dark:text-agency-subtext border-day-border dark:border-agency-border hover:border-black dark:hover:border-white/40'
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted"
                  >
                    Project Scope & Objectives *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your brand, current timeline, and what success looks like for this initiative..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white dark:bg-[#0d0d10] border border-day-border dark:border-agency-border rounded-lg px-3.5 py-2.5 text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Send Enquiry'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info & Availability */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            {/* Availability status */}
            <div className="p-5 rounded-xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-digitify-purple animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-black dark:text-white">
                  AVAILABLE FOR SELECT PROJECTS
                </span>
              </div>
              <p className="text-xs text-day-subtext dark:text-agency-subtext leading-relaxed">
                We accept a limited number of clients per quarter to preserve dedicated partner attention and deep execution quality.
              </p>
            </div>

            {/* Direct Email Placeholder */}
            <div className="p-5 rounded-xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block">
                Direct Email
              </span>
              <a
                href="mailto:contact@yourdomain.com"
                className="text-sm sm:text-base text-black dark:text-white hover:text-digitify-purple transition-colors font-mono underline underline-offset-4 block"
              >
                contact@yourdomain.com
              </a>
              <span className="text-[11px] font-mono text-day-muted dark:text-agency-muted block">
                [Editable Email Placeholder — Replace with your verified agency address]
              </span>
            </div>

            {/* Social channels */}
            <div className="p-5 rounded-xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block">
                Channels
              </span>
              <div className="flex flex-col space-y-2 text-xs sm:text-sm text-day-subtext dark:text-agency-subtext">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>Behance</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </a>
              </div>
            </div>

            {/* Headquarters */}
            <div className="p-5 rounded-xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block">
                Studio Location
              </span>
              <p className="text-sm text-black dark:text-white font-mono">
                New Delhi, India
              </p>
              <p className="text-xs text-day-muted dark:text-agency-muted font-mono">
                Operating Globally Across Timezones
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
