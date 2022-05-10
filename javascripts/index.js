//need to make data available globally, set data to variable with empty array [], populate that array w data, then sort that array (24min joke vid)
//add button that highlights free activity which filter or highlights a certain type of activity
//create db.json to save and filter-  no clue how else to iterate
 //everything works up intil i try to create elements for db, save to db, and pull our of db + post requests 

 //cause
 //effect
//result

const BASE_URL = 'https://www.boredapi.com/api' 

//global variable
//let activity = [];

document.addEventListener('DOMContentLoaded', () => {
fetchSolo() //load random activity to page 
fetchGroup() //load random group activity
addElements()
//fetchFree() //highlights or keeps 0 price activities on page
//fetchStoredActivity()//fetches db.json stored-not sure if needs to be on startup
//document.querySelector("#free-refresh").addEventListener("click", addActivities) //returns button node
})


const fetchSolo = () => { 
    const li = document.getElementById('solo');
    fetch(BASE_URL + `/activity?participants=1`)
    .then(response => response.json())
    .then(data => {
        li.innerHTML += `
        <h1>Solo Activity: ${data.activity}</h1>
        <h3>Type: ${data.type}</h3> 
        <h3>Participants: ${data.participants}</h3>
        <h3>Estimated Price: $${data.price}</h3>`
    })

    //console.log(li)
    fetchActivity()
}
    // let single = document.getElementById("single")
    // let type = document.getElementById("type")
    // let parts = document.getElementById("parts")
    // let price = document.getElementById("price")

// change nodelist to iterable array 
const addElements = () => {
    const hone = document.querySelector("p");
    
    
    fetch(BASE_URL + `/activity?participants=1`)
    .then(response => response.json()) 
    .then(data =>{
        hone.innerHTML += 
       `<p>activity${data.activity}</p>
        <p>${data.type}</p>
        <p>Parts ${data.participants}</p>
        <p>$${data.price}</p>`
        let pList = document.querySelectorAll("p")
        console.log(pList)
        let nlist = [...pList].map(n => n.textContent)
        console.log(nlist) //now gettitng bck an array but its an array of just this one activity. 
        // const filtered = [...pList].filter(n=> n.textContent.includes($0))
        // console.log(filtered)
        //    const filtered = [] filter nodelist javascript

    //    pList.forEach(el => {
    //     //if(el.textContent.includes('0.0')) {
    //         filtered.push(el)
    //     }) 
       
    })

}
const highlightFree=()=> { //iterate through bucket classes to find 0.0 and highlight them- no need for db.json
    const high = document.querySelectorAll(".bucket")
    console.log(high)
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


const fetchGroup = () => { 
        const li = document.getElementById('group'); 
    fetch(BASE_URL + `/activity?participants=2`)
    .then(response => response.json())
    .then(data => { //if im creating a nodelist within a function here- how do i access it by another function?
        li.innerHTML += `
        <h1>Group Activity: ${data.activity}</h1>   
        <h3>Type: ${data.type}</h3> 
        <h3>Participants: ${data.participants}</h3>
        <h3>Estimated Price: $${data.price}</h3>`
        
    })
        fetchParticipants()
        //must only print if data.participants > 1
}

//fetches my db.json info-where do i want this to happen?
// async function fetchStoredActivity(){
//     let response = await fetch("http://localhost:3000/favorites")
//     let data = await response.json()
//    //  console.log(data);
    
//     const acts = document.querySelector(".bucket") //grabbing node on the dom
//     acts.innerHTML = renderAllActs(data) //getting acts from api
//     return data
// };

function addFavToRenderedActivities() {

}
//EventListeners
function fetchActivity(){
    document.getElementById('refresh').addEventListener('click', fetchSolo)
}

function fetchParticipants(){
    document.getElementById('group-refresh').addEventListener('click', fetchGroup)
} 


//should print my db.json to console log but does not 
// const fetchFree = () => {
//     const li = document.getElementById("active")
//     fetchStoredActivity()
//     .then(data => {
//         data.forEach(favorites => {
//             li.innerHTML += `<h1>Group Activity: ${data.activity}</h1>`
//         })}) 
//     //console.log(favorites)
// }



 //new array filled with renderSingleActFromDb divs- array of strings that are divs- 
//  function renderAllActs(acts){
//     return acts.map(ac => renderSingleActFromDb(ac)).join("")
//  }

 //div generator
//  function renderSingleActFromDb(act){
//      return `
//         <div class="activity-card" id="${act.id}">
//             <h1>${act.activity}</h1>
//             <button data-action="delete" class="activity-delete-Dutton">delete</button>
//     </div>
//     `
//  }


// //not shown to work yet
// const renderAct = () => {
//     const ul = document.createElement("ul")
//     activity.forEach(activity => renderActs(activity, ul))
//     selectElementById("active").appendChild(ul)
//     console.log(activity)
// }
// //not shown to work yet
// const renderActs = (activity, ul) => {
//     const li = document.createElement("li")
//     li.innerText = activity.activity
//     ul.appendChild(li)
// }
//add button that pulls/favorites data out to db.json

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


// function filterFree(){
//     document.getElementById('free-refresh').addEventListener('click', fetchFree) //OR querySelector
// }



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


// //grab 
// function addActivities() {
//     //key:value pair, created object called object
//     const act = {
//         activity: document.querySelector(".bucket").value   
//     };
//     fetch("http://localhost:3000/favorites"), {
//         method: "POST", 
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify(act)
//     }
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
// }

//find a way around liveserver-
//figure out how to push branches to save then start over from your save
//delete everythign unused and start from this mornings 'save' point mentally 
//take off all css if that issue persists
//add a fav button on every rendered activity-
//add a function sendsInfoToDb(){}//POSTING INFO TO CREATE ARRAY 
//function retrieveFilteredInfoFromDb(){} //one button to filter bd.json- sends fetch from their . filter(by data.price > 0)

