import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.src === name);
  if (!dog) {
    return (
      <>
        <h1>Doggo not found!</h1>
        <Link to="/dogs">Back to home</Link>
      </>
    );
  }
  return (
    <>
      <h1>{dog["name"]}</h1>

      <h2>Details</h2>
      <p>Age: {dog["age"]}</p>
      <p>Fun Facts</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Back to home</Link>
    </>
  );
}

export default DogDetails;
