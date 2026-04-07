import { motion } from "framer-motion";

const Legacy = () => (
  <section className="py-24 md:py-32 bg-primary">
    <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-3">Legacy</p>
        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-8">
          The Game That Keeps Growing
        </h2>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6">
          From a makeshift game on a summer afternoon to a global phenomenon, pickleball has proven that the simplest ideas often leave the deepest mark. Its legacy isn't just in the courts being built or the records being broken—it's in the communities being formed and the joy being shared across generations.
        </p>
        <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          The court is set. The story continues.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Legacy;
