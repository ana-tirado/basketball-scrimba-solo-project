/*HOME POINTS*/

let homePointsText = document.getElementById("home-points-text")
let homePointsBtn1 = document.getElementById("home-points-btn-1")

homePoints = 0
homePointsText.textContent = 0

function add1PointHome() {
    homePoints += 1
    homePointsText.textContent = homePoints
}

function add2PointsHome() {
    homePoints += 2
    homePointsText.textContent = homePoints
}

function add3PointsHome() {
    homePoints += 3
    homePointsText.textContent = homePoints
}

/*GUEST POINTS */

let guestPointsText = document.getElementById("guest-points-text")

guestPoints = 0
guestPointsText.textContent = 0

function add1PointGuest() {
    guestPoints += 1
    guestPointsText.textContent = guestPoints
}

function add2PointsGuest() {
    guestPoints += 2
    guestPointsText.textContent = guestPoints
}

function add3PointsGuest() {
    guestPoints += 3
    guestPointsText.textContent = guestPoints
}

/* HOME FOULS */

let homeFoulsText = document.getElementById("home-fouls-text")
let homeFouls = 0
homeFoulsText.textContent = 0

function add1HomeFoul() {
    homeFouls +=1
    homeFoulsText.textContent = homeFouls
}

/* GUEST FOULS */

let guestFoulsText = document.getElementById("guest-fouls-text")
let guestFouls = 0
guestFoulsText.textContent = 0

function add1GuestFoul() {
    guestFouls += 1
    guestFoulsText.textContent = guestFouls
}

/* PERIOD */

let periodText = document.getElementById("period-text")
let period = 0
periodText.textContent = 0

function add1Period() {
    period += 1
    periodText.textContent = period
}

/* NEW GAME */

function startNewGame() {
    homePoints = 0
    homePointsText.textContent = 0
    
    guestPoints = 0
    guestPointsText.textContent = 0
    
    homeFouls = 0
    homeFoulsText.textContent = 0
    
    guestFouls = 0
    guestFoulsText.textContent = 0
    
    period = 0
    periodText.textContent = 0
}