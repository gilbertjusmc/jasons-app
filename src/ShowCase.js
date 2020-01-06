import React from 'react';

function ShowCase(props) {
    return (
        <>
            <h1>Jason Gilbert</h1>
            <ul>
                <li>Home</li>
                <li>About {props.name}</li>
                <li>Contact {props.name}</li>
            </ul>
        </>
    );
}

export default ShowCase;