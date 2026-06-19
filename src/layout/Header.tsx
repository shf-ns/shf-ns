import styles from "@styles/layout/Header.module.css";
import Avatar from "@component/Avatar";

function Header(): React.ReactNode {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Avatar />
        <span className={styles.divider}></span>
        <p>shf-ns</p>
      </div>
      <div className={styles.headerRight}>
        <div>github</div>
        <div>菜单</div>
      </div>
    </div>
  );
}
export default Header;
