export const RACES = [
  "Человек",
  "Эльф",
  "Темный Эльф",
  "Орк",
  "Гном",
  "Камаэль"
];

export const HUMAN_CLASSES = {
  warriors: [
    {
      base: "ВОИТЕЛЬ (Human Fighter)",
      icon: "/warrior.png",
      paths: [
        { 
          second: "ВОИН (Warrior)", 
          secondIcon: "/warrior.png",
          secondPaths: [
            { third: "КОПЕЙЩИК (Warlord)", thirdIcon: "/warlord.png", fourth: "ПОЛКОВОДЕЦ (Dreadnought)", fourthIcon: "/dreadnought.png" },
            { third: "ГЛАДИАТОР (Gladiator)", thirdIcon: "/gladiator.png", fourth: "ДУЭЛИСТ (Duelist)", fourthIcon: "/duelist.png" }
          ]
        },
        { 
          second: "РЫЦАРЬ (Human Knight)", 
          secondIcon: "/human_knight.png",
          secondPaths: [
            { third: "ПАЛАДИН (Paladin)", thirdIcon: "/paladin.png", fourth: "РЫЦАРЬ ФЕНИКСА (Phoenix Knight)", fourthIcon: "/phoenix_knight.png" },
            { third: "МСТИТЕЛЬ (Dark Avenger)", thirdIcon: "/dark_avenger.png", fourth: "РЫЦАРЬ АДА (Hell Knight)", fourthIcon: "/hell_knight.png" }
          ]
        },
        { 
          second: "РАЗБОЙНИК (Rogue)", 
          secondIcon: "/rogue.png",
          secondPaths: [
            { third: "ИСКАТЕЛЬ СОКРОВИЩ (Treasure Hunter)", thirdIcon: "/treasure_hunter.png", fourth: "АВАНТЮРИСТ (Adventurer)", fourthIcon: "/adventurer.png" },
            { third: "СТРЕЛОК (Hawkeye)", thirdIcon: "/hawkeye.png", fourth: "СНАЙПЕР (Sagittarius)", fourthIcon: "/sagittarius.png" }
          ]
        }
      ]
    }
  ],
  mystics: [
    {
      base: "МАГ (Human Mystic)",
      icon: "/human_wizard.png",
      paths: [
        { 
          second: "КОЛДУН (Human Wizard)", 
          secondIcon: "/human_wizard.png",
          secondPaths: [
            { third: "СОРКЕР (Sorcerer)", thirdIcon: "/sorcerer_ss.png", fourth: "АРХИМАГ (Archmage)", fourthIcon: "/archmage.png" },
            { third: "НЕКРОМАНТ (Necromancer)", thirdIcon: "/necromancer.png", fourth: "ПОЖИРАТЕЛЬ ДУШ (Soultaker)", fourthIcon: "/soultaker.png" },
            { third: "ПРИЗЫВАТЕЛЬ (Warlock)", thirdIcon: "/warlock.png", fourth: "ЧЕРНОКНИЖНИК (Arcana Lord)", fourthIcon: "/arcana_lord.png" }
          ]
        },
        { 
          second: "КЛЕРИК (Cleric)", 
          secondIcon: "/cleric.png",
          secondPaths: [
            { third: "ЕПИСКОП (Bishop)", thirdIcon: "/bishop.png", fourth: "КАРДИНАЛ (Cardinal)", fourthIcon: "/cardinal.png" },
            { third: "ПРОПОВЕДНИК (Prophet)", thirdIcon: "/prophet.png", fourth: "ИЕРОФАНТ (Hierophant)", fourthIcon: "/hierophant.png" }
          ]
        }
      ]
    }
  ]
};

