let playerHealth = 100;
const damageAmount = 30;

function takeDamage() {
    playerHealth = playerHealth - damangeAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

    health-text.innerText = playerHealth;

    if(playerHealth > 0)
    {
        healthText.innerText = playerHealth;
        statusText.innerText = "You've been hit!";
    }
    else
    {
        healthText.innerText = 0; 
        statusText.innerText = "Game Over!";
    }
}