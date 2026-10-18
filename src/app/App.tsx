// assets/Portfolio

import linkedinSearchEngine from '../assets/Portfolio/linkedin-search-engine.webp';
import TaskFlow from '../assets/Portfolio/TaskFlow.webp';
import adminPanel from '../assets/Portfolio/adminpanel.webp';
import morseCodeTranslator from '../assets/Portfolio/MorseCodeTranslator.webp';
import Weather from '../assets/Portfolio/Weather.webp';
import PBX from '../assets/Portfolio/Telecom & PBX Solutions Platform.webp';
import onlineShop from '../assets/Portfolio/online-shop.webp';
// assets
import developerWorkspace from '../assets/Developer workspace.jfif';
// assets/Skills
import Responsive from '../assets/Skills/Responsive.png';
import html5Logo from '../assets/Skills/html5-original.svg';
import css3Logo from '../assets/Skills/css3-original.svg';
import javascriptLogo from '../assets/Skills/javascript-original.svg';
import reactLogo from '../assets/Skills/react-original.svg';
import tailwindcssLogo from '../assets/Skills/tailwindcss-original.svg';
import typescriptLogo from '../assets/Skills/typescript-original.svg';
import bootstrapLogo from '../assets/Skills/bootstrap-original.svg';
import Git from '../assets/Skills/Git.svg';
import NextJs from '../assets/Skills/NextJs.svg';
import ReactNative from '../assets/Skills/react-native.svg';
import NativeWind from '../assets/Skills/NativeWind.png';
import { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  MapPin,
  Zap,
  Menu,
  X,
  Accessibility,
  Grid3X3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const codeLines = [
  { text: "const developer = {", color: "text-purple-400" },
  { text: "  name: 'Mohammad Mesgarzadeh',", color: "text-green-300" },
  { text: "  role: 'Frontend Developer',", color: "text-green-300" },
  { text: "  skills: ['React', 'TypeScript', 'CSS'],", color: "text-green-300" },
  { text: "  passion: 'Building great UIs',", color: "text-green-300" },
  { text: "  available: true,", color: "text-blue-300" },
  { text: "};", color: "text-purple-400" },
  { text: "", color: "" },
  { text: "developer.build();", color: "text-yellow-300" },
];

function TypewriterCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 350);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  useEffect(() => {
    const t = setInterval(() => setCursor(c => !c), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="font-mono text-sm leading-7 select-none">
      {codeLines.slice(0, visibleLines).map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`${line.color} flex items-center`}
        >
          <span className="text-gray-600 text-xs w-5 text-right mr-4 select-none shrink-0">{i + 1}</span>
          <span>{line.text}</span>
          {i === visibleLines - 1 && visibleLines < codeLines.length && (
            <span className={`inline-block w-2 h-4 bg-blue-400 ml-0.5 ${cursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
          )}
        </motion.div>
      ))}
      {visibleLines >= codeLines.length && (
        <div className="text-gray-500 flex items-center mt-1">
          <span className="text-gray-600 text-xs w-5 text-right mr-4 select-none shrink-0">{codeLines.length + 1}</span>
          <span className="text-blue-400 mr-2">▶</span>
          <span className="text-green-400">Compiled successfully</span>
          <span className={`inline-block w-2 h-4 bg-blue-400 ml-2 ${cursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-16">
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 dark:text-blue-400">
        {children}
      </span>
      <div className="flex items-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
      </div>
    </div>
  );
}

export default function App() {
  const features = [
    {
      icon: <Zap size={32} />,
      label: 'Fast & Optimized',
    },
    {
      icon: <Grid3X3 size={32} />,
      label: 'Pixel Perfect',
    },
    {
      icon: <Accessibility size={32} />,
      label: 'Accessible',
    },
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    {
      name: 'HTML5',
      color: '#f06529',
      bg: 'from-orange-500/10 to-orange-600/5',
      logo: html5Logo
    },
    {
      name: 'CSS3',
      color: '#2965f1',
      bg: 'from-blue-500/10 to-blue-600/5',
      logo: css3Logo
    },
    {
      name: 'JavaScript',
      color: '#f7df1e',
      bg: 'from-yellow-400/10 to-yellow-500/5',
      logo: javascriptLogo
    },
    {
      name: 'TypeScript',
      color: '#3178c6',
      bg: 'from-blue-600/10 to-blue-700/5',
      logo: typescriptLogo
    },
    {
      name: 'React',
      color: '#61dafb',
      bg: 'from-cyan-400/10 to-cyan-500/5',
      logo: reactLogo
    },
    {
      name: 'Tailwind CSS',
      color: '#38bdf8',
      bg: 'from-sky-400/10 to-sky-500/5',
      logo: tailwindcssLogo
    },
    {
      name: 'Bootstrap',
      color: '#7952b3',
      bg: 'from-purple-500/10 to-purple-600/5',
      logo: bootstrapLogo
    },
    {
      name: 'Responsive',
      color: '#00d8ff',
      bg: 'from-cyan-300/10 to-cyan-400/5',
      logo: Responsive
    },
    {
      name: 'Git',
      color: '#f05032',
      bg: 'from-orange-300/10 to-red-400/5',
      logo: Git
    },
    {
      name: 'React Native',
      color: '#61dafb',
      bg: 'from-sky-300/10 to-cyan-400/5',
      logo: ReactNative
    },
    {
      name: 'Next.js',
      color: '#94a3b8',
      bg: 'from-slate-300/20 to-slate-500/10',
      logo: NextJs
    },
    {
      name: 'NativeWind',
      color: '#38bdf8',
      bg: 'from-sky-300/10 to-blue-400/5',
      logo: NativeWind
    }
  ];

  const projects = [
    {
      title: 'VESTA - Online Fashion Store',
      desc: 'Modern e-commerce platform featuring product browsing, cart management, search, filtering, and responsive design',
      link: 'https://mohammad-mesgarzadeh.github.io/online-shop/',
      techs: ['React', 'Vite', 'Bootstrap', 'JavaScript', 'React Router DOM'],
      image: onlineShop
    },
    {
      title: 'LinkedIn Dataset Search Engine',
      desc: 'Full-stack search engine for LinkedIn profiles with keyword search, skills and job title filters, pagination, and a PostgreSQL data pipeline',
      link: 'https://github.com/mohammad-mesgarzadeh/linkedin-search-engine/tree/main',
      techs: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Docker Compose'],
      image: linkedinSearchEngine
    },
    {
      title: 'TaskFlow — Project Management Platform',
      desc: 'Full-stack Jira-inspired project management app with issue tracking, role-based access, and drag-and-drop Kanban boards.',
      link: 'https://github.com/mohammad-mesgarzadeh/taskflow',
      techs: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'shadcn/ui',
        'Zustand',
        'TanStack Query',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'Docker'
      ],
      image: TaskFlow
    },
    { title: 'Admin Panel', desc: 'Fully responsive admin dashboard with sidebar and data tables.', link: 'https://mohammad-mesgarzadeh.github.io/admin-panel/', techs: ['HTML', 'Tailwind', 'JS'], image: adminPanel },
    { title: 'Telecom & PBX Solutions Platform', desc: 'Professional telecom and PBX website showcasing services, training, and projects', link: 'https://mohammad-mesgarzadeh.github.io/reza-mesgarzadeh/', techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vite', 'Framer Motion / Motion'], image: PBX },
    { title: 'Weather App', desc: 'Real-time weather lookup using public API with dynamic UI updates.', link: 'https://mohammad-mesgarzadeh.github.io/Weather/', techs: ['HTML', 'Tailwind', 'JS'], image: Weather },
    { title: 'Morse Translator', desc: 'Convert text to Morse code and back with audio playback support.', link: 'https://mohammad-mesgarzadeh.github.io/Morse-code-translator/', techs: ['HTML', 'Tailwind', 'JS'], image: morseCodeTranslator },

  ];

  return (
    <div id='home' className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#f8faff] dark:bg-[#0a0a0f] text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">

        {/* ── NAV ── */}
        <nav className="fixed top-0 w-full z-50 pt-4 px-4">
          <div className="max-w-7xl mx-auto flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1 bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 rounded-2xl px-2 py-1.5 shadow-xl shadow-black/5"
            >
              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-1">
                {['Home', 'About', 'Skills', 'Portfolio'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-all duration-200"
                  >
                    {item}
                  </a>
                ))}
                <div className="w-px h-4 bg-gray-200 dark:bg-white/10 mx-1" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-all duration-200"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-all duration-200"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mt-2 mx-auto max-w-sm"
              >
                <div className="bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-gray-200/80 dark:border-white/10 rounded-2xl px-2 py-2 shadow-xl shadow-black/5">
                  {['Home', 'About', 'Skills', 'Portfolio'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/8 transition-all duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ── HERO ── */}
        <section className="relative min-h-screen mt-15 flex items-center px-6 ">
          {/* background blobs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* left */}
              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div >
                  <p className="text-gray-500 dark:text-gray-400 mb-2 tracking-wide">Hello, I'm</p>
                  <h1 className="text-6xl lg:text-7xl font-black  tracking-tight">
                    <span className="block">Mohammad</span>
                    <span className=" bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                      Mesgarzadeh
                    </span>
                  </h1>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-gray-400 dark:bg-gray-600" />
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Frontend Developer</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md">
                  I craft fast, pixel-perfect interfaces with modern web technologies. Turning designs into living, breathing digital experiences.
                </p>

                <div className="flex items-center gap-3 flex-wrap pt-2">
                  <a
                    href="https://www.linkedin.com/in/mohammad-mesgarzadeh-a5422837a/"
                    className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-semibold hover:opacity-90 hover:scale-[1.02] transition-all"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/mohammad-mesgarzadeh"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </motion.div>

              {/* right — code editor */}
              <motion.div
                className="lg:w-1/2 w-full"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
                  <div className="relative bg-[#0d0d14] rounded-2xl overflow-hidden shadow-2xl border border-white/5 ring-1 ring-inset ring-white/5">
                    {/* tab bar */}
                    <div className="flex items-center gap-0 px-4 pt-3 pb-0 bg-[#111118] border-b border-white/5">
                      <div className="flex gap-1.5 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex">
                        <div className="flex items-center gap-1.5 px-4 py-2 bg-[#0d0d14] rounded-t-lg border border-b-0 border-white/8 text-xs text-gray-300 font-mono">
                          <Code2 size={11} className="text-blue-400" />
                          portfolio.ts
                        </div>
                      </div>
                    </div>
                    {/* code */}
                    <div className="p-6 min-h-[280px]">
                      <TypewriterCode />
                    </div>
                    {/* status bar */}
                    <div className="flex items-center gap-4 px-4 py-2 bg-blue-600 text-blue-100 text-xs font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-300" />
                        TypeScript
                      </span>
                      <span className="opacity-60">·</span>
                      <span>UTF-8</span>
                      <span className="ml-auto opacity-70">Ln 9, Col 1</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-28 px-6 relative">
          <div className="container mx-auto max-w-5xl">
            <SectionLabel>About Me</SectionLabel>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* avatar card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition" />
                  <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-5 text-center">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-100 dark:ring-blue-900/30">
                      <img
                        src={developerWorkspace}
                        alt="Developer workspace"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Mohammad Mesgarzadeh</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Frontend Developer</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <MapPin size={12} />
                      Iran
                    </div>
                    <div className="w-full h-px bg-gray-100 dark:bg-gray-800" />
                    <div className="flex gap-3">
                      <a href="https://github.com/mohammad-mesgarzadeh" className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 transition">
                        <Github size={18} />
                      </a>
                      <a href="https://www.linkedin.com/in/mohammad-mesgarzadeh-a5422837a/" className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 transition">
                        <Linkedin size={18} />
                      </a>
                      <a href="mailto:m_mesgarzade@yahoo.com" className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 transition">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="lg:col-span-3 flex flex-col justify-center gap-6"
              >
                <h2 className="text-3xl font-bold leading-snug">
                  Building interfaces that users{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">love to use</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-loose">
                  As a Frontend Developer, I specialize in precise, optimized UI implementation. I use HTML, CSS, and JavaScript to deliver fast, interactive, and standards-compliant experiences. Pixel-perfect architecture, responsive design, and accessibility are my top priorities.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {features.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="group bg-white dark:bg-gray-900 rounded-2xl p-5 text-center border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex justify-center mb-4 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                      </div>

                      <div className="font-medium text-sm text-gray-800 dark:text-gray-200">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://raw.githubusercontent.com/mohammad-mesgarzadeh/mohammadMesgarzadeh/main/files/MyResume-40%5Bwww.cvbuilder.me%5D484.pdf"
                  className="self-start inline-flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  Download Resume <ExternalLink size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-28 px-6 bg-white dark:bg-white/[0.02] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.08),transparent)] pointer-events-none" />
          <div className="container mx-auto max-w-5xl relative">
            <SectionLabel>Skills</SectionLabel>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div
                    className={`relative bg-gradient-to-br ${skill.bg} dark:from-white/3 dark:to-transparent rounded-2xl p-5 border border-gray-100 dark:border-white/6 hover:border-gray-200 dark:hover:border-white/12 transition-all duration-300 flex flex-col items-center gap-3 cursor-default overflow-hidden`}
                  >
                    {/* corner accent */}
                    <div
                      className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-20"
                      style={{ background: `radial-gradient(circle at top right, ${skill.color}, transparent)` }}
                    />
                    <img src={skill.logo} alt={skill.name} className="w-12 h-12 object-contain" />
                    <span className="font-semibold text-sm text-gray-700 dark:text-gray-200">{skill.name}</span>
                    <div
                      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="py-28 px-6 relative">
          <div className="absolute top-0 -right-32 w-[500px] h-[500px] bg-purple-400/8 dark:bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto max-w-6xl relative">
            <SectionLabel>Portfolio</SectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(({ title, desc, link, techs, image }, index) => (
                <motion.a
                  key={title}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/30 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* thumbnail */}
                  <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/60 dark:to-gray-900/60 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/8 group-hover:to-purple-600/8 transition-all duration-500" />
                    <motion.div className="relative">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* corner link icon */}
                    <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/0 group-hover:bg-white dark:group-hover:bg-gray-800 text-transparent group-hover:text-gray-700 dark:group-hover:text-white transition-all duration-300 shadow-sm">
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  {/* body */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{desc}</p>
                    <div className="flex gap-2 flex-wrap pt-1">
                      {techs.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-gray-100 dark:bg-white/6 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200/60 dark:border-white/8">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="py-12 px-6 border-t border-gray-100 dark:border-white/6">
          <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © 2026 Mohammad Mesgarzadeh. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: 'https://github.com/mohammad-mesgarzadeh', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/mohammad-mesgarzadeh-a5422837a/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:m_mesgarzade@yahoo.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  className="p-2.5 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/8 transition"
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="relative group">
                <button className="p-2.5 rounded-xl text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/8 transition">
                  <Phone size={18} />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-lg">
                  09336153916
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
