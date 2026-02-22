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
      icon: "https://i.ibb.co/W4ZhyDnN/Warrior.png",
      paths: [
        { 
          second: "КОПЕЙЩИК (Warlord)", 
          secondIcon: "https://i.ibb.co/RpW88z5t/Warlord.png",
          third: "ПОЛКОВОДЕЦ (Dreadnought)",
          thirdIcon: "https://i.ibb.co/XZ0q51p7/Dreadnought.png"
        },
        { 
          second: "ГЛАДИАТОР (Gladiator)", 
          secondIcon: "https://i.ibb.co/0y0ZntHD/Gladiator.png",
          third: "ДУЭЛИСТ (Duelist)",
          thirdIcon: "https://i.ibb.co/BVRW4fV6/Duelist.png"
        }
      ]
    },
    {
      base: "РЫЦАРЬ (Human Knight)",
      icon: "https://i.ibb.co/6R1fRG36/Human-Knight.png",
      paths: [
        { 
          second: "ПАЛАДИН (Paladin)", 
          secondIcon: "https://i.ibb.co/k2rh3NxR/Paladin.png",
          third: "РЫЦАРЬ ФЕНИКСА (Phoenix Knight)",
          thirdIcon: "https://i.ibb.co/cS4Lg2FZ/Phoenix-Knight.png"
        },
        { 
          second: "МСТИТЕЛЬ (Dark Avenger)", 
          secondIcon: "https://i.ibb.co/0RKQnH2G/Dark-Avenger.png",
          third: "РЫЦАРЬ АДА (Hell Knight)",
          thirdIcon: "https://i.ibb.co/2796p1fw/Hell-Knight.png"
        }
      ]
    },
    {
      base: "РАЗБОЙНИК (Rogue)",
      icon: "https://i.ibb.co/rRwHh3gg/Rogue.png",
      paths: [
        { 
          second: "ИСКАТЕЛЬ СОКРОВИЩ (Treasure Hunter)", 
          secondIcon: "https://i.ibb.co/hx4sQY6Z/Treasure-Hunter.png",
          third: "АВАНТЮРИСТ (Adventurer)",
          thirdIcon: "https://i.ibb.co/VcqWVQcv/Adventurer.png"
        },
        { 
          second: "СТРЕЛОК (Hawkeye)", 
          secondIcon: "https://i.ibb.co/G38V74RJ/Hawkeye.png",
          third: "СНАЙПЕР (Sagittarius)",
          thirdIcon: "https://i.ibb.co/XxqSGMfS/Sagittarius.png"
        }
      ]
    }
  ],
  mystics: [
    {
      base: "МАГ (Mage)",
      icon: "https://i.ibb.co/3YG77Zbg/Mage.png",
      paths: [
        { 
          second: "ВОЛШЕБНИК (Wizard)", 
          secondIcon: "https://i.ibb.co/BHVJqNY4/Wizard.png",
          third: "АРХИМАГ (Archmage)",
          thirdIcon: "https://i.ibb.co/0jHfz2kq/Archmage.png"
        },
        { 
          second: "НЕКРОМАНТ (Necromancer)", 
          secondIcon: "https://i.ibb.co/B215cyym/Necromancer.png",
          third: "ПОЖИРАТЕЛЬ ДУШ (Soultaker)",
          thirdIcon: "https://i.ibb.co/7JsFRzC4/Soultaker.png"
        },
        { 
          second: "КОЛДУН (Warlock)", 
          secondIcon: "https://i.ibb.co/ZpRncp85/Warlock.png",
          third: "ЧЕРНОКНИЖНИК (Arcana Lord)",
          thirdIcon: "https://i.ibb.co/Xrf80VNs/Arcana-Lord.png"
        }
      ]
    },
    {
      base: "КЛЕРИК (Cleric)",
      icon: "https://i.ibb.co/SWrpSLp/Cleric.png",
      paths: [
        { 
          second: "ЕПИСКОП (Bishop)", 
          secondIcon: "https://i.ibb.co/spBb7J3k/Bishop.png",
          third: "КАРДИНАЛ (Cardinal)",
          thirdIcon: "https://i.ibb.co/xqdHBbm1/Cardinal.png"
        },
        { 
          second: "ПРОПОВЕДНИК (Prophet)", 
          secondIcon: "https://i.ibb.co/93V08SLc/Prophet.png",
          third: "АПОСТОЛ (Apostle)",
          thirdIcon: "https://i.ibb.co/rYHNMwr/Apostle.png"
        }
      ]
    }
  ]
};

