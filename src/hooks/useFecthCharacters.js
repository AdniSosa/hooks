import { useState, useEffect } from 'react';

const useFetchCharacters = (url) => {
    const [characterName, setCharacterName] = useState('');
    const [characterImage, setCharacterImage] = useState('');

    const getCharacters = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();

            if (result.sprites) {

                const { name, sprites: { other } } = result;
                const image = other?.dream_world?.front_default;

                return (
                    setCharacterName(name),
                    setCharacterImage(image)
                )
            }

            const { name, image } = result;
            console.log(image)

            return (
                setCharacterName(name),
                setCharacterImage(image)
            )

        } catch (error) {
            console.error('Error: ', error);
            setCharacterName('');
            setCharacterImage('');
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return { characterName, characterImage };
}


export default useFetchCharacters;
