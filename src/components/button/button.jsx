import React from 'react'

function Button({onClick,children}) {
    const handleClick = () =>{
        onClick("hey clicked")
    };

    return <button onClick={handleClick}>{children}</button>
}

export {Button};