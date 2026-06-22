import styles from "@styles/App.module.css";
import { Sidebar, Header, Content } from "@/layout";

function App(): React.ReactNode {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <Content />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
