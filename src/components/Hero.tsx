import { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import ThreeScene from './ThreeScene';
import FloatingGeometry from './3d/FloatingGeometry';
import ParticleField from './3d/ParticleField';
import HolographicText from './3d/HolographicText';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden cursor-glow">
      {/* 3D Background Scene */}
      <div className="absolute inset-0">
        <ThreeScene camera={{ position: [0, 0, 8], fov: 60 }}>
          <ParticleField count={2000} />
          <FloatingGeometry position={[-4, 2, -2]} geometry="octahedron" color="#00ffff" size={0.5} speed={0.8} />
          <FloatingGeometry position={[4, -1, -1]} geometry="torus" color="#ff00ff" size={0.7} speed={1.2} />
          <FloatingGeometry position={[-2, -3, 1]} geometry="sphere" color="#ffff00" size={0.4} speed={0.6} />
          <FloatingGeometry position={[3, 3, -3]} geometry="box" color="#00ff00" size={0.6} speed={1.0} />
          <HolographicText position={[0, -2, -5]} size={0.3}>FULL STACK DEVELOPER</HolographicText>
        </ThreeScene>
      </div>

      {/* Advanced background effects */}
      <div className="absolute inset-0 bg-gradient-space"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--portfolio-neon-cyan)_0%,_transparent_50%)] opacity-10"></div>
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-portfolio-neon-cyan font-mono text-xs animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 15 }, (_, j) => (
              <div key={j} className="mb-2">
                {String.fromCharCode(33 + Math.random() * 93)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 font-orbitron"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "backOut" }}
          >
            <motion.span 
              className="block text-portfolio-text-primary mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Hi, I'm{' '}
              <span className="holographic bg-clip-text text-transparent animate-pulse-neon">
                Alex Chen
              </span>
            </motion.span>
            <motion.span 
              className="block text-2xl sm:text-4xl lg:text-5xl text-portfolio-text-neon font-medium relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span className="relative z-10">
                {displayText}
                <span className="animate-pulse text-portfolio-neon-cyan">|</span>
              </span>
              <div className="absolute inset-0 bg-gradient-neon opacity-20 blur-xl animate-pulse-neon" />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-portfolio-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="text-portfolio-text-neon font-semibold">Quantum-powered</span> digital architect crafting 
            <span className="text-portfolio-text-neon font-semibold"> next-generation</span> experiences with 
            cutting-edge technologies. Specialized in <span className="text-portfolio-text-neon">immersive web applications</span> and 
            <span className="text-portfolio-text-neon"> AI-driven solutions</span>.
          </motion.p>

          {/* Social Links with 3D Effects */}
          <motion.div 
            className="flex justify-center space-x-8 mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {[
              { icon: Github, href: "https://github.com", delay: 0 },
              { icon: Linkedin, href: "https://linkedin.com", delay: 0.1 },
              { icon: Mail, href: "mailto:alex@example.com", delay: 0.2 }
            ].map(({ icon: Icon, href, delay }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + delay }}
                whileHover={{ y: -10, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-4 neumorphism rounded-2xl hover:shadow-neon transition-all duration-500 group-hover:animate-pulse-neon">
                  <Icon size={28} className="text-portfolio-text-secondary group-hover:text-portfolio-neon-cyan transition-all duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500" />
              </motion.a>
            ))}
          </motion.div>

          {/* Advanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToProjects}
                className="relative overflow-hidden bg-gradient-neon hover:opacity-90 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:shadow-neon font-orbitron group"
              >
                <span className="relative z-10">Enter Portfolio</span>
                <div className="absolute inset-0 bg-gradient-holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-white/10 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="relative overflow-hidden glass-strong border-2 border-portfolio-neon-cyan/50 text-portfolio-text-neon hover:bg-portfolio-neon-cyan/10 hover:border-portfolio-neon-cyan px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:shadow-neon font-orbitron group"
              >
                <span className="relative z-10">Initialize Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-portfolio-neon-cyan/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-6 h-10 border-2 border-portfolio-neon-cyan rounded-full flex justify-center">
              <motion.div
                animate={{ y: [2, 16, 2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-gradient-neon rounded-full mt-2"
              />
            </div>
            <div className="absolute inset-0 bg-portfolio-neon-cyan/20 rounded-full blur-md animate-pulse-neon" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;