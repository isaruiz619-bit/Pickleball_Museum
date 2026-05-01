import { motion } from "framer-motion";
import ExhibitHeader from "./ExhibitHeader";
import historyImg from "@/assets/history-pickleball.webp";
import originsPaddles from "@/assets/origins-pritchard-evans.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const History = () => (
  <section id="exhibit-1" className="py-24 md:py-32 bg-background scroll-mt-16">
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <ExhibitHeader
        number={1}
        label="Origins"
        title="Where It All Began"
        hook="What if the most important invention of the summer happened by accident?"
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="order-2 md:order-1 space-y-6"
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary">A Backyard Invention</h3>

          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            It was the summer of 1965, and on Bainbridge Island, Washington, three fathers faced a problem every parent knows: their families were bored on a Saturday afternoon. Joel Pritchard, a congressman, had just returned from a round of golf with his friend Bill Bell to find their children sitting around with nothing to do.
          </p>

          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            What happened next changed everything. The men found an old badminton court, but no one could locate a full set of rackets. Improvising with ping-pong paddles and a perforated plastic ball, they lowered the net and began to play. The game was awkward at first—but something clicked. Within hours, the entire family was hooked.
          </p>

          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            Their neighbor, Barney McCallum, joined the next weekend and helped refine the rules. They crafted wooden paddles in his basement workshop. By the end of that summer, the game had a name—pickleball—and a growing group of devoted players. What began as a fix for boredom had become something none of them expected: the seed of a movement.
          </p>

          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            By 1972, the founders saw enough demand to form Pickle-Ball, Inc., and in 1976 the first known tournament was held at the South Center Athletic Club in Tukwila, Washington. The game's greatest strength was already clear: it was easy to learn but endlessly difficult to master.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="order-1 md:order-2 space-y-8 md:sticky md:top-24"
        >
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img src={historyImg} alt="Early pickleball origins on Bainbridge Island" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-body text-xs text-muted-foreground mt-3 italic text-center">
              The humble beginnings of pickleball — improvised equipment on a backyard court, 1965
            </p>
          </div>

          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img src={originsPaddles} alt="Co-inventor Congressman Joel Pritchard and former Governor Dan Evans preparing for a game" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-body text-xs text-muted-foreground mt-3 italic text-center">
              Co-inventor Congressman Joel Pritchard (left) and former Governor Dan Evans prepare for a game
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default History;
