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
      base: "ВОИТЕЛЬ (Warrior)",
      icon: "/warrior.png",
      paths: [
        { 
          second: "КОПЕЙЩИК (Warlord)", 
          secondIcon: "/warlord.png",
          third: "ПОЛКОВОДЕЦ (Dreadnought)",
          thirdIcon: "/dreadnought.png"
        },
        { 
          second: "ГЛАДИАТОР (Gladiator)", 
          secondIcon: "/gladiator.png",
          third: "ДУЭЛИСТ (Duelist)",
          thirdIcon: "/duelist.png"
        }
      ]
    },
    {
      base: "РЫЦАРЬ (Human Knight)",
      icon: "/human_knight.png",
      paths: [
        { 
          second: "ПАЛАДИН (Paladin)", 
          secondIcon: "/paladin.png",
          third: "РЫЦАРЬ ФЕНИКСА (Phoenix Knight)",
          thirdIcon: "/phoenix_knight.png"
        },
        { 
          second: "МСТИТЕЛЬ (Dark Avenger)", 
          secondIcon: "/dark_avenger.png",
          third: "РЫЦАРЬ АДА (Hell Knight)",
          thirdIcon: "/hell_knight.png"
        }
      ]
    },
    {
      base: "РАЗБОЙНИК (Rogue)",
      icon: "/rogue.png",
      paths: [
        { 
          second: "ИСКАТЕЛЬ СОКРОВИЩ (Treasure Hunter)", 
          secondIcon: "/treasure_hunter.png",
          third: "АВАНТЮРИСТ (Adventurer)",
          thirdIcon: "/adventurer.png"
        },
        { 
          second: "СТРЕЛОК (Hawkeye)", 
          secondIcon: "/hawkeye.png",
          third: "СНАЙПЕР (Sagittarius)",
          thirdIcon: "/sagittarius.png"
        }
      ]
    }
  ],
  mystics: [
    {
      base: "МАГ (Mage)",
      icon: "/human_wizard.png",
      paths: [
        { 
          second: "СОРКЕР (Sorcerer)", 
          secondIcon: "/sorcerer_ss.png",
          third: "АРХИМАГ (Archmage)",
          thirdIcon: "/archmage.png"
        },
        { 
          second: "НЕКРОМАНТ (Necromancer)", 
          secondIcon: "/necromancer.png",
          third: "ПОЖИРАТЕЛЬ ДУШ (Soultaker)",
          thirdIcon: "/soultaker.png"
        },
        { 
          second: "КОЛДУН (Warlock)", 
          secondIcon: "/warlock.png",
          third: "ЧЕРНОКНИЖНИК (Arcana Lord)",
          thirdIcon: "/arcana_lord.png"
        }
      ]
    },
    {
      base: "КЛЕРИК (Cleric)",
      icon: "/cleric.png",
      paths: [
        { 
          second: "ЕПИСКОП (Bishop)", 
          secondIcon: "/bishop.png",
          third: "КАРДИНАЛ (Cardinal)",
          thirdIcon: "/cardinal.png"
        },
        { 
          second: "ПРОПОВЕДНИК (Prophet)", 
          secondIcon: "/prophet.png",
          third: "ИЕРОФАНТ (Hierophant)",
          thirdIcon: "/hierophant.png"
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
          second: "СВЕТЛЫЙ РЫЦАРЬ (Elven Knight)", 
          secondIcon: "/elvenknight.png",
          third: "РЫЦАРЬ ЕВЫ (Eva's Templar)",
          thirdIcon: "/evastemplar.png"
        },
        { 
          second: "МЕНЕСТРЕЛЬ (Swordsinger)", 
          secondIcon: "/swordsinger.png",
          third: "ВИРТУОЗ (Sword Muse)",
          thirdIcon: "/swordmuse.png"
        }
      ]
    },
    {
      base: "ЭЛЬФИЙСКИЙ РАЗВЕДЧИК (Elven Scout)",
      icon: "/elf_scout.png",
      paths: [
        { 
          second: "СЛЕДОПЫТ (Plains Walker)", 
          secondIcon: "/plainswalker.png",
          third: "СТРАННИК ВЕТРА (Wind Rider)",
          thirdIcon: "/windrider.png"
        },
        { 
          second: "СЕРЕБРЯНЫЙ РЕЙНДЖЕР (Silver Ranger)", 
          secondIcon: "/silverranger.png",
          third: "СТРАЖ БЕЛОГО СВЕТА (Moonlight Sentinel)",
          thirdIcon: "/moonlightsentinel.png"
        }
      ]
    }
  ],
  mystics: [
    {
      base: "ЭЛЬФИЙСКИЙ МАГ (Elven Mage)",
      icon: "/elf_mage.png",
      paths: [
        { 
          second: "СВЕТЛЫЙ МАГ (Elven Wizard)", 
          secondIcon: "/elvenwizard.png",
          third: "ПЕВЕЦ ЗАКЛИНАНИЙ (Spellsinger)",
          thirdIcon: "/spellsinger.png"
        },
        { 
          second: "ПОСЛЕДОВАТЕЛЬ СТИХИЙ (Elemental Summoner)", 
          secondIcon: "/elementalsummoner.png",
          third: "МАСТЕР СТИХИЙ (Elemental Master)",
          thirdIcon: "/elementalmaster.png"
        },
        { 
          second: "ОРАКУЛ (Oracle)", 
          secondIcon: "/oracle.png",
          third: "МУДРЕЦ (Eva's Saint)",
          thirdIcon: "/evassaint.png"
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
          second: "РЫЦАРЬ ШИЛЕН (Shillien Knight)", 
          secondIcon: "/shillienknight.png",
          third: "ХРАМОВНИК ШИЛЕН (Shillien Templar)",
          thirdIcon: "/shillientemplar.png"
        },
        { 
          second: "ТАНЦОР СМЕРТИ (Bladedancer)", 
          secondIcon: "/bladedancer.png",
          third: "ПРИЗРАЧНЫЙ ТАНЦОР (Spectral Dancer)",
          thirdIcon: "/spectraldancer_3rd.png"
        }
      ]
    },
    {
      base: "ТЕМНЫЙ РАЗВЕДЧИК (Assassin)",
      icon: "/darkelf_assassin.png",
      paths: [
        { 
          second: "СТРАЖ СМЕРТИ (Abyss Walker)", 
          secondIcon: "/abysswalker.png",
          third: "ПРИЗРАЧНЫЙ ОХОТНИК (Ghost Hunter)",
          thirdIcon: "/ghosthunter.png"
        },
        { 
          second: "ПРИЗРАЧНЫЙ РЕЙНДЖЕР (Phantom Ranger)", 
          secondIcon: "/phantomranger.png",
          third: "СТРАЖ ТЕНЕЙ (Ghost Sentinel)",
          thirdIcon: "/ghostsentinel.png"
        }
      ]
    }
  ],
  mystics: [
    {
      base: "ТЕМНЫЙ МАГ (Dark Mage)",
      icon: "/darkelf_mage.png",
      paths: [
        { 
          second: "ТЕМНЫЙ МАГ (Dark Wizard)", 
          secondIcon: "/darkwizard.png",
          third: "ЗАКЛИНАТЕЛЬ ВЕТРА (Spellhowler)",
          thirdIcon: "/spellhowler.png"
        },
        { 
          second: "ПОСЛЕДОВАТЕЛЬ ТЬМЫ (Phantom Summoner)", 
          secondIcon: "/phantomsummoner.png",
          third: "ВЛАДЫКА ТЕНЕЙ (Spectral Master)",
          thirdIcon: "/spectralmaster.png"
        },
        { 
          second: "ОРАКУЛ ШИЛЕН (Shillien Oracle)", 
          secondIcon: "/shillienoracle.png",
          third: "МУДРЕЦ ШИЛЕН (Shillien Saint)",
          thirdIcon: "/shilliensaint.png"
        }
      ]
    }
  ]
};

