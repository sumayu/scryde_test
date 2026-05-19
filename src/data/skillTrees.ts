import { ClassSkillTree, PledgeSkill, CertificationSkill, Skill } from "../types";

export const NORMAL_SKILL_TREE: ClassSkillTree[] = [
  {
    id: 0,
    name: "Human Fighter",
    race: "Человек",
    skills: [
      { name: "Lucky", minLevel: 1, cost: 0, desc: "Увеличивает удачу персонажа." },
      { name: "Common Craft", minLevel: 1, cost: 0, desc: "Позволяет создавать обычные предметы." },
      { name: "Armor Mastery", minLevel: 5, maxLevel: 5, desc: "Увеличивает защиту при ношении брони." },
      { name: "Weapon Mastery", minLevel: 5, maxLevel: 3, desc: "Увеличивает атаку при использовании оружия." },
      { name: "Power Shot", minLevel: 5, maxLevel: 9, desc: "Мощный выстрел из лука." },
      { name: "Power Strike", minLevel: 5, maxLevel: 9, desc: "Мощный удар мечом или топором." },
      { name: "Relax", minLevel: 5, desc: "Ускоряет регенерацию HP в сидячем положении." },
      { name: "Mortal Blow", minLevel: 5, maxLevel: 9, desc: "Смертельный удар кинжалом." },
      { name: "Create Common Item", minLevel: 5, maxLevel: 9, desc: "Уровень создания обычных предметов." },
      { name: "Expertise D", minLevel: 20, desc: "Позволяет использовать снаряжение ранга D." },
      { name: "Expertise C", minLevel: 40, desc: "Позволяет использовать снаряжение ранга C." },
      { name: "Expertise B", minLevel: 52, desc: "Позволяет использовать снаряжение ранга B." },
      { name: "Expertise A", minLevel: 61, desc: "Позволяет использовать снаряжение ранга A." },
      { name: "Expertise S", minLevel: 76, desc: "Позволяет использовать снаряжение ранга S." },
      { name: "Expertise S80", minLevel: 80, desc: "Позволяет использовать снаряжение ранга S80." },
      { name: "Expertise S84", minLevel: 84, desc: "Позволяет использовать снаряжение ранга S84." },
      { name: "Divine Inspiration", minLevel: 52, maxLevel: 4, itemId: [8618, 8619, 8620, 8621], desc: "Увеличивает количество доступных слотов для баффов." },
      { name: "Aurabird Falcon", minLevel: 75, isClicked: true, desc: "Трансформация в Сокола." },
      { name: "Aurabird Owl", minLevel: 75, isClicked: true, desc: "Трансформация в Сову." },
    ]
  },
  {
    id: 1,
    name: "Warrior",
    race: "Человек",
    skills: [
      { name: "Vicious Stance", minLevel: 20, maxLevel: 5 },
      { name: "Polearm Mastery", minLevel: 20, maxLevel: 8 },
      { name: "Light Armor Mastery", minLevel: 20, maxLevel: 13 },
      { name: "Sword/Blunt Weapon Mastery", minLevel: 20, maxLevel: 8 },
      { name: "Heavy Armor Mastery", minLevel: 20, maxLevel: 13 },
      { name: "Wild Sweep", minLevel: 20, maxLevel: 15 },
      { name: "War Cry", minLevel: 20 },
      { name: "Power Smash", minLevel: 20, maxLevel: 15 },
      { name: "Stun Attack", minLevel: 20, maxLevel: 15 },
      { name: "Boost HP", minLevel: 20, maxLevel: 3 },
      { name: "Fast HP Recovery", minLevel: 24, maxLevel: 2 },
      { name: "Vital Force", minLevel: 24, maxLevel: 2 },
      { name: "Accuracy", minLevel: 24 },
      { name: "Battle Roar", minLevel: 28 },
      { name: "Detect Insect Weakness", minLevel: 32 },
      { name: "Lionheart", minLevel: 36 },
    ]
  },
  {
    id: 4,
    name: "Human Knight",
    race: "Человек",
    skills: [
      { name: "Ultimate Defense", minLevel: 20 },
      { name: "Majesty", minLevel: 20 },
      { name: "Sword/Blunt Weapon Mastery", minLevel: 20, maxLevel: 8 },
      { name: "Heavy Armor Mastery", minLevel: 20, maxLevel: 15 },
      { name: "Shield Mastery", minLevel: 20, maxLevel: 2 },
      { name: "Shield Stun", minLevel: 20, maxLevel: 15 },
      { name: "Drain Health", minLevel: 20, maxLevel: 13 },
      { name: "Aggression", minLevel: 24, maxLevel: 12 },
      { name: "Divine Heal", minLevel: 28, maxLevel: 9 },
      { name: "Focus Mind", minLevel: 36 },
    ]
  },
  {
    id: 5,
    name: "Paladin",
    race: "Человек",
    skills: [
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Щитом (Shield Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Мечом/Дробящим (Sword/Blunt Weapon Mastery)", minLevel: 40, type: "passive" },
      { name: "Последняя Цитадель (Final Fortress)", minLevel: 40, type: "passive" },
      { name: "Фокусировка Разума (Focus Mind)", minLevel: 40, type: "passive" },
      { name: "Удар Щитом (Shield Strike)", minLevel: 40, maxLevel: 15 },
      { name: "Оглушение Щитом (Shield Stun)", minLevel: 40, maxLevel: 52 },
      { name: "Святая Броня (Holy Armor)", minLevel: 40, maxLevel: 2 },
      { name: "Святое Благословение (Holy Blessing)", minLevel: 40, maxLevel: 37 },
      { name: "Штурм Рыцаря (Knight Assault)", minLevel: 40, maxLevel: 15 },
      { name: "Великая Провокация (Grand Provoke)", minLevel: 40 },
      { name: "Железная Воля (Iron Will)", minLevel: 40, maxLevel: 3 },
      { name: "Цепь Гидры (Hydra Chain)", minLevel: 48, maxLevel: 3 },
      { name: "Ангельская Икона (Angelic Icon)", minLevel: 58, maxLevel: 3 },
      { name: "Жертвоприношение (Sacrifice)", minLevel: 52, maxLevel: 25 },
    ]
  },
  {
    id: 6,
    name: "Dark Avenger",
    race: "Человек",
    skills: [
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Щитом (Shield Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Мечом/Дробящим (Sword/Blunt Weapon Mastery)", minLevel: 40, type: "passive" },
      { name: "Последняя Цитадель (Final Fortress)", minLevel: 40, type: "passive" },
      { name: "Фокусировка Разума (Focus Mind)", minLevel: 40, type: "passive" },
      { name: "Удар Щитом (Shield Strike)", minLevel: 40, maxLevel: 15 },
      { name: "Оглушение Щитом (Shield Stun)", minLevel: 40, maxLevel: 52 },
      { name: "Призыв Темной Пантеры (Summon Dark Panther)", minLevel: 40, maxLevel: 7 },
      { name: "Хамстринг (Hamstring)", minLevel: 40, maxLevel: 14 },
      { name: "Отражение Урона (Reflect Damage)", minLevel: 40, maxLevel: 3 },
      { name: "Ужас (Horror)", minLevel: 46, maxLevel: 13 },
      { name: "Правосудие (Judgment)", minLevel: 55, maxLevel: 10 },
      { name: "Магическое Зеркало (Shield Deflect Magic)", minLevel: 60, maxLevel: 4 },
    ]
  },
  {
    id: 7,
    name: "Rogue",
    race: "Человек",
    skills: [
      { name: "Dagger Mastery", minLevel: 20, maxLevel: 8 },
      { name: "Mortal Blow", minLevel: 20, maxLevel: 24 },
      { name: "Dash", minLevel: 20 },
      { name: "Accuracy", minLevel: 24 },
      { name: "Ultimate Evasion", minLevel: 28 },
      { name: "Stunning Shot", minLevel: 36, maxLevel: 3 },
    ]
  },
  {
    id: 8,
    name: "Treasure Hunter",
    race: "Человек",
    skills: [
      { name: "Deadly Blow", minLevel: 40, maxLevel: 37 },
      { name: "Backstab", minLevel: 40, maxLevel: 37 },
      { name: "Shadow Step", minLevel: 40 },
      { name: "Bluff", minLevel: 48, maxLevel: 6 },
      { name: "Hide", minLevel: 52 },
      { name: "Sand Bomb", minLevel: 55, maxLevel: 10 },
      { name: "Lethal", minLevel: 56, maxLevel: 3 },
    ]
  },
  {
    id: 9,
    name: "Hawkeye",
    race: "Человек",
    skills: [
      { name: "Double Shot", minLevel: 40, maxLevel: 37 },
      { name: "Soul of Sagittarius", minLevel: 40, maxLevel: 4 },
      { name: "Stunning Shot", minLevel: 40, maxLevel: 40 },
      { name: "Snipe", minLevel: 60, maxLevel: 8 },
      { name: "Multiple Shot", minLevel: 56, maxLevel: 8 },
      { name: "Archers PVE UP", minLevel: 1, enabledOn: ["x25"] },
      { name: "Olympiad Blessing", minLevel: 40 },
      { name: "Block Buff", minLevel: 1 },
      { name: "Hawk Eye", minLevel: 40, maxLevel: 3 },
      { name: "Long Shot", minLevel: 40, maxLevel: 2 },
      { name: "Vital Force", minLevel: 40, maxLevel: 8 },
      { name: "Quick Step", minLevel: 43, maxLevel: 2 },
      { name: "Cold Shot", minLevel: 40, maxLevel: 31 },
      { name: "Burst Shot", minLevel: 46, maxLevel: 31 },
      { name: "Rapid Shot", minLevel: 55, maxLevel: 2 },
      { name: "Flame Hawk", minLevel: 56, maxLevel: 3 },
      { name: "Spirit of Sagittarius", minLevel: 58, maxLevel: 3 },
      { name: "Quiver of Arrow: A-Grade", minLevel: 60 },
      { name: "Detection", minLevel: 74 },
    ]
  },
  {
    id: 10,
    name: "Mage",
    race: "Человек",
    skills: [
      { name: "Lucky", minLevel: 1, type: "passive", desc: "Увеличивает удачу персонажа." },
      { name: "Common Craft", minLevel: 1, type: "passive", desc: "Позволяет создавать обычные предметы." },
      { name: "Armor Mastery", minLevel: 5, maxLevel: 5, type: "passive", desc: "Увеличивает защиту при ношении брони." },
      { name: "Weapon Mastery", minLevel: 5, maxLevel: 3, type: "passive", desc: "Увеличивает атаку при использовании оружия." },
      { name: "Wind Strike", minLevel: 1, maxLevel: 5, desc: "Атакует магией ветра. Мощность 12." },
      { name: "Self Heal", minLevel: 1, desc: "Восстанавливает собственное HP. Мощность 42." },
      { name: "Heal", minLevel: 7, maxLevel: 6, desc: "Восстанавливает HP. Мощность 50." },
      { name: "Might", minLevel: 7, desc: "Физ. Атк. +8%." },
      { name: "Shield", minLevel: 7, desc: "Физ. Защ. +8%." },
      { name: "Vampiric Touch", minLevel: 14, maxLevel: 2, desc: "Урон темной магией. Поглощает 40% HP." },
      { name: "Curse: Weakness", minLevel: 14, desc: "Физ. Атк. цели -17%." },
      { name: "Magician's Movement", minLevel: 1, type: "passive", desc: "Увеличивает Скорость Магии." },
    ]
  },
  {
    id: 11,
    name: "Human Wizard",
    race: "Человек",
    skills: [
      { name: "Blaze", minLevel: 20, maxLevel: 8 },
      { name: "Vampiric Touch", minLevel: 20, maxLevel: 6 },
      { name: "Sleep", minLevel: 20, maxLevel: 9 },
      { name: "Poisonous Cloud", minLevel: 25, maxLevel: 2 },
      { name: "Aura Burn", minLevel: 20, maxLevel: 8 },
      { name: "Summon Kat the Cat", minLevel: 20, maxLevel: 4 },
      { name: "Surrender To Fire", minLevel: 25, maxLevel: 3 },
      { name: "Body To Mind", minLevel: 25 },
      { name: "Corpse Life Drain", minLevel: 30, maxLevel: 2 },
      { name: "Slow", minLevel: 35 },
      { name: "Curse Chaos", minLevel: 35 },
    ]
  },
  {
    id: 12,
    name: "Sorcerer",
    race: "Человек",
    skills: [
      { name: "Prominence", minLevel: 40, maxLevel: 28 },
      { name: "Blazing Circle", minLevel: 40, maxLevel: 19 },
      { name: "Aura Flare", minLevel: 40, maxLevel: 28 },
      { name: "Sleeping Cloud", minLevel: 44, maxLevel: 5 },
      { name: "Aura Flash", minLevel: 58, maxLevel: 5 },
      { name: "Slow", minLevel: 40, maxLevel: 15 },
      { name: "Surrender To Fire", minLevel: 40, maxLevel: 17 },
      { name: "Cancellation", minLevel: 48, maxLevel: 12 },
      { name: "Rain of Fire", minLevel: 58, maxLevel: 9 },
      { name: "Inferno", minLevel: 70 },
      { name: "Block Buff", minLevel: 1 },
    ]
  },
  {
    id: 13,
    name: "Necromancer",
    race: "Человек",
    skills: [
      { name: "Vampiric Claw", minLevel: 40, maxLevel: 28 },
      { name: "Death Spike", minLevel: 44, maxLevel: 13 },
      { name: "Curse Death Link", minLevel: 52, maxLevel: 22 },
      { name: "Anchor", minLevel: 40, maxLevel: 13 },
      { name: "Mass Fear", minLevel: 58, maxLevel: 5 },
      { name: "Summon Corrupted Man", minLevel: 40, maxLevel: 6 },
      { name: "Summon Cursed Man", minLevel: 56, maxLevel: 7 },
      { name: "Curse Gloom", minLevel: 44, maxLevel: 13 },
      { name: "Curse Disease", minLevel: 58, maxLevel: 9 },
      { name: "Transfer Pain", minLevel: 40, maxLevel: 5 },
      { name: "Block Buff", minLevel: 1 },
    ]
  },
  {
    id: 14,
    name: "Warlock",
    race: "Человек",
    skills: [
      { name: "Summon Kai the Cat", minLevel: 40, maxLevel: 14 },
      { name: "Summon Feline Queen", minLevel: 56, maxLevel: 10 },
      { name: "Dimension Spiral", minLevel: 40, maxLevel: 14 },
      { name: "Transfer Pain", minLevel: 40, maxLevel: 5 },
      { name: "Servitor Empowerment", minLevel: 52, maxLevel: 2 },
      { name: "Queen Symbiosis", minLevel: 56, maxLevel: 3 },
      { name: "Servitor Share", minLevel: 76 },
      { name: "Block Buff", minLevel: 1 },
    ]
  },
  {
    id: 15,
    name: "Cleric",
    race: "Человек",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 20, maxLevel: 12, type: "passive", desc: "Увеличивает Маг. Защ. и сопротивление магическому урону." },
      { name: "Владение Магической Броней (Magic Armor Mastery)", minLevel: 20, type: "passive", desc: "Увеличивает Физ. Защ. при ношении магической брони." },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 20, type: "passive", desc: "Увеличивает Физ. Атк. и Маг. Атк." },
      { name: "Быстрое Восполнение Маны (Fast Mana Recovery)", minLevel: 20, type: "passive" },
      { name: "Быстрое Чтение Заклинаний (Fast Spell Casting)", minLevel: 20, type: "passive" },
      { name: "Боевое Лечение (Battle Heal)", minLevel: 20, maxLevel: 15 },
      { name: "Групповое Лечение (Group Heal)", minLevel: 20, maxLevel: 15 },
      { name: "Воскрешение (Resurrection)", minLevel: 20, maxLevel: 2 },
      { name: "Проницательность (Acumen)", minLevel: 20, maxLevel: 2 },
      { name: "Ментальный Щит (Mental Shield)", minLevel: 25 },
      { name: "Усыпление (Sleep)", minLevel: 20, maxLevel: 9 },
      { name: "Дух Берсерка (Berserker Spirit)", minLevel: 35 },
      { name: "Регенерация (Regeneration)", minLevel: 35 },
      { name: "Могущество (Might)", minLevel: 20 },
      { name: "Щит (Shield)", minLevel: 20 },
      { name: "Святое Оружие (Holy Weapon)", minLevel: 20 },
    ]
  },
  {
    id: 2,
    name: "Gladiator",
    race: "Человек",
    skills: [
      { name: "Dual Weapon Mastery", minLevel: 40, maxLevel: 37 },
      { name: "Sonic Focus", minLevel: 40, maxLevel: 7 },
      { name: "Sonic Mastery", minLevel: 40, maxLevel: 7 },
      { name: "Triple Slash", minLevel: 40, maxLevel: 37 },
      { name: "Sonic Buster", minLevel: 43, maxLevel: 34 },
      { name: "Sonic Blaster", minLevel: 43, maxLevel: 37 },
      { name: "Double Sonic Slash", minLevel: 49, maxLevel: 31 },
      { name: "Triple Sonic Slash", minLevel: 55, maxLevel: 22 },
      { name: "Duelist Spirit", minLevel: 54, maxLevel: 2 },
      { name: "War Frenzy", minLevel: 58, maxLevel: 3 },
      { name: "Sonic Move", minLevel: 62, maxLevel: 2 },
    ]
  },
  {
    id: 3,
    name: "Warlord",
    race: "Человек",
    skills: [
      { name: "Polearm Mastery", minLevel: 40, maxLevel: 45 },
      { name: "Whirlwind", minLevel: 40, maxLevel: 37 },
      { name: "Thunder Storm", minLevel: 40, maxLevel: 37 },
      { name: "Focus Attack", minLevel: 40, maxLevel: 5 },
      { name: "Provoke", minLevel: 43, maxLevel: 3 },
      { name: "Shock Blast", minLevel: 44, maxLevel: 8 },
      { name: "Revival", minLevel: 55 },
      { name: "Wrath", minLevel: 66, maxLevel: 10 },
    ]
  },
  {
    id: 16,
    name: "Bishop",
    race: "Человек",
    skills: [
      { name: "Greater Battle Heal", minLevel: 40, maxLevel: 33 },
      { name: "Mass Resurrection", minLevel: 40, maxLevel: 6 },
      { name: "Body of Avatar", minLevel: 40 },
      { name: "Celestial Shield", minLevel: 40 },
      { name: "Major Heal", minLevel: 40 },
      { name: "Cleanse", minLevel: 40 },
      { name: "Sublime", minLevel: 40 },
    ]
  },
  {
    id: 17,
    name: "Prophet",
    race: "Человек",
    skills: [
      { name: "Might", minLevel: 40 },
      { name: "Focus", minLevel: 40 },
      { name: "Haste", minLevel: 40 },
      { name: "Acumen", minLevel: 40 },
      { name: "Berserker Spirit", minLevel: 40 },
      { name: "Blessed Body", minLevel: 40 },
      { name: "Greater Might", minLevel: 58 },
      { name: "Greater Shield", minLevel: 58 },
      { name: "Vampiric Rage", minLevel: 30, maxLevel: 4 },
    ]
  },
  {
    id: 18,
    name: "Elven Fighter",
    race: "Эльф",
    skills: [
      { name: "Удачливый (Lucky)", minLevel: 1, type: "passive" },
      { name: "Стихийное Исцеление (Elemental Heal)", minLevel: 1 },
      { name: "Аура Защиты (Defense Aura)", minLevel: 1 },
      { name: "Аура Атаки (Attack Aura)", minLevel: 1 },
      { name: "Владение Броней (Armor Mastery)", minLevel: 5, type: "passive" },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 5, type: "passive" },
      { name: "Самолечение (Self Heal)", minLevel: 1 },
    ]
  },
  {
    id: 19,
    name: "Elven Knight",
    race: "Эльф",
    skills: [
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Щитом (Shield Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Мечом/Дробящим (Sword/Blunt Weapon Mastery)", minLevel: 20, type: "passive" },
      { name: "Стихийное Исцеление (Elemental Heal)", minLevel: 20, maxLevel: 18 },
      { name: "Рывок (Sprint)", minLevel: 32 },
      { name: "Запутывание (Entangle)", minLevel: 36 },
      { name: "Фокусировка Разума (Focus Mind)", minLevel: 36, type: "passive" },
      { name: "Агрессия (Aggression)", minLevel: 20 },
      { name: "Абсолютная Защита (Ultimate Defense)", minLevel: 20 },
    ]
  },
  {
    id: 20,
    name: "Temple Knight",
    race: "Эльф",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, maxLevel: 45, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Щитом (Shield Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Мечом/Дробящим (Sword/Blunt Weapon Mastery)", minLevel: 40, type: "passive" },
      { name: "Удар Щитом (Shield Strike)", minLevel: 40, maxLevel: 15 },
      { name: "Эхо Щита (Echo Shield)", minLevel: 40, maxLevel: 15 },
      { name: "Стремительный Поток (Wave Rush)", minLevel: 40 },
      { name: "Духовный Барьер (Spirit Barrier)", minLevel: 40, maxLevel: 3 },
      { name: "Призыв Штормового Куба (Summon Storm Cubic)", minLevel: 40, maxLevel: 8 },
      { name: "Призыв Живительного Куба (Summon Life Cubic)", minLevel: 43, maxLevel: 7 },
      { name: "Мастерство Кубов (Cubic Mastery)", minLevel: 40, type: "passive" },
      { name: "Трибунал (Tribunal)", minLevel: 40 },
      { name: "Жертвоприношение (Sacrifice)", minLevel: 40 },
      { name: "Цепь Гидры (Hydra Chain)", minLevel: 48, maxLevel: 3 },
      { name: "Благословение Евы (Eva's Blessing)", minLevel: 56, maxLevel: 13 },
    ]
  },
  {
    id: 21,
    name: "Swordsinger",
    race: "Эльф",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, maxLevel: 45, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Смертельный Удар (Deadly Smash)", minLevel: 40, maxLevel: 25 },
      { name: "Шепот Битвы (Battle Whisper)", minLevel: 46, maxLevel: 3 },
      { name: "Симфония Меча (Sword Symphony)", minLevel: 55, maxLevel: 5 },
      { name: "Песня Охотника (Song of Hunter)", minLevel: 40 },
      { name: "Песня Отражения (Song of Warding)", minLevel: 43 },
      { name: "Песня Ветра (Song of Wind)", minLevel: 46 },
      { name: "Песня Земли (Song of Earth)", minLevel: 55 },
      { name: "Песня Жизни (Song of Vitality)", minLevel: 66 },
      { name: "Песня Чемпиона (Song of Champion)", minLevel: 70 },
      { name: "Песня Обновления (Song of Renewal)", minLevel: 70 },
    ]
  },
  {
    id: 22,
    name: "Elven Scout",
    race: "Эльф",
    skills: [
      { name: "Владение Кинжалом (Dagger Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Луком (Bow Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Легкой Броней (Light Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Смертельный Выстрел (Lethal Shot)", minLevel: 20 },
      { name: "Стихийное Исцеление (Elemental Heal)", minLevel: 20, maxLevel: 18 },
      { name: "Рывок (Sprint)", minLevel: 32 },
      { name: "Запутывание (Entangle)", minLevel: 36 },
      { name: "Абсолютное Уклонение (Ultimate Evasion)", minLevel: 28 },
    ]
  },
  {
    id: 23,
    name: "Plains Walker",
    race: "Эльф",
    skills: [
      { name: "Deadly Blow", minLevel: 40, maxLevel: 37 },
      { name: "Backstab", minLevel: 40, maxLevel: 37 },
      { name: "Shadow Step", minLevel: 40 },
      { name: "Bluff", minLevel: 48, maxLevel: 6 },
      { name: "Hide", minLevel: 52 },
      { name: "Sand Bomb", minLevel: 55, maxLevel: 10 },
      { name: "Blinding Blow", minLevel: 66, maxLevel: 10 },
    ]
  },
  {
    id: 24,
    name: "Silver Ranger",
    race: "Эльф",
    skills: [
      { name: "Double Shot", minLevel: 40, maxLevel: 37 },
      { name: "Soul of Sagittarius", minLevel: 40, maxLevel: 4 },
      { name: "Stunning Shot", minLevel: 40, maxLevel: 40 },
      { name: "Rapid Fire", minLevel: 60, maxLevel: 8 },
      { name: "Multiple Shot", minLevel: 56, maxLevel: 8 },
      { name: "Archers PVE UP", minLevel: 1, enabledOn: ["x25"] },
    ]
  },
  {
    id: 25,
    name: "Elven Mage",
    race: "Эльф",
    skills: [
      { name: "Wind Strike", minLevel: 1, maxLevel: 5 },
      { name: "Heal", minLevel: 7, maxLevel: 6 },
      { name: "Wind Shackle", minLevel: 14 },
      { name: "Might", minLevel: 7 },
      { name: "Shield", minLevel: 7 },
      { name: "Magician's Movement", minLevel: 1 },
      { name: "Self Heal", minLevel: 1 },
    ]
  },
  {
    id: 26,
    name: "Elven Wizard",
    race: "Эльф",
    skills: [
      { name: "Aqua Swirl", minLevel: 20, maxLevel: 8 },
      { name: "Solar Spark", minLevel: 25, maxLevel: 3 },
      { name: "Sleep", minLevel: 20, maxLevel: 9 },
      { name: "Aura Burn", minLevel: 20, maxLevel: 8 },
      { name: "Summon Boxer the Unicorn", minLevel: 20, maxLevel: 4 },
      { name: "Resist Aqua", minLevel: 25 },
      { name: "Bright Servitor", minLevel: 35 },
    ]
  },
  {
    id: 27,
    name: "Spellsinger",
    race: "Эльф",
    skills: [
      { name: "Hydro Blast", minLevel: 40, maxLevel: 28 },
      { name: "Ice Dagger", minLevel: 40, maxLevel: 17 },
      { name: "Aura Flare", minLevel: 40, maxLevel: 28 },
      { name: "Sleeping Cloud", minLevel: 44, maxLevel: 5 },
      { name: "Aura Flash", minLevel: 58, maxLevel: 5 },
      { name: "Freezing Skin", minLevel: 40, maxLevel: 3 },
      { name: "Surrender To Water", minLevel: 40, maxLevel: 14 },
      { name: "Cancellation", minLevel: 48, maxLevel: 12 },
      { name: "Blizzard", minLevel: 70 },
      { name: "Block Buff", minLevel: 1 },
    ]
  },
  {
    id: 28,
    name: "Elemental Summoner",
    race: "Эльф",
    skills: [
      { name: "Summon Merrow the Unicorn", minLevel: 40, maxLevel: 14 },
      { name: "Summon Unicorn Seraphim", minLevel: 56, maxLevel: 10 },
      { name: "Dimension Spiral", minLevel: 40, maxLevel: 14 },
      { name: "Transfer Pain", minLevel: 40, maxLevel: 5 },
      { name: "Summon Aqua Cubic", minLevel: 40, maxLevel: 9 },
      { name: "Summon Life Cubic", minLevel: 40, maxLevel: 7 },
      { name: "Servitor Empowerment", minLevel: 52, maxLevel: 2 },
      { name: "Seraphim Symbiosis", minLevel: 56, maxLevel: 3 },
      { name: "Servitor Share", minLevel: 76 },
      { name: "Block Buff", minLevel: 1 },
    ]
  },
  {
    id: 29,
    name: "Oracle",
    race: "Эльф",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 20, maxLevel: 12, type: "passive", desc: "Увеличивает Маг. Защ. и сопротивление магическому урону." },
      { name: "Владение Магической Броней (Magic Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 20, type: "passive" },
      { name: "Быстрое Восполнение Маны (Fast Mana Recovery)", minLevel: 20, type: "passive" },
      { name: "Быстрое Чтение Заклинаний (Fast Spell Casting)", minLevel: 20, type: "passive" },
      { name: "Лечение (Heal)", minLevel: 20, maxLevel: 18 },
      { name: "Подпитка Маной (Recharge)", minLevel: 30, maxLevel: 4 },
      { name: "Корень Дриады (Dryad Root)", minLevel: 25, maxLevel: 9 },
      { name: "Легкая Походка (Wind Walk)", minLevel: 20, maxLevel: 2 },
      { name: "Святое Оружие (Holy Weapon)", minLevel: 25 },
      { name: "Щит (Shield)", minLevel: 20 },
      { name: "Могущество (Might)", minLevel: 20 },
    ]
  },
  {
    id: 30,
    name: "Elder",
    race: "Эльф",
    skills: [
      { name: "Greater Heal", minLevel: 40, maxLevel: 33 },
      { name: "Greater Group Heal", minLevel: 40, maxLevel: 29 },
      { name: "Vitalize", minLevel: 48, maxLevel: 27 },
      { name: "Bless Shield", minLevel: 40, maxLevel: 6 },
      { name: "Resist Shock", minLevel: 40, maxLevel: 4 },
      { name: "Party Recall", minLevel: 48, maxLevel: 2 },
      { name: "Mantra", minLevel: 52, maxLevel: 3, enabledOn: ["x2", "x05"] },
      { name: "Clarity", minLevel: 58, maxLevel: 3 },
      { name: "Block Buff", minLevel: 1 },
    ]
  },
  {
    id: 31,
    name: "Dark Fighter",
    race: "Тёмный Эльф",
    skills: [
      { name: "Power Strike", minLevel: 5, maxLevel: 9 },
      { name: "Mortal Blow", minLevel: 5, maxLevel: 9 },
      { name: "Power Shot", minLevel: 5, maxLevel: 9 },
      { name: "Shadow Sense", minLevel: 15 },
    ]
  },
  {
    id: 32,
    name: "Palus Knight",
    race: "Тёмный Эльф",
    skills: [
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Щитом (Shield Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Мечом/Дробящим (Sword/Blunt Weapon Mastery)", minLevel: 20, type: "passive" },
      { name: "Абсолютная Защита (Ultimate Defense)", minLevel: 20 },
      { name: "Аура Защиты (Defense Aura)", minLevel: 20 },
      { name: "Агрессия (Aggression)", minLevel: 20, maxLevel: 12 },
      { name: "Леденящий Удар (Freezing Strike)", minLevel: 36 },
      { name: "Фокусировка Разума (Focus Mind)", minLevel: 36, type: "passive" },
      { name: "Порча Души (Drain Health)", minLevel: 20 },
    ]
  },
  {
    id: 33,
    name: "Shillien Knight",
    race: "Тёмный Эльф",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, maxLevel: 45, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Щитом (Shield Mastery)", minLevel: 40, type: "passive" },
      { name: "Призыв Фантомного Куба (Summon Phantom Cubic)", minLevel: 40 },
      { name: "Призыв Вампирического Куба (Summon Vampiric Cubic)", minLevel: 40 },
      { name: "Призыв Змеиного Куба (Summon Viper Cubic)", minLevel: 40 },
      { name: "Удар Молнии (Lightning Strike)", minLevel: 40 },
      { name: "Сглаз (Hex)", minLevel: 40 },
      { name: "Сокрушение Мощи (Power Break)", minLevel: 40 },
      { name: "Стинга (Sting)", minLevel: 40 },
      { name: "Трибунал (Tribunal)", minLevel: 40 },
      { name: "Судьба Шиллен (Shillien's Fate)", minLevel: 76 },
    ]
  },
  {
    id: 34,
    name: "Bladedancer",
    race: "Тёмный Эльф",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, maxLevel: 45, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Танец Огня (Dance of Fire)", minLevel: 40 },
      { name: "Танец Света (Dance of Light)", minLevel: 43 },
      { name: "Танец Мистика (Dance of the Mystic)", minLevel: 49 },
      { name: "Танец Концентрации (Dance of Concentration)", minLevel: 52 },
      { name: "Танец Воителя (Dance of the Warrior)", minLevel: 55 },
      { name: "Dance of Fury (Танец Ярости)", minLevel: 58 },
      { name: "Танец Вампира (Dance of the Vampire)", minLevel: 74 },
    ]
  },
  {
    id: 35,
    name: "Assassin",
    race: "Тёмный Эльф",
    skills: [
      { name: "Dagger Mastery", minLevel: 20, maxLevel: 8 },
      { name: "Mortal Blow", minLevel: 20, maxLevel: 24 },
      { name: "Power Break", minLevel: 32, maxLevel: 2 },
      { name: "Ultimate Evasion", minLevel: 28 },
    ]
  },
  {
    id: 36,
    name: "Abyss Walker",
    race: "Тёмный Эльф",
    skills: [
      { name: "Deadly Blow", minLevel: 40, maxLevel: 37 },
      { name: "Backstab", minLevel: 40, maxLevel: 37 },
      { name: "Shadow Step", minLevel: 40 },
      { name: "Bluff", minLevel: 48, maxLevel: 6 },
      { name: "Hide", minLevel: 52 },
      { name: "Sand Bomb", minLevel: 55, maxLevel: 10 },
      { name: "Ghost Run", minLevel: 44 },
    ]
  },
  {
    id: 37,
    name: "Phantom Ranger",
    race: "Тёмный Эльф",
    skills: [
      { name: "Double Shot", minLevel: 40, maxLevel: 37 },
      { name: "Soul of Sagittarius", minLevel: 40, maxLevel: 4 },
      { name: "Stunning Shot", minLevel: 40, maxLevel: 40 },
      { name: "Dead Eye", minLevel: 60, maxLevel: 8 },
      { name: "Fatal Counter", minLevel: 60, maxLevel: 16 },
      { name: "Ghost Piercing", minLevel: 56, maxLevel: 3 },
    ]
  },
  {
    id: 38,
    name: "Dark Mage",
    race: "Тёмный Эльф",
    skills: [
      { name: "Wind Strike", minLevel: 1, maxLevel: 5 },
      { name: "Vampiric Touch", minLevel: 14, maxLevel: 2 },
      { name: "Wind Shackle", minLevel: 14 },
    ]
  },
  {
    id: 39,
    name: "Dark Wizard",
    race: "Тёмный Эльф",
    skills: [
      { name: "Twister", minLevel: 20, maxLevel: 8 },
      { name: "Shadow Spark", minLevel: 25, maxLevel: 3 },
      { name: "Poisonous Cloud", minLevel: 25, maxLevel: 2 },
      { name: "Sleep", minLevel: 20, maxLevel: 9 },
    ]
  },
  {
    id: 40,
    name: "Spellhowler",
    race: "Тёмный Эльф",
    skills: [
      { name: "Hurricane", minLevel: 40, maxLevel: 28 },
      { name: "Vampiric Claw", minLevel: 40, maxLevel: 28 },
      { name: "Shadow Flare", minLevel: 40, maxLevel: 14 },
      { name: "Death Spike", minLevel: 44, maxLevel: 13 },
      { name: "Curse Death Link", minLevel: 52, maxLevel: 22 },
      { name: "Aura Flash", minLevel: 58, maxLevel: 5 },
    ]
  },
  {
    id: 41,
    name: "Phantom Summoner",
    race: "Тёмный Эльф",
    skills: [
      { name: "Summon Soulless", minLevel: 40, maxLevel: 14 },
      { name: "Summon Nightshade", minLevel: 56, maxLevel: 10 },
      { name: "Dimension Spiral", minLevel: 40, maxLevel: 14 },
      { name: "Transfer Pain", minLevel: 40, maxLevel: 5 },
      { name: "Summon Phantom Cubic", minLevel: 40, maxLevel: 8 },
      { name: "Summon Spark Cubic", minLevel: 40, maxLevel: 9 },
      { name: "Servitor Empowerment", minLevel: 52, maxLevel: 2 },
      { name: "Servitor Share", minLevel: 76 },
      { name: "Block Buff", minLevel: 1 },
    ]
  },
  {
    id: 42,
    name: "Shillien Oracle",
    race: "Тёмный Эльф",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 20, maxLevel: 12, type: "passive", desc: "Увеличивает Маг. Защ. и сопротивление магическому урону." },
      { name: "Владение Магической Броней (Magic Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 20, type: "passive" },
      { name: "Быстрое Восполнение Маны (Fast Mana Recovery)", minLevel: 20, type: "passive" },
      { name: "Быстрое Чтение Заклинаний (Fast Spell Casting)", minLevel: 20, type: "passive" },
      { name: "Лечение (Heal)", minLevel: 20, maxLevel: 18 },
      { name: "Воодушевление (Empower)", minLevel: 25 },
      { name: "Подпитка Маной (Recharge)", minLevel: 30, maxLevel: 4 },
      { name: "Гнев Вампира (Vampiric Rage)", minLevel: 30 },
      { name: "Легкая Походка (Wind Walk)", minLevel: 20, maxLevel: 2 },
      { name: "Щит (Shield)", minLevel: 20 },
      { name: "Могущество (Might)", minLevel: 20 },
    ]
  },
  {
    id: 43,
    name: "Shillien Elder",
    race: "Тёмный Эльф",
    skills: [
      { name: "Greater Heal", minLevel: 40, maxLevel: 33 },
      { name: "Greater Group Heal", minLevel: 40, maxLevel: 29 },
      { name: "Empower", minLevel: 40, maxLevel: 3 },
      { name: "Vampiric Rage", minLevel: 44, maxLevel: 4 },
      { name: "Stigma of Shilen", minLevel: 40, maxLevel: 4 },
      { name: "Death Whisper", minLevel: 40, maxLevel: 3 },
      { name: "Wild Magic", minLevel: 62, maxLevel: 2 },
      { name: "Block Buff", minLevel: 1 },
      { name: "Party Recall", minLevel: 48, enabledOn: ["x05"] },
      { name: "Vampiric Fog", minLevel: 52, maxLevel: 3, enabledOn: ["x1", "x2", "x05"] },
      { name: "Purge", minLevel: 56, enabledOn: ["x1"] },
    ]
  },
  {
    id: 44,
    name: "БОЕЦ ОРКОВ (Orc Fighter)",
    race: "Орк",
    skills: [
      { name: "Удачливый (Lucky)", minLevel: 1, type: "passive" },
      { name: "Могучий Удар (Power Strike)", minLevel: 1, maxLevel: 9 },
      { name: "Железное Тело (Iron Body)", minLevel: 15, type: "passive", desc: "Увеличивает сопротивление к эффектам кровотечения и шока." },
      { name: "Отдых (Relax)", minLevel: 1, desc: "Ускоряет регенерацию HP в сидячем положении." },
      { name: "Стойкость (Toughness)", minLevel: 1, type: "passive", desc: "Увеличивает защиту от оглушения и паралича." },
      { name: "Владение Броней (Armor Mastery)", minLevel: 5, type: "passive" },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 5, type: "passive" },
    ]
  },
  {
    id: 45,
    name: "НАЛЕТЧИК (Orc Raider)",
    race: "Орк",
    skills: [
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Двуручным Оружием (Two-handed Weapon Mastery)", minLevel: 20, type: "passive" },
      { name: "Сокрушительный Удар (Power Smash)", minLevel: 20, maxLevel: 15 },
      { name: "Оглушающая Атака (Stun Attack)", minLevel: 20, maxLevel: 15 },
      { name: "Безумие (Frenzy)", minLevel: 32, desc: "Значительно увеличивает силу атаки при низком уровне HP." },
      { name: "Мужество (Guts)", minLevel: 36, desc: "Значительно увеличивает защиту при низком уровне HP." },
      { name: "Боевой Рык (Battle Roar)", minLevel: 28, desc: "Восстанавливает HP и увеличивает его максимальное значение." },
      { name: "Львиное Сердце (Lionheart)", minLevel: 36, desc: "Увеличивает сопротивление к шоку, сну и параличу." },
    ]
  },
  {
    id: 46,
    name: "ДЕСТРОЕР (Destroyer)",
    race: "Орк",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Сокрушение Молотом (Hammer Crush)", minLevel: 40, maxLevel: 37 },
      { name: "Разрушение Рока (Crush of Doom)", minLevel: 60, maxLevel: 16 },
      { name: "Безумие (Frenzy)", minLevel: 40, maxLevel: 3 },
      { name: "Фанатизм (Zealot)", minLevel: 58, maxLevel: 3, desc: "Увеличивает скорость и силу атаки." },
      { name: "Мужество (Guts)", minLevel: 43, maxLevel: 3 },
      { name: "Боевой Рык (Battle Roar)", minLevel: 40, maxLevel: 6 },
      { name: "Львиное Сердце (Lionheart)", minLevel: 49, maxLevel: 3 },
      { name: "Ничто не Вечно (Denial of Death)", minLevel: 56 },
      { name: "Мастер Чисел (Accuracy)", minLevel: 40, type: "toggle" },
      { name: "Блокировка Баффа", minLevel: 40, type: "toggle" },
    ]
  },
  {
    id: 47,
    name: "МОНАХ (Monk)",
    race: "Орк",
    skills: [
      { name: "Железный Кулак (Iron Punch)", minLevel: 20, maxLevel: 24 },
      { name: "Оглушающий Кулак (Stunning Fist)", minLevel: 20, maxLevel: 15 },
      { name: "Фокусировка Силы (Focused Force)", minLevel: 24, maxLevel: 2 },
      { name: "Штурм Урагана (Hurricane Assault)", minLevel: 36, maxLevel: 3 },
      { name: "Тотем Духа Волка (Wolf Spirit Totem)", minLevel: 20 },
      { name: "Тотем Духа Медведя (Bear Spirit Totem)", minLevel: 28 },
      { name: "Владение Легкой Броней (Light Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Кастетами (Fist Weapon Mastery)", minLevel: 20, type: "passive" },
    ]
  },
  {
    id: 48,
    name: "ТИРАНТ (Tyrant)",
    race: "Орк",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, type: "passive" },
      { name: "Владение Кастетами (Fist Weapon Mastery)", minLevel: 40, type: "passive" },
      { name: "Штурм Урагана (Hurricane Assault)", minLevel: 40 },
      { name: "Тотем Духа Пумы (Puma Spirit Totem)", minLevel: 40 },
      { name: "Тотем Духа Огра (Ogre Spirit Totem)", minLevel: 40 },
      { name: "Тотем Духа Кролика (Rabbit Spirit Totem)", minLevel: 62 },
      { name: "Тотем Духа Зубра (Bison Spirit Totem)", minLevel: 62 },
      { name: "Фанатизм (Zealot)", minLevel: 40 },
      { name: "Разрушительный Энергетический Удар (Burning Fist)", minLevel: 40 },
      { name: "Крик Души (Soul Cry)", minLevel: 40, type: "toggle" },
    ]
  },
  {
    id: 50,
    name: "ШАМАН ОРКОВ (Orc Shaman)",
    race: "Орк",
    skills: [
      { name: "Напев Жизни (Chant of Life)", minLevel: 20, maxLevel: 4 },
      { name: "Дар Паагрио (Pa'agrian Gift)", minLevel: 30 },
      { name: "Крик Души (Soul Cry)", minLevel: 20, maxLevel: 4 },
    ]
  },
  {
    id: 51,
    name: "ВЕРХОВНЫЙ ШАМАН (Overlord)",
    race: "Орк",
    skills: [
      { name: "Печать Зимы (Seal of Winter)", minLevel: 40, desc: "Понижает Скор. Атк. врагов вокруг." },
      { name: "Печать Молчания (Seal of Silence)", minLevel: 40, desc: "Блокирует магию врагов вокруг." },
      { name: "Печать Оковы (Seal of Binding)", minLevel: 40, desc: "Удерживает врагов на месте." },
      { name: "Печать Замедления (Seal of Slow)", minLevel: 40 },
      { name: "Ускорение Паагрио (Pa'agrian Haste)", minLevel: 40, desc: "Увеличивает Скор. Маг. членов клана." },
      { name: "Душа Паагрио (Soul of Pa'agrio)", minLevel: 40, desc: "Увеличивает Маг. Атк. членов клана." },
      { name: "Взор Паагрио (Sight of Pa'agrio)", minLevel: 40, desc: "Увеличивает Точность членов клана." },
      { name: "Щит Души (Soul Guard)", minLevel: 40, type: "toggle", desc: "Значительно увеличивает Физ. Защ. за счет MP." },
    ]
  },
  {
    id: 52,
    name: "ВЕСТНИК ВОЙНЫ (Warcryer)",
    race: "Орк",
    skills: [
      { name: "Напев Жизни (Chant of Life)", minLevel: 40, desc: "Регенерация HP группы." },
      { name: "Напев Хищника (Chant of Predator)", minLevel: 40, desc: "Увеличивает Шанс Крита группы." },
      { name: "Напев Ярости (Chant of Rage)", minLevel: 40, desc: "Увеличивает Силу Крита группы." },
      { name: "Напев Берсерка (Chant of Berserker)", minLevel: 44, desc: "Увеличивает Физ. Атк., Скор. Атк. и Скор. Маг., но снижает защиту." },
      { name: "Напев Победы (Chant of Victory)", minLevel: 74, desc: "Мощный бафф: HP +20%, Шанс Крита +20%, Маг. Атк. +20% и др." },
      { name: "Напев Огня (Chant of Fire)", minLevel: 40, desc: "Маг. Защ. +." },
      { name: "Напев Ярости (War Chant)", minLevel: 48, desc: "Физ. Атк. +." },
      { name: "Напев Земли (Earth Chant)", minLevel: 48, desc: "Физ. Защ. +." },
    ]
  },
  {
    id: 53,
    name: "ГНОМ ВОИТЕЛЬ (Dwarven Fighter)",
    race: "Гном",
    skills: [
      { name: "Удачливый (Lucky)", minLevel: 1, type: "passive" },
      { name: "Ремесло Гномов (Dwarven Craft)", minLevel: 1, type: "passive" },
      { name: "Оценка (Spoil)", minLevel: 10 },
      { name: "Присвоение (Sweeper)", minLevel: 10 },
      { name: "Лимит Веса (Weight Limit)", minLevel: 1, type: "passive" },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 5, type: "passive" },
      { name: "Владение Броней (Armor Mastery)", minLevel: 5, type: "passive" },
    ]
  },
  {
    id: 54,
    name: "СОБИРАТЕЛЬ (Scavenger)",
    race: "Гном",
    skills: [
      { name: "Оценка (Spoil)", minLevel: 20, maxLevel: 4 },
      { name: "Дикий Размах (Wild Sweep)", minLevel: 20, maxLevel: 15 },
      { name: "Оглушающая Атака (Stun Attack)", minLevel: 20, maxLevel: 15 },
      { name: "Массовая Оценка (Spoil Festival)", minLevel: 28, maxLevel: 2 },
      { name: "Владение Легкой Броней (Light Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 20, type: "passive" },
    ]
  },
  {
    id: 55,
    name: "ОХОТНИК ЗА НАГРАДОЙ (Bounty Hunter)",
    race: "Гном",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Массовая Оценка (Spoil Festival)", minLevel: 43, maxLevel: 9 },
      { name: "Оценка (Spoil)", minLevel: 43, maxLevel: 11 },
      { name: "Сокрушение Молотом (Hammer Crush)", minLevel: 40, maxLevel: 37 },
      { name: "Сокрушительный Удар (Crushing Strike)", minLevel: 40, maxLevel: 15 },
      { name: "Бросок Монеты (Coin Toss)", minLevel: 52, maxLevel: 6 },
      { name: "Фокусировка Разума (Focus Mind)", minLevel: 40, type: "passive" },
    ]
  },
  {
    id: 57,
    name: "КУЗНЕЦ (Warsmith)",
    race: "Гном",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Призыв Механического Голема (Summon Mechanic Golem)", minLevel: 43, maxLevel: 9 },
      { name: "Призыв Бомбы (Summon Big Boom)", minLevel: 40, maxLevel: 5 },
      { name: "Боевой Клич (Battle Cry)", minLevel: 43, maxLevel: 5 },
      { name: "Создание Вещи (Create Item)", minLevel: 43, maxLevel: 9 },
      { name: "Провокация (Provoke)", minLevel: 43, maxLevel: 3 },
      { name: "Лимит Веса (Weight Limit)", minLevel: 46, maxLevel: 3, type: "passive" },
      { name: "Берсерк (Berserk)", minLevel: 62 },
      { name: "Блокировка Баффа", minLevel: 1, type: "toggle" },
      { name: "Призыв Осадного Голема (Summon Siege Golem)", minLevel: 40 },
    ]
  },
  {
    id: 56,
    name: "РЕМЕСЛЕННИК (Artisan)",
    race: "Гном",
    skills: [
      { name: "Создание Вещи (Create Item)", minLevel: 20, maxLevel: 4 },
      { name: "Призыв Механического Голема (Summon Mechanic Golem)", minLevel: 28, maxLevel: 2 },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 20, type: "passive" },
    ]
  },
  {
    id: 88,
    name: "Duelist",
    race: "Человек",
    skills: [
      { name: "Health", minLevel: 76 },
      { name: "Wisdom", minLevel: 76 },
      { name: "Riposte Stance", minLevel: 77 },
      { name: "Skill Mastery", minLevel: 77 },
      { name: "Eye of Hunter", minLevel: 77 },
      { name: "Eye of Slayer", minLevel: 78 },
      { name: "Master of Combat", minLevel: 78 },
      { name: "Braveheart", minLevel: 78 },
      { name: "Sonic Rage", minLevel: 78 },
      { name: "Sonic Mastery", minLevel: 79, maxLevel: 8 },
      { name: "Sonic Barrier", minLevel: 79 },
      { name: "Sonic Focus", minLevel: 79, maxLevel: 8 },
      { name: "Weapon Blockade", minLevel: 80 },
      { name: "Symbol of Energy", minLevel: 80 },
      { name: "Maximum Focus Sonic", minLevel: 83 },
      { name: "Rush Impact", minLevel: 83 },
    ]
  },
  {
    id: 89,
    name: "ПОЛКОВОДЕЦ (Dreadnought)",
    race: "Человек",
    skills: [
      { name: "Health", minLevel: 76 },
      { name: "Wisdom", minLevel: 76 },
      { name: "Cursed Pierce", minLevel: 76 },
      { name: "Skill Mastery", minLevel: 77 },
      { name: "Eye of Hunter", minLevel: 77 },
      { name: "Shock Blast", minLevel: 77 },
      { name: "Earthquake", minLevel: 78 },
      { name: "Thunder Spear", minLevel: 78, maxLevel: 6 },
      { name: "Master of Combat", minLevel: 78 },
      { name: "Parry Stance", minLevel: 78 },
      { name: "Braveheart", minLevel: 78 },
      { name: "Symbol of Honor", minLevel: 80 },
      { name: "Dread Pool", minLevel: 83 },
      { name: "Rush Impact", minLevel: 83 },
    ]
  },
  {
    id: 90,
    name: "РЫЦАРЬ ФЕНИКСА (Phoenix Knight)",
    race: "Человек",
    skills: [
      { name: "Vengeance", minLevel: 77 },
      { name: "Touch of Life", minLevel: 78 },
      { name: "Shield of Faith", minLevel: 79 },
      { name: "Flame Icon", minLevel: 83 },
      { name: "Summon Imperial Phoenix", minLevel: 83 },
      { name: "Fortitude", minLevel: 76 },
      { name: "Shield Slam", minLevel: 77 },
      { name: "Anti Magic Armor", minLevel: 81 },
    ]
  },
  {
    id: 91,
    name: "РЫЦАРЬ АДА (Hell Knight)",
    race: "Человек",
    skills: [
      { name: "Vengeance", minLevel: 77 },
      { name: "Touch of Death", minLevel: 78 },
      { name: "Shield of Revenge", minLevel: 79 },
      { name: "Insane Crusher", minLevel: 83 },
      { name: "Hell Scream", minLevel: 83 },
      { name: "Fortitude", minLevel: 76 },
      { name: "Shield Slam", minLevel: 77 },
      { name: "Anti Magic Armor", minLevel: 81 },
    ]
  },
  {
    id: 92,
    name: "СНАЙПЕР (Sagittarius)",
    race: "Человек",
    skills: [
      { name: "Lethal Shot", minLevel: 76 },
      { name: "Hamstring Shot", minLevel: 77 },
      { name: "Seven Arrow", minLevel: 81 },
      { name: "Flame Hawk", minLevel: 83 },
      { name: "Step Back", minLevel: 76, disabledOn: ["x05"] },
    ]
  },
  {
    id: 93,
    name: "АВАНТЮРИСТ (Adventurer)",
    race: "Человек",
    skills: [
      { name: "Lethal Blow", minLevel: 76 },
      { name: "Bluff", minLevel: 77 },
      { name: "Mirage", minLevel: 79 },
      { name: "Critical Wound", minLevel: 79 },
      { name: "Exciting Adventure", minLevel: 83 },
      { name: "Killer's Instinct", minLevel: 83, enabledOn: ["x50", "x1000"] },
      { name: "Mark of the Reaper", minLevel: 83, enabledOn: ["x50", "x1000"] },
    ]
  },
  {
    id: 94,
    name: "АРХИМАГ (Archmage)",
    race: "Человек",
    skills: [
      { name: "Sigil Mastery", minLevel: 76 },
      { name: "Fire Vortex", minLevel: 77 },
      { name: "Arcane Power", minLevel: 78 },
      { name: "Fire Vortex Buster", minLevel: 79 },
      { name: "Volcano", minLevel: 80 },
      { name: "Magician's Will", minLevel: 81 },
      { name: "Enlightenment", minLevel: 81 },
      { name: "Witchcraft", minLevel: 84, disabledOn: ["x1", "x2", "x05"] },
    ]
  },
  {
    id: 95,
    name: "ПОЖИРАТЕЛЬ ДУШ (Soultaker)",
    race: "Человек",
    skills: [
      { name: "Dark Vortex", minLevel: 76 },
      { name: "Curse of Doom", minLevel: 77 },
      { name: "Day of Doom", minLevel: 80 },
      { name: "Vampiric Mist", minLevel: 83 },
      { name: "Servitor Share", minLevel: 83 },
    ]
  },
  {
    id: 96,
    name: "ЧЕРНОКНИЖНИК (Arcana Lord)",
    race: "Человек",
    skills: [
      { name: "Warrior Bane", minLevel: 76 },
      { name: "Summon Feline King", minLevel: 79 },
      { name: "Spirit of the Cat", minLevel: 83 },
    ]
  },
  {
    id: 97,
    name: "Cardinal",
    race: "Человек",
    skills: [
      { name: "Balance Life", minLevel: 76 },
      { name: "Health", minLevel: 76 },
      { name: "Wisdom", minLevel: 76 },
      { name: "Divine Protection", minLevel: 77 },
      { name: "Cleanse", minLevel: 78 },
      { name: "Arcane Wisdom", minLevel: 78 },
      { name: "Salvation", minLevel: 79 },
      { name: "Miracle", minLevel: 80 },
      { name: "Enlightenment", minLevel: 81 },
      { name: "Sublime Self-Sacrifice", minLevel: 83 },
      { name: "Chain Heal", minLevel: 83 },
    ]
  },
  {
    id: 98,
    name: "ИЕРОФАНТ (Hierophant)",
    race: "Человек",
    skills: [
      { name: "Антимагия (Anti Magic)", minLevel: 40, maxLevel: 45, type: "passive", desc: "Увеличивает Маг. Защ. и сопротивление магическому урону." },
      { name: "Владение Магической Броней (Magic Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Тяжелой Броней (Heavy Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Легкой Броней (Light Armor Mastery)", minLevel: 40, type: "passive" },
      { name: "Владение Оружием (Weapon Mastery)", minLevel: 40, type: "passive" },
      { name: "Быстрое Восполнение Маны (Fast Mana Recovery)", minLevel: 40, type: "passive" },
      { name: "Быстрое Чтение Заклинаний (Fast Spell Casting)", minLevel: 40, type: "passive" },
      { name: "Увеличение HP (Boost HP)", minLevel: 40, type: "passive" },
      { name: "Магическое Повреждение (Magic Damage)", minLevel: 40, type: "passive" },
      { name: "Обращение в Камень (Stone Form)", minLevel: 76, desc: "Превращает в камень, защищая от повреждений на 8 сек." },
      { name: "Лечение (Heal)", minLevel: 40, desc: "Восстанавливает HP. Мощность 50." },
      { name: "Боевое Лечение (Battle Heal)", minLevel: 40, desc: "Быстро восстанавливает HP. Мощность 83." },
      { name: "Групповое Лечение (Group Heal)", minLevel: 44, desc: "Восстанавливает HP всех членов группы. Мощность 66." },
      { name: "Воскрешение (Resurrection)", minLevel: 40, desc: "Воскрешает павшего союзника." },
      { name: "Энергичность (Invigor)", minLevel: 40, desc: "Сопротивление Кровотечению +30%." },
      { name: "Сопротивление Яду (Resist Poison)", minLevel: 40, desc: "Сопротивление Яду +30%." },
      { name: "Ментальный Щит (Mental Shield)", minLevel: 40, desc: "Сопротивление Удержанию +20%, Сну +25%, Ментальным Атакам +25%." },
      { name: "Магический Барьер (Magic Barrier)", minLevel: 40, desc: "Маг. Защ. +23%." },
      { name: "Щит (Shield)", minLevel: 40, desc: "Физ. Защ. +8%." },
      { name: "Святое Оружие (Holy Weapon)", minLevel: 40, desc: "Атака Святостью +20." },
      { name: "Регенерация (Regeneration)", minLevel: 40, desc: "Скорость восстановления HP +10%." },
      { name: "Благословение Тела (Bless the Body)", minLevel: 40, desc: "Макс. HP +10%." },
      { name: "Благословение Духа (Bless the Soul)", minLevel: 40, desc: "Макс. MP +10%." },
      { name: "Дух Берсерка (Berserker Spirit)", minLevel: 52, desc: "Физ. Защ. -5%, Маг. Защ. -10%, Физ. Атк. +5%, Маг. Атк. +10%, Скор. Атк. +5%, Скор. Маг. +5%, Скорость +5." },
      { name: "Могущество (Might)", minLevel: 40, desc: "Физ. Атк. +8%." },
      { name: "Поцелуй Евы (Kiss of Eva)", minLevel: 40, desc: "Восстановление MP +10%." },
      { name: "Фокусировка (Focus)", minLevel: 40, desc: "Шанс Физ. Крит. Атк. +20%." },
      { name: "Концентрация (Concentration)", minLevel: 40, desc: "Шанс прерывания чтения заклинания -18%." },
      { name: "Проницательность (Acumen)", minLevel: 40, desc: "Скор. Маг. +15%." },
      { name: "Ускорение (Haste)", minLevel: 44, desc: "Скор. Атк. +15%." },
      { name: "Легкая Походка (Wind Walk)", minLevel: 40, desc: "Скорость +20." },
      { name: "Наведение (Guidance)", minLevel: 40, desc: "Точность +2." },
      { name: "Шепот Смерти (Death Whisper)", minLevel: 40, desc: "Сила Физ. Крит. Атк. +25%." },
      { name: "Пророчество Огня (Prophecy of Fire)", minLevel: 78, desc: "Временно вселяет дух древнего воина. Требуется 5 Spirit Ore." },
      { name: "Ответный Крит. Удар (Counter Critical)", minLevel: 78, desc: "Защита от Крит. Атк +10%, шанс увеличить силу крита на 15%." },
      { name: "Защита Равновесия (Elemental Protection)", minLevel: 76, desc: "Сопротивление стихиям +20. При получении урона шанс повысить Маг. Защ." },
      { name: "Health", minLevel: 76, type: "passive", desc: "Повышает сопротивление к отравлению и кровотечению." },
      { name: "Wisdom", minLevel: 76, type: "passive", desc: "Повышает сопротивление ко сну, удерживающим заклинаниям и к ментальным атакам." },
      { name: "Skill Mastery", minLevel: 77, type: "passive", desc: "Оттачивает совершенство в скиллах. Низкая вероятность моментального отката умения или двойного времени действия. Зависит от STR." },
      { name: "Тайная Мудрость (Arcane Wisdom)", minLevel: 78, type: "toggle", desc: "Значительно повышает эффективность магии и понижает расход маны умениями. Также понижает Скорость Произношения Заклинаний. Непрерывно потребляет Ваше здоровье." },
      { name: "Divine Lore", minLevel: 78, type: "passive", desc: "Снижает потребление маны магическими умениями." },
      { name: "Mystic Immunity", minLevel: 79, desc: "Делает цель временно невосприимчивой к усиливающим и ослабляющим заклинаниям или атакам." },
      { name: "Spell Turning", minLevel: 79, desc: "Сбивает произношение заклинания у цели." },
      { name: "Усыпление (Sleep)", minLevel: 40, desc: "Усыпляет противника." },
      { name: "Проклятие Слабости (Curse Weakness)", minLevel: 40, desc: "Физ. Атк. цели -17%." },
      { name: "Корень Дриады (Dryad Root)", minLevel: 40, desc: "Удерживает цель на месте." },
      { name: "Слово Страха (Word of Fear)", minLevel: 40, desc: "Обращает врага в бегство." },
      { name: "Блокировка Баффа", minLevel: 40, type: "toggle", desc: "Блокирует входящие баффы от недругов." },
    ]
  },
  {
    id: 99,
    name: "РЫЦАРЬ ЕВЫ (Eva's Templar)",
    race: "Эльф",
    skills: [
      { name: "Touch of Life", minLevel: 78 },
      { name: "Iron Shield", minLevel: 79 },
      { name: "Shield of Faith", minLevel: 79 },
      { name: "Eva's Will", minLevel: 83 },
      { name: "Touch of Eva", minLevel: 83 },
    ]
  },
  {
    id: 100,
    name: "ВИРТУОЗ (Sword Muse)",
    race: "Эльф",
    skills: [
      { name: "Song of Renewal", minLevel: 77 },
      { name: "Song of Champion", minLevel: 78 },
      { name: "Song of Silence", minLevel: 79 },
      { name: "Song of Purification", minLevel: 83 },
    ]
  },
  {
    id: 101,
    name: "СТРАННИК ВЕТРА (Wind Rider)",
    race: "Эльф",
    skills: [
      { name: "Lethal Blow", minLevel: 76 },
      { name: "Dodge", minLevel: 79 },
      { name: "Wind Riding", minLevel: 83 },
      { name: "Dual Blow", minLevel: 83 },
      { name: "Killer's Instinct", minLevel: 83, enabledOn: ["x50", "x1000"] },
      { name: "Mark of the Reaper", minLevel: 83, enabledOn: ["x50", "x1000"] },
    ]
  },
  {
    id: 102,
    name: "СТРАЖ БЕЛОГО СВЕТА (Moonlight Sentinel)",
    race: "Эльф",
    skills: [
      { name: "Lethal Shot", minLevel: 76 },
      { name: "Hamstring Shot", minLevel: 77 },
      { name: "Seven Arrow", minLevel: 81 },
      { name: "Death Shot", minLevel: 83 },
    ]
  },
  {
    id: 103,
    name: "МАГИСТР МАГИИ (Mystic Muse)",
    race: "Эльф",
    skills: [
      { name: "Ice Vortex", minLevel: 77 },
      { name: "Ice Vortex Crusher", minLevel: 79 },
      { name: "Star Fall", minLevel: 81 },
      { name: "Arcane Shield", minLevel: 83 },
      { name: "Sigil Mastery", minLevel: 76 },
      { name: "Enlightenment", minLevel: 81 },
      { name: "Witchcraft", minLevel: 84, disabledOn: ["x1", "x2", "x05"] },
    ]
  },
  {
    id: 104,
    name: "МАСТЕР СТИХИЙ (Elemental Master)",
    race: "Эльф",
    skills: [
      { name: "Summon Magnus the Unicorn", minLevel: 79 },
      { name: "Servitor Barrier", minLevel: 81 },
      { name: "Spirit of the Unicorn", minLevel: 83 },
      { name: "Warrior Bane", minLevel: 76 },
      { name: "Servitor Share", minLevel: 76 },
    ]
  },
  {
    id: 105,
    name: "Eva Saint",
    race: "Эльф",
    skills: [
      { name: "Prophecy of Water", minLevel: 78 },
      { name: "Mass Recharge", minLevel: 80 },
      { name: "Blessing of Eva", minLevel: 83 },
      { name: "Chain Heal", minLevel: 83 },
      { name: "Mass Vitalize", minLevel: 76 },
      { name: "Arcane Protection", minLevel: 76 },
      { name: "Divine Protection", minLevel: 77 },
      { name: "Magic Two-handed Weapon Mastery", minLevel: 80, maxLevel: 2, disabledOn: ["x1", "x2", "x05"] },
    ]
  },
  {
    id: 106,
    name: "ХРАМОВНИК ШИЛЕН (Shillien Templar)",
    race: "Тёмный Эльф",
    skills: [
      { name: "Vengeance", minLevel: 77 },
      { name: "Touch of Death", minLevel: 78 },
      { name: "Shield of Faith", minLevel: 79 },
      { name: "Spirit of Shilen", minLevel: 83 },
      { name: "Fortitude", minLevel: 76 },
      { name: "Shield Bash", minLevel: 77 },
      { name: "Anti Magic Armor", minLevel: 81 },
    ]
  },
  {
    id: 107,
    name: "ПРИЗРАЧНЫЙ ТАНЦОР (Spectral Dancer)",
    race: "Тёмный Эльф",
    skills: [
      { name: "Dance of Medusa", minLevel: 77 },
      { name: "Dance of Shadows", minLevel: 77 },
      { name: "Dance of Berserker", minLevel: 83 },
      { name: "Deadly Strike", minLevel: 76, maxLevel: 25 },
      { name: "Dance of Blade Storm", minLevel: 76 },
    ]
  },
  {
    id: 108,
    name: "ПРИЗРАЧНЫЙ ОХОТНИК (Ghost Hunter)",
    race: "Тёмный Эльф",
    skills: [
      { name: "Lethal Blow", minLevel: 76 },
      { name: "Counterattack", minLevel: 79 },
      { name: "Ghost Walking", minLevel: 83 },
      { name: "Dual Blow", minLevel: 83 },
      { name: "Assassination", minLevel: 78 },
      { name: "Ghost Run", minLevel: 83, enabledOn: ["x50", "x1000"] },
    ]
  },
  {
    id: 109,
    name: "СТРАЖ ТЕНЕЙ (Ghost Sentinel)",
    race: "Тёмный Эльф",
    skills: [
      { name: "Lethal Shot", minLevel: 76 },
      { name: "Hamstring Shot", minLevel: 77 },
      { name: "Seven Arrow", minLevel: 81 },
      { name: "Death Shot", minLevel: 83 },
      { name: "Step Back", minLevel: 76, disabledOn: ["x05"] },
    ]
  },
  {
    id: 110,
    name: "ПОВЕЛИТЕЛЬ БУРИ (Storm Screamer)",
    race: "Тёмный Эльф",
    skills: [
      { name: "Wind Vortex", minLevel: 77 },
      { name: "Wind Vortex Slug", minLevel: 79 },
      { name: "Hurricane Armor", minLevel: 83 },
    ]
  },
  {
    id: 111,
    name: "ВЛАДЫКА ТЕНЕЙ (Spectral Master)",
    race: "Тёмный Эльф",
    skills: [
      { name: "Summon Spectral Lord", minLevel: 79 },
      { name: "Spirit of the Demon", minLevel: 83 },
    ]
  },
  {
    id: 112,
    name: "МУДРЕЦ ШИЛЕН (Shillien Saint)",
    race: "Тёмный Эльф",
    skills: [
      { name: "Пророчество Ветра (Prophecy of Wind)", minLevel: 78 },
      { name: "Lord of Vampire", minLevel: 83, enabledOn: ["x1000", "x50", "x100"] },
    ]
  },
  {
    id: 113,
    name: "ДЕСТРОЕР (Destroyer)",
    race: "Орк",
    skills: [
      { name: "Здоровье (Health)", minLevel: 76, type: "passive" },
      { name: "Мудрость (Wisdom)", minLevel: 76, type: "passive" },
      { name: "Стойкость (Fortitude)", minLevel: 76, type: "passive" },
      { name: "Сокрушение Брони (Armor Crush)", minLevel: 77, desc: "Оглушает и снижает защиту врага." },
      { name: "Землетрясение (Earthquake)", minLevel: 78, desc: "Массовая атака, сбивающая цель." },
      { name: "Храброе Сердце (Braveheart)", minLevel: 78, desc: "Восстанавливает CP." },
      { name: "Предел Сил (Over the Body)", minLevel: 79, desc: "Использует CP для значительного усиления атаки и защиты." },
      { name: "Символ Сопротивления (Symbol of Resistance)", minLevel: 80 },
      { name: "Воля Воина (Fighter's Will)", minLevel: 81, type: "passive" },
      { name: "Защита Рун (Protection of Rune)", minLevel: 82, type: "passive" },
      { name: "Бешеный Натиск (Rush Impact)", minLevel: 83 },
      { name: "Удар Разрушения (Demolition Impact)", minLevel: 83 },
    ]
  },
  {
    id: 114,
    name: "ТИРАНТ (Tyrant)",
    race: "Орк",
    skills: [
      { name: "Здоровье (Health)", minLevel: 76, type: "passive" },
      { name: "Мудрость (Wisdom)", minLevel: 76, type: "passive" },
      { name: "Мастерство Силы (Force Mastery)", minLevel: 79, type: "passive" },
      { name: "Силовой Барьер (Force Barrier)", minLevel: 79, desc: "Неуязвимость на короткое время." },
      { name: "Максимальная Фокусировка Силы (Maximum Focus Force)", minLevel: 83 },
      { name: "Сила Разрушения (Force of Destruction)", minLevel: 83 },
      { name: "Бешеный Натиск (Rush Impact)", minLevel: 83 },
    ]
  },
  {
    id: 115,
    name: "ОВЕРЛОРД (Overlord)",
    race: "Орк",
    skills: [
      { name: "Печать Болезни (Seal of Disease)", minLevel: 76 },
      { name: "Печать Отчаяния (Seal of Despair)", minLevel: 78 },
      { name: "Победа Паагрио (Victory of Pa'agrio)", minLevel: 79, desc: "Аналог CoV для клана/альянса." },
      { name: "Пламя Неуязвимости (Flames of Invincibility)", minLevel: 80, desc: "Массовая неуязвимость для клана/альянса." },
      { name: "Печать Предела (Seal of Limit)", minLevel: 83, desc: "Лимит восстановления HP/CP/MP врагов." },
      { name: "Цепное Исцеление (Chain Heal)", minLevel: 83 },
    ]
  },
  {
    id: 116,
    name: "ВАРКРАЙЕР (Warcryer)",
    race: "Орк",
    skills: [
      { name: "Напев Стихий (Chant of Elements)", minLevel: 76 },
      { name: "Напев Духа (Chant of Spirit)", minLevel: 77 },
      { name: "Змеиный Глаз (Snake Eye)", minLevel: 77, maxLevel: 3 },
      { name: "Врата Напева (Gate Chant)", minLevel: 78, desc: "Призыв членов группы." },
      { name: "Напев Магнуса (Magnus' Chant)", minLevel: 79, desc: "Маг. Атк. +75%, MP +25% и др." },
      { name: "Напев Охраны (Chant of Protection)", minLevel: 79 },
      { name: "Цепное Исцеление (Chain Heal)", minLevel: 83 },
      { name: "Великая Ярость (Great Fury)", minLevel: 83, desc: "Шансовый бафф на Скор. Атк. +100%." },
    ]
  },
  {
    id: 117,
    name: "ОХОТНИК ЗА НАГРАДОЙ (Bounty Hunter)",
    race: "Гном",
    skills: [
      { name: "Сокрушение Оценкой (Spoil Crush)", minLevel: 76, desc: "Атака с эффектом присвоения." },
      { name: "Сокрушение Брони (Armor Crush)", minLevel: 77, desc: "Оглушение и снижение защиты." },
      { name: "Бомба Оценки (Spoil Bomb)", minLevel: 79, desc: "Массовое присвоение с уроном." },
      { name: "Удачный Удар (Lucky Blow)", minLevel: 83, desc: "Смертельная атака с шансом присвоения." },
      { name: "Здоровье (Health)", minLevel: 76, type: "passive" },
      { name: "Мудрость (Wisdom)", minLevel: 76, type: "passive" },
    ]
  },
  {
    id: 118,
    name: "КУЗНЕЦ (Warsmith)",
    race: "Гном",
    skills: [
      { name: "Здоровье (Health)", minLevel: 76, type: "passive" },
      { name: "Мудрость (Wisdom)", minLevel: 76, type: "passive" },
      { name: "Мастерство Умений (Skill Mastery)", minLevel: 77, type: "passive" },
      { name: "Броня Голема (Golem Armor)", minLevel: 79, desc: "Трансформация, дающая огромную мощь." },
      { name: "Бешеный Натиск (Rush Impact)", minLevel: 83 },
      { name: "Восстановление Голема (Golem Restoration)", minLevel: 83 },
      { name: "Усиление Голема (Golem Empowerment)", minLevel: 83 },
    ]
  },
  {
    id: 123,
    name: "Kamael Soldier",
    race: "Камаэль",
    skills: [
      { name: "Мастерство Душ (Soul Mastery)", minLevel: 1, type: "passive", desc: "Позволяет поглощать души для использования умений." },
      { name: "Магический Иммунитет (Magic Immunity)", minLevel: 1, type: "passive", desc: "Увеличивает Маг. Защ." },
      { name: "Падшая Атака (Fallen Attack)", minLevel: 1, maxLevel: 9 },
      { name: "Падшая Стрела (Fallen Arrow)", minLevel: 1, maxLevel: 6 },
      { name: "Увеличение Силы (Increase Power)", minLevel: 10, desc: "Физ. Атк. +8%." },
      { name: "Владение Клеймором (Ancient Sword Mastery)", minLevel: 5, type: "passive" },
      { name: "Владение Броней (Armor Mastery)", minLevel: 5, type: "passive" },
      { name: "Удачливый (Lucky)", minLevel: 1, type: "passive" },
    ]
  },
  {
    id: 124,
    name: "Female Soldier",
    race: "Камаэль",
    skills: [
      { name: "Мастерство Душ (Soul Mastery)", minLevel: 1, type: "passive" },
      { name: "Магический Иммунитет (Magic Immunity)", minLevel: 1, type: "passive" },
      { name: "Падшая Атака (Fallen Attack)", minLevel: 1, maxLevel: 9 },
      { name: "Быстрая Атака (Rapid Attack)", minLevel: 10, desc: "Скор. Атк. +15%." },
      { name: "Обнаружение Ловушек (Detect Trap)", minLevel: 15 },
      { name: "Обезвреживание Ловушки (Defuse Trap)", minLevel: 15 },
      { name: "Владение Рапирой (Rapier Mastery)", minLevel: 5, type: "passive" },
      { name: "Владение Броней (Armor Mastery)", minLevel: 5, type: "passive" },
    ]
  },
  {
    id: 125,
    name: "ГРЕШНИК (Trooper)",
    race: "Камаэль",
    skills: [
      { name: "Владение Клеймором (Ancient Sword Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Рапирой (Rapier Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Легкой Броней (Light Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Метка Смерти (Death Mark)", minLevel: 24, maxLevel: 2, desc: "Наносит метку, снижающую защиту цели и позволяющую поглощать опыт." },
      { name: "Разоружение (Disarm)", minLevel: 36, desc: "Лишает противника оружия." },
      { name: "Двойной Укол (Double Thrust)", minLevel: 20 },
      { name: "Рывок (Rush)", minLevel: 32 },
      { name: "Щит Меча (Sword Shield)", minLevel: 36, desc: "Сильно увеличивает Физ. Защ. за счет Скор. Атк." },
      { name: "Безмолвие Бездны (Abyssal Blaze)", minLevel: 20, maxLevel: 10 },
      { name: "Фокусировка Души (Soul Focus)", minLevel: 20 },
    ]
  },
  {
    id: 126,
    name: "Warder",
    race: "Камаэль",
    skills: [
      { name: "Владение Арбалетом (Crossbow Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Рапирой (Rapier Mastery)", minLevel: 20, type: "passive" },
      { name: "Владение Легкой Броней (Light Armor Mastery)", minLevel: 20, type: "passive" },
      { name: "Искривление (Warp)", minLevel: 32, desc: "Мгновенное перемещение вперед." },
      { name: "Пробивающий Выстрел (Penetrating Shot)", minLevel: 20 },
      { name: "Метка Смерти (Death Mark)", minLevel: 24 },
      { name: "Увеличение Дальности (Increase Range)", minLevel: 24, type: "passive" },
      { name: "Абсолютный Побег (Ultimate Escape)", minLevel: 36 },
      { name: "Шок Души (Soul Shock)", minLevel: 36, desc: "Наносит урон и оглушает цель." },
      { name: "Безмолвие Бездны (Abyssal Blaze)", minLevel: 20 },
    ]
  },
  {
    id: 127,
    name: "БЕРСЕРК (Berserker)",
    race: "Камаэль",
    skills: [
      { name: "Владение Клеймором (Ancient Sword Mastery)", minLevel: 40, type: "passive" },
      { name: "Разоружение (Disarm)", minLevel: 40, desc: "Лишает противника оружия." },
      { name: "Бешеный Натиск (Rush Impact)", minLevel: 52, desc: "Рывок на врага с шансом оглушения." },
      { name: "Сокрушительная Боль (Crushing Pain)", minLevel: 60, desc: "Мощный удар, игнорирующий щит." },
      { name: "Истинный Берсерк (True Berserker)", minLevel: 40, desc: "Физ. Атк. +, Скор. Атк. +, Точность +, Физ. Защ. -, Уклонение -." },
      { name: "Взрывной Характер (Violent Temper)", minLevel: 49, desc: "Понижает Скор. Маг. и Физ. Защ. цели." },
      { name: "Удар Клинка (Blade Rush)", minLevel: 55 },
      { name: "Рассекающий Клинок (Slashing Blade)", minLevel: 46 },
      { name: "Жажда (Thirst)", minLevel: 66, desc: "Увеличивает Скор. Атк. и Точность." },
      { name: "Блокировка Баффа", minLevel: 40, type: "toggle" },
      { name: "Фокусировка Сознания (Focus Mind)", minLevel: 40, type: "passive" },
      { name: "Антимагия (Anti Magic)", minLevel: 40, type: "passive" },
    ]
  },
  {
    id: 128,
    name: "ПАЛАЧ (Soul Breaker)",
    race: "Камаэль",
    skills: [
      { name: "Владение Рапирой (Rapier Mastery)", minLevel: 40, type: "passive" },
      { name: "Дух Сильной Боль (Soul of Pain)", minLevel: 40, desc: "Атака душой с шансом оглушения." },
      { name: "Кража Божественности (Steal Divinity)", minLevel: 55, desc: "Крадет положительные эффекты (баффы) у цели." },
      { name: "Шах и Мат (Checkmate)", minLevel: 52, desc: "Финальная атака по цели с Меткой Смерти." },
      { name: "Темное Пламя (Dark Flame)", minLevel: 46, desc: "Массовая атака тьмой с шансом страха." },
      { name: "Связывание Тени (Shadow Bind)", minLevel: 52, desc: "Удерживает тень противника, парализуя его." },
      { name: "Круг Уничтожения (Annihilation Circle)", minLevel: 58 },
      { name: "Паутина Душ (Soul Web)", minLevel: 62, desc: "Снижает скорость всех врагов вокруг." },
      { name: "Проклятие Божественности (Curse of Divinity)", minLevel: 66, desc: "Наносит урон в зависимости от количества баффов у цели." },
      { name: "Прыжок (Leopard)", minLevel: 40, desc: "Прыжок вперед." },
    ]
  },
  {
    id: 129,
    name: "ПАЛАЧ (Soul Breaker)",
    race: "Камаэль",
    skills: [
      { name: "Владение Рапирой (Rapier Mastery)", minLevel: 40, type: "passive" },
      { name: "Дух Сильной Боль (Soul of Pain)", minLevel: 40 },
      { name: "Кража Божественности (Steal Divinity)", minLevel: 55 },
      { name: "Шах и Мат (Checkmate)", minLevel: 52 },
      { name: "Темное Пламя (Dark Flame)", minLevel: 46 },
      { name: "Связывание Голоса (Voice Bind)", minLevel: 58, desc: "Безмолвие (Slience) для противника." },
      { name: "Мерцание (Blink)", minLevel: 60, desc: "Телепорт назад с оглушением врагов вокруг." },
      { name: "Гордость Камаэль (Pride of Kamael)", minLevel: 40, desc: "Увеличивает характеристики оружия Камаэль." },
    ]
  },
  {
    id: 131,
    name: "КАРАТЕЛЬ (Doombringer)",
    race: "Камаэль",
    skills: [
      { name: "Мастерство Клеймора (Ancient Sword Mastery)", minLevel: 76, type: "passive" },
      { name: "Здоровье (Health)", minLevel: 76, type: "passive" },
      { name: "Мудрость (Wisdom)", minLevel: 76, type: "passive" },
      { name: "Финальная Форма (Final Form)", minLevel: 79, desc: "Временная трансформация в мощную форму с крыльями." },
      { name: "Удар Плечом (Shoulder Charge)", minLevel: 77, desc: "Быстрый рывок с оглушением." },
      { name: "Бешеный Удар (Blade Rush)", minLevel: 78 },
      { name: "Око за Око (Eye for Eye)", minLevel: 81, desc: "Отражает физ. урон ближнего боя обратно врагу." },
      { name: "Просветление (Enlightenment)", minLevel: 81, desc: "Кратковременный бафф на Физ. Атк. и Скор. Атк." },
      { name: "Очищение Души (Soul Cleanse)", minLevel: 78, desc: "Снимает дебаффы с Камаэль." },
    ]
  },
  {
    id: 132,
    name: "ИСТРЕБИТЕЛЬ ДУШ (Soul Hound)",
    race: "Камаэль",
    skills: [
      { name: "Леопольд (Leopold)", minLevel: 78, desc: "Мощная магическая атака пушкой." },
      { name: "Грозовой Шок (Lightning Shock)", minLevel: 78, desc: "Массовый паралич вокруг заклинаталя." },
      { name: "Грозовой Барьер (Lightning Barrier)", minLevel: 80, desc: "Шанс парализовать атакующего врага." },
      { name: "Финальная Форма (Final Form)", minLevel: 79 },
      { name: "Защита Рун (Protection of Rune)", minLevel: 82, type: "passive" },
    ]
  },
  {
    id: 136,
    name: "АРБИТР (Judicator)",
    race: "Камаэль",
    skills: [
      { name: "Цепь Восстановления (Restoration Chain)", minLevel: 76, desc: "Восстанавливает 30% HP цели." },
      { name: "Здоровье (Health)", minLevel: 76, type: "passive" },
      { name: "Мудрость (Wisdom)", minLevel: 76, type: "passive" },
      { name: "Ярость Душ (Soul Rage)", minLevel: 78, desc: "Поглощает души по мере атаки." },
      { name: "Финальная Форма (Final Form)", minLevel: 79 },
      { name: "Грозовой Барьер (Lightning Barrier)", minLevel: 80 },
    ]
  },
  {
    id: 130,
    name: "АРБАЛЕТЧИК (Arbalester)",
    race: "Камаэль",
    skills: [
      { name: "Владение Арбалетом (Crossbow Mastery)", minLevel: 40, type: "passive" },
      { name: "Смертельный Выстрел (Lethal Shot)", minLevel: 40 },
      { name: "Ловушка (Dark Shot)", minLevel: 40 },
      { name: "Обнаружение Слабостей (Real Target)", minLevel: 40, desc: "Снижает сопротивление цели к атакам из лука/арбалета." },
      { name: "Искривление (Warp)", minLevel: 40 },
      { name: "Душевный Прокол (Soul Piercing)", minLevel: 46 },
      { name: "Критическое Чутье (Critical Sense)", minLevel: 40, type: "passive" },
      { name: "Ловушка-Замедление (Slow Trap)", minLevel: 43 },
      { name: "Очищение (Purification)", minLevel: 43 },
      { name: "Ускорение (Haste)", minLevel: 40, type: "passive" },
    ]
  },
  {
    id: 135,
    name: "ИНСПЕКТОР (Inspector)",
    race: "Камаэль",
    skills: [
      { name: "Жажда Разрушения (Appetite for Destruction)", minLevel: 40, desc: "Бафф группы: Физ. Атк. +50%, Шанс Крита +50%, Сила Крита +50%." },
      { name: "Вампирический Импульс (Vampiric Impulse)", minLevel: 40, desc: "Дарует группе эффект вампиризма 80%." },
      { name: "Магический Иммунитет (Magic Impulse)", minLevel: 40, desc: "Бафф группы: Маг. Атк. +95%, Скор. Маг. +15%, Шанс Маг. Крита +300%." },
      { name: "Инстинкт Защиты (Protection Instinct)", minLevel: 40, desc: "Бафф группы: Физ. Защ. +1000, Маг. Защ. +1000." },
      { name: "Гармония Душ (Soul Harmony)", minLevel: 70, desc: "Восстанавливает MP группы." },
    ]
  },
  {
    id: 133,
    name: "ИСТРЕБИТЕЛЬ ДУШ (Soul Hound)",
    race: "Камаэль",
    skills: [
      { name: "Укрытие (Shelter)", minLevel: 78, desc: "Снижает получаемый урон на короткое время." },
      { name: "Грозовой Шок (Lightning Shock)", minLevel: 78 },
      { name: "Грозовой Барьер (Lightning Barrier)", minLevel: 80 },
      { name: "Финальная Форма (Final Form)", minLevel: 79 },
      { name: "Магическое Просветление (Enlightenment)", minLevel: 81 },
      { name: "Защита Рун (Protection of Rune)", minLevel: 82, type: "passive" },
    ]
  },
  {
    id: 134,
    name: "ДИВЕРСАНТ (Trickster)",
    race: "Камаэль",
    skills: [
      { name: "Метка Предательства (Betrayal Mark)", minLevel: 78, desc: "Проклятие, заставляющее слугу атаковать хозяина." },
      { name: "Дикий Выстрел (Wild Shot)", minLevel: 83, desc: "Мощная атака по площади." },
      { name: "Смертельный Выстрел (Death Shot)", minLevel: 83, desc: "Выстрел огромной мощности." },
      { name: "Финальная Форма (Final Form)", minLevel: 79 },
      { name: "Чутье Стрелка (Archer's Will)", minLevel: 81, desc: "Повышает точность и дальность." },
      { name: "Защита Рун (Protection of Rune)", minLevel: 82, type: "passive" },
      { name: "Здоровье (Health)", minLevel: 76, type: "passive" },
      { name: "Мудрость (Wisdom)", minLevel: 76, type: "passive" },
    ]
  }
];

