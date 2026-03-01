/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Lock
} from 'lucide-react';
import { RACES, HUMAN_CLASSES, APOSTLE_SKILLS, SKILL_PROGRESSION } from './constants';
const logoWithText = "/logo.png";
const logoWhite = "/logo_small.png";
const apostleBig = "/apostle.png";
const skillIcon = "/skill.png";

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
          <h4 className="font-display text-white text-sm font-bold tracking-widest uppercase group-hover:text-blue-300 transition-colors">{name}</h4>
          <Star size={10} className="text-blue-900 group-hover:text-blue-400 transition-colors" />
        </div>
        <p className="text-white/90 text-base italic leading-relaxed line-clamp-3 group-hover:text-white transition-colors drop-shadow-sm">{desc}</p>
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
  const [activeTab, setActiveTab] = useState<'buffs' | 'magical' | 'physical' | 'debuffs' | 'toggle'>('buffs');
  const [skillView, setSkillView] = useState<'all' | 'progression'>('all');
  const [selectedLevel, setSelectedLevel] = useState<number>(40);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>();
  const [selectedRace, setSelectedRace] = useState<string | null>(null);
  const [selectedArchetype, setSelectedArchetype] = useState<'warriors' | 'mystics' | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<{ name: string, desc: string } | null>(null);

  const openMockup = (message?: string) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const openSkillDetail = (skill: { name: string, desc: string }) => {
    setSelectedSkill(skill);
  };

  const tabLabels = {
    buffs: 'Усиливающие',
    magical: 'Магические',
    physical: 'Физические',
    debuffs: 'Отрицательные',
    toggle: 'Переключаемые'
  };

  return (
    <div className="min-h-screen selection:bg-blue-900/30 relative overflow-x-hidden bg-[#02040a]">
      {/* Основной фон сайта */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) saturate(1.2)' }}
        >
          <source src="https://frontend-static.scrydecdn.com/static/videos/main/background-valentines.mp4" type="video/mp4" />
        </video>
      </div>
      
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
              {['Расы', 'Классы', 'Умения', 'Библиотека'].map(item => (
                <button 
                  key={item} 
                  onClick={() => openMockup()}
                  className="font-display text-[10px] tracking-[0.2em] uppercase text-blue-400/60 hover:text-white transition-colors"
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

      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Выбор расы */}
        <section id="races" className="space-y-12 mb-24">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl text-white tracking-widest uppercase">Выбор Расы</h2>
            <p className="font-serif italic text-zinc-500">Выберите свое происхождение в мире Scryde</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {RACES.map((race) => (
              <button 
                key={race}
                onClick={() => {
                  if (race === 'Человек') {
                    setSelectedRace(race);
                    setSelectedArchetype(null);
                    setSelectedClass(null);
                  } else {
                    openMockup(`Раса ${race} не реализована в данном тесте. Доступен только Человек.`);
                  }
                }}
                className={`group p-6 border transition-all duration-500 relative overflow-hidden ${selectedRace === race ? 'bg-blue-900/30 border-blue-500' : 'bg-slate-900/40 border-blue-900/50 hover:border-blue-500/50'}`}
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className={`font-display text-sm tracking-widest uppercase transition-colors ${selectedRace === race ? 'text-white' : 'text-zinc-100 group-hover:text-blue-400'}`}>
                  {race}
                </h3>
                {race !== 'Человек' && (
                  <div className="absolute top-1 right-1">
                    <AlertCircle size={10} className="text-zinc-700" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Древо классов */}
        <AnimatePresence>
          {selectedRace === 'Человек' && (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-16 mb-24"
            >
              <OrnamentalDivider />
              
              <div className="space-y-12">
                {/* Уведомление о макете */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-4xl mx-auto p-4 border-l-2 border-blue-500 bg-blue-900/10 flex items-center gap-4"
                >
                  <Info size={18} className="text-blue-400 shrink-0" />
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <span className="font-display text-[10px] tracking-widest text-blue-300 uppercase whitespace-nowrap">Тестовый макет:</span>
                    <p className="text-[11px] text-zinc-400 font-serif italic leading-tight">
                      В данном макете реализован только Апостол. Все остальные классы и расы находятся в разработке.
                    </p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
                  {/* Группа Воинов */}
                  <div className="space-y-12">
                    <h2 className="font-display text-2xl text-white tracking-[0.3em] uppercase text-center border-b border-blue-900/30 pb-4">Воины Людей</h2>
                    
                    <div className="flex flex-col gap-16">
                      {HUMAN_CLASSES.warriors.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-6">
                          {/* Базовый класс */}
                          <div className="flex flex-col items-center space-y-3">
                            <button 
                              onClick={() => openMockup(`Класс ${branch.base} не реализован.`)}
                              className="w-64 p-4 border-2 border-blue-600/50 bg-blue-900/30 text-center relative z-10 rounded-sm flex items-center gap-4 group hover:border-blue-400 transition-all hover:scale-105 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="w-12 h-12 shrink-0 relative z-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-900/40 rounded-full border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.2)]" />
                                <img src={branch.icon} alt={branch.base} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                              </div>
                              <span className="relative z-10 font-display text-[10px] tracking-[0.2em] text-white uppercase font-bold text-left leading-tight group-hover:text-blue-200 transition-colors">{branch.base}</span>
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
                            {branch.paths.map((path, pIdx) => (
                              <div key={pIdx} className="flex flex-col items-center space-y-4">
                                {/* Вторая профессия */}
                                <button 
                                  onClick={() => openMockup(`Класс ${path.second} не реализован.`)}
                                  className="w-full group/btn relative flex flex-col items-center p-2 border border-blue-900/50 bg-slate-900/40 opacity-60 hover:opacity-100 hover:border-blue-700 transition-all rounded-sm hover:scale-105 overflow-hidden"
                                >
                                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                  <div className="w-12 h-12 mb-2 relative z-10 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-800/80 rounded-lg border border-blue-900/50 shadow-inner group-hover/btn:border-blue-500/50 transition-colors" />
                                    <img src={path.secondIcon} alt={path.second} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 opacity-80 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-all drop-shadow-[0_0_3px_rgba(37,99,235,0.3)]" />
                                  </div>
                                  <span className="relative z-10 font-display text-[9px] tracking-widest text-white/80 group-hover/btn:text-white transition-colors text-center leading-tight">
                                    {path.second}
                                  </span>
                                </button>
                                
                                {/* Линия вниз */}
                                <div className="h-4 w-[1px] bg-blue-900/50 relative">
                                  <div className="absolute bottom-0 -left-[4px] border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-blue-900/50" />
                                </div>
                                
                                {/* Третья профессия */}
                                <button 
                                  onClick={() => openMockup(`Класс ${path.third} не реализован.`)}
                                  className="w-full group/btn relative flex flex-col items-center p-3 border border-blue-900/50 bg-slate-900/40 opacity-60 hover:opacity-100 hover:border-blue-700 transition-all rounded-sm hover:scale-105 overflow-hidden shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                                >
                                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                  <div className="w-14 h-14 mb-2 relative z-10 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-900/40 rounded-md border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.1)] group-hover/btn:border-blue-400 transition-colors" />
                                    <img src={path.thirdIcon} alt={path.third} referrerPolicy="no-referrer" className="w-10 h-10 object-contain relative z-20 group-hover/btn:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                                  </div>
                                  <span className="relative z-10 font-display text-[9px] tracking-widest text-blue-300 group-hover/btn:text-white transition-colors text-center leading-tight">
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
                  <div className="space-y-12">
                    <h2 className="font-display text-2xl text-white tracking-[0.3em] uppercase text-center border-b border-blue-900/30 pb-4">Мистики Людей</h2>
                    
                    <div className="flex flex-col gap-16">
                      {HUMAN_CLASSES.mystics.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-6">
                          {/* Базовый класс */}
                          <div className="flex flex-col items-center space-y-3">
                            <button 
                              onClick={() => openMockup(`Класс ${branch.base} не реализован.`)}
                              className="w-64 p-4 border-2 border-blue-600/50 bg-blue-900/30 text-center relative z-10 rounded-sm flex items-center gap-4 group hover:border-blue-400 transition-all hover:scale-105 overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="w-12 h-12 shrink-0 relative z-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-900/40 rounded-full border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.2)]" />
                                <img src={branch.icon} alt={branch.base} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 group-hover:scale-110 transition-transform drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                              </div>
                              <span className="relative z-10 font-display text-[10px] tracking-[0.2em] text-white uppercase font-bold text-left leading-tight group-hover:text-blue-200 transition-colors">{branch.base}</span>
                            </button>
                          </div>
                          
                          {/* Линии разветвления */}
                          <div className="relative w-full h-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-blue-500/50" />
                            <div className={`absolute top-4 h-[1px] bg-blue-500/50 ${branch.paths.length === 3 ? 'left-[16.6%] right-[16.6%]' : 'left-1/4 right-1/4'}`} />
                            {branch.paths.map((_, pIdx) => {
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
                            {branch.paths.map((path, pIdx) => (
                              <div key={pIdx} className="flex flex-col items-center space-y-4">
                                {/* Вторая профессия */}
                                <button 
                                  onClick={() => openMockup(`Класс ${path.second} не реализован.`)}
                                  className="w-full group/btn relative flex flex-col items-center p-2 border border-blue-900/50 bg-slate-900/40 opacity-60 hover:opacity-100 hover:border-blue-700 transition-all rounded-sm hover:scale-105 overflow-hidden"
                                >
                                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                  <div className="w-12 h-12 mb-2 relative z-10 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-slate-800/80 rounded-lg border border-blue-900/50 shadow-inner group-hover/btn:border-blue-500/50 transition-colors" />
                                    <img src={path.secondIcon} alt={path.second} referrerPolicy="no-referrer" className="w-8 h-8 object-contain relative z-20 opacity-80 group-hover/btn:opacity-100 group-hover/btn:scale-110 transition-all drop-shadow-[0_0_3px_rgba(37,99,235,0.3)]" />
                                  </div>
                                  <span className="relative z-10 font-display text-[9px] tracking-widest text-white/80 group-hover/btn:text-white transition-colors text-center leading-tight">
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
                                    if (path.third.includes('Apostle') || path.third.includes('АПОСТОЛ')) {
                                      setSelectedClass('Апостол');
                                      setTimeout(() => {
                                        document.getElementById('apostle-details')?.scrollIntoView({ behavior: 'smooth' });
                                      }, 100);
                                    } else {
                                      openMockup(`Класс ${path.third} не реализован.`);
                                    }
                                  }}
                                  className={`w-full group/btn relative flex flex-col items-center p-3 border transition-all rounded-sm hover:scale-105 overflow-hidden ${path.third.includes('Apostle') || path.third.includes('АПОСТОЛ') ? (selectedClass === 'Апостол' ? 'bg-blue-700 border-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'border-blue-500/40 bg-blue-900/20 hover:border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.1)]') : 'border-blue-900/50 bg-slate-900/40 opacity-60 hover:opacity-100 hover:border-blue-700'}`}
                                >
                                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                  <div className="w-14 h-14 mb-2 relative z-10 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-900/40 rounded-md border border-blue-500/30 shadow-[0_0_10px_rgba(37,99,235,0.1)] group-hover/btn:border-blue-400 transition-colors" />
                                    <img src={path.thirdIcon} alt={path.third} referrerPolicy="no-referrer" className="w-10 h-10 object-contain relative z-20 group-hover/btn:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                                  </div>
                                  <span className={`relative z-10 font-display text-[9px] tracking-widest text-center leading-tight transition-colors ${(path.third.includes('Apostle') || path.third.includes('АПОСТОЛ')) && selectedClass === 'Апостол' ? 'text-white' : 'text-blue-300 group-hover/btn:text-white'}`}>
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
                </div>
                </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Детали Апостола */}
        <AnimatePresence>
          {selectedClass === 'Апостол' && (
            <motion.div
              id="apostle-details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-32"
            >
              <OrnamentalDivider />

              {/* Герой-секция в стиле Wiki */}
              <section className="relative stone-card p-8 md:p-12 rounded-xl border-blue-900/40 bg-slate-950/50 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                  {/* Левая колонка: Инфо и Статы */}
                  <div className="lg:col-span-7 space-y-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-blue-400">
                        <Scroll size={18} />
                        <span className="font-display text-[10px] tracking-[0.4em] uppercase opacity-70">Класс: Мистик</span>
                      </div>
                      <h1 className="font-display text-6xl md:text-7xl text-white tracking-tighter uppercase leading-none">
                        Апостол
                      </h1>
                      <p className="text-lg text-zinc-400 font-serif italic leading-relaxed max-w-xl">
                        "Высшая ступень развития Проповедника. Мастер божественных усилений, способный превратить обычный отряд в непобедимую армию."
                      </p>
                    </div>

                    {/* Роли */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-blue-900/30 py-8">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-blue-400/60 font-display">Роль</span>
                        <p className="text-white font-display text-sm uppercase">Баффер / Поддержка</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-blue-400/60 font-display">Оружие</span>
                        <p className="text-white font-display text-sm uppercase">Меч / Дубина / Копье</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest text-blue-400/60 font-display">Доспехи</span>
                        <p className="text-white font-display text-sm uppercase">Тяжелые / Роба</p>
                      </div>
                    </div>

                    {/* Статы - Радарная диаграмма */}
                    <div className="space-y-8 relative">
                      <div className="flex items-center justify-between max-w-md">
                        <h3 className="font-display text-xs tracking-[0.2em] uppercase text-white/40">Диаграмма потенциала</h3>
                        <div className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                            <span className="text-[9px] uppercase tracking-widest text-zinc-500">Апостол</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative w-full aspect-square max-w-[450px] min-h-[300px] md:min-h-[450px] -ml-8 md:-ml-12 flex items-center justify-center">
                        {/* Декоративные круги под диаграммой */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-[80%] h-[80%] border border-blue-900/10 rounded-full animate-[pulse_4s_infinite]" />
                          <div className="w-[60%] h-[60%] border border-blue-900/20 rounded-full animate-[pulse_6s_infinite]" />
                          <div className="w-[40%] h-[40%] border border-blue-900/30 rounded-full" />
                        </div>

                        <div className="w-full h-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={[
                            { subject: 'Соло', A: 40, full: 100, icon: <User size={12} /> },
                            { subject: 'Групп. Фарм', A: 100, full: 100, icon: <Users size={12} /> },
                            { subject: 'Групп. PvP', A: 95, full: 100, icon: <Target size={12} /> },
                            { subject: 'Поддержка', A: 100, full: 100, icon: <Activity size={12} /> },
                            { subject: 'Выживаемость', A: 70, full: 100, icon: <Heart size={12} /> },
                            { subject: 'Контроль', A: 30, full: 100, icon: <Lock size={12} /> },
                          ]}>
                            <PolarGrid stroke="#1e3a8a" strokeOpacity={0.3} />
                            <PolarAngleAxis 
                              dataKey="subject" 
                              tick={({ x, y, payload }) => (
                                <g transform={`translate(${x},${y})`}>
                                  <text
                                    x={0}
                                    y={0}
                                    dy={4}
                                    textAnchor="middle"
                                    fill="#94a3b8"
                                    fontSize="9px"
                                    fontFamily="Inter"
                                    fontWeight="500"
                                    letterSpacing="0.1em"
                                    className="uppercase"
                                  >
                                    {payload.value}
                                  </text>
                                </g>
                              )}
                            />
                            <Radar
                              name="Апостол"
                              dataKey="A"
                              stroke="#3b82f6"
                              strokeWidth={2}
                              fill="#2563eb"
                              fillOpacity={0.4}
                              animationBegin={500}
                              animationDuration={1500}
                            />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Центральный элемент */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(37,99,235,1)] z-20" />
                        </div>
                      </div>

                      {/* Текстовые значения для мобилок/читаемости - УДАЛЕНО ПО ПРОСЬБЕ ПОЛЬЗОВАТЕЛЯ */}
                    </div>
                  </div>

                  {/* Правая колонка: Изображение */}
                  <div className="lg:col-span-5 relative flex items-start justify-center pt-4">
                    <div className="relative w-full max-w-[400px] h-[500px] md:h-[650px] overflow-hidden">
                      <img 
                        src={apostleBig} 
                        alt="Апостол" 
                        className="w-full h-full object-contain object-top block relative z-0"
                        style={{ 
                          imageRendering: 'smooth',
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.includes('unsplash.com')) return;
                          target.src = 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1920&h=1080';
                        }}
                      />
                      {/* Мягкое затемнение снизу для эстетичного перехода */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Секция умений */}
              <section id="skills" className="space-y-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-blue-900/50 pb-8">
                  <div className="space-y-2">
                    <h2 className="font-display text-5xl text-white tracking-widest uppercase">Умения Апостола</h2>
                    <p className="font-serif italic text-zinc-500">Божественные искусства защиты и усиления</p>
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
                        onClick={() => setSkillView('progression')}
                        className={`px-4 py-2 font-display text-[9px] tracking-widest uppercase transition-all ${skillView === 'progression' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'text-blue-400/60 hover:text-blue-300'}`}
                      >
                        Прогрессия (40-83)
                      </button>
                    </div>

                    {skillView === 'all' && (
                      <div className="flex flex-wrap gap-3">
                        {(Object.keys(tabLabels) as Array<keyof typeof tabLabels>).map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 font-display text-[10px] tracking-[0.2em] uppercase transition-all duration-300 border rounded-sm relative overflow-hidden group ${
                              activeTab === tab 
                                ? 'bg-blue-700/40 border-blue-400 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                                : 'bg-slate-900/40 border-blue-900/50 text-blue-400/60 hover:text-white hover:border-blue-500 hover:bg-blue-900/20'
                            }`}
                          >
                            {activeTab === tab && (
                              <motion.div 
                                layoutId="activeTabGlow"
                                className="absolute inset-0 bg-blue-500/10 pointer-events-none"
                              />
                            )}
                            <span className="relative z-10">{tabLabels[tab]}</span>
                          </button>
                        ))}
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
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {APOSTLE_SKILLS[activeTab].map((skill) => (
                        <SkillCard 
                          key={skill.name} 
                          name={skill.name} 
                          desc={skill.desc} 
                          onClick={() => openSkillDetail(skill)}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="progression"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8"
                    >
                      {/* Level Selector - Compact Sidebar */}
                      <div className="lg:border-r lg:border-blue-900/30 lg:pr-8 space-y-4">
                        <div className="flex lg:flex-col flex-wrap gap-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                          {SKILL_PROGRESSION.map((stage) => (
                            <button
                              key={stage.level}
                              onClick={() => setSelectedLevel(stage.level)}
                              className={`flex items-center justify-between px-4 py-4 border transition-all rounded-sm group ${
                                selectedLevel === stage.level 
                                  ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_25px_rgba(37,99,235,0.6)] scale-105 z-10' 
                                  : 'bg-slate-900/60 border-blue-900/40 text-blue-400/70 hover:border-blue-500 hover:text-blue-300'
                              }`}
                            >
                              <span className={`text-xs uppercase tracking-widest font-black transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] ${selectedLevel === stage.level ? 'scale-110' : ''}`}>Ур. {stage.level}</span>
                              {selectedLevel === stage.level && <Star size={12} className="fill-current animate-pulse" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Selected Level Details - Compact Grid */}
                      <div className="space-y-6">
                        <AnimatePresence mode="wait">
                          {SKILL_PROGRESSION.filter(s => s.level === selectedLevel).map((stage) => (
                            <motion.div
                              key={stage.level}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="space-y-6"
                            >
                              <div className="flex items-center justify-between border-b border-blue-900/50 pb-6">
                                <div className="flex items-center gap-6">
                                  <div className="w-14 h-14 rounded-full bg-blue-600 border-2 border-blue-400 flex items-center justify-center font-display text-2xl text-white shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                    {stage.level}
                                  </div>
                                  <div>
                                    <h4 className="font-display text-2xl text-white tracking-widest uppercase">Навыки уровня</h4>
                                    <p className="text-blue-400 text-xs uppercase tracking-[0.3em] font-bold">Прогрессия Апостола</p>
                                  </div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {stage.skills.map((progSkill, kIdx) => {
                                  const skillData = Object.values(APOSTLE_SKILLS)
                                    .flat()
                                    .find(s => s.name === progSkill.name);
                                  
                                  return (
                                    <motion.button 
                                      key={kIdx} 
                                      onClick={() => skillData && openSkillDetail(skillData)}
                                      className="p-3 bg-blue-950/10 border border-blue-900/20 rounded-sm flex items-center gap-3 group hover:border-blue-500/40 hover:bg-blue-900/20 transition-all text-left"
                                    >
                                      <div className="w-10 h-10 shrink-0 bg-black/40 border border-blue-900/50 p-0.5 rounded-sm overflow-hidden group-hover:border-blue-400 transition-colors">
                                        <img 
                                          src={skillIcon} 
                                          alt={progSkill.name}
                                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                          <span className="text-[11px] text-white font-display uppercase tracking-wider truncate group-hover:text-blue-200 transition-colors">{progSkill.name}</span>
                                          <span className="text-[9px] font-mono text-blue-400 font-bold shrink-0">Ур. {progSkill.level}</span>
                                        </div>
                                        {skillData && (
                                          <p className="text-[10px] text-zinc-500 font-sans line-clamp-1 group-hover:text-zinc-300 transition-colors">{skillData.desc}</p>
                                        )}
                                      </div>
                                    </motion.button>
                                  );
                                })}
                              </div>

                              <div className="pt-4 flex justify-center">
                                <button 
                                  onClick={() => setSkillView('all')}
                                  className="text-[9px] font-display uppercase tracking-[0.2em] text-blue-400/60 hover:text-white transition-all flex items-center gap-2 group"
                                >
                                  <span>Все умения по категориям</span>
                                  <ChevronDown size={12} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Футер */}
      <footer className="relative bg-black border-t border-blue-900/50 py-24 mt-32 overflow-hidden">
        {/* Фоновое изображение для футера */}
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1920")',
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
              <button key={link} onClick={() => openMockup()} className="font-display text-[10px] tracking-widest uppercase text-blue-400/40 hover:text-white transition-colors">
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
