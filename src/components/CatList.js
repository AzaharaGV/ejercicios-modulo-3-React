import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
  render() {
    return (
      <section className="kittens">
        <h3>Gatitos!</h3>
        <ul className="superListCat">
          <li>
            <RandomCat width={200} height={200} />
          </li>
          <li>
            <RandomCat width={200} height={400} />
          </li>
          <li>
            <RandomCat />
          </li>
        </ul>
      </section>
    );
  }
}
export default CatList;
