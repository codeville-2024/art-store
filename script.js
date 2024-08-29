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
    name: "Into the walls",
    price: 450.0,
    artist: "Ria Arante",
    image: "/images/Painting.png",
  },

  {
    name: "Wallowing walls",
    price: 299.99,
    artist: "Hettie Richards",
    image: "/images/Painting1.png",
  },

  {
    name: "J Resistance",
    price: 299.99,
    artist: "Ria Arante",
    image: "/images/Painting2.png",
  },

  {
    name: "Warm Basket",
    price: 299.99,
    artist: "Flora Powers",
    image: "/images/Painting3.png",
  },

  {
    name: "The Vonnegut",
    price: 299.99,
    artist: "Ria Arante",
    image: "/images/Painting4.png",
  },
];

const list = document.getElementById("art-list");

artworks.forEach((artwork) => {
  const item = document.createElement("p");
  item.setAttribute("class", "productText");
  const imagery = document.createElement("img");
  imagery.setAttribute("class", "productImage");
  const divly = document.createElement("div");
  divly.setAttribute("class", "itemContainer");
});

imagery.src = `${artwork.image}`;
item.textContent = `${artwork.name} - $${artwork.price}-$${artwork.artist}`;
divly.appenChild(item);
divly.appenChild(imagery);
list.appenChild(divly);
