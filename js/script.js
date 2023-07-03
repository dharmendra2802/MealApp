// imports 
import { getFavorites } from '../js/favorite.js';

// Working on the search bar

const searchBar = document.getElementById('searchbar');
const searchBtn = document.getElementById('searchbttn'); 

// to store fetched data

searchBtn.addEventListener('click', async function() {
    const searchValue = searchBar.value;
    
    searchBar.value = ""; // Corrected variable name
    
    // search on clicking button 
    window.open(`meal.html?search=${encodeURIComponent(searchValue)}`, '_blank');


});


searchBar.addEventListener('input',async function()
{
    let searchby = searchBar.value;
    let fetchedData;
    if(searchby.length>0)
        {
            fetchedData = await getDataOfFname(searchby);
            fillSuggestion(fetchedData.meals);
            searchDish();
        }
    else
    {
        clearSuggestion();
    }

})



// this function is used to add event over suggested dish block 
function searchDish()
{
    const dishes = document.querySelectorAll('.searchbar-sugg-item');
    dishes.forEach(d=>
    {
        d.addEventListener('click',()=>{
            const name = d.firstChild.innerHTML;
            // on clicking it will open a seperate page of that dish 
            window.open(`meal.html?search=${encodeURIComponent(name)}`, '_self');
        })
    })
}




// this is function to clear the suggestion container
function clearSuggestion()
{
    const parent = document.getElementById('searchbar-sugg-cont');

    // to clear previous suggestions
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}

// function to show the dishes name as a suggestion while searching 
function fillSuggestion(data)
{
    // Suggesyion box container
    const parent = document.getElementById('searchbar-sugg-cont');
    
    // to clear the dishes that were suggested earlier 
    clearSuggestion();

    // we need to loop only when there is some data
    if(data)
    {
        // looping over list of dishes and showing them one by one
        data.forEach(data => {
            
            const son = document.createElement('div');
            son.classList.add('searchbar-sugg-item');
    
            const para = document.createElement('p');
            para.classList.add('searchbar-sugg-item__name');
            para.innerHTML = data.strMeal;
    
            const img = document.createElement('img');
            img.classList.add('liked-icon');
    
            // getting list of our favorite dishes
            const favorite = getFavorites();
            // if it is a favorite dish
            if(favorite.includes(data.idMeal))
              img.src = './assets/filled.png';
            else
              img.src = './assets/heart.png';
    
            // adding these div inside appropriate blocks   
            son.appendChild(para);
            son.appendChild(img);
    
            parent.appendChild(son);
        });
    }
}


// fetching by dishs for suggestions
async function getDataOfFname(dish) {
    
    let URL;
    // Since DishAPI work for single First Letter / Dish name Search
    // so if we have a single char intially it will search for all dishes starting with that char
    // if its more than single char then it will search it as a dish name
    if(dish.length<2)
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${dish}`; // for single letter search
    else
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`; // for name search
    
    return fetch(URL)
        .then(response => response.json())
        .then(data => {
        return data;
    })
    .catch(error => {
        console.log("Error in fetching the data");
   });
    
}
  