import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="الليبية الجديدة"
                className="h-14 w-auto object-contain bg-secondary-foreground/10 rounded-lg p-1"
              />
          
            </div>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6 max-w-md">
              شركة الليبية الجديدة لاستيراد السيارات وقطع الغيار، تعمل منذ عام
              2022 في مجال استيراد السيارات وقطع الغيار، ولديها نقاط بيع منتشرة
              في جميع ربوع ليبيا.
            </p>
            <div className="text-sm text-secondary-foreground/60">
              السجل التجاري: <span dir="ltr">22-08-0077</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "#hero" },
                { label: "من نحن", href: "#about" },
                { label: "خدماتنا", href: "#services" },
                { label: "معرض الصور", href: "#gallery" },
                { label: "تواصل معنا", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a
                    href="tel:0913306829"
                    className="text-secondary-foreground hover:text-primary transition-colors"
                    dir="ltr"
                  >
                    0913306829
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a
                    href="tel:0922230070"
                    className="text-secondary-foreground hover:text-primary transition-colors"
                    dir="ltr"
                  >
                    0922230070
                  </a>
                </div>
              
              </li>
                <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a
                    href="mailto:info@nlicsp.ly"
                    className="text-secondary-foreground hover:text-primary transition-colors"
                    dir="ltr"
                  >
                    info@nlicsp.ly
                  </a>
                </div>
              
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/zCaGYNFgpciR8b1e9?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground hover:text-primary transition-colors"
                  >
                    ليبيا
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-secondary-foreground/60">
              جميع الحقوق محفوظة © {currentYear} الليبية الجديدة لإستيراد السيارات وقطع الغيار
            </div>
            <div className="text-sm text-secondary-foreground/60">
              تصميم وتنفيذ:{" "}
              <a
                href="https://mnfd.ly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-orange-400 transition-colors font-medium"
              >
                mnfd.ly
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
