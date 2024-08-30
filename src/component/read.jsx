import React, { useEffect, useState } from 'react';
import { Button, Table, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Read = () => {
    const [APIData, setAPIData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Items per page
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [isLoading, setIsLoading] = useState(true); // State to track loading status


    useEffect(() => {
        // Fetch data from API
        axios.get('https://66c73cd0732bf1b79fa5d9c8.mockapi.io/Crud-App')
            .then((response) => {
                setAPIData(response.data);
                setIsLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error('There was an error fetching data!', error);
                setIsLoading(false); // Set loading to false in case of error
                navigate('/404'); // Redirect to 404 page in case of an error
            });
    }, [navigate]);

    const setData = (data) => {
        let { id, name, email, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('checkbox', checkbox);
    };

    const getData = () => {
        setIsLoading(true); // Show loading indicator when fetching data
        axios.get('https://66c73cd0732bf1b79fa5d9c8.mockapi.io/Crud-App')
            .then((response) => {
                setAPIData(response.data);
                setIsLoading(false); // Hide loading indicator after data is fetched
            })
            .catch(() => {
                setIsLoading(false); // Hide loading indicator if error occurs
            });
    };

    const onDelete = (id) => {
        setIsLoading(true); // Show loading indicator when deleting data
        axios.delete(`https://66c73cd0732bf1b79fa5d9c8.mockapi.io/Crud-App/${id}`)
            .then(() => {
                getData();
            })
            .catch((error) => {
                setIsLoading(false); // Hide loading indicator if error occurs
                console.error('There was an error deleting the data!', error);
                alert('Delete failed. Please try again.');
            });
    };

    // Calculate index range for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = APIData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total pages
    const totalPages = Math.ceil(APIData.length / itemsPerPage);

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Serial No.</Table.HeaderCell> {/* New Column for Serial No. */}
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Terms</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {currentItems.map((data, index) => (
                        <Table.Row key={data.id}>
                            <Table.Cell>{indexOfFirstItem + index + 1}</Table.Cell> {/* Serial Number Calculation */}
                            <Table.Cell>{data.name}</Table.Cell>
                            <Table.Cell>{data.email}</Table.Cell>
                            <Table.Cell>
                                {data.checkbox ? (

                                    <Icon name='lock' />) : (
                                    <Icon name='lock open' />)}
                            </Table.Cell>
                            <Table.Cell>
                                <Link to='/update'>
                                    <Button positive onClick={() => setData(data)}>Update</Button>
                                </Link>
                            </Table.Cell>
                            <Table.Cell>
                                <Button negative onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            {/* Pagination Controls */}
            <div style={{ marginTop: '20px' }}>
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                {[...Array(totalPages)].map((_, index) => (
                    <Button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        style={{ margin: '0 5px' }}
                    >
                        {index + 1}
                    </Button>
                ))}
                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Read;
