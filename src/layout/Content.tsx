import styles from "@/assets/style/layout/Content.module.css";
import { Profile, RandomTalk, Time } from "@/component";
import type { ReactNode } from "react";

function Content(): ReactNode {
  return (
    <div className={styles.content}>
      <Profile />
      <div className={styles.show}>
        <Time />
        <RandomTalk />
      </div>
    </div>
  );
}
export default Content;
