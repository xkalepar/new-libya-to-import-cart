import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Phone,
    label: "مفوض",
    value: "0913306829",
    href: "tel:0913306829",
    highlight: true,
  },
  {
    icon: Phone,
    label: "مندوب",
    value: "0922230070",
    href: "tel:0922230070",
    highlight: false,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-wide">
            تواصل معنا
          </span>
          <h2 className="section-title">نحن هنا لخدمتكم</h2>
          <p className="section-subtitle mx-auto">
            تواصل معنا للاستفسار عن منتجاتنا وخدماتنا أو لطلب عرض أسعار
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone Cards */}
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg p-8 text-center hover-lift transition-all duration-300 ${
                contact.highlight
                  ? "bg-gradient-to-br from-orange-500 to-orange-600 text-primary-foreground"
                  : "bg-card border border-border"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${
                  contact.highlight
                    ? "bg-primary-foreground/20"
                    : "bg-primary/10"
                }`}
              >
                <contact.icon
                  className={`w-8 h-8 ${
                    contact.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </div>
              <div
                className={`text-sm font-medium mb-2 ${
                  contact.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {contact.label}
              </div>
              <div
                className={`text-2xl font-bold mb-6 ${
                  contact.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
                dir="ltr"
              >
                {contact.value}
              </div>
              <a href={contact.href}>
                <Button
                  variant={contact.highlight ? "heroOutline" : "default"}
                  className="w-full"
                >
                  اتصل الآن
                </Button>
              </a>
            </div>
          ))}

          {/* Location Card */}
          <div className="bg-card border border-border rounded-lg p-8 text-center hover-lift transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <div className="text-sm font-medium text-muted-foreground mb-2">
              الموقع
            </div>
            <div className="text-lg font-bold text-foreground mb-6">
              ليبيا
            </div>
            <a
              href="https://maps.app.goo.gl/zCaGYNFgpciR8b1e9?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                <MapPin className="w-4 h-4" />
                عرض على الخريطة
              </Button>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-muted rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground">ساعات العمل</div>
              <div className="text-muted-foreground text-sm">
                السبت - الخميس: 9:00 صباحاً - 6:00 مساءً
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-muted rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground">السجل التجاري</div>
              <div className="text-muted-foreground text-sm" dir="ltr">
                22-08-0077
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
