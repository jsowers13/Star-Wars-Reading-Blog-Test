import React, { useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div classNameName="text-center mt-5">
      <h1>Star Wars Blog</h1>

      <div className="container">
        <h1>Characters</h1>
        <div className="row data-row">
          {store.characters.map((item,index) => {
            return (
              <div key={index} className="col">
                <Card character={item} index={index} category="characters" />
              </div>
            );
          })}
        </div>

        <h1>Planets</h1>
        <div className="row data-row">
        {store.planets.map((item,index) => {
          <div key={index} className="col">
            <Card planets={item} index={index} category="planets" />
          </div>
})}
        </div>

        <h1>Vehicles</h1>
        <div className="row data-row">
          {store.vehicles.map((item,index) => {
          <div key={index} className="col">
            <Card vehicles={item} index={index} category="vehicles" />
          </div>
         })}
        </div>
      </div>
    </div>
  );
};
