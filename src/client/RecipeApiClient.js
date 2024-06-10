import axios from "axios";

export const getAllRecipes = async () => {
    return (await axios.get('/recipe')).data
}

export const addRecipe = async (recipeData) => {
    return (await axios.post('/recipe', recipeData)).data
}