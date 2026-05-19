/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Shield, 
  Zap, 
  Flame, 
  Skull, 
  Heart, 
  Sword, 
  Users, 
  Info,
  Star,
  Scroll,
  Crosshair,
  Gem,
  X,
  AlertCircle,
  ChevronDown,
  User,
  Target,
  Activity,
  Lock,
  Sparkles,
  Coins,
  BookOpen
} from 'lucide-react';
import { RACES, RACE_TO_CLASSES, SKILL_PROGRESSION } from './constants';
import { NORMAL_SKILL_TREE } from './data/skillTrees';

const SkillCardSmall = ({ skill, index }: { skill: any, index: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.01 }}
    className="group relative p-3 bg-slate-900/40 border border-blue-900/30 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all rounded-sm overflow-hidden"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-black/60 border border-blue-900/50 p-1 group-hover:border-blue-400 transition-colors shrink-0">
        <div className="w-full h-full bg-blue-900/20 flex items-center justify-center">
          <Sparkles size={20} className="text-blue-400 opacity-50" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-display font-bold text-white text-[11px] uppercase tracking-wider truncate group-hover:text-blue-300 transition-colors">
            {skill.name}
          </h4>
          {skill.maxLevel && (
            <span className="text-[9px] font-mono text-blue-500 font-bold shrink-0">
              MAX: {skill.maxLevel}
            </span>
          )}
        </div>
        
        <div className="mt-1 flex flex-wrap gap-2">
          <span className="text-[9px] text-zinc-500 uppercase tracking-tighter flex items-center gap-1">
            <Info size={10} />
            Ур: {skill.minLevel || 1}
          </span>
          {skill.enabledOn && (
            <div className="flex gap-1">
              {skill.enabledOn.map((srv: string) => (
                <span key={srv} className="text-[7px] text-green-400 border border-green-900/30 px-1 uppercase leading-none">{srv}</span>
              ))}
            </div>
          )}
          {skill.disabledOn && (
            <div className="flex gap-1">
              {skill.disabledOn.map((srv: string) => (
                <span key={srv} className="text-[7px] text-red-400 border border-red-900/30 px-1 uppercase leading-none">{srv}</span>
              ))}
            </div>
          )}
          {skill.cost !== undefined && (
            <span className="text-[9px] text-amber-500/80 uppercase tracking-tighter flex items-center gap-1">
              <Coins size={10} />
              {skill.cost === 0 ? 'Бесплатно' : `${skill.cost} Adena`}
            </span>
          )}
        </div>

        {skill.desc && (
          <p className="mt-2 text-[10px] text-zinc-500 leading-relaxed line-clamp-2 group-hover:text-zinc-400 transition-colors">
            {skill.desc}
          </p>
        )}
      </div>
    </div>
  </motion.div>
);
const logoWithText = "/scryde_logo_white.png";
const logoWhite = "/scryde_logo_small.png";
const skillIcon = "/scryde_icon_black.png";

const RACE_BACKGROUNDS: Record<string, string> = {
  "Человек": "/back4.jpg",
  "Эльф": "/back4.jpg",
  "Темный Эльф": "/back4.jpg",
  "Орк": "/back4.jpg",
  "Гном": "/back4.jpg",
  "Камаэль": "/back4.jpg"
};

const RACE_RUNES: Record<string, string> = {
  "Человек": "ᚠ", "Эльф": "ᛝ", "Темный Эльф": "ᛟ", "Орк": "ᛉ", "Гном": "ᛃ", "Камаэль": "ᛤ"
};

const RACE_PLURALS: Record<string, string> = {
  "Человек": "Людей",
  "Эльф": "Эльфов",
  "Темный Эльф": "Темных Эльфов",
  "Орк": "Орков",
  "Гном": "Гномов",
  "Камаэль": "Камаэлей"
};

