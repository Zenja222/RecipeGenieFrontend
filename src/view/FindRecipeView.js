import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import {findByLvl} from "../client/RecipeApiClient";
import RecipeCard from "../components/RecipeCard/RecipeCard";
function FindRecipeView() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [level, setLevel] = useState('');

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    const handleFetchRecipes = async () => {
        setLoading(true);
        try {
            const fetchedRecipes = await findByLvl(level);
            setRecipes(fetchedRecipes);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (id) => {
        console.log(`Edit recipe with id: ${id}`);
    };

    return (
        <div className="text-center>">
            <Form className="my-4">
                <Form.Group controlId="formLevel">
                    <Form.Label style={{fontSize: "50px"}}>Select Cooking Skill Level</Form.Label>
                    <Form.Control
                        as="select"
                        value={level}
                        onChange={handleLevelChange}
                    >
                        <option value="">Choose...</option>
                        <option value="1">1 - Newbie</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5 - Professional</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="warning" onClick={handleFetchRecipes} disabled={loading} className="mt-4">
                    {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Find Recipes'}
                </Button>
            </Form>

            <Row>
                {recipes.map(recipe => (
                    <Col key={recipe.id} sm={12} md={6} lg={4}>
                        <RecipeCard recipe={recipe} handleOnEdit={handleEdit} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default FindRecipeView;
