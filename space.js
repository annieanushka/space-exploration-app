// Sample image sets for each planet
const planetGallery = {
    mercury: ["M.jpg", "M2.jpg","M3.Jpeg"],
    venus: ["V.jpeg","V2.jpg","V3.Jpeg"],
    earth: ["E.jpg", "E2.jpg","E3.jpg"],
    mars: ["MA.webp", "MA2.jpg","MA3.gif"],
    jupiter: ["J.jpg", "J2.jpg","J3.jpg"],
    saturn: ["S.png", "S2.jpg","S3.jpg",],
    uranus: ["u.jpg", "U2.jpg","U3.jpg"],
    neptune: ["N.jpg", "N2.webp","N3.jpg"]
};

// Get modal elements
const modal = document.getElementById("planetModal");
const modalContent = document.getElementById("planetImages");
const modalTitle = document.getElementById("planetName");
const closeBtn = document.querySelector(".close");

// Attach click event to all SEE MORE buttons
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const planetNames = Object.keys(planetGallery);
        const planet = planetNames[index];
        modalTitle.textContent = planet.toUpperCase();

        modalContent.innerHTML = ""; // Clear old images

        // Add planet images
        planetGallery[planet].forEach(img => {
            const image = document.createElement("img");
            image.src = img;
            modalContent.appendChild(image);
        });

        modal.style.display = "block";
    });
});

// Close the modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close if clicked outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
