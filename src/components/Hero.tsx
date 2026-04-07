import { motion } from "framer-motion";
import heroCourt from "@/assets/hero-court.jpg";

const Hero = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroCourt}
          alt="Pickleball court overhead view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center flex flex-col items-center pt-32 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-primary-foreground leading-none tracking-wide"
        >
          Pickleball
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mt-6 max-w-2xl leading-relaxed"
        >
          The story of pickleball from backyard beginnings to worldwide popularity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <button
            onClick={() => scrollTo("#history")}
            className="px-8 py-3 bg-secondary text-secondary-foreground font-body text-sm uppercase tracking-widest rounded-sm hover:bg-orange-light transition-colors"
          >
            EXPLORE HISTORY
          </button>
          <button
            onClick={() => scrollTo("#gallery")}
            className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body text-sm uppercase tracking-widest rounded-sm hover:bg-primary-foreground/10 transition-colors"
          >
            VIEW GALLERY
          </button>
        </motion.div>

        {/* Hero image card */}
      </div>
    </section>
  );
};

export default Hero;
