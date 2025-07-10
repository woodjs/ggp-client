import classnames from './Container.module.css';

/**
 *
 * @param {React.HTMLAttributes} props
 */
function Container({ className = '', ...rest }) {
  return <div className={`${classnames.container} ${className}`} {...rest} />;
}

export default Container;
