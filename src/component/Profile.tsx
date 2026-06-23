import styles from "@styles/component/Profile.module.css";
import type { ReactNode } from "react";

function Profile(): ReactNode {
  return (
    <div className={styles.profile}>
      <div>Profile</div>
      <p>quto</p>
    </div>
  );
}

export default Profile;
