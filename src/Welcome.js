import React from 'react';

function Welcome(props) {
    props.name = "nakamura"
    return <h1>Hello, {props.name}</h1>;
}

export default Welcome;