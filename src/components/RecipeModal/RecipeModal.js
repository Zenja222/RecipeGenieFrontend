import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function RecipeModal({ show, handleClose, recipe }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{recipe.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Description:</strong> {recipe.description}</p>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    {recipe.ingredients.split(',').map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <p><strong>Complexity:</strong> {recipe.lvl}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RecipeModal;
