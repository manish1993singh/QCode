import { HamburgerButton, Earth } from "@icon-park/react";
import style from "./desktop-style.module.scss";
import { Button, Drawer } from "antd";
import { useState } from "react";

export default function Desktop() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.header}>
      <div className={style.brand}>
        <Earth />
        <div className={style.name}>Q Code</div>
      </div>
      <div className={style.quick_action}></div>
      <Button
        className={style.hamburger_container}
        type="text"
        onClick={showDrawer}
      >
        <HamburgerButton size="32" />
      </Button>
      <div></div>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
