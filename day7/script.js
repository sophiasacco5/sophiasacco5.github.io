let playerHealth = 100;
const damageAmount = 30;

function takeDamage() {
    playerHealth = playerHealth - damangeAmount;

    const healthText = document.getElementById("health-display");
    const statusText = document.getElementById("status-message");

    health-text.innerText = playerHealth;
    
}