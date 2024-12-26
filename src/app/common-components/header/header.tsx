"use client";

import Desktop from "./desktop";
import Mobile from "./mobile";
import Tablet from "./tablet";
import { useResponsive, DeviceType } from "../../hooks/index";

export default function Header() {
  const device = useResponsive();

  return (
    <>
      <Desktop />
      {/* {device.isDesktop && <Desktop/>}
    {device.isTablet && <Tablet/>}
    {device.isMobile && <Mobile/>} */}
    </>
  );
}
