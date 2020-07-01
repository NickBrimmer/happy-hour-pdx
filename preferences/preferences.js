const foodCheck = document.getElementById('food'); 
const beerCheck = document.getElementById('beer'); 
const liquorCheck = document.getElementById('liquor'); 
const dateCheck = document.getElementById('dateNight'); 

let checkedArray = []; 

const preferenceArray = [foodCheck, beerCheck, liquorCheck, dateCheck];


function loadMap() {
    window.location = '../map/map.html'; 
}

document.getElementById('map-button').addEventListener('click', function(event) {
    for (let i = 0; i < preferenceArray.length; i++){
        let checkedPreference = preferenceArray[i];
        
        if (checkedPreference.checked){
            checkedArray.push(checkedPreference.id); 
            let stringifyCheckedPreference = JSON.stringify(checkedArray); 
            localStorage.setItem('preference', stringifyCheckedPreference); 
        } 
        
    }  

    event.preventDefault(); 
    loadMap(); 
    checkedArray = []; 
}); 




function loadFavorites() {
    window.location = '../favorites/favorites.html'; 
}