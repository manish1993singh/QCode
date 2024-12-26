"use client"

import { useState, useEffect } from 'react';

export enum DeviceType {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Desktop = 'desktop',
}

export interface IDeviceType {
    isDesktop: boolean,
    isTablet: boolean,
    isMobile: boolean
}

function useResponsive(): IDeviceType {
  const [device, setDevice] = useState<DeviceType>(DeviceType.Desktop);

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setDevice(DeviceType.Mobile);
      } else if (window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches) {
        setDevice(DeviceType.Tablet);
      } else {
        setDevice(DeviceType.Desktop);
      }
    };

    // Set the initial value
    updateDeviceType();

    // Add listeners for changes
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const tabletQuery = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
    const desktopQuery = window.matchMedia('(min-width: 1025px)');

    const handleMobileChange = (e: MediaQueryListEvent) => e.matches && setDevice(DeviceType.Mobile);
    const handleTabletChange = (e: MediaQueryListEvent) => e.matches && setDevice(DeviceType.Tablet);
    const handleDesktopChange = (e: MediaQueryListEvent) => e.matches && setDevice(DeviceType.Desktop);

    mobileQuery.addEventListener('change', handleMobileChange);
    tabletQuery.addEventListener('change', handleTabletChange);
    desktopQuery.addEventListener('change', handleDesktopChange);

    // Cleanup listeners on component unmount
    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange);
      tabletQuery.removeEventListener('change', handleTabletChange);
      desktopQuery.removeEventListener('change', handleDesktopChange);
    };
  }, []);

  const screenType = {
    isDesktop: device === DeviceType.Desktop,
    isTablet: device === DeviceType.Tablet,
    isMobile: device === DeviceType.Mobile
  }
  return screenType;
}

export default useResponsive;
