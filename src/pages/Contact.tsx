import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectTypes: [] as string[],
    budget: '₹50K–₹1L',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please share your project scope & objectives.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const submissionDate =
      new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium',
      }) + ' (IST)';

    const payload = {
      _subject: 'New Project Enquiry — Digitify',
      _template: 'table',
      _captcha: 'false',
      _replyto: formData.email.trim(),
      Name: formData.name.trim(),
      Email: formData.email.trim(),
      'Company / Brand': formData.company.trim() || 'Not specified',
      'Selected Project Type(s)':
        formData.projectTypes.length > 0
          ? formData.projectTypes.join(', ')
          : 'None specified',
      'Estimated Budget': formData.budget,
      'Project Scope & Objectives': formData.message.trim(),
      'Submission Date / Time': submissionDate,
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/anukulprabhatverma@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      await response.json().catch(() => ({}));
      setIsSubmitted(true);
      setErrorMessage(null);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        'Unable to complete automatic delivery due to a network connection issue. Your entered details have been preserved. You can try submitting again or send directly via email below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoSubject = encodeURIComponent('New Project Enquiry — Digitify');
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\nProject Type: ${formData.projectTypes.join(', ') || 'Not specified'}\nEstimated Budget: ${formData.budget}\n\nProject Scope & Objectives:\n${formData.message}\n`
  );
  const mailtoLink = `mailto:anukulprabhatverma@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="w-full max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-8 md:px-12 py-6 xs:py-8 sm:py-12 flex flex-col space-y-8 sm:space-y-16">
      {/* Header */}
      <section className="flex flex-col space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>Project Inquiries</span>
        </div>

        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1] text-black dark:text-white">
          LET’S TALK<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-day-subtext dark:text-agency-subtext leading-relaxed max-w-2xl pt-2 border-t border-day-border dark:border-agency-border">
          Tell us what you’re building, what you’re solving, or where you want to go.
        </p>
      </section>

      {/* Main Grid: Form & Contact Meta */}
      <section className="border-t border-day-border dark:border-agency-border pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Column: Interactive Inquiry Form */}
          <div className="lg:col-span-8 bg-day-surface dark:bg-agency-surface border border-day-border dark:border-agency-border rounded-xl p-4 xs:p-6 sm:p-8">
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
                  type="button"
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
                    setFormErrors({});
                    setErrorMessage(null);
                  }}
                  className="mt-4 px-5 py-2.5 rounded-full border border-day-border dark:border-agency-border text-xs uppercase tracking-widest text-black dark:text-white hover:bg-day-elevated dark:hover:bg-agency-elevated transition-colors cursor-pointer active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                {/* Network / Connection Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 space-y-2 text-xs font-mono">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-500" />
                      <div className="space-y-1">
                        <p className="font-semibold">{errorMessage}</p>
                        <p className="text-[11px] opacity-80">
                          Your entered information is preserved. You will not lose any progress.
                        </p>
                      </div>
                    </div>
                    <div className="pt-1 flex items-center gap-3">
                      <a
                        href={mailtoLink}
                        className="inline-flex items-center gap-1.5 underline underline-offset-4 hover:opacity-80 transition-opacity font-semibold"
                      >
                        <span>Send directly via email client</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                )}

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
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      className={`w-full bg-white dark:bg-[#0d0d10] border ${
                        formErrors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-day-border dark:border-agency-border focus:border-black dark:focus:border-white'
                      } rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none transition-colors`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] font-mono text-red-500 mt-1">{formErrors.name}</p>
                    )}
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
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      className={`w-full bg-white dark:bg-[#0d0d10] border ${
                        formErrors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-day-border dark:border-agency-border focus:border-black dark:focus:border-white'
                      } rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none transition-colors`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] font-mono text-red-500 mt-1">{formErrors.email}</p>
                    )}
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
                    className="w-full bg-white dark:bg-[#0d0d10] border border-day-border dark:border-agency-border rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  />
                </div>

                {/* Project Types (Multi-select pills) */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted">
                    Project Type (Select All Applicable)
                  </label>
                  <div className="flex flex-wrap gap-1.5 xs:gap-2">
                    {projectTypeOptions.map((type) => {
                      const isSelected = formData.projectTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleProjectType(type)}
                          className={`px-3 py-2 rounded-full text-xs font-mono transition-all cursor-pointer active:scale-95 ${
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
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 xs:gap-2.5">
                    {budgetOptions.map((b) => {
                      const isSelected = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-2 xs:px-3 rounded-lg text-xs font-mono text-center transition-all border cursor-pointer active:scale-95 ${
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
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                    }}
                    className={`w-full bg-white dark:bg-[#0d0d10] border ${
                      formErrors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-day-border dark:border-agency-border focus:border-black dark:focus:border-white'
                    } rounded-lg px-3.5 py-2.5 text-base sm:text-sm text-black dark:text-white placeholder-day-muted/60 dark:placeholder-agency-muted/60 focus:outline-none transition-colors`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-[11px] font-mono text-red-500 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin text-digitify-purple" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight size={14} />
                      </>
                    )}
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

            {/* Direct Email */}
            <div className="p-5 rounded-xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block">
                Direct Email
              </span>
              <a
                href="mailto:anukulprabhatverma@gmail.com"
                className="text-sm sm:text-base text-black dark:text-white hover:text-digitify-purple transition-colors font-mono underline underline-offset-4 block truncate"
              >
                anukulprabhatverma@gmail.com
              </a>
              <span className="text-[11px] font-mono text-day-muted dark:text-agency-muted block">
                Official Agency Enquiry Address
              </span>
            </div>

            {/* Social channels */}
            <div className="p-5 rounded-xl border border-day-border dark:border-agency-border bg-day-surface dark:bg-agency-surface space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted block">
                Channels
              </span>
              <div className="flex flex-col space-y-2 text-xs sm:text-sm text-day-subtext dark:text-agency-subtext">
                <a
                  href="https://www.instagram.com/digitify.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Behance</span>
                  <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
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
