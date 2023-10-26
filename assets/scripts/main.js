function renderCard() {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-3 col-sm-6 mb-3";

    cardDiv.innerHTML = `
    <div class="card">
          <img src="https://picsum.photos/id/237/200/300" class="card-img-top object-fit-cover" alt="Card image cap"
            height="200px">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a href="#" class="btn btn-primary">Adicionar ao carrinho!</a>
          </div>
    </div>
    `;
    return cardDiv;
}

function renderCardsSection(mensagem) {
    const cardContainer = document.getElementById('card-container');
    const numCards = 6;

    for (let i = 0; i < numCards; i++) {
        const card = renderCard();
        cardContainer.appendChild(card);
    }
}

renderCardsSection();