function updateProductDetails(product) {
    if (product) {
        document.getElementById('productName').textContent = product.title;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productCategory').textContent = product.category;
        document.getElementById('productPrice').textContent = product.price;

        updateAdditionalImages(product.images);
    } else {
        alert("Product not found!")
    }
}

// existe ou não?
function updateAdditionalImages(images) {
    const imageList = document.getElementById('imageList');
    imageList.innerHTML = '';

    images.forEach((imageURL) => {
        const imageCol = document.createElement('div');
        imageCol.className = 'col-md-4';
        const image = document.createElement('img');
        image.src = imageURL;
        image.className = 'w-100 object-fit-cover';
        image.height = '300';
        imageCol.appendChild(image);
        imageList.appendChild(imageCol);
    });
}

async function fetchProductDetails(productId){
    const response = await fetch('./data/data.json');
    const data = await response.json();
    const product = data.find((product) => product.id === parseInt(productId));
    return product;
}


const productId = 1;

fetchProductDetails(productId)
  .then(updateProductDetails)
  .catch((error) => {
    console.error(error);
  });
