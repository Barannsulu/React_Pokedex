import React from 'react';

const PokeItem = ({pokemon}) => {
    let image_id = pokemon.id
    image_id = image_id.toString().padStart("3", '0');
     
    
    return (
        <div className='poke-item card'>
                <img className='' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${image_id}.png`} alt="" />
                <p className='font-bold'>id : {pokemon.id}</p>    
                <p className='font-medium'> Name : {pokemon.name}</p>    
                <p className=''>Type : {pokemon.types[0].type.name}</p> 
                <p>{image_id}</p>
                
        </div>
  )
};

export default PokeItem;
