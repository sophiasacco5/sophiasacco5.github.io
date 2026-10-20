let currentLevel = 1;

function levelUp()
{
    currentLevel++;
    //currentLevel = currentLevel + 1;
    document.getElementById("level").innerHTML = currentLevel;
}

function saveLevel()
{
    localStorage.setItem("savedLevel", currentLevel);
    alert("Level data saved!");
    //good way to test to see if functions are working 
}

function loadLevel()
{
    let retrievedData = localStorage.getItem("savedLevel");
    if(retrievedData !== null)
    {
        currentLevel= retrievedData;
        document.getElementById("level").innereText = currentLevel;
    }
    else
    {
        alert("No saved data found...");
    }
}