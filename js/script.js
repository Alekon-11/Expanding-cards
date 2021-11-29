'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

//-------------------------------1. Expanding cards

    const parentCards = document.querySelector('.cards');
    let cardsImg = document.querySelectorAll('.cards__img img'),
        cardsItems = document.querySelectorAll('.cards__item');

    function showCard(activeClass, items, i = 0){
        if(!items[i].matches(`.${activeClass}`)){
            items.forEach(item => item.classList.remove(activeClass));
            items[i].classList.add(activeClass);
        } else {
            items[i].classList.remove(activeClass);
        }  
    }

    function moveItem(e, matchesClass){
        cardsImg = document.querySelectorAll('.cards__img img');
        cardsItems = document.querySelectorAll('.cards__item');

        if(e.target && e.target.matches(matchesClass)){
            cardsImg.forEach((item, num) => {
                if(item === e.target){
                    showCard('active', cardsItems, num);
                }
            });
        }
    }

    parentCards.addEventListener('click',(e) => moveItem(e,'.cards__img img'));

    showCard('active', cardsItems);

});