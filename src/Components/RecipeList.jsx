import React from "react";
import Card from "../Components/Card";
const RecipeList = ({ recipes }) => {
  return (
    <div className="App">
      {recipes
        .map((recipe) => {
          return (
            <Card
              key={recipe.id}
              class="recipe-container"
              image={recipe.image}
              publisher={recipe.publisher}
              title={recipe.title}
            />
          );
        })
        .splice(0, 10)}
    </div>
  );
};

export default RecipeList;
