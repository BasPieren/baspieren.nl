function basPierenHome() {
	const homeH3 = document.querySelector("#home h3")

	const options = {
		strings: [`<span class="text-color-function">basPieren</span>()`],
		typeSpeed: 80,
		startDelay: 500,
		showCursor: true,
		cursorChar: "|",
		autoInsertCss: true
	}

	const typed = new Typed(homeH3, options)
}

export { basPierenHome }
