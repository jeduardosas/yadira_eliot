import React, { useState, useEffect } from 'react';
import '../styles/contdown.css'

const CountDown = () => {
  // Establecer la fecha objetivo de manera estática (año, mes - 1, día, hora, minutos)
  const targetDate = new Date(2024, 9, 11, 17, 0);

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  function calculateTimeRemaining(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      // Si la fecha objetivo ya pasó, devolvemos todos los valores como 0
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
      <div className='countDown'>
        
        <div className='cont' >
          <div className='cont-item'>
            <p>{timeRemaining.days}</p>
            <span>días</span>
          </div>

          <div className="cont-item">
            <p>{timeRemaining.hours}</p>
            <span>horas</span>
          </div>

          <div className="cont-item">
            <p>{timeRemaining.minutes}</p>
            <span>minutos</span>
          </div>

          <div className="cont-item">
            <p>{timeRemaining.seconds}</p>
            <span>segundos</span>
          </div>
        </div>
      </div>
  );
};

export default CountDown;
