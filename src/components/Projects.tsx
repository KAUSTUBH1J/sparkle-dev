import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/example/ecommerce',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics. Designed for modern teams.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'Vercel'],
      demoLink: 'https://taskapp.example.com',
      githubLink: 'https://github.com/example/taskapp',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Clean, intuitive interface.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'Tailwind'],
      demoLink: 'https://weather.example.com',
      githubLink: 'https://github.com/example/weather',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics platform for social media management with data visualization, scheduling tools, and performance insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Express', 'MongoDB', 'Docker'],
      demoLink: 'https://analytics.example.com',
      githubLink: 'https://github.com/example/analytics',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gradient-surface rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-elevated animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-portfolio-text-primary mb-3 group-hover:text-portfolio-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-portfolio-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-portfolio-text-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-gradient-primary hover:opacity-90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border border-white/20 text-portfolio-text-primary hover:bg-white/10 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-portfolio-text-primary mb-8 text-center">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-surface rounded-xl backdrop-blur-sm border border-white/10 p-6 hover:border-white/20 transition-all duration-300 hover:shadow-card animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-portfolio-text-primary mb-2 group-hover:text-portfolio-accent transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="text-portfolio-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-portfolio-text-muted rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-portfolio-text-muted text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-accent hover:text-portfolio-text-primary transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={14} className="inline mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-portfolio-accent hover:text-portfolio-text-primary transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={14} className="inline mr-1" />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className="text-center">
          <Button
            asChild
            className="bg-white/5 hover:bg-white/10 text-portfolio-text-primary border border-white/20 hover:border-white/30 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ArrowRight size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