const Particles = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/40 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            scale: Math.random() * 1 + 0.5,
          }}
          animate={{
            top: [`${Math.random() * 100}%`, `-10%`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};

const MockupModal = ({ isOpen, onClose, message }: { isOpen: boolean, onClose: () => void, message?: string }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="stone-card max-w-md w-full p-8 rounded-lg border-blue-900 relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-blue-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500 glow-blue">
              <AlertCircle size={32} />
            </div>
            <h3 className="font-display text-xl text-white uppercase tracking-widest">Внимание</h3>
            <p className="text-zinc-400 font-serif italic">
              {message || "Это макет сайта. Данный функционал находится в разработке и на данный момент недоступен."}
            </p>
            <button 
              onClick={onClose}
              className="w-full py-3 bg-blue-700 text-white font-display text-xs tracking-widest uppercase hover:bg-blue-600 transition-colors"
            >
              Понятно
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center gap-4 my-12">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />
    <Gem size={16} className="text-blue-500" />
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-blue-900 to-transparent" />
  </div>
);

const SkillCard = ({ name, desc, onClick }: { name: string, desc: string, onClick: () => void, key?: string }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    onClick={onClick}
    className="stone-card group p-6 rounded-lg relative overflow-hidden cursor-pointer border-blue-900/30 hover:border-blue-400/50 transition-all duration-300"
  >
    {/* Decorative corner */}
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/10 rotate-45 group-hover:bg-blue-500/20 transition-colors" />
    
    <div className="flex gap-5 items-center">
      <div className="flex-shrink-0 relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-14 h-14 border-2 border-blue-900/50 bg-black/60 p-1 rounded-sm overflow-hidden group-hover:border-blue-400 transition-colors">
          <img 
            src={skillIcon} 
            alt="Skill Icon" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.includes('unsplash.com')) return;
              target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=60&w=100&h=100';
            }}
          />
        </div>
      </div>
      <div className="space-y-1.5 flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-display text-white text-lg font-bold tracking-wider uppercase group-hover:text-blue-300 transition-colors">{name}</h4>
          <Star size={10} className="text-blue-900 group-hover:text-blue-400 transition-colors mt-1" />
        </div>
        <p className="text-zinc-400 text-sm italic leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors drop-shadow-sm">{desc}</p>
      </div>
    </div>
    
    {/* Bottom accent line */}
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-transparent group-hover:w-full transition-all duration-500" />
  </motion.div>
);

