import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import { useState } from 'react';
import styles from './FaqItem.module.css';

function FaqItem({ title, children }) {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();

  function toggleOpen() {
    setOpen(!isOpen);
  }
  return (
    <div className={styles.faq__item}>
      <div onClick={toggleOpen} className={styles.faq__header}>
        <div>{title}</div>
        <div className={styles.faq__ico}>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className={styles.faq__text}>{children}</div>}
    </div>
  );
}

export default FaqItem;
