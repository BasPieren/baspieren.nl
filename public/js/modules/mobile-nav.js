function mobileNav() {
    const body = document.querySelector('body'),
          headerHeading = document.querySelector('header h4 span'),
          headerHamburger = document.querySelector('header button'),
          aside = document.querySelector('aside')

    headerHamburger.addEventListener('click', () => {
        body.classList.toggle('overflow-hidden')
        headerHeading.classList.toggle('text-color-secondary')
        headerHeading.classList.toggle('text-color-comment')
        headerHamburger.classList.toggle('text-color-secondary')
        aside.classList.toggle('show')
    })
}

export { mobileNav }