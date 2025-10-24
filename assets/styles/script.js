const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const imagem = document.getElementById("imagem");

const btnPraia = document.getElementById("btnPraia");
const btnMontanha = document.getElementById("btnMontanha");
const btnCidade = document.getElementById("btnCidade");

btnPraia.addEventListener("click", () => {
  titulo.textContent = "Praia 🏖️";
  descricao.textContent = "Você está em uma praia ensolarada, sentindo a brisa do mar.";
  imagem.src = "assets/img/praia.avif";
});

btnMontanha.addEventListener("click", () => {
  titulo.textContent = "Montanha 🏔️";
  descricao.textContent = "Você subiu até o topo e sente o ar puro da montanha.";
  imagem.src = "assets/img/montanha.jpg";
});

btnCidade.addEventListener("click", () => {
  titulo.textContent = "Cidade 🌆";
  descricao.textContent = "As luzes da cidade brilham enquanto a noite chega.";
  imagem.src = "assets/img/cidade.jpg";
});