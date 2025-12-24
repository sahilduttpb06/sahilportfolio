const openBtn = document.getElementById("openTypebot");
const closeBtn = document.getElementById("closeTypebot");
const overlay = document.getElementById("typebotOverlay");

openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

/* Close when clicking outside */
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});
