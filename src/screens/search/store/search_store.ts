import { isNil } from "lodash";
import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useSearchStore = () => {
  const { getPost } = GlobalStore.useContainer().usePostAPI;
  const [items, setItems] = React.useState<Item[]>([]);
  const { storeToStorage } = GlobalStore.useContainer().asyncStore;
  const [searchKey, setSearchKey] = React.useState<string>("");


  const searchPost = React.useCallback((keyWord: string) => {
    setSearchKey(keyWord);
    if (keyWord === "") {
      return setItems([])
    }
    const result = getPost(`search-post?input=${keyWord}`)
    result.then(result => {
      setItems(result.data)
    })
  }, [items])

  const addToCart = React.useCallback((item: Item) => {
    storeToStorage(item);
  }, [storeToStorage])

  return { searchPost, items, addToCart, searchKey };
}

export const SearchStore = createContainer(useSearchStore);