import { motion } from "framer-motion";
import ExhibitHeader from "./ExhibitHeader";

const Legacy = () => (
  <section id="exhibit-5" className="py-24 md:py-32 bg-primary scroll-mt-16">
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-6xl md:text-8xl text-secondary/20">05</span>
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.4em] text-secondary mb-1">
                Legacy
              </p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[0.95]">
                The Story Continues
              </h2>
            </div>
          </div>
          <p className="font-body text-lg md:text-xl text-primary-foreground/50 italic leading-relaxed">
            Every great story has a chapter that hasn't been written yet. This one belongs to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            From a makeshift game on a summer afternoon to a global phenomenon played in over 70 countries, pickleball has proven something profound: the simplest ideas often leave the deepest mark. Its inventors couldn't have imagined professional leagues, million-dollar tournaments, or celebrity investors. They just wanted their kids to stop being bored.
          </p>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            But pickleball's true legacy isn't measured in courts built or records broken. It's measured in the connections it creates—the strangers who become doubles partners, the generations who find common ground across a net, the communities that form around a shared love of play. In a world that often feels divided, pickleball is a reminder that the things that bring us together can be beautifully simple.
          </p>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            The International Olympic Committee is watching. New technologies are reshaping equipment. Youth programs are introducing the sport to millions of children worldwide. The next chapter of this story is being written right now—on courts in Tokyo, São Paulo, London, and your own neighborhood.
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-3xl md:text-4xl text-secondary text-center pt-8"
          >
            The court is set. Your move.
          </motion.p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Legacy;
