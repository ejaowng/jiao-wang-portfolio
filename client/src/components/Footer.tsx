/**
 * Footer Component
 * Design: Organic Modernism - simple, elegant footer with warm tones
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary" style={{ fontFamily: 'var(--font-display)' }}>
              Jiao Wang
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Applied AI & Telecom Systems Expert specializing in 5G, Cloud RAN, and LLM-based agentic solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/about">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  About
                </span>
              </Link>
              <Link href="/projects">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Projects
                </span>
              </Link>
              <Link href="/publications">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Publications
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Contact
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Plano, TX, USA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:jiaowang2010@gmail.com" className="hover:text-primary transition-colors">
                  jiaowang2010@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:469-418-3581" className="hover:text-primary transition-colors">
                  469-418-3581
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jiao Wang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
