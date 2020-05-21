fetch('https://sky-frontend.herokuapp.com/movies')
    .then(res => res.json()).then(json => {
        json[2].movies.forEach(item => {
            let idx = item.categories.indexOf("Ação")
            if(idx != -1){
                $(".acao").append(
                   `<div class="swiper-slide">
                    <img class="swiper-img" src="${item.images[0].url}" alt="${item.title}">
                    </div>`
                )
            }
        })
    }).catch(() => {
        $('.card-deck').html('Nenhum resultado encontrado!')
    })

//     fetch('https://sky-frontend.herokuapp.com/movies')
//     .then(res => res.json()).then(json => {
//         json[2].movies.forEach(item => {
//             let idx = item.categories.indexOf("Infantil")
//             if(idx != -1){
//                 $(".infantil").prepend(
//                     `<div class="card">
//                         <img class="img-fluid" src="${item.images[0].url}" alt="${item.title}">
//                     </div>`
//                 )
//             }
//         })
//     }).catch(() => {
//         $('.card-deck').html('Nenhum resultado encontrado!')
//     })

    fetch('https://sky-frontend.herokuapp.com/movies')
    .then(res => res.json()).then(json => {
        json[2].movies.forEach(item => {
            let idx = item.categories.indexOf("Terror")
            if(idx != -1){
                $(".terror").prepend(
                    `<div class="swiper-slide">
                    <img class="swiper-img" src="${item.images[0].url}" alt="${item.title}">
                    </div>`
                )
            }
        })
    }).catch(() => {
        $('.card-deck').html('Nenhum resultado encontrado!')
    })

//     fetch('https://sky-frontend.herokuapp.com/movies')
//     .then(res => res.json()).then(json => {
//         json[2].movies.forEach(item => {
//             let idx = item.categories.indexOf("Drama")
//             if(idx != -1){
//                 $(".drama").prepend(
//                     `<div class="card">
//                         <img class="img-fluid" src="${item.images[0].url}" alt="${item.title}">
//                     </div>`
//                 )
//             }
//         })
//     }).catch(() => {
//         $('.card-deck').html('Nenhum resultado encontrado!')
//     })

