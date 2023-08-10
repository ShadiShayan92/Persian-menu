/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // ------------------------------------ appetizer

  {
    id: "shirazi_salad",
    title: "Shirazi Salad",
    description:
      "Shirazi salad is a simple and shiny Iranian salad with cucumbers and tomatoes, which is full of greens, citrus fruits and olive oil.",
    price: 7.99,
    discontinued: false,
    categories: ["appetizer"],
    imageUrl: "images/Shirazi_Salad.jpeg"
  },

  {
    id: "Kashke_bademjan",
    title: "Kashk-e Bademjan",
    description:
      "This easy and delicious vegetarian dish is full of amazing flavors and makes a great appetizer with some warm bread.",
    price: 12.99,
    discontinued: false,
    categories: ["appetizer"],
    imageUrl: "images/Kashke_bademjan.jpeg"
  },

  {
    id: "mirza_ghasemi",
    title: "Mirza Ghasemi",
    description:
      "Mirza ghasemi is a tomato and eggplant appetizer dish and it’s super easy to make at home.",
    price: 12.99,
    discontinued: false,
    categories: ["appetizer"],
    imageUrl: "images/mirza_ghasemi.jpeg"
  },

  {
    id: "dolmeh",
    title: "Dolmeh",
    description: "Dolmeh is made with grape leaves ,meat, rice and herbs. ",
    price: 10.99,
    discontinued: false,
    categories: ["appetizer"],
    imageUrl: "images/dolmeh.jpeg"
  },

  {
    id: "kuku_sabzi",
    title: "Kuku Sabzi",
    description:
      "Kuku Sabzi heaps of parsley, cilantro, dill and scallions; there are just enough eggs to bind them together!",
    price: 8.99,
    discontinued: false,
    categories: ["appetizer"],
    imageUrl: "images/kuku_sabzi.jpeg"
  },

  {
    id: "khoresht_mast",
    title: "Khoresht Mast",
    description: "Khoresh Mast is a tasty side dish from Esfahan, Iran.",
    price: 9.99,
    discontinued: false,
    categories: ["appetizer"],
    imageUrl: "images/khoresht_mast.jpeg"
  },

  // ------------------------------------ main course

  {
    id: "jujeh_kabab",
    title: "Jujeh Kabab",
    description:
      "Chicken kebab is a classic Iranian chicken kebab recipe. Chicken pieces are smothered in a delicious marinade and have a delicious flavor thanks to saffron and lemon.",
    price: 12.99,
    discontinued: false,
    categories: ["main_course"],
    imageUrl: "images/jujeh_kabab.jpeg"
  },

  {
    id: "chelow_kabab",
    title: "Chelow Kabab",
    description:
      "Chelow kebab consists of fragrant, saffron-spiced rice, grilled tomatoes, and kebab, which can be prepared with minced or sliced meat.",
    price: 7.99,
    discontinued: false,
    categories: ["main_course"],
    imageUrl: "images/chelow_kabab.jpeg"
  },

  {
    id: "ghorme_sabzi",
    title: "Ghorme Sabzi",
    description:
      "Consisting of flavorful herbs and lamb, ghormeh sabzi is a cornerstone of Persian cuisine.",
    price: 12.99,
    discontinued: false,
    categories: ["main_course"],
    imageUrl: "images/ghorme_sabzi.jpeg"
  },

  {
    id: "ghorme_sabzi",
    title: "Ghorme Sabzi",
    description:
      "Consisting of flavorful herbs and lamb, ghormeh sabzi is a cornerstone of Persian cuisine.",
    price: 12.99,
    discontinued: false,
    categories: ["main_course"],
    imageUrl: "images/ghorme_sabzi.jpeg"
  },

  {
    id: "kufteh_tabrizi",
    title: "Kufteh Tabrizi",
    description:
      "These meatballs are filled with plums, walnuts and fried onions and cooked slowly.",
    price: 13.99,
    discontinued: true,
    categories: ["main_course"],
    imageUrl: ""
  },

  {
    id: "morghe_shekam_por",
    title: "Morgh e shekam por",
    description: "The dish is usually made with smaller or extremely young chicken varieties",
    price: 15.99,
    discontinued: false,
    categories: ["main_course"],
    imageUrl: "images/morghe_shekam_por.jpeg"
  },

  {
    id: "tahchin",
    title: "Tahchin",
    description:
      "A dish of cooked rice, chicken and yogurt with a saffron color, has a crispy tadhiq at the bottom, which can be said to be the best part of it",
    price: 10.99,
    discontinued: false,
    categories: ["main_course"],
    imageUrl: "images/tahchin.jpeg"
  },

  {
    id: "khoresht_gheimeh",
    title: "Khoresht Gheime",
    description: "Beef and yellow split pea stew with roasted potatoes",
    price: 12.99,
    discontinued: false,
    categories: ["main_course"],
    imageUrl: "images/khoresht_gheimeh.jpeg"
  },

  {
    id: "fesenjoon",
    title: "Fesenjoon",
    description: "Persian Chicken Stew With Pomegranate and Walnuts",
    price: 12.99,
    discontinued: true,
    categories: ["main_course"],
    imageUrl: ""
  },

  // ------------------------------------ desert

  {
    id: "shole_zard",
    title: "Shole Zard",
    description:
      "This Iranian sweet pudding called Shelleh Zard is made from three distinct ingredients: saffron, cardamom and rose water.",
    price: 8.99,
    discontinued: true,
    categories: ["desert"],
    imageUrl: ""
  },

  {
    id: "halva",
    title: "Halva",
    description: "Halva is a  probably the quintessential favorite candy dessert",
    price: 4.99,
    discontinued: false,
    categories: ["desert"],
    imageUrl: "images/halva.jpeg"
  },

  {
    id: "fereni",
    title: "Fereni",
    description: "made with rice flour, sugar, milk, rose water, and a pinch of cardamom.",
    price: 5.99,
    discontinued: false,
    categories: ["desert"],
    imageUrl: "images/fereni.jpeg"
  },

  {
    id: "falude",
    title: "Falude",
    description:
      "popular Persian summer dessert drink made with various layered elements like milk, ice cream, and rose syrup.",
    price: 5.99,
    discontinued: false,
    categories: ["desert"],
    imageUrl: "images/falude.jpeg"
  },

  {
    id: "shirberenj",
    title: "Shirberenj",
    description:
      "Shir Berenj is a kind of dessert or a traditional Iranian food made with milk, rice, and rose water.",
    price: 4.99,
    discontinued: false,
    categories: ["desert"],
    imageUrl: "images/shirberenj.jpeg"
  },

  {
    id: "Persian_ice_cream",
    title: "Persian Ice Cream",
    description:
      "include either saffron or rosewater, and it’s as beautiful and as colorful as it is yummy.",
    price: 6.99,
    discontinued: false,
    categories: ["desert"],
    imageUrl: "images/Persian_ice_cream.jpeg"
  },

  {
    id: "ranginak",
    title: "Ranginak",
    description: "With only butter, flour, sugar, dates, walnuts, and various spices.",
    price: 4.99,
    discontinued: false,
    categories: ["desert"],
    imageUrl: "images/ranginak.jpeg"
  },

  {
    id: "baklava",
    title: "Baklava with Walnuts and Rosewater",
    description:
      "This recipe also calls for rosewater, cardamom, honey, sugar, and lemon juice. It’s sweet and dripping with flavor.",
    price: 8.99,
    discontinued: false,
    categories: ["desert"],
    imageUrl: "images/baklava.jpeg"
  }
];
