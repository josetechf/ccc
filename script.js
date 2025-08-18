const content = document.getElementById("content");

const pages = {
  "orion": {
    title: "Homem Velho (Órion)",
    text: "Na tradição indígena, Órion é associado ao Homem Velho, uma figura de sabedoria e orientação no céu.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Orion_Constellation.jpg",
    curiosidades: [
      "Alguns povos veem as Três Marias como parte do cinturão de um caçador.",
      "Era usado como referência para a época de plantar e colher."
    ]
  },
  "cruzeiro": {
    title: "Cruzeiro do Sul",
    text: "Uma das constelações mais importantes do Hemisfério Sul, utilizada para orientação e organização do tempo.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Crux_constellation_map.png",
    curiosidades: [
      "Indica o Sul geográfico, sendo usado como uma bússola natural.",
      "Entre os povos indígenas, também marca ciclos de chuva e seca."
    ]
  },
  "ema": {
    title: "Ema",
    text: "Formada por regiões escuras da Via Láctea, representa a grande ave que corre pelos campos.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Emu_in_the_sky.jpg",
    curiosidades: [
      "É uma das constelações mais famosas entre os povos indígenas australianos e também brasileiros.",
      "Aparece deitada ou em pé dependendo da estação do ano."
    ]
  },
  "garca": {
    title: "Garça",
    text: "Representa a ave que habita os céus e rios do Brasil, símbolo de delicadeza e atenção.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Heron_constellation.png",
    curiosidades: [
      "Está associada às águas, rios e lagos.",
      "Marca o período de migração das aves."
    ]
  },
  "jararaca": {
    title: "Jararaca",
    text: "Simboliza a serpente, animal que habita tanto o chão quanto o imaginário cultural.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Snake_constellation.png",
    curiosidades: [
      "Vista como guardiã da floresta.",
      "Alguns povos acreditam que seu aparecimento indica a época de chuvas."
    ]
  },
  "via-lactea": {
    title: "Via Láctea",
    text: "A grande faixa luminosa no céu, com enorme importância cultural e espiritual.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Milky_Way_arch.jpg",
    curiosidades: [
      "Alguns povos a chamam de 'Caminho das Almas'.",
      "Para os Guarani, é a estrada que leva ao mundo espiritual."
    ]
  }
};

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.dataset.page;
    const { title, text, img, curiosidades } = pages[page];

    content.innerHTML = `
      <h2>${title}</h2>
      <p>${text}</p>
      <img src="${img}" alt="${title}" class="constelacao">
      <div class="curiosidades">
        <h3>🔎 Curiosidades</h3>
        <ul>
          ${curiosidades.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;

    content.classList.remove("fade");
    void content.offsetWidth; // força reflow
    content.classList.add("fade");
  });
});

