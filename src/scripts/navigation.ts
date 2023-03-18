const OPEN_CLASS = 'open';
function hasOpenClass(classes: DOMTokenList | undefined) {
  return classes?.contains(OPEN_CLASS);
}

function toggleNav(forceClose?: boolean) {
  const headerClassList = document?.querySelector('#main-header')?.classList;

  headerClassList?.toggle(OPEN_CLASS);

  if (hasOpenClass(headerClassList)) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

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
      document?.querySelector('#main-header')?.classList.contains(OPEN_CLASS) &&
      e.key === 'Escape'
    ) {
      toggleNav(true);
    }
  });

  const menuListItems = document.querySelectorAll('.nav-list-item');
  menuListItems?.forEach((el) => {
    el.addEventListener('click', () => {
      toggleNav(true);
    });
  });
});
