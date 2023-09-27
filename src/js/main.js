////////////////////////////////////////zmienne do strony

let $footerYear;

let $btnNavMobile;
let $navMobile;
let $navLinksMobile;

let $navLinksDesktop;
let $sections;

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
	$navLinksDesktop = document.querySelectorAll('.header__navDesktop__item');
	$sections = document.querySelectorAll('.sectionScroll');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
};
////////////////////////////////////////////////////////////////////////Funkcje

//DATA

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	$footerYear.innerText = year;
};

//Nawigacja mobilna

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

//scrollspy

window.onscroll = () => {
	$sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');


		if (top >= offset && top < offset + height) {
			$navLinksDesktop.forEach((links) => {
				links.classList.remove('activeNav');
				document.querySelector('.header__navDesktop__item[href*=' + id + ']').classList.add("activeNav")
			});
		}
	});
};

////////////////////////////////////////////////////////Funkcja Main 

document.addEventListener('DOMContentLoaded', main);
