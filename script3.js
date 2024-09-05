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
  {
    id: 6,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img.png",
  },
  {
    id: 7,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img2.png",
  },
  {
    id: 8,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img3.png",
  },
  {
    id: 9,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img4.png",
  },
  {
    id: 10,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img5.png",
  },
  {
    id: 11,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img6.png",
  },
  {
    id: 12,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img7.png",
  },
  {
    id: 13,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img8.png",
  },
  {
    id: 14,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img9.png",
  },
  {
    id: 15,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "/images/img10.png",
  },
];

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("id");
const view = document.getElementById("view");

// assuming you have a function to retrieve the product details from the array

function getProductDetails(productId) {
  const product = artworks.find(
    (product) => product.id === parseInt(productId)
  );

  if (product) {
    const img = document.getElementById("pic");
    img.src = `${product.image}`;
  } else {
    console.error(`Product with ID ${productId} not found`);
  }
}

getProductDetails(productId);

// artworks.forEach((artwork) => {
//   const newDiv = document.createElement("div");
//   list.appendChild(newDiv);
//   newDiv.id = "paintings";
//   newDiv.innerHTML = `<img src="${artwork.image}"/>
// <p>${artwork.name}</p>
// <p>${artwork.price}</p>
// <p>${artwork.artist}</p>
// `;

//   // Let productId as a block-scoped variable
//   let productId = artwork.id;
//   newDiv.addEventListener("click", () => {
//     // redirect to the details page with the product ID as a parameter

//     window.location.href = `paintings.html?id=${productId}`;
//   });
// });
