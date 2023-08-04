"use strict";

function logSubmit(event) 

{
    console.log(`Form Submitted! Timestamp: ${event.timeStamp}`);
    event.preventDefault();

    let password = document.querySelector('#pass').value;
    let confirmation = document.querySelector('#confirm_password').value;

    if (password.localeCompare(confirmation) === 0) {
        console.log("Les mots de passe sont identiques");
        return true;
    }
    console.log("Les mots de passe ne sont pas identiques");
        return false;

}

function main() {
    console.log("début");

    document.querySelector('form').addEventListener('submit', logSubmit);

    console.log("fin");
}

window.addEventListener('load', main);