export const ELVEN_CLASSES = {
  warriors: [
    {
      base: "ЭЛЬФИЙСКИЙ ВОИТЕЛЬ (Elven Fighter)",
      icon: "/elf_warrior.png",
      paths: [
        {
          second: "ЭЛЬФИЙСКИЙ РЫЦАРЬ (Elven Knight)",
          secondIcon: "/elvenknight.png",
          secondPaths: [
            { third: "ХРАМОВНИК (Temple Knight)", thirdIcon: "/elvenknight.png", fourth: "РЫЦАРЬ ЕВЫ (Eva Templar)", fourthIcon: "/evastemplar.png" },
            { third: "МЕНЕСТРЕЛЬ (Swordsinger)", thirdIcon: "/swordsinger.png", fourth: "ВИРТУОЗ (Sword Muse)", fourthIcon: "/swordmuse.png" }
          ]
        },
        {
          second: "ЭЛЬФИЙСКИЙ РАЗВЕДЧИК (Elven Scout)",
          secondIcon: "/elf_scout.png",
          secondPaths: [
            { third: "СЛЕДОПЫТ (Plains Walker)", thirdIcon: "/plainswalker.png", fourth: "СТРАННИК ВЕТРА (Wind Rider)", fourthIcon: "/windrider.png" },
            { third: "СЕРЕБРЯНЫЙ РЕЙНДЖЕР (Silver Ranger)", thirdIcon: "/silverranger.png", fourth: "СТРАЖ БЕЛОГО СВЕТА (Moonlight Sentinel)", fourthIcon: "/moonlightsentinel.png" }
          ]
        }
      ]
    }
  ],
  mystics: [
    {
      base: "ЭЛЬФИЙСКИЙ МАГ (Elven Mystic)",
      icon: "/elf_mage.png",
      paths: [
        {
          second: "ЭЛЬФИЙСКИЙ КОЛДУН (Elven Wizard)",
          secondIcon: "/elvenwizard.png",
          secondPaths: [
            { third: "ПЕВЕЦ ЗАКЛИНАНИЙ (Spellsinger)", thirdIcon: "/spellsinger.png", fourth: "МИСТИЧЕСКАЯ МУЗА (Mystic Muse)", fourthIcon: "/mysticmuse.png" },
            { third: "ПОСЛЕДОВАТЕЛЬ СТИХИЙ (Elemental Summoner)", thirdIcon: "/elementalsummoner.png", fourth: "МАСТЕР СТИХИЙ (Elemental Master)", fourthIcon: "/elementalmaster.png" }
          ]
        },
        {
          second: "ОРАКУЛ (Oracle)",
          secondIcon: "/oracle.png",
          secondPaths: [
            { third: "СТАРЕЙШИНА (Elder)", thirdIcon: "/oracle.png", fourth: "МУДРЕЦ ЕВЫ (Eva Saint)", fourthIcon: "/evassaint.png" }
          ]
        }
      ]
    }
  ]
};

export const DARK_ELVEN_CLASSES = {
  warriors: [
    {
      base: "ТЕМНЫЙ ВОИТЕЛЬ (Dark Fighter)",
      icon: "/darkelf_warrior.png",
      paths: [
        {
          second: "РЫЦАРЬ ПАЛАСА (Palus Knight)",
          secondIcon: "/darkelf_warrior.png",
          secondPaths: [
            { third: "РЫЦАРЬ ШИЛЕН (Shillien Knight)", thirdIcon: "/shillienknight.png", fourth: "ХРАМОВНИК ШИЛЕН (Shillien Templar)", fourthIcon: "/shillientemplar.png" },
            { third: "ТАНЦОР СМЕРТИ (Bladedancer)", thirdIcon: "/bladedancer.png", fourth: "ПРИЗРАЧНЫЙ ТАНЦОР (Spectral Dancer)", fourthIcon: "/spectraldancer_3rd.png" }
          ]
        },
        {
          second: "УБИЙЦА (Assassin)",
          secondIcon: "/darkelf_assassin.png",
          secondPaths: [
            { third: "СТРАЖ СМЕРТИ (Abyss Walker)", thirdIcon: "/abysswalker.png", fourth: "ПРИЗРАЧНЫЙ ОХОТНИК (Ghost Hunter)", fourthIcon: "/ghosthunter.png" },
            { third: "ПРИЗРАЧНЫЙ РЕЙНДЖЕР (Phantom Ranger)", thirdIcon: "/phantomranger.png", fourth: "СТРАЖ ТЕНЕЙ (Ghost Sentinel)", fourthIcon: "/ghostsentinel.png" }
          ]
        }
      ]
    }
  ],
  mystics: [
    {
      base: "ТЕМНЫЙ МАГ (Dark Mystic)",
      icon: "/darkelf_mage.png",
      paths: [
        {
          second: "ТЕМНЫЙ КОЛДУН (Dark Wizard)",
          secondIcon: "/darkwizard.png",
          secondPaths: [
            { third: "ЗАКЛИНАТЕЛЬ ВЕТРА (Spellhowler)", thirdIcon: "/spellhowler.png", fourth: "МАСТЕР БУРЬ (Storm Screamer)", fourthIcon: "/spellhowler.png" },
            { third: "ПОСЛЕДОВАТЕЛЬ ТЬМЫ (Phantom Summoner)", thirdIcon: "/phantomsummoner.png", fourth: "ВЛАДЫКА ТЕНЕЙ (Spectral Master)", fourthIcon: "/spectralmaster.png" }
          ]
        },
        {
          second: "ОРАКУЛ ШИЛЕН (Shillien Oracle)",
          secondIcon: "/shillienoracle.png",
          secondPaths: [
            { third: "ЖРЕЦ ШИЛЕН (Shillien Elder)", thirdIcon: "/shillienoracle.png", fourth: "МУДРЕЦ ШИЛЕН (Shillien Saint)", fourthIcon: "/shilliensaint.png" }
          ]
        }
      ]
    }
  ]
};

