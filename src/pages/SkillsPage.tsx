import SkillItem from '../components/SkillItem'
import { skills } from '../skills'

export default function SkillsPage() {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  )
}