import React, { useState } from 'react';
import { Button, Divider, Input, Segment } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const HomePage = () => {

    const navigate = useNavigate(); // Initialize useNavigate hook
    const [searchQuery, setSearchQuery] = useState('');

    const handleCreateClick = () => {
        navigate('/create'); // Navigate to the /create route
    };
    const handleViewClick = () => {
        navigate('/read'); // Navigate to the /create route
    };

    const handleSearchClick = () => {
        console.log('Search clicked!', searchQuery);
        //     try {
        //         axios.get(`https://66c73cd0732bf1b79fa5d9c8.mockapi.io/Crud-App/${searchQuery}`)
        //             .then((res) => {
        //                 console.log(res.data);
        //             });
        //     } catch (error) {
        //         console.error('There was an error Deleting the data!', error);
        //         alert('Delete failed. Please try again.');
        //     }
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);


    };
    return (
        <div>
            <Segment basic textAlign='center'>
                {/* <Input
                    action={{ color: 'blue', content: 'Search', onClick: handleSearchClick, }}
                    icon='search'
                    iconPosition='left'
                    placeholder='search'
                    onChange={handleInputChange}

                />

                <Divider horizontal>Or</Divider> */}

                <Button
                    color='teal'
                    content='Create New Data'
                    icon='add'
                    labelPosition='left'
                    onClick={handleCreateClick}
                />

                <Button
                    color='white'
                    content='View Data'
                    icon='caret right'
                    labelPosition='left'
                    onClick={handleViewClick}

                />
            </Segment>


        </div>
    );

}

export default HomePage;