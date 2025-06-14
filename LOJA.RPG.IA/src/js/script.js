// src/js/script.js

document.addEventListener("DOMContentLoaded", function () {
  const btnFiltrar = document.querySelector(".btn-filtrar");
  const categoriaInput = document.querySelector("#categoria");
  const precoInput = document.querySelector("#preco");
  const cartas = document.querySelectorAll(".carta");

  btnFiltrar.addEventListener("click", () => {
    const categoriaSelecionada = categoriaInput.value.toLowerCase();
    const precoMaximo = parseFloat(precoInput.value);

    cartas.forEach((carta) => {
      const categoriaCarta = carta.dataset.categoria.toLowerCase();
      const precoCarta = parseFloat(carta.dataset.preco);

      const categoriaOk = !categoriaSelecionada || categoriaCarta === categoriaSelecionada;
      const precoOk = !precoInput.value || precoCarta <= precoMaximo;

      if (categoriaOk && precoOk) {
        carta.style.display = "block";
      } else {
        carta.style.display = "none";
      }
    });
  });

  // Evento de clique nos botões "COMPRAR"
  const botoesComprar = document.querySelectorAll(".btn-comprar");

  botoesComprar.forEach((botao) => {
    botao.addEventListener("click", () => {
      const nomeCarta = botao.parentElement.querySelector(".nome-personagem").textContent;
      alert(`Você comprou a carta: ${nomeCarta}`);
    });
  });
});


document.addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada foi "Enter"
    if (event.key === "Enter") {
        event.preventDefault(); // Evita comportamento padrão (como envio de formulário)
        const botaoFiltrar = document.querySelector(".btn-filtrar");
        if (botaoFiltrar) {
            botaoFiltrar.click(); // Aciona o clique no botão
        }
    }
});

