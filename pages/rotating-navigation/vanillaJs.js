export default function vanillaJs() {
  const open = document.querySelector('#rn-open');
  const close = document.querySelector('#rn-close');
  const container = document.querySelector('.rn-container');

  open.addEventListener('click', () => {
    container.classList.add('rn-show-nav');
  });

  close.addEventListener('click', () => {
    container.classList.remove('rn-show-nav');
  });
}
