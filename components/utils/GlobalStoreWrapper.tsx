"use client";
import { FC, ReactNode } from "react";

import useClientGlobalStore from "./useClientGlobalStore";

const GlobalStoreWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  useClientGlobalStore();
  return <>{children}</>;
};

export default GlobalStoreWrapper;
