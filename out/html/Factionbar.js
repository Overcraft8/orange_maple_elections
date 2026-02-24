function renderFactionBar() {
  const container = document.getElementById("factionBar");
  if (!container) return; // Try again later

  factions.forEach(f => {
    const seg = document.createElement("div");
    seg.className = "segment";
    seg.style.width = f.percent + "%";
    seg.style.backgroundColor = f.color;
    seg.textContent = `${f.name} ${f.percent}%`;
    container.appendChild(seg);
  });
}

// Try again every 200ms until the tab loads
const factionBarInterval = setInterval(() => {
  const container = document.getElementById("factionBar");
  if (container) {
    clearInterval(factionBarInterval);
    renderFactionBar();
  }
}, 200);
