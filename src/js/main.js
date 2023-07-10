////////////////////////////////////////zmienne do strony

let $btnNavMobile;
let $navMobile;
let $navLinksMobile;

///////////////////////////////////////Funkcja main

const main = () => {
	prepareDOMElements();
	prepareDOMEvens();
};

const prepareDOMElements = () => {
	$btnNavMobile = document.querySelector('.header__content__btn');
	$navMobile = document.querySelector('.header__nav');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
};
///////////////////////////////////////////////////////Funkcje

const showNav = () => {
	$navMobile.classList.toggle('active');
};

////////////////////////////////////////////////////////Funkcja Main wyłowanie

document.addEventListener('DOMContentLoaded', main);
