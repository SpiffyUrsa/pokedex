import React from "react"
/** Accepts props of name, image, type and experience
 * return card containing these information
*/

function Pokecard(props) {
  const { name, image, type, experience } = props;

  return (
    <div className="Pokecard card col-3 bg-primary m-3 rounded">
      <h6 className="card-title text-white">{name}</h6>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <p className="card-text text-white">{type}</p>
        <p className="card-text text-white">{experience}</p>
      </div>
    </div>
  )

}

export default Pokecard;