import showroomImage from "@/assets/showroom.jpg";
import logisticsImage from "@/assets/logistics.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-wide">
              من نحن
            </span>
            <h2 className="section-title">
              الليبية الجديدة
              <span className="block text-primary">لإستيراد السيارات</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              شركة الليبية الجديدة لاستيراد السيارات وقطع الغيار، تعمل منذ عام
              2022 في مجال استيراد السيارات وقطع الغيار، ولديها نقاط بيع منتشرة
              في جميع ربوع ليبيا.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              نحرص على تقديم أفضل المركبات والقطع ذات الجودة العالية بأسعار
              تنافسية، مع ضمان خدمة عملاء متميزة ودعم فني متخصص على مدار الساعة.
            </p>

            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">جودة عالية</div>
                  <div className="text-sm text-muted-foreground">منتجات موثوقة</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">أسعار منافسة</div>
                  <div className="text-sm text-muted-foreground">أفضل العروض</div>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <img
                src={showroomImage}
                alt="معرض السيارات"
                className="w-full h-80 lg:h-96 object-cover rounded-lg shadow-strong"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 lg:w-64 lg:h-64 rounded-lg overflow-hidden shadow-strong border-4 border-background">
                <img
                  src={logisticsImage}
                  alt="الاستيراد والشحن"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
