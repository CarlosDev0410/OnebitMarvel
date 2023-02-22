const pages = document.querySelectorAll('.page');
const paginationLinks = document.querySelectorAll('#pagination a');

function showPage(pageNum) {
  // Esconde todas as páginas
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  
  // Mostra a página especificada
  pages[pageNum - 1].classList.add('active');
  
  // Atualiza a marcação da página atual na navegação
  for (var i = 0; i < paginationLinks.length; i++) {
    paginationLinks[i].classList.remove('active');
    if (paginationLinks[i].dataset.page == pageNum) {
      paginationLinks[i].classList.add('active');
    }
  }
}

// Exibe a página inicial ao carregar a página
showPage(1);

// Configura os links de navegação para exibir as páginas correspondentes
for (var i = 0; i < paginationLinks.length; i++) {
  paginationLinks[i].addEventListener('click', function(e) {
    e.preventDefault();
    showPage(this.dataset.page);
  });
}