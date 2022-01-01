import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import * as styles from './styles';

interface ButtonProps {
  text: string;
  link: string;
  isInternal?: boolean;
}

const Button = ({text, link, isInternal=true}: ButtonProps) => {
  
	return ( isInternal ? 
    <Link to={link}>
      <styles.Button>
        {text}
      </styles.Button>
    </Link>
    :
    <a href={link}>
      <styles.Button>
        <h5>{text}</h5>
      </styles.Button>
    </a>
  )
};

export default Button;