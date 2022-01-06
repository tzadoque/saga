export default function stickyMenu() {
  const menu = document.querySelector('#menu-inicial');
  window.addEventListener('scroll', handleScroll);
  function handleScroll() {
    if(window.scrollY >= 100) {
      menu.classList.add('sticky-top');
    } else if (window.scrollY <= 1) {
      menu.classList.remove('sticky-top');
    }
  }
}