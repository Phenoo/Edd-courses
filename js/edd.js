const reviews = [{
        id: 1,
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        name: "susan smith",
        job: "web developer",
        img: "/images/refer1.jpg",
    },
    {
        id: 2,
        info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        name: "anna johnson",
        job: "web designer",
        img: "/images/refer2.jpg",
    },
    {
        id: 3,
        info: " Lorem ipsum dolor sit amet consectetur adipisicing elit Labore quibusdam quia consequuntur porro quidem illum ipsam,  placeat non nihil corrupti quasi, ipsa id excepturi architecto dolore  corporis consequatur. Consectetur alias, dolorum nostrum sit saepe",
        name: "peter jones",
        job: "intern",
        img: "/images/refer3.jpg",
    },
];
/*=============== NAVBAR ===============*/
const links = document.querySelector(".links");
const navToggle = document.querySelector('.menu-btn');
const timesBtn = document.querySelector('.times-btn');
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    info.textContent = item.info;
    author.textContent = item.name;
    job.textContent = item.job;
    img.src = item.img;
}
// show next person
nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

navToggle.addEventListener("click", function() {
    links.classList.toggle('show-links');
});



var swiper = new Swiper('.courses-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {}

});


var swiper = new Swiper(".mentor-swiper", {
    breakpoints: {
        400: {
            slidesPerView: 1,
        },
        800: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
    },
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})