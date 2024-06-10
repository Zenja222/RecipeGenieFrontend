import React, {useState} from "react";
import {Spinner, ToastContainer} from "react-bootstrap";
import AddedSuccessToast from "../components/common/Toasts/AddedSuccessToast";
import {addRecipe} from "../client/RecipeApiClient";
import RecipeAddForm from "../components/RecipeForm/RecipeAddForm";

function RecipeAddView() {
    const [showGoodToast, setShowGoodToast] = useState(false);
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        ingredients: '',
        lvl: ''
    });

    const handleRecipeAdd = async (newRecipeData) => {
        try {
            setLoading(true);
            const createdRecipe = await addRecipe(newRecipeData);
            if (!createdRecipe.errorMessage) {
                console.log(createdRecipe);
                setShowGoodToast(true);
            }
        } catch (error) {
            console.error("Error adding recipe:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center">
            <ToastContainer position="top-end" className="p-3" style={{zIndex: 1}}>
                <AddedSuccessToast show={showGoodToast} onClose={() => setShowGoodToast(false)}/>
            </ToastContainer>
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <RecipeAddForm handleRecipeAdd={handleRecipeAdd} recipe={recipe}/>
            )}
        </div>
    );
}

export default RecipeAddView;
