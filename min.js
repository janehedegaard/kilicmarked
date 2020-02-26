//lydikoner
function play(mp3_fil) {

    if (mp3_fil.paused) {
        mp3_fil.play();
    } else {
        mp3_fil.pause();
    }
}

//hovedprogram

const lydfil = new Audio("danskinterview.mp3");

document.getElementById("spil").addEventListener("click", function () {
    play(lydfil);
});



const lydfil2 = new Audio("studerendefrapolen.mp3");

document.getElementById("spil2").addEventListener("click", function () {
    play(lydfil2);
});




const lydfil3 = new Audio("studerendefrarumanien.mp3");

document.getElementById("spil3").addEventListener("click", function () {
    play(lydfil3);
});









//Inspiration til opskrifter. 3 klik knapper der åbner en pop op vindue
// Få modal elementet
const modal = document.getElementById('simpleModal');
const modal2 = document.getElementById('simpleModal2');
const modal3 = document.getElementById('simpleModal3');
//Åben modal button
const modalBtn = document.getElementById('modalBtn');
const modalBtn2 = document.getElementById('modalBtn2');
const modalBtn3 = document.getElementById('modalBtn3');
// få lukke button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const closeBtn2 = document.getElementsByClassName('closeBtn')[1];
const closeBtn3 = document.getElementsByClassName('closeBtn')[2];


//åbne klik her
modalBtn.addEventListener('click', function () {
    openModal(modal);
});

modalBtn2.addEventListener('click', function () {
    openModal(modal2);
});

modalBtn3.addEventListener('click', function () {
    openModal(modal3);
});




//lukke klik her
closeBtn.addEventListener('click', function () {
    closeModal(modal);

});


closeBtn2.addEventListener('click', function () {
    closeModal(modal2);

});

closeBtn3.addEventListener('click', function () {
    closeModal(modal3);

});



//lukke klik udenfor boksen
window.addEventListener('click', outsideclick);



//function til at åbne modal
function openModal(modal) {
    modal.style.display = 'block';
}

//function til at lukke modal
function closeModal(modal) {
    modal.style.display = 'none';
}

//function til at lukke modal udenfor klik
function outsideclick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    } else if (e.target == modal2) {
        modal2.style.display = 'none';
    } else if (e.target == modal3) {
        modal3.style.display = 'none';
    }
}









//inspirationskilde: https://www.youtube.com/watch?v=huVJW23JHKQ
//elementer der har animation når man scroller ned til dem

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -450px 0px"
};

const appearOnScroll = new IntersectionObserver
(function (
 entries,
 appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
}

        });
    },
    appearOptions);




faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});


