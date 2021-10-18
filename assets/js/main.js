/*==================== MENU SHOW Y HIDDEN ====================*/
const navClose = document.querySelector('.nav__close');
const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('.nav__menu');
const navItem = document.querySelectorAll('.nav__item');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
function closeMenu() {
    navMenu.classList.remove('show__menu')
};

navItem.forEach((n) => n.addEventListener('click', closeMenu) )

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClose = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClose === 'skills__content skills__close'){

        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})


/*==================== QUALIFICATION TABS ====================*/

// const tabs = document.querySelectorAll('[data-target]');
// const tabContents = document.querySelectorAll('[data-content]')

// tabs.forEach((tab) => {
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.target)
//     })

//     tabContents.forEach((tabContent) => {
//         tabContent.classList.remove('qualification__active')
//     })

//     target.classList.add('qualification__active')

//     tabs.forEach((tab) => {
//         tab.classList.remove('qualification__active')
//     })
//     tab.classList.add('qualification__active')
// })

/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    // loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    //   clickabel: true,
    },
    mousewheel: true,
    keyboard: true,
  });

/*==================== TESTIMONIAL ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('.header');
    const scrollY = window.pageYOffset;
    if (this.scrollY >= 80) {
        nav.classList.add('header__scroll')
    } else {
        nav.classList.remove('header__scroll')
    }
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function showScroll(){
    const scrollUp = document.querySelector('.scrollUp')
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll')
    }else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', showScroll)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
})