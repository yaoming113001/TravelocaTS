import React from "react"
import AsyncStore from "@react-native-community/async-storage"
import { Item } from "../types/item"
import { isNil, isUndefined } from "lodash"

export const useAsyncStore = () => {

  const STORAGE_KEY = "cartStore"

  const [list, setList] = React.useState<Item[]>([]);

  const storeToStorage = React.useCallback(async (item: Item) => {
    let listCart: Item[] = [];
    await AsyncStore.getItem(STORAGE_KEY).then(async result => {
      if (!isNil(result)) {
        const jsonObject: Item[] = JSON.parse(result);
        listCart = jsonObject;
      }
      if (!isNil(result) && listCart.find(x => x.id === item.id)) {
        return;
      }
      listCart.push(item);
      setList(listCart)
      return await AsyncStore.setItem(STORAGE_KEY, JSON.stringify(listCart));
    })

  }, [setList, list])

  const deleteItemCartStore = React.useCallback(async (item: Item) => {
    let listCart: Item[] = [];
    await AsyncStore.getItem(STORAGE_KEY).then(async result => {
      if (!isNil(result)) {
        const jsonObject: Item[] = JSON.parse(result);
        listCart = jsonObject;
      }
      let deleteObjectIndex = list.indexOf(item);
      if (deleteObjectIndex > -1) {
        listCart.splice(deleteObjectIndex, 1);
        setList(listCart)
        return await AsyncStore.setItem(STORAGE_KEY, JSON.stringify(listCart));
      }
    })
  }, [list])


  const readStorage = React.useCallback(async () => {
    const value = await AsyncStore.getItem(STORAGE_KEY);
    !isNil(value) ? setList(JSON.parse(value)) : null;
  }, [])

  React.useEffect(() => {
    readStorage()
  }, []);

  return { storeToStorage, readStorage, list, deleteItemCartStore, setList };
}