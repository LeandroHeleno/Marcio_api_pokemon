import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './style.css'; // Importe o arquivo CSS

function Sobre() {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        // Função para carregar os dados do Pokémon com base no id
        const loadPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!response.ok) {
                    throw new Error('Falha ao carregar os dados do Pokémon');
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadPokemonData();
    }, [id]);

    return (
        <div className="container">
            <div className='header'>
            {pokemonData ? (
                <div >
                    <img className="pokemon-image" src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} />
                    <div className="text-white-black-border ficha-tecnica-label Links">
                        <Link to="/">Home</Link>
                    </div>
                    <table className="ficha-tecnica">
                        <tbody>
                            <tr>
                                <td className='ficha-tecnica-item text-white-black-border ficha-tecnica-label'>Name:</td>
                                <td className='ficha-tecnica-item text-white-black-border'>{pokemonData.name}</td>
                                <td className='ficha-tecnica-item text-white-black-border ficha-tecnica-label'>Tipo:</td>
                                <td className='ficha-tecnica-item text-white-black-border'>{pokemonData.types[0].type.name}</td>
                            </tr>
                            <tr>
                                <td className='ficha-tecnica-item text-white-black-border ficha-tecnica-label'>Altura:</td>
                                <td className='ficha-tecnica-item text-white-black-border'>{pokemonData.height}M</td>
                                <td className='ficha-tecnica-item text-white-black-border ficha-tecnica-label'>Peso:</td>
                                <td className='ficha-tecnica-item text-white-black-border'>{pokemonData.weight}Kg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>
                    <h1>Não foi possível carregar os dados do Pokémon</h1>
                    <div className='Links text-white-black-border'>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default Sobre;
