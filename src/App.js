import React from "react";
import Header from "./components/Header";
import Emoji from "./components/Emoji";
import { emojipedia } from "./emojipedia";

function App() {
  return (
    <div className="App">
      <Header />
      <dl className="dictionary">
        {emojipedia.map((emojiItem) => {
          return (
            <Emoji
              key={emojiItem.id}
              emoji={emojiItem.emoji}
              name={emojiItem.name}
              meaning={emojiItem.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
