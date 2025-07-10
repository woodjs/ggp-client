import { useState } from 'react';
import { Container } from '../Container';
import classnames from './BurgerMenu.module.css';

function BurgerMenu({ children, isLight }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div onClick={() => onClick()} className={classnames.wrap} />
      )}
      <div
        data-is-light={isLight}
        className={
          isOpen
            ? `${classnames.menu} ${classnames['menu--active']}`
            : classnames.menu
        }
      >
        <Container>
          <div className={classnames.menublock}>
            <button
              onClick={onClick}
              type="button"
              className={classnames.block}
            >
              <div className={classnames.line} />
              <div className={classnames.line} />
              <div className={classnames.line} />
            </button>
          </div>
          {children({ onClose: onClick })}
        </Container>
      </div>

      <button
        data-is-light={isLight}
        onClick={onClick}
        type="button"
        className={classnames.block}
      >
        <div className={classnames.line} />
        <div className={classnames.line} />
        <div className={classnames.line} />
      </button>
    </>
  );
}

export default BurgerMenu;
