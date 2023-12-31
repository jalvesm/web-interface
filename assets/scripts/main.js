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
    const cardDiv = document.createElement("div");
    cardDiv.className = "col-md-3 col-sm-6 mb-3";

    // Populate the card div with HTML content.
    cardDiv.innerHTML = `
    <div class="card">
          <img src="${product.image}" class="card-img-top object-fit-cover" alt="Card image cap"
            height="200px">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-rating">Star rating: ${createStarRating(product.rating.rate)} 
            <p class="card-text">${product.description}</p>
            <p class="card-text"><b>£${product.price},00</b><br>
            <button class="btn btn-primary btn-sm cart-button" data-action="add">Add to Cart</button>
            <button type="button" class="btn btn-secondary btn-sm" onclick="redirectToDetails(${product.id})">View details</button>
          </div>
    </div>
    `;

    // Add a click event to the cart button to toggle between "Add" and "Remove".
    const cartButton = cardDiv.querySelector(".cart-button");
    cartButton.addEventListener("click", () => toggleCartButton(cardDiv, cartButton));
    return cardDiv;
}

function createStarRating(rate){
    const roundedRating = Math.round(rate);

    const filledStar = '★';
    const emptyStar = '☆';

    let starsRating = '';

    for (let i =0; i< 5; i++) {
        if (i < roundedRating) {
            starsRating += filledStar;
        } else {
            starsRating += emptyStar;
        }
    }
    return starsRating;
}


/**
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
        cardContainer.appendChild(card);
    }
}

/**
 * Asynchronously fetches product data from a JSON file.
 *
 * @returns {Promise} - A promise that resolves to an array of product objects.
 */
async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

/**
 * Updates the cart counter display on the web page.
 */
function updateCounter() {
    const counter = document.querySelector(".counter");
    counter.textContent = cartCounter;
}

function redirectToDetails(productId) {
    // Use window.location.href para navegar para details.html com o ID do produto.
    window.location.href = `details.html?id=${productId}`;
}

// Trigger the rendering of product cards.
renderCardsSection();
