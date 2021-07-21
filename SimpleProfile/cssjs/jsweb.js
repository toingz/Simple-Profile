// Untuk Banner Text Berjalan
var typeText = document.querySelector(".typeText");
var textToBeTyped = "a software engineer";
var textToBeTypedArr = [
  "A Professional  Trader_ ",
  "A Blockchain Experts_",
  "A Website Designer_"
];
var index = 0,
  isAdding = true,
  textToBeTypedIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
      if (isAdding) {
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          isAdding = false;
          setTimeout(function () {
            playAnim();
          }, 500);
          return;
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;
          textToBeTypedIndex =
            (textToBeTypedIndex + 1) % textToBeTypedArr.length;
        } else {
          index--;
        }
      }
      playAnim();
    },
    isAdding ? 120 : 60
  );
}
playAnim();
// Fade In pas Loading
var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
  setInterval(show, 200);
}

function show() {
  var body = document.getElementById("body");
  opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
  if (opacity < 1) {
    opacity = opacity + 0.3;
    body.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

// About Dom Event
var judul1 = document.getElementById("about");
var judul2 = document.getElementById("about2");
var judul3 = document.getElementById("about3");
document.querySelector("p").style.fontSize = "24px";

about.addEventListener("click", function () {
  document.querySelector("p").innerHTML = 
    "</br>Nama saya <strong>Thorikul Mustaqim</strong></br>Saya adalah seorang mahasiswa Politeknik Negeri Banyuwangi jurusan D-III Teknik Informatika angkatan 2019/2020 ,awal mula mulai tertarik di dunia informatika karna semangat saya dari dulu yang berkecimpung di dunia teknologi";
  document.getElementById("coll").innerHTML = " ";
  
  judul1.style.cursor = "pointer";
  judul1.style.backgroundColor = "black";
  judul1.style.color = "white";
  judul3.style.backgroundColor = "white";
  judul3.style.color = "black";
  judul2.style.backgroundColor = "white";
  judul2.style.color = "black";
});
about2.addEventListener("click", function () {
  document.querySelector("p").innerHTML =
    "</br>1. Professi saya adalah seorang <strong>Trader Advanced</strong> dengan pengalaman lebih dari 3 tahun <br> 2. saya juga adalah seorang <strong>Front-End Dev</strong> <br> 3. Saya Adalah Seorang <strong>Community Manager</strong> Di Komunitas Consultant Crypto";
  document.getElementById("coll").innerHTML = " ";
  judul2.style.cursor = "pointer";
  judul2.style.backgroundColor = "black";
  judul2.style.color = "white";
  judul1.style.backgroundColor = "white";
  judul1.style.color = "black";
  judul3.style.backgroundColor = "white";
  judul3.style.color = "black";
});
about3.addEventListener("click", function () {
  document.querySelector("p").innerHTML =
    "</br>Hobi yang saya sukai yaitu berkaitan dengan professi yang saya tekuni,selain itu juga saya suka bermain basket,bermain game,jalan-jalan dan tidur";
  document.getElementById("coll").innerHTML = " ";
  judul3.style.cursor = "pointer";
  judul3.style.backgroundColor = "black";
  judul3.style.color = "white";
  judul1.style.backgroundColor = "white";
  judul1.style.color = "black";
  judul2.style.backgroundColor = "white";
  judul2.style.color = "black";
});

// Form
function validasi() {
  var txt;
  if (confirm("Apakah Email Yang Anda Masukan Benar?")) {
    txt = "Thanks For Subscription";
  } else txt = document.getElementsById();
  document.getElementById("form-boxx").innerHTML = txt;
}

// Parllax Atas Gerak
$(window).mousemove(function (evt) {
  var change;
  var posX = evt.clientX;
  var posY = evt.clientY;
  var left = change * 1;
  var posX = posX * 1;
  posY = posY * 1;
  $("#parallax-atas").css("top", 0 + posY / 120 + "px");
  $("#parallax-atas").css("right", 0 + posX / 120 + "px");
});

// Slide Show Mobile
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 