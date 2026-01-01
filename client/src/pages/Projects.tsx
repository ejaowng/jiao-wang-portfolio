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
          backgroundImage: 'url(/images/projects-background.png)',
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
              Shipped AI initiatives that deliver measurable results. Each case study shows the problem I owned, the system I built, and the impact I delivered.
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
                backgroundImage: 'url(/images/agentic-ai-concept.png)',
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
                Agentic AI for NPI Testing and Troubleshooting
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
                  NPI testing and troubleshooting in Cloud RAN is slow and manual. Engineers spend weeks debugging complex failures. Root-cause analysis requires expertise across RF, protocol, cloud, and hardware layers. We needed to automate this.
                </p>
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  What I Built
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I conceived, secured funding (MANA AI Ideation Hackathon), and shipped an agentic AI system that automates testing and troubleshooting. LLM-based agents reason about test strategies and failures. Domain rules and symbolic logic ensure explainability. The system analyzes logs, traces, and metrics to isolate faults across all layers.
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
                      <h4 className="font-semibold mb-2">Autonomous Test Reasoning</h4>
                      <p className="text-sm text-muted-foreground">
                        Agents that understand test requirements and generate strategies without human input. 40% reduction in manual test design time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-background rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Automated Root-Cause Analysis</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered log and trace analysis that finds root causes in minutes instead of days. 60% improvement in debugging accuracy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-background rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Multi-Layer Fault Isolation</h4>
                      <p className="text-sm text-muted-foreground">
                        Agents that isolate failures across RF, protocol, cloud, and hardware. 50% reduction in MTTR (mean time to resolution).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-background rounded-2xl p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Explainable AI (Hybrid)</h4>
                      <p className="text-sm text-muted-foreground">
                        Domain rules + symbolic logic + ML. Every decision is traceable. This is how you deploy AI in mission-critical systems.
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
                  The project employs a sophisticated hybrid architecture that combines the flexibility of LLMs with the reliability of domain-specific knowledge:
                </p>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Domain Rules Integration:</strong> Embedded telecom-specific rules and protocols to guide AI decision-making and ensure compliance with industry standards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Symbolic Reasoning:</strong> Implemented logical reasoning frameworks to provide explainability and traceability for all AI-driven decisions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Machine Learning Enhancement:</strong> Leveraged ML models to continuously improve pattern recognition and prediction accuracy based on historical data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span><strong>Multi-Agent Coordination:</strong> Designed multiple specialized agents that collaborate to handle different aspects of testing and troubleshooting workflows.</span>
                  </li>
                </ul>
              </div>

              {/* Impact */}
              <div className="bg-primary/5 rounded-2xl p-8 border-l-4 border-primary">
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Delivered Results
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  40% reduction in manual test design time. 60% improvement in debugging accuracy. 50% reduction in MTTR. Reduced NPI testing cycles from weeks to days. This system is now the standard for Cloud RAN testing at Ericsson.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Proof-of-concept for broader AI adoption across telecom engineering. Demonstrated that hybrid AI (domain rules + LLMs) works better than pure ML for mission-critical systems. This is the template for scaling AI in reliability-critical environments.
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
                  Designed and shipped AI-assisted testing workflows using LLM-based agents for automated log/trace analysis, fault isolation, and test reasoning. Hybrid AI approach: domain rules + symbolic logic + ML. Reduced debugging time by 60%, improved accuracy by 40%. This is now the standard for NR feature verification.
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
