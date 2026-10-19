import ProfileCard from '../components/ProfileCard'
import { skills } from '../skills'

export default function HomePage() {
  return (
    <ProfileCard
      name="Ospanov Daniyar"
      bio="I am an IT student who is learning web development. I like develop my ideas and trying new things. Right now I concentrated in being best version of myself."
      avatarUrl={`${import.meta.env.BASE_URL}Ego.jpeg`}
      email="1-daniyar@list.ru"
      githubUrl="https://github.com/1-daniyar"
      skills={skills}
    />
  )
}