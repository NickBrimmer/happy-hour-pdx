// import { saveUser, loadUser } from 'login/load-save-user.js';
import { makeUser } from '../common/utils.js';

const form = document.querySelector('form');
const logInButton = document.getElementById('login-button');
const userName = document.getElementById('username');
const email = document.getElementById('email');

logInButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(email.value === '' || userName.value === ''){
        return;
    } else {
        const formData = new FormData(form);
        const createdUser = makeUser(formData);
        JSON.stringify(localStorage.setItem('username', createdUser.username));
    
        JSON.stringify(localStorage.setItem('email', createdUser.email));
        
        window.location = './preferences/preferences.html';
    }
});


export const generateUserName = () => {
    const userNameDisplay = JSON.parse(localStorage.getItem('username'));
    return userNameDisplay;
};

// export default generateUserName;

