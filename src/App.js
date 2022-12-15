import "./App.css";
import Header from "./Header";
import { robots } from "./robots";
import Cardlist from "./Cardlist";
import { useState } from "react";
import Robo from "./Robo";

function App() {
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const extraction = robots.filter((curElem) => {
    return curElem.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  console.log(extraction);
  return (
    <div className="App">
      <Header searchChange={onSearchChange} />
      <div>
        {/* Alternate way , however, its best to do the below in its own component which has been done */}
        {/* {extraction.map((curElem) => (
          <Robo
            key={curElem.id}
            id={curElem.id}
            name={curElem.name}
            email={curElem.email}
          />
        ))} */}

        <Cardlist robotsData={extraction} />
      </div>
    </div>
  );
}

export default App;
