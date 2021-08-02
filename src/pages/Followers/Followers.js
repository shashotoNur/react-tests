import React from 'react';
import { Container } from "react-bootstrap";

import "./Followers.css";

import FollowersList from '../../components/FollowersList/FollowersList';
import Header from '../../components/Header/Header';

const Followers = () =>
    {
        return (
            <div>
                <Container>
                    <div className="followers">
                        <Header title="Followers" />
                        <FollowersList />
                    </div>
                </Container>
            </div>
        );
    };

export default Followers;