const projects = document.querySelectorAll(".project");

const safeBox = document.querySelector(".safe-box");

if (safeBox) {
  const requiredClicks = 10;
  let clickCount = 0;

  safeBox.addEventListener("click", () => {
    if (safeBox.classList.contains("is-unlocked")) {
      window.location.href = "caja-fuerte.html";
      return;
    }

    clickCount += 1;
    safeBox.dataset.clicks = String(clickCount);

    if (clickCount >= requiredClicks) {
      safeBox.classList.add("is-unlocked");
      safeBox.setAttribute("aria-label", "Caja fuerte desbloqueada");
      safeBox.querySelector("strong").textContent = "OPEN";
      return;
    }

    safeBox.setAttribute("aria-label", `Caja fuerte: ${clickCount} de ${requiredClicks} pulsaciones`);
  });
}

const revealProject = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(revealProject, { threshold: 0.15 });

  projects.forEach((project) => {
    observer.observe(project);
  });
} else {
  projects.forEach((project) => {
    project.classList.add("is-visible");
  });
}