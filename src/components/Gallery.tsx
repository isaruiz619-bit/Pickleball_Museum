import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1626178793599-6d59b9b4a95e?auto=format&fit=crop&w=600&q=80", alt: "Pickleball action shot 1" },
  { src: "https://images.unsplash.com/photo-1626178793463-61f9c0eec220?auto=format&fit=crop&w=600&q=80", alt: "Pickleball paddle close-up" },
  { src: "https://images.unsplash.com/photo-1626178793152-43b1d8d26e9d?auto=format&fit=crop&w=600&q=80", alt: "Pickleball court overhead" },
  { src: "https://images.unsplash.com/photo-1643824346204-1a9c6c7cdbd3?auto=format&fit=crop&w=600&q=80", alt: "Pickleball community" },
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
