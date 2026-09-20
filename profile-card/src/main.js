import './style.css'
const likeBtn = document.querySelector('#like-btn');
const card = document.querySelector('#card');

likeBtn.addEventListener('click', function () {
  likeBtn.classList.toggle('active');
  card.classList.toggle('liked');

  if (likeBtn.classList.contains('active')) {
    likeBtn.textContent = '♥ Liked';
  } else {
    likeBtn.textContent = '♡ Like';
  }
});
