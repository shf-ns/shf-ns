import styles from "@/assets/style/layout/Profile.module.css";
import type { ReactNode } from "react";
import Avatar from "@/component/Avatar";
import { useTranslation } from "react-i18next";

function Profile(): ReactNode {
  const { t } = useTranslation();
  return (
    <div className={styles.profile}>
      <div className={styles.profileTop}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <p>shf-ns</p>
        <h3 style={{ fontSize: "15px" }}>{t("profile.welcome")}</h3>
      </div>
      <p className={styles.quote}>{t("profile.quote")}</p>
    </div>
  );
}

export default Profile;
