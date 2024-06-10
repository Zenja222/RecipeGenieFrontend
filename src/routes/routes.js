import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AllRecipesView from "../view/AllRecipesView";
import MainPage from "../view/MainPage/MainPage";
import RecipeAddView from "../view/RecipeAddView";
import FindRecipeView from "../view/FindRecipeView";

export const ALL_RECIPE_VIEW_PATH = "/recipes";
export const MAIN_PAGE_VIEW_PATH = "/";
export const RECIPE_ADD_VIEW_PATH = '/recipe/add'
export const RECIPE_FIND_VIEW_PATH = '/recipe/filter'
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: ALL_RECIPE_VIEW_PATH,
                element: <AllRecipesView/>
            },
            {
                path: MAIN_PAGE_VIEW_PATH,
                element: <MainPage/>
            },
            {
                path: RECIPE_ADD_VIEW_PATH,
                element: <RecipeAddView/>
            },
            {
                path: RECIPE_FIND_VIEW_PATH,
                element: <FindRecipeView/>
            },
        ]
    },

]);


export default router;