function classToggleClick(clickElement, toggleElements) {
    clickElement.addEventListener('click', () => {
        elements.forEach(e => {
            e.element.classList.toggle(e.class)
        })
    })
}

export { classToggleClick }