export const PLEDGE_SKILL_TREE: PledgeSkill[] = [
  { name: "Seal of Ruler", clanLevel: 4 },
  { name: "Clan Body", clanLevel: 5 },
  { name: "Clan Magic Protection", clanLevel: 5 },
  { name: "Clan Summon", clanLevel: 5, disabledOn: ["x05"] },
  { name: "Clan Might", clanLevel: 6 },
  { name: "Clan Noblesse", clanLevel: 6, enabledOn: ["x50", "x100", "x1000"] },
  { name: "Clan Miracle", clanLevel: 6, enabledOn: ["x2", "x05"] },
];

export const SUB_UNIT_SKILL_TREE: PledgeSkill[] = [
  { name: "Holy Squad", clanLevel: 7, desc: "Уровень 1" },
  { name: "Water Squad", clanLevel: 7, desc: "Уровень 1" },
  { name: "Dark/Earth/Fire Squad", clanLevel: 8, desc: "Уровень 1" },
];

export const TRANSFER_SKILL_TREE: ClassSkillTree[] = [
  {
    id: 97,
    name: "Cardinal",
    race: "Человек",
    skills: [
      { name: "Recharge", minLevel: 76 },
      { name: "Agility", minLevel: 76 },
      { name: "Resist Poison", minLevel: 76 },
      { name: "Decrease Weight", minLevel: 76 },
      { name: "Empower", minLevel: 76 },
      { name: "Vampiric Rage", minLevel: 76 },
      { name: "Resist Wind", minLevel: 76 },
      { name: "Wild Magic", minLevel: 76 },
      { name: "Bless Shield", minLevel: 76 },
      { name: "Resist Shock", minLevel: 76 },
      { name: "Stigma of Shilien", minLevel: 76 },
    ]
  },
  {
    id: 105,
    name: "Eva Saint",
    race: "Эльф",
    skills: [
      { name: "Focus", minLevel: 76 },
      { name: "Peace", minLevel: 76 },
      { name: "Purify", minLevel: 76 },
      { name: "Greater Battle Heal", minLevel: 76 },
      { name: "Restore Life", minLevel: 76 },
      { name: "Body of Avatar", minLevel: 76 },
      { name: "Celestial Shield", minLevel: 76 },
      { name: "Stigma of Shilien", minLevel: 76 },
    ]
  },
  {
    id: 112,
    name: "Shillien Saint",
    race: "Тёмный Эльф",
    skills: [
      { name: "Regeneration", minLevel: 76 },
      { name: "Greater Battle Heal", minLevel: 76 },
      { name: "Mass Resurrection", minLevel: 76 },
      { name: "Celestial Shield", minLevel: 76 },
      { name: "Stigma of Shilien", minLevel: 76 },
    ]
  }
];

