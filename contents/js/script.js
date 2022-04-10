var video = document.querySelector(".bg-vid");
var btn = document.querySelector(".vid-btn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}




var openRecModalBtn = document.querySelector('.open-rec-modal-btn');
var openExpModalBtn = document.querySelector('.open-exp-modal-btn');
var openEduModalBtn = document.querySelector('.open-edu-modal-btn');
var openAccModalBtn = document.querySelector('.open-acc-modal-btn');

var closeRecModalBtn = document.querySelector('.close-rec-modal-btn');
var closeExpModalBtn = document.querySelector('.close-exp-modal-btn');
var closeEduModalBtn = document.querySelector('.close-edu-modal-btn');
var closeAccModalBtn = document.querySelector('.close-acc-modal-btn');

var recModal = document.querySelector('.recommendation-modal');
var expModal = document.querySelector('.experience-modal');
var eduModal = document.querySelector('.education-modal');
var accModal = document.querySelector('.accomplishment-modal');

var overlay = document.querySelector('#overlay');

var navLink = document.querySelector('.nav-link');





overlay.addEventListener('click', function() {
        recModal.classList.remove('active');
        expModal.classList.remove('active');
        eduModal.classList.remove('active');
        accModal.classList.remove('active');
        overlay.classList.remove('active');
});


openRecModalBtn.addEventListener('click', function() {
        recModal.classList.add('active');
        overlay.classList.add('active');
});

closeRecModalBtn.addEventListener('click', function() {
        recModal.classList.remove('active');
        overlay.classList.remove('active');
});


openExpModalBtn.addEventListener('click', function() {
        expModal.classList.add('active');
        overlay.classList.add('active');
});

closeExpModalBtn.addEventListener('click', function() {
        expModal.classList.remove('active');
        overlay.classList.remove('active');
});


openEduModalBtn.addEventListener('click', function() {
        eduModal.classList.add('active');
        overlay.classList.add('active');
});

closeEduModalBtn.addEventListener('click', function() {
        eduModal.classList.remove('active');
        overlay.classList.remove('active');
});


openAccModalBtn.addEventListener('click', function() {
        accModal.classList.add('active');
        overlay.classList.add('active');
});

closeAccModalBtn.addEventListener('click', function() {
        accModal.classList.remove('active');
        overlay.classList.remove('active');
});