import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-linear-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 font-bold text-lg">
                LCA
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering businesses with expert insights and tailored solutions
              for sustainable growth.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-orange-500 p-2 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Team", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Business Strategy",
                "Team Development",
                "Analytics",
                "Corporate Solutions",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                <p className="text-gray-400">
                  123 Business Avenue
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                <a
                  href="mailto:info@lca.com"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  info@lca.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 LCA Consulting. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
