import {useEffect, useState} from "react";
import {Col, Row, Spinner} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {getAllRecipes} from "../client/RecipeApiClient";
import RecipeCard from "../components/RecipeCard/RecipeCard";

function AllRecipesView() {

    const [recipes, setRecipes] = useState();

    const navigate = useNavigate();

    const handleRecipeEdit = (id) => {
        navigate(`/recipe/${id}/edit`);
    }


    // const handleBookingDelete = async (id) => {
    //     await deleteBookingById(id)
    //     setBookings((prev) => {
    //         return  prev.filter(product => product.id !== id)
    //     })
    // }

    const loadRecipes = async () => {
        setRecipes(await getAllRecipes())
    }

    useEffect(() => {
        loadRecipes()
    }, [])

    return (
        <Row className="justify-content-center">
            {recipes ?
                (<>{recipes.map(recipe => {
                    return (
                        <Col key={`product-card-${recipe.id}`} sm={12} md={3}
                             className="d-flex justify-content-center">
                            <div className="mt-4">
                                <RecipeCard handleOnEdit={handleRecipeEdit}
                                              recipe={recipe} />
                            </div>
                        </Col>
                    );
                })}
                </>)
                : (<Spinner animation="border"/>)}
        </Row>
    );
}

export default AllRecipesView
