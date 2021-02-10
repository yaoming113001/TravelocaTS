import { useNetInfo } from "@react-native-community/netinfo";
import React from "react"
import { createContainer } from "unstated-next"
import { useAsyncStore } from "./async_store"
import { useNetworkStore } from "./network_store";
import { useUserStore } from "./user_store";

export const useGlobalStore = () => {
  const asyncStore = useAsyncStore();
  const networkStore = useNetworkStore()
  const userStore = useUserStore();
  return { asyncStore, networkStore, userStore };
}

export const GlobalStore = createContainer(useGlobalStore);