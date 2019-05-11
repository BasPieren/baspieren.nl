function  homeTypingAni() {
  const options = {
    strings: ["Hallo!", "Bonjour!", "Hello!", "Guten Tag!", "Hola!"],
    smartBackspace: true,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    typeSpeed: 100
  },
  typed = new Typed(".pb-greeting-message", options)
}

export { homeTypingAni }
