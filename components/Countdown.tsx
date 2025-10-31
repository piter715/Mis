
import React, { useState, useEffect, useCallback } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        días: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      }
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, calculateTimeLeft]);

  // Fix: Used React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft] && timeLeft[interval as keyof typeof timeLeft] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-blur-lg rounded-xl w-24 h-24 p-2 shadow-lg">
        <span className="text-4xl font-bold text-white text-glow">{timeLeft[interval as keyof typeof timeLeft]}</span>
        <span className="text-sm uppercase text-pink-200">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center space-x-2 md:space-x-4 my-8">
      {timerComponents.length ? timerComponents : <span>¡El gran día ha llegado!</span>}
    </div>
  );
};

export default Countdown;
