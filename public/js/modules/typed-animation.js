function basPierenHome() {
	const homeH3 = document.querySelector("#home h3")

	const options = {
		strings: [`<span class="span--function">basPieren</span>()`],
		typeSpeed: 80,
		startDelay: 500,
		showCursor: false
	}

	const typed = new Typed(homeH3, options)
}

export { basPierenHome }
