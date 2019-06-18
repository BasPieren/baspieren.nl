import * as helper from "../helper.js"

function mobileNav() {
	const body = document.querySelector("body"),
		headerHeading = document.querySelector("header h4 span"),
		headerHamburger = document.querySelector("header button"),
		aside = document.querySelector("aside")

	const arr = [
		{ element: body, class: "overflow-hidden" },
		{ element: headerHeading, class: "text-color-secondary" },
		{ element: headerHeading, class: "text-color-comment" },
		{ element: headerHamburger, class: "text-color-secondary" },
		{ element: aside, class: "show" }
	]

	helper.classToggleClick(headerHamburger, arr)
}

export { mobileNav }
