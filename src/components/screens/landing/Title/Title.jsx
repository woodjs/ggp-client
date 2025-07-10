import classnames from './Title.module.css';
/**
 * @param {React.HTMLAttributes} props
 */
function Title({ className = '', ...rest }) {
  return <div className={`${classnames.title} ${className}`} {...rest} />;
}

export default Title;
