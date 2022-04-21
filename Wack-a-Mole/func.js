let images = document.querySelectorAll(".diglet");
let visableDiglet1 = null
let visableDiglet2 = null
let visableDiglet3 = null
let one = true
let two = true
let three = true
function revealDiglet1 () {
  if(one){
  visableDiglet1 = parseInt(Math.random() * 8)
  if(visableDiglet1 ===visableDiglet2 || visableDiglet1 === visableDiglet3){
    visableDiglet2 = parseInt(Math.random() * 8)
  }
  images[visableDiglet1].classList.remove("hidden")
  one = false
  } else {
    images[visableDiglet1].classList.add('hidden')
    one = true
  }
}
function revealDiglet2 () {
  if(two){
  visableDiglet2 = parseInt(Math.random() * 8)
  if(visableDiglet2 ===visableDiglet1 || visableDiglet2 === visableDiglet3){
    visableDiglet2 = parseInt(Math.random() * 8)
  }
  images[visableDiglet2].classList.remove("hidden")
  one = false
  } else {
    images[visableDiglet2].classList.add('hidden')
    two = true
  }
}
function revealDiglet3 () {
  if(three){
  visableDiglet3 = parseInt(Math.random() * 8)
  if(visableDiglet3 ===visableDiglet1 || visableDiglet2 === visableDiglet3){
    visableDiglet2 = parseInt(Math.random() * 8)
  }
  images[visableDiglet3].classList.remove("hidden")
  three = false
  } else {
    images[visableDiglet3].classList.add('hidden')
    three = true
  }
}
function hideAll () {
  images.forEach(elem => elem.classList.add('hidden'))
}

//setInterval(hideDiglet1, 750)
setInterval(revealDiglet1, 500)
//setInterval(hideDiglet2, 750)
setInterval(revealDiglet2, 500)
//setInterval(hideDiglet3, 750)
setInterval(revealDiglet3, 500)
setInterval(hideAll, 2000)

let score = 0
function scored (){
  if(this.classList[1] !=='hidden'){
  this.classList.add('hidden')
  score++
  selem.innerHTML = score
  }
}
let selem = document.getElementById('score-text')
let elem = document.getElementById('diglet1')
let elem1 = document.getElementById('diglet2')
let elem2 = document.getElementById('diglet3')
let elem3 = document.getElementById('diglet4')
let elem4 = document.getElementById('diglet5')
let elem5 = document.getElementById('diglet6')
let elem6 = document.getElementById('diglet7')
let elem7 = document.getElementById('diglet8')
let elem8 = document.getElementById('diglet9')
elem.addEventListener("click", scored)
elem1.addEventListener("click", scored)
elem2.addEventListener("click", scored)
elem3.addEventListener("click", scored)
elem4.addEventListener("click", scored)
elem5.addEventListener("click", scored)
elem6.addEventListener("click", scored)
elem7.addEventListener("click", scored)
elem8.addEventListener("click", scored)
