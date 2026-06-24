import styles from "@/assets/style/layout/Header.module.css";
import { Avatar, GithubLink } from "@/component";
import Menu from "@/layout/Menu";

function Header(): React.ReactNode {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <span className={styles.divider}></span>
        <p>shf-ns</p>
      </div>
      <div className={styles.headerRight}>
        <GithubLink />
        <Menu />
      </div>
    </div>
  );
}
export default Header;
