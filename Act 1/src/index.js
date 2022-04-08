function display_ct5() {
  var x = new Date()
  var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';

  var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear();
  x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ampm;
  document.getElementById('ct5').innerHTML = x1;
  display_c5();
}

function display_c5(){
  var refresh=1000;
  mytime=setTimeout('display_ct5()', refresh)
}

function changeBg(){
  var i = 0;
  const sec_body = document.querySelector('body')
  const bg = 'url("/images/background.gif")';
  sec_body.style.backgroundImage = bg;
}

function change() {
  img1.src = images[Math.floor(Math.random() * images.length)];
  img2.src = images[Math.floor(Math.random() * images.length)];
  img3.src = images[Math.floor(Math.random() * images.length)];
  img4.src = images[Math.floor(Math.random() * images.length)];
  img5.src = images[Math.floor(Math.random() * images.length)];
}

var imgP = document.getElementById('imgPaint');
imgP.addEventListener("click", function() {
  this.src = images[Math.floor(Math.random() * images.length)];
});

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "/sounds/DING.WAV"
document.body.addEventListener("click", function () {
    audio.play()
})

let images = [
  '/images/giphy (0).gif',
  '/images/giphy (1).gif',
  '/images/giphy (2).gif',
  '/images/giphy (3).gif',
  '/images/giphy (4).gif',
  '/images/giphy (5).gif',
  '/images/giphy (9).gif',
  '/images/giphy (10).gif',
  '/images/giphy (11).gif',
  '/images/giphy (12).gif',
  '/images/giphy (13).gif',
  '/images/giphy (14).gif',
  '/images/giphy (15).gif',
  '/images/giphy (16).gif',
  '/images/giphy (17).gif',
  '/images/giphy (18).gif',
  '/images/giphy (19).gif',
  '/images/giphy (20).gif',
  '/images/giphy (21).gif',
  '/images/giphy (22).gif',
  '/images/giphy (23).gif',
];

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const img5 = document.querySelector('#img5');


window.onload = function () {
  display_ct5()
  setInterval(change, 5000);
};

setTimeout(function() {changeBg();}, 5000);