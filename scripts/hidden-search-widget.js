export default function vanilaJs() {
  const search = document.querySelector('.hsw-search');
  const input = document.querySelector('.hsw-input');
  const btn = document.querySelector('.hsw-btn');

  btn.addEventListener('click', () => {
    search.classList.add('hsw-active');
    input.focus();
  });
}