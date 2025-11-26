import './style.css';

const img = document.querySelector('img');
const input = document.querySelector('#search');
const searchBtn = document.querySelector('#searchBtn');

function search (){
    let text = input.value;
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=v9L2Fq82XYa9RI0ybWOFB7n5u1P1czks&s=${text}&weirdness=4`;
    input.value = '';

    fetch(url)
        .then(function(response){
            return response.json();   
        })
        .then( function (response){
            img.src = response.data.images.original.url;
        } );
}
searchBtn.addEventListener('click', search);