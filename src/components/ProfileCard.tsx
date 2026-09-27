import { useState } from 'react';
import type { ProfileCardProps } from '../types';
import SkillItem from './SkillItem';

function ProfileCard({ name, bio, avatarUrl, email, githubUrl, skills }: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className={liked ? 'card liked' : 'card'}>
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

        <button
          className={liked ? 'Liked' : 'Like'}
          onClick={() => setLiked(!liked)}
        >
          {liked ? '♥ Liked' : '♡ Like'}
        </button>
      </div>
    </article>
  );
}

export default ProfileCard;