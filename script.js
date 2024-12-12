const defaultStars = document.querySelectorAll('.fa-regular.fa-star')
const starContainer = document.querySelector(".star-container");

starContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-star')) {
        const index = Array.from(defaultStars).indexOf(e.target);
        selectStars(index)
    }
})

starContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('fa-star')) {
        const index = Array.from(defaultStars).indexOf(e.target)
        hoverStars(index)
    }
})

starContainer.addEventListener('mouseleave', (e) => {
    for (let i=0; i<defaultStars.length; i++) {
        removeHoverStars(i)
    }
})

function selectStars(index) {
    for (let i=0; i<=index; i++) {
        defaultStars[i].classList.remove('fa-regular');
        defaultStars[i].classList.add('fa-solid');
        defaultStars[i].classList.add('active');
    }
}

function hoverStars(index) {
    for (let i=0; i<=index; i++) {
        defaultStars[i].classList.add('mouseover');
        defaultStars[i].classList.add('fa-solid');
        defaultStars[i].classList.remove('fa-regular');
    }
}

function removeHoverStars(index) {
    for (let i=0; i<=index; i++) {
        defaultStars[i].classList.remove('mouseover');
        if (!defaultStars[i].classList.contains('active')) {
            defaultStars[i].classList.remove('fa-solid');
        } 
        defaultStars[i].classList.add('fa-regular');
    }
}