
const state = {
  recipe: {},
  search: { results: [] },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(
      "https://forkify-api.herokuapp.com/api/v2/recipes/?search=chicken"
    );
    state.search.results = data.data.recipes.map((rec) => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
      };
    });
    document.querySelector("body").innerText = state.search.results;
    console.log(state.search.results);
  } catch (error) {
    console.error(`Error from model: ${error}`);
    throw error;
  }
};
// loadRecipe();