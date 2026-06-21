import styles from "@styles/component/Menu/Language.module.css";

function Language(): React.ReactNode {
  return (
    <div className={styles.language}>
      <p className={styles.title}>语言：</p>
      <div className={styles.content}>
        <label htmlFor="en" className={styles.en}>
          <input
            type="radio"
            name="language"
            value="en"
            id="en"
            style={{ display: "none" }}
          />
          <span>En</span>
        </label>
        <span className={styles.divider}></span>
        <label htmlFor="zh" className={styles.zh}>
          <input
            type="radio"
            name="language"
            value="zh"
            id="zh"
            style={{ display: "none" }}
          />
          <span>Cn</span>
        </label>
      </div>
    </div>
  );
}
export default Language;
