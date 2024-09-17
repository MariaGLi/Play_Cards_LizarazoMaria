let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
const btn = document.getElementById('btn')
let image_png = []
let value_card = []

function Play_Cards(){
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        let Deck_Id = `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=5`
        console.log(Deck_Id);
        
        
        fetch(Deck_Id)
        .then(res => res.json())
        .then(carta =>{
            console.log(carta);
            
            carta.cards.forEach(bucle =>{
                document.getElementById('carta').innerHTML+=`
                <img class="Seleccionar" data-id="${bucle.code}" src="${bucle.images.png}">
                `
                document.querySelectorAll(".Seleccionar").forEach(button =>{
                    button.addEventListener("click",Comparador)
                }); 

                image_png.push(bucle.images.png);
                value_card.push(bucle.code);
            });
            function aleatorio(menor, mayor) {
                var numPosib = mayor - menor;
                var aleatorio = Math.random() * (numPosib + 1);
                aleatorio = Math.floor(aleatorio);
                return menor + aleatorio;
            }
            var numbAleatorio = aleatorio(0, 4);
            document.getElementById('carta2').innerHTML=`
            <img id="photo_card" src="https://deckofcardsapi.com/static/img/back.png">`

            function Comparador(e){
                const id = e.target.getAttribute("data-id")
                if (value_card[numbAleatorio] === id){
                    prompt("Ganaste")
                }
                
            }

        })
    }); 
};
Play_Cards()