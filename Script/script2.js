let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
const btn = document.getElementById('btn')


function Play_Cards(){
    fetch(url)
    .then(res => res.json())
    .then(data=>{
        let Deck_Id = `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=2`
        
        fetch(Deck_Id)
        .then(res => res.json())
        .then (cards =>{
            cards.forEach(bucle => {
                document.getElementById('carta').innerHTML=`
                <img id="photo_card" src="${bucle.cards[0].images.png}">
                `

            });
        })
    }); 
};
Play_Cards()