// to load the favorite dish data as soon as page is reloaded
(async function() {

    const favData = getFavorites();
    const parent = document.getElementById('favoriteCont');
  
    if (favData) {
      for (const data of favData) {    
        const dish = await fetchById(data);
        // Rest of the code to create and append the elements

        const son = document.createElement('div');
        son.classList.add('favCard');
  
        const img = document.createElement('img');
        img.src = `${dish.meals[0].strMealThumb}`;
        img.classList.add('favCard__img');
  
        const divOne = document.createElement('div');
        divOne.classList.add('favCard-info');
  
        const htag = document.createElement('h4');
        htag.innerHTML = `${dish.meals[0].strMeal}`;
        htag.classList.add('favCard-info_h4');
  
        divOne.appendChild(htag);
  
        son.appendChild(img);
        son.appendChild(divOne);
  
        // Inserting the cards into the main container
        parent.appendChild(son);

        // adding event to each card so we can fetch that dish on click
        son.addEventListener('click',()=>{
          getTheDish(htag.innerHTML);
        });
      }
    }
  
  })();
  
  import { getFavorites } from '../js/favorite.js';
  
  // Fetch by ID
  async function fetchById(id) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error in fetching the data by ID");
    }
}
  
// to fetch that particular dish
function getTheDish(dish)
{
    // search on clicking button 
    window.open(`meal.html?search=${encodeURIComponent(dish)}`, '_self');

}
