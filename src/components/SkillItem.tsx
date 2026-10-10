import type { SkillItemProps } from '../types'
import Tag from './ui/Tag'

function SkillItem({ skill }: SkillItemProps) {
  return <li className="skill-item"><Tag label={skill.name} /></li>
}

export default SkillItem