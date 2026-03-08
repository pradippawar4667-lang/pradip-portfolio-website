import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Send,
  Menu,
  X,
  GraduationCap,
  Award,
  MapPin
} from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    title: "AI-Escrow",
    description: "A secure AI-powered escrow platform designed to facilitate safe online transactions by holding funds until both parties meet the agreed conditions, ensuring transparency and trust in digital payments.",
    tags: ["React", "API Integration", "Tailwind CSS"],
    image: "https://picsum.photos/seed/food/600/400"
  },
  {
    title: "Hotel Management System",
    description: "A comprehensive hotel management solution with booking, check-in, and guest services.",
    tags: ["UI/UX", "php", "html", "css"],
    image: "https://picsum.photos/seed/banking/600/400"
  },
  {
    title: "Student Management System",
    description: "A robust Java-based desktop application for managing student records, grades, and attendance.",
    tags: ["react", "express", "mongodb"],
    image: "https://picsum.photos/seed/student/600/400"
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website showcasing skills and projects with smooth animations.",
    tags: ["React", "Express", "Framer Motion", "SQLite"],
    image: "pradip.jpeg"
  }
];

const SKILLS: Skill[] = [
  { name: "HTML", icon: <Globe className="w-5 h-5" />, category: "Frontend" },
  { name: "CSS", icon: <Layout className="w-5 h-5" />, category: "Frontend" },
  { name: "JavaScript", icon: <Code2 className="w-5 h-5" />, category: "Frontend" },
  { name: "React", icon: <Cpu className="w-5 h-5" />, category: "Frontend" },
  { name: "Node.js", icon: <Server className="w-5 h-5" />, category: "Backend" },
  { name: "Express.js", icon: <Server className="w-5 h-5" />, category: "Backend" },
  { name: "Java", icon: <Code2 className="w-5 h-5" />, category: "Backend" },
  { name: "PHP", icon: <Code2 className="w-5 h-5" />, category: "Backend" },
  { name: "MongoDB", icon: <Database className="w-5 h-5" />, category: "Database" },
  { name: "MySQL", icon: <Database className="w-5 h-5" />, category: "Database" },
  { name: "Git", icon: <Github className="w-5 h-5" />, category: "Tools" },
  { name: "GitHub", icon: <Github className="w-5 h-5" />, category: "Tools" },
];

const CERTIFICATIONS = [
  "Data Structures and Algorithms in java - apna college",
  "LabLab AI hackathon participant",
  "Artificial Intelligence fondamentals - IBM",
  "AI and Life and Employability - Infosis Foundation",
];

// --- Components ---

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" 
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        x: [0, -100, 0],
        y: [0, -50, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" 
    />
    <motion.div 
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]"
    />
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold gradient-text"
        >
          PRADIP PAWAR
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full gradient-bg text-sm font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-400 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-400 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 gradient-bg mt-4 rounded-full"
    />
  </div>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest uppercase text-indigo-400 mb-6">
                Available for Hire
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I'm{" "}
              </motion.span>
              <motion.span 
                className="gradient-text inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              >
                Pradip Pawar
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl text-zinc-400 mb-8 leading-relaxed max-w-lg"
            >
              A Computer Science student and aspiring <span className="text-white font-medium">Full Stack Developer</span> passionate about building modern, responsive web applications.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl gradient-bg font-bold shadow-xl shadow-indigo-500/20 flex items-center gap-2"
              >
                View Projects <ChevronRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl glass font-bold transition-all"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-12 flex items-center gap-6"
            >
              {[
                { icon: <Github />, href: "https://github.com/pradippawar4667-lang" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/pradip-pawar-298941342/" },
                { icon: <Mail />, href: "mailto:pradippawar4667@gmail.com" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  whileHover={{ y: -5, color: "#fff" }}
                  className="text-zinc-500 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden glass p-4 group"
            >
              <img 
                src="https://picsum.photos/seed/pradip/800/800" 
                alt="Pradip Pawar" 
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-medium">Building the future, one line at a time.</p>
              </div>
            </motion.div>
            {/* Decorative elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-24 h-24 gradient-bg rounded-2xl -z-10 opacity-50" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-32 h-32 glass rounded-full -z-10" 
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="About Me" 
                subtitle="Passionate about technology and continuous learning."
              />
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  I am currently in my 3rd year of <span className="text-white font-medium">Bachelor of Computer Science (BCS)</span> in Maharashtra, India. My journey into the world of programming started with a curiosity about how things work on the web.
                </p>
                <p>
                  Today, I enjoy learning new technologies and developing responsive web applications using React, Node.js, and various databases. My goal is to become a professional full stack developer who creates impactful digital solutions.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <MapPin className="w-4 h-4 text-indigo-400" /> Maharashtra, India
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <GraduationCap className="w-4 h-4 text-indigo-400" /> BCS 3rd Year
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Projects Done", value: "4+" },
                { label: "Years Learning", value: "3" },
                { label: "Skills Mastered", value: "10+" },
                { label: "Commitment", value: "100%" },
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl glass text-center hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-display font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Technical Skills" 
            subtitle="My toolbox for building modern web applications."
          />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                className="p-6 rounded-2xl glass flex flex-col items-center gap-4 group cursor-default"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:gradient-bg transition-all duration-500"
                >
                  {skill.icon}
                </motion.div>
                <div className="text-sm font-semibold">{skill.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500">{skill.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my recent work and academic projects."
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid md:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-indigo-400 transition-colors"
                  >
                    View Details <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Certifications" 
            subtitle="Continuous learning and professional development."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl glass flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading 
                title="Get In Touch" 
                subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
              />
              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-indigo-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Email Me</div>
                    <div className="text-lg font-medium">pradippawar4667@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-indigo-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-widest mb-1">Location</div>
                    <div className="text-lg font-medium">Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[2rem] glass-dark"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-all resize-none"
                  />
                </div>
                <button 
                  disabled={formStatus === 'loading'}
                  className="w-full py-5 rounded-2xl gradient-bg font-bold flex items-center justify-center gap-3 shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all disabled:opacity-50"
                >
                  {formStatus === 'loading' ? 'Sending...' : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>

                {formStatus === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-emerald-400 font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}
                {formStatus === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-rose-400 font-medium">
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold gradient-text">PP.</div>
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Pradip Pawar. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
