import React from "react"
import AsyncStore from "@react-native-community/async-storage"
import { Item } from "../types/item"
import { isNil, isUndefined } from "lodash"
import { userHelper } from "../helper/userHelper"
import { IUserForm } from "../types/user_type"

export const useUserStore = () => {

  const STORAGE_KEY = "userStore"

  const [user, setUser] = React.useState<IUserForm>(userHelper);

  const storeUser = React.useCallback(async (user: IUserForm) => {
    return await AsyncStore.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [])

  const deleteUser = React.useCallback(async () => {
    return await AsyncStore.clear();
  }, [])


  const getUser = React.useCallback(async () => {
    const value = await AsyncStore.getItem(STORAGE_KEY);
    !isNil(value) ? setUser(JSON.parse(value)) : null;
  }, [])

  React.useEffect(() => {
    getUser()
  }, [])


  return { storeUser, deleteUser, user, getUser };
}