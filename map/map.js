

const hawethorneMap = {
    name: 'Hawthorne',
    top: '56%',
    left: '75%',
};

const belmontMap = {
    name: 'Belmont',
    top: '50%',
    left: '74%'
};

const divisionMap = {
    name: 'Division',
    top: '60%',
    left: '71%'
};

const albertaMap = {
    name: 'Alberta',
    top: '41%',
    left: '72%'
};

const stJohnsMap = {
    name: 'St Johns',
    top: '18%',
    left: '5%'
};

const nWMap = {
    name: 'NW Portland',
    top: '46%',
    left: '33%'
};

const pearlDistrictMap = {
    name: 'Pearl District',
    top: '50%',
    left: '42%'
};

const mississippi = {
    name: 'Mississippi',
    top: '36%',
    left: '55%'
};

const downtown = {
    name: 'Downtown',
    top: '54.5%',
    left: '48%'
};

export const mapNames = [
    hawethorneMap,
    belmontMap, 
    divisionMap,
    albertaMap,
    stJohnsMap,
    nWMap,
    pearlDistrictMap,
    mississippi,
    downtown
];


function generateLink(district) {
    let link = document.createElement('a');

    const img = document.createElement('img');
     
    link.classList.add('maplink');

    link.href = '../results/?id=' + district.name;

    link.style.top = district.top;
    link.style.left = district.left;
    // link.textContent = 
    // district.name;


    img.setAttribute('src', '../assets/streetBanners/' + district.name + '.jpg'); 
    link.appendChild(img); 


    return link;
}

const figure = document.querySelector('figure');

for (let i = 0; i < mapNames.length; i++) {
    let item = generateLink(mapNames[i]);
    figure.appendChild(item);

}



let sendIt = () => {
    let selectedDistrict = document.querySelector('input:checked'); 

    let selectedDistrictValue = JSON.stringify(selectedDistrict.value); 

    localStorage.setItem('district', selectedDistrictValue); 

};

sendIt(); 



function loadUserPreferecePage() {
    window.location = '../preferences/preferences.html'; 
}

document.getElementById('preferences-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    loadUserPreferecePage();
}); 



