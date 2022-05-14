//need to make data available globally, set data to variable with empty array [], populate that array w data, then sort that array (24min joke vid)
//add button that highlights free activity which filter or highlights a certain type of activity
//create db.json to save and filter- not sure how to else to grab loaded api data from the dom
 
const BASE_URL = 'https://www.boredapi.com/api' 

document.addEventListener('DOMContentLoaded', () => {
    fetchSolo() //load random activity to page 
    fetchGroup() //load random group activity
    document.querySelector('#highlightsolo').addEventListener('click', highlightSolo)
//addElements()
//fetchFree() //highlights or keeps 0 price activities on page
//fetchStoredActivity()//fetches db.json stored-not sure if needs to be on startup

})


//const list = document.querySelectorAll('solos');
// document.createElement('li')
// Array.from(document.querySelector('#lost'))
 
const fetchSolo = () => { 
    let ul = document.getElementById("lost")
    let li = document.createElement("li")
    ul.appendChild(li)
    fetch(BASE_URL + `/activity?participants=1`)
    .then(response => response.json())
    .then(data => {
        li.innerHTML += `
        <h1>Solo Activity: ${data.activity}</h1>
        <h3>Type: ${data.type}</h3> 
        <h3>Participants: ${data.participants}</h3>
        <h3>Estimated Price: $${data.price}</h3>`
        //console.log(Array.from(ul)) //gives me empty array on each click
        console.log(ul) // correctly expands ul w each click 
    })
    
    fetchActivity()
}

//iterate through li nodes and highlight free events: once clicked, grabs li's, iterates, checks h3 at end of each- if so turn this li / thing red
function highlightSolo(){
    //let newArray = [];
    let x = Array.from(document.querySelectorAll('li')) //select populated nodelist and create array
    const drill = x.children[x[0].children.length-1].innerText.slice(-2) //drill into last elements in string, if so 
     drill.forEach((element => {
        if (element === 0) {
            newArray.push(element);
        }
        console.log(newArray);    
    }))
            //if above condition resolves to tru /truthy, push the item in question to a newArray 
         //iterate through li nodes

    // (checkZero) => {num => num === 0}
       
  
    //(whatever im calling each one as i terate through).children[x[0].children.length-1].innerText.slice(-2)

     //console.log(filter) //iterte over children (nodelist)
   //for each li, i need to reference the data at .children[3].innerHTML? so i can filter by that reference 

    //console.log(filtered)
    //.find((price => price[0])))
   //console.log([...high])
    //console.log(filtered)
   //console.log(filter = Array.from(high))
}
function iterateOverElements(drill, element){
    return drill.filter((element) => {
    
        return element. //in all cases where this is true- take out all elements
    })

    console.log(iterateOverElements(drill, "0"))
}    
    // if (param === 0){ //if the last two elements  in each li = 0..
    //   console.log('success')  //lightUp()
    // } else {
    //     console.log('no free lunch')//do nothing/stop
    // }


function lightUp(){
    //turn li red
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
}

//EventListeners
function fetchActivity(){
    document.getElementById('refresh').addEventListener('click', fetchSolo)
}

function fetchParticipants(){
    document.getElementById('group-refresh').addEventListener('click', fetchGroup)
} 

function fetchElements(){
    document.getElementById('free-refresh').addEventListener('click', addElements)
}






const addElements = () => {
    const createList = document.createElement("ul", { is : 'expanding-list'}).querySelectorAll("ul")

    fetch(BASE_URL + `/activity?participants=1`)
    .then(response => response.json()) 
    .then(data =>{
        createList.innerHTML += 
       `<p>${data.activity}</p> 
        <p>${data.type}</p>
        <p>${data.participants}</p>
        <p>$${data.price}</p>`
        //console.log(createList)
        // const pList = document.querySelectorAll("p")
        // console.log(Array.from(pList))
        //Array.from(pList).filter(pList)
        // let nList = [...pList] //.map(n => n.textContent)
        // console.log(nList) //now gettitng back an array but its an array of just this one activity. 
        
        // return nList
        // const filtered = [...pList].filter(n=> n.textContent.includes($0))
        // console.log(filtered)
        //    const filtered = [] filter nodelist javascript

    //    pList.forEach(el => {
    //     //if(el.textContent.includes('0.0')) {
    //         filtered.push(el)
    //     }) 
       
    })
    
    fetchElements()
}



// const highlightFree=()=> { //iterate through bucket classes to find 0.0 and highlight them- no need for db.json
//     let pList = document.querySelectorAll("li")
//     // let nList = [...pList].map(activity = activity.textContent)
//     // return nList
//     console.log(pList)
// }
// function filteredEnough(num){
//     for (let i =0; num <= i; i++){
//         if (num >= 1 ){
//             return false;
//         }
//     }
//     return num < 1
// }

//fetches my db.json info-where do i want this to happen?
// async function fetchStoredActivity(){
//     let response = await fetch("http://localhost:3000/favorites")
//     let data = await response.json()
//    //  console.log(data);
    
//     const acts = document.querySelector(".bucket") //grabbing node on the dom
//     acts.innerHTML = renderAllActs(data) //getting acts from api
//     return data
// };

// const highlightChosen =() =>{
//      document.getElementById('high').innerHTML = "<span style='color: red;'></span>"

// }


// function highlightFav(){
//     document.getElementById('highlight').addEventListener('click', highlightChosen)
// }
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


//figure out how to push branches to save then start over from your save

//add a fav button on every rendered activity-
//add a function sendsInfoToDb(){}//POSTING INFO TO CREATE ARRAY 
//function retrieveFilteredInfoFromDb(){} //one button to filter bd.json- sends fetch from their . filter(by data.price > 0)

