const artworks = [
  {
    id: 1,
    name: "Into the walls",
    price: 450.0,
    artist: "Ria Arante",
    image: "images/sculpt.png",
  },

  {
    id: 2,
    name: "Wallowing walls",
    price: 45.99,
    artist: "Hettie Richards",
    image: "images/sculpt2.png",
  },

  {
    id: 3,
    name: "J Resistance",
    price: 299.99,
    artist: "Ria Arante",
    image: "images/sculpt3.png",
  },

  {
    id: 4,
    name: "Warm Basket",
    price: 29.99,
    artist: "Flora Powers",
    image: "images/sculpt4.png",
  },

  {
    id: 5,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "images/sculpt5.png",
  },
  {
    id: 6,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "images/sculpt6.png",
  },
  {
    id: 7,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "images/sculpt7.png",
  },
  {
    id: 8,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "images/sculpt8.png",
  },
  {
    id: 9,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "images/sculpt9.png",
  },
  {
    id: 10,
    name: "The Vonnegut",
    price: 300.99,
    artist: "Ria Arante",
    image: "images/sculpt10.png",
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

    window.location.href = `sculpture.html?id=${productId}`;
  });
});
