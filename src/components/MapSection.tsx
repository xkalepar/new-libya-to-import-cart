const MapSection = () => {
  return (
    <section id="map" className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-wide">
            موقعنا
          </span>
          <h2 className="section-title">زوروا موقعنا</h2>
          <p className="section-subtitle mx-auto">
            يسعدنا استقبالكم في مقرنا الرئيسي
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-strong">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.0!2d20.0661!3d32.1165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA2JzU5LjQiTiAyMMKwMDMnNTcuOSJF!5e0!3m2!1sen!2sly!4v1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="موقع الشركة"
          />
          
          {/* Overlay with Link */}
          <a
            href="https://maps.app.goo.gl/78uzYfFhnbxmfKeUA"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-medium hover:bg-orange-600 transition-colors font-medium"
          >
            فتح في خرائط جوجل
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
