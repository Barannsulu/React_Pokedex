import React , {useState , useEffect } from 'react';
import axios from 'axios'
// components

import PokeItem from './PokeItem';


const POKE_COUNT = 12
const API =  "https://pokeapi.co/api/v2/pokemon/"
// ID STARTS WITH 001
const IMAGE_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"


const PokeList = () => {
    const [pokemons , setPokemons] = useState([])

    const fetchPokemons = async () => {
      const temp_array = []
       for (let i = 1 ; i <= POKE_COUNT; i ++){
          const response = await axios.get( `${API}${i}`)
          temp_array.push (response.data)
       }
       setPokemons(temp_array)
    }

    
        
    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        
        <div>
            <ul className='poke-list'>
                {pokemons.length === 12 ?   pokemons.map((pokemon, idx) => (
                    <li key={idx}>
                        <PokeItem  pokemon={pokemon}/>
                    </li>
                )):null}
            </ul>
        </div>
  )
};

export default PokeList;
