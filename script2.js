const artworks = [
  {
    id: 1,
    name: "Into the walls",
    price: 450.0,
    artist: "Ria Arante",
    image: "/images/Painting.png",
  },

  {
    id: 2,
    name: "Wallowing walls",
    price: 45.99,
    artist: "Hettie Richards",
    image: "/images/Painting1.png",
  },

  {
    id: 3,
    name: "J Resistance",
    price: 299.99,
    artist: "Ria Arante",
    image: "/images/Painting2.png",
  },

  {
    id: 4,
    name: "Warm Basket",
    price: 29.99,
    artist: "Flora Powers",
    image: "/images/Painting3.png",
  },

  {
    id: 5,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/Painting4.png",
  },
];

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");

// assuming you have a function to retrieve the product details from the array

function getProductDetails(productId) {
  const product = artworks.find(
    (product) => product.id === parseInt(productId)
  );

  if (product) {
    const artImage = document.getElementById("main");
    artImage.src = `${product.image}`;
  } else {
    console.error(`Product with ID ${productId} not found`);
  }
}

getProductDetails(productId);
