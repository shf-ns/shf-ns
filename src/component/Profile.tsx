import styles from "@styles/component/Profile.module.css";
import type { ReactNode } from "react";
import Avatar from "./Avatar";

function Profile(): ReactNode {
  return (
    <div className={styles.profile}>
      <div className={styles.profileTop}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <p>shf-ns</p>
        <h3>欢迎来到我的个人网站！</h3>
      </div>
      <p className={styles.quote}>quto</p>
    </div>
  );
}

export default Profile;
