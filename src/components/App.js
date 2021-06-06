import "./hola.scss";
import React from "react";
import MediaCard from "./MediaCard";
import pic from "../images/foto.png";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MediaCard
          name="Azahara"
          date="Hoy igual que ayer, todos los dias lo mismo"
          image="{pic}"
          text="Si yo te contara, y tu me escucharas"
          likes="37"
          heart="♥"
        />
      </div>
    );
  }
}

export default App;
