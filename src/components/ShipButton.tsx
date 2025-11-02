import { motion } from "framer-motion";

interface ShipButtonProps {
  onClick?: () => void;
}

export default function ShipButton({ onClick }: ShipButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="ship-btn"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.08 }}
      title="Open info"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 21l6-6 4 1 8-12-12 8 1 4-6 6z" stroke="white" />
      </svg>
    </motion.button>
  );
}
