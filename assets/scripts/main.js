// Variável global que mantém o contador do carrinho.
let cartCounter = 0;

/**
 * Função que cria e renderiza um cartão (card) com base em um índice fornecido.
 * @param {number} index - O índice do cartão.
 * @returns {HTMLElement} - O elemento HTML representando o cartão.
 */
function renderCard(index) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-3 col-sm-6 mb-3";

    cardDiv.innerHTML = `
    <div class="card">
          <img src="https://picsum.photos/id/${index + 910}/200/300" class="card-img-top object-fit-cover" alt="Card image cap"
            height="200px">
          <div class="card-body">
            <h5 class="card-title">Card ${index}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <button class="btn btn-primary cart-button" data-action="add">Adicionar ao carrinho</button>
          </div>
    </div>
    `;

    // Adiciona um evento de clique ao botão do carrinho para alternar entre "Adicionar" e "Remover".
    const cartButton = cardDiv.querySelector(".cart-button");
    cartButton.addEventListener("click", () => toggleCartButton(cardDiv, cartButton));

    return cardDiv;
}

/**
 * Função que alterna o estado do botão "Adicionar ao carrinho" entre "Adicionar" e "Remover".
 * Também atualiza o contador do carrinho.
 * @param {HTMLElement} cardDiv - O elemento HTML do cartão.
 * @param {HTMLElement} cartButton - O botão do carrinho.
 */
function toggleCartButton(cardDiv, cartButton) {
    const action = cartButton.getAttribute("data-action");

    if (action === "add") {
        cartButton.textContent = "Remover do carrinho";
        cardDiv.classList.add("added");
        cartButton.classList.remove("btn-primary");
        cartButton.classList.add("btn-secondary");
        cartButton.setAttribute("data-action", "remove");
        cartCounter++;
    } else {
        cartButton.textContent = "Adicionar ao carrinho";
        cardDiv.classList.remove("added");
        cartButton.classList.remove("btn-secondary");
        cartButton.classList.add("btn-primary");
        cartButton.setAttribute("data-action", "add");
        cartCounter--;
    }

    updateCounter();
}

/**
 * Função que renderiza uma seção de cartões com base no número especificado de cartões.
 * @param {number} numCards - O número de cartões a serem renderizados.
 */
function renderCardsSection(numCards) {
    const cardContainer = document.getElementById('card-container');

    for (let i = 0; i < numCards; i++) {
        const card = renderCard(i + 1);
        cardContainer.appendChild(card);
    }
}

/**
 * Função que atualiza o contador do carrinho no elemento HTML apropriado.
 */
function updateCounter() {
    const counter = document.querySelector(".counter");
    counter.textContent = cartCounter;
}

renderCardsSection(9);
