import { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--portfolio-primary)_0%,_transparent_50%)] opacity-20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-portfolio-accent rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-portfolio-secondary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-portfolio-gold rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-portfolio-text-primary mb-2">
              Hi, I'm{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Alex Chen
              </span>
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-portfolio-text-secondary font-medium">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-portfolio-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-portfolio-text-secondary group-hover:text-portfolio-text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="text-portfolio-text-secondary group-hover:text-portfolio-text-primary transition-colors" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="text-portfolio-text-secondary group-hover:text-portfolio-text-primary transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-white/20 text-portfolio-text-primary hover:bg-white/10 hover:border-white/30 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-portfolio-text-muted" />
        </div>
      </div>
    </section>
  );
};

export default Hero;