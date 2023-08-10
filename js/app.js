/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Shadi Shayan
 *      Student ID: 135824217
 *      Date:       2022-07-31
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// appetizer
const appetizer = document.getElementById("appetizer");
// main course
const main_course = document.getElementById("main_course");
// desert
const desert = document.getElementById("desert");
// category name
const catName = document.getElementById("selected-category");
// category products
//const catPro = document.getElementById("category-products");
// card
const main_card = document.getElementById("card_div");

function card_food(product) {
  //const cardDiv = document.getElementById('cardDiv');

  //create div
  const div = document.createElement("div");
  div.setAttribute("class", "card");

  // image in div
  const images = document.createElement("img");
  images.src = product.imageUrl;
  images.setAttribute("class", "image-card");

  //h3 for title
  const name = document.createElement("h3");

  //create p for description
  const description = document.createElement("p");

  // put the price in the footer
  const price = document.createElement("footer");

  // title, description and price
  name.innerText = product.title;
  description.innerText = product.description;
  price.innerText = `$${product.price}`;

  // add the items to div
  div.appendChild(images);
  div.appendChild(name);
  div.appendChild(description);
  div.appendChild(price);
  return div;
}

// Appetizer
// when click on the appetizer button, show the list of appetizer
appetizer.addEventListener("click", () => {
  catName.innerText = "List Of Appetizers";
  main_card.innerHTML = "";
  const appe = products.filter(
    (product) => product.categories[0] === "appetizer" && !product.discontinued
  );
  appe.forEach((element) => {
    const card = card_food(element);
    main_card.appendChild(card);
  });
});

// main course
// when click on the main course button, show the list of main course
main_course.addEventListener("click", () => {
  catName.innerText = "List Of Main Courses";
  main_card.innerHTML = "";
  const main = products.filter(
    (product) => product.categories[0] === "main_course" && !product.discontinued
  );
  main.forEach((element) => {
    const card = card_food(element);
    main_card.appendChild(card);
  });
});

// desert
// when click on the desert button, show the list of desert
desert.addEventListener("click", () => {
  catName.innerText = "List Of Deserts";
  main_card.innerHTML = "";
  const dese = products.filter(
    (product) => product.categories[0] === "desert" && !product.discontinued
  );
  dese.forEach((element) => {
    const card = card_food(element);
    main_card.appendChild(card);
  });
});
