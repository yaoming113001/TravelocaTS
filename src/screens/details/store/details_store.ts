import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useDetailsStore = () => {
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");
  const { storeToStorage, list } = GlobalStore.useContainer().asyncStore;
  const [isVisible, setVisible] = React.useState<boolean>(false)
  const { postPost } = GlobalStore.useContainer().usePostAPI;
  const { user } = GlobalStore.useContainer().userStore;
  const navigation = useNavigation();

  const toggle = React.useCallback(() => {
    setVisible(!isVisible)
  }, [isVisible])

  const addToCartStore = React.useCallback((item: Item) => {
    storeToStorage(item);
  }, [list])

  const addToCartAccount = React.useCallback(async (item: Item) => {
    await postPost("book-mark", { user: user.id, post: item.id });
  }, [])

  const addToCart = React.useCallback((item: Item) => {
    user.id !== 0 ? addToCartAccount(item) : addToCartStore(item)
  }, [addToCartAccount, addToCartStore])

  const moveToComment = (id: number) => {
    navigation.navigate("Comment", { params: id })
  }

  return { title, info, addToCart, isVisible, toggle, moveToComment };
}

export const DetailsStore = createContainer(useDetailsStore);