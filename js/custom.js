// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

let prevScrollPos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
        // At the top of the page
        document.getElementById("navbar-top").style.top = "0";
        document.getElementById("navbar-middle").style.top = "0";
        document.getElementById("navbar-bottom").style.top = "0";
    } else {
        // Scrolling down
        document.getElementById("navbar-top").style.top = "2.5rem";
        document.getElementById("navbar-middle").style.top = "-3rem";
        document.getElementById("navbar-bottom").style.top = "-6rem";
    }

    prevScrollPos = currentScrollPos;
};


// let prevScrollPos = window.scrollY;

// window.onscroll = function () {
//     let currentScrollPos = window.scrollY;

//     if (prevScrollPos > currentScrollPos) {
//         document.getElementById("navbar-top").style.top = "0";
//         document.getElementById("navbar-middle").style.top = "0";
//         document.getElementById("navbar-bottom").style.top = "0";
//     } else {
//         document.getElementById("navbar-top").style.top = "2.5rem";
//         document.getElementById("navbar-middle").style.top = "-3rem";
//         document.getElementById("navbar-bottom").style.top = "-6rem";
//     }

//     prevScrollPos = currentScrollPos;
// };


const galleryContainer = document.getElementById('gallery-container');
const galleryItems = document.querySelectorAll('.gallery-item');

let currentIndex = 0;


if (galleryContainer && galleryItems) {

    function scrollGallery() {
        galleryContainer.scrollLeft = galleryItems[currentIndex].offsetLeft;
        currentIndex = (currentIndex + 1) % galleryItems.length;
    }

    setInterval(scrollGallery, 2000); // Auto-scroll every 1 second
}