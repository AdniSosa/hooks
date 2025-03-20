import useFetchCharacters from './hooks/useFecthCharacters';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemon = useFetchCharacters(urlPokemon);
  const rickAndMorty = useFetchCharacters(urlRick);

  return (
    <>
        <div className='character'>
          <h2>Personaje Pokemon</h2>
          <p>{pokemon.characterName}</p>
          <img src={pokemon.characterImage} alt={pokemon.characterName} />
        </div>
    
        <div className='character'>
          <h2>Personaje Rick and Morty</h2>
          <p>{rickAndMorty.characterName}</p>
          <img  src={rickAndMorty.characterImage} alt={rickAndMorty.characterName}/>
        </div>
      
    </>
  );
}

export default App;
