import pic from "../images/foto.png";
function MediaCard() {
  return (
    <div className="App">
      <div className="header">
        <img src={pic} className="picture"></img>
        <div className="userDate">
          <h2 className="userName">Azahara</h2>
          <p className="date">Hoy igual que ayer, todos los dias lo mismo</p>
        </div>
      </div>
      <p className="textUser"> Si yo te contara, y tu me escucharas</p>
      <div className="footer">
        <a className="more" href="#">
          Más info
        </a>
        <p className="likes">37</p>
        <p className="heart">♥</p>
      </div>
    </div>
  );
}
export default MediaCard;
