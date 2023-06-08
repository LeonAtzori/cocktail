const card = document.querySelector('.copy')
const input = document.querySelector('.type')
const button = document.querySelector('.press')
const body = document.querySelector('.bod')
const modal = document.querySelector('.modal-dialog')
  let baliseI = '<i onclick=changeFont() class="fa-regular fa-heart"></i>'
  let baliseI2 = '<i class="fa-solid fa-heart"></i>'
function noRefresh (event) {
    event.preventDefault();
fetch(`https://thecocktaildb.com/api/json/v1/1/filter.php?i=${input.value}`)
 .then((resp) => resp.json())
 .then((data) =>{ 
    // console.log(input.values)
    card.innerHTML =''
    data.drinks.forEach(element => {
        card.insertAdjacentHTML('beforeend',`
        <div class="col-lg-4 ">
            <div class="card" style="margin: 10px">
                <img src="${element.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.strDrink}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick=openModal(${element.idDrink}) type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Show more
              </button>
            </div> `)})})
 console.log(window.location.search)}
button.addEventListener('click',noRefresh)

const changeFont = () => {
  
  console.log(card)
}
fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
.then((resp) => resp.json())
.then((data) =>{
    data.drinks.forEach(element => {
        card.insertAdjacentHTML('beforeend',`
          <div class="col-lg-4">
              <div class="card" style="margin: 10px">
                  <img src="${element.strDrinkThumb}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${element.strDrink}</h5>
                 ${baliseI}
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <button onclick=openModal(${element.idDrink}) type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Show more
                  </button>
              </div>`)});});
const openModal = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((resp) => resp.json())
    .then((data) =>{
        console.log(data.drinks[0])
        modal.insertAdjacentHTML("beforeend",`
        <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">${data.drinks[0].strDrink}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${data.drinks[0].strDrinkThumb}" class="card-img-top" alt="...">
        ${data.drinks[0].strInstructionsIT}
        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>`)})
 modal.innerHTML = ""}