// // Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza,
// //  but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  let pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

let pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log(pizza1);
let pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);
let pizza3 = pizzaOven(
  "new york style",
  "creamy white sauce",
  ["mozzarella", "american"],
  ["sausage", "olives", "onions"]
);
console.log(pizza3);
let pizza4 = pizzaOven("grandma pizza", "classic tomato sauce", "parmesan", [
  "sausage",
  "green pepper",
  "fresh garlic",
]);
console.log(pizza4);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!
// arrays used to generate the random pizzas
let crustTypes = [
  "new york crust",
  "sicilian crust",
  "hand tossed",
  "chicago style deep dish",
  "neapolitan",
  "flat bread",
  "gluten free",
  "vegan friendly",
];

let sauceTypes = [
  "tomato sauce",
  "white sauce",
  "garlic paste",
  "mayonnaise",
  "barbecue",
  "honey mustard",
];

let cheeses = [
  "cheddar",
  "mozzarella",
  "ricotta",
  "provolone",
  "parmesan",
  "gouda",
];

let toppings = [
  "green peppers",
  "mushroom",
  "red onions",
  "italian sausage",
  "pepperoni",
  "black olives",
  "fresh garlic",
  "chicken",
];

// math.floor is used with math.random to return the largest integer less than the index of the given array.
function getRandomArrayIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomPizza() {
  let crustType = crustTypes[getRandomArrayIndex(crustTypes)];
  let sauceType = sauceTypes[getRandomArrayIndex(sauceTypes)];
  let cheese = cheeses[getRandomArrayIndex(cheeses)];
  let topping = toppings[getRandomArrayIndex(toppings)];
  console.log(
    "Random pizza generated - ",
    pizzaOven(crustType, sauceType, cheese, topping)
  );
}

randomPizza();
