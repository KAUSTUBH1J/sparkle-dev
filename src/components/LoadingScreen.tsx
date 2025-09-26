import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-space"
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  background: `hsl(${180 + Math.random() * 180}, 70%, 60%)`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            {/* 3D Logo */}
            <motion.div
              animate={{ 
                rotateY: 360,
                rotateX: [0, 10, 0],
              }}
              transition={{ 
                rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="mb-8 mx-auto w-24 h-24 relative transform-3d"
            >
              <div className="absolute inset-0 bg-gradient-neon rounded-lg animate-pulse-neon" />
              <div className="absolute inset-2 bg-portfolio-bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-orbitron font-bold text-portfolio-text-neon">
                  AC
                </span>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-orbitron font-bold text-portfolio-text-primary mb-2"
            >
              Initializing Experience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-portfolio-text-muted mb-8 font-mono"
            >
              Loading quantum portfolio matrix...
            </motion.p>

            {/* Progress bar */}
            <div className="w-80 h-2 bg-portfolio-surface rounded-full overflow-hidden mx-auto mb-4">
              <motion.div
                className="h-full bg-gradient-neon relative"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.span
              key={Math.floor(progress)}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="text-portfolio-text-neon font-mono text-lg"
            >
              {Math.floor(progress)}%
            </motion.span>

            {/* Matrix rain effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-green-400 font-mono text-xs animate-matrix-rain opacity-60"
                  style={{
                    left: `${i * 5}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  {Array.from({ length: 10 }, () => 
                    String.fromCharCode(33 + Math.random() * 93)
                  ).join('')}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;