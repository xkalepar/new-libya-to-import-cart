import { Award, CheckCircle, MapPin, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "الخبرة",
    description: "خبرة متراكمة في مجال استيراد السيارات وقطع الغيار منذ عام 2022",
  },
  {
    icon: CheckCircle,
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا",
  },
  {
    icon: MapPin,
    title: "الانتشار",
    description: "نقاط بيع منتشرة في جميع أنحاء ليبيا لخدمتكم أينما كنتم",
  },
  {
    icon: ThumbsUp,
    title: "الموثوقية",
    description: "علاقات طويلة الأمد مبنية على الثقة والمصداقية مع عملائنا",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-wide">
              لماذا نحن
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              لماذا تختار
              <span className="block text-primary mt-2">الليبية الجديدة؟</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-8">
              نحن نسعى دائماً لتقديم أفضل الخدمات والمنتجات لعملائنا الكرام، مع
              الحرص على بناء علاقات طويلة الأمد مبنية على الثقة والمصداقية.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary-foreground/5 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">+500</div>
                <div className="text-secondary-foreground/70 text-sm">سيارة مستوردة</div>
              </div>
              <div className="bg-secondary-foreground/5 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">+10K</div>
                <div className="text-secondary-foreground/70 text-sm">قطعة غيار</div>
              </div>
            </div>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-card rounded-lg p-6 hover-lift transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
