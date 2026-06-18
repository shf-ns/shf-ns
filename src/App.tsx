import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>头部</div>
      <div className={styles.main}>
        <div className={styles.sidebar}></div>
        <div className={styles.content}>主体</div>
        <div className={styles.sidebar}></div>
      </div>
    </div>
  );
}

export default App;
