
document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
})

function fetchImages(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(dogImages => displayImages(dogImages))
}

function displayImages(dogImages){
  dogImages.message.forEach(dogImage => {
    let dogList = document.getElementById('dog-image-container')
    let theDogimage = document.createElement('img')
    theDogimage.src = dogImage
    dogList.appendChild(theDogimage)
  })
}

function fetchBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then(breeds => displayAllTheDogBreeds(breeds))
}

function displayAllTheDogBreeds(breeds){

breedArray = []


  for (const theBreed in breeds.message) {
      const ul = document.getElementById('dog-breeds')
      const li = document.createElement('li')
      li.innerText = theBreed
      ul.appendChild(li)
      breedArray.push(theBreed)

      li.addEventListener("click", function(e) {
        changeDogColorFunction(li)
      })
  }

getFilterValue(breeds, breedArray)

}

function changeDogColorFunction(li) {
  li.style.color = "blue"
}

function getFilterValue(breeds, breedArray){
  const ul = document.getElementById('dog-breeds')
  const filterTool = document.getElementById('breed-dropdown')

filterTool.addEventListener('change', function(e) {
  ul.innerHTML = ""
  let fileteredBreeds =  breedArray.filter(filteredBreed => filteredBreed[0] === e.target.value);
  fileteredBreeds.forEach(alphBreed => {
      let li = document.createElement('li')
      li.innerText = alphBreed
      ul.appendChild(li)
  })






}, false);

}
