// wroking on the drop down of searchar

const bar_placeholder = document.getElementById('search-bar');
const options = document.querySelectorAll('.d-opt');

options.forEach(opt=>{
    opt.addEventListener('mousedown',function(){
        bar_placeholder.placeholder = opt.innerHTML;
    })
})



// making api calls

const search = document.getElementById('submit')
const searchBar = document.getElementById('search-bar');

search.addEventListener('click',function()
{
    console.log(data);
    fetchData(data);
})

searchBar.addEventListener('input',function()
{
    const input = searchBar.value.trim();
    if(input!==' ')
        fetchresult(input);
    else
        searchBar.innerHTML='';   
})



// to fetch and show as we type
function fetchresult(data)
{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
    .then(response => response.json())
        .then(data => {
            showData(data.meals);
            console.log(data.meals);
        })
        .catch(error => {
            console.log(error);
        });

}

// function to show fetch result while typing
function showData(data)
{
    const result = document.getElementById('result');
    // taking only top ;
    data = data.slice(0,5);
    data.forEach(d=>{
        const p = document.createElement('p');
        p.textContent = d.strMeal;
        
        result.append(p);
    })
}




// to fetch a dish 
function fetchDish(data) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${data}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}
