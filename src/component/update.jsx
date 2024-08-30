import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

const Update = () => {
    const [name, setName] = useState('');
    const [id, setID] = useState(null);
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setCheckbox(localStorage.getItem('checkbox'))
    }, []);


    const updateAPIData = () => {
        try {
            axios.put(`https://66c73cd0732bf1b79fa5d9c8.mockapi.io/Crud-App/${id}`, {
                name,
                email,
                checkbox
            })
        } catch (error) {
            console.error('There was an error updating the data!', error);
            alert('Update failed. Please try again.');
        }
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='First Name' value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>email</label>
                    <input placeholder='Last Name' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}

export default Update;