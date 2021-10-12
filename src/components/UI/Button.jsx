import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES=['btn--dark','btn--light'];
const SIZES=['btn--medium','btn--small']




const Button = ({children,
type,
buttonstyle,
buttonsize
}) => {

    const checkButtonStyle=STYLES.includes(buttonstyle) ? buttonstyle : STYLES[0];
    const checkButtonSize=SIZES.includes(buttonsize) ? buttonsize : SIZES[0];
    


    return(
        <Link to='/' className="btn-mobile">
            <button type={type} className={`btn--outline ${checkButtonStyle} ${checkButtonSize}`}>
                {children}
                </button>
        </Link>
    )
}

export default Button;