function headerBackgroundScroll() {
	const scrollPos = 0,
		header = document.querySelector("header")

	window.addEventListener("scroll", () => {
		let windowYOffset = window.scrollY

		if (windowYOffset > scrollPos) {
			header.classList.add("header-background-color")
		} else if (windowYOffset === scrollPos) {
			header.classList.remove("header-background-color")
		}
	})
}

export { headerBackgroundScroll }
