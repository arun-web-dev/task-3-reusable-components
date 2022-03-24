import React, { Component } from "react";
import RecipeList from "./RecipeList";
import { recipes } from "../API/recipe";
import SearchBox from "./Searchbox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: recipes,
      searchField: "",
    };
  }
  render() {
    return (
      <div class="tc sans-serif">
        <h1>Recipe Finder</h1>
        <SearchBox />
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

export default App;
