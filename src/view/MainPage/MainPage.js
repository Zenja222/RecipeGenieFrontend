import React from 'react';
import './MainPage.css';
import {Button, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

function MainPage() {

    const navigate = useNavigate();

    const allRecipeView = async () => {
        navigate('/recipes')
    }

    return (
        <div className="align-content-center" style={{paddingTop: '30px', textAlign: 'center'}}>
            <h1 className='bb-app'>
                Recipe Genie
            </h1>
            <h2 className='p-4 text-muted'>
                Personalized Recipe Recommendation System
            </h2>
            <div>
                <Image src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                        style={{width: '360px', height: '360px', paddingRight: '30px'}}/>
                <Image src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                       style={{width: '360px', height: '360px', paddingRight: '30px'}}/>
                <Image src="https://www.eatingwell.com/thmb/rmLlvSjdnJCCy_7iqqj3x7XS72c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chopped-power-salad-with-chicken-0ad93f1931524a679c0f8854d74e6e57.jpg"
                       style={{width: '360px', height: '360px'}}/>
            </div>
            <div className="text-center" style={{ marginTop: '30px' }}>
                <Button  onClick={() => allRecipeView()} variant="warning" size='lg'>ALL RECIPES</Button>
            </div>
        </div>
    );
}

export default MainPage;
