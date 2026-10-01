let bankBalance = 100;
const withdrawAmount = 25;
const depositAmount = 25;

function withdraw() {
    bankBalance = bankBalance - withdrawAmount;

    const balanceText = document.getElementById("balance-display");
    const statusText = document.getElementById("status-message");

    if(bankBalance > 0)
    {
        balanceText.innerText = bankBalance;
    }
    else
    {
        balanceText.innerText = 0;
        statusText.innerText = "You are broke...";
        document.body.style.backgroundColor = "#5a1a1a";

        document.getElementById("withdraw").disabled = true;
        document.getElementById("withdraw").innerText = "No";
    }

    balanceText.innerText = bankBalance
}

function deposit() {
    if(bankBalance === 0)
    {
        const statusText = document.getElementById("status-message");
        statusText.innerText = "Choose an option";

        document.body.style.backgroundColor = "#008b8b";
        document.getElementById("withdraw").disabled = false;
        document.getElementById("withdraw").innerText = "Withdraw $25";
    }

    bankBalance = bankBalance + depositAmount;

    const balanceText = document.getElementById("balance-display")

    balanceText.innerText = bankBalance
}

// function takeDamage() {
//     playerHealth = playerHealth - damageAmount;

//     const healthText = document.getElementById("health-display");
//     const statusText = document.getElementById("status-message");

//     if(playerHealth > 0)
//     {
//         healthText.innerText = playerHealth;
//         statusText.innerText = "You've been hit!";
//     }
//     else
//     {
//         healthText.innerText = 0;
//         statusText.innerText = "Game Over!";
//         statusText.style.color = "#f9331d";
//         statusText.style.fontWeight = "bold";

//         document.body.style.backgroundColor = "#5a1a1a";

//         document.querySelector("button").disabled = true;
//         document.querySelector("button").innerText = "Dead";
//     }
// }