const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
document.addEventListener('DOMContentLoaded', (event))

const getTrainers = () => {

    fetch(`${BASE_URL}/trainers`)
    .then (response => response.json())
    .then (trainers => buildTrainerCard(trainers))
       
}

const buildTrainerCard = (trainers) => {
    trainers.forEach(trainerAttribute => {
       const pokemons =  trainerAttribute.pokemons
       const trainerMain = document.querySelector("body > main")
       const trainerdivCard = document.createElement('div')
       trainerdivCard.classList.add('card')
       trainerdivCard.dataset.trainerId = trainerAttribute.id 
       trainerdivCard.innerHTML = `
       <p>${trainerAttribute.name}</p>
       <button data-trainer-id=${trainerAttribute.id}>Add Pokemon</button>
       `
       const trainerUl = document.createElement('ul')
       for(let i = 0; i < pokemons.length; i++) {
           const nickname = pokemons[i].nickname
           const species = pokemons[i].species
           const id = pokemons[i].id
           const trainerLi = document.createElement('li')
           trainerLi.innerHTML = `
           ${nickname} (${species}) <button class="release" data-pokemon-id=${id}>Release:</button>
           `

           trainerUl.appendChild(trainerLi)
           
       }
       trainerdivCard.appendChild(trainerUl)
       trainerMain.appendChild(trainerdivCard)


    })

}

getTrainers()