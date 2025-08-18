const content = document.getElementById("content");
const sidebar = document.querySelector(".sidebar");
const toggleMenu = document.getElementById("toggleMenu");

// Dados das páginas
const pages = {
  "orion": {
    title: "Homem Velho (Órion)",
    text: "Na tradição indígena, Órion é associado ao Homem Velho, figura de sabedoria.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Orion_Constellation.jpg"
  },
  "cruzeiro": {
    title: "Cruzeiro do Sul",
    text: "Importante para orientação e calendário indígena.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Crux_constellation_map.png"
  },
  "ema": {
    title: "Ema",
    text: "Constelação escura da Via Láctea representando a grande ave.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Emu_in_the_sky.jpg"
  },
  "garca": {
    title: "Garça",
    text: "Representa a ave que habita os rios e céus do Brasil.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Heron_constellation.png"
  },
  "jararaca": {
    title: "Jararaca",
    text: "Uma das constelações indígenas que simboliza a serpente.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Snake_constellation.png"
  },
  "via-lactea": {
    title: "Via Láctea",
    text: "A grande faixa luminosa no céu, rica em significados para diversos povos indígenas.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Milky_Way_arch.jpg"
  }
};

// Navegação
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    const { title, text, img } = pages[page];
    content.innerHTML = `
      <h2>${title}</h2>
      <p>${text}</p>
      <img src="${img}" alt="${title}" class="constelacao fade">
    `;
    // Fecha menu no mobile
    sidebar.classList.remove("active");
  });
});

// Botão do menu (mobile)
toggleMenu.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Fundo estrelado animado
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
  requestAnimationFrame(drawStars);
}
drawStars();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
