import { useEffect, useState } from "react";

export const useCountdown = ({ initialTimeInSeconds = 0 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const displayTime = `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`;
  const isExpired = timeLeft <= 0;

  return { displayTime, isExpired };
};

export default useCountdown;