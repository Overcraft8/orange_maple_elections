const factions = [
  { name: "Agrarians", percent: 40, color: "#a7d11c" },
  { name: "Labor", percent: 25, color: "#0F52BA" },
  { name: "Left", percent: 20, color: "#7b1616" },
  { name: "Reformist", percent: 15, color: "#d26e28" }
];

function renderFactionBar() {
  const container = document.getElementById("factionBar");
  if (!container) return;

  factions.forEach(f => {
    const seg = document.createElement("div");
    seg.className = "segment";
    seg.style.width = f.percent + "%";
    seg.style.backgroundColor = f.color;
    seg.textContent = `${f.name} ${f.percent}%`;
    container.appendChild(seg);
  });
}

renderFactionBar();
