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


// for button

const buttons = document.querySelectorAll('.gen_btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('b');
        ripples.style.left = x +'px';
        ripples.style.top = y +'px';
        this.appendChild(ripples);

        setTimeout(() =>{
            ripples.remove()
        }, 1000);

    })
})






/*-----------------------------------*\
  #ABOUT US JS
\*-----------------------------------*/






document.addEventListener('DOMContentLoaded', function () {
    // Function to animate the counter
    function animateCounter(counterElement, targetCount) {
        let currentCount = 0;
        const animationDuration = 2000; // Duration in milliseconds
        const countIncrement = targetCount / (animationDuration / 16); // 60 frames per second

        function updateCounter() {
            currentCount += countIncrement;
            counterElement.textContent = Math.floor(currentCount);

            if (currentCount < targetCount) {
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.textContent = targetCount;
            }
        }

        updateCounter();
    }

    // Callback function for the Intersection Observer
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const targetCount = counter.getAttribute('data-count');
                    animateCounter(counter, targetCount);
                });

                // Unobserve the target once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // Trigger when 50% of the target is visible
    });

    // Target the container to observe
    const targetContainer = document.getElementById('targetContainer');
    observer.observe(targetContainer);
});





document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper = new Swiper('.card_swiper', {
      autoplay: {
        delay: 3000,
      },
      loop: true,
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        620: {
          slidesPerView: 2,
        },
        980: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
  
      },
    });
  });




  