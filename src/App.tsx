import styles from "@/App.module.css";
import { Sidebar, Header } from "@/layout";

function App(): React.ReactNode {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>内容</div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
