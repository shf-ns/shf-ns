import styles from "@/assets/style/component/Menu/Language.module.css";
import { t } from "i18next";

function Language({ language }: { language: string }): React.ReactNode {
  return (
    <div className={styles.language}>
      <p className={styles.title}>{t("menu.Language")}：</p>
      <div className={styles.content}>
        <span
          style={{
            color: language === "zh" ? "#a3c6da" : "#8a8a8a",
            fontSize: "17px",
          }}
        >
          zh
        </span>
        <span className={styles.divider}></span>
        <span
          style={{
            color: language === "zh" ? "#8a8a8a" : "#a3c6da",
            fontSize: "17px",
          }}
        >
          en
        </span>
      </div>
    </div>
  );
}
export default Language;