export const ORC_CLASSES = {
  warriors: [
    {
      base: "НАЛЕТЧИК (Orc Raider)",
      icon: "/orcraider.png",
      paths: [
        { 
          second: "ДЕСТРОЕР (Destroyer)", 
          secondIcon: "/destroyer.png",
          third: "ТИТАН (Titan)",
          thirdIcon: "/titan.png"
        }
      ]
    },
    {
      base: "МОНАХ (Monk)",
      icon: "/monk.png",
      paths: [
        { 
          second: "ТИРАНТ (Tyrant)", 
          secondIcon: "/tyrant.png",
          third: "АВАТАР (Grand Khavatari)",
          thirdIcon: "/grandkhavatari.png"
        }
      ]
    }
  ],
  mystics: [
    {
      base: "ШАМАН ОРКОВ (Orc Shaman)",
      icon: "/orc_shaman.png",
      paths: [
        { 
          second: "ВЕРХОВНЫЙ ШАМАН (Overlord)", 
          secondIcon: "/overlord.png",
          third: "ОВЕРЛОРД (Dominator)",
          thirdIcon: "/overlord_3rd.png"
        },
        { 
          second: "ВЕСТНИК ВОЙНЫ (Warcryer)", 
          secondIcon: "/warcryer.png",
          third: "ВАРКРАЙЕР (Doomcryer)",
          thirdIcon: "/warcryer_3rd.png"
        }
      ]
    }
  ]
};

