import React from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

const NotFoundPage = () => {
    return (
        <div className="main">
            <Container textAlign="center">
                <Header as="h1" className="main-header">
                    404
                </Header>
                <Header as="h2" className="main-header">
                    Page Not Found
                </Header>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <Button color="grey" size="large" href="/">
                    <Icon name="home" />
                    Go Back Home
                </Button>
            </Container>
        </div>
    );
};

export default NotFoundPage;
