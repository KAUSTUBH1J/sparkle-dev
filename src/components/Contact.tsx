import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen@example.com',
      href: 'mailto:alex.chen@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-surface rounded-2xl backdrop-blur-sm border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-portfolio-text-secondary mb-8 leading-relaxed">
                I'm always interested in new opportunities, whether that's a full-time position, 
                freelance project, or just a chat about technology. Don't hesitate to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-text-muted">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-portfolio-text-primary hover:text-portfolio-accent transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-portfolio-text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-white/5 rounded-xl">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-sm text-portfolio-text-secondary">
                    Usually responds within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-surface rounded-2xl backdrop-blur-sm border border-white/10 p-8">
            <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text-secondary mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border-white/10 text-portfolio-text-primary placeholder:text-portfolio-text-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text-secondary mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border-white/10 text-portfolio-text-primary placeholder:text-portfolio-text-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text-secondary mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border-white/10 text-portfolio-text-primary placeholder:text-portfolio-text-muted focus:border-portfolio-accent focus:ring-portfolio-accent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-portfolio-text-secondary mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border-white/10 text-portfolio-text-primary placeholder:text-portfolio-text-muted focus:border-portfolio-accent focus:ring-portfolio-accent resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:opacity-90 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;