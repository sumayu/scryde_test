export interface Skill {
  name: string;
  minLevel: number;
  maxLevel?: number;
  cost?: number | string;
  itemId?: number | number[];
  itemCount?: number;
  desc?: string;
  isClicked?: boolean;
  disabledOn?: string[];
  enabledOn?: string[];
  level?: number; // Current level of the skill
  type?: 'active' | 'passive' | 'toggle';
}

export interface ClassSkillTree {
  id: number;
  name: string;
  race: string;
  skills: Skill[];
}

export interface PledgeSkill {
  name: string;
  clanLevel: number;
  desc?: string;
  disabledOn?: string[];
  enabledOn?: string[];
}

export interface CertificationSkill {
  name: string;
  minLevel: number;
  itemId?: number;
  desc?: string;
  maxLevel?: number;
}
