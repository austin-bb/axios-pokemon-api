import React, { useState } from 'react'
import axios from 'axios'

const FetchComponent = () => {
    const [pokemon, setPokemon] = useState([])

    // const fetchPokemonAxios = () => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    //         .then(res => {
    //             console.log(res.data.results);
    //             setPokemon(res.data.results)
    //         })
    //         .catch(err => console.log(err))
    // }

    const fetchPokemonAxiosAwait = async() => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            setPokemon(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h1>Fetch Pokemon</h1>
            <button onClick={ fetchPokemonAxiosAwait }>Get Pokemon</button>

            {
                pokemon.map((pokemon, i) => {
                    return (
                        <p key={i}>{ pokemon.name }</p>
                    )
                })
            }
        </div>
    )
}

export default FetchComponent