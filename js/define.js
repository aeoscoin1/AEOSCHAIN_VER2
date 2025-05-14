
document.addEventListener("DOMContentLoaded", () => {
  const defs = {
    "flow": "Flow represents the continuity of interaction across conditions, revealing structure through motion.",
    "stability": "Stability is the moment when change ceases long enough to measure identity.",
    "pattern": "A pattern is a recognizable form arising from repeated or structured interactions."
  };
  document.querySelectorAll(".def").forEach(el => {
    el.addEventListener("click", () => {
      const word = el.dataset.word;
      const box = document.getElementById("definition-box");
      box.innerText = defs[word] || "(no definition found)";
      box.classList.remove("hidden");
    });
  });
});
