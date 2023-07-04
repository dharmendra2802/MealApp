
let favoriteDish;

if( !localStorage.getItem('favoriteDish'))
{
    favoriteDish = [];
}else
{
   favoriteDish =  JSON.parse(localStorage.getItem('favoriteDish'));

}
// Save favoriteDish array to Local Storage before the page unloads
export function saveFavorite(){
   
    localStorage.setItem('favoriteDish', JSON.stringify(favoriteDish));
};


// making getter and setters for favdish
export function getFavorites()
{
    return favoriteDish;
}

export function setFavorites(d)
{
    favoriteDish.push(d);
}

export function removeFavorities(d)
{
    const index = favoriteDish.indexOf(d);
    favoriteDish.splice(index,1);
}


// random disg function
document.getElementById('surprise').addEventListener('click',randomDish);
function randomDish()
{
    console.log("sssssss");
    window.open(`meal.html?search=${encodeURIComponent("random")}`, '_self');
}