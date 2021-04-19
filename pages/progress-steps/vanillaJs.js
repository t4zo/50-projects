export default function vanillaJs() {
  const progress = document.querySelector('#ps-progress');
  const prev = document.querySelector('#ps-prev');
  const next = document.querySelector('#ps-next');
  const circles = document.querySelectorAll('.ps-circle');

  let currentActive = 1;

  prev.addEventListener('click', () => {
    if (currentActive < 1) {
      currentActive = 1;
    }

    currentActive--;
    updateProgress();
  });

  next.addEventListener('click', () => {
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }

    currentActive++;

    updateProgress();
  });

  function updateProgress() {
    circles.forEach((circle, index) => {
      if (index < currentActive) {
        circle.classList.add('ps-active');
      } else {
        circle.classList.remove('ps-active');
      }
    });

    const activeCircles = document.querySelectorAll('.ps-active');
    progress.style.width = `${((activeCircles.length - 1) / (circles.length - 1)) * 100}%`;

    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  }
}
