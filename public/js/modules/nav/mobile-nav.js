import * as helper from "../helper.js"

function mobileNav() {
	const body = document.querySelector("body"),
		headerButton = document.getElementsByClassName("header__button"),
		headerButtonIcon = document.getElementsByClassName("header__button__icon"),
		mobileNav = document.getElementsByClassName("mobileNav")

	const arr = [
		{ element: body, class: "overflow--hidden" },
		{ element: headerButtonIcon[0], class: "header__button__icon--white" },
		{ element: mobileNav[0], class: "mobileNav--show" }
	]

	helper.classToggleClick(headerButton[0], arr)
}

export { mobileNav }
