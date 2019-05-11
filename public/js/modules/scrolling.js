function  pageScrollingAni() {
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
				.addTo(controller);
    })

}

export { pageScrollingAni }
