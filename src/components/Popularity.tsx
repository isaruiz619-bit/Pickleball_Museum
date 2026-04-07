import { motion } from "framer-motion";
import popularityImg from "@/assets/popularity-pickleball.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Popularity = () => (
  <section id="popularity" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-3">Today</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary">A Cultural Phenomenon</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1643824346204-1a9c6c7cdbd3?auto=format&fit=crop&w=800&q=80"
              alt="Pickleball popularity today"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">More Than a Sport</h3>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
            With over 36 million players in the United States alone, pickleball has transcended its humble origins. Cities are converting tennis courts, dedicated facilities are being built, and professional leagues like Major League Pickleball attract top athletes and celebrity investors.
          </p>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            The sport's inclusivity—welcoming players of all ages, skill levels, and backgrounds—has made it a cornerstone of community recreation. From retirement communities to college campuses, pickleball brings people together.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        {[
          { stat: "36.5M", label: "U.S. Players" },
          { stat: "158%", label: "Growth (3 yr)" },
          { stat: "10,000+", label: "Courts Built" },
          { stat: "70+", label: "Countries" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <span className="font-display text-3xl md:text-5xl text-secondary">{s.stat}</span>
            <p className="font-body text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Popularity;
