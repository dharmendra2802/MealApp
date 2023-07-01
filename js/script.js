// Working on the search bar

const searchBar = document.getElementById('searchbar');
const searchBtn = document.getElementById('searchbttn'); // Corrected variable name

// to store fetched data

let favoriteDish;

if(localStorage.getItem('favoriteDish'))
{
    favoriteDish = [];
}else
{
   favoriteDish =  JSON.parse(localStorage.getItem('favoriteDish'));

}
// Save favoriteDish array to Local Storage before the page unloads
window.addEventListener('beforeunload', () => {
    localStorage.setItem('favoriteDish', JSON.stringify(favoriteDish));
});

searchBtn.addEventListener('click', async function() {
    const searchValue = searchBar.value;
    
    searchBar.value = ""; // Corrected variable name
    
    window.open(`meal.html?search=${encodeURIComponent(searchValue)}`, '_blank');


});

