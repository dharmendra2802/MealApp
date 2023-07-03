// Working on the search bar

const searchBar = document.getElementById('searchbar');
const searchBtn = document.getElementById('searchbttn'); // Corrected variable name

// to store fetched data

searchBtn.addEventListener('click', async function() {
    const searchValue = searchBar.value;
    
    searchBar.value = ""; // Corrected variable name
    
    window.open(`meal.html?search=${encodeURIComponent(searchValue)}`, '_blank');


});


searchBar.addEventListener('input',async function()
{
    let searchby = searchBar.value;
    let fetchedData;
    console.log(searchby);
    if(searchby.length>0)
        {
            fetchedData = await getDataOfFname(searchby);
            console.log(fetchedData);    
            fillSuggestion(fetchedData.meals);
            searchDish();
        }
    else
    {
        clearSuggestion();
    }

})

function searchDish()
{
    console.log("123");
    const dishes = document.querySelectorAll('.searchbar-sugg-item');
    dishes.forEach(d=>
    {
        console.log("123");
        d.addEventListener('click',()=>{
            const name = d.firstChild.innerHTML;
            console.log(name);
            window.open(`meal.html?search=${encodeURIComponent(name)}`, '_self');
        })
    })
}

function clearSuggestion()
{
    const parent = document.getElementById('searchbar-sugg-cont');

    // to clear previous suggestions
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}


function fillSuggestion(data)
{
    const parent = document.getElementById('searchbar-sugg-cont');
    clearSuggestion();

    data.forEach(data => {
        
        const son = document.createElement('div');
        son.classList.add('searchbar-sugg-item');

        const para = document.createElement('p');
        para.classList.add('searchbar-sugg-item__name');
        para.innerHTML = data.strMeal;

        const img = document.createElement('img');
        img.classList.add('liked-icon');

        // liked feature TODO
        img.src = './assets/heart.png';

        son.appendChild(para);
        son.appendChild(img);

        parent.appendChild(son);
    });
}


// fetching by dish letters
async function getDataOfFname(dish) {
    
    let URL;
    if(dish.length<2)
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${dish}`;
    else
        URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`;
    
    return fetch(URL)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => {
        console.log("Error in fetching the data");
   });
    
}
  