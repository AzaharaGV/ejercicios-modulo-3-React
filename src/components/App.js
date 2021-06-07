import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];
    const promofilter = students.filter((promofilter) => {
      return promofilter.promo === "A";
    });
    return (
      <div>
        <h1>Pintar listados con React:</h1>
        {/* con este map iteramos el array de items */}
        {promofilter.map((promofilter, index) => {
          // cada return retorna un li
          return (
            <li key={index}>
              <h2>Nombre: {promofilter.name}</h2>
              <p>Descripción: {promofilter.age}</p>
              <p>Promo: {promofilter.promo}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;
