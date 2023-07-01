// using  IIFE (Immediately Invoked Function Expression) 
// to get dish name from URL and fetch through API
(
    function () {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams.get('search'))
        // calling the function to fetch data
        fetchDishData(urlParams.get('search'));
    }
)();

// importing favorite array
import { favoriteDish } from '../js/script.js';
// to store id
let ID ;
// working on adding and removing buttton 
const favBttn = document.getElementById('addFavorite');
favBttn.addEventListener('click',()=>{
     
    if(favoriteDish.includes(ID))
    {
        favBttn.innerHTML = 'Add to Favorite';
        favoriteDish.add(ID);
    }
    else
    {
        favBttn.innerHTML = 'Favorite Dish';
        const index = favoriteDish.indexOf(ID);
        if(index!==-1)
            favoriteDish.splice(index,1);
    }

})







// function to fetch data
function fetchDishData(dishName) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`) // Added "https://" in the URL
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fillFetchedData(data.meals);
            return data;
        })
        .catch(error => { 
            console.log("Error in fetching the data");
        });
}

// function to fill the values
function fillFetchedData(data)
{
    // holding id
    ID = data[0].idMeal;
    // adding the image
    const img = document.getElementById('meal-cont-basic__picture');
    img.style.backgroundImage = `url(${data[0].strMealThumb})`

    // adding the source
    const sourceLink = document.getElementById('sourceLink');
    sourceLink.href = `${data[0].strSource}`;
    // adding the video url
    const videoLink = document.getElementById('videoLink');
    videoLink.href = `${data[0].strYoutube}`;

    // filling the dishname
    document.getElementById('dishName').innerHTML = data[0].strMeal;

    // filling the tags
    document.getElementById('areaName').innerHTML = data[0].strArea;
    document.getElementById('categoryName').innerHTML = data[0].strCategory;


    // adding the instructions
    document.getElementById('instructionAdd').innerHTML = data[0].strInstructions;

    const parent = document.getElementById('meal-cont-ingre-matrialBox');
    // adding the ingredients
    for(let i=1;i<20;i++)
    {
        let matName = data[0]['strIngredient'+i];
        let matQuant = data[0]['strMeasure' + i];
    // Check if ingredient data exists
    if (matName && matQuant) {
            // Create the spans
            const spanLeft = document.createElement('span');
            const spanRight = document.createElement('span');
            spanLeft.textContent = matName;
            spanRight.textContent = matQuant;
            spanLeft.classList.add('ingre');
            spanRight.classList.add('ingre');

            // Create the ingredient container div
            const divSon = document.createElement('div');
            divSon.classList.add('meal-cont-ingre__matrial');
            divSon.appendChild(spanLeft);
            divSon.appendChild(spanRight);

            // Append the ingredient container to the parent element
            parent.appendChild(divSon);
        }
    }
    
}