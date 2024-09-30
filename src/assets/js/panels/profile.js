// src/js/profile.js
const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    loadProfileInfo();
});

function loadProfileInfo() {
    ipcRenderer.send('get-profile-info');
}

ipcRenderer.on('profile-info', (event, profileData) => {
    document.getElementById('username').textContent = profileData.username;
    document.getElementById('email').textContent = profileData.email;
    document.getElementById('registration-date').textContent = profileData.registrationDate;
    // Mettez à jour d'autres éléments du profil selon vos besoins
});