function goHome() {
    open("/","_self")
}

const modalOverlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click",function(){
        modalOverlay.classList.add("active")
        var id_receita = card.getAttribute("id")
        document.querySelector(".modal_img").src=`/${id_receita}.png`
        retorna_texto(id_receita)
    })
}

function retorna_texto(id_receita) {
    var receita = `<b>Receita de ${id_receita}</b><br>fhaeui sdufhuis hf orfhsf blkzkdvnld osadhsidf;sdihfosafuh woeuhfsdbfdsfhd.</br>`
    document.getElementById('card_content').innerHTML = receita
}

function fecha_modal() {
    modalOverlay.classList.remove("active")
}