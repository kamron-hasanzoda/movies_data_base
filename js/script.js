import { movies } from "../modules/db.js";

let cont = document.querySelector('.promo__interactive-list')
let com = document.querySelector('.promo__genre')
let tit = document.querySelector('.promo__title')
let des = document.querySelector('.promo__descr')
let im = document.querySelector('.im')
let poisk = document.querySelector('.poisk')

const movieDb = [];

let sorted = movies
movieDb.push(sorted)

sorted.forEach(i => {
    movieDb.push(i.Title)
    movieDb.sort()
})

// 1
let adds = document.querySelectorAll('.promo__adv img')
let add_text = document.querySelector('.promo__adv-title')

adds.forEach((img) => {
    img.remove()
    add_text.remove()
})

// 2
let genre = document.querySelectorAll('.promo__menu-item')

genre.forEach((type) => {
    type.onclick = () => {
        genre.forEach(el => el.classList.remove('promo__menu-item_active'))
        type.classList.add('promo__menu-item_active')
    }
})

// 3
let back = document.querySelector('.promo__bg')
back.style.backgroundImage = 'url(./img/bg.jpg)'

// create
function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let li = document.createElement('li')
        let del = document.createElement('div')

        li.innerHTML = (arr.indexOf(item) + 1) + '. ' + item.Title
        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.onclick = () => {
            back.style.background = `url("${item.Poster}")`
            com.innerHTML = item.Genre
            des.innerHTML = item.Writer.slice(0, 120)
            im.innerHTML = `IMDb: ${item.imdbRating}`
            poisk.innerHTML = `Кинопоиск: ${Math.round(item.imdbRating)}`
        }

        del.onclick = () => {
            del.parentElement.remove()
                if(item.Title != arr.forEach(i => i.Title)) {
                    sorted = sorted.filter(el => el.Title != item.Title)
                    console.log(sorted);
                }
        }

        li.append(del)
        place.append(li)
    }
}

reload(sorted, cont)