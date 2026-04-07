import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const History = () => (
  <section id="history" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-3">Origins</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary">Where It All Began</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="order-2 md:order-1"
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-6">A Backyard Invention</h3>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
            In the summer of 1965, on Bainbridge Island, Washington, three fathers—Joel Pritchard, Bill Bell, and Barney McCallum—returned home to find their families bored on a Saturday afternoon. With a badminton court, a wiffle ball, and improvised wooden paddles, they created a game that would eventually sweep the nation.
          </p>
          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            What began as a casual family pastime quickly grew into a structured sport. The founders lowered the net, established rules, and refined the equipment. By 1972, a corporation was formed to protect the sport, and the first known tournament was held in 1976. The game's accessibility—easy to learn but difficult to master—became its greatest strength.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="order-1 md:order-2"
        >
          <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80"
              alt="Early pickleball origins"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default History;
