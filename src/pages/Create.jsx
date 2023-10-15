import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFetch } from "../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [cookingTime, setTime] = useState("");
  const [method, setMethod] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const { data, isPending, error, getNewRecipie } = useFetch(
    "https://arrow-gamy-adasaurus.glitch.me/recipes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault(),
      getNewRecipie({
        id: uuidv4(),
        title,
        cookingTime: `${cookingTime} minutes`,
        method,
        img,
        ingredients
      });
   toast.success("added succesfully")
  };
  const handleAdd = (e) => {
    e.preventDefault();

    if (!ingredients.includes(ingredient)) {
      setIngredients((prev) => {
        return [...prev, ingredient];
      });
    }
    setIngredient("");
  };

  // useEffect(()=>{
  //   if(data){
  //     navigate('/')
  //   }
  // },[data])
      
  



  return (
    <div className="grid place-items-center">
      <h1 className="text-4xl font-mono">Add New Recipie</h1>

      <form onSubmit={handleSubmit}>
        {/* title */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title:</span>
          </label>
          <input
            required
            value={title}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {/* ingredient */}
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">Ingredient</span>
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setIngredient(e.target.value)}
              value={ingredient}
            />
            <button onClick={handleAdd} className="btn btn-outline btn-success">
              add
            </button>
          </div>
          <h1>
            Ingredient:
            {ingredients.map((ing) => {
              return <span key={ing}>{ing}, </span>;
            })}
          </h1>
        </div>
        {/* time */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Cooking time:</span>
          </label>
          <input
            required
            value={cookingTime}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        {/* image */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            required
            value={img}
            type="url"
            placeholder="Paste Url"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        {/* Method */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Method:</span>
          </label>
          <input
            required
            value={method}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setMethod(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-outline mt-3 ">
          Submit
        </button>
        
      </form>
    </div>
  );
}

export default Create;
