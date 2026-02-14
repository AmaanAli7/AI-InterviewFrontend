import { useEffect, useState } from "react";

export default function InterviewTimer({ duration, onFinish }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) {
      onFinish();
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onFinish]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-xl font-mono text-blue-400">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
