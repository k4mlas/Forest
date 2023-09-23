////////////////////////////////////////zmienne do strony

let $footerYear;

let $btnNavMobile;
let $navMobile;
let $navLinksMobile;

///////////////////////////////////////Funkcja main

const main = () => {
	prepareDOMElements();
	prepareDOMEvens();
	handleCurrentYear();
};

const prepareDOMElements = () => {
	$footerYear = document.querySelector('.footer__date__year');
	$btnNavMobile = document.querySelector('.header__content__btn');
	$navMobile = document.querySelector('.header__nav');
	$navLinksMobile = document.querySelectorAll('.header__nav__items__item');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
};
///////////////////////////////////////////////////////Funkcje

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	$footerYear.innerText = year;
};

const showNav = () => {
	$navMobile.classList.toggle('active');
	document.body.classList.toggle('sticky-body');
	$navLinksMobile.forEach((item) => {
		item.addEventListener('click', () => {
			$navMobile.classList.remove('active');
			document.body.classList.remove('sticky-body');
		});
	});
};

////////////////////////////////////////////////////////Funkcja Main wyłowanie

document.addEventListener('DOMContentLoaded', main);
