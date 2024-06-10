import React from 'react';
import './MainPage.css';
// import {useNavigate} from "react-router-dom";

function MainPage() {

    // const navigate = useNavigate();

    // const handleBookingPost = async () => {
    //     navigate('/booking/add')
    // }

    return (
        <div>
            <h1 className='bb-app' style={{paddingTop: '40px', textAlign: 'center'}}>
                Recipe Genie
            </h1>
            {/*<div className="text-center" style={{ marginTop: '20px' }}>*/}
            {/*    <Button  onClick={() => handleBookingPost()} variant="primary" size='lg'>Book hotel </Button>*/}
            {/*</div>*/}
        </div>
    );
}

export default MainPage;
