import type { ProfileCardProps } from '../types';
import SkillItem from './SkillItem';
import LikeButton from './LikeButton';
import Card from './ui/Card';
import { useLikes } from '../context/LikesContext';

function ProfileCard({ name, bio, avatarUrl, email, githubUrl, skills }: ProfileCardProps) {
  const { likes } = useLikes();

  return (
    <Card className={likes > 0 ? 'profile-card liked' : 'profile-card'}>
      <img src={avatarUrl} alt="My photo" className="avatar" />

      <div className="info">
        <h2>{name}</h2>
        <p>{bio}</p>

        <div className="links">
          <a href={`mailto:${email}`}>Email</a>
          <a href={githubUrl} target="_blank">GitHub</a>
        </div>

        {skills.length === 0 ? (
          <p>No skills added yet.</p>
        ) : (
          <ul className="skill-list">
            {skills.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </ul>
        )}

        <LikeButton />
      </div>
    </Card>
  );
}

export default ProfileCard;