import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  y = 16,
}: Props) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div style={{ width: "100%" }}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      style={{ width: "100%", willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}