import { Language, Theme } from "../component/Menu";
import styles from "@styles/component/Menu/Menu.module.css";

function Menu(): React.ReactNode {
  return (
    <div style={{ position: "relative" }}>
      <svg
        width="35px"
        height="35px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#a3c6da"
          d="M188.2 507.2m-91.5 0a91.5 91.5 0 1 0 183 0 91.5 91.5 0 1 0-183 0Z"
        />
        <path
          fill="#a3c6da"
          d="M516.2 507.2m-91.5 0a91.5 91.5 0 1 0 183 0 91.5 91.5 0 1 0-183 0Z"
        />
        <path
          fill="#a3c6da"
          d="M836.5 507.2m-91.5 0a91.5 91.5 0 1 0 183 0 91.5 91.5 0 1 0-183 0Z"
        />
      </svg>
      <div className={styles.menu}>
        <Language />
        <Theme />
      </div>
    </div>
  );
}

export default Menu;
