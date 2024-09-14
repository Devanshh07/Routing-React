import React from 'react';
import { useParams } from 'react-router-dom';

function User(props) {
     const {userID} = useParams()
    return (
        <div>
        user:{userID}
        </div>
    );
}

export default User;