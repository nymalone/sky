const fetch = require("node-fetch");

fetch("https://sky-frontend.herokuapp.com/movies")
  .then((res) => res.json())
  .then((data) => {
    data[2].movies.forEach((movie) => {
      let idx = movie.categories.indexOf("Ação");
      if (idx != -1) {
        $(".acao").prepend(
          `<div class="swiper-slide">
                    <img class="swiper-img" src="${movie.images[0].url}" alt="${movie.title}">
                    </div>`
        );
      } 
    });
  })
  .catch(() => {
    $(".acao").html("Nenhum resultado encontrado!");
  });

fetch("https://sky-frontend.herokuapp.com/movies")
  .then((res) => res.json())
  .then((data) => {
    data[2].movies.forEach((movie) => {
      let idx = movie.categories.indexOf("Infantil");
      if (idx != -1) {
        $(".infantil").prepend(
          `<div class="swiper-slide">
                    <img class="swiper-img" src="${movie.images[0].url}" alt="${movie.title}">
                    </div>`
        );
      }
    });
  })
  .catch(() => {
    $(".infantil").html("Nenhum resultado encontrado!");
  });

fetch("https://sky-frontend.herokuapp.com/movies")
  .then((res) => res.json())
  .then((data) => {
    data[2].movies.forEach((movie) => {
      let idx = movie.categories.indexOf("Comédia");
      if (idx != -1) {
        $(".comedia").prepend(
          `<div class="swiper-slide">
                    <img class="swiper-img" src="${movie.images[0].url}" alt="${movie.title}">
                    </div>`
        );
      }
    });
  })
  .catch(() => {
    $(".comedia").html("Nenhum resultado encontrado!");
  });

fetch("https://sky-frontend.herokuapp.com/movies")
  .then((res) => res.json())
  .then((data) => {
    data[2].movies.forEach((movie) => {
      let idx = movie.categories.indexOf("Drama");
      if (idx != -1) {
        $(".drama").prepend(
          `<div class="swiper-slide">
                    <img class="swiper-img" src="${movie.images[0].url}" alt="${movie.title}">
                    </div>`
        );
      }
    });
  })
  .catch(() => {
    $(".drama").html("Nenhum resultado encontrado!");
  });

fetch("https://sky-frontend.herokuapp.com/movies")
  .then((res) => res.json())
  .then((data) => {
    data[2].movies.forEach((movie) => {
      let idx = movie.categories.indexOf("Terror" && "Suspense");
      if (idx != -1) {
        $(".terror").prepend(
          `<div class="swiper-slide">
                    <img class="swiper-img" src="${movie.images[0].url}" alt="${movie.title}">
                    </div>`
        );
      }
    });
  })
  .catch(() => {
    $(".terror").html("Nenhum resultado encontrado!");
  });

fetch("https://sky-frontend.herokuapp.com/movies")
  .then((res) => res.json())
  .then((data) => {
    data[2].movies.forEach((movie) => {
      let idx = movie.categories.indexOf("Ficção Científica");
      if (idx != -1) {
        $(".ficcao").prepend(
          `<div class="swiper-slide">
                    <img class="swiper-img" src="${movie.images[0].url}" alt="${movie.title}">
                    </div>`
        );
      }
    });
  })
  .catch(() => {
    $(".ficcao").html("Nenhum resultado encontrado!");
  });