export const APOSTLE_SKILLS = {
  physical: [
    { name: "Fatal Strike", desc: "Фатальный Удар Ур. 1. Сильная дробящая атака. Игнорирует Щит. Возможен Сверхудар. Мощность 738." },
    { name: "Turn to Stone", desc: "Обращение в Камень Ур. 1. Превращается в камень, защищает от повреждений на 8 сек." }
  ],
  magical: [
    { name: "Heal", desc: "Лечение Ур. 1. Восстанавливает HP. Мощность 50." },
    { name: "Cure Poison", desc: "Излечить Отравление Ур. 1. Лечит слабое отравление." },
    { name: "Battle Heal", desc: "Боевое Лечение Ур. 1. Быстро восстанавливает HP. Мощность 83." },
    { name: "Resurrection", desc: "Воскрешение Ур. 1. Восстанавливает 0% потерянного опыта." },
    { name: "Group Heal", desc: "Групповое Лечение Ур. 1. Восстанавливает HP всех членов группы. Мощность 66." },
    { name: "Disrupt Monster", desc: "Уничтожить Монстра Ур. 1. Наносит урон монстрам. Мощность 19." },
    { name: "Return", desc: "Возвращение Ур. 1. Телепортирует в ближайший город." },
    { name: "Peace", desc: "Примирение Ур. 1. Делает цель более миролюбивой." },
    { name: "Vampiric Touch", desc: "Прикосновение Вампира Ур. 1. Урон темной магией. Поглощает 40% HP." },
    { name: "Wind Strike", desc: "Удар Ветра Ур. 1. Атакует магией ветра. Мощность 12." },
    { name: "Self Heal", desc: "Самолечение Ур. 1. Восстанавливает HP. Мощность 42." },
    { name: "Party Return", desc: "Возвращение группы Ур. 1. Телепортирует группу в город." },
    { name: "Erase", desc: "Прогнать Ур. 1. Отправляет вражеского слугу в другое измерение." },
    { name: "Mana Burn", desc: "Горение Маны Ур. 1. Сжигает MP врага. Мощность 117." },
    { name: "Spell Turning", desc: "Отмена Чтения Заклинаний Ур. 1. Отменяет чтение заклинания цели." },
    { name: "Chain Heal", desc: "Цепное Исцеление Ур. 1. Восстанавливает HP цели и до 3 союзников." },
    { name: "Divine Punishment", desc: "Божья Кара Ур. 1. Урон святой магией по монстрам. Мощность 51." },
    { name: "Divine Flash", desc: "Божественная Вспышка Ур. 1. Взрыв святой энергии вокруг. Мощность 29." }
  ],
  buffs: [
    { name: "Invigor", desc: "Энергичность. Сопротивление Кровотечению +30%." },
    { name: "Resist Poison", desc: "Сопротивление Яду +30%." },
    { name: "Mental Shield", desc: "Ментальный Щит. Сопротивление Удержанию +20%, Сну +25%, Ментальным Атакам +25%." },
    { name: "Magic Barrier", desc: "Магический Барьер. Маг. Защ. +23%." },
    { name: "Shield", desc: "Щит. Физ. Защ. +8%." },
    { name: "Holy Weapon", desc: "Святое Оружие. Атака Святостью +20." },
    { name: "Regeneration", desc: "Регенерация. Скорость восстановления HP +10%." },
    { name: "Bless the Body", desc: "Благословение Тела. Макс. HP +10%." },
    { name: "Bless the Soul", desc: "Благословение Духа. Макс. MP +10%." },
    { name: "Berserker Spirit", desc: "Дух Берсерка. Физ. Защ. -5%, Маг. Защ. -10%, Физ. Атк. +5%, Маг. Атк. +10%, Скор. Атк. +5%, Скор. Маг. +5%, Скорость +5." },
    { name: "Might", desc: "Могущество. Физ. Атк. +8%." },
    { name: "Kiss of Eva", desc: "Поцелуй Евы. Восстановление MP +10%." },
    { name: "Focus", desc: "Фокусировка. Шанс Физ. Крит. Атк. +20%." },
    { name: "Concentration", desc: "Концентрация. Шанс прерывания чтения заклинания -18%." },
    { name: "Acumen", desc: "Проницательность. Скор. Маг. +15%." },
    { name: "Haste", desc: "Ускорение. Скор. Атк. +15%." },
    { name: "Wind Walk", desc: "Легкая Походка. Скорость +20." },
    { name: "Guidance", desc: "Наведение. Точность +2." },
    { name: "Death Whisper", desc: "Шепот Смерти. Сила Физ. Крит. Атк. +25%." },
    { name: "Prophecy of Fire", desc: "Пророчество Огня. Комплексный бафф: HP/MP/Атк/Защ +10%, Скорость -20%." },
    { name: "Counter Critical", desc: "Ответный Крит. Удар. Защита от Крит. Атк +10%, шанс увеличить силу крита на 15%." },
    { name: "Improved Combat", desc: "Совершенство в Бою. Физ. Атк. и Физ. Защ. +15%." },
    { name: "Improved Condition", desc: "Совершенство Состояния. Макс. HP и Макс. MP +35%." },
    { name: "Improved Critical Attack", desc: "Совершенная Критическая Атака. Шанс Крит. Атк. +30%, сила Крит. Атк. +35%." }
  ],
  debuffs: [
    { name: "Sleep", desc: "Усыпление Ур. 1. Усыпляет противника." },
    { name: "Curse Weakness", desc: "Проклятие Слабости. Физ. Атк. цели -17%." },
    { name: "Dryad Root", desc: "Корень Дриады. Удерживает цель на месте." },
    { name: "Word of Fear", desc: "Слово Страха. Обращает врага в бегство." },
    { name: "Turn Undead", desc: "Испугать Нежить. Страх и снижение скорости на 50% для нежити." }
  ],
  toggle: [
    { name: "Arcane Wisdom", desc: "Тайная Мудрость. Расход MP -30%, Скор. Маг. -10%. Расходует 50 HP/сек." },
    { name: "Soul Cry", desc: "Крик Души. Физ. Атк. +4.5." },
    { name: "Block Buff", desc: "Блокировка Баффа. Блокирует входящие баффы от недругов." }
  ],
  transformation: [
    { name: "Inquisitor", desc: "Инквизитор. Позволяет использовать святые магические атаки." }
  ]
};
