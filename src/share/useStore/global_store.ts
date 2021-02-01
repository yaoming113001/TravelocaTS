import { useNetInfo } from "@react-native-community/netinfo";
import React from "react"
import { createContainer } from "unstated-next"
import { useAsyncStore } from "./async_store"
import { useNetworkStore } from "./network_store";

export const useGlobalStore = () => {
  const asyncStore = useAsyncStore();
  const networkStore = useNetworkStore()
  return { asyncStore, networkStore };
}

export const GlobalStore = createContainer(useGlobalStore);