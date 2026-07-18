
function displayResults(resArr, parentElement)
{
    resArr.forEach((element) => {
        const li = document.createElement('li');

        if(element.title === "Offline")
        {
            li.style.backgroundColor = "#7ea5d8";
        }
        else
        {
            li.style.backgroundColor = "#6dbb63";
        }

        li.innerHTML = `
            <div class="left">
                <img src="${element.profile_image}" />
                <a href="https://www.twitch.tv/${element.login}"> ${element.display_name} </a> 
            </div>

            <div class="right">
                <span class="streamgame">${element.game_name} </span>
                <span class="streamtitle">${element.title} </span>
            </div>
        `;

        parentElement.appendChild(li);
    });
}

window.addEventListener("DOMContentLoaded", async () => {

    const listStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    const arrList = document.getElementById("arr-list");

    const response = await fetch('/twitch', {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ streamers: listStreamers })
    });

    const data = await response.json(); 

    if(data)
    {
        arrList.innerHTML = "";
        displayResults(data, arrList);
    }
});