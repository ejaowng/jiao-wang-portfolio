/**
 * Home Page - Executive Pitch
 * Design: Organic Modernism - warm, inviting, professional
 * Purpose: Answer "Why should I hire this person?" in 10 seconds
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Network } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Hero Section - The Pitch */}
      <section className="relative overflow-hidden mb-24">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sand/80 via-sand/70 to-sand/60" />
        
        <div className="relative container py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* One-line Headline */}
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              AI Solution Engineer for 5G, Cloud RAN & Network Automation
            </h1>

            {/* Value Proposition Paragraph */}
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              18+ years architecting and deploying mission-critical telecom systems. I own end-to-end <span className="font-semibold text-primary">AI-driven solutions</span>—from design through production—using LLM-based agents for intelligent automation, fault isolation, and system optimization. Proven track record scaling AI initiatives in complex network environments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-forest hover:bg-forest/90 text-white shadow-lg" asChild>
                <Link href="/projects">
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-forest text-forest hover:bg-forest/5 shadow-lg" asChild>
                <Link href="/resume">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars - Why Hire Me */}
      <section className="container mb-24">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why I'm Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: AI Expertise */}
            <div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 
                className="text-2xl font-bold text-center mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Applied AI Systems
              </h3>
              <p className="text-center text-foreground/75 leading-relaxed">
                LLM-based agents, agentic reasoning, hybrid AI (domain rules + symbolic logic + ML). I ship production systems that solve real problems—not research projects.
              </p>
            </div>

            {/* Pillar 2: Telecom Systems */}
            <div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <h3 
                className="text-2xl font-bold text-center mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Systems Architecture
              </h3>
              <p className="text-center text-foreground/75 leading-relaxed">
                5G NR, Cloud RAN, virtualized infrastructure, Kubernetes. I architect systems that scale—across RF, protocol, cloud, and hardware layers.
              </p>
            </div>

            {/* Pillar 3: End-to-End Ownership */}
            <div className="bg-card rounded-3xl p-8 shadow-organic texture-overlay hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 mx-auto">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 
                className="text-2xl font-bold text-center mb-4 text-foreground"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Full Ownership
              </h3>
              <p className="text-center text-foreground/75 leading-relaxed">
                I own initiatives end-to-end: concept through production. Led funded AI programs. Published peer-reviewed research. Delivered results at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="container mb-24">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-lg"
            style={{
              backgroundImage: 'url(/images/projects-background.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/80 to-forest/70" />
            
            <div className="relative p-12 md:p-16 text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold text-white">Featured Initiative</span>
              </div>

              <h3 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Agentic AI for NPI Testing & Troubleshooting
              </h3>

              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
                Conceived, secured funding, and shipped an AI initiative selected by the MANA AI Ideation Hackathon. Built and deployed LLM-based agents that automate testing, log analysis, and fault isolation across Cloud RAN systems—reducing debugging time and improving accuracy at scale.
              </p>

              <Button size="lg" className="bg-white text-forest hover:bg-white/90" asChild>
                <Link href="/projects">
                  Read Full Case Study
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="container mb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-card rounded-2xl p-8 shadow-organic texture-overlay">
              <div className="text-4xl font-bold text-primary mb-2">18+</div>
              <p className="text-foreground/70">Years in Telecom</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-organic texture-overlay">
              <div className="text-4xl font-bold text-primary mb-2">4</div>
              <p className="text-foreground/70">Peer-Reviewed Papers</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-organic texture-overlay">
              <div className="text-4xl font-bold text-primary mb-2">PhD</div>
              <p className="text-foreground/70">Electrical Engineering</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-organic texture-overlay">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <p className="text-foreground/70">Systems Thinking</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="max-w-4xl mx-auto bg-forest rounded-3xl p-12 md:p-16 text-white text-center shadow-lg">
          <h2 
            className="text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Scale AI in Your Network
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Seeking AI Solution Engineer or AI Architect roles where I can architect and deploy intelligent systems at scale. Telecom, network infrastructure, or mission-critical systems.
          </p>
          <Button size="lg" className="bg-white text-forest hover:bg-white/90" asChild>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
