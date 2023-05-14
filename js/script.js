import { movies } from "../modules/db.js";

let ul = document.querySelector('.promo__interactive-list')
let promo__bg = document.querySelector('.promo__bg')
let promo__genre = document.querySelector(".promo__genre");
let promo__title = document.querySelector(".promo__title");
let promo__descr = document.querySelector(".promo__descr")
let imdb = document.querySelector(".imdb");
let reserch = document.querySelector(".reserch");
let search = document.querySelector('#search')
let genUl = document.querySelector('.genresUl')
let genres_arr = ['All']
let modal = document.querySelector('.modal')

let massiv = movies

search.onkeyup = () => {
    let filtered = massiv.filter(item => {
        let title = item.Title.toLowerCase()
        let value = search.value.toLowerCase().trim()

        if (title.includes(value)) {
            return item
        }
    })

    reload(filtered)
}

function reload(arr) {
    ul.innerHTML = ""
    changeFilm(arr[0])

    arr.forEach((movie, index) => {
        genres_arr.push(movie.Genre)

        let li = document.createElement('li')
        let del = document.createElement('div')

        li.innerHTML = `${index + 1}. ${movie.Title}`
        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.onclick = () => {
            modal.style.display = 'block'
            changeFilm(movie)
            createTable(movie)
        }

        del.onclick = () => {
            li.remove()
            massiv = massiv.filter(el => el.ID != index)
            console.log(massiv);
        }

        li.append(del)
        ul.append(li)
    });
}

reload(massiv.sort((a, b) => a.Title > b.Title ? 1 : -1))

function createTable(img) {
    modal.innerHTML = ''
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    let contt = document.createElement('div')
    let close_img = document.createElement('img')
    let right = document.createElement('div')
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')
    let tr1 = document.createElement('tr')
    let th1_1 = document.createElement('th')
    let th1_2 = document.createElement('th')
    let tr2 = document.createElement('tr')
    let th2_1 = document.createElement('th')
    let th2_2 = document.createElement('th')
    let tr3 = document.createElement('tr')
    let th3_1 = document.createElement('th')
    let th3_2 = document.createElement('th')
    let tr4 = document.createElement('tr')
    let th4_1 = document.createElement('th')
    let th4_2 = document.createElement('th')
    let tr5 = document.createElement('tr')
    let th5_1 = document.createElement('th')
    let th5_2 = document.createElement('th')
    let tr6 = document.createElement('tr')
    let th6_1 = document.createElement('th')
    let th6_2 = document.createElement('th')
    let tr7 = document.createElement('tr')
    let th7_1 = document.createElement('th')
    let th7_2 = document.createElement('th')
    let tr8 = document.createElement('tr')
    let th8_1 = document.createElement('th')
    let th8_2 = document.createElement('th')
    let tr9 = document.createElement('tr')
    let th9_1 = document.createElement('th')
    let th9_2 = document.createElement('th')
    let tr10 = document.createElement('tr')
    let th10_1 = document.createElement('th')
    let th10_2 = document.createElement('th')
    let tr11 = document.createElement('tr')
    let th11_1 = document.createElement('th')
    let th11_2 = document.createElement('th')

    close_img.src = './img/close.svg'

    h1.innerHTML = img.Title
    p.innerHTML = img.Genre
    th1_1.innerHTML = 'Рейтинги:'
    th1_2.innerHTML = img.Ratings[0].Value
    th2_1.innerHTML = 'Слоган:'
    th2_2.innerHTML = img.Title
    th3_1.innerHTML = 'Дата выхода:'
    th3_2.innerHTML = img.Year
    th4_1.innerHTML = 'Страна:'
    th4_2.innerHTML = img.Language
    th5_1.innerHTML = 'Режиссер:'
    th5_2.innerHTML = img.Director
    th6_1.innerHTML = 'Жанр:'
    th6_2.innerHTML = img.Genre
    th7_1.innerHTML = 'В качестве:'
    th7_2.innerHTML = '1080p'
    th8_1.innerHTML = 'В переводе:'
    th8_2.innerHTML = 'Нету'
    th9_1.innerHTML = 'Время:'
    th9_2.innerHTML = img.Runtime
    th10_1.innerHTML = 'Из серии:'
    th10_2.innerHTML = img.Production
    th11_1.innerHTML = 'В ролях актеры:'
    th11_2.innerHTML = img.Actors

    close_img.classList.add('cls')
    right.classList.add('right')
    contt.classList.add('cont')

    modal.style.backgroundImage = `url(${img.Poster})`
    modal.style.transition = '1s ease'

    close_img.onclick = () => {
        modal.style.display = 'none'
    }

    modal.append(close_img, h1, p, contt)
    contt.append(right)
    table.append(tbody)
    tr1.append(th1_1, th1_2)
    tr2.append(th2_1, th2_2)
    tr3.append(th3_1, th3_2)
    tr4.append(th4_1, th4_2)
    tr5.append(th5_1, th5_2)
    tr6.append(th6_1, th6_2)
    tr7.append(th7_1, th7_2)
    tr8.append(th8_1, th8_2)
    tr9.append(th9_1, th9_2)
    tr10.append(th10_1, th10_2)
    tr11.append(th11_1, th11_2)
    tbody.append(tr1, tr2, tr3, tr4, tr5, tr6, tr7, tr8, tr9, tr10, tr11)
    right.append(table)
}

let btns = document.querySelectorAll(".promo__menu-item")

function changeFilm(props) {
    promo__bg.style.backgroundImage = `url("${props.Poster}")`
    promo__bg.style.transition = '1s ease'
    promo__genre.innerHTML = props.Genre
    promo__title.innerHTML = props.Title
    promo__descr.innerHTML = props.Plot
    imdb.innerHTML = `IMDb: ${props.imdbRating}`
    reserch.innerHTML = `Кинопоиск: ${props.Metascore}`
}

btns.forEach(btn => {
    btn.onclick = () => {
        btns.forEach(btn => {
            btn.classList.remove('promo__menu-item_active')
        })
        btn.classList.add('promo__menu-item_active')
    }

})

genres_arr = [...new Set(genres_arr)]

generateGenres(genres_arr)
function generateGenres(arr) {
    genUl.innerHTML = ""

    for (let item of arr) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        if (arr.indexOf(item) === 0) {
            a.classList.add('promo__menu-item_active')
        }

        a.classList.add('promo__menu-item')
        a.href = "#"
        a.innerHTML = item

        li.append(a)
        genUl.append(li)

        li.onclick = () => {
            genUl.childNodes.forEach(elem => elem.firstChild.classList.remove('promo__menu-item_active'))

            li.firstChild.classList.add('promo__menu-item_active')

            let filtered = massiv.filter(elem => {
                let genre = elem.Genre.toLowerCase()
                if (item.toLowerCase() === genre) {
                    return elem
                } else if (item.toLowerCase() === 'all') {
                    reload(massiv.sort((a, b) => a.Title > b.Title ? 1 : -1))
                }
            })


            if (filtered.length > 0) reload(filtered)
        }

    }
}

let adds = document.querySelectorAll('.promo__adv img')
let add_text = document.querySelector('.promo__adv-title')

adds.forEach((img) => {
    img.remove()
    add_text.remove()
})