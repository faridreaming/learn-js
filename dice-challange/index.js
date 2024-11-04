const randomNumber1 = Math.ceil(Math.random() * 6)
const randomNumber2 = Math.ceil(Math.random() * 6)

document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`

const heading = document.querySelector("h1")
if (randomNumber1 > randomNumber2) {
  heading.innerText = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  heading.innerText = "Player 2 Wins! 🚩"
} else {
  heading.innerText = "Draw!"
}

