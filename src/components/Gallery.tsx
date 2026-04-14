import { motion } from "framer-motion";
import ExhibitHeader from "./ExhibitHeader";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Pickleball equipment close-up on court", caption: "The tools of the trade — modern paddles and balls have come a long way from wooden planks and wiffle balls" },
  { src: gallery2, alt: "Pickleball court in a residential setting", caption: "Backyard courts echo the sport's origins — a game designed for family, played where families gather" },
  { src: gallery3, alt: "Professional pickleball player mid-action", caption: "Elite athletes now dedicate their careers to mastering the game's deceptive complexity" },
  { src: gallery4, alt: "Multi-court indoor pickleball facility", caption: "Purpose-built facilities with dozens of courts are reshaping recreational infrastructure across the country" },
];

const Gallery = () => (
  <section id="exhibit-4" className="py-24 md:py-32 bg-muted scroll-mt-16">
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <ExhibitHeader
        number={4}
        label="Visual Archive"
        title="The Gallery"
        hook="A sport tells its story through its spaces, its people, and its energy. Explore the visual world of pickleball."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="group aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="font-body text-xs text-muted-foreground mt-3 italic text-center leading-relaxed px-2">
              {img.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
