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
