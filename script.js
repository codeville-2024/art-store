// const products = [
//   { name: "abc", price: 19.99, image: "1.png" },
//   { name: "abc", price: 279.99, image: "2.png" },
//   { name: "abc", price: 190.99, image: "3.png" },
//   { name: "abc", price: 89.99, image: "4.png" },
//   { name: "abc", price: 99.99, image: "5.png" },
// ];

// const productList = document.getElementById("productList");

// products.forEach((product) => {
//   const listItem = document.createElement("p");
//   listItem.setAttribute("class", "productText");
//   const itemImage = document.createElement("img");
//   itemImage.setAttribute("class", "productImage");
//   const itemDiv = document.createElement("div");
//   itemDiv.setAttribute("class", "itemContainer");
// });

// itemImage.src = `${product.image}`;
// listItem.textContent = `${product.name} - $${product.price}`;
// itemDiv.appenChild(listItem);
// itemDiv.appenChild(itemImage);
// productList.appenChild(itemDiv);

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

const list = document.getElementById("art-list");

artworks.forEach((artwork) => {
  const newDiv = document.createElement("div");
  list.appendChild(newDiv);
  newDiv.id = "paintings";
  newDiv.innerHTML = `<img src="${artwork.image}"/>
<p>${artwork.name}</p>
<p>${artwork.price}</p>
<p>${artwork.artist}</p>
`;

  // Let productId as a block-scoped variable
  let productId = artwork.id;
  newDiv.addEventListener("click", () => {
    // redirect to the details page with the product ID as a parameter

    window.location.href = `paintings.html?id=${productId}`;
  });
});
