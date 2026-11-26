/**
 * Projects Page
 * Design: Organic Modernism - detailed project showcases with rich visual backgrounds
 */

import { Calendar, Users, Target, CheckCircle2 } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header with background */}
      <section 
        className="relative py-20 mb-16 texture-overlay"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/projects-background.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Projects
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Applied AI engineering projects combining autonomous reasoning, controlled execution, measurable evaluation and complex systems expertise.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Featured Project: Agentic AI */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="bg-card rounded-3xl overflow-hidden shadow-organic-lg">
            {/* Project Image */}
            <div 
              className="h-80 bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}images/agentic-ai-concept.png)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <div className="inline-block px-4 py-2 bg-primary rounded-full">
                  <span className="text-sm font-semibold text-primary-foreground">Featured Project</span>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-12">
              <h2 
                className="text-4xl font-bold mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Agentic AI — Controlled, Self-Correcting Engineering System
              </h2>
              
              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 mb-8 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>2025 – Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Ericsson Inc.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Funded Initiative</span>
                </div>
              </div>

              {/* Project Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  The Problem
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Complex engineering tests require reliable interpretation of requirements, safe execution, runtime evidence and cross-layer troubleshooting. Unconstrained LLM workflows can omit requirements or produce unsupported conclusions.
                </p>
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  What I Built
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I conceived and secured funding for an agentic AI initiative through the MANA AI Ideation Hackathon. I developed a controlled multi-agent framework spanning requirement authoring, planning, execution, verification, semantic evaluation, analysis, root-cause analysis and reporting. A workflow orchestrator governs transitions and recovery.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Key Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-background rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Controlled Multi-Agent Orchestration</h4>
                      <p className="text-sm text-muted-foreground">
                        Specialized agents translate engineering intent into structured requirements and plans, with deterministic workflow transitions and bounded recovery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-background rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Automated Root-Cause Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        Evidence-driven analysis identifies failures and routes the workflow toward targeted correction and re-execution.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-background rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Independent Evaluation</h4>
                      <p className="text-sm text-muted-foreground">
                        Independent semantic evaluation and deterministic checks assess consistency, evidence completeness and verdict reliability.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-background rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Benchmarking & Episodic Memory</h4>
                      <p className="text-sm text-muted-foreground">
                        Historical run comparison, regression metrics and experience retrieval support measurable improvement and reusable engineering knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Approach */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Technical Approach
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The framework combines flexible LLM reasoning with feature-independent engineering controls:
                </p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Domain Rules Integration:</strong> Domain knowledge guides feature-specific reasoning while reusable validation rules enforce general engineering constraints.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Symbolic Reasoning:</strong> Structured artifacts and deterministic validators support traceable decisions and evidence-based outcomes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Memory and Evaluation:</strong> Episodic retrieval and benchmark comparisons provide foundations for experience-driven improvement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Multi-Agent Coordination:</strong> Designed multiple specialized agents that collaborate to handle different aspects of testing and troubleshooting workflows.</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Ongoing Development</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ["Intelligent Knowledge Retrieval", "Hybrid retrieval, reranking and evaluation of memory usefulness."],
                    ["Adaptive AI", "Context-aware planning strategy selection informed by benchmark outcomes."],
                    ["Self-Learning", "Experience reflection, validated lesson consolidation and controlled knowledge promotion."],
                    ["Cloud-Based AI", "Containerized service architecture, APIs, asynchronous jobs and observability."]
                  ].map(([heading, description]) => (
                    <div key={heading} className="bg-background rounded-2xl p-6">
                      <h4 className="font-semibold mb-2">{heading}</h4>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Impact */}
              <div className="bg-primary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Delivered Results
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Demonstrated end-to-end execution and recovery in engineering test scenarios. Implemented validation gates, independent evaluation, evidence-based verdicts and historical benchmark comparisons to measure workflow quality.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The framework provides a foundation for applying controlled agentic AI to reliability-critical engineering tasks. Quantitative results are omitted here pending verification and approval for public disclosure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Projects */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 
            className="text-4xl font-bold mb-12 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Professional Experience
          </h2>

          {/* Ericsson - Solution Introduction Engineer */}
          <div className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  Solution Introduction Engineer
                </h3>
                <p className="text-lg text-primary font-medium">Ericsson Inc., NPI Team</p>
              </div>
              <div className="text-muted-foreground mt-2 md:mt-0">
                <span className="font-medium">2019 – Present</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  Cloud RAN Integration & Testing
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Owned integration and testing of 4G/5G Cloud RAN systems: VDU, VCU, AAS RU, Kubernetes, OpenShift. Validated virtualized network functions and container orchestration at scale. Deep expertise across the full stack.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  AI-Assisted Testing Workflows
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Designed and developed AI-assisted testing workflows using LLM agents, deterministic validation, evidence-driven analysis and automated recovery. Established benchmarking and episodic memory capabilities to support continuous engineering improvement.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  Feature Verification & Performance Analysis
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Verified Cloud RAN features using UE logs and PM counters. Translated complex performance behaviors into structured inputs for AI analysis. Built methodologies that bridge manual and automated testing. Shipped features faster with higher confidence.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
                  Cross-Functional Collaboration
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  Owned cross-layer problem resolution with PDU, ITTE, Cloud, and AI teams. Root-cause analysis across software, network, and hardware. Structured debugging data for AI pipelines. I bridge the gap between systems engineering and AI.
                </p>
              </div>
            </div>
          </div>

          {/* Ericsson - RF Engineer */}
          <div className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  SVCS RF Engineer III
                </h3>
                <p className="text-lg text-primary font-medium">Ericsson Inc., Engagement Support/RF Design Team</p>
              </div>
              <div className="text-muted-foreground mt-2 md:mt-0">
                <span className="font-medium">Sep. 2013 – 2018</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Owned RF design, optimization, and performance analysis for LTE, FWA, and early 5G across Tier-1 operators. KPI analysis, RF simulations, advanced antenna technologies (beamforming, MU-MIMO). Improved coverage, capacity, and user experience metrics.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Translated RF design into field implementations. Network planning and optimization strategies that shipped at scale.
              </p>
            </div>
          </div>

          {/* Airvana - System Performance Engineer */}
          <div className="bg-card rounded-3xl p-10 shadow-organic texture-overlay">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  System Performance Engineer
                </h3>
                <p className="text-lg text-primary font-medium">Airvana Inc.</p>
              </div>
              <div className="text-muted-foreground mt-2 md:mt-0">
                <span className="font-medium">Sep. 2008 – Sep. 2013</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Owned system-level performance analysis, drive testing, and live-network verification for EVDO and LTE. Root-cause analysis across protocol, RF, and hardware layers.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Implemented optimizations that improved network reliability and user experience. Developed testing methodologies and performance benchmarks that became organizational standards.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
