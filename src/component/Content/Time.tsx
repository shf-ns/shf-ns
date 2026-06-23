import styles from "@styles/component/Content/Time.module.css";
import type { ReactNode } from "react";

function Time(): ReactNode {
  return (
    <div className={styles.time}>
      <p className={styles.timeTitle}>时/分/秒</p>
      <p className={styles.timeText}>年/月/日</p>
    </div>
  );
}

export default Time;
