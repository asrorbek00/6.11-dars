import React from "react";
import { Link } from "react-router-dom";

function RecipieList({ recipies }) {
  console.log(recipies);
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recipies.map((recipie) => {
        const {id ,title ,method, cookingTime , img} = recipie
        return (
          <li key={id} className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={img}
                className="h-[200px] object-fill w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{method.substring(0,100)}...</p>
                <Link to={`recipie/${id}`} className="btn btn-outline btn-success" > Read More</Link>
              </div>
          </li>
        );
      })}
    </ul>
  );
}

export default RecipieList;
