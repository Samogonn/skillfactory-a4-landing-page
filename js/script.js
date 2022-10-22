let inputPlastic = document.querySelector('#test');
inputPlastic.addEventListener('mouseover', showPopup);

function showPopup() {
    document.querySelector('.popup').classList.toggle('visible');
    console.log('showPopup работает');
}
