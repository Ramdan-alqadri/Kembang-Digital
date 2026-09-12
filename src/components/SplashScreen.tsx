import { useEffect } from 'react';
import { motion } from 'motion/react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Show the splash screen for just 1.2 seconds, then transition out
    const timer = setTimeout(() => {
      onComplete();
    }, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-20 h-20 bg-kembang-pink text-white rounded-full flex items-center justify-center text-4xl font-bold shadow-lg"
      >
        K
      </motion.div>
    </motion.div>
  );
}
