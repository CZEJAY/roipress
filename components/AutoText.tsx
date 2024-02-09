import clsx from 'clsx';
import { useState, useEffect } from 'react';

interface AutoTextProps {
  textArray: string[];
  speed: number;
  className?: string;
}

const AutoText: React.FC<AutoTextProps> = ({ textArray, speed, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(textArray);


  useEffect(() => {
    const currentText = textArray[currentIndex];
    

    const interval = setInterval(() => {
      if (displayText.length < currentText.length) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        setTimeout(() => {
          setDisplayText('');
          // setCurrentIndex((prev) => prev++)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }, speed / 0.9); // Adjust the delay as needed
      }
    }, speed);

    return () => clearInterval(interval);
  }, [displayText, currentIndex, textArray, speed]);

  return <span className={clsx(
    "autoText text-dark-1 dark:text-light-1 !border-r-blue-500 !text-[1.5rem] sm:text-[2.95rem] ",
    !!className && className
  )}>{displayText}</span>;
};

export default AutoText;
