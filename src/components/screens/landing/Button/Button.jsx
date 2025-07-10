import React from 'react';
import classnames from './Button.module.css';
/**
 *
 * @typedef {Object} ButtonProps
 * @property {string} classname
 * @property {"fill" | "outline"} variant
 *
 * @param {React.ButtonHTMLAttributes & ButtonProps} props
 * @returns {JSX.Element}
 */

function Button({ classname = '', variant = 'fill', ...rest }) {
  return (
    <button
      type="button"
      className={`${classnames.button} ${classnames[variant]} ${classname}`}
      {...rest}
    />
  );
}

export default Button;
