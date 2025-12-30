const partners = [
  { name: "شريك 1", logo: "P1" },
  { name: "شريك 2", logo: "P2" },
  { name: "شريك 3", logo: "P3" },
  { name: "شريك 4", logo: "P4" },
  { name: "شريك 5", logo: "P5" },
  { name: "شريك 6", logo: "P6" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-wide">
            شركاؤنا
          </span>
          <h2 className="section-title">شركاؤنا في النجاح</h2>
          <p className="section-subtitle mx-auto">
            نفخر بشراكاتنا مع أفضل العلامات التجارية العالمية في مجال السيارات وقطع الغيار
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 flex items-center justify-center hover-lift hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-orange-600 font-bold text-xl">
                  {partner.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
