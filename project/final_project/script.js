const recipeSearchForm = document.getElementById("recipe-search-form");
const recipeNumber = document.getElementById("recipe-number");
const searchMessage = document.getElementById("search-message");

recipeSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (recipeNumber.value === "1") {
        window.location.href = "mac-and-cheese.html";
    } 
    
    else if (recipeNumber.value === "2") {
        window.location.href = "spaghetti-meatballs.html";
    } 
    
    else {
        searchMessage.innerText =
            "Please enter 1 for Mac and Cheese or 2 for Spaghetti and Meatballs.";
    }
});