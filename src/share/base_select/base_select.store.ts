import { ISelectProps } from "./base_select_props";
import React from "react"

export const useSelectInput = () => {
  const [isShow, setShow] = React.useState(false);

  const toggle = React.useCallback(() => {
    setShow(!isShow);
  }, [isShow, setShow])

  return { toggle, isShow };
};
