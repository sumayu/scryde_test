/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ChevronDown
} from 'lucide-react';
import { RACES, HUMAN_CLASSES, APOSTLE_SKILLS } from './constants';

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
            src="https://i.ibb.co/8Q4nhHL/skill.png" 
            alt="Skill Icon" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=60&w=100&h=100';
            }}
          />
        </div>
      </div>
      <div className="space-y-1.5 flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-display text-white text-sm font-bold tracking-widest uppercase group-hover:text-blue-300 transition-colors">{name}</h4>
          <Star size={10} className="text-blue-900 group-hover:text-blue-400 transition-colors" />
        </div>
        <p className="text-zinc-200 text-base italic leading-relaxed line-clamp-3 group-hover:text-white transition-colors">{desc}</p>
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
                  src="https://i.ibb.co/8Q4nhHL/skill.png" 
                  alt="Skill Icon" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=200&h=200';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | undefined>();
  const [selectedRace, setSelectedRace] = useState<string | null>(null);
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
      <div 
        className="fixed inset-0 z-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://i.ibb.co/DfFxwn51/bg.png")',
          filter: 'brightness(0.5) saturate(1.2)'
        }}
      />
      
      <MockupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} message={modalMessage} />
      <SkillDetailModal isOpen={!!selectedSkill} onClose={() => setSelectedSkill(null)} skill={selectedSkill} />

      {/* Навигация */}
      <nav className="border-b border-blue-900/50 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src="https://i.ibb.co/nq0Ksmgk/logo.png" 
              alt="Scryde" 
              className="h-10 brightness-125 drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599305090748-366398a67cb5?auto=format&fit=crop&q=60&w=200';
              }}
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
            <p className="font-serif italic text-zinc-500">Выберите свое происхождение в мире Адена</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {RACES.map((race) => (
              <button 
                key={race}
                onClick={() => {
                  if (race === 'Человек') {
                    setSelectedRace(race);
                    setSelectedClass(null); // Reset class when race changes
                  } else {
                    openMockup(`Раса ${race} не реализована в данном тесте. Доступен только Человек.`);
                  }
                }}
                className={`group p-6 border transition-all duration-500 relative overflow-hidden ${selectedRace === race ? 'bg-blue-900/30 border-blue-500' : 'bg-slate-900/40 border-blue-900/50 hover:border-blue-500/50'}`}
              >
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className={`font-display text-sm tracking-widest uppercase transition-colors ${selectedRace === race ? 'text-white' : 'text-zinc-500 group-hover:text-blue-400'}`}>
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
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-4 space-y-8">
                  <div className="space-y-4">
                    <h2 className="font-display text-4xl text-white tracking-widest uppercase">Линия Людей</h2>
                    <p className="text-zinc-400 font-serif leading-relaxed">
                      В данном макете реализован только Апостол для демонстрации структуры и дизайна сайта.
                    </p>
                  </div>
                  <div className="p-6 border-l-4 border-blue-700 bg-blue-900/20 space-y-3">
                    <div className="flex items-center gap-2 text-blue-400">
                      <Crosshair size={18} />
                      <span className="font-display text-xs tracking-widest uppercase">Тестовый макет</span>
                    </div>
                    <p className="text-xs text-zinc-500 italic">
                      Все остальные классы и расы находятся в разработке.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-12">
                  <div className="space-y-16">
                    <h2 className="font-display text-2xl text-blue-400/80 tracking-[0.3em] uppercase text-center">Древо Классов Людей</h2>
                    
                    <div className="grid grid-cols-1 gap-20">
                      {HUMAN_CLASSES.warriors.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center space-y-8">
                          {/* Базовый класс */}
                          <div className="w-64 p-4 border-2 border-blue-600/50 bg-blue-900/30 text-center relative z-10 rounded-sm shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                            <span className="font-display text-xs tracking-[0.3em] text-white uppercase font-bold">{branch.base}</span>
                          </div>
                          
                          {/* Линии разветвления */}
                          <div className="relative w-full max-w-2xl h-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-blue-500/50" />
                            <div className="absolute top-4 left-1/4 right-1/4 h-[1px] bg-blue-500/50" />
                            <div className="absolute top-4 left-1/4 w-[1px] h-4 bg-blue-500/50" />
                            <div className="absolute top-4 right-1/4 w-[1px] h-4 bg-blue-500/50" />
                          </div>

                          {/* Параллельные пути */}
                          <div className="grid grid-cols-2 gap-8 md:gap-16 w-full max-w-3xl">
                            {branch.paths.map((path, pIdx) => (
                              <div key={pIdx} className="flex flex-col items-center space-y-6">
                                {/* Вторая профессия */}
                                <button 
                                  onClick={() => openMockup(`Класс ${path.second} не реализован.`)}
                                  className="w-full p-3 border border-blue-900/50 bg-slate-900/60 text-[10px] font-display tracking-widest text-zinc-300 hover:text-blue-400 hover:border-blue-700 transition-all text-center rounded-sm hover:scale-105"
                                >
                                  {path.second}
                                </button>
                                
                                {/* Линия вниз */}
                                <div className="h-6 w-[1px] bg-blue-900/50 relative">
                                  <div className="absolute bottom-0 -left-[5px] border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-900/50" />
                                </div>
                                
                                {/* Третья профессия */}
                                <button 
                                  onClick={() => openMockup(`Класс ${path.third} не реализован.`)}
                                  className="w-full p-4 border border-blue-500/40 bg-blue-900/20 text-[10px] font-display tracking-widest text-blue-300 hover:text-white hover:border-blue-400 transition-all text-center shadow-[0_0_15px_rgba(37,99,235,0.1)] rounded-sm hover:scale-105"
                                >
                                  {path.third}
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="font-display text-lg text-blue-400/60 tracking-[0.2em] uppercase border-b border-blue-900/50 pb-2">Мистики</h3>
                    <div className="flex flex-wrap gap-3">
                      {HUMAN_CLASSES.mystics.map(cls => (
                        <button 
                          key={cls} 
                          onClick={() => {
                            if (cls === 'Апостол') {
                              setSelectedClass(cls);
                              setTimeout(() => {
                                document.getElementById('apostle-details')?.scrollIntoView({ behavior: 'smooth' });
                              }, 100);
                            } else {
                              openMockup(`Класс ${cls} не реализован. В макете доступен только Апостол.`);
                            }
                          }}
                          className={`px-4 py-2 border font-display tracking-widest text-xs transition-all ${selectedClass === cls ? 'bg-blue-700 text-white border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-slate-900/40 border-blue-900/50 text-zinc-500 hover:text-blue-400 hover:border-blue-700'}`}
                        >
                          {cls}
                        </button>
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

                    {/* Статы */}
                    <div className="space-y-6 max-w-md">
                      <h3 className="font-display text-xs tracking-[0.2em] uppercase text-white/40">Характеристики класса</h3>
                      {[
                        { label: 'Соло-игра', val: 40 },
                        { label: 'Групповой фарм', val: 100 },
                        { label: 'Групповое PvP', val: 95 },
                        { label: 'Поддержка', val: 100 },
                        { label: 'Выживаемость', val: 70 },
                        { label: 'Контроль', val: 30 },
                      ].map((stat) => (
                        <div key={stat.label} className="space-y-2">
                          <div className="flex justify-between text-[10px] uppercase tracking-widest">
                            <span className="text-zinc-400">{stat.label}</span>
                            <span className="text-blue-400">{stat.val}%</span>
                          </div>
                          <div className="h-1 w-full bg-blue-900/20 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${stat.val}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-blue-700 to-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Правая колонка: Изображение */}
                  <div className="lg:col-span-5 relative flex items-start justify-center pt-4">
                    <div className="relative w-full max-w-[400px] h-[500px] md:h-[650px] overflow-hidden">
                      <img 
                        src="https://i.ibb.co/fGKj02CN/apostle.png" 
                        alt="Апостол" 
                        className="w-full h-full object-contain object-top block relative z-0"
                        style={{ 
                          imageRendering: 'smooth',
                        }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519074063912-ad2fe3f51964?auto=format&fit=crop&q=80&w=1920&h=1080';
                        }}
                        referrerPolicy="no-referrer"
                      />
                      {/* Мягкое затемнение снизу для эстетичного перехода */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Секция умений */}
              <section id="skills" className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-blue-900/50 pb-8">
                  <div className="space-y-2">
                    <h2 className="font-display text-5xl text-white tracking-widest uppercase">Умения Апостола</h2>
                    <p className="font-serif italic text-zinc-500">Божественные искусства защиты и усиления</p>
                  </div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="wait">
                    {APOSTLE_SKILLS[activeTab].map((skill) => (
                      <SkillCard 
                        key={skill.name} 
                        name={skill.name} 
                        desc={skill.desc} 
                        onClick={() => openSkillDetail(skill)}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Футер */}
      <footer className="bg-black border-t border-blue-900/50 py-24 mt-32">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <img 
            src="https://i.ibb.co/nq0Ksmgk/logo.png" 
            alt="Scryde Footer" 
            className="h-16 mx-auto brightness-110 opacity-80 drop-shadow-[0_0_20px_rgba(37,99,235,0.2)]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599305090748-366398a67cb5?auto=format&fit=crop&q=60&w=100';
            }}
          />
          <div className="flex justify-center gap-12">
            {['База данных', 'Карта', 'Предметы', 'Кланы'].map(item => (
              <button 
                key={item} 
                onClick={() => openMockup()}
                className="font-display text-[10px] tracking-[0.3em] uppercase text-blue-400/40 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="pt-12 border-t border-blue-900/10">
            <p className="font-display text-[9px] tracking-[0.4em] text-zinc-700 uppercase">
              © 2026 Lineage II Fan Database • Создано для сообщества Scryde
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
