import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import type { Skill } from './types';
import './App.css';

const skills: Skill[] = [
  { id: 's1', name: 'HTML/CSS' },
  { id: 's2', name: 'JavaScript' },
  { id: 's3', name: 'React' },
  { id: 's4', name: 'TypeScript' },
];

function App() {
  return (
    <>
      <Header title="My Profile Card" />
      <main>
        <ProfileCard
          name="Ospanov Daniyar"
          bio="I am an IT student who is learning web development. I like develop my ideas and trying new things. Right now I concentrated in being best version of myself."
          avatarUrl="/Ego.jpeg"
          email="1-daniyar@list.ru"
          githubUrl="https://github.com/1-daniyar"
          skills={skills}
        />
      </main>
      <Footer text="Week 3 practice - IWaMAD" />
    </>
  );
}

export default App;