export const ORC_CLASSES = {
  warriors: [
    {
      base: "ВОИН ОРКОВ (Orc Fighter)",
      icon: "/orcraider.png",
      paths: [
        {
          second: "НАЛЕТЧИК (Orc Raider)",
          secondIcon: "/orcraider.png",
          secondPaths: [
            { third: "ДЕСТРОЕР (Destroyer)", thirdIcon: "/destroyer.png", fourth: "ТИТАН (Titan)", fourthIcon: "/titan.png" }
          ]
        },
        {
          second: "МОНАХ (Monk)",
          secondIcon: "/monk.png",
          secondPaths: [
            { third: "ТИРАНТ (Tyrant)", thirdIcon: "/tyrant.png", fourth: "АВАТАР (Grand Khavatari)", fourthIcon: "/grandkhavatari.png" }
          ]
        }
      ]
    }
  ],
  mystics: [
    {
      base: "МАГ ОРКОВ (Orc Mystic)",
      icon: "/orc_shaman.png",
      paths: [
        {
          second: "ШАМАН ОРКОВ (Orc Shaman)",
          secondIcon: "/orc_shaman.png",
          secondPaths: [
            { third: "ВЕРХОВНЫЙ ШАМАН (Overlord)", thirdIcon: "/overlord.png", fourth: "ОВЕРЛОРД (Dominator)", fourthIcon: "/overlord_3rd.png" },
            { third: "ВЕСТНИК ВОЙНЫ (Warcryer)", thirdIcon: "/warcryer.png", fourth: "ВАРКРАЙЕР (Doomcryer)", fourthIcon: "/warcryer_3rd.png" }
          ]
        }
      ]
    }
  ]
};

export const DWARF_CLASSES = {
  warriors: [
    {
      base: "ГНОМИЙ ВОИТЕЛЬ (Dwarven Fighter)",
      icon: "/scavenger.png",
      paths: [
        {
          second: "СОБИРАТЕЛЬ (Scavenger)",
          secondIcon: "/scavenger.png",
          secondPaths: [
            { third: "ОХОТНИК ЗА НАГРАДОЙ (Bounty Hunter)", thirdIcon: "/bountyhunter.png", fourth: "КЛАДОИСКАТЕЛЬ (Fortune Seeker)", fourthIcon: "/fortuneseeker.png" }
          ]
        },
        {
          second: "РЕМЕСЛЕННИК (Artisan)",
          secondIcon: "/artisan.png",
          secondPaths: [
            { third: "КУЗНЕЦ (Warsmith)", thirdIcon: "/warsmith.png", fourth: "МАЭСТРО (Maestro)", fourthIcon: "/maestro.png" }
          ]
        }
      ]
    }
  ],
  mystics: []
};

