document.getElementById("revealBtn").addEventListener("click", function () {
  const intro = document.getElementById("intro");
  const btn = document.getElementById("revealBtn");

  const elements = [
    document.getElementById("hiddenText"),
    document.getElementById("hiddenImg"),
    document.getElementById("hiddenPar"),
    document.getElementById("hiddenImg1"),
    document.getElementById("hiddenImg2"),
    document.getElementById("hiddenImg3"),
    document.getElementById("hiddenPar1"),
    document.getElementById("hiddenPar2")
  ];

  // disable button + fade intro
  btn.disabled = true;
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.classList.add("hidden");

    // staggered reveal
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("show");
      }, i * 400);
    });
  }, 500);
});
