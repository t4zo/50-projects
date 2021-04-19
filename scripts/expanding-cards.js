export default function vanilaJs() {
  const panels = document.querySelectorAll('.ec-panel');

  panels.forEach((panel) => {
    panel.addEventListener('click', (e) => {
      shrinkPanels();
      selectPanel(panel);
    });
  });

  function shrinkPanels() {
    panels.forEach((p) => {
      p.classList.remove('ec-active');
    });
  }

  function selectPanel(panel) {
    panel.classList.add('ec-active');
  }
}