export const KAMAEL_CLASSES = {
  warriors: [
    {
      base: "СОЛДАТ-МУЖЧИНА (Male Soldier)",
      icon: "/kamael_trooper.png",
      paths: [
        {
          second: "ДРАГУН (Dragoon)",
          secondIcon: "/kamael_trooper.png",
          secondPaths: [
            { third: "БЕРСЕРК (Berserker)", thirdIcon: "/berserker.png", fourth: "КАРАТЕЛЬ (Doombringer)", fourthIcon: "/doombringer.png" },
            { third: "ОХОТНИК ЗА ДУШАМИ (Male SoulBreaker)", thirdIcon: "/soulbreaker.png", fourth: "ПЕС ДУШ-М (Male Soul Hound)", fourthIcon: "/soulhound.png" }
          ]
        }
      ]
    },
    {
      base: "СОЛДАТ-ЖЕНЩИНА (Female Soldier)",
      icon: "/kamael_warder.png",
      paths: [
        {
          second: "НАДЗИРАТЕЛЬ (Warder)",
          secondIcon: "/kamael_warder.png",
          secondPaths: [
            { third: "АРБАЛЕТЧИК (Arbalester)", thirdIcon: "/arbalester.png", fourth: "ДИВЕРСАНТ (Trickster)", fourthIcon: "/trickster.png" },
            { third: "ОХОТНИК ЗА ДУШАМИ (Female SoulBreaker)", thirdIcon: "/soulbreaker.png", fourth: "ПЕС ДУШ-Ж (Female Soul Hound)", fourthIcon: "/soulhound.png" }
          ]
        },
        {
          second: "ИНСПЕКТОР (Inspector)",
          secondIcon: "/inspector.png",
          secondPaths: [
            { third: "АРБИТР (Judicator)", thirdIcon: "/judicator.png", fourth: "АРБИТР (Judicator)", fourthIcon: "/judicator.png" }
          ]
        }
      ]
    }
  ],
  mystics: []
};

export const RACE_TO_CLASSES: Record<string, any> = {
  "Человек": HUMAN_CLASSES,
  "Эльф": ELVEN_CLASSES,
  "Темный Эльф": DARK_ELVEN_CLASSES,
  "Орк": ORC_CLASSES,
  "Гном": DWARF_CLASSES,
  "Камаэль": KAMAEL_CLASSES
};

