const buttonHome = document.querySelector('[data-navigate="home"]');
const buttonBookmarks = document.querySelector('[data-navigate="bookmarks"]');
const buttonCreate = document.querySelector('[data-navigate="create"]');
const buttonProfile = document.querySelector('[data-navigate="profile"]');

const pageHome = document.querySelector('[data-page="home"]');

const pageCreate = document.querySelector('[data-page="create"]');
const pageProfile = document.querySelector('[data-page="profile"]');

const cards = document.querySelectorAll('.card');
const bookmarks = document.querySelectorAll('.card__bookmark');

/* ------------- navigation -------------- */

buttonHome.addEventListener('click', () => {
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  pageHome.classList.remove('hidden');

  buttonBookmarks.children[0].classList.remove('navigation__svg--active');
  buttonCreate.children[0].classList.remove('navigation__svg--active');
  buttonProfile.children[0].classList.remove('navigation__svg--active');

  buttonHome.children[0].classList.add('navigation__svg--active');
  cards.forEach(card => {
    card.classList.remove('hidden');
  });
});

buttonBookmarks.addEventListener('click', () => {
  pageCreate.classList.add('hidden');
  pageProfile.classList.add('hidden');

  pageHome.classList.remove('hidden');

  buttonHome.children[0].classList.remove('navigation__svg--active');
  buttonCreate.children[0].classList.remove('navigation__svg--active');
  buttonProfile.children[0].classList.remove('navigation__svg--active');

  buttonBookmarks.children[0].classList.add('navigation__svg--active');
  cards.forEach(card => {
    const isBookmarked = card.querySelector('.card__bookmark--svg-active');
    if (!isBookmarked) {
      card.classList.add('hidden');
    }
  });
});

buttonCreate.addEventListener('click', () => {
  pageHome.classList.add('hidden');

  pageProfile.classList.add('hidden');

  pageCreate.classList.remove('hidden');

  buttonHome.children[0].classList.remove('navigation__svg--active');
  buttonBookmarks.children[0].classList.remove('navigation__svg--active');
  buttonProfile.children[0].classList.remove('navigation__svg--active');

  buttonCreate.children[0].classList.add('navigation__svg--active');
});

buttonProfile.addEventListener('click', () => {
  pageHome.classList.add('hidden');

  pageCreate.classList.add('hidden');

  pageProfile.classList.remove('hidden');

  buttonHome.children[0].classList.remove('navigation__svg--active');
  buttonBookmarks.children[0].classList.remove('navigation__svg--active');
  buttonCreate.children[0].classList.remove('navigation__svg--active');

  buttonProfile.children[0].classList.add('navigation__svg--active');
});

/* ------------- bookmarks -------------- */

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.children[0].classList.toggle('card__bookmark--svg-active');
  });
});

/* ------------- card -------------- */

cards.forEach(card => {
  const button = card.querySelector('.card__button');
  const answer = card.querySelector('.card__answer');
  button.addEventListener('click', () => {
    answer.classList.toggle('hidden');
    if (answer.classList.contains('hidden')) {
      button.textContent = 'SHOW ANSWER';
    } else {
      button.textContent = 'HIDE ANSWER';
    }
  });
});
