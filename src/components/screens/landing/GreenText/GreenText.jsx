import classnames from './GreenText.module.css';
/**
 * @param {React.HTMLAttributes} props
 */
function GreenText({ className = '', shadow = false, ...rest }) {
  return (
    <span
      className={`${classnames.green} ${className} ${
        shadow && classnames.shadow
      }`}
      {...rest}
    />
  );
}

export default GreenText;
