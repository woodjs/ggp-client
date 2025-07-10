import classnames from './Text.module.css';
/**
 * @param {React.HTMLAttributes} props
 */
function Text({ className = '', ...rest }) {
  return <div className={`${classnames.text} ${className}`} {...rest} />;
}

export default Text;
