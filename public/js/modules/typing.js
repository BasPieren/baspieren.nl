function  homeTypingAni() {
  var options = {
    strings: ["Hallo!", "Hello!", "Hola!", "Hei!", "Helo!", "Hej!"],
    smartBackspace: true,
    backSpeed: 100,
    loop: true,
    typeSpeed: 100
  }

  var typed = new Typed(".pb-greeting-message", options);
}

export { homeTypingAni }
