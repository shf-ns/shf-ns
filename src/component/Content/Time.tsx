import styles from "@styles/component/Content/Time.module.css";
import { useEffect, useState, type ReactNode } from "react";
import computeTime from "@/utils/computeTime";
import { type Time } from "@/types/time";

function Time(): ReactNode {
  const [currentTime, setCurrentTime] = useState<Time>(computeTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(computeTime(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.time}>
      <p className={styles.timeTitle}>
        {currentTime.hour}:{currentTime.minute}:{currentTime.second}
      </p>
      <p className={styles.timeText}>
        {currentTime.year}/{currentTime.month}/{currentTime.day}
      </p>
    </div>
  );
}

export default Time;
