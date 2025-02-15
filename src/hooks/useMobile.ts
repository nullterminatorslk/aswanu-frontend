"use client";
import { DeviceContext } from "@/providers/DeviceProvider";
import { FC, PropsWithChildren, useContext } from "react";
import { useClientMediaQuery } from "./useClientMediaQuery";

const WIDTH_THRESHOLD = 480;

export const useMobile = () => {
  const isMobile = useClientMediaQuery(`(max-width: ${WIDTH_THRESHOLD}px)`);

  const isMobileFromServer = useContext(DeviceContext);

  // server side hydrated to avoid UI flickering
  return isMobileFromServer || isMobile;
};

export const DesktopView: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMobile();

  if (isMobile) return null;

  return children;
};

export const MobileView: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMobile();

  if (!isMobile) return null;

  return children;
};
