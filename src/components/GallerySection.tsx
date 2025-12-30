import { useState } from "react";
import heroImage from "@/assets/hero-cars.jpg";
import sparePartsImage from "@/assets/spare-parts.jpg";
import showroomImage from "@/assets/showroom.jpg";
import logisticsImage from "@/assets/logistics.jpg";
import workshopImage from "@/assets/workshop.jpg";
import car1Image from "@/assets/car-1.jpg";
import car2Image from "@/assets/car-2.jpg";
import car3Image from "@/assets/car-3.jpg";

const galleryImages = [
  { src: heroImage, alt: "معرض السيارات الفاخرة" },
  { src: sparePartsImage, alt: "قطع الغيار الأصلية" },
  { src: showroomImage, alt: "صالة العرض" },
  { src: logisticsImage, alt: "عمليات الشحن والاستيراد" },
  { src: workshopImage, alt: "ورشة الصيانة" },
  { src: car1Image, alt: "سيارة سيدان فاخرة" },
  { src: car2Image, alt: "سيارة SUV" },
  { src: car3Image, alt: "سيارة رياضية" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-muted">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm mb-4 tracking-wide">
            معرض الصور
          </span>
          <h2 className="section-title">اكتشف معرضنا</h2>
          <p className="section-subtitle mx-auto">
            لقطات من سياراتنا ومنتجاتنا وخدماتنا المتميزة
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="صورة مكبرة"
              className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            />
            <button
              className="absolute top-4 left-4 text-primary-foreground text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
