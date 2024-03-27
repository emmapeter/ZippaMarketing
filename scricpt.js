const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 120);
});
 
// navbar

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist'); // Corrected "documen" to "document"

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}


// home page slider

var counter = 1;
var increment = 1;

function setCheckedRadio() {
    document.getElementById('radio' + counter).checked = true;
    counter += increment;

    if (counter === 2 || counter === 1) {
        increment = -increment;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(setCheckedRadio, 5000); // Adjusted interval for smoother transition
});
