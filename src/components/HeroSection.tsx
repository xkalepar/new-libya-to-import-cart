import { ArrowLeft, Car, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cars.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="معرض السيارات"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8">
            <Car className="h-5 w-5 text-primary" />
            <span className="text-primary-foreground text-sm font-medium">
              منذ عام 2022
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            الليبية الجديدة
            <span className="block text-primary mt-2">
              لإستيراد السيارات وقطع الغيار
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            شركة الليبية الجديدة لاستيراد السيارات وقطع الغيار، تعمل منذ عام 2022
            في مجال استيراد السيارات وقطع الغيار، ولديها نقاط بيع منتشرة في جميع
            ربوع ليبيا.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services">
              <Button variant="hero" size="xl">
                <Wrench className="h-5 w-5" />
                خدماتنا
              </Button>
            </a>
            <a href="#contact">
              <Button variant="heroOutline" size="xl">
                تواصل معنا
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 pb-2 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                +3
              </div>
              <div className="text-sm text-primary-foreground/70">
                سنوات من الخبرة
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                +100
              </div>
              <div className="text-sm text-primary-foreground/70">
                نقطة بيع في ليبيا
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                +1000
              </div>
              <div className="text-sm text-primary-foreground/70">
                عميل راضٍ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default HeroSection;
