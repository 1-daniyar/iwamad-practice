import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button
      className={likes > 0 ? 'Liked' : 'Like'}
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      ♡ Like ({likes})
    </Button>
  )
}

export default LikeButton