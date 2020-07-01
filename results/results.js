import listOfBars from '../data/bar-list.js';
import { findById } from '../common/utils.js';

let userPreferences = JSON.parse(localStorage.getItem('preference'));

const searchParam = new URLSearchParams(window.location.search);
const districtId = searchParam.get('id'); 

// Establish two arrays to hold filtered content:

let userPreferenceFilteredArray = []; 
let arrayToDisplay = []; 

// Generate userPreferences array based off of the user preferences in local storage.

for(let i = 0; i < userPreferences.length; i++) {	//  
    let filteredPreference = userPreferences[i];

    listOfBars.forEach(bar => {
        if(bar[filteredPreference] && userPreferenceFilteredArray.indexOf(bar) == -1) {
            userPreferenceFilteredArray.push(bar);
            return true;
        }
        return false;
    });
}

// Generate district specific array based on district selected from the map

userPreferenceFilteredArray.forEach(bar => {
    if(bar.district === districtId) {
        arrayToDisplay.push(bar);
    }
});

let headerImage = 
'../assets/street_images/' + districtId + '.jpg'; 

let districtHeading = document.getElementById('district-location');

const img = document.createElement('img');
img.src = headerImage; 

districtHeading.appendChild(img); 

// Check to see if Favorites Array exists in local storage. If it exists, it's parsed into the favoritesArray variable and etablishes an empty array if it doesn't:

let favoritesArray = localStorage.getItem('favorites');

if(favoritesArray === null) {
    favoritesArray = [];

} else {
    favoritesArray = JSON.parse(localStorage.getItem('favorites'));
}

// Generate the Actual Results:

const resultsUl = document.getElementById('results-list');

arrayToDisplay.forEach(bar => {

    let thisBar = bar;

    // Establishing DOM Elements:

    const resultLi = document.createElement('li');
    const resultAddress = document.createElement('p');
    const resultHours = document.createElement('span');
    const resultDays = document.createElement('span');
    const resultMenu = document.createElement('ul');
    const resultBeer = document.createElement('li');
    const resultFood = document.createElement('li');
    const resultLiquor = document.createElement('li');
    const addToFavoritesButton = document.createElement('button');
    const addDirectionLink = document.createElement('button'); 
    
    resultLi.textContent = thisBar.name;
    resultLi.id = thisBar.id;

    resultAddress.textContent = thisBar.address;
    resultAddress.id = `${thisBar.id}-address`;

    resultHours.textContent = `${thisBar.time} | `;
    resultHours.id = `${thisBar.id}-hours`;

    resultDays.textContent = thisBar.days;
    resultDays.id = `${thisBar.id}-days-open`;

    resultMenu.id = `${thisBar.id}-menu`;

    resultBeer.textContent = thisBar.beer;
    resultBeer.id = `${thisBar.id}-beer`;
    
    resultFood.textContent = thisBar.food;
    resultFood.id = `${thisBar.id}-food`;

    resultLiquor.textContent = thisBar.liquor;
    resultLiquor.id = `${thisBar.id}-liquor`;

    addDirectionLink.textContent = 'Directions to the bar!'; 

    addToFavoritesButton.id = 'add-to-favorites';
    addToFavoritesButton.textContent = 'Add to Favorites';

    addToFavoritesButton.addEventListener('click', function() {

        if(!findById(favoritesArray, thisBar.id)) {	
            let found = findById(listOfBars, thisBar.id);
            thisBar.favorite = true;
            favoritesArray.push(found);
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));

        } else {
            return;		
        }	
    });

    // Generate The "Get Directions Button"

    let barAddress = resultAddress.textContent; 

    addDirectionLink.addEventListener('click', function() {
        window.location.href = 'https://www.google.com/maps/dir/Alchemy+Code+Lab,+Northwest+10th+Avenue,+Portland,+OR/ +' + barAddress ;
    }); 

    // Array and Loop to Generate the Bar Menu Colors:

    const favoritable = {
        beer: resultBeer,
        food: resultFood,
        liquor: resultLiquor

    };

    for(let i = 0; i < userPreferences.length; i++) {
        let boldedPreference = userPreferences[i];

        if(favoritable[boldedPreference]){
            favoritable[boldedPreference].classList.add('favorite');
        } 
    }

    // Bring it all together in the DOM:

    resultsUl.appendChild(resultLi);
    resultLi.appendChild(resultAddress);	
    resultLi.appendChild(resultHours);
    resultHours.appendChild(resultDays);
    resultLi.appendChild(resultMenu);

    // If any of these don't have any text content, don't show them:
    
    if(resultLiquor.innerText) {
        resultMenu.appendChild(resultLiquor);
    } 

    if(resultBeer.innerText) {
        resultMenu.appendChild(resultBeer);
    }

    if(resultFood.innerText) {
        resultMenu.appendChild(resultFood);
    }
    
    resultLi.appendChild(addToFavoritesButton); 
    resultLi.appendChild(addDirectionLink);

});