// Radar chart stats per class
export const CLASS_STATS: Record<string, { solo: number, pve: number, pvp: number, support: number, surv: number, control: number }> = {
  "Human Fighter": { solo: 55, pve: 60, pvp: 50, support: 10, surv: 55, control: 15 },
  "Warrior": { solo: 65, pve: 70, pvp: 60, support: 10, surv: 60, control: 20 },
  "Gladiator": { solo: 80, pve: 75, pvp: 85, support: 5, surv: 65, control: 30 },
  "Warlord": { solo: 70, pve: 85, pvp: 65, support: 20, surv: 65, control: 40 },
  "Human Knight": { solo: 50, pve: 55, pvp: 55, support: 30, surv: 80, control: 35 },
  "Paladin": { solo: 60, pve: 65, pvp: 70, support: 50, surv: 85, control: 40 },
  "Dark Avenger": { solo: 65, pve: 70, pvp: 75, support: 25, surv: 80, control: 35 },
  "Rogue": { solo: 70, pve: 65, pvp: 70, support: 5, surv: 55, control: 25 },
  "Treasure Hunter": { solo: 80, pve: 75, pvp: 85, support: 5, surv: 60, control: 30 },
  "Hawkeye": { solo: 75, pve: 80, pvp: 75, support: 5, surv: 55, control: 20 },
  "Human Mystic": { solo: 40, pve: 45, pvp: 40, support: 50, surv: 40, control: 50 },
  "Human Wizard": { solo: 55, pve: 60, pvp: 60, support: 20, surv: 40, control: 55 },
  "Sorcerer": { solo: 70, pve: 75, pvp: 80, support: 10, surv: 40, control: 50 },
  "Necromancer": { solo: 65, pve: 70, pvp: 75, support: 15, surv: 45, control: 70 },
  "Warlock": { solo: 70, pve: 80, pvp: 65, support: 30, surv: 50, control: 40 },
  "Bishop": { solo: 30, pve: 50, pvp: 40, support: 100, surv: 55, control: 30 },
  "Prophet": { solo: 25, pve: 45, pvp: 35, support: 95, surv: 50, control: 25 },
  "Elven Fighter": { solo: 55, pve: 60, pvp: 50, support: 10, surv: 55, control: 15 },
  "Elven Knight": { solo: 55, pve: 60, pvp: 60, support: 30, surv: 80, control: 40 },
  "Temple Knight": { solo: 60, pve: 65, pvp: 65, support: 45, surv: 85, control: 45 },
  "Swordsinger": { solo: 60, pve: 70, pvp: 65, support: 75, surv: 65, control: 30 },
  "Elven Scout": { solo: 65, pve: 60, pvp: 65, support: 10, surv: 55, control: 25 },
  "Plains Walker": { solo: 80, pve: 75, pvp: 85, support: 5, surv: 60, control: 35 },
  "Silver Ranger": { solo: 75, pve: 80, pvp: 75, support: 5, surv: 55, control: 25 },
  "Elven Mystic": { solo: 40, pve: 45, pvp: 40, support: 55, surv: 40, control: 50 },
  "Elven Wizard": { solo: 55, pve: 60, pvp: 60, support: 25, surv: 40, control: 55 },
  "Spellsinger": { solo: 70, pve: 75, pvp: 80, support: 10, surv: 40, control: 60 },
  "Elemental Summoner": { solo: 75, pve: 85, pvp: 65, support: 30, surv: 55, control: 35 },
  "Oracle": { solo: 30, pve: 50, pvp: 35, support: 85, surv: 50, control: 30 },
  "Elder": { solo: 25, pve: 45, pvp: 35, support: 90, surv: 50, control: 30 },
  "Palus Knight": { solo: 55, pve: 60, pvp: 60, support: 20, surv: 75, control: 40 },
  "Shillien Knight": { solo: 65, pve: 70, pvp: 70, support: 25, surv: 80, control: 50 },
  "Bladedancer": { solo: 65, pve: 75, pvp: 70, support: 70, surv: 60, control: 35 },
  "Assassin": { solo: 70, pve: 65, pvp: 70, support: 5, surv: 55, control: 30 },
  "Abyss Walker": { solo: 85, pve: 75, pvp: 90, support: 5, surv: 60, control: 35 },
  "Phantom Ranger": { solo: 75, pve: 80, pvp: 75, support: 5, surv: 55, control: 30 },
  "Dark Mystic": { solo: 40, pve: 45, pvp: 40, support: 45, surv: 40, control: 55 },
  "Dark Wizard": { solo: 55, pve: 60, pvp: 60, support: 20, surv: 40, control: 60 },
  "Spellhowler": { solo: 70, pve: 75, pvp: 80, support: 10, surv: 40, control: 65 },
  "Phantom Summoner": { solo: 75, pve: 85, pvp: 65, support: 25, surv: 55, control: 45 },
  "Shillien Oracle": { solo: 30, pve: 50, pvp: 35, support: 80, surv: 50, control: 35 },
  "Shillien Elder": { solo: 25, pve: 45, pvp: 35, support: 88, surv: 50, control: 35 },
  "Orc Fighter": { solo: 60, pve: 65, pvp: 55, support: 10, surv: 60, control: 20 },
  "Orc Raider": { solo: 65, pve: 70, pvp: 60, support: 10, surv: 65, control: 25 },
  "Destroyer": { solo: 75, pve: 80, pvp: 70, support: 10, surv: 70, control: 30 },
  "Tyrant": { solo: 80, pve: 80, pvp: 85, support: 5, surv: 65, control: 25 },
  "Orc Mystic": { solo: 40, pve: 45, pvp: 40, support: 60, surv: 45, control: 55 },
  "Orc Shaman": { solo: 35, pve: 50, pvp: 40, support: 70, surv: 50, control: 50 },
  "Overlord": { solo: 40, pve: 60, pvp: 50, support: 85, surv: 55, control: 65 },
  "Warcryer": { solo: 35, pve: 55, pvp: 45, support: 90, surv: 50, control: 40 },
  "Dwarven Fighter": { solo: 50, pve: 55, pvp: 45, support: 20, surv: 60, control: 15 },
  "Scavenger": { solo: 55, pve: 65, pvp: 45, support: 15, surv: 60, control: 20 },
  "Bounty Hunter": { solo: 65, pve: 75, pvp: 55, support: 15, surv: 65, control: 25 },
  "Artisan": { solo: 45, pve: 55, pvp: 40, support: 30, surv: 60, control: 15 },
  "Warsmith": { solo: 55, pve: 70, pvp: 50, support: 35, surv: 65, control: 25 },
  "Duelist": { solo: 85, pve: 80, pvp: 90, support: 5, surv: 65, control: 35 },
  "Dreadnought": { solo: 75, pve: 90, pvp: 70, support: 20, surv: 70, control: 50 },
  "Phoenix Knight": { solo: 65, pve: 70, pvp: 80, support: 55, surv: 90, control: 45 },
  "Hell Knight": { solo: 70, pve: 75, pvp: 82, support: 30, surv: 88, control: 45 },
  "Sagittarius": { solo: 80, pve: 85, pvp: 80, support: 5, surv: 55, control: 25 },
  "Archmage": { solo: 75, pve: 80, pvp: 85, support: 10, surv: 45, control: 55 },
  "Soultaker": { solo: 70, pve: 75, pvp: 80, support: 15, surv: 50, control: 75 },
  "Arcana Lord": { solo: 80, pve: 88, pvp: 70, support: 35, surv: 55, control: 40 },
  "Cardinal": { solo: 30, pve: 55, pvp: 45, support: 100, surv: 60, control: 35 },
  "Hierophant": { solo: 25, pve: 50, pvp: 40, support: 98, surv: 55, control: 30 },
  "Eva Templar": { solo: 65, pve: 70, pvp: 80, support: 50, surv: 90, control: 50 },
  "Sword Muse": { solo: 65, pve: 75, pvp: 70, support: 85, surv: 65, control: 30 },
  "Wind Rider": { solo: 88, pve: 80, pvp: 90, support: 5, surv: 62, control: 35 },
  "Moonlight Sentinel": { solo: 80, pve: 85, pvp: 78, support: 5, surv: 58, control: 25 },
  "Mystic Muse": { solo: 72, pve: 78, pvp: 82, support: 10, surv: 42, control: 60 },
  "Elemental Master": { solo: 82, pve: 90, pvp: 68, support: 35, surv: 55, control: 40 },
  "Eva Saint": { solo: 28, pve: 52, pvp: 42, support: 96, surv: 58, control: 35 },
  "Shillien Templar": { solo: 68, pve: 72, pvp: 80, support: 30, surv: 88, control: 50 },
  "Spectral Dancer": { solo: 68, pve: 78, pvp: 72, support: 82, surv: 62, control: 35 },
  "Ghost Hunter": { solo: 88, pve: 78, pvp: 92, support: 5, surv: 62, control: 38 },
  "Storm Screamer": { solo: 72, pve: 78, pvp: 82, support: 10, surv: 42, control: 62 },
  "Spectral Master": { solo: 80, pve: 88, pvp: 68, support: 28, surv: 55, control: 45 },
  "Shillien Saint": { solo: 28, pve: 52, pvp: 42, support: 96, surv: 58, control: 38 },
  "Titan": { solo: 80, pve: 85, pvp: 78, support: 10, surv: 72, control: 35 },
  "Grand Khavatari": { solo: 85, pve: 82, pvp: 88, support: 5, surv: 68, control: 28 },
  "Dominator": { solo: 42, pve: 62, pvp: 55, support: 88, surv: 58, control: 72 },
  "Doomcryer": { solo: 38, pve: 58, pvp: 48, support: 92, surv: 52, control: 45 },
  "Fortune Seeker": { solo: 70, pve: 80, pvp: 58, support: 15, surv: 68, control: 28 },
  "Maestro": { solo: 60, pve: 75, pvp: 52, support: 40, surv: 68, control: 28 },
  "Male Soldier": { solo: 50, pve: 55, pvp: 50, support: 5, surv: 55, control: 20 },
  "Female Soldier": { solo: 50, pve: 55, pvp: 50, support: 5, surv: 55, control: 25 },
  "Dragoon": { solo: 65, pve: 68, pvp: 65, support: 5, surv: 60, control: 25 },
  "Warder": { solo: 62, pve: 65, pvp: 62, support: 5, surv: 60, control: 30 },
  "Berserker": { solo: 80, pve: 78, pvp: 82, support: 5, surv: 62, control: 30 },
  "Male SoulBreaker": { solo: 75, pve: 72, pvp: 80, support: 15, surv: 58, control: 45 },
  "Arbalester": { solo: 72, pve: 78, pvp: 72, support: 10, surv: 55, control: 35 },
  "Doombringer": { solo: 85, pve: 80, pvp: 88, support: 5, surv: 65, control: 35 },
  "Male Soul Hound": { solo: 78, pve: 75, pvp: 82, support: 10, surv: 62, control: 50 },
  "Female Soul Hound": { solo: 78, pve: 75, pvp: 82, support: 10, surv: 62, control: 50 },
  "Trickster": { solo: 75, pve: 72, pvp: 80, support: 5, surv: 58, control: 38 },
  "Inspector": { solo: 60, pve: 65, pvp: 62, support: 25, surv: 58, control: 40 },
  "Judicator": { solo: 35, pve: 55, pvp: 45, support: 85, surv: 58, control: 55 },
};

