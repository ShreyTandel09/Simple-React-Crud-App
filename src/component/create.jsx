import React, { useState } from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    const onSubmit = (data) => {
        axios.post('https://66c73cd0732bf1b79fa5d9c8.mockapi.io/Crud-App', data)
            .then((response) => {
                if (response.status === 201 || response.status === 200) {
                    console.log('Data posted successfully!', response.data);
                    setSuccess(true); // Set success to true to display the message
                    reset(); // Reset form fields after successful submission
                }
            })
            .catch((error) => {
                console.error('There was an error posting the data!', error);
                alert('Failed to post data. Please try again.');
            });
    };

    const handleViewClick = () => {
        navigate('/read'); // Navigate to the /read route
    };

    return (
        <div>
            {/* Show the success message if data was posted successfully */}
            {success && (
                <Message
                    success
                    header='User Created Successfully'
                    onDismiss={() => setSuccess(false)} // Optionally dismiss the message
                />
            )}
            <Form className="create-form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Name</label>
                    <input
                        placeholder='Name'
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                </Form.Field>

                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='email'
                        {...register('email', { required: 'email is required' })}
                    />
                    {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        label='I agree to the Terms and Conditions'
                        {...register('checkbox')}
                    />
                </Form.Field>
                <Button primary type='submit'>Submit</Button>
                <Button
                    color='white'
                    content='View Data'
                    icon='caret right'
                    labelPosition='left'
                    onClick={handleViewClick}
                />
            </Form>
        </div>
    );
};

export default Create;
