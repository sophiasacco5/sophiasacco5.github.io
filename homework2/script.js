// Creating variables for our code
let linesOfCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let lunchPower = 0;
let lunchCost = 25;

let interns = 0;
let internCost = 100;

let bosses = 0;
let bossCost = 150;

// Write code when the main button is clicked
function writeCode()
{
    linesOfCode = linesOfCode + clickPower;
    updateScreen();
}

// Buy a keyboard to increase click power
function buyKeyboard()
{
    if (linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower + 1;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        updateScreen();
    }
}

// Buy lunch to increase click power
function buyLunch()
{
    if (linesOfCode >= lunchCost)
    {
        linesOfCode = linesOfCode - lunchCost;
        lunchPower = lunchPower + 1;
        clickPower = clickPower + 1;
        lunchCost = Math.ceil(lunchCost * 1.5);
        updateScreen();
    }
}

// Hire an intern to generate 1 line per second
function buyIntern()
{
    if (linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1;
        internCost = Math.ceil(internCost * 1.5);
        updateScreen();
    }
}

// Hire a boss to generate 5 lines per second
function buyBoss()
{
    if (linesOfCode >= bossCost)
    {
        linesOfCode = linesOfCode - bossCost;
        bosses = bosses + 1;
        bossCost = Math.ceil(bossCost * 1.5);
        updateScreen();
    }
}

// Update all numbers on the page
function updateScreen()
{
    document.getElementById("score-display").innerText =
        linesOfCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;

    document.getElementById("lunch-power-display").innerText = lunchPower;
    document.getElementById("cost-lunch-display").innerText = lunchCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("cost-intern-display").innerText = internCost;

    document.getElementById("boss-display").innerText = bosses;
    document.getElementById("cost-boss-display").innerText = bossCost;
}

// Generate code automatically every second
setInterval(function()
{
    linesOfCode = linesOfCode + interns + (bosses * 5);
    updateScreen();
}, 1000);

// Show the starting values
updateScreen();