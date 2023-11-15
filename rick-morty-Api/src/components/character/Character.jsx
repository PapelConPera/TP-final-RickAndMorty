import { useEffect } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export function AllCharacters() {
  const {allCharac,getAllCharacter} = useCharacter([]);


  useEffect(() => {
    getAllCharacter();
  }, []);

  return (
    <div>
      <div className="arriba">
        <div className="botones">
          <button className="boton2">Docs</button>
          <button className="boton2">About</button>
          <button className="amarillo">SUPPORT US</button> 
        </div>

        <div className="titulo">

          <h1>The Rick and Morty API</h1>

        </div>
      </div>
      <div className="informacion">
        <ul className="contenedor">
          {allCharac.map((item, index) => (
            <li key={index}>
              <div className="taper">
                <img src={item.image} alt="" />
                <div className="texto">
                    <h3 className="color">{item.name}</h3>
                    <p className="blanco">{item.status}</p>
                    <p className="blanco">{item.species}</p>
                    <h3 className="blanco">Last known location:</h3>
                    <p className="color">{item.location.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};