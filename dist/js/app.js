import { getPlaceInput } from './get-user-input.js';
document.addEventListener("DOMContentLoaded", () => {
    const inputBtn = document.getElementById('search-btn');
    inputBtn.addEventListener('click', () => {
        const inputPlaceEL = document.getElementById('input-place');
        if (inputPlaceEL.value) {
            getPlaceInput(inputPlaceEL);
            inputPlaceEL.value = '';
        }
    });
});
