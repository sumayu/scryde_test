import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sword, Shield, FlaskConical, Users, Anchor, 
  Sparkles, Award, ChevronRight, Info, AlertCircle,
  Coins, BookOpen, Star, Wand2
} from 'lucide-react';
import { 
  NORMAL_SKILL_TREE, PLEDGE_SKILL_TREE, CERTIFICATION_SKILLS, 
  FISHING_SKILLS, COLLECTION_SKILLS, SUB_UNIT_SKILL_TREE, TRANSFER_SKILL_TREE,
  TRANSFORMATION_SKILLS
} from '../../data/skillTrees';
import { ClassSkillTree, Skill } from '../../types';

type TreeType = 'normal' | 'pledge' | 'subUnit' | 'certification' | 'transfer' | 'fishing' | 'collection' | 'transformation';

const SkillCard = ({ skill, index }: { skill: any, index: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="group relative p-4 bg-slate-900/40 border border-blue-900/30 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all rounded-sm overflow-hidden"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-black/60 border border-blue-900/50 p-1 group-hover:border-blue-400 transition-colors shrink-0">
        <div className="w-full h-full bg-blue-900/20 flex items-center justify-center">
          <Sparkles size={20} className="text-blue-400 opacity-50" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider truncate group-hover:text-blue-300 transition-colors">
            {skill.name}
          </h4>
          {skill.maxLevel && (
            <span className="text-[10px] font-mono text-blue-500 font-bold shrink-0">
              MAX: {skill.maxLevel}
            </span>
          )}
        </div>
        
        <div className="mt-1 flex flex-wrap gap-2">
          <span className="text-[9px] text-zinc-500 uppercase tracking-tighter flex items-center gap-1">
            <Info size={10} />
            Ур: {skill.minLevel || skill.clanLevel || 1}
          </span>
          {skill.cost !== undefined && (
            <span className="text-[9px] text-amber-500/80 uppercase tracking-tighter flex items-center gap-1">
              <Coins size={10} />
              {skill.cost === 0 ? 'Бесплатно' : `${skill.cost} Adena`}
            </span>
          )}
          {skill.isClicked && (
            <span className="text-[9px] text-green-400 uppercase tracking-tighter animate-pulse flex items-center gap-1">
              <Star size={10} />
              Двойной клик
            </span>
          )}
          {skill.itemId && (
            <span className="text-[9px] text-purple-400 uppercase tracking-tighter flex items-center gap-1">
              <BookOpen size={10} />
              Нужен предмет
            </span>
          )}
        </div>

        {skill.desc && (
          <p className="mt-2 text-[11px] text-zinc-400 leading-relaxed line-clamp-2 group-hover:text-zinc-300">
            {skill.desc}
          </p>
        )}

        {(skill.disabledOn || skill.enabledOn) && (
          <div className="mt-2 flex gap-2">
            {skill.disabledOn?.map((srv: string) => (
              <span key={srv} className="text-[8px] bg-red-900/20 text-red-400 px-1.5 py-0.5 border border-red-900/30 uppercase">
                Disabled: {srv}
              </span>
            ))}
            {skill.enabledOn?.map((srv: string) => (
              <span key={srv} className="text-[8px] bg-green-900/20 text-green-400 px-1.5 py-0.5 border border-green-900/30 uppercase">
                Enabled: {srv}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
    
    {/* Decorative accents */}
    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-blue-500/5 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/30 transition-all duration-700" />
  </motion.div>
);

export const SkillTreeManager = () => {
  const [activeType, setActiveType] = useState<TreeType>('normal');
  const [selectedClass, setSelectedClass] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'normal', name: 'Классы', icon: Sword, desc: 'Умения персонажей' },
    { id: 'pledge', name: 'Клан', icon: Award, desc: 'Клановые бонусы' },
    { id: 'subUnit', name: 'Отряды', icon: Users, desc: 'Бонусы отрядов' },
    { id: 'certification', name: 'Саб-класс', icon: Star, desc: 'Сертификация' },
    { id: 'transfer', name: 'Трансфер', icon: BookOpen, desc: '3-я профессия' },
    { id: 'fishing', name: 'Рыбалка', icon: Anchor, desc: 'Общие навыки' },
    { id: 'collection', name: 'Коллекции', icon: Sparkles, desc: 'Сбор предметов' },
    { id: 'transformation', name: 'Трансформации', icon: Wand2, desc: 'Свитки трансформации' },
  ];

  const currentSkills = () => {
    switch(activeType) {
      case 'normal': return NORMAL_SKILL_TREE.find(c => c.id === selectedClass)?.skills || [];
      case 'pledge': return PLEDGE_SKILL_TREE;
      case 'subUnit': return SUB_UNIT_SKILL_TREE;
      case 'certification': return CERTIFICATION_SKILLS;
      case 'transfer': return TRANSFER_SKILL_TREE.find(c => c.id === selectedClass)?.skills || TRANSFER_SKILL_TREE[0].skills;
      case 'fishing': return FISHING_SKILLS;
      case 'collection': return COLLECTION_SKILLS;
      case 'transformation': return TRANSFORMATION_SKILLS;
      default: return [];
    }
  };

  const filteredSkills = currentSkills().filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-transparent p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-blue-900/30 pb-8">
        <div className="space-y-2">
          <h2 className="font-display text-4xl tracking-widest uppercase text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Древо Умений
          </h2>
          <p className="text-zinc-500 font-serif italic text-sm">
            Полная база знаний по навыкам и способностям мира Scryde
          </p>
        </div>
        
        <div className="relative w-full md:w-80">
          <input 
            type="text"
            placeholder="Поиск умения..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900/60 border border-blue-900/50 px-4 py-2.5 rounded-sm text-sm text-zinc-300 focus:outline-none focus:border-blue-500 focus:bg-slate-900/80 transition-all font-sans"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Info size={14} className="text-blue-900" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Categories */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-display tracking-[0.3em] text-blue-500/80 ml-1">Категории</span>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveType(cat.id as TreeType)}
                  className={`w-full group flex items-center gap-4 p-4 border transition-all duration-300 relative ${activeType === cat.id ? 'bg-blue-600/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] translate-x-2' : 'bg-slate-900/40 border-blue-900/30 hover:border-blue-500/40 hover:bg-slate-900/60'}`}
                >
                  <div className={`p-2 transition-colors ${activeType === cat.id ? 'text-white' : 'text-blue-900 group-hover:text-blue-400'}`}>
                    <cat.icon size={20} />
                  </div>
                  <div className="text-left">
                    <div className={`font-display text-xs uppercase tracking-widest ${activeType === cat.id ? 'text-white' : 'text-zinc-400'}`}>{cat.name}</div>
                    <div className="text-[10px] text-zinc-600 font-sans">{cat.desc}</div>
                  </div>
                  {activeType === cat.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-navigation for Normal Classes or Transfer */}
          {(activeType === 'normal' || activeType === 'transfer') && (
            <div className="space-y-1 pt-6">
              <span className="text-[10px] uppercase font-display tracking-[0.3em] text-blue-500/80 ml-1">Выберите Класс</span>
              <div className="max-h-[400px] overflow-y-auto overflow-x-hidden pr-2 space-y-1 custom-scrollbar">
                {(activeType === 'normal' ? NORMAL_SKILL_TREE : TRANSFER_SKILL_TREE).map((cls) => (
                  <button
                    key={cls.id}
                    onClick={() => setSelectedClass(cls.id)}
                    className={`w-full flex items-center justify-between p-3 text-left transition-all ${selectedClass === cls.id ? 'bg-blue-900/30 text-blue-300 translate-x-1' : 'text-zinc-500 hover:text-zinc-300 hover:bg-slate-900/30'}`}
                  >
                    <div className="flex flex-col">
                      <span className="text-[11px] font-display uppercase tracking-wider">{cls.name}</span>
                      <span className="text-[8px] uppercase tracking-tighter opacity-60 font-sans">{cls.race}</span>
                    </div>
                    {selectedClass === cls.id && <ChevronRight size={14} />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Skills Grid */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeType + (activeType === 'normal' ? selectedClass : '')}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center bg-blue-900/5 border-l-2 border-blue-500 p-4">
                <div>
                  <h3 className="font-display text-lg text-white tracking-widest uppercase">
                    {activeType === 'normal' 
                      ? (NORMAL_SKILL_TREE.find(c => c.id === selectedClass)?.name || "Выберите класс")
                      : (activeType === 'transfer' 
                         ? (TRANSFER_SKILL_TREE.find(c => c.id === selectedClass)?.name || "Выберите класс") 
                         : categories.find(c => c.id === activeType)?.name)}
                  </h3>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
                    Всего умений: {filteredSkills.length}
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] uppercase text-zinc-600">Версия базы</span>
                    <span className="text-[10px] font-mono text-blue-500">v24.5-ST</span>
                  </div>
                </div>
              </div>

              {filteredSkills.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredSkills.map((skill, idx) => (
                    <SkillCard key={skill.name + idx} skill={skill} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 space-y-4 border border-dashed border-blue-900/30 rounded-lg">
                  <AlertCircle size={48} className="text-blue-900 opacity-30" />
                  <p className="font-serif italic text-zinc-600">Навыки не найдены по вашему запросу</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
