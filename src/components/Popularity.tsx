import { motion } from "framer-motion";
import ExhibitHeader from "./ExhibitHeader";
import popularityImg from "@/assets/popularity-pickleball.webp";
import surgeCourts from "@/assets/surge-courts.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stats = [
  { stat: "36.5M", label: "U.S. Players" },
  { stat: "158%", label: "Growth (3 yr)" },
  { stat: "10,000+", label: "Courts Built" },
  { stat: "70+", label: "Countries" },
];

const Popularity = () => (
  <section id="exhibit-3" className="py-24 md:py-32 bg-background scroll-mt-16">
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <ExhibitHeader
        number={3}
        label="The Surge"
        title="A Cultural Phenomenon"
        hook="How does a backyard game become the fastest-growing sport in America? Explore the forces behind the surge."
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-8"
        >
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img src={popularityImg} alt="Professional pickleball tournament in action" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-body text-xs text-muted-foreground mt-3 italic text-center">
              Professional pickleball tournaments now draw thousands of spectators and millions in sponsorship
            </p>
          </div>

          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img src={surgeCourts} alt="Aerial view of a busy multi-court pickleball complex" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
            </div>
            <p className="font-body text-xs text-muted-foreground mt-3 italic text-center">
              Dedicated pickleball complexes are being built across the country to meet surging demand
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-6"
        >
          <h3 className="font-display text-2xl md:text-3xl text-primary">More Than a Sport</h3>

          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            The numbers tell a story that no one predicted. With over 36 million players in the United States alone, pickleball has transcended its humble origins to become a cultural force. Cities across the country are converting underused tennis courts. Dedicated pickleball facilities—some with dozens of courts—are being built from scratch. The infrastructure of an entire sport is rising in real time.
          </p>

          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            But the real story isn't in the courts or the equipment—it's in the people. Pickleball's genius lies in its radical inclusivity. An eight-year-old can rally with an eighty-year-old. A first-time player can enjoy a meaningful game within minutes. From retirement communities in Florida to college campuses in California, the sport doesn't just welcome everyone—it thrives because of everyone.
          </p>

          <p className="font-body text-base md:text-lg text-foreground/80 leading-relaxed">
            Professional leagues like Major League Pickleball have attracted celebrity investors including LeBron James, Tom Brady, and Drew Brees. Prize pools have grown from thousands to millions. ESPN broadcasts tournaments to national audiences. What was once dismissed as "a retirees' game" now commands the attention of the entire sports world.
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
        {stats.map((s) => (
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
