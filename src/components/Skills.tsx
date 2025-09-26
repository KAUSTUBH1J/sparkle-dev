import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      label: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 78 },
        { name: 'React Native', level: 80 },
      ]
    },
    backend: {
      label: 'Backend',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 95 },
        { name: 'Microservices', level: 80 },
      ]
    },
    database: {
      label: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 78 },
        { name: 'Supabase', level: 82 },
        { name: 'Firebase', level: 80 },
        { name: 'Prisma', level: 85 },
      ]
    },
    devops: {
      label: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 78 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Vercel', level: 90 },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="bg-gradient-surface rounded-2xl backdrop-blur-sm border border-white/10 p-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'bg-white/5 text-portfolio-text-secondary hover:bg-white/10 hover:text-portfolio-text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-portfolio-text-primary">{skill.name}</h3>
                  <span className="text-sm text-portfolio-text-muted">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-portfolio-text-primary mb-6 text-center">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Jest', 'Cypress', 'Webpack', 'Vite', 'Figma', 'Adobe XD', 
                'Jira', 'Slack', 'Notion', 'Linux', 'Bash', 'JSON'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/5 text-portfolio-text-secondary rounded-full text-sm hover:bg-white/10 hover:text-portfolio-text-primary transition-all duration-200 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;