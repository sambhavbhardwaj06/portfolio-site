// ===== OTT-STYLE ROW INTERACTIONS =====

// 1. Enable vertical scroll to move horizontal rows
document.querySelectorAll(".project-track").forEach(track => {
  track.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  }, { passive: false });
});

// 2. Keyboard navigation (accessibility + professionalism)
document.querySelectorAll(".project-track").forEach(track => {
  track.setAttribute("tabindex", "0");

  track.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      track.scrollLeft += 200;
    }
    if (e.key === "ArrowLeft") {
      track.scrollLeft -= 200;
    }
  });
});

// 3. Focus-based reveal for project cards (non-hover users)
document.querySelectorAll(".project-card").forEach(card => {
  card.setAttribute("tabindex", "0");

  card.addEventListener("focus", () => {
    card.classList.add("focused");
  });

  card.addEventListener("blur", () => {
    card.classList.remove("focused");
  });
});
