import {Button, Card} from "react-bootstrap";

function RecipeCard({recipe, handleOnEdit, handleOnDelete}) {

    return (
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Subtitle className="mb-2">{recipe.description}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Ingredients: {recipe.ingredients}</Card.Subtitle>
                <Card.Subtitle className="mb-3 text-muted">Complexity: {recipe.lvl}</Card.Subtitle>
                <div className="d-flex justify-content-between">
                    <Button onClick={() => handleOnEdit(recipe.id)} >Edit</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default RecipeCard;
