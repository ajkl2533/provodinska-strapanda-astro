const OPEN_CLASS = 'open';
function hasOpenClass(classes) {
  return classes?.contains(OPEN_CLASS);
}
function getHeaderElement() {
  return document?.querySelector('#main-header');
}

function toggleNav(forceClose) {
  const headerClassList = getHeaderElement().classList;

  headerClassList?.toggle(OPEN_CLASS);
  document.body.style.overflow = hasOpenClass(headerClassList)
    ? 'hidden'
    : 'auto';

  if (forceClose) {
    [...document.querySelectorAll('.astronav-toggle')].forEach((el) => {
      el.classList.toggle('hidden');
    });
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('astronav-menu');
  menuButton?.addEventListener('click', () => {
    toggleNav();
  });
  document.body.addEventListener('keydown', (e) => {
    if (
      getHeaderElement()?.classList.contains(OPEN_CLASS) &&
      e.key === 'Escape'
    ) {
      toggleNav(true);
    }
  });

  const menuListItems = document.querySelectorAll(
    '#main-header .nav-list-item'
  );
  menuListItems?.forEach((el) => {
    el.addEventListener('click', () => {
      toggleNav(true);
    });
  });
});
