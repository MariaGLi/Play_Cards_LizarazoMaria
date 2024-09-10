let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
const Carta = document.getElementById(card)

function Play_Cards(){
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        let Deck_Id = `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
        
        fetch(Deck_Id)
        .then(res => res.json())
        .then (cards =>{
            Carta.innerHTML=`
            <img src=${cards.cards.images}>
            `
        })
    });
    

    
};
Play_Cards()