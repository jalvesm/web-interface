// Global variable that keeps track of the cart counter.
let cartCounter = 0;

/**
 * Creates and renders a card based on the provided index.
 * @param {number} index - The index of the card.
 * @returns {HTMLElement} - The HTML element representing the card.
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
            <button class="btn btn-primary cart-button" data-action="add">Add to Cart</button>
          </div>
    </div>
    `;

    // Add a click event to the cart button to toggle between "Add" and "Remove".
    const cartButton = cardDiv.querySelector(".cart-button");
    cartButton.addEventListener("click", () => toggleCartButton(cardDiv, cartButton));

    return cardDiv;
}

/**
 * Toggles the "Add to Cart" button state between "Add" and "Remove".
 * It also updates the cart counter.
 * @param {HTMLElement} cardDiv - The card's HTML element.
 * @param {HTMLElement} cartButton - The cart button.
 */
function toggleCartButton(cardDiv, cartButton) {
    const action = cartButton.getAttribute("data-action");

    if (action === "add") {
        cartButton.textContent = "Remove from Cart";
        cardDiv.classList.add("added");
        cartButton.classList.remove("btn-primary");
        cartButton.classList.add("btn-secondary");
        cartButton.setAttribute("data-action", "remove");
        cartCounter++;
    } else {
        cartButton.textContent = "Add to Cart";
        cardDiv.classList.remove("added");
        cartButton.classList.remove("btn-secondary");
        cartButton.classList.add("btn-primary");
        cartButton.setAttribute("data-action", "add");
        cartCounter--;
    }

    updateCounter();
}

/**
 * Renders a section of cards based on the specified number of cards.
 * @param {number} numCards - The number of cards to be rendered.
 */
function renderCardsSection(numCards) {
    const cardContainer = document.getElementById('card-container');

    for (let i = 0; i < numCards; i++) {
        const card = renderCard(i + 1);
        cardContainer.appendChild(card);
    }
}

/**
 * Updates the cart counter on the appropriate HTML element.
 */
function updateCounter() {
    const counter = document.querySelector(".counter");
    counter.textContent = cartCounter;
}

renderCardsSection(9);