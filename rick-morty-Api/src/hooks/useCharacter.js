import { useState } from "react";

export function useCharacter(){
    const [allCharac, setAllCharac] = useState([]);

    const getAllCharacter = () => {
        return fetch ('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then((data) => setAllCharac(data.results));
    };

    return {
        getAllCharacter,
        allCharac,
    };

}                                                                       