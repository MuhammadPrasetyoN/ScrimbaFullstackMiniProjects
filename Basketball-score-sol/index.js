let homeEl = document.getElementById("home-point");
let guestEl = document.getElementById("guest-point");
let homeCount = 0;
let guestCount = 0;

function incrementHome(points) {
  homeCount += points;
  homeEl.textContent = homeCount;
}

function incrementGuest(points) {
  guestCount += points;
  guestEl.textContent = guestCount;
}

function newGame() {
  homeCount = 0;
  guestCount = 0;
  homeEl.textContent = homeCount;
  guestEl.textContent = guestCount;
}
