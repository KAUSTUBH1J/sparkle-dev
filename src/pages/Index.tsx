import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import DarkModeToggle from '@/components/DarkModeToggle';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-space relative overflow-x-hidden">
      <CustomCursor />
      <DarkModeToggle />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Enhanced Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-portfolio-neon-cyan/20">
        <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-portfolio-text-muted font-mono">
            <span className="text-portfolio-neon-cyan">©</span> 2024 Alex Chen. 
            <span className="text-portfolio-text-neon"> Quantum-powered</span> with React, TypeScript, Three.js & 
            <span className="text-portfolio-text-neon"> Neural Networks</span>.
          </p>
          <div className="mt-4 flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-neon rounded-full animate-pulse-neon"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
