<<<<<<< HEAD
// Variável global que mantém o contador do carrinho.
let cartCounter = 0;

/**
 * Função que cria e renderiza um cartão (card) com base em um índice fornecido.
 * @param {number} index - O índice do cartão.
 * @returns {HTMLElement} - O elemento HTML representando o cartão.
 */
function renderCard(index) {
=======
// JavaScript Code Documentation (en-uk)

// Global variable that keeps track of the cart counter.
let cartCounter = 0;

/**
 * Generates an HTML card element for a product.
 *
 * @param {Object} product - The product object containing details like name, description, and price.
 * @returns {HTMLDivElement} - The card element representing the product.
 */
function renderCard(product) {
    // Create a new card div element.
>>>>>>> development
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-3 col-sm-6 mb-3";

    // Populate the card div with HTML content.
    cardDiv.innerHTML = `
    <div class="card">
<<<<<<< HEAD
          <img src="https://picsum.photos/id/${index + 910}/200/300" class="card-img-top object-fit-cover" alt="Card image cap"
            height="200px">
          <div class="card-body">
            <h5 class="card-title">Card ${index}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <button class="btn btn-primary cart-button" data-action="add">Adicionar ao carrinho</button>
=======
          <img src="${product.mainImageURL}" class="card-img-top object-fit-cover" alt="Card image cap"
            height="200px">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><b>R$${product.price},00</b></p>
            <button class="btn btn-primary cart-button" data-action="add">Add to Cart</button>
>>>>>>> development
          </div>
    </div>
    `;

<<<<<<< HEAD
    // Adiciona um evento de clique ao botão do carrinho para alternar entre "Adicionar" e "Remover".
=======
    // Add a click event to the cart button to toggle between "Add" and "Remove".
>>>>>>> development
    const cartButton = cardDiv.querySelector(".cart-button");
    cartButton.addEventListener("click", () => toggleCartButton(cardDiv, cartButton));

    return cardDiv;
}

/**
<<<<<<< HEAD
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
=======
 * Toggles the state of the "Add to Cart" button between "Add" and "Remove".
 *
 * @param {HTMLDivElement} cardDiv - The card element associated with the product.
 * @param {HTMLButtonElement} cartButton - The "Add to Cart" button element.
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

    // Update the cart counter display.
    updateCounter();
}

/**
 * Renders a section of product cards on the web page.
 */
async function renderCardsSection() {
    const cardContainer = document.getElementById('card-container');
    const products = await fetchProducts();

    for (let i = 0; i < products.length; i++) {
        const card = renderCard(products[i]);
>>>>>>> development
        cardContainer.appendChild(card);
    }
}

/**
<<<<<<< HEAD
 * Função que atualiza o contador do carrinho no elemento HTML apropriado.
=======
 * Asynchronously fetches product data from a JSON file.
 *
 * @returns {Promise} - A promise that resolves to an array of product objects.
 */
async function fetchProducts() {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    return data;
}

/**
 * Updates the cart counter display on the web page.
>>>>>>> development
 */
function updateCounter() {
    const counter = document.querySelector(".counter");
    counter.textContent = cartCounter;
}

<<<<<<< HEAD
renderCardsSection(9);
=======
// Trigger the rendering of product cards.
renderCardsSection();
>>>>>>> development
