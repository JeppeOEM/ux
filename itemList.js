// Til forsiden - Bruges til at "filtrere" items i 2 kategorier
// Jo, jeg kunne gøre det på en "mere rigtig" måde, men hvorfor det, når dette fungerer så fint? :D

const historieItem = document.querySelector("#historie")
const byItem = document.querySelector("#by")

const historieTrigger = document.querySelector("#historie-btn")
const byTrigger = document.querySelector("#by-btn")

function historieBtn() {
    historieItem.classList.remove("hidden")
    historieTrigger.classList.add("active")
    byItem.classList.add("hidden")
    byTrigger.classList.remove("active")
}

function byBtn() {
    byItem.classList.remove("hidden")
    byTrigger.classList.add("active")
    historieItem.classList.add("hidden")
    historieTrigger.classList.remove("active")
}