const factions = [
  { name: "Agrarians", percent: 40, color: "#a7d11c" },
  { name: "Labor", percent: 25, color: "#0F52BA" },
  { name: "Left", percent: 20, color: "#7b1616" },
  { name: "Reformist", percent: 15, color: "#d26e28" }
];

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

// Re-render when the tab is opened
document.getElementById("partyfactions_tab").addEventListener("click", () => {
  setTimeout(renderFactionBar, 50);
});

// Also try rendering on load
setTimeout(renderFactionBar, 200);
