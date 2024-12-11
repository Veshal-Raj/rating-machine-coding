const defaultStars = document.querySelectorAll('.fa-regular.fa-star')
const starContainer = document.querySelector(".star-container");

starContainer.addEventListener("click", (e) => selectStars(e))

function selectStars(e) {
    let star = e.target;
    star.classList.add('active')

    let index = 0;
    if (star.classList.contains('one')) {
        index = 1
    } else if (star.classList.contains('two')) {
        index = 2
    } else if (star.classList.contains('three')) {
        index = 3;
    } else if (star.classList.contains('four')) {
        index = 4;
    } else if (star.classList.contains('five')) {
        index = 5;
    } else index = 0;

    for (let i=0; i<index; i++) {
        defaultStars[i].classList.add('active')
    }
}


starContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('fa-star')) {
        let index = Array.from(defaultStars).indexOf(e.target)
        hoverStars(index)
    }
})

starContainer.addEventListener('mouseleave', (e) => {
    for (let i=0; i<defaultStars.length; i++) {
        removeHoverStars(i)
    }
})

function hoverStars(index) {
    for (let i=0; i<=index; i++) {
        defaultStars[i].classList.add('mouseover');
    }
}

function removeHoverStars(index) {
    for (let i=0; i<=index; i++) {
        defaultStars[i].classList.remove('mouseover');
    }
}