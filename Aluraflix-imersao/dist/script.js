var listaMovies = ['https://img.elo7.com.br/product/original/26A8589/big-poster-serie-breaking-bad-lo03-tamanho-90x60-cm-poster-de-serie.jpg', 'https://img.elo7.com.br/product/original/26A84E9/big-poster-serie-bojack-horseman-lo03-tamanho-90x60-cm-presente-nerd.jpg', 'https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg'];

//Caso queira adicionar algum filme à lista usando PUSH:
listaMovies.push('https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg', 'https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

var nameMovies = ['Breaking Bad', 'Bojack Horseman', 'SpiderMan - SpiderVerse', 'A viagem de Chihiro', 'Divertidamente', 'Harry Potter e a Câmara Secreta'];

document.write('<div class="container_allMovies">')


//Transformei o for em um while para testar

var i = 0;
while(i < listaMovies.length) {
  if((listaMovies[i].endsWith('jpg')) || (listaMovies[i].endsWith('jpeg')) || (listaMovies[i].endsWith('png'))){
  document.write('<div class="container_movie">');
  document.write("<img src=" + listaMovies[i] + ">");
  //Isso coloca o nome do filme embaixo da imagem
  document.write("<p>" + nameMovies[i] + "</p>");
  document.write("</div>");
  }else{
      document.write("<p>A imagem " + i + " não foi lida pois não é um arquivo do tipo: jpeg, jpg ou png </p>");
  }
  i++;
}
document.write('</div>')