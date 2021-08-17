import React, { useState, useEffect } from "react";

interface propTypes {
  intialSeconds: number;
  startStatus: boolean;
  forceReset?: boolean;
  counterCallback?: any;
}

const Counter = ({
  intialSeconds,
  startStatus,
  forceReset = false,
  counterCallback,
}: propTypes) => {
  const [seconds, setSeconds] = useState(intialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (startStatus) setSeconds(seconds + 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [startStatus, seconds]);

  useEffect(() => {
    if (forceReset) {
      counterCallback(seconds);
      setSeconds(0);
    }
  }, [forceReset]);

  const counterFormatter = (seconds: number) => {
    if (seconds > 0)
      return new Date(seconds * 1000).toISOString().substr(11, 8);

    return "00:00:00";
  };

  return <>{counterFormatter(seconds)}</>;
};

export default Counter;
