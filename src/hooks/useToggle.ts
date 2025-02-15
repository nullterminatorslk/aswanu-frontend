import { useState } from "react";

export const useToggle = (defaultState: boolean = false) => {
  const [toggle, setToggle] = useState(defaultState);

  const toggler = (value?: unknown) => {
    setToggle((prev) => {
      return typeof value === "boolean" ? value : !prev;
    });
  };
  return [toggle, toggler] as const;
};
