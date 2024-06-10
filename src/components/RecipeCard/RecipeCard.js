import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import RecipeModal from "../RecipeModal/RecipeModal";

function RecipeCard({ recipe, handleOnEdit }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Ingredients: {recipe.ingredients}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Complexity: {recipe.lvl}</Card.Subtitle>
                    <div className="d-flex justify-content-between">
                        <Button variant="primary" onClick={handleOpenModal}>Open Recipe</Button>
                        <Button onClick={() => handleOnEdit(recipe.id)}>Edit</Button>
                    </div>
                </Card.Body>
            </Card>
            <RecipeModal show={showModal} handleClose={handleCloseModal} recipe={recipe} />
        </>
    );
}

export default RecipeCard;
