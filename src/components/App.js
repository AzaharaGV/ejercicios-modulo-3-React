import "../stylesheets/App.css";
import pic from "../images/foto.png";
import React from "react";

function App() {
  const data = {
    image:
      "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
    cardTitle: "Bob Dylan",
    cardDate: "May 24, 1941",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };
  return (
    <div className="App">
      <div className="header">
        <img src={data.image} className="picture"></img>
        <div className="userDate">
          <h2 className="userName">{data.cardTitle}</h2>
          <p className="date">{data.cardDate}</p>
        </div>
      </div>
      <p className="textUser"> {data.cardDescription}</p>
      <div className="footer">
        <a className="more" href="#">
          {data.button.url}
        </a>
        <p className="likes">37</p>
        <p className="heart">♥</p>
      </div>
    </div>
  );
}

export default App;
