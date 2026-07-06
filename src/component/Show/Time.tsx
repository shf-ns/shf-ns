import styles from "@/assets/style/component/Show/Time.module.css";
import { useEffect, useState, type ReactNode } from "react";
import { computeTime } from "@/utils";
import { type Times } from "@/types";
import { useAppDispatch } from "@/hook";
import { saveTime } from "@/store/module/Time";
import type { AppDispatch } from "@/store";

function Time(): ReactNode {
  const [currentTime, setCurrentTime] = useState<Times>(
    computeTime(new Date()),
  );

  const dispatch: AppDispatch = useAppDispatch();

  useEffect((): (() => void) => {
    const timer: number = setInterval(() => {
      setCurrentTime(computeTime(new Date()));
    }, 1000);

    const data: string = new Date().toDateString();
    dispatch(saveTime(data));

    return (): void => clearInterval(timer);
  }, [dispatch]);

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
