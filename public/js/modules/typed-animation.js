function basPierenHome() {
	const homeHeading = document.getElementsByClassName("section__heading")

	const options = {
		strings: [`<span class="span--function">basPieren</span>()`],
		typeSpeed: 80,
		startDelay: 500,
		showCursor: false
	}

	const typed = new Typed(homeHeading[0], options)
}

export { basPierenHome }
