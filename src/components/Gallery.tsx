import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Pickleball balls and paddle on court" },
  { src: gallery2, alt: "Family playing pickleball in backyard" },
  { src: gallery3, alt: "Professional pickleball player in action" },
  { src: gallery4, alt: "Indoor pickleball facility with multiple courts" },
];

const Gallery = () => (
  <section id="gallery" className="py-24 md:py-32 bg-muted">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-3">Visual Archive</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary">Gallery</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group aspect-[4/3] rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
