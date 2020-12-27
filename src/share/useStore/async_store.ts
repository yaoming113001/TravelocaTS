import React from "react"
import { createContainer } from "unstated-next"
import { AsyncStorage } from "react-native"
import AsyncStore from "@react-native-community/async-storage"
import { Item } from "../types/item"
import { isNil, isUndefined } from "lodash"

export const useAsyncStore = () => {
  const STORAGE_KEY = "c"
  const [list, setList] = React.useState<Item[]>();
  const storeToStorage = React.useCallback(async (item: Item) => {
    try {
      let list: Item[] = [];
      getFromStore().then(async result => {
        if (!isUndefined(result)) {
          const jsonObject: Item[] = JSON.parse(result);
          list = jsonObject;
          list.push(item);
          return await AsyncStore.setItem(STORAGE_KEY, JSON.stringify(list));
        }
        list.push(item);
        return await AsyncStore.setItem(STORAGE_KEY, JSON.stringify(list));
      })
    } catch (error) {
    }
  }, [])

  const getFromStore = React.useCallback(async () => {
    try {
      const value = await AsyncStore.getItem(STORAGE_KEY);
      if (!isNil(value)) {
        return value;
      } else {
        console.log("read data error", value)
      }
    } catch (error) {
    }
  }, [])

  const readStorage = React.useCallback(() => {
    getFromStore().then(result => {
      if (!isUndefined(result)) {
        let jsonObject: Item[] = JSON.parse(result)
        console.log("async store")
        return setList(jsonObject)
      } else {
        console.log("cant read async storage")
      }
    })
  }, [])


  return { storeToStorage, getFromStore, readStorage, list };
}
