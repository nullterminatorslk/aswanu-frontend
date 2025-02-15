"use client";

import { FC, PropsWithChildren, createContext } from "react";

export const DeviceContext = createContext(false);

type DeviceProviderProps = {
  isMobile: boolean;
};

const DeviceProvider: FC<PropsWithChildren<DeviceProviderProps>> = ({
  isMobile,
  children,
}) => {
  return (
    <DeviceContext.Provider value={isMobile}>{children}</DeviceContext.Provider>
  );
};

export default DeviceProvider;
