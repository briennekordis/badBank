import React from 'react';
import { Card } from "react-bootstrap";
import banklogo from "../images/bank.png";

function Home() {
        return (
            <Card style={{ color: "black", width: "18rem" }}>
                <Card.Header>badBank Home Page</Card.Header>
                <Card.Img variant="top" src={banklogo} alt="Responsive image" className="img-fluid"/>
                <Card.Body>
                    <Card.Title>Welcome to the badBank</Card.Title>
                    <Card.Text>
                        You can move around using the navigation bar to check your balance, deposit into your account, or withdraw funds.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

export default Home;