/**
 * Publications Page
 * Design: Organic Modernism - scholarly presentation with warm, accessible design
 * Focus: Peer-reviewed papers with practical relevance highlighted
 */

import { BookOpen, Calendar } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title: "AI for industrial: automate the network design for 5G URLLC services",
      authors: "Wang, J., Weitzen, J., Bayat, O. et al.",
      journal: "Neural Computing and Applications",
      volume: "36",
      pages: "21623–21645",
      year: "2024",
      description: "This research presents a comprehensive AI-driven approach to automating network design for Ultra-Reliable Low-Latency Communications (URLLC) services in 5G networks. The work demonstrates how machine learning and optimization algorithms can be applied to solve complex network planning challenges, ensuring quality of service requirements for industrial applications.",
      relevance: "Directly applicable to automated network design for mission-critical applications like factory automation and autonomous vehicles.",
      keywords: ["5G", "URLLC", "AI", "Network Design", "Industrial IoT"],
    },
    {
      title: "Performance model for factory automation in 5G networks",
      authors: "Wang, J., Weitzen, J., Bayat, O. et al.",
      journal: "Multimedia Tools and Applications",
      volume: "83",
      pages: "61585–61604",
      year: "2022",
      description: "This paper develops a detailed performance model for factory automation scenarios in 5G networks, addressing the stringent requirements of industrial use cases. The model accounts for latency, reliability, and throughput constraints specific to manufacturing environments, providing insights for network operators and equipment vendors.",
      relevance: "Provides practical frameworks for operators deploying 5G in manufacturing—critical for Industry 4.0 implementations.",
      keywords: ["5G", "Factory Automation", "Performance Modeling", "Industry 4.0"],
    },
    {
      title: "Performance Model for Video Service in 5G Networks",
      authors: "Wang, J; Weitzen, Jay; Bayat, Oguz; Sevindik, Volkan; Li, Mingzhe",
      journal: "Future Internet",
      volume: "12",
      issue: "6",
      pages: "99",
      year: "2020",
      description: "This publication presents a comprehensive performance model for video streaming services over 5G networks. The research analyzes key performance indicators including throughput, latency, and quality of experience metrics, providing a framework for optimizing video delivery in next-generation wireless networks.",
      relevance: "Informs optimization strategies for consumer and enterprise video services—directly applicable to network performance tuning.",
      keywords: ["5G", "Video Streaming", "QoE", "Performance Analysis"],
    },
    {
      title: "Interference coordination for millimeter wave communications in 5G networks for performance optimization",
      authors: "Wang, J., Weitzen, J., Bayat, O. et al.",
      journal: "Journal of Wireless Communications and Networking",
      volume: "2019",
      issue: "46",
      year: "2019",
      description: "This research addresses the critical challenge of interference management in millimeter wave (mmWave) communications for 5G networks. The paper proposes novel interference coordination techniques that optimize network performance while maintaining the high data rates promised by mmWave technology.",
      relevance: "Essential for high-capacity 5G deployments—directly applicable to mmWave network design and optimization.",
      keywords: ["5G", "Millimeter Wave", "Interference Coordination", "Performance Optimization"],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header with background */}
      <section 
        className="relative py-20 mb-16 texture-overlay"
        style={{
          backgroundImage: 'url(/images/publications-accent.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Publications
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Peer-reviewed research on AI-driven network design, performance optimization, and industrial 5G applications. Published in leading journals.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="bg-card rounded-3xl p-10 shadow-organic mb-12 texture-overlay">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h2 
                className="text-3xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Research Focus
              </h2>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My research focuses on the intersection of artificial intelligence and telecommunications, with particular emphasis on applying AI techniques to solve practical challenges in 5G network design, optimization, and performance modeling. The publications below represent peer-reviewed contributions to leading journals, demonstrating thought leadership in applied AI for telecom systems.
            </p>
          </div>

          {/* Publications List */}
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <article 
                key={index}
                className="bg-card rounded-3xl p-10 shadow-organic hover:shadow-lg transition-all duration-300 texture-overlay"
              >
                {/* Publication Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold mb-3 text-foreground leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {pub.title}
                    </h3>
                    <p className="text-foreground/70 mb-2">
                      {pub.authors}
                    </p>
                  </div>
                  <div className="ml-4 flex items-center gap-2 text-primary font-semibold flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                    <span>{pub.year}</span>
                  </div>
                </div>

                {/* Journal Info */}
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-foreground/80">
                    <span className="font-semibold italic">{pub.journal}</span>
                    {pub.volume && <span> {pub.volume}</span>}
                    {pub.issue && <span>, no. {pub.issue}</span>}
                    {pub.pages && <span>: {pub.pages}</span>}
                    <span> ({pub.year})</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {pub.description}
                </p>

                {/* Practical Relevance */}
                <div className="mb-4 p-4 bg-primary/5 rounded-lg border-l-2 border-primary">
                  <p className="text-sm font-semibold text-primary mb-1">Practical Relevance</p>
                  <p className="text-foreground/75 text-sm">{pub.relevance}</p>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((keyword, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Research Impact */}
          <div className="mt-16 bg-primary/5 rounded-3xl p-10 border-l-4 border-primary">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Research Impact
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              These publications demonstrate a consistent research trajectory focused on applying artificial intelligence and machine learning techniques to solve real-world telecommunications challenges. The work spans multiple critical areas of 5G technology, including URLLC services for industrial applications, performance modeling for various service types, and interference management for millimeter wave communications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The research has contributed to the academic understanding of AI applications in telecommunications while also informing practical implementations in industry settings. This combination of theoretical rigor and practical relevance positions the work at the forefront of applied AI research in the telecom domain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
