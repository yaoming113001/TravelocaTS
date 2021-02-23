import { useNavigation } from "@react-navigation/native"
import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item"
import { GlobalStore } from "../../../share/useStore/global_store"

export interface Route {
  params: number
}

export const useCategoriesStore = (initialState: Route | undefined) => {
  const [items, setItem] = React.useState<Item[]>([])
  const { user } = GlobalStore.useContainer().userStore
  const { getPost, postPost } = GlobalStore.useContainer().usePostAPI;
  const { storeToStorage, list } = GlobalStore.useContainer().asyncStore;

  const getPostFromApi = React.useCallback(async (page: string) => {
    const result = getPost("get-homepage");
    result.then(result => {
      setItem(result.data[page])
    })
  }, [items, setItem])

  const checkCatagory = () => {
    let value = "";
    if (initialState !== undefined) {
      initialState.params === 0 ? value = "House " :
        initialState.params === 1 ? value = "FoodAndDrink" :
          value = "Place"
    }
    return value;
  }

  const addToCartStore = React.useCallback((item: Item) => {
    storeToStorage(item);
  }, [list])

  const addToCartAccount = React.useCallback(async (item: Item) => {
    await postPost("book-mark", { user: user.id, post: item.id });
  }, [])

  const addToCart = React.useCallback((item: Item) => {
    user.id !== 0 ? addToCartAccount(item) : addToCartStore(item)
  }, [addToCartAccount, addToCartStore])


  React.useEffect(() => {
    if (initialState !== undefined) {
      getPostFromApi(checkCatagory())
    }
  }, []);

  return { items, checkCatagory, addToCart };
}

export const CategoriesStore = createContainer(useCategoriesStore);