export const DWARF_CLASSES = {
  warriors: [
    {
      base: "СОБИРАТЕЛЬ (Scavenger)",
      icon: "/scavenger.png",
      paths: [
        { 
          second: "ОХОТНИК ЗА НАГРАДОЙ (Bounty Hunter)", 
          secondIcon: "/bountyhunter.png",
          third: "КЛАДОИСКАТЕЛЬ (Fortune Seeker)",
          thirdIcon: "/fortuneseeker.png"
        }
      ]
    },
    {
      base: "РЕМЕСЛЕННИК (Artisan)",
      icon: "/artisan.png",
      paths: [
        { 
          second: "КУЗНЕЦ (Warsmith)", 
          secondIcon: "/warsmith.png",
          third: "МАЭСТРО (Maestro)",
          thirdIcon: "/maestro.png"
        }
      ]
    }
  ],
  mystics: []
};

export const KAMAEL_CLASSES = {
  warriors: [
    {
      base: "ГРЕШНИК (Trooper)",
      icon: "/kamael_trooper.png",
      paths: [
        { 
          second: "БЕРСЕРК (Berserker)", 
          secondIcon: "/berserker.png",
          third: "КАРАТЕЛЬ (Doombringer)",
          thirdIcon: "/doombringer.png"
        },
        { 
          second: "ПАЛАЧ (Soul Breaker)", 
          secondIcon: "/soulbreaker.png",
          third: "ИСТРЕБИТЕЛЬ ДУШ (Soul Hound)",
          thirdIcon: "/soulhound.png"
        }
      ]
    },
    {
      base: "НАДЗИРАТЕЛЬ (Warder)",
      icon: "/kamael_warder.png",
      paths: [
        { 
          second: "АРБАЛЕТЧИК (Arbalester)", 
          secondIcon: "/arbalester.png",
          third: "ДИВЕРСАНТ (Trickster)",
          thirdIcon: "/trickster.png"
        },
        { 
          second: "ПАЛАЧ (Soul Breaker)", 
          secondIcon: "/soulbreaker.png",
          third: "ИСТРЕБИТЕЛЬ ДУШ (Soul Hound)",
          thirdIcon: "/soulhound.png"
        }
      ]
    },
    {
      base: "ИНСПЕКТОР (Inspector)",
      icon: "/inspector.png",
      paths: [
        {
          second: "АРБИТР (Judicator)",
          secondIcon: "/judicator.png",
          third: "АРБИТР (Judicator)",
          thirdIcon: "/judicator.png"
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
    { name: "Уничтожить Монстра", desc: "Наносит урон монстрам. Мощность 19." },
    { name: "Возвращение", desc: "Телепортирует в ближайший город." },
    { name: "Примирение", desc: "Делает цель более миролюбивой." },
    { name: "Прикосновение Вампира", desc: "Урон темной магией. Поглощает 40% HP." },
    { name: "Удар Ветра", desc: "Атакует магией ветра. Мощность 12." },
    { name: "Самолечение", desc: "Восстанавливает собственное HP. Мощность 42." },
    { name: "Возвращение Группы", desc: "Телепортирует группу в город." },
    { name: "Прогнать", desc: "Отправляет вражеского слугу в другое измерение." },
    { name: "Горение Маны", desc: "Сжигает MP врага. Мощность 117." },
    { name: "Spell Force", desc: "Переносит Вашу магическую силу на члена группы. Эффект будет отменен, если Вы нанесете кому-нибудь урон." },
    { name: "Spell Turning", desc: "Сбивает произношение заклинания у цели." },
    { name: "Цепное Исцеление", desc: "Восстанавливает HP цели и до 3 союзников." },
    { name: "Божья Кара", desc: "Урон святой магией по монстрам. Мощность 51." },
    { name: "Божественная Вспышка", desc: "Взрыв святой энергии вокруг. Мощность 29." },
    { name: "Block Shield", desc: "Снимает с противника заклинания, повышающие Физическую Защиту, и предотвращает их повторное наложение. Временно понижает Физическую Защиту." },
    { name: "Block Wind Walk", desc: "Снимает с противника заклинания, повышающие Скорость Перемещения, и предотвращает их повторное наложение. Временно понижает Скорость Перемещения." }
  ],
  buffs: [
    { name: "Энергичность", desc: "Сопротивление Кровотечению +30%." },
    { name: "Сопротивление Яду", desc: "Сопротивление Яду +30%." },
    { name: "Ментальный Щит", desc: "Сопротивление Удержанию +20%, Сну +25%, Ментальным Атакам +25%." },
    { name: "Магический Барьер", desc: "Маг. Защ. +23%." },
    { name: "Щит", desc: "Физ. Защ. +8%." },
    { name: "Святое Оружие", desc: "Атака Святостью +20." },
    { name: "Регенерация", desc: "Скорость восстановления HP +10%." },
    { name: "Благословение Тела", desc: "Макс. HP +10%." },
    { name: "Благословение Духа", desc: "Макс. MP +10%." },
    { name: "Дух Берсерка", desc: "Физ. Защ. -5%, Маг. Защ. -10%, Физ. Атк. +5%, Маг. Атк. +10%, Скор. Атк. +5%, Скор. Маг. +5%, Скорость +5." },
    { name: "Могущество", desc: "Физ. Атк. +8%." },
    { name: "Поцелуй Евы", desc: "Восстановление MP +10%." },
    { name: "Фокусировка", desc: "Шанс Физ. Крит. Атк. +20%." },
    { name: "Концентрация", desc: "Шанс прерывания чтения заклинания -18%." },
    { name: "Проницательность", desc: "Скор. Маг. +15%." },
    { name: "Ускорение", desc: "Скор. Атк. +15%." },
    { name: "Легкая Походка", desc: "Скорость +20." },
    { name: "Наведение", desc: "Точность +2." },
    { name: "Шепот Смерти", desc: "Сила Физ. Крит. Атк. +25%." },
    { name: "Prophecy of Fire", desc: "Временно вселяет дух древнего воина. Требуется 5 Spirit Ore." },
    { name: "Пророчество Земли", desc: "Комплексный бафф: Физ. Защ. +15%, Точность +4, Сопротивление Дебаффам +20%." },
    { name: "Ответный Крит. Удар", desc: "Защита от Крит. Атк +10%, шанс увеличить силу крита на 15%." },
    { name: "Совершенство в Бою", desc: "Физ. Атк. и Физ. Защ. +15%." },
    { name: "Совершенство Состояния", desc: "Макс. HP и Макс. MP +35%." },
    { name: "Совершенная Критическая Атака", desc: "Шанс Крит. Атк. +30%, сила Крит. Атк. +35%." },
    { name: "Защита Равновесия", desc: "Сопротивление стихиям +20. При получении урона шанс повысить Маг. Защ." },
    { name: "Elemental Protection", desc: "Временно повышает сопротивление к атакам стихией огня, воды, воздуха и земли. Эффект 3." },
    { name: "Health", desc: "Повышает сопротивление к отравлению и кровотечению." },
    { name: "Wisdom", desc: "Повышает сопротивление ко сну, удерживающим заклинаниям и к ментальным атакам." },
    { name: "Skill Mastery", desc: "Оттачивает совершенство в скиллах. Низкая вероятность моментального отката умения или двойного времени действия. Зависит от STR." },
    { name: "Arcane Wisdom", desc: "Значительно повышает эффективность магии и понижает расход маны умениями. Также понижает Скорость Произношения Заклинаний. Непрерывно потребляет Ваше здоровье." },
    { name: "Divine Lore", desc: "Снижает потребление маны магическими умениями." },
    { name: "Mystic Immunity", desc: "Делает цель временно невосприимчивой к усиливающим и ослабляющим заклинаниям или атакам." },
    { name: "Улучшенная Воля Стрелка", desc: "Увеличивает дальность атаки и точность при использовании лука." },
    { name: "Улучшенная Воля Воина", desc: "Увеличивает Физ. Атк. и Скор. Атк. при использовании оружия ближнего боя." },
    { name: "Улучшенная Воля Мага", desc: "Увеличивает Маг. Атк. и Скор. Маг." }
  ],
  debuffs: [
    { name: "Усыпление", desc: "Усыпляет противника." },
    { name: "Проклятие Слабости", desc: "Физ. Атк. цели -17%." },
    { name: "Корень Дриады", desc: "Удерживает цель на месте." },
    { name: "Слово Страха", desc: "Обращает врага в бегство." },
    { name: "Испугать Нежить", desc: "Страх и снижение скорости на 50% для нежити." }
  ],
  toggle: [
    { name: "Тайная Мудрость", desc: "Расход MP -30%, Скор. Маг. -10%. Расходует 50 HP/сек." },
    { name: "Крик Души", desc: "Физ. Атк. +4.5." },
    { name: "Блокировка Баффа", desc: "Блокирует входящие баффы от недругов." }
  ],
  transformation: [
    { name: "Инквизитор", desc: "Позволяет использовать святые магические атаки." }
  ]
};

export const SKILL_PROGRESSION = [
  {
    level: 76,
    skills: [
      { name: "Elemental Protection", level: 1 },
      { name: "Health", level: 1 },
      { name: "Wisdom", level: 1 },
    ]
  },
  {
    level: 77,
    skills: [
      { name: "Block Shield", level: 1 },
      { name: "Block Wind Walk", level: 1 },
      { name: "Skill Mastery", level: 1 },
      { name: "Spell Force", level: 1 },
    ]
  },
  {
    level: 78,
    skills: [
      { name: "Arcane Wisdom", level: 1 },
      { name: "Divine Lore", level: 1 },
      { name: "Prophecy of Fire", level: 1 },
    ]
  },
  {
    level: 79,
    skills: [
      { name: "Mystic Immunity", level: 1 },
      { name: "Spell Turning", level: 1 },
    ]
  }
];
