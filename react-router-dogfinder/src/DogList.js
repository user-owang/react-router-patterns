import { useState } from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
  return (
    <>
      <h1>All of our doggos:</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.src}>
            <Link to={`/dogs/${dog.src}`}>
              {dog.name}, {dog.age}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DogList;
