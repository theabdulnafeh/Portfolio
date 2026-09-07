import React from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Loading' }) => {
  const letters = text.split('');

  return (
    <div className={styles.loaderWrapper}>
      {letters.map((char, index) => (
        <span
          key={index}
          className={styles.loaderLetter}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
