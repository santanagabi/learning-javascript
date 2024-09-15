const memeArray = [
  "./imgs/imgOne.jpg",
  "./imgs/imgTwo.png",
  "./imgs/imgCat.png",
  "./imgs/image.png"
]

const captionsArray = [
  "When you realize it's Monday again.",
  "That moment you understand the joke.",
  "Trying to act normal when you mess up.",
  "When you remember you left the stove on.",
  "Waiting for the weekend like..."
]

const randomMeme = document.querySelector('#random-meme')
const randomCaption = document.querySelector('#random-caption')
const generatorButton = document.querySelector('#generator-button')

generatorButton.addEventListener('click', function() {
  const randomNumberOne = Math.floor(Math.random() * memeArray.length)
  const randomNumberTwo = Math.floor(Math.random() * captionsArray.length)

  randomMeme.src = memeArray[randomNumberOne]
  randomCaption.innerText = captionsArray[randomNumberTwo]
})