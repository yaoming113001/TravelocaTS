import React from "react"
import { createContainer } from "unstated-next"

export const useHistoryStore = () => {

  React.useEffect(() => {
  }, []);

  return {};
}

export const HistoryStore = createContainer(useHistoryStore);