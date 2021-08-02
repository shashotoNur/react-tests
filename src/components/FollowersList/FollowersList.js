import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import "./FollowersList.css";

const FollowersList = () =>
    {
        const [followers, setFollowers] = useState([]);
        useEffect(
            () => {
                const fetchFollowers = async () =>
                {
                    const res = await axios.get("https://randomuser.me/api/?results=5");
                    setFollowers(res.data.results);
                };
                fetchFollowers();
            }, []
        );

        return (
            <div className="followerslist-container">
                <div>
                    {followers.map(
                        (follower, index) =>
                        (
                            <div key={`follower-item-${index}`} className="follower-item" data-testid={`follower-item-${index}`}>
                                <img alt={ follower.login.username } src={ follower.picture.large }/>

                                <div className="followers-details">

                                    <div className="follower-item-name">
                                        <h4>{ follower.name.first }</h4> <h4>{ follower.name.last }</h4>
                                    </div>

                                    <p>{ follower.login.username }</p>
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className="todo-footer">
                    <Link to="/"> Go Back </Link>
                </div>
            </div>
        );
    };

export default FollowersList;