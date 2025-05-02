import { motion } from "framer-motion";
import { Briefcase, ArrowRight, ChevronsRight, BarChart2 } from "lucide-react";

const SujiLogo = () => {
  return (
    <motion.div
      className="flex items-center gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 tracking-tight">
          Suji<span className="text-blue-600">Career</span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default SujiLogo;
