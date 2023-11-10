function updateProductDetails(product) {
    if (product) {
        document.getElementById('productName').textContent = product.title;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productCategory').textContent = product.category;
        document.getElementById('productPrice').textContent = `£${product.price}`;
    } else {
        alert("Product not found!")
    }
}

async function fetchProductDetails(productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    return product;
}


async function renderDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = await fetchProductDetails(productId);
    updateProductDetails(product);
}

renderDetails();