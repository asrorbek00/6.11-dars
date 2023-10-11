import React, { useState } from "react";

function Create() {
    const [title , setTitle] = useState()
    const [ ingredient , setIngredient] = useState()
    const [time , setTime] = useState()
    const [method , setMethod] = useState()


    const handleSubmit = (e)=>{
        e.preventDefault()


        // setIngredient('')
        // setMethod('')
        // setTime('')
        // setTitle('')
    }
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
          />
        </div>
        {/* ingredient */}
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">Ingredient</span>
          </label>
          <div className="flex gap-2">
          <input
          required
          value={ingredient}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-outline btn-success">add</button>
          </div>
        </div>
        {/* time */}

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Cooking time:</span>
          </label>
          <input
          required
          value={time}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
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
          />
        </div>

        <button type="submit" className="btn btn-secondary btn-outline mt-3 ">Submit</button>
      </form>
    </div>
  );
}

export default Create;
