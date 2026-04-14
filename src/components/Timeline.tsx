import { motion } from "framer-motion";
import ExhibitHeader from "./ExhibitHeader";

const milestones = [
  {
    year: "1965",
    title: "The Invention",
    desc: "On a quiet Saturday on Bainbridge Island, three fathers improvise a game that will eventually captivate millions. No one knows it yet—but a sport is born.",
  },
  {
    year: "1972",
    title: "The First Corporation",
    desc: "Seven years of backyard play proves this is more than a fad. Pickle-Ball, Inc. is formed to protect the rules, standardize equipment, and give the sport a formal identity.",
  },
  {
    year: "1976",
    title: "The First Tournament",
    desc: "The South Center Athletic Club in Tukwila, Washington hosts the first known pickleball tournament. Competitive play begins, and with it, a community.",
  },
  {
    year: "1984",
    title: "USAPA Founded",
    desc: "The USA Pickleball Association is established, creating a governing body to expand the sport nationally. Official rules are codified and distributed for the first time.",
  },
  {
    year: "2005",
    title: "Coast to Coast",
    desc: "Pickleball reaches all 50 U.S. states. Thousands of players join leagues and clubs. What was once a Pacific Northwest curiosity becomes a national pastime.",
  },
  {
    year: "2021",
    title: "Fastest Growing Sport",
    desc: "For the second consecutive year, pickleball is named the fastest-growing sport in America. Participation surges past 4.8 million players as courts multiply across the country.",
  },
  {
    year: "2024",
    title: "Global Phenomenon",
    desc: "Professional leagues attract celebrity investors. International federations emerge on every continent. Pickleball is no longer just American—it belongs to the world.",
  },
];

const Timeline = () => (
  <section id="exhibit-2" className="py-24 md:py-32 bg-muted scroll-mt-16">
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <ExhibitHeader
        number={2}
        label="Milestones"
        title="The Timeline"
        hook="Every great movement has its turning points. Discover the moments that shaped pickleball's rise."
      />

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
            className={`relative flex items-start mb-16 last:mb-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-secondary rounded-full -translate-x-1.5 mt-2 z-10" />

            {/* Card */}
            <div
              className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                i % 2 === 0
                  ? "md:pr-0 md:mr-auto md:text-right"
                  : "md:pl-0 md:ml-auto md:text-left"
              }`}
            >
              <span className="font-display text-3xl md:text-4xl text-secondary">{m.year}</span>
              <h3 className="font-display text-xl md:text-2xl text-primary mt-1 mb-3">{m.title}</h3>
              <p className="font-body text-foreground/70 leading-relaxed text-sm md:text-base">
                {m.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-20 font-body text-lg text-foreground/50 italic"
      >
        "What happened next changed everything…"
      </motion.p>
    </div>
  </section>
);

export default Timeline;
