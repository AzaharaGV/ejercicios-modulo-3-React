import pic from "../images/foto.png";
import React from "react";

const MediaCard = (props) => {
  const principal = (
    <div className="header">
      <img src={pic} className="picture"></img>
      <div className="userDate">
        <h2 className="userName">{props.name}</h2>
        <p className="date">{props.date}</p>
      </div>
    </div>
  );
  const medium = <p className="textUser">{props.text}</p>;
  const final = (
    <div className="footer">
      <a className="more" href="#"></a>
      <p className="likes">{props.likes}</p>
      <p className="heart">{props.heart}</p>
    </div>
  );
  return (
    <div className="App">
      {principal}
      {medium}
      {final}
    </div>
  );
};

export default MediaCard;
