import React from "react"
import Pokecard from "./Pokecard"


/**This function accepts props : pokemon(list of pokemon) and isWinner
 * And iterates through list of pokemon and creates a pokecard instance for each one of them
 * And returns the pokecards along with whether the hand is winner or not
 */

function Pokedex(props) {

  const { pokemon, isWinner } = props;

  let pokemonCards = pokemon.map(poke => {
    let pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`
    return <Pokecard
      name={poke.name}
      type={poke.type}
      experience={poke.base_experience}
      image={pokeImage}
    />
  });

  return (
    <div className="Pokedex">
      <div className="card-group">
        {pokemonCards}
      </div>
      <div>
        <h3 className="text-center text-danger"><em>{isWinner === true ? "ABOVE HAND IS WINNER!" : null}</em></h3>
      </div>
    </div>
  )
};

Pokedex.defaultProps = {
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

export default Pokedex;



