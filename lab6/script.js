const mealTitle = document.getElementById("meal-title");
const mealDescription = document.getElementById("meal-description");

document.getElementById("chicken-button").addEventListener("click", function () {
  mealTitle.textContent = "Chicken and Rice";

  mealDescription.textContent =
    "Chicken and rice is an easy and healthy meal-prep option. Season and bake or grill chicken, then serve it with rice and vegetables such as broccoli, peppers, or green beans.";
});

document.getElementById("alfredo-button").addEventListener("click", function () {
  mealTitle.textContent = "Alfredo Pasta";

  mealDescription.textContent =
    "Alfredo pasta is a creamy, comforting meal-prep choice. Cook your favorite pasta, mix it with Alfredo sauce, and add grilled chicken and broccoli for extra protein and vegetables.";
});

document.getElementById("taco-button").addEventListener("click", function () {
  mealTitle.textContent = "Taco Bowls";

  mealDescription.textContent =
    "Taco bowls are simple to customize for the week. Add seasoned ground beef or chicken, rice, beans, corn, salsa, cheese, lettuce, and any other toppings you enjoy.";
});