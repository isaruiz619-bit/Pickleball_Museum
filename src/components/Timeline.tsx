import { motion } from "framer-motion";

const milestones = [
  { year: "1965", title: "The Invention", desc: "Joel Pritchard, Bill Bell, and Barney McCallum create pickleball on Bainbridge Island, Washington." },
  { year: "1972", title: "First Corporation", desc: "Pickle-Ball, Inc. is formed to protect and promote the growing sport." },
  { year: "1976", title: "First Tournament", desc: "The first known pickleball tournament is held at South Center Athletic Club in Tukwila, Washington." },
  { year: "1984", title: "USAPA Founded", desc: "The USA Pickleball Association is established to govern and grow the sport nationally." },
  { year: "2005", title: "Going National", desc: "Pickleball is played in all 50 U.S. states, with thousands of active players joining leagues and clubs." },
  { year: "2021", title: "Fastest Growing Sport", desc: "Pickleball is named the fastest-growing sport in America for the second consecutive year." },
  { year: "2024", title: "Global Expansion", desc: "Professional leagues, celebrity endorsements, and international federations bring pickleball to the world stage." },
];

const Timeline = () => (
  <section id="timeline" className="py-24 md:py-32 bg-muted">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-3">Milestones</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary">The Timeline</h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`relative flex items-start mb-14 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-secondary rounded-full -translate-x-1.5 mt-2 z-10" />

            {/* Card */}
            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
              i % 2 === 0 ? "md:pr-0 md:mr-auto md:text-right" : "md:pl-0 md:ml-auto md:text-left"
            }`}>
              <span className="font-display text-3xl text-secondary">{m.year}</span>
              <h3 className="font-display text-xl text-primary mt-1 mb-2">{m.title}</h3>
              <p className="font-body text-foreground/70 leading-relaxed text-sm md:text-base">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
