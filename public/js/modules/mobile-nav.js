function mobileNav() {
    const body = document.querySelector('body'),
          headerHamburger = document.querySelector('header button'),
          aside = document.querySelector('aside')

    headerHamburger.addEventListener('click', () => {
        body.classList.toggle('overflow-hidden')
        aside.classList.toggle('show')
    })
}

export { mobileNav }