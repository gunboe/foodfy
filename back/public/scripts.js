function goHome() {
    open("/","_self")
}

const modalOverlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    var stars = card.getAttribute("stars")
    var id_receita = card.getAttribute("id")
    var receita = card.getAttribute("receita")

    // Atribuiçao de Stars
    document.getElementById(`stars_${id_receita}`).innerHTML = stars+'<span class="material-symbols-outlined">star</span>'

    // Criação de eventos para o Modal
    card.addEventListener("click",function(){
        modalOverlay.classList.add("active")
        var stars = card.getAttribute("stars")
        var id_receita = card.getAttribute("id")
        var receita = card.getAttribute("receita")
    
        document.querySelector(".modal_img").src=`/${id_receita}.png`
        retorna_texto(id_receita,receita,stars)
    })
}
 
function retorna_texto(id_receita,receita,stars) {
    // Conteudo estático
    // var receita = `<b>Receita de ${id_receita}</b><br>fhaeui sdufhuis hf orfhsf blkzkdvnld osadhsidf;sdihfosafuh woeuhfsdbfdsfhd.</br>`
    // document.getElementById('card_content').innerHTML = receita

    // Conteudo dinamico do arquivo data.js
    // Obter receita_content de json_data.card_content
    //var listaReceitas = JSON.parse
    var content_receita = `<b>Receita de ${id_receita}</b><br>`+receita
    document.getElementById('card_content').innerHTML = content_receita
    document.getElementById('stars_modal').innerHTML = stars+'<span class="material-symbols-outlined">star</span>'
}

function fecha_modal() {
    modalOverlay.classList.remove("active")
}