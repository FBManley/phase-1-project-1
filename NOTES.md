## MVP
refresh button-shows new random activity


PLAN: As a user I want find a random activity for myself or group to do.


## stretch
Share button 
when: on click 
cause: clicking the button
effect: favorite/like indicated/filled



grab html elements/nodes///
The innerHTML property can be used to get or change any HTML element, including <html> and <body>.
window = is the page/biggest container/our DOM/collection of nodes that represent our document
document = collection of objects that represent the html file. can call methods on the dom to traverse the tree and find what we need. 
document.querySelector = takes an argument name of the tag/.class/#id, returns first HTML element that matches that tag/class/id (called on nodes) / header.queserySelector('header)
document.querySelectorAll = returns node collection, more flexible
html collections cannot use forEach
nodeList = can use forEach
You can use existing nodes from the document, you can change the content of existing nodes in your html document. 
getElementById = pass specific id name
getElementsByClassName('list') = html collection returned
getElementsByTagName('div') = html collection returned
textContent=grabs text (more efficient, grabs only what you need)
put on page///
const renderHeader = () => {
    const header = document.querySelector('header) //look into part of tree that holds header
    const storeName = header.querySelector('h1')

    const h2Nodes = header.querySelectorAll('h2') //returns array-like object (cannot call methods like map or filter on nodes) can use for/of/each loops or can convert to arrays (idk how)
    storeName.textContent = bookStore.name // grabs existing html element and put text content in that item
    h2Nodes[0].textContent = bookStore.address
    h2Nodes[1].textContent = bookStore.hours
    const bookList = document.querySelector('#book-list')
    inventory.forach((book) => {
        const li = document.createElement('li') //for every book in inventory we have an li
        const h3Title = document.createElement('h3') //every .createElement creates an element 
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const im = document.createElement('img')
        h3Title.textContent = book.title // assign text content to elements we just created
        pAuthor.textContent = book.author
        pPrice.textContent = `$${book.price}`

        img.src = books.imageURL   //  src- to where?
       // li.id = book.title
        li.className'list-li' //css needs applied so made all li's under one class?

        li.append(h3Title, pAuthor, pPrice, img) // append created elements to li created 
        bookList.append(li) // appended li to bookList


    })
}


const renderBooks = (inventory) => {
    //how do my books get on/connect to the page
    //what do I need to render?
    //wshere do I get my data? 
    const bookList = document.querySelector('#book-list')
    let li = document.createElement('li')
    inventory.forEach((book) => {
        const li = document.createElement('li')
        const h3Title = document.createElement('h3')
        h3Title.textContent = book.title
        const pAuthor = document.createElement('p')
        const pPrice = 
    })
}
renderHeader()
renderBooks(bookStore.inventory  )


/ const empty_like = '♡'
// const full_like = '♥'
// const hearts = document.querySelectorAll(".like-glyph")

// window.addEventListener('DOMContentLoaded', () => {
//     getShows() 
//     document.getElementById("shows").addEventListener('click', getShows)
//     // findLikes()
//     // likeFunction() 
//    // document.querySelectorAll(".like-glyph").addEventListener('click', likeFunction)
// })

// function getShows() {
//     const ul = document.getElementById('show-list') 
//     const info = document.getElementById('info')
//     info.innerHTML=''
//     ul.innerHTML=''
//     fetch(BASE_URL + '/shows') //add each show object from json to the DOM as li's w link inside 
//     .then(res => res.json()) // make each link live by adding event listener .. speak through steps
//     .then(data => {
//         data.forEach(show => {
//             ul.innerHTML += `
//             <li><a href="#" data-id="${show.id}"> ${show.name}</a></li>
//             `
//         })
//         attachClicksToLinks()
//     })
// }

// const attachClicksToLinks = () => {
//     const shows = document.querySelectorAll('a') //A non-live NodeList containing one Element object for each element that matches at least one of the specified selectors or an empty NodeList in case of no matches.
//     shows.forEach((show) => {// nodelist objects are collections of nodes, 
//         show.addEventListener('click', displayShow) //add listener to new empty node array, call displaySHow
//     })
// }

// const attachClicksToLikes = () => { //my attempt to replicate nancy's process to get my likes to register
//     const likes = document.querySelectorAll('b') 
//     likes.forEach((like) => {
//         like.addEventListener('click', likeFunction)
//     })
// }

// // function likeFunction() {
//     const li = document.querySelectorAll('like-glyph') //or like idk or li.innerhtml
//     li.innerHTML = ''
//    // document.addEventListener('click', () => {
//     //const activated = event.target.classList.contains("activated-heart")
//             if (li.innerText === empty_like) {
//                 li.innerText = full_like; 
//                 li.className = "activated-heart";
//         }   else {
//                 li.innerText = empty_like;
//                 li.className = "";
//         }
//         //for(const glyph of hearts){
//        //li.addEventListener("click", likeFunction)
//    // }

//}

// const displayShow = (event) => { 
//     console.log(event.target.dataset.id)
//     const info = document.getElementById('info') //select html element info
//     const ul = document.getElementById('show-list')  //select html element show-list
//     ul.innerHTML='' //set new variable inner html to empty string
//     fetch(BASE_URL + `/shows/${event.target.dataset.id}`) //get request 
//     .then(res=> res.json()) //json-ify the data
//     .then(data => { //put requested data in these buckets
//         console.log(data)
//         info.innerHTML = `<h1>${data.name} </h1><br/>
//         <h3>Summary:</h3>
//         <p>${data.summary}</p>
//         <h3>Network:</h3>
//         <p>${data.network.name}</p>
//         <h3>Genres:</h3>
//         <p>${data.genres.join(", ")}</p>
//         <h3>Official Site::</h3>
//         <p>${data.officialSite}</p>`
//         clickListener()
//     })

// }

// function findLikes(){
 //    const likeArr = 
//     likeArr.forEach((singularLike) => {
//         singularLike.addEventListener("click", findLikes)
//     })
// }

// function clickListener(){
//     document.querySelector(".like-glyph").addEventListener('click', (event) => {
//         console.log(event.target.classList)
//         const activated = event.target.classList.contains("activated-heart")
//         if (activated) {
//             event.target.classList.remove("activated-heart");
//             event.target.innerHTML = empty_like;
//         } else {
//             event.target.classList.add("activated-heart");
//             event.target.innerHTML = full_like;
//         }
//         activated;

//         })
//     }

// function likeFunction() {
// //    const hearts = e.target;
//     if(hearts.innerText === empty_like) {
//         hearts.innerText = full_like; 
//         hearts.className = "activated-heart";
//     } else {
//         hearts.innerText = empty_like;
//         hearts.className = "";
//     }
// }

// for(const glyph of hearts){
//     glyph.addEventListener("click", likeFunction)
//     }
//     console.log('im lost')

//if(event.target.classList. === 'like-glyph')

//const btn = ddocument.getElementByClass
//document.getElementById("")

// document.querySelectorAll(".like-glyph").forEach("like" => {
//     "like".addEventListener('click', event => {
//         //handle click
//     })
// })
// .addEventListener('click', likeFunction)

const fetchFree = () => {
    fetch("http://localhost:3000/favorites")
    .then(response => response.json())
    .then(data => {activity = data}) 
    console.log(activity)
}
<!-- 
{/* <div class="row">
<div class="col s12 m6">
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Card Title</span>
      <p>I am a very simple card. I am good at containing small bits of information.
      I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div> */} -->