export const CERTIFICATION_SKILLS: CertificationSkill[] = [
  { name: "Emergent Ability - Attack", minLevel: 65, maxLevel: 6, itemId: 10280 },
  { name: "Emergent Ability - Defense", minLevel: 65, maxLevel: 6, itemId: 10280 },
  { name: "Emergent Ability - Empower", minLevel: 65, maxLevel: 6, itemId: 10280 },
  { name: "Emergent Ability - Magic Defense", minLevel: 65, maxLevel: 6, itemId: 10280 },
  { name: "Master Ability - Attack", minLevel: 75, itemId: 35942 },
  { name: "Master Ability - Empower", minLevel: 75, itemId: 35942 },
  { name: "Master Ability - Casting", minLevel: 75, itemId: 35942 },
  { name: "Master Ability - Focus", minLevel: 75, itemId: 35942 },
  { name: "Warrior Ability: Resist Trait", minLevel: 75 },
  { name: "Warrior Ability: Haste", minLevel: 75 },
  { name: "Warrior Ability: Boost CP", minLevel: 75 },
  { name: "Knight Ability: Boost HP", minLevel: 75 },
  { name: "Knight Ability: Defense", minLevel: 75 },
  { name: "Knight Ability: Resist Critical", minLevel: 75 },
];

export const FISHING_SKILLS: Skill[] = [
  { name: "Fishing Expertise", minLevel: 10, maxLevel: 27, cost: "10-600,000 adena" },
  { name: "Expand Trade", minLevel: 40, maxLevel: 3 },
];

export const COLLECTION_SKILLS: Skill[] = [
  { name: "Star Stone", minLevel: 1, maxLevel: 3, desc: "Сбор звездных камней." },
];
