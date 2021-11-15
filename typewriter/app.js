const textDisplay = document.getElementById('text')
const phrases = [
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "If you can dream it, you can do it. - Walt Disney",
  "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. - Samuel Beckett",
  "With the new day comes new strength and new thoughts. - Eleanor Roosevelt",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "When something is important enough, you do it even if the odds are not in your favor. - Elon Musk",
  ]

let currentPhrase = []
let i = 0
let j = 0
let isDeleting = false
let isEnd = false

function loop(){
  textDisplay.innerHTML = currentPhrase.join("")
  isEnd = false
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length){
      currentPhrase.push(phrases[i][j])
      j++
    }
    if (isDeleting && j <= phrases[i].length ){
      currentPhrase.pop(phrases[i][j])
      j--
    }
    if (j == phrases[i].length){
      isEnd = true
      isDeleting = true
    }
    if (isDeleting && j==0){
      currentPhrase = []
      isDeleting = false
      i++
    }
    if (i == phrases.length){
      i = 0
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (300 - 200) + 200
  const time = isEnd ? 3000 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}
loop()

