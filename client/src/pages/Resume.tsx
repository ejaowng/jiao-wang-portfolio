/**
 * Resume Page
 * Design: Organic Modernism - clean, structured resume presentation
 */

import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Resume
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive overview of experience, skills, and qualifications
          </p>
          <Button size="lg" className="shadow-organic" asChild>
            <a href="/Jiao-Wang-Resume.docx" download="Jiao-Wang-Resume.docx">
              <Download className="mr-2 w-5 h-5" />
              Download Resume (DOCX)
            </a>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <section className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <h2 
              className="text-3xl font-bold mb-6 text-primary"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Jiao Wang
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground/80">
              <div>
                <p className="mb-2">
                  <span className="font-semibold">Location:</span> 6201 Windhaven Parkway, Apt. 3025, Plano, TX 75093
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:jiaowang2010@gmail.com" className="text-primary hover:underline">
                    jiaowang2010@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:469-418-3581" className="text-primary hover:underline">
                    469-418-3581
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <h2 
              className="text-2xl font-bold mb-4 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Briefcase className="w-7 h-7 text-primary" />
              Professional Summary
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Senior Solution Introduction and Integration Engineer with 18+ years of experience in wireless and cloud-native telecom systems, specializing in 5G and Cloud RAN. Hands-on experience applying Generative AI and LLM-based agents to testing, troubleshooting, log/trace analysis, and workflow automation using hybrid approaches combining domain rules, symbolic reasoning, and machine learning. Strong at translating complex network behavior into scalable, AI-assisted solutions and collaborating across RF, RAN, cloud, and software teams. Focused on applied AI solution engineering roles leveraging deep telecom and cloud systems expertise.
            </p>
          </section>

          {/* Recent Achievements */}
          <section className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <h2 
              className="text-2xl font-bold mb-4 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Award className="w-7 h-7 text-primary" />
              Recent Achievements
            </h2>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  Conceived and led the AI initiative "Agentic AI for NPI Testing and Troubleshooting," selected by the MANA AI Ideation Hackathon, securing budget support from MACS NTW Technology Operations and AI teams, and managing end-to-end execution.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span>
                  Published peer-reviewed research on applied AI in 5G networks, including "AI for Industry: Automating Network Design for 5G URLLC Services" (Neural Computing and Applications, 2024).
                </span>
              </li>
            </ul>
          </section>

          {/* Professional Experience */}
          <section className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <h2 
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Briefcase className="w-7 h-7 text-primary" />
              Professional Experience
            </h2>

            {/* Ericsson - Current */}
            <div className="mb-8 pb-8 border-b border-border last:border-0 last:pb-0 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold">Solution Introduction Engineer</h3>
                  <p className="text-primary font-medium">Ericsson Inc., NPI Team</p>
                </div>
                <span className="text-muted-foreground font-medium">2019 – Present</span>
              </div>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Participated in the integration and testing of 4G/5G Cloud RAN systems, focusing on VDU, VCU, AAS RU, and cloud-native deployments on Kubernetes/OpenShift.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Designed and prototyped AI-assisted testing and troubleshooting workflows, applying LLM-based agents to automate log/trace analysis, fault isolation, and test-case reasoning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Applied domain-driven rules and symbolic reasoning to augment AI-based decision support for NR feature verification, improving debugging efficiency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Verified CRAN features using UE logs and PM counters, translating performance behaviors into structured inputs for automation and AI analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Collaborated with PDU, ITTE, Cloud, and AI teams to resolve cross-layer issues spanning software, network, and hardware.</span>
                </li>
              </ul>
            </div>

            {/* Ericsson - RF Engineer */}
            <div className="mb-8 pb-8 border-b border-border last:border-0 last:pb-0 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold">SVCS RF Engineer III</h3>
                  <p className="text-primary font-medium">Ericsson Inc., Engagement Support/RF Design Team</p>
                </div>
                <span className="text-muted-foreground font-medium">Sep. 2013 – 2018</span>
              </div>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Participated in the RF design, optimization, and performance analysis for LTE, FWA, and early 5G deployments across Tier-1 operators.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Performed KPI analysis, RF simulations, and feature validation (beamforming, MU-MIMO) for 4G/5G wireless systems.</span>
                </li>
              </ul>
            </div>

            {/* Airvana */}
            <div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold">System Performance Engineer</h3>
                  <p className="text-primary font-medium">Airvana Inc.</p>
                </div>
                <span className="text-muted-foreground font-medium">Sep. 2008 – Sep. 2013</span>
              </div>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Conducted system-level performance analysis, drive testing, and live-network verification for EVDO/LTE systems.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Identified root causes across protocol, RF, and hardware layers and collaborated with design teams to improve system performance.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <h2 
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Code className="w-7 h-7 text-primary" />
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">AI & Automation</h3>
                <ul className="space-y-1 text-foreground/80">
                  <li>• Generative AI, LLM-based Agents</li>
                  <li>• Agentic AI Concepts</li>
                  <li>• AI-assisted Testing & Troubleshooting</li>
                  <li>• Rule-based Reasoning, Symbolic AI</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">5G & Wireless Systems</h3>
                <ul className="space-y-1 text-foreground/80">
                  <li>• 5G NR, Cloud RAN (CRAN)</li>
                  <li>• VDU, VCU, VPP, VRC</li>
                  <li>• NR Feature Verification</li>
                  <li>• PM Counters, UE Log Analysis</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Cloud & Platforms</h3>
                <ul className="space-y-1 text-foreground/80">
                  <li>• Kubernetes, RedHat OpenShift</li>
                  <li>• Cloud-Native Architecture</li>
                  <li>• Virtualized RAN</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Operating Systems & Tools</h3>
                <ul className="space-y-1 text-foreground/80">
                  <li>• Linux (RedHat, Wind River)</li>
                  <li>• Integration & NPI Testing Frameworks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="bg-card rounded-3xl p-10 shadow-organic mb-8 texture-overlay">
            <h2 
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <GraduationCap className="w-7 h-7 text-primary" />
              Education
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold">PhD in Electrical Engineering</h3>
                <p className="text-foreground/70">University of Massachusetts Lowell, Lowell, MA</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">M.S. in Electrical Engineering</h3>
                <p className="text-foreground/70">Northeastern University, Boston, MA</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">M.S. in Physics</h3>
                <p className="text-foreground/70">Northeastern University, Boston, MA</p>
              </div>
              <div>
                <h3 className="text-lg font-bold">B.A. in Physics</h3>
                <p className="text-foreground/70">Hebei Normal University, China</p>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="bg-card rounded-3xl p-10 shadow-organic texture-overlay">
            <h2 
              className="text-2xl font-bold mb-6 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Selective Recent Publications
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                Wang, J., Weitzen, J., Bayat, O. et al. AI for industrial: automate the network design for 5G URLLC services. <span className="italic">Neural Comput & Applic</span> 36, 21623–21645 (2024).
              </p>
              <p className="leading-relaxed">
                Wang, J., Weitzen, J., Bayat, O. et al. Performance model for factory automation in 5G networks. <span className="italic">Multimed Tools Appl</span> 83, 61585–61604 (2022).
              </p>
              <p className="leading-relaxed">
                Wang, J; Weitzen, Jay; Bayat, Oguz; Sevindik, Volkan; Li, Mingzhe. (2020). "Performance Model for Video Service in 5G Networks" <span className="italic">Future Internet</span> 12, no. 6: 99.
              </p>
              <p className="leading-relaxed">
                Wang, J., Weitzen, J., Bayat, O. et al. Interference coordination for millimeter wave communications in 5G networks for performance optimization. <span className="italic">J Wireless Com Network</span> 2019, 46 (2019).
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
