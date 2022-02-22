import PropTypes from 'prop-types';

import React from 'react'

const Button = ({ color, text, onClick }) => {
    return (<button onClick={onClick} style={{
        backgroundColor: color,
        color: 'black',
        fontWeight: 'bold'
    }} className='btn'>
        {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button