export const APOSTLE_SKILLS = {
  physical: [
    { name: "Фатальный Удар", desc: "Сильная дробящая атака. Игнорирует Щит. Возможен Сверхудар. Мощность 738." },
    { name: "Обращение в Камень", desc: "Превращает в камень, защищая от повреждений на 8 сек." }
  ],
  magical: [
    { name: "Лечение", desc: "Восстанавливает HP. Мощность 50." },
    { name: "Излечить Отравление", desc: "Лечит слабое отравление." },
    { name: "Боевое Лечение", desc: "Быстро восстанавливает HP. Мощность 83." },
    { name: "Воскрешение", desc: "Воскрешает павшего союзника." },
    { name: "Групповое Лечение", desc: "Восстанавливает HP всех членов группы. Мощность 66." },
    { name: "Возвращение", desc: "Телепортирует в ближайший город." },
    { name: "Прикосновение Вампира", desc: "Урон темной магией. Поглощает 40% HP." },
    { name: "Удар Ветра", desc: "Атакует магией ветра. Мощность 12." },
    { name: "Самолечение", desc: "Восстанавливает собственное HP. Мощность 42." },
    { name: "Горение Маны", desc: "Сжигает MP врага. Мощность 117." },
    { name: "Цепное Исцеление", desc: "Восстанавливает HP цели и до 3 союзников." },
    { name: "Block Shield", desc: "Снимает с противника щитовые баффы." },
    { name: "Block Wind Walk", desc: "Снимает скоростные баффы с противника." }
  ],
  buffs: [
    { name: "Могущество", desc: "Физ. Атк. +8%." },
    { name: "Щит", desc: "Физ. Защ. +8%." },
    { name: "Ускорение", desc: "Скор. Атк. +15%." },
    { name: "Легкая Походка", desc: "Скорость +20." },
    { name: "Дух Берсерка", desc: "Физ. Атк. +5%, Маг. Атк. +10%, Скор. +5." },
    { name: "Health", desc: "Повышает сопротивление к отравлению и кровотечению." },
    { name: "Wisdom", desc: "Повышает сопротивление ко сну и ментальным атакам." },
    { name: "Skill Mastery", desc: "Шанс мгновенного отката умения." },
    { name: "Prophecy of Fire", desc: "Мощный физ. бафф группы." }
  ],
  debuffs: [
    { name: "Усыпление", desc: "Усыпляет противника." },
    { name: "Корень Дриады", desc: "Удерживает цель на месте." },
    { name: "Слово Страха", desc: "Обращает врага в бегство." }
  ],
  toggle: [
    { name: "Крик Души", desc: "Физ. Атк. +4.5." },
    { name: "Блокировка Баффа", desc: "Блокирует входящие баффы от недругов." }
  ],
  transformation: [
    { name: "Инквизитор", desc: "Позволяет использовать святые магические атаки." }
  ]
};

export const SKILL_PROGRESSION = [
  { level: 76, skills: [{ name: "Health", level: 1 }, { name: "Wisdom", level: 1 }] },
  { level: 77, skills: [{ name: "Skill Mastery", level: 1 }] },
  { level: 78, skills: [{ name: "Arcane Wisdom", level: 1 }, { name: "Divine Lore", level: 1 }] },
  { level: 79, skills: [{ name: "Mystic Immunity", level: 1 }] }
];
