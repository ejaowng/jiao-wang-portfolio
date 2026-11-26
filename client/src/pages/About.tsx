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
            Applied AI Engineering with a Systems Reliability Mindset
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            18+ years of engineering complex telecom systems, combined with hands-on development of controlled, self-correcting agentic AI workflows.
          </p>
        </div>

        {/* The Transition: Why This Makes Sense */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 
            className="text-3xl font-bold mb-10 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Engineering Foundations for Reliable AI
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
                  <span className="text-foreground/80">Multi-agent orchestration and finite-state workflow control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Hybrid AI, deterministic validation and structured reasoning</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">Independent semantic evaluation and evidence-based verdicts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">AI benchmarking, episodic memory and automated recovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-sage/10 border-l-4 border-sage rounded-lg p-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              <span className="font-semibold">Why this matters:</span> Complex engineering systems demand controlled execution, observable evidence and recovery from failures. I apply these principles to AI workflows so that autonomous reasoning remains bounded by verifiable engineering constraints.
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
                → Design for dependencies, failure modes and recovery.
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
                → Evidence-driven decisions and controlled recovery.
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

        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)' }}>AI Engineering Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              ["Agentic AI Architecture", "Multi-agent workflows, FSM orchestration, structured outputs and controlled iteration."],
              ["AI Reliability & Evaluation", "Deterministic gates, independent semantic evaluation, evidence completeness and regression benchmarking."],
              ["Memory & Knowledge", "Episodic memory retrieval implemented; intelligent retrieval, reranking and knowledge consolidation are development directions."],
              ["Adaptive AI & Self-Learning", "Ongoing work on strategy selection, experience reflection and validated knowledge reuse."],
              ["Cloud-Native AI", "Kubernetes and OpenShift systems experience; developing containerized AI services, APIs and job management."],
              ["Applied Systems Engineering", "Python-based automation, cross-layer troubleshooting, performance analysis and engineering research."]
            ].map(([heading, description]) => (
              <div key={heading} className="bg-card rounded-3xl p-8 shadow-organic texture-overlay">
                <h3 className="text-xl font-bold text-primary mb-3">{heading}</h3>
                <p className="text-foreground/75 leading-relaxed">{description}</p>
              </div>
            ))}
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
                <span className="text-muted-foreground font-medium">2019–Present</span>
              </div>
              <p className="text-foreground/75 leading-relaxed mb-4">
                Integrated and tested 4G/5G Cloud RAN systems and developed a multi-agent AI framework with deterministic workflow control, independent evaluation, automated RCA, benchmarking and episodic memory retrieval.
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
