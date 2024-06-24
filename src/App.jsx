import { useState } from "react";
import "./App.css";
import Watch from "./components/Watch/Watch";
import { useEffect } from "react";

function App() {
  // const watches = [
  //   { id: 1, name: "Apple watch", price: 200 },
  //   { id: 2, name: "Samsung watch", price: 200 },
  //   { id: 3, name: "MI watch", price: 200 },
  // ];
  // const watches = [
  //   {
  //     id: 1,
  //     name: "Timex Easy Reader",
  //     price: 49.99,
  //   },
  //   {
  //     id: 2,
  //     name: "Casio G-Shock",
  //     price: 129.99,
  //   },
  //   {
  //     id: 3,
  //     name: "Rolex Oyster Perpetual Datejust",
  //     price: 8950.0,
  //   },
  //   {
  //     id: 4,
  //     name: "Apple Watch Series 8",
  //     price: 399.0,
  //   },
  //   {
  //     id: 5,
  //     name: "Omega Speedmaster Professional (1969)",
  //     price: 7500.0,
  //   },
  // ];

  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  // You can access the watches data here:
  // console.log(watches);

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch} />
      ))}
    </>
  );
}

export default App;
