// Working on the search bar

const searchBar = document.getElementById('searchbar');
const searchBtn = document.getElementById('searchbttn'); // Corrected variable name

// to store fetched data

searchBtn.addEventListener('click', async function() {
    const searchValue = searchBar.value;
    
    searchBar.value = ""; // Corrected variable name
    
    window.open(`meal.html?search=${encodeURIComponent(searchValue)}`, '_blank');


});
