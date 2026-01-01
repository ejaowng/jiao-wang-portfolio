/**
 * About Page - Your Transition Explained
 * Design: Organic Modernism
 * Purpose: Explain why telecom background is a strength for AI
 * Focus: Systems thinking, debugging, reliability, cross-layer expertise
 */

import { CheckCircle2, Layers, Zap, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Telecom Systems Expertise Wins in AI
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            18 years debugging mission-critical systems, isolating root causes under pressure, and optimizing for reliability. These are exactly the skills that separate production AI engineers from researchers.
          </p>
        </div>

        {/* The Transition: Why This Makes Sense */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-3xl font-bold mb-10 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Transition Logic
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Telecom Skills */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay">
              <h3 className="text-2xl font-bold mb-6 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                Telecom Systems Engineering
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Multi-layer debugging (RF, protocol, cloud, hardware)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Root-cause analysis under uncertainty</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Reliability and fault tolerance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Complex system integration and testing</span>
                </li>
              </ul>
            </div>

            {/* AI Application */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay">
              <h3 className="text-2xl font-bold mb-6 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                Applied AI Engineering
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">LLM-based agents for reasoning and analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Hybrid AI (domain rules + symbolic logic + ML)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Explainability and trustworthiness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Production-grade AI system design</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-sage/10 border-l-4 border-sage rounded-lg p-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              <span className="font-semibold">Why this matters:</span> Telecom systems are mission-critical, complex, and unforgiving. You can't debug in production. You can't have downtime. This mindset—systems thinking, root-cause obsession, reliability first—is exactly what's needed to build AI systems that actually work at scale. Not just accurate. Reliable. Explainable. Trustworthy.
            </p>
          </div>
        </section>

        {/* Four Core Strengths */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-3xl font-bold mb-10 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Four Core Strengths
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Systems Thinking */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Systems Thinking
                </h3>
              </div>
              <p className="text-foreground/75 leading-relaxed mb-4">
                I architect systems across layers—RF, protocol, cloud, hardware. A single failure can cascade. This discipline translates directly: AI systems must account for dependencies, failure modes, and edge cases. No surprises in production.
              </p>
              <p className="text-sm text-primary font-semibold">
                → AI that scales. Systems that don't break.
              </p>
            </div>

            {/* Debugging Mastery */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Debugging Mastery
                </h3>
              </div>
              <p className="text-foreground/75 leading-relaxed mb-4">
                18 years isolating root causes in systems where you have incomplete information and high pressure. This is exactly what AI agents do: analyze logs, traces, metrics, and make intelligent decisions with incomplete data.
              </p>
              <p className="text-sm text-primary font-semibold">
                → I build AI that debugs. AI that reasons.
              </p>
            </div>

            {/* Reliability Obsession */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Reliability First
                </h3>
              </div>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Telecom systems run 24/7 with 99.99%+ uptime requirements. You can't afford black-box AI. Every decision must be explainable, testable, and trustworthy. This is how I build systems.
              </p>
              <p className="text-sm text-primary font-semibold">
                → AI you can trust. Systems that don't fail.
              </p>
            </div>

            {/* Cross-Layer Expertise */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Full-Stack Ownership
                </h3>
              </div>
              <p className="text-foreground/75 leading-relaxed mb-4">
                I own systems end-to-end: RF, protocol, cloud, hardware. Most engineers specialize in one layer. I architect across all of them. This is how you solve real problems.
              </p>
              <p className="text-sm text-primary font-semibold">
                → I ship solutions. Not components.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-3xl font-bold mb-10 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Professional Journey
          </h2>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Solution Introduction Engineer</h3>
                  <p className="text-primary font-semibold">Ericsson Inc., NPI Team (2019–Present)</p>
                </div>
                <span className="text-muted-foreground font-medium">6 years</span>
              </div>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Integrated and tested 4G/5G Cloud RAN systems. Designed AI-assisted testing and troubleshooting workflows using LLM-based agents. Applied domain-driven rules and symbolic reasoning to augment AI decision support for NR feature verification.
              </p>
              <p className="text-sm text-primary font-semibold">
                ✓ Led funded AI initiative (MANA AI Ideation Hackathon)
              </p>
            </div>

            {/* RF Engineering */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">SVCS RF Engineer III</h3>
                  <p className="text-primary font-semibold">Ericsson Inc., RF Design Team (2013–2018)</p>
                </div>
                <span className="text-muted-foreground font-medium">5 years</span>
              </div>
              <p className="text-foreground/75 leading-relaxed">
                RF design, optimization, and performance analysis for LTE, FWA, and early 5G deployments. KPI analysis, simulations, and feature validation for advanced antenna technologies.
              </p>
            </div>

            {/* System Performance */}
            <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">System Performance Engineer</h3>
                  <p className="text-primary font-semibold">Airvana Inc. (2008–2013)</p>
                </div>
                <span className="text-muted-foreground font-medium">5 years</span>
              </div>
              <p className="text-foreground/75 leading-relaxed">
                System-level performance analysis, drive testing, and live-network verification for EVDO/LTE systems. Root-cause analysis across protocol, RF, and hardware layers.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl font-bold mb-10 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay">
              <h3 className="text-xl font-bold text-primary mb-2">PhD in Electrical Engineering</h3>
              <p className="text-foreground/70">University of Massachusetts Lowell</p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay">
              <h3 className="text-xl font-bold text-primary mb-2">M.S. in Electrical Engineering</h3>
              <p className="text-foreground/70">Northeastern University, Boston</p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay">
              <h3 className="text-xl font-bold text-primary mb-2">M.S. in Physics</h3>
              <p className="text-foreground/70">Northeastern University, Boston</p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay">
              <h3 className="text-xl font-bold text-primary mb-2">B.A. in Physics</h3>
              <p className="text-foreground/70">Hebei Normal University, China</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
