const content = document.getElementById("content");

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

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    const { title, text, img } = pages[page];
    content.innerHTML = `
      <h2>${title}</h2>
      <p>${text}</p>
      <img src="${img}" alt="${title}" class="constelacao">
    `;
  });
});
