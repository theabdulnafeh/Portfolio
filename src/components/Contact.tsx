'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  projectBrief: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  projectBrief?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    projectType: 'Full-Stack Web App (MERN)',
    budget: '$1,000 – $2,500',
    timeline: '1–4 weeks',
    projectBrief: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectBrief.trim()) {
      newErrors.projectBrief = 'Please describe your project or requirements';
    } else if (formData.projectBrief.trim().length < 15) {
      newErrors.projectBrief = 'Please provide a bit more detail (at least 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send inquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setSubmitError(err.message || 'Something went wrong while sending your inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abduln251@hotmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      projectType: 'Full-Stack Web App (MERN)',
      budget: '$1,000 – $2,500',
      timeline: '1–4 weeks',
      projectBrief: '',
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="relative z-20 py-16 sm:py-24 px-5 sm:px-12 lg:px-16 w-full max-w-6xl mx-auto flex flex-col items-center justify-center font-[family-name:var(--font-montserrat)] text-white scroll-mt-28"
    >
      <div className="w-full relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-syne uppercase tracking-tight text-white drop-shadow-lg">
            Let’s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-3 shadow-md" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Value Prop & Direct Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left drop-shadow-md">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-syne text-zinc-100 tracking-wide leading-snug mb-3">
                Have a project in mind or looking for a full-stack engineer?
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
                Fill out the inquiry form with your project details, and I will review your requirements and respond within 24 hours with next steps and a proposed action plan.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="flex flex-col gap-3.5 pt-2">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923010500215"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-black/50 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-md hover:bg-black/70 shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Direct WhatsApp</h4>
                    <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">+92 301 0500215</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">Chat Now &rarr;</span>
              </a>

              {/* Email Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Email Address</h4>
                    <a href="mailto:abduln251@hotmail.com" className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                      abduln251@hotmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-zinc-200 transition-all active:scale-95"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Client Guarantee Highlights */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm flex flex-col gap-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Why Work With Me</h4>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Rapid Turnarounds:</strong> Milestone-driven delivery on schedule</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Modern Stack:</strong> Clean, MERN, and TypeScript codebase</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">✓</span>
                  <span><strong>Direct Communication:</strong> Regular updates and async transparency</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-black/50 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Subtle Gradient Glow Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 sm:py-14 gap-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-orange-500/30 mb-2">
                  ✓
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-syne text-white">
                  Inquiry Received!
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 max-w-md leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project details have been sent. I’ll review your message and reach out to you at <strong className="text-amber-300">{formData.email}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-4 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left" noValidate>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold font-syne text-white tracking-tight">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                    Provide your requirements below to get a detailed project estimate.
                  </p>
                </div>

                {/* Grid Inputs: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-fullname" className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-amber-500 focus:ring-amber-500/20'
                      } text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 transition-all`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-400 font-medium">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-amber-500 focus:ring-amber-500/20'
                      } text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 transition-all`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 font-medium">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Dropdowns Grid: Project Type, Budget, Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Project Type */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-project-type" className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Full-Stack Web App (MERN)" className="bg-zinc-900 text-white">Full-Stack (MERN)</option>
                      <option value="Frontend / UI/UX Implementation" className="bg-zinc-900 text-white">Frontend / UI/UX</option>
                      <option value="API / Backend Integration" className="bg-zinc-900 text-white">API / Backend</option>
                      <option value="Other" className="bg-zinc-900 text-white">Other</option>
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-budget" className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="< $300" className="bg-zinc-900 text-white">&lt; $300</option>
                      <option value="$300 – $1,000" className="bg-zinc-900 text-white">$300 – $1,000</option>
                      <option value="$1,000 – $2,500" className="bg-zinc-900 text-white">$1,000 – $2,500</option>
                      <option value="$2,500+" className="bg-zinc-900 text-white">$2,500+</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-timeline" className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-black/60 border border-white/15 text-sm text-white outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="Urgent (< 1 week)" className="bg-zinc-900 text-white">Urgent (&lt; 1 week)</option>
                      <option value="1–4 weeks" className="bg-zinc-900 text-white">1–4 weeks</option>
                      <option value="1+ months" className="bg-zinc-900 text-white">1+ months</option>
                      <option value="Flexible" className="bg-zinc-900 text-white">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Brief Textarea */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="contact-brief" className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
                      Project Brief / Details <span className="text-amber-400">*</span>
                    </label>
                    <span className="text-[11px] text-zinc-500">
                      {formData.projectBrief.length} chars
                    </span>
                  </div>
                  <textarea
                    id="contact-brief"
                    rows={4}
                    placeholder="Tell me about your project goals, key features needed, or design requirements..."
                    value={formData.projectBrief}
                    onChange={(e) => setFormData({ ...formData, projectBrief: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-black/60 border ${
                      errors.projectBrief ? 'border-red-500 focus:ring-red-500' : 'border-white/15 focus:border-amber-500 focus:ring-amber-500/20'
                    } text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 transition-all resize-none`}
                  />
                  {errors.projectBrief && (
                    <span className="text-xs text-red-400 font-medium">{errors.projectBrief}</span>
                  )}
                </div>

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/50 text-xs text-red-300 font-medium">
                    {submitError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full py-4 rounded-xl text-sm font-syne font-bold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-amber-500 hover:from-amber-500 hover:to-orange-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <span>Send Project Inquiry</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
