import { Car, Wrench, Truck, Shield, Clock, Headphones } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "استيراد السيارات",
    description: "نستورد أحدث موديلات السيارات من أفضل المصنعين العالميين بضمان الجودة والأصالة",
  },
  {
    icon: Wrench,
    title: "استيراد قطع الغيار",
    description: "قطع غيار أصلية ومعتمدة لجميع أنواع السيارات بأسعار تنافسية",
  },
  {
    icon: Truck,
    title: "التوزيع داخل ليبيا",
    description: "شبكة توزيع واسعة تغطي جميع مناطق ليبيا مع خدمة توصيل سريعة",
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "نضمن جودة جميع منتجاتنا مع خدمة ما بعد البيع المتميزة",
  },
  {
    icon: Clock,
    title: "خدمة سريعة",
    description: "التزام تام بالمواعيد وسرعة في تنفيذ الطلبات وتسليمها",
  },
  {
    icon: Headphones,
    title: "دعم فني متخصص",
    description: "فريق دعم فني متخصص لمساعدتك في اختيار المنتج المناسب",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-wide">
            خدماتنا
          </span>
          <h2 className="section-title">ما نقدمه لكم</h2>
          <p className="section-subtitle mx-auto">
            مجموعة متكاملة من الخدمات لتلبية جميع احتياجاتكم من السيارات وقطع الغيار
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover-lift hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-orange-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
