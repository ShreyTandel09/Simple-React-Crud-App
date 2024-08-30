
import React, { useState } from 'react';
import { Button, Divider, Input, Segment } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the /create route

    }
    return (
        <h2 className="main-header">
            <Button
                color='black'
                icon='home'
                onClick={handleHomeClick}
                padding='30px'
            />
            React CRUD Operations</h2>
    )
}

export default Header