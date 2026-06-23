import styles from "@styles/component/Content/RandomTalk.module.css";
import type { ReactNode } from "react";
function RandomTalk(): ReactNode {
  return (
    <div className={styles.randomTalk}>
      <p className={styles.randomTalkText}>随机话内容</p>
      <p className={styles.randomTalkAuthor}>随机话作者</p>
    </div>
  );
}

export default RandomTalk;
