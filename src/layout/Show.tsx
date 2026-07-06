import { Time, RandomTalk } from "@/component/Show";
import styles from "@/assets/style/layout/Show.module.css";

function Show(): React.ReactNode {
  return (
    <div className={styles.show}>
      <Time />
      <RandomTalk />
    </div>
  );
}

export default Show;
