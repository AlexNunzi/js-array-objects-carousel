const imgArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//  RECUPERO INFORMAZIONI DAL DOM
const imgListDom = document.querySelector('.imgList');
const miniaturesContainerDom = document.querySelector('.miniaturesContainer');
const upDom = document.querySelector('#up');
const downDom = document.querySelector('#down');
const forwardDom = document.getElementById('forward');
const backwardDom = document.getElementById('backward');
const stopDom = document.getElementById('stop');


// Creazione degli elementi contenenti immagini e relative informazioni nel
// carosello e nella zona delle miniature
for (let i = 0; i < imgArray.length; i++) {
    const newImgWrapper = document.createElement('div');
    newImgWrapper.classList.add('imgWrapper');
    newImgWrapper.innerHTML += `
    <img class="img" src="${imgArray[i].image}" alt="Wallpaper">
    <div class="imgDescription">
        <h2>${imgArray[i].title}</h2>
        <p>${imgArray[i].text}</p>
    </div>
    `;


    const newMiniature = document.createElement('div');
    newMiniature.classList.add('miniature');
    newMiniature.classList.add('overlay');
    newMiniature.innerHTML += `<img src="${imgArray[i].image}" alt="Wallpaper">`

    imgListDom.append(newImgWrapper);
    miniaturesContainerDom.append(newMiniature);
}



const imgWrappersDom = document.getElementsByClassName('imgWrapper');
const miniatureDom = document.getElementsByClassName('miniature');

//  CONTATORE DELLA POSIZIONE CORRENTE NEL CAROSELLO
let selectedImg = 0;

imgWrappersDom[selectedImg].classList.add('show');
miniatureDom[selectedImg].classList.remove('overlay');
miniatureDom[selectedImg].classList.add('selectedMiniature');





//   PULSANTE AVANTI
downDom.addEventListener('click', function(){
    clearInterval(forwardLoop);
    clearInterval(backwardLoop);
    stopDom.classList.add('d-none');
    stopDom.classList.remove('d-flex');
    selectedImg = goNext(selectedImg);
});

//  PULSANTE INDIETRO
upDom.addEventListener('click', function(){
    clearInterval(forwardLoop);
    clearInterval(backwardLoop);
    stopDom.classList.add('d-none');
    stopDom.classList.remove('d-flex');
    selectedImg = goPrevious(selectedImg);
});

//  PULSANTE AUTOPLAY AVANTI
forwardDom.addEventListener('click', function(){
    clearInterval(backwardLoop);
    stopDom.classList.remove('d-none');
    stopDom.classList.add('d-flex');
    forwardLoop = setInterval(function(){
        selectedImg = goNext(selectedImg);
    }, 3000);

});

//  PULSANTE AUTOPLAY INDIETRO
backwardDom.addEventListener('click', function(){
    clearInterval(forwardLoop);
    stopDom.classList.remove('d-none');
    stopDom.classList.add('d-flex');
    backwardLoop = setInterval(function(){
        selectedImg = goPrevious(selectedImg);
    }, 3000);

});

//  PULSANTE STOP AUTOPLAY
stopDom.addEventListener('click', function(){
    stopDom.classList.add('d-none');
    stopDom.classList.remove('d-flex');
    clearInterval(forwardLoop);
    clearInterval(backwardLoop);
})




//  FUNZIONI
let forwardLoop;

let backwardLoop;


function goNext(currentImg){
    let counter = currentImg;
    if (counter < imgWrappersDom.length - 1) {
        imgWrappersDom[counter].classList.remove('show');
        miniatureDom[counter].classList.add('overlay');
        miniatureDom[counter].classList.remove('selectedMiniature');
        counter++;
        imgWrappersDom[counter].classList.add('show');
        miniatureDom[counter].classList.remove('overlay');
        miniatureDom[counter].classList.add('selectedMiniature');
        upDom.classList.remove('hide');

    } else if (counter == imgWrappersDom.length -1){
        imgWrappersDom[counter].classList.remove('show');
        miniatureDom[counter].classList.add('overlay');
        miniatureDom[counter].classList.remove('selectedMiniature');
        counter = 0;
        imgWrappersDom[counter].classList.add('show');
        miniatureDom[counter].classList.remove('overlay');
        miniatureDom[counter].classList.add('selectedMiniature');
    }
    return counter;
}

function goPrevious(currentImg){
    let counter = currentImg;
    if (counter > 0) {
        imgWrappersDom[counter].classList.remove('show');
        miniatureDom[counter].classList.add('overlay');
        miniatureDom[counter].classList.remove('selectedMiniature');
        counter--;
        imgWrappersDom[counter].classList.add('show');
        miniatureDom[counter].classList.remove('overlay');
        miniatureDom[counter].classList.add('selectedMiniature');
        downDom.classList.remove('hide');

    } else if (counter == 0) {
        imgWrappersDom[counter].classList.remove('show');
        miniatureDom[counter].classList.add('overlay');
        miniatureDom[counter].classList.remove('selectedMiniature');
        counter = (imgWrappersDom.length - 1);
        imgWrappersDom[counter].classList.add('show');
        miniatureDom[counter].classList.remove('overlay');
        miniatureDom[counter].classList.add('selectedMiniature');
    }
    return counter;
}

