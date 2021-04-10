// find element 
let showPrevBtn = document.getElementById('show-prev-btn');
let showNextBtn = document.getElementById('show-next-btn');
let slideImage = document.getElementById('slide-img');

// Subscribe to events list
showPrevBtn.addEventListener('click', onShowPrevBtnClick)
showNextBtn.addEventListener('click', onShowNextBtnClick)


// Created img arr
let imagesUrls = [];
imagesUrls.push('https://cdn.bmwblog.com/wp-content/uploads/2021/02/bmw_m4_csl_widebody_render_01-830x467.jpg');
imagesUrls.push('https://i.auto-bild.de/mdb/extra_large/24/f90-0e4.jpg');
imagesUrls.push('https://www.largus.fr/images/images/m4-csl-illustration.jpg');
imagesUrls.push('https://cdn.bmwblog.com/wp-content/uploads/2020/09/2025-BMW-M4-CSL-00.jpg');


let currentImageIndex = 0;

slideImage.src =  imagesUrls[currentImageIndex]
showPrevBtn.disabled = true;

// Function Definitions

function onShowPrevBtnClick() {
    currentImageIndex --;
    slideImage.src =  imagesUrls[currentImageIndex]
    showNextBtn.disabled = false;
   
    //Disable PREV button if need
    if (currentImageIndex === 0 ) {
        showPrevBtn.disabled = true;
    }
};






function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.scr = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false

    //Disable NEXT button if need
    if (currentImageIndex === (imagesUrls.length -1) ) {
        showPrevBtn.disabled = true;
    }
    
};