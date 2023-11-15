var listaMovies = ['https://img.elo7.com.br/product/original/26A8589/big-poster-serie-breaking-bad-lo03-tamanho-90x60-cm-poster-de-serie.jpg', 'https://img.elo7.com.br/product/original/26A84E9/big-poster-serie-bojack-horseman-lo03-tamanho-90x60-cm-presente-nerd.jpg', 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'];

for (var i = 0; i < listaMovies.length; i++) {
  document.write("<img src=" + listaMovies[i] + ">");
}