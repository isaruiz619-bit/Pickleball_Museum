import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ExhibitNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  labels: string[];
}

const ExhibitNav = ({ current, total, onPrev, onNext, labels }: ExhibitNavProps) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-t border-primary-foreground/10"
    >
      {/* Progress bar */}
      <div className="w-full">
        <Progress value={progress} className="h-1 rounded-none bg-primary-foreground/10 [&>div]:bg-secondary" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="flex items-center gap-2 font-body text-sm uppercase tracking-widest text-primary-foreground/70 hover:text-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="text-center">
          <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary-foreground/50">
            Exhibit {current + 1} of {total}
          </p>
          <p className="font-body text-xs text-primary-foreground/80 mt-0.5">
            {labels[current]}
          </p>
        </div>

        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="flex items-center gap-2 font-body text-sm uppercase tracking-widest text-primary-foreground/70 hover:text-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default ExhibitNav;
