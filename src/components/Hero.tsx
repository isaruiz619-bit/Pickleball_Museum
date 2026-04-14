import { motion } from "framer-motion";
import heroCourt from "@/assets/hero-court.jpg";

interface HeroProps {
  onStart: () => void;
}

const Hero = ({ onStart }: HeroProps) => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroCourt} alt="Pickleball court overhead view" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/70" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center flex flex-col items-center pt-32 pb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-body text-[10px] sm:text-xs uppercase tracking-[0.5em] text-secondary mb-6"
      >
        A Digital Museum Experience
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-8xl sm:text-9xl md:text-[10rem] lg:text-[14rem] text-primary-foreground leading-none tracking-wide"
      >
        Pickleball
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mt-6 max-w-2xl leading-relaxed"
      >
        Discover the remarkable journey of a backyard invention that became the fastest-growing sport on Earth
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-body text-sm text-primary-foreground/50 mt-3 italic"
      >
        5 exhibits · 7 milestones · One unforgettable story
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={onStart}
        className="mt-12 px-10 py-4 bg-secondary text-secondary-foreground font-body text-sm uppercase tracking-[0.3em] rounded-sm hover:bg-secondary/90 transition-colors group"
      >
        Start the Experience
        <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
      </motion.button>
    </div>

    {/* Scroll hint */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center pt-1"
      >
        <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
