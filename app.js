const card = document.querySelector('.copy')
const input = document.querySelector('.type')
const button = document.querySelector('.press')




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
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
      `)
    })
    
 })
 console.log(window.location.search)
  }
button.addEventListener('click',noRefresh)


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
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
        `)
    });
});

