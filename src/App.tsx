import styles from "@/assets/style/App.module.css";
import { Sidebar, Header, Profile, Show } from "@/layout";
import { useAppSelector } from "@/hook";
import { useEffect } from "react";

function App(): React.ReactNode {
  const theme: string = useAppSelector(
    (state: { theme: { value: string } }) => state.theme.value,
  );

  useEffect((): void => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <Profile />
          <Show />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
