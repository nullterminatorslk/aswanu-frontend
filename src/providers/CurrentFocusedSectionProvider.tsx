"use client";

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type ContextType = Partial<{
  currentSection: string;
  setCurrentSection: (section: string) => void;
}>;

export const CurrentFocusedSectionContext = createContext<ContextType>({});

type CurrentFocusedSectionProviderProps = ContextType;

const CurrentFocusedSectionProvider: FC<
  PropsWithChildren<CurrentFocusedSectionProviderProps>
> = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("home");
  return (
    <CurrentFocusedSectionContext.Provider
      value={{ currentSection, setCurrentSection }}
    >
      {children}
    </CurrentFocusedSectionContext.Provider>
  );
};

export const useCurrentFocusedSection = () =>
  useContext(CurrentFocusedSectionContext);

export default CurrentFocusedSectionProvider;
