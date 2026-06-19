import avatar from "@/assets/img/avatar.webp";
import styles from "@styles/component/Avatar.module.css";

function Avatar() {
  return (
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
  );
}
export default Avatar;
