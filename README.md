# Phase 1 Project
'Bored?' is a single page application integrating JavaScript, HTML, CSS that communicates with a public APi (https://www.boredapi.com/api) that allows the user to retrieve and display random solo and/or group activities.

## Requirements
* json-server installed
* no keys req
* 

## How to use
*Fork and clone
*Open the index.html


/////////////////////
//keep rendered activity on page-do not empty buckets
//add button that 'filter' by cost; if costs >0 then take off page

const BASE_URL = 'https://www.boredapi.com/api' 

document.addEventListener('DOMContentLoaded', () => {
renderFact() //load random activity to page 
fetchGroup() //load random group activity
})

const renderFact = () => {
    const li = document.getElementById('activity');
    li.innerHTML = ''
    fetch(BASE_URL + `/activity/`)
    .then(response => response.json())
    .then(data => {
        li.innerHTML = `<h1>Solo Activity: ${data.activity}</h1>
        <h3>Type: ${data.type}</h3> 
        <h3>Participants: ${data.participants}</h3>
        <h3>Estimated Cost: $${data.price}</h3>
        `
        console.log(data)
    })
    fetchActivity()
}

const fetchGroup = () => {
        const li = document.getElementById('group');
        li.innerHTML = ''
    fetch(BASE_URL + `/activity/`)
    .then(response => response.json())
    .then(data => {
        li.innerHTML = `<h1>Group Activity: ${data.activity}</h1>
        <h3>Type: ${data.type}</h3> 
        <h3>Participants: ${data.participants}</h3>
        <h3>Estimated Cost: $${data.price}</h3>
       `
        })
        fetchParticipants()
}

function fetchActivity(){
    document.getElementById('refresh').addEventListener('click', renderFact)
}

function fetchParticipants(){
    document.getElementById('group-refresh').addEventListener('click', fetchGroup)
} 
//helpers
const createCard = (activity) => {
    
    const divCard = document.createElement('div')
    const divImage = document.createElement('div')
    const divcardContent = docuemnt.createElement('div')
    const pDescription = document.createElement('p')
    const divcardAction = document.createElement("card-action")
    const link1 = document.createElement('a')

    const img = document.create = "card-image"
    const span = document.create = "span"

    
    divCard.className = "card"
    divImage.className = "card-image"
    span.className = "card-title"
    divcardContent.className = "card-content"
    divcardAction.className = "card-action"


    img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLb5qaUpfo8K_7ZioaObLuaD-ddiYCLJsHw&usqp=CAU")
    link1.setAttribute("href", "##")


    span.innerText = "card title"
    pDescription.innerText = "Loren Shitsum"
    link1.innerText = "Act"

    divImage.appendChild(img);
    divImage.appendChild(span);
    divcardContent.appendChild(pDescription)
    divcardAction.appendChild(link1)

    divCard.appendChild(divImage)
    divCard.appendChild(divcardContent)
    divCard.appendChild(divcardAction)

    return divCard;
}
const renderActivities = () => {
    //iterate over activities and display them as card
    activity.forEach(activity => {
        const col = renderActivity(activity)
        row.appendChild(col)
    })
    mainDiv().appendChild(row)
}
const renderActivity = activity => {
    //render the activity to the page
    const row = document.createElement('row') 
    row.className = "row"
    const col = document.createElement('div')
    col.className = "col s12 m6"

    col.appendChild(createCard(activity))

    return col;
}