import React, { useState } from "react";
import { Button } from "./Button";
import { ContactFormData } from "../../types";
import {
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Twitter,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// Custom TikTok Icon since it might vary in Lucide versions or availability
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Social Media Links Configuration
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "TikTok", icon: TikTokIcon, href: "https://tiktok.com" },
    { name: "Twitter", icon: Twitter, href: "https://x.com" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // IMPORT WEB3FORMS ACCESS KEY
      // You can get one at https://web3forms.com/
      const ACCESS_KEY = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Website Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ email: "", subject: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.message || "Failed to send message. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden bg-dark-900"
    >
      {/* Background Effects simulating the moody image inspiration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <h4 className="text-brand font-semibold tracking-wider uppercase text-sm">
              Get in Touch
            </h4>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Let's Start a <br />
              Conversation.
            </h2>
            <p className="text-gray-400 text-lg max-w-md pt-4 leading-relaxed">
              Have a project in mind or just want to say hello? We are always
              open to discussing new projects, creative ideas or opportunities
              to be part of your visions.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-dark-800 border border-gray-800 flex items-center justify-center group-hover:border-brand/50 transition-colors duration-300">
                <Phone className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Us</p>
                <a
                  href="tel:+254715406661"
                  className="text-lg font-medium text-white hover:text-brand transition-colors"
                >
                  +254 715 406661
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-dark-800 border border-gray-800 flex items-center justify-center group-hover:border-brand/50 transition-colors duration-300">
                <Mail className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <a
                  href="mailto:hello@example.com"
                  className="text-lg font-medium text-white hover:text-brand transition-colors"
                >
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-full bg-dark-800 border border-gray-800 flex items-center justify-center group-hover:border-brand/50 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-4">
              Follow our social media
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-black hover:border-brand transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex items-center justify-center w-full">
          <div className="w-full bg-dark-800/50 backdrop-blur-xl border border-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl relative group">
            {/* Decorative Form Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-brand/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />

            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-dark-900/50 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-dark-900/50 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-900/50 border border-gray-700 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Status Messages */}
                {status === "error" && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === "success" && (
                  <div className="flex items-center space-x-2 text-brand bg-brand/10 p-3 rounded-lg text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    label={status === "loading" ? "Sending..." : "Send Message"}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
