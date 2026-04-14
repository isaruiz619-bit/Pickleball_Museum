import { motion } from "framer-motion";

interface ExhibitHeaderProps {
  number: number;
  label: string;
  title: string;
  hook?: string;
}

const ExhibitHeader = ({ number, label, title, hook }: ExhibitHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="mb-16 md:mb-20"
  >
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-6xl md:text-8xl text-secondary/20">
        {String(number).padStart(2, "0")}
      </span>
      <div>
        <p className="font-body text-[10px] uppercase tracking-[0.4em] text-secondary mb-1">
          {label}
        </p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary leading-[0.95]">
          {title}
        </h2>
      </div>
    </div>
    {hook && (
      <p className="font-body text-lg md:text-xl text-foreground/60 italic max-w-2xl leading-relaxed">
        {hook}
      </p>
    )}
  </motion.div>
);

export default ExhibitHeader;
