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

function saveData()
{
    let typedText = document.getElementById("data-input").value;
    sessionStorage.setItem("tempData", typedText);

    document.getElementById("data-input").value = "";
}

function loadData()
{
    let savedText = sessionStorage.getItem("tempData");

    if(savedText !== null)
    {
        document.getElementById("data").innerText = savedText;
    }
    else
    {
        alert("No session data found");
    }
}