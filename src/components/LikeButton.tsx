import { useLikes } from '../context/LikesContext'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <button className={likes > 0 ? 'Liked' : 'Like'} onClick={addLike}>
      ♡ Like ({likes})
    </button>
  )
}

export default LikeButton