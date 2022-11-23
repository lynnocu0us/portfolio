
function openNav() {
  document.getElementById("overLay").style.display = "block";
}

function closeNav() {
  document.getElementById("overLay").style.display = "none";
}



var body = document.body,
  overlay = document.querySelector('.overlay-background'),
  overlayBtts = document.querySelectorAll('overLay');

[].forEach.call(overlayBtts, function(btt) {
  "use strict";
  btt.addEventListener('click', function() {

    /* Detect the button class name */
    var overlayOpen = this.className === 'overLay';

    /* Toggle the aria-hidden state on the overlay and the no-scroll class on the body */
    overlay.setAttribute('aria-hidden', !overlayOpen);
    body.classList.toggle('noscroll', overlayOpen);
    /* On some mobile browser when the overlay was previously opened and scrolled, if you open it again it doesn't reset its scrollTop property */
    overlay.scrollTop = 0;
  }, false);
});


