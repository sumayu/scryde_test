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
  Wind, 
  Droplets, 
  Skull, 
  Heart, 
  Sword, 
  BookOpen, 
  Users, 
  ChevronRight,
  Info,
  Star
} from 'lucide-react';
import { RACES, HUMAN_CLASSES, APOSTLE_SKILLS } from './constants';

const SkillCard = ({ name, desc, icon: Icon }: { name: string, desc: string, icon: any }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="group relative bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300"
  >
    <div className="flex items-start gap-3">
      <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
        <Icon size={18} />
      </div>
      <div>
        <h4 className="text-zinc-100 font-semibold text-sm mb-1">{name}</h4>
        <p className="text-zinc-400 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'buffs' | 'magical' | 'physical' | 'debuffs' | 'toggle'>('buffs');

  const getIcon = (category: string) => {
    switch (category) {
      case 'buffs': return Heart;
      case 'magical': return Zap;
      case 'physical': return Sword;
      case 'debuffs': return Skull;
      case 'toggle': return Flame;
      default: return Info;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-indigo-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-bottom border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://ais-dev-5z7cqgma7kqupugtcilb7x-127797539241.europe-west2.run.app/logo.png" 
              alt="Scryde Logo" 
              className="h-10 w-auto brightness-110"
              onError={(e) => {
                // Fallback if the local image isn't available yet or path is wrong
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/scryde/200/80';
              }}
            />
            <div className="h-6 w-px bg-zinc-800 mx-2" />
            <span className="text-sm font-mono tracking-widest uppercase text-zinc-500">Database v2.5</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['Races', 'Classes', 'Skills', 'Guide'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-32">
        
        {/* Hero Section */}
        <section id="hero" className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest"
            >
              <Star size={12} />
              Featured Class: Apostle
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none"
            >
              APOSTLE <br />
              <span className="text-zinc-600">THE DIVINE</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-zinc-400 max-w-md leading-relaxed"
            >
              The ultimate support class of the Human race. Masters of divine protection, 
              Apostles empower their allies with unmatched buffs, turning any party into an unstoppable force.
            </motion.p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
                Start Playing
              </button>
              <button className="px-8 py-4 border border-zinc-800 text-white font-bold rounded-full hover:bg-zinc-900 transition-colors">
                View Tree
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group"
          >
            <img 
              src="https://ais-dev-5z7cqgma7kqupugtcilb7x-127797539241.europe-west2.run.app/apostle.png" 
              alt="Apostle" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/apostle/800/800';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase mb-1">Class Tier</p>
                <p className="text-2xl font-bold text-white">S-RANK SUPPORT</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono text-zinc-500 uppercase mb-1">Primary Stat</p>
                <p className="text-2xl font-bold text-white">WIT / MEN</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Race System */}
        <section id="races" className="space-y-12">
          <div className="flex items-end justify-between border-b border-zinc-800 pb-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">RACE SYSTEM</h2>
            <p className="text-sm font-mono text-zinc-500">01 / 06 RACES AVAILABLE</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {RACES.map((race, idx) => (
              <div 
                key={race}
                className={`p-6 rounded-2xl border transition-all duration-300 ${race === 'Человек' ? 'bg-white border-white text-black' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'}`}
              >
                <p className="text-[10px] font-bold mb-4 opacity-50">0{idx + 1}</p>
                <h3 className="text-lg font-bold uppercase tracking-tight">{race}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Class Tree */}
        <section id="classes" className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-tight">HUMAN TREE</h2>
            <p className="text-zinc-400 leading-relaxed">
              Humans are the most versatile race, offering a wide range of specializations from heavy warriors to powerful mystics.
            </p>
            <div className="p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
              <div className="flex items-center gap-3 text-indigo-400 mb-2">
                <Info size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Note</span>
              </div>
              <p className="text-xs text-indigo-300/80">
                Apostle is the final evolution of the Cleric path, focusing on party-wide enhancements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">
                <Sword size={14} /> Warriors
              </div>
              <div className="flex flex-wrap gap-2">
                {HUMAN_CLASSES.warriors.map(cls => (
                  <span key={cls} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs hover:border-zinc-600 transition-colors cursor-default">
                    {cls}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4">
                <Zap size={14} /> Mystics
              </div>
              <div className="flex flex-wrap gap-2">
                {HUMAN_CLASSES.mystics.map(cls => (
                  <span 
                    key={cls} 
                    className={`px-3 py-1.5 rounded-lg text-xs transition-all duration-300 cursor-default border ${cls === 'Апостол' ? 'bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/20' : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'}`}
                  >
                    {cls}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apostle Skills */}
        <section id="skills" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">APOSTLE SKILLS</h2>
            <div className="flex flex-wrap gap-2 p-1 bg-zinc-900 rounded-xl border border-zinc-800">
              {(['buffs', 'magical', 'physical', 'debuffs', 'toggle'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="wait">
              {APOSTLE_SKILLS[activeTab].map((skill) => (
                <SkillCard 
                  key={skill.name} 
                  name={skill.name} 
                  desc={skill.desc} 
                  icon={getIcon(activeTab)} 
                />
              ))}
            </AnimatePresence>
          </div>
          
          {/* Special Skills */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 text-indigo-400">
                <Zap size={24} />
                <h3 className="text-xl font-bold uppercase tracking-tight">Transformation: Inquisitor</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {APOSTLE_SKILLS.transformation[0].desc}
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-zinc-800/50 to-transparent border border-zinc-800 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <Users size={24} />
                <h3 className="text-xl font-bold uppercase tracking-tight">Clan & Hero Skills</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Magic Firework: Магия вне Хогвартса!
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-20 mt-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <img 
              src="https://ais-dev-5z7cqgma7kqupugtcilb7x-127797539241.europe-west2.run.app/logo.png" 
              alt="Scryde Logo" 
              className="h-8 w-auto grayscale opacity-50"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/scryde/200/80';
              }}
            />
            <p className="text-sm text-zinc-500 max-w-xs">
              The ultimate knowledge base for Lineage II adventurers. Crafted for the Scryde community.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-300 transition-colors">Class Guides</a></li>
              <li><a href="#" className="hover:text-zinc-300 transition-colors">Raid Bosses</a></li>
              <li><a href="#" className="hover:text-zinc-300 transition-colors">Item Database</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Community</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-300 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-zinc-300 transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-zinc-300 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">© 2026 SCRYDE DATABASE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
