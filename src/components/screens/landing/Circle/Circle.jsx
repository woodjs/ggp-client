import classnames from './Circle.module.css';

function Circle({ className = '' }) {
  return <div className={`${classnames.circle} ${className}`} />;
}

export default Circle;
