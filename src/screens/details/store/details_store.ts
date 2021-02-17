import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useDetailsStore = () => {
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");
  const { storeToStorage, list } = GlobalStore.useContainer().asyncStore;
  const [isVisible, setVisible] = React.useState<boolean>(false)

  const toggle = React.useCallback(() => {
    setVisible(!isVisible)
  }, [isVisible])

  const addToCart = React.useCallback((item: Item) => {
    storeToStorage(item);
  }, [storeToStorage])
  return { title, info, addToCart, isVisible, toggle };
}

export const DetailsStore = createContainer(useDetailsStore);