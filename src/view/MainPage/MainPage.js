import React from 'react';
import './MainPage.css';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

function MainPage() {

    const navigate = useNavigate();

    const handleRecipePost = async () => {
        navigate('/recipe/add')
    }

    return (
        <div className="align-content-center" style={{paddingTop: '40px', textAlign: 'center'}}>
            <h1 className='bb-app'>
                Recipe Genie
            </h1>
            <h2 className='p-4'>
                Personalized Recipe Recommendation System
            </h2>
            <div className="text-center" style={{ marginTop: '20px' }}>
                <Button  onClick={() => handleRecipePost()} variant="primary" size='lg'>ALL RECIPES</Button>
            </div>
        </div>
    );
}

export default MainPage;
