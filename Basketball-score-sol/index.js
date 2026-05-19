let homeEl = document.getElementById("home-point");
let guestEl = document.getElementById("guest-point");
let homeFoulsEl = document.getElementById("home-fouls");
let guestFoulsEl = document.getElementById("guest-fouls");
let periodEl = document.getElementById("period");
let homeTeamEl = document.getElementById("home-team");
let guestTeamEl = document.getElementById("guest-team");

let homeCount = 0;
let guestCount = 0;
let homeFouls = 0;
let guestFouls = 0;
let period = 1;

function incrementHome(points) {
  homeCount += points;
  homeEl.textContent = homeCount;
  updateLeader();
}

function incrementGuest(points) {
  guestCount += points;
  guestEl.textContent = guestCount;
  updateLeader();
}

function incrementHomeFouls() {
  homeFouls += 1;
  homeFoulsEl.textContent = homeFouls;
}

function decrementHomeFouls() {
  if (homeFouls > 0) {
    homeFouls -= 1;
    homeFoulsEl.textContent = homeFouls;
  }
}

function incrementGuestFouls() {
  guestFouls += 1;
  guestFoulsEl.textContent = guestFouls;
}

function decrementGuestFouls() {
  if (guestFouls > 0) {
    guestFouls -= 1;
    guestFoulsEl.textContent = guestFouls;
  }
}

function nextPeriod() {
  if (period < 4) {
    period += 1;
  } else {
    period = 1;
  }
  periodEl.textContent = period;
}

function updateLeader() {
  // Remove leader class from both teams
  homeTeamEl.classList.remove("leader");
  guestTeamEl.classList.remove("leader");

  // Add leader class to the team with higher score
  if (homeCount > guestCount) {
    homeTeamEl.classList.add("leader");
  } else if (guestCount > homeCount) {
    guestTeamEl.classList.add("leader");
  }
  // If scores are equal, neither team gets the leader class
}

function newGame() {
  homeCount = 0;
  guestCount = 0;
  homeFouls = 0;
  guestFouls = 0;
  period = 1;

  homeEl.textContent = homeCount;
  guestEl.textContent = guestCount;
  homeFoulsEl.textContent = homeFouls;
  guestFoulsEl.textContent = guestFouls;
  periodEl.textContent = period;

  updateLeader();
}
