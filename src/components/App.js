import "../stylesheets/App.css";
import pic from "../images/foto.png";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const principal = (
      <div className="header">
        <img src={pic} className="picture"></img>
        <div className="userDate">
          <h2 className="userName">Azahara García</h2>
          <p className="date">Domingo,5 de junio de 2021</p>
        </div>
      </div>
    );

    const medium = (
      <p className="textUser">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra,
        ipsum vitae consectetur pulvinar, mi lacus tincidunt nisi, non maximus
        mi nunc ut leo. Mauris ut ligula accumsan, pulvinar urna in, venenatis
        lorem. Integer auctor, nibh ut semper porttitor, nisi lectus lobortis
        nibh, eu tincidunt eros risus eu massa. Phasellus lacinia magna vel arcu
        sodales, at consectetur metus facilisis. Donec imperdiet faucibus justo,
        et rhoncus dolor fermentum venenatis. Ut ornare, tortor sit amet laoreet
        lobortis, mi diam egestas quam, at pharetra massa massa eu dolor.
      </p>
    );

    const final = (
      <div className="footer">
        <a className="more" href="#">
          Leer más...
        </a>
        <p className="likes">37</p>
        <p className="heart">♥</p>
      </div>
    );

    return (
      <div className="App">
        {principal} {medium}
        {final}
      </div>
    );
  }
}

export default App;
