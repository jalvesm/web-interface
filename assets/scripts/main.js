// Global variable that keeps track of the cart counter.
let cartCounter = 0;

/**
 * Creates and renders a card based on the provided index.
 * @param {number} index - The index of the card.
 * @returns {HTMLElement} - The HTML element representing the card.
 */
function renderCard(product) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-3 col-sm-6 mb-3";

    cardDiv.innerHTML = `
    <div class="card">
          <img src="${product.mainImageURL}" class="card-img-top object-fit-cover" alt="Card image cap"
            height="200px">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><b>R$${product.price},00</b></p>
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
async function renderCardsSection() {
    const cardContainer = document.getElementById('card-container');
    const products = await fetchProducts();

    for (let i = 0; i < products.length; i++) {
        const card = renderCard(products[i]);
        cardContainer.appendChild(card);
    }
}

async function fetchProducts() {
    const response = await fetch('/data/data.json')
    const data = await response.json();
    return data;
}

/**
 * Updates the cart counter on the appropriate HTML element.
 */
function updateCounter() {
    const counter = document.querySelector(".counter");
    counter.textContent = cartCounter;
}

renderCardsSection(9);