import { useState, useEffect, useRef } from 'react';

export function formatEngagementDuration(totalSeconds: number): string {
  if (totalSeconds < 60) {
    return `${Math.max(1, totalSeconds)} sec`;
  }
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  if (secs === 0) {
    return `${mins} min`;
  }
  return `${mins} min ${secs} sec`;
}

export function useEngagementTimer(): { elapsedSeconds: number; formattedDuration: string } {
  const startTimeRef = useRef<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  useEffect(() => {
    const start = Date.now();
    startTimeRef.current = start;

    const interval = setInterval(() => {
      if (startTimeRef.current !== null) {
        const seconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
        setElapsedSeconds(seconds);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return {
    elapsedSeconds,
    formattedDuration: formatEngagementDuration(elapsedSeconds),
  };
}
