import CharacterCard from "./componentes/CharacterCard";

import data from "./assets/data.json";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        {data.map((character) => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              locationUrl={character.location.url}
              locationName={character.location.name}
              originUrl={character.origin.url}
              originName={character.origin.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
