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

const imgListDom = document.querySelector('.imgList');
const miniaturesContainerDom = document.querySelector('.miniaturesContainer');
let sliderImg = '';
let miniatureImg = '';

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

console.log(imgWrappersDom);
console.log(miniatureDom);

let selectedImg = 0;

imgWrappersDom[selectedImg].classList.add('show');
miniatureDom[selectedImg].classList.remove('overlay');
miniatureDom[selectedImg].classList.add('selectedMiniature');


const upDom = document.querySelector('#up');
const downDom = document.querySelector('#down');

downDom.addEventListener('click', function(){
    if (selectedImg < imgWrappersDom.length - 1) {
        imgWrappersDom[selectedImg].classList.remove('show');
        miniatureDom[selectedImg].classList.add('overlay');
        miniatureDom[selectedImg].classList.remove('selectedMiniature');
        selectedImg++;
        imgWrappersDom[selectedImg].classList.add('show');
        miniatureDom[selectedImg].classList.remove('overlay');
        miniatureDom[selectedImg].classList.add('selectedMiniature');
        upDom.classList.remove('hide');

    } else if (selectedImg == imgWrappersDom.length -1){
        imgWrappersDom[selectedImg].classList.remove('show');
        miniatureDom[selectedImg].classList.add('overlay');
        miniatureDom[selectedImg].classList.remove('selectedMiniature');
        selectedImg = 0;
        imgWrappersDom[selectedImg].classList.add('show');
        miniatureDom[selectedImg].classList.remove('overlay');
        miniatureDom[selectedImg].classList.add('selectedMiniature');
    }
});


upDom.addEventListener('click', function(){
    if (selectedImg > 0) {
        imgWrappersDom[selectedImg].classList.remove('show');
        miniatureDom[selectedImg].classList.add('overlay');
        miniatureDom[selectedImg].classList.remove('selectedMiniature');
        selectedImg--;
        imgWrappersDom[selectedImg].classList.add('show');
        miniatureDom[selectedImg].classList.remove('overlay');
        miniatureDom[selectedImg].classList.add('selectedMiniature');
        downDom.classList.remove('hide');

    } else if (selectedImg == 0) {
        imgWrappersDom[selectedImg].classList.remove('show');
        miniatureDom[selectedImg].classList.add('overlay');
        miniatureDom[selectedImg].classList.remove('selectedMiniature');
        selectedImg = (imgWrappersDom.length - 1);
        imgWrappersDom[selectedImg].classList.add('show');
        miniatureDom[selectedImg].classList.remove('overlay');
        miniatureDom[selectedImg].classList.add('selectedMiniature');
    }
});
