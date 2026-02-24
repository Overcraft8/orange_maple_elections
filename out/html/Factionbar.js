const factions = [
  { name: "Agrarians", percent: 40, color: "#d9534f" },
  { name: "Labor", percent: 25, color: "#5bc0de" },
  { name: "Left", percent: 20, color: "#5e5e5e" },
  { name: "Reformist", percent: 15, color: "#5cb85c" }
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
