import { useEffect, useState } from "react";
import { Language, Theme } from "../component/Menu";
import { useAppSelector, useClickOutside } from "@hook/index";
import styles from "@styles/component/Menu/Menu.module.css";
import { useAppDispatch } from "@hook/index";
import { getLanguage, saveLanguage } from "@store/module/LanguageSlice";
import type { AppDispatch } from "@/store";

function Menu(): React.ReactNode {
  const [isShow, setIsShow] = useState<boolean>(false);

  const language: string = useAppSelector(
    (state: { language: { value: string } }) => state.language.value,
  );
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLanguage());
  }, [dispatch]);

  const boxRef: React.RefObject<HTMLUListElement | null> = useClickOutside(
    (): void => {
      setIsShow(false);
    },
  );

  return (
    <div style={{ position: "relative" }}>
      <div
        className={styles.btn}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setIsShow(!isShow);
        }}
      >
        <svg
          width="100%"
          height="100%"
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
      </div>
      <ul
        ref={boxRef}
        className={styles.menu}
        style={{ display: isShow ? "flex" : "none" }}
      >
        <li className={styles.item} onClick={() => dispatch(saveLanguage())}>
          <Language language={language} />
        </li>
        <li className={styles.item}>
          <Theme />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
