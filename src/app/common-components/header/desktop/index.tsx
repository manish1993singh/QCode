import { HamburgerButton, Earth } from "@icon-park/react";
import style from "./desktop-style.module.scss";

export default function Desktop() {
  return (
    <div className={style.header}>
      <div className={style.brand}>
        <Earth />
        <div className={style.name}>Q Code</div>
      </div>
      <div className={style.quick_action}></div>
      <button className={style.hamburger_container}>
        <HamburgerButton size="32" />
      </button>
      <div></div>
    </div>
  );
}
