import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import AllRecipesView from "../view/AllRecipesView";
import MainPage from "../components/common/MainPage/MainPage";
import RecipeAddView from "../view/RecipeAddView";

export const ALL_RECIPE_VIEW_PATH = "/recipes";
export const MAIN_PAGE_VIEW_PATH = "/";
export const RECIPE_ADD_VIEW_PATH = '/recipe/add'
// export const RECIPE_EDIT_VIEW_PATH = "/booking/:bookingId/edit"
// export const RECIPE_ADD_VIEW_PATH = "/booking/add";

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
            // //main page
        ]
    },

]);


export default router;