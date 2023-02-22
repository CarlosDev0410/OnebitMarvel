const botaoTrailer = document.getElementById("botao-trailer");
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkVideo = botaoTrailer.getAttribute('data-src');

function alternaClasse(){
      modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
      alternaClasse();
      video.setAttribute("src", linkVideo);
});

fecharModal.addEventListener("click", () => {
      alternaClasse();
      video.setAttribute("src", "");

});