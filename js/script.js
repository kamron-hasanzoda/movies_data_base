/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

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

// delete
let deleted = document.querySelectorAll('.promo__interactive-item .delete')

deleted.forEach(del => {
    del.onclick = () => {
        del.parentNode.remove()
    }
});
