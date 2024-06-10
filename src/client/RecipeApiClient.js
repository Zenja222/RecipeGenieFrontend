import axios from "axios";

export const getAllRecipes = async () => {
    return (await axios.get('/recipe')).data
}

export const addRecipe = async (recipeData) => {
    return (await axios.post('/recipe', recipeData)).data
}

export const findByLvl = async (lvl) => {
    return (await axios.get(`/recipe/filter`, { params: { lvl } })).data;
};

export const updateRecipe = async (recipe) => {
    return (await axios.put(`/recipe/${recipe.id}`, recipe))
}
