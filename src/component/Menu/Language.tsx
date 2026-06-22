import styles from "@styles/component/Menu/Language.module.css";

function Language({ language }: { language: string }): React.ReactNode {
  return (
    <div className={styles.language}>
      <p className={styles.title}>语言：</p>
      <div className={styles.content}>
        <span style={{ color: language === "zh" ? "white" : "#8a8a8a" }}>
          zh
        </span>
        <span className={styles.divider}></span>
        <span style={{ color: language === "zh" ? "#8a8a8a" : "white" }}>
          en
        </span>
      </div>
    </div>
  );
}
export default Language;
