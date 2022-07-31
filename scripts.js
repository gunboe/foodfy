function goHome() {
    open("index.html","_self")
}

const modalOverlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click",function(){
        modalOverlay.classList.add("active")
        const id_img = card.getAttribute("id")
        document.querySelector(".modal_img").src=`../layouts/assets/${id_img}.png`
    })
}


function fecha_modal() {
    modalOverlay.classList.remove("active")
}