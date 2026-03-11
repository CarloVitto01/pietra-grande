import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  y = 30,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}