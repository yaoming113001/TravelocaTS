import React from "react"
import { createContainer } from "unstated-next"
import { useAsyncStore } from "./async_store"

export const useGlobalStore = () => {
  const asyncStore = useAsyncStore();
  return { asyncStore };
}

export const GlobalStore = createContainer(useGlobalStore);