import avatar from "@/assets/img/avatar.webp";
import styles from "@styles/component/Avatar.module.css";
import type { ReactNode } from "react";

function Avatar(): ReactNode {
  return (
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
  );
}
export default Avatar;
