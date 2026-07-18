
function displayResults(resArr, parentElement)
{
    resArr.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = ` 
                        <h3> <strong> ${element.title} </strong> </h3> 
                        <p>${element.snippet}</p>
                       `

        li.addEventListener("click", () => {
            window.location.href=`https://en.wikipedia.org/?curid=${element.pageid}`;
        });
        parentElement.appendChild(li);
    });
}

const inputText = document.getElementById("inputtxt");
const searchArea = document.querySelector(".searcharea");
const arrList = document.getElementById("arr-list");

inputText.addEventListener("keypress", async (event) => {
    if(event.key == "Enter")
    {
        searchArea.classList.add("searched");
        const query = inputText.value;
        const response = await fetch('/wiki', {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query})
        });

        const data = await response.json();
        if(data)
        {
            arrList.innerHTML = "";
            displayResults(data, arrList);
        }
    }
});

