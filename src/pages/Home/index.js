import React, { useEffect, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';



function Home() {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState('charizard');
    
    const mainPokemons = [
      { name: 'Bulbasaur', value: 'bulbasaur' },
      { name: 'Charizard', value: 'charizard' },
      { name: 'Charmander', value: 'charmander' },
      { name: 'Charmeleon', value: 'charmeleon' },
      { name: 'Gyarados', value: 'gyarados' },
      { name: 'Jigglypuff', value: 'jigglypuff' },
      { name: 'Lapras', value: 'lapras' },
      { name: 'Mew', value: 'mew' },
      { name: 'Mewtwo', value: 'mewtwo' },
      { name: 'Pikachu', value: 'pikachu' },
      { name: 'Raichu', value: 'raichu' },
      { name: 'Snorlax', value: 'snorlax' },
      { name: 'Squirtle', value: 'squirtle' },
      { name: 'Vaporeon', value: 'vaporeon' },
      { name: 'Venusaur', value: 'venusaur' },
      { name: 'Blastoise', value: 'blastoise' },
      { name: 'Butterfree', value: 'butterfree' },
      { name: 'Caterpie', value: 'caterpie' },
      { name: 'Chikorita', value: 'chikorita' },
      { name: 'Cyndaquil', value: 'cyndaquil' },
      { name: 'Ditto', value: 'ditto' },
      { name: 'Eevee', value: 'eevee' },
      { name: 'Gengar', value: 'gengar' },
      { name: 'Magikarp', value: 'magikarp' },
      { name: 'Meowth', value: 'meowth' },
      { name: 'Pidgey', value: 'pidgey' },
      { name: 'Pidgeotto', value: 'pidgeotto' },
      { name: 'Pidgeot', value: 'pidgeot' },
      { name: 'Poliwag', value: 'poliwag' },
      { name: 'Poliwhirl', value: 'poliwhirl' },
    ].sort((a, b) => a.name.localeCompare(b.name));
  
    function loadAPI(selected) {
      let url = `https://pokeapi.co/api/v2/pokemon/${selected}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPokemon(json);
        })
        .catch((error) => console.log(error));
    }
  
    useEffect(() => {
      loadAPI(selectedPokemon);
    }, [selectedPokemon]);
  
    const handleChange = (event) => {
      setSelectedPokemon(event.target.value);
    };
  
    return (
      <div className='container'>
        <header>
          <strong>Pokemon API</strong>
        </header>
        <div className='header'>
          <div className='ficha-tecnica'>
            <div >
              <label htmlFor='pokemon-select' className='text-white-black-border'>Escolha o Pokémon: </label>
              <select id='pokemon-select' value={selectedPokemon} onChange={handleChange} className='list'>
                {mainPokemons.map((poke) => (
                  <option key={poke.value} value={poke.value}>
                    {poke.name}
                  </option>
                ))}
              </select>
            </div>
            <div >
              <img className='pokemon-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${pokemon.id}.gif`} alt={pokemon.name} />
            </div>
            <div className='ficha-tecnica-item text-white-black-border'>
              <span className='ficha-tecnica-label'>Name:</span> {pokemon.name}
            </div>
            <div className='ficha-tecnica-item text-white-black-border'>
              <span className='ficha-tecnica-label'>Nº:</span> {pokemon.id}
            </div>
            <div className='ficha-tecnica-item text-white-black-border'>
              <span className='ficha-tecnica-label'>Peso:</span> {pokemon.weight / 10}Kg
            </div>
            <div className='ficha-tecnica-item text-white-black-border'>
              <span className='ficha-tecnica-label'>Altura:</span> {pokemon.height / 10}M
            </div>
          </div>
          <div className='Links text-white-black-border'>
          <Link to={`/sobre/${selectedPokemon}`} className='Links'>Ficha Técnica</Link>

        </div>      
        
        <div className='footer'>Leandro Lopes Heleno 24004</div>
      </div>
      </div>
    );
  }
  
export default Home;