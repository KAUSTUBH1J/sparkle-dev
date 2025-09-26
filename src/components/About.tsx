import { Download, Code, Coffee, Users } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-gradient-surface p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-card">
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-4">
                My Journey
              </h3>
              <p className="text-portfolio-text-secondary leading-relaxed mb-4">
                Started my development journey in 2019, I've worked with startups and 
                established companies to build scalable web applications. My passion lies 
                in creating seamless user experiences backed by robust, efficient code.
              </p>
              <p className="text-portfolio-text-secondary leading-relaxed">
                I specialize in full-stack development with a focus on modern React 
                applications, Node.js backends, and cloud infrastructure. Always eager 
                to learn new technologies and tackle challenging problems.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <Code className="w-8 h-8 text-portfolio-accent mx-auto mb-2" />
                <p className="text-sm text-portfolio-text-muted">Clean Code</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <Coffee className="w-8 h-8 text-portfolio-accent mx-auto mb-2" />
                <p className="text-sm text-portfolio-text-muted">Coffee Lover</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                <Users className="w-8 h-8 text-portfolio-accent mx-auto mb-2" />
                <p className="text-sm text-portfolio-text-muted">Team Player</p>
              </div>
            </div>

            <Button 
              className="bg-gradient-accent hover:opacity-90 text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Right Content - Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-surface p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-card">
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
                Experience Highlights
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-portfolio-text-primary">Senior Full Stack Developer</h4>
                    <p className="text-sm text-portfolio-text-muted">TechCorp Inc. • 2022 - Present</p>
                  </div>
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-portfolio-text-primary">Frontend Developer</h4>
                    <p className="text-sm text-portfolio-text-muted">StartupXYZ • 2020 - 2022</p>
                  </div>
                  <div className="w-2 h-2 bg-portfolio-secondary rounded-full"></div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div>
                    <h4 className="font-semibold text-portfolio-text-primary">Junior Developer</h4>
                    <p className="text-sm text-portfolio-text-muted">WebAgency • 2019 - 2020</p>
                  </div>
                  <div className="w-2 h-2 bg-portfolio-gold rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-surface p-6 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">50+</div>
                <p className="text-portfolio-text-muted text-sm">Projects Completed</p>
              </div>
              <div className="bg-gradient-surface p-6 rounded-xl backdrop-blur-sm border border-white/10 text-center">
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">5+</div>
                <p className="text-portfolio-text-muted text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;