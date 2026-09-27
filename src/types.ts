export interface HeaderProps {
  title: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface SkillItemProps {
  skill: Skill;
}

export interface ProfileCardProps {
  name: string;
  bio: string;
  avatarUrl: string;
  email: string;
  githubUrl: string;
  skills: Skill[];
}

export interface FooterProps {
  text: string;
}