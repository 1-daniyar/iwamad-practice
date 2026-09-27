import type { SkillItemProps } from '../types';

function SkillItem({ skill }: SkillItemProps) {
  return <li className="skill-item">{skill.name}</li>;
}

export default SkillItem;