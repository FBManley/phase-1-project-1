//need to make data available globally, set data to variable with empty array [], populate that array w data, then sort that array (24min joke vid)
//add button that 'filter' by cost; if costs >0 then take off page
//create db.json to save and filter-  no clue how else to iterate
 const BASE_URL = 'https://www.boredapi.com/api' 

document.addEventListener('DOMContentLoaded', () => {
fetchSolo() //load random activity to page 
fetchGroup() //load random group activity
//fetchFree() //highlights or keeps 0 price activities on page
})


const fetchSolo = () => { 
    const li = document.getElementById('solo');
    fetch(BASE_URL + `/activity/`)
    .then(response => response.json())
    .then(data => {
        li.innerHTML += `
        <h1>Solo Activity: ${data.activity}</h1>
        <h3>Type: ${data.type}</h3> 
        <h3>Participants: ${data.participants}</h3>
        <h3>Estimated Price: $${data.price}</h3>`
       // console.log(data)
        // li.parentNode = [...data.price]
        
        // li.filter(data.price = 0)
    })

    //document.querySelector(li) //grab array 
    console.log(li)
    fetchActivity()
}
 

const fetchGroup = () => { 
        const li = document.getElementById('group');
    fetch(BASE_URL + `/activity/`)
    .then(response => response.json())
    .then(data => { //if im creating a nodelist within a function here- how do i access it by another function?
        li.innerHTML += `
        [<h1>Group Activity: ${data.activity}</h1>   
        <h3>Type: ${data.type}</h3> 
        <h3>Participants: ${data.participants}</h3>
        <h3>Estimated Price: $${data.price}</h3>]`
        
    })
        fetchParticipants()
        //must only print if data.participants > 1
}


// function matchZero(){
//     return data.price === document.getElementById("solo").value
// }

// function fetchFree(){
//     document.querySelectorAll("bucket").innerHTML = array.filter(matchZero) //grab nodes created in prev functions
    
// }
// function find(){
//     document.querySelector()
// }


// const filterFree = () => {
//     //filter by price by taking off any activity on the dom <0 price
//     // pass through solo and group functions to filter
//     fetchGroup.filter()


// // }

function fetchActivity(){
    document.getElementById('refresh').addEventListener('click', fetchSolo)
}

function fetchParticipants(){
    document.getElementById('group-refresh').addEventListener('click', fetchGroup)
} 

function filterFree(){
    document.getElementById('free-refresh').addEventListener('click', fetchFree) //OR querySelector
}



//now i need to filter fetchGroup by type using foreach/.map

//bonus: use same containers for 
//how do my dataget on/connect to the page
//what do I need to render?
//where do I get my data? 

// function renderActivity() {
//     const h1 = document.createElement("h1")

//     h1.innerText = "activity list page"

//     renderActivities()
  
// }
// const renderActivities = (activity, ul) => {
//     const li = document.createElement("li")
    
//     li.innerText = todo.todo
//     ul.appendChild(li)
// }  
// const ul = document.createElement("ul");
// todo.forEach(todo => rendertoDos(todo, ul))