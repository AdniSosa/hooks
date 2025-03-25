import useFetchCharacters from './hooks/useFecthCharacters';
import './App.css';
import Card from './components/Card';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {dataApi: pokemon} = useFetchCharacters(urlPokemon)
  const {dataApi: rick} = useFetchCharacters(urlRick)

  return (
    <>
    {pokemon &&
      <Card title='Personaje Pokémon' name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} image={pokemon.sprites?.other?.dream_world?.front_default} />
    }
    {rick &&
      <Card title='Personaje Rick y Morty' name={rick.name} image={rick.image} />
    }
    </>
  );
}

export default App;
