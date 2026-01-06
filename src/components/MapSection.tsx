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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.5222536751767!2d20.131530599999998!3d32.0009641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13831b0077d27b27%3A0x80b9c8cbc6609f2a!2z2LrYsdi62KfYsSDZhNmE2KfYs9iq2KvZhdin2LEg2KfZhNiy2LHYp9i52YogLSBHaGFyZ3JvdyBBZ3JvLUluZHVzdHJpZXM!5e0!3m2!1sen!2sly!4v1767687097226!5m2!1sen!2sly"
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
