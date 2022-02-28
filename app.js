const spinner = document.getElementById('spinner');

// Loading and displaying initial drinks
const loadInitialDrinks = async function(){
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink');

  const data = await response.json();

  displayInitialDrinks(data.drinks);
}

loadInitialDrinks();

const displayInitialDrinks = function(drink){
  const drinkContainer = document.getElementById('drink-container');
  drink.forEach(drink => {
    console.log(drink);
    const card = document.createElement('div');
    card.classList.add('col');

    card.innerHTML = `
    <div class="card bg-dark text-black h-100 position-relative">
      <img src=${drink.strDrinkThumb} alt="drink-image">
      <div class="card-img-overlay">
        <h5 class="card-title fw-bolder position-absolute bottom-0 end-0 mb-3 me-2 h4">${drink.strDrink}</h5>
      </div>
     </div>
    `;

    drinkContainer.appendChild(card);

    spinner.classList.add('d-none');
  })
}