import pic from "../images/foto.png";
import React from "react";

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={pic} className="picture"></img>
          <div className="userDate">
            <h2 className="userName">{this.props.name}</h2>
            <p className="date">{this.props.date}</p>
          </div>
        </div>
        <p className="textUser">{this.props.text}</p>
        <div className="footer">
          <a className="more" href="#"></a>
          <p className="likes">{this.props.likes}</p>
          <p className="heart">{this.props.heart}</p>
        </div>
      </div>
    );
  }
}

export default MediaCard;
