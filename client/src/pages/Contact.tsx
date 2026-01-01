/**
 * Contact Page
 * Design: Organic Modernism - warm, inviting contact interface
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 
            className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Open to opportunities in AI Solution Engineering, Applied AI Engineering, and AI Architecture roles
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Contact Information
            </h2>

            <div className="space-y-6 mb-12">
              {/* Email */}
              <div className="bg-card rounded-3xl p-6 shadow-organic texture-overlay">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:jiaowang2010@gmail.com" 
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      jiaowang2010@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-3xl p-6 shadow-organic texture-overlay">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a 
                      href="tel:469-418-3581" 
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      469-418-3581
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card rounded-3xl p-6 shadow-organic texture-overlay">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-foreground/70">
                      6201 Windhaven Parkway, Apt. 3025<br />
                      Plano, TX 75093
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Roles */}
            <div className="bg-primary/5 rounded-3xl p-8 border-l-4 border-primary">
              <h3 
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Target Roles
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI Solution Engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Applied AI Engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI Architect (Telecom / Network Intelligence)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[200px]"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full shadow-organic">
                Send Message
              </Button>
            </form>

            <div className="mt-8 p-6 bg-card rounded-2xl text-center text-sm text-muted-foreground">
              <p>
                You can also reach me directly via email at{" "}
                <a href="mailto:jiaowang2010@gmail.com" className="text-primary hover:underline">
                  jiaowang2010@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