const SkillDetailModal = ({ isOpen, onClose, skill }: { isOpen: boolean, onClose: () => void, skill: { name: string, desc: string } | null }) => (
  <AnimatePresence>
    {isOpen && skill && (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          className="stone-card max-w-lg w-full p-0 rounded-lg border-blue-500/40 relative overflow-hidden"
        >
          <div className="bg-blue-900/20 p-6 border-b border-blue-900/50 flex justify-between items-center">
            <h3 className="font-display text-2xl text-white tracking-widest uppercase">{skill.name}</h3>
            <button onClick={onClose} className="text-blue-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="p-8 space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-20 h-20 border-2 border-blue-500/30 bg-black/60 p-1">
                <img 
                  src="/skill.png" 
                  alt="Skill Icon" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.includes('unsplash.com')) return;
                    target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=200&h=200';
                  }}
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-display">Описание умения</span>
                  <p className="text-zinc-300 font-serif italic text-lg leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-900/10 border border-blue-900/30 rounded-sm text-center">
              <p className="font-display text-blue-400 text-sm tracking-widest uppercase animate-pulse">
                Скоро разработаем )
              </p>
            </div>

            <button 
              onClick={onClose}
              className="w-full py-4 bg-blue-700/80 hover:bg-blue-600 text-white font-display text-xs tracking-[0.3em] uppercase transition-all"
            >
              Закрыть книгу заклинаний
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>();
  const [selectedRace, setSelectedRace] = useState<string | null>(null);
  const [hoveredRace, setHoveredRace] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [skillView, setSkillView] = useState<'all' | 'progression'>('all');
  const [skillTypeFilter, setSkillTypeFilter] = useState<'all' | 'active' | 'passive'>('all');
  const [librarySearch, setLibrarySearch] = useState('');
  const [libraryType, setLibraryType] = useState('all');
  const [showAllLibrarySkills, setShowAllLibrarySkills] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<number>(40);
  const [isComparing, setIsComparing] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<{ name: string, desc: string } | null>(null);

  const openMockup = (message?: string) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const openSkillDetail = (skill: { name: string, desc: string }) => {
    setSelectedSkill(skill);
  };

  const getClassSkills = (className: string | null, race: string | null) => {
    if (!className || !race) return [];
    
    // Extract English name from parentheses if present
    const match = className.match(/\(([^)]+)\)/);
    const englishName = match ? match[1].toLowerCase() : className.toLowerCase();
    const russianName = className.split('(')[0].trim().toLowerCase();
    
    // Normalize race for comparison (handle both ё and e)
    const normalizedSelectedRace = race.replace('ё', 'е');
    
    const tree = NORMAL_SKILL_TREE.find(t => {
      const normalizedTreeRace = t.race.replace('ё', 'е');
      if (normalizedTreeRace !== normalizedSelectedRace) return false;
      
      return t.name.toLowerCase() === englishName || 
             t.name.toLowerCase() === russianName ||
             t.name.toLowerCase().includes(englishName);
    });
    return tree?.skills || [];
  };

  const classSkills = getClassSkills(selectedClass, selectedRace);

  return (
    <div className="min-h-screen selection:bg-blue-900/30 relative overflow-x-hidden bg-[#02040a]">
      <MockupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={modalMessage} />
      <SkillDetailModal isOpen={!!selectedSkill} onClose={() => setSelectedSkill(null)} skill={selectedSkill} />

      {/* Навигация */}
      <nav className="border-b border-blue-900/50 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src={logoWithText} 
              alt="Scryde" 
              className="h-10 brightness-125 drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
              <div className="hidden md:flex gap-8">
              {['Расы', 'Классы', 'Библиотека'].map(item => (
                <button 
                  key={item} 
                  onClick={() => {
                    if (item === 'Расы') {
                      const el = document.getElementById('races');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (item === 'Классы') {
                      const el = document.getElementById('classes-tree') || document.getElementById('races');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else if (item === 'Библиотека') {
                      const el = document.getElementById('skills');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        const racesEl = document.getElementById('races');
                        if (racesEl) racesEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="font-display text-[10px] tracking-[0.2em] uppercase transition-colors text-blue-400/60 hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://new45.scryde.ws/?utm_source=board&utm_content=header"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-blue-700 font-display text-[10px] tracking-widest uppercase text-white hover:bg-blue-900/30 transition-all glow-blue flex items-center justify-center"
            >
              Начать игру
            </a>
          </div>
        </div>
      </nav>

      {/* Дефолтные фоны (Видео и черный при наведении) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40 transition-all duration-1000">
        <AnimatePresence mode="wait">
          {hoveredRace && hoveredRace !== selectedRace ? (
            <motion.div
              key="hover-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-black"
            />
          ) : !selectedRace ? (
            <motion.video
              key="default-video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.4) saturate(1.2)' }}
            >
              <source src="https://frontend-static.scrydecdn.com/static/videos/main/background-valentines.mp4" type="video/mp4" />
            </motion.video>
          ) : null}
        </AnimatePresence>
      </div>
      
      {/* Сетка */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <Particles />

        /* Контентная область с фоном выбранной расы */
        <div className="relative w-full">
          {/* Фон выбранной расы (с параллаксом и стыковкой с хедером/футером) */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="sticky top-16 h-[calc(100vh-64px)] w-full overflow-hidden">
              <AnimatePresence>
                {selectedRace && (
                  <motion.div
                    key={`selected-${selectedRace}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ y: parallaxY }} 
                    className="absolute inset-x-0 -top-[10%] h-[120%] opacity-40 transition-all duration-1000"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ 
                        backgroundImage: `url(${RACE_BACKGROUNDS[selectedRace]})`,
                        filter: 'brightness(0.3) saturate(1.5) contrast(1.2)'
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <main className="max-w-7xl mx-auto px-6 py-16 relative z-10 w-full">
        
        {/* Выбор расы */}
        <section id="races" className="space-y-12 mb-24 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400 drop-shadow-sm">Выбор Расы</h2>
            <p className="font-serif italic text-zinc-500">Выберите свое происхождение в мире Scryde</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {RACES.map((race) => (
              <button 
                key={race}
                onMouseEnter={() => setHoveredRace(race)}
                onMouseLeave={() => setHoveredRace(null)}
                onClick={() => {
                  setSelectedRace(race);
                  setSelectedClass(null);
                  setTimeout(() => {
                    document.getElementById('classes-tree')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`group p-6 border transition-all duration-500 relative overflow-hidden flex flex-col items-center justify-center min-h-[100px] ${selectedRace === race ? 'bg-blue-900/40 border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-slate-900/60 border-blue-900/50 hover:border-blue-400/80 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:-translate-y-1'}`}
              >
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className={`font-display text-sm tracking-widest uppercase transition-colors relative z-10 ${selectedRace === race ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                  {race}
                </h3>
                
                <AnimatePresence>
                  {selectedRace === race && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.5, y: 10 }}
                      className="absolute bottom-2 text-blue-400/50 font-display text-2xl drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    >
                      {RACE_RUNES[race]}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </section>

        {/* Древо классов */}
        <AnimatePresence>
          {selectedRace && (
            <motion.section 
              id="classes-tree"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-16 mb-24"
            >
              <OrnamentalDivider />
              
              <div className="space-y-12">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
                  {/* Группа Воинов */}
                  <div className="space-y-12">
                    <h2 className="font-display text-2xl tracking-[0.3em] uppercase text-center border-b border-blue-900/30 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400">
                      Воины {selectedRace ? RACE_PLURALS[selectedRace] : '...'}
                    </h2>
                    
                    <div className="flex flex-col gap-16">
                      {selectedRace && RACE_TO_CLASSES[selectedRace]?.warriors.map((branch: any, idx: number) => (
                        <div key={idx} className="flex flex-col items-center space-y-6">
                          {/* Базовый класс */}
                          <div className="flex flex-col items-center space-y-3">
                            <button 
                              onClick={() => {
                                setSelectedClass(branch.base);
                                setTimeout(() => {
                                  document.getElementById('class-details')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                              }}
                              className={`w-64 p-4 border-2 transition-all rounded-sm flex items-center gap-4 group hover:scale-105 overflow-hidden ${selectedClass === branch.base ? 'border-blue-400 bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'border-blue-600/50 bg-blue-900/30 hover:border-blue-400'}`}
                            >
                              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="w-12 h-12 shrink-0 relative z-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-900/40 rounded-full border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.2)]" />
                                <img src={branch.icon} alt={branch.base} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                              </div>
                              <span className={`relative z-10 font-display text-[10px] tracking-[0.2em] uppercase font-bold text-left leading-tight group-hover:text-blue-200 transition-colors ${selectedClass === branch.base ? 'text-white' : 'text-white/80'}`}>{branch.base}</span>
                            </button>
                          </div>
                          
                          {/* Линии разветвления */}
                          <div className="relative w-full h-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-blue-500/50" />
                            <div className="absolute top-4 left-[25%] right-[25%] h-[1px] bg-blue-500/50" />
                            <div className="absolute top-4 left-[25%] w-[1px] h-4 bg-blue-500/50" />
                            <div className="absolute top-4 right-[25%] w-[1px] h-4 bg-blue-500/50" />
                          </div>

                          {/* Параллельные пути */}
                          <div className="grid grid-cols-2 gap-4 w-full max-md:grid-cols-1 max-w-md">
                            {branch.paths.map((path: any, pIdx: number) => (
                              <div key={pIdx} className="flex flex-col items-center space-y-4">
                                {/* Вторая профессия */}
                                <button 
                                  onClick={() => {
                                    setSelectedClass(path.second);
                                    setTimeout(() => {
                                      document.getElementById('class-details')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                  }}
                                  className={`w-full group/btn relative flex flex-col items-center p-2 border transition-all rounded-sm hover:scale-105 overflow-hidden ${selectedClass === path.second ? 'border-blue-400 bg-blue-800' : 'border-blue-900/50 bg-slate-900/40 hover:border-blue-700'}`}
                                >
                                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                  <div className="w-12 h-12 mb-2 relative z-10 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-800/80 rounded-lg border border-blue-900/50 shadow-inner group-hover/btn:border-blue-500/50 transition-colors" />
                                    <img src={path.secondIcon} alt={path.second} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 opacity-80 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-all drop-shadow-[0_0_3px_rgba(37,99,235,0.3)]" />
                                  </div>
                                  <span className={`relative z-10 font-display text-[9px] tracking-widest text-center leading-tight transition-colors ${selectedClass === path.second ? 'text-white' : 'text-white/80 group-hover/btn:text-white'}`}>
                                    {path.second}
                                  </span>
                                </button>
                                
                                {/* Линия вниз */}
                                <div className="h-4 w-[1px] bg-blue-900/50 relative">
                                  <div className="absolute bottom-0 -left-[4px] border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-blue-900/50" />
                                </div>
                                
                                {/* Третья профессия */}
                                <button 
                                  onClick={() => {
                                    setSelectedClass(path.third);
                                    setTimeout(() => {
                                      document.getElementById('class-details')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                  }}
                                  className={`w-full group/btn relative flex flex-col items-center p-3 border transition-all rounded-sm hover:scale-105 overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.1)] ${selectedClass === path.third ? 'border-blue-400 bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'border-blue-900/50 bg-slate-900/40 hover:border-blue-700'}`}
                                >
                                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                  <div className="w-14 h-14 mb-2 relative z-10 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-900/40 rounded-md border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.1)] group-hover/btn:border-blue-400 transition-colors" />
                                    <img src={path.thirdIcon} alt={path.third} referrerPolicy="no-referrer" className="w-10 h-10 object-contain relative z-20 group-hover/btn:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                                  </div>
                                  <span className={`relative z-10 font-display text-[9px] tracking-widest text-center leading-tight transition-colors ${selectedClass === path.third ? 'text-white' : 'text-blue-300 group-hover/btn:text-white'}`}>
                                    {path.third}
                                  </span>
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Группа Мистиков */}
                  {selectedRace && RACE_TO_CLASSES[selectedRace]?.mystics?.length > 0 ? (
                    <div className="space-y-12">
                      <h2 className="font-display text-2xl tracking-[0.3em] uppercase text-center border-b border-blue-900/30 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400">
                        Мистики {selectedRace ? RACE_PLURALS[selectedRace] : '...'}
                      </h2>
                      
                      <div className="flex flex-col gap-16">
                        {RACE_TO_CLASSES[selectedRace].mystics.map((branch: any, idx: number) => (
                          <div key={idx} className="flex flex-col items-center space-y-6">
                            {/* Базовый класс */}
                            <div className="flex flex-col items-center space-y-3">
                              <button 
                                onClick={() => {
                                  setSelectedClass(branch.base);
                                  setTimeout(() => {
                                    document.getElementById('class-details')?.scrollIntoView({ behavior: 'smooth' });
                                  }, 100);
                                }}
                                className={`w-64 p-4 border-2 transition-all rounded-sm flex items-center gap-4 group hover:scale-105 overflow-hidden ${selectedClass === branch.base ? 'border-blue-400 bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'border-blue-600/50 bg-blue-900/30 hover:border-blue-400'}`}
                              >
                                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-12 h-12 shrink-0 relative z-10 flex items-center justify-center">
                                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-900/40 rounded-full border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.2)]" />
                                  <img src={branch.icon} alt={branch.base} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                                </div>
                                <span className={`relative z-10 font-display text-[10px] tracking-[0.2em] uppercase font-bold text-left leading-tight group-hover:text-blue-200 transition-colors ${selectedClass === branch.base ? 'text-white' : 'text-white/80'}`}>{branch.base}</span>
                              </button>
                            </div>
                            
                            {/* Линии разветвления */}
                            <div className="relative w-full h-8">
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-blue-500/50" />
                              <div className={`absolute top-4 h-[1px] bg-blue-500/50 ${branch.paths.length === 3 ? 'left-[16.6%] right-[16.6%]' : 'left-1/4 right-1/4'}`} />
                              {branch.paths.map((_: any, pIdx: number) => {
                                let leftPos = "50%";
                                if (branch.paths.length === 3) {
                                  if (pIdx === 0) leftPos = "16.6%";
                                  if (pIdx === 2) leftPos = "83.3%";
                                } else {
                                  if (pIdx === 0) leftPos = "25%";
                                  if (pIdx === 1) leftPos = "75%";
                                }
                                return (
                                  <div key={pIdx} className="absolute top-4 w-[1px] h-4 bg-blue-500/50" style={{ left: leftPos }} />
                                );
                              })}
                            </div>

                            {/* Параллельные пути */}
                            <div className={`grid gap-4 w-full max-w-xl ${branch.paths.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                              {branch.paths.map((path: any, pIdx: number) => (
                                <div key={pIdx} className="flex flex-col items-center space-y-4">
                                  {/* Вторая профессия */}
                                  <button 
                                    onClick={() => {
                                      setSelectedClass(path.second);
                                      setTimeout(() => {
                                        document.getElementById('class-details')?.scrollIntoView({ behavior: 'smooth' });
                                      }, 100);
                                    }}
                                    className={`w-full group/btn relative flex flex-col items-center p-2 border transition-all rounded-sm hover:scale-105 overflow-hidden ${selectedClass === path.second ? 'border-blue-400 bg-blue-800' : 'border-blue-900/50 bg-slate-900/40 hover:border-blue-700'}`}
                                  >
                                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    <div className="w-12 h-12 mb-2 relative z-10 flex items-center justify-center">
                                      <div className="absolute inset-0 bg-slate-800/80 rounded-lg border border-blue-900/50 shadow-inner group-hover/btn:border-blue-500/50 transition-colors" />
                                      <img src={path.secondIcon} alt={path.second} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 opacity-80 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-all drop-shadow-[0_0_3px_rgba(37,99,235,0.3)]" />
                                    </div>
                                    <span className={`relative z-10 font-display text-[9px] tracking-widest text-center leading-tight transition-colors ${selectedClass === path.second ? 'text-white' : 'text-white/80 group-hover/btn:text-white'}`}>
                                      {path.second}
                                    </span>
                                  </button>
                                  
                                  {/* Линия вниз */}
                                  <div className="h-4 w-[1px] bg-blue-900/50 relative">
                                    <div className="absolute bottom-0 -left-[4px] border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-blue-900/50" />
                                  </div>
                                  
                                  {/* Третья профессия */}
                                  <button 
                                    onClick={() => {
                                      setSelectedClass(path.third);
                                      setTimeout(() => {
                                        document.getElementById('class-details')?.scrollIntoView({ behavior: 'smooth' });
                                      }, 100);
                                    }}
                                    className={`w-full group/btn relative flex flex-col items-center p-3 border transition-all rounded-sm hover:scale-105 overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.1)] ${selectedClass === path.third ? 'border-blue-400 bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'border-blue-900/50 bg-slate-900/40 hover:border-blue-700'}`}
                                  >
                                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    <div className="w-14 h-14 mb-2 relative z-10 flex items-center justify-center">
                                      <div className="absolute inset-0 bg-blue-900/40 rounded-md border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.1)] group-hover/btn:border-blue-400 transition-colors" />
                                      <img src={path.thirdIcon} alt={path.third} referrerPolicy="no-referrer" className="w-10 h-10 object-contain relative z-20 group-hover/btn:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                                    </div>
                                    <span className={`relative z-10 font-display text-[9px] tracking-widest text-center leading-tight transition-colors ${selectedClass === path.third ? 'text-white' : 'text-blue-300 group-hover/btn:text-white'}`}>
                                      {path.third}
                                    </span>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full opacity-30 italic font-serif text-zinc-500">
                      У данной расы отсутствуют направления мистиков
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Детали Класса */}
        <AnimatePresence>
          {selectedClass && (
            <motion.div
              id="class-details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-32"
            >
              <OrnamentalDivider />

              {/* Герой-секция */}
              <section className="relative stone-card p-8 md:p-12 rounded-xl border-blue-900/40 bg-slate-950/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 items-center">
                  {/* Левая колонка */}
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-blue-400">
                        <Scroll size={18} />
                        <span className="font-display text-[10px] tracking-[0.4em] uppercase opacity-70">
                          {selectedClass.toLowerCase().includes('маг') || selectedClass.toLowerCase().includes('проповедник') || selectedClass.toLowerCase().includes('апостол') ? 'Мистик' : 'Воин'}
                        </span>
                      </div>
                      <h1 className="font-display text-5xl md:text-6xl tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                        {selectedClass}
                      </h1>
                      <p className="text-lg text-zinc-400 font-serif italic leading-relaxed max-w-xl">
                        "Уникальный представитель своей расы и профессии, обладающий особыми навыками и умениями, необходимыми для выживания и победы в мире Scryde."
                      </p>
                    </div>

                    {/* Роли */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-blue-900/30 py-8">
                       <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-blue-400/60 font-display">Тип</span>
                        <p className="text-white font-display text-sm uppercase">Основной класс</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-blue-400/60 font-display">Раса</span>
                        <p className="text-white font-display text-sm uppercase">{selectedRace}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-blue-400/60 font-display">Ред. Базы</span>
                        <p className="text-white font-display text-sm uppercase">2024.5</p>
                      </div>
                    </div>
                  </div>

                  {/* Правая колонка: Статы */}
                  <div className="w-full flex justify-center">
                    <div className="relative w-full aspect-square max-w-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={[
                          { subject: 'Solo', A: 70 },
                          { subject: 'PvE', A: 90 },
                          { subject: 'PvP', A: 85 },
                          { subject: 'Support', A: 50 },
                          { subject: 'Surv.', A: 60 },
                          { subject: 'Control', A: 40 },
                        ]}>
                          <PolarGrid stroke="#1e3a8a" strokeOpacity={0.5} />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: '#4b5563', fontSize: 10 }} />
                          <Radar name={selectedClass} dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </section>

              {/* Секция умений */}
              <section id="skills" className="space-y-12 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-blue-900/50 pb-8">
                  <div className="space-y-2">
                    <h2 className="font-display text-5xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-400 drop-shadow-sm">
                      Умения {selectedClass}
                    </h2>
                    <p className="font-serif italic text-zinc-500">База знаний актуальных умений класса на Scryde</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex p-1 bg-slate-900/80 border border-blue-900/50 rounded-sm self-start lg:self-end">
                      <button 
                        onClick={() => setSkillView('all')}
                        className={`px-4 py-2 font-display text-[9px] tracking-widest uppercase transition-all ${skillView === 'all' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'text-blue-400/60 hover:text-blue-300'}`}
                      >
                        Все умения
                      </button>
                      <button 
                        onClick={() => {
                          setSkillView('progression');
                          // Set default level if not set
                          const levels = Array.from(new Set(classSkills.map((s: any) => s.minLevel))).sort((a, b) => a - b);
                          if (levels.length > 0 && !levels.includes(selectedLevel)) {
                            setSelectedLevel(levels[0]);
                          }
                        }}
                        className={`px-4 py-2 font-display text-[9px] tracking-widest uppercase transition-all ${skillView === 'progression' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'text-blue-400/60 hover:text-blue-300'}`}
                      >
                        Прогрессия
                      </button>
                    </div>

                    {skillView === 'all' && (
                      <div className="flex gap-2 justify-end">
                        <button 
                          onClick={() => setSkillTypeFilter('all')}
                          className={`px-3 py-1 font-display text-[9px] tracking-widest uppercase transition-all border rounded-sm ${skillTypeFilter === 'all' ? 'bg-blue-600/50 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-slate-900/40 border-blue-900/50 text-blue-400/60 hover:text-white'}`}
                        >
                          Все
                        </button>
                        <button 
                          onClick={() => setSkillTypeFilter('active')}
                          className={`px-3 py-1 font-display text-[9px] tracking-widest uppercase transition-all border rounded-sm ${skillTypeFilter === 'active' ? 'bg-blue-600/50 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-slate-900/40 border-blue-900/50 text-blue-400/60 hover:text-white'}`}
                        >
                          Активные
                        </button>
                        <button 
                          onClick={() => setSkillTypeFilter('passive')}
                          className={`px-3 py-1 font-display text-[9px] tracking-widest uppercase transition-all border rounded-sm ${skillTypeFilter === 'passive' ? 'bg-blue-600/50 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-slate-900/40 border-blue-900/50 text-blue-400/60 hover:text-white'}`}
                        >
                          Пассивные
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {skillView === 'all' ? (
                    <motion.div
                      key="all-skills"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      {classSkills.length > 0 ? (
                        classSkills
                          .filter((skill: any) => {
                            if (skillTypeFilter === 'all') return true;
                            const isPassive = skill.type === 'passive' || 
                                             ['mastery', 'boost', 'increase', 'fast', 'vital force', 'acrobatic move', 'esprit', 'anti magic', 'владение', 'сопротивление', 'увеличение', 'быстрое'].some(kw => skill.name.toLowerCase().includes(kw));
                            return skillTypeFilter === 'passive' ? isPassive : !isPassive;
                          })
                          .map((skill: any, idx: number) => (
                            <SkillCardSmall key={idx} skill={skill} index={idx} />
                          ))
                      ) : (
                        <div className="col-span-full text-center py-20 border border-dashed border-blue-900/30 rounded-lg">
                          <p className="text-zinc-600 font-serif italic">Данные об умениях для этого класса скоро будут добавлены</p>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="progression"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8"
                    >
                      {/* Level Selector */}
                      <div className="lg:border-r lg:border-blue-900/30 lg:pr-8 space-y-2">
                        <div className="flex lg:flex-col flex-wrap gap-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                          {Array.from(new Set(classSkills.map((s: any) => s.minLevel)))
                            .sort((a: any, b: any) => a - b)
                            .map((level: any) => (
                              <button
                                key={level}
                                onClick={() => setSelectedLevel(level)}
                                className={`flex items-center justify-between px-4 py-3 border transition-all rounded-sm group ${
                                  selectedLevel === level 
                                    ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105 z-10' 
                                    : 'bg-slate-900/60 border-blue-900/40 text-blue-400/70 hover:border-blue-500 hover:text-blue-300'
                                }`}
                              >
                                <span className="text-[10px] uppercase tracking-widest font-bold">Ур. {level}</span>
                                {selectedLevel === level && <motion.div layoutId="levelActive" className="w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]" />}
                              </button>
                            ))}
                        </div>
                      </div>

                      {/* Skills for selected level */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-4 border-b border-blue-900/30 pb-4">
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-display text-white border border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                            {selectedLevel}
                          </div>
                          <h4 className="font-display text-xl text-white uppercase tracking-wider">Новые навыки на уровне</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {classSkills
                            .filter((s: any) => s.minLevel === selectedLevel)
                            .map((skill: any, idx: number) => (
                              <SkillCardSmall key={idx} skill={skill} index={idx} />
                            ))}
                        </div>
                        
                        {classSkills.filter((s: any) => s.minLevel === selectedLevel).length === 0 && (
                          <p className="text-zinc-600 font-serif italic text-center py-10">Выберите уровень слева, чтобы увидеть навыки.</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Секция Библиотеки (Все умения) */}
        <section id="library" className="mt-32 space-y-16 py-24 border-t border-blue-900/30">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-5xl tracking-widest uppercase text-white">Все Умения Мира</h2>
            <p className="font-serif italic text-zinc-500 max-w-2xl mx-auto">Полный реестр способностей всех классов и рас. Используйте поиск для быстрого нахождения нужного навыка.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between stone-card p-6 bg-slate-900/40 border-blue-900/40 backdrop-blur-md rounded-lg">
            <div className="relative w-full md:w-96 group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-blue-400/50 group-focus-within:text-blue-400 transition-colors">
                <Crosshair size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Поиск по названию..." 
                value={librarySearch}
                onChange={(e) => setLibrarySearch(e.target.value)}
                className="w-full bg-black/60 border border-blue-900/50 rounded-sm py-3 pl-12 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all font-display tracking-wider"
              />
            </div>

            <div className="flex gap-2 p-1 bg-black/40 border border-blue-900/50 rounded-sm">
              {['all', 'active', 'passive'].map(type => (
                <button
                  key={type}
                  onClick={() => setLibraryType(type)}
                  className={`px-4 py-2 font-display text-[9px] tracking-[0.2em] uppercase transition-all rounded-sm ${libraryType === type ? 'bg-blue-600 text-white' : 'text-blue-400/60 hover:text-white hover:bg-blue-900/20'}`}
                >
                  {type === 'all' ? 'Все' : type === 'active' ? 'Активные' : 'Пассивные'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const allSkills = NORMAL_SKILL_TREE
                .flatMap((cls: any) => cls.skills.map((s: any) => ({ ...s, className: cls.name, race: cls.race })));
              
              const filteredSkills = allSkills.filter((skill: any) => {
                const searchLower = librarySearch.toLowerCase();
                const matchesSearch = skill.name.toLowerCase().includes(searchLower) || 
                                     skill.className.toLowerCase().includes(searchLower);
                
                const isPassive = skill.type === 'passive' || 
                                 ['mastery', 'boost', 'increase', 'fast', 'vital force', 'acrobatic move', 'esprit', 'anti magic', 'владение', 'сопротивление', 'увеличение', 'быстрое'].some(kw => skill.name.toLowerCase().includes(kw));
                
                const matchesType = libraryType === 'all' ? true : (libraryType === 'passive' ? isPassive : !isPassive);
                return matchesSearch && matchesType;
              });

              const displayedSkills = showAllLibrarySkills ? filteredSkills : filteredSkills.slice(0, 48);

              return (
                <>
                  {displayedSkills.map((skill: any, idx: number) => (
                    <motion.div
                      key={`${skill.className}-${skill.name}-${idx}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="stone-card group p-4 border border-blue-900/30 bg-slate-950/20 hover:border-blue-400 transition-all rounded-sm relative overflow-hidden"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[8px] uppercase tracking-widest text-blue-500 opacity-70 font-display">{skill.className}</span>
                        <span className="text-[8px] uppercase tracking-widest bg-blue-900/40 px-2 py-0.5 rounded-full text-blue-300 font-display">ур. {skill.minLevel}</span>
                      </div>
                      <h4 className="text-sm font-display text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors mb-2">{skill.name}</h4>
                      <p className="text-xs text-zinc-500 font-serif leading-relaxed line-clamp-3">{skill.desc}</p>
                    </motion.div>
                  ))}
                  
                  {!showAllLibrarySkills && filteredSkills.length > 48 && (
                    <div className="col-span-full pt-12 flex justify-center">
                      <button 
                        onClick={() => setShowAllLibrarySkills(true)}
                        className="px-10 py-4 font-display text-[10px] uppercase tracking-[0.3em] overflow-hidden border border-blue-800 bg-blue-900/20 text-blue-400 hover:text-white hover:border-blue-400 transition-all flex items-center gap-4 group"
                      >
                        Загрузить все умения ({filteredSkills.length})
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 transition-all group-hover:shadow-[0_0_10px_#60a5fa] group-hover:scale-150" />
                      </button>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </section>
      </main>
    </div>

      {/* Футер */}
      <footer className="relative bg-black border-t border-blue-900/50 py-24 overflow-hidden">
        {/* Фоновое изображение для футера */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/footer.png")',
            backgroundPosition: 'center center',
            filter: 'brightness(0.2) saturate(0.5)'
          }}
        />
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12 relative z-10">
          <img 
            src={logoWhite} 
            alt="Scryde Footer" 
            className="h-16 mx-auto brightness-125"
          />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['База данных', 'Карта', 'Рейтинг', 'Поддержка', 'Форум'].map(link => (
              <button key={link} onClick={() => openMockup()} className="font-display text-[10px] tracking-widest uppercase text-zinc-400 hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300">
                {link}
              </button>
            ))}
          </div>
          <div className="pt-12 border-t border-blue-900/20">
            <p className="text-zinc-600 text-[10px] font-serif italic tracking-wider">
              © 2026 Scryde Encyclopedia. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
