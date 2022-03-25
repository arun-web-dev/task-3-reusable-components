import React from "react";
import Card from "../Components/Card";
const RecipeList = ({ recipes }) => {
  return (
    <div className="App">
      {recipes.length === 0 ? (
        <h1 className="f1 ma3 washed-blue">
          Recipe Not Found try another one.😊
        </h1>
      ) : (
        recipes
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
          .splice(0, 20)
      )}
    </div>
  );
};

export default RecipeList;
