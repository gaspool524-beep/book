// delay possible clicks until page is turned
document.getElementById('book').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

// tambahan buat play musik
let start = document.getElementById("start");
let music = document.getElementById("music");

start.addEventListener("click", function(){
  music.play();
  start.style.display = "none";
});
