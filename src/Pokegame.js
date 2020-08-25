import React from "react"
import Pokedex from './Pokedex.js'

/**This functions accepts a list of pokemon
 * And creates 2 separate hands and put 4 cards in each hand randomly
 * Also calculate the sum of total experience for each hand
 * And decide which hand is winner by comparing total experience of each hand
 * returns instances of Pokedex with props of both the hands with total experience and isWinner(true/false)
 */

function Pokegame(props) {
  let { pokemon } = props
  let firstHand = []
  let secondHand = []
//make a function
  while (pokemon.length !== 0) {
    let randomIndex = Math.floor(Math.random() * pokemon.length)
    firstHand.push(pokemon[randomIndex])
    pokemon.splice(randomIndex, 1)
    randomIndex = Math.floor(Math.random() * pokemon.length)
    secondHand.push(pokemon[randomIndex])
    pokemon.splice(randomIndex, 1)
  }
//name of reducer
  let reducer = (acc, curr) => acc + curr.base_experience
  let firstHandExp = firstHand.reduce(reducer, 0)
  let secondHandExp = secondHand.reduce(reducer, 0)

  let isFirstHandWinner = false;
  let isSecondHandWinner = false;
//try having one var
  if (firstHandExp > secondHandExp) isFirstHandWinner = true;
  else isSecondHandWinner = true;

  return (
  <div>
    <Pokedex
      pokemon={firstHand}
      totalExp={firstHandExp}
      isWinner={isFirstHandWinner}
    />
    <Pokedex
      pokemon={secondHand}
      totalExp={secondHandExp}
      isWinner={isSecondHandWinner}
    />
  </div>
  );
}


Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
}

export default Pokegame