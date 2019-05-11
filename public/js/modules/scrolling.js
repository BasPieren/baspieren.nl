function  wipeNatural() {
  const controller = new ScrollMagic.Controller({
    		globalSceneOptions: {
    			triggerHook: 'onLeave',
    			duration: "200%"
    		}
		}),
		slides = document.querySelectorAll("section")

    slides.forEach( i => {
      new ScrollMagic.Scene({
					triggerElement: i
				})
				.setPin(i, {pushFollowers: false})
				.addTo(controller)
    })

}

function scrollingClassToggle() {
  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: 1135
    }
  })

	new ScrollMagic.Scene({triggerElement: "#bp-home-section"})
					.setClassToggle(".bp-home-nav", "bp-active-page")
					.addTo(controller)

	new ScrollMagic.Scene({triggerElement: "#bp-about-section"})
					.setClassToggle(".bp-about-nav", "bp-active-page")
					.addTo(controller)

	new ScrollMagic.Scene({triggerElement: "#bp-work-section"})
					.setClassToggle(".bp-work-nav", "bp-active-page")
					.addTo(controller)

	new ScrollMagic.Scene({triggerElement: "#bp-contact-section"})
					.setClassToggle(".bp-contact-nav", "bp-active-page")
					.addTo(controller);
}

export { wipeNatural, scrollingClassToggle }
