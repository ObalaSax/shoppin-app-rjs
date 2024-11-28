import p1 from "./assets/lorem-ipsum-dolor-t-shirt.jpg";
import p2 from "./assets/images.jpeg";
import p3 from "./assets/4.jpg";
import p4 from "./assets/5.jpg";
import p5 from "./assets/toy.jpg";

let product = [
  {
    id: 1,
    productName: "T-Shirt",
    productImage: p1,
    newPrice: 300,
    oldPrice: 250,
  },
  {
    id: 2,
    productName: "Kitu lejit",
    productImage: p2,
    newPrice: 2500,
    oldPrice: 2000,
  },
  {
    id: 3,
    productName: "Mali Safi",
    productImage: p3,
    newPrice: 4000,
    oldPrice: 2000,
  },
  {
    id: 4,
    productName: "Toy",
    productImage: p5,
    newPrice: 500,
    oldPrice: 600,
  },
  {
    id: 5,
    productName: "Ile Stuff",
    productImage: p4,
    newPrice: 3000,
    oldPrice: 1500,
  },
];

let userDetails = [
  {
    id: 1,
    userName: "ObalaSax",
    pass: 123456,
  },
  { id: 2, userName: "ObalaSax", pass: 123456 },
  { id: 3, userName: "newGuy", pass: 123456 },
  { id: 4, userName: "oldGuy", pass: 123456 },
];
export default { product, userDetails };
