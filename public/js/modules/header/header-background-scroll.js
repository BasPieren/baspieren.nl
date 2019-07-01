function headerBackgroundScroll() {
	const scrollPos = 0,
		header = document.getElementsByClassName("header")

	window.addEventListener("scroll", () => {
		let windowYOffset = window.scrollY

		if (windowYOffset > scrollPos) {
			header[0].classList.add("header--hide")
		} else if (windowYOffset === scrollPos) {
			header[0].classList.remove("header--hide")
		}
	})
}

export { headerBackgroundScroll }
