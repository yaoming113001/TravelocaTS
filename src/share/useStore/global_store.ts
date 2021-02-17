import { useNetInfo } from "@react-native-community/netinfo";
import React from "react"
import { createContainer } from "unstated-next"
import { useAPIPostStore } from "./api_post_store";
import { useAPIUserStore } from "./api_user_store";
import { useAsyncStore } from "./async_store"
import { useNetworkStore } from "./network_store";
import { useUserStore } from "./user_store";


export const useGlobalStore = () => {
  const asyncStore = useAsyncStore();
  const networkStore = useNetworkStore()
  const userStore = useUserStore();
  const useUserAPI = useAPIUserStore();
  const usePostAPI = useAPIPostStore();
  return { asyncStore, networkStore, userStore, useUserAPI, usePostAPI };
}

export const GlobalStore = createContainer(useGlobalStore);