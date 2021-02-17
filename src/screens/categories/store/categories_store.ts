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
  const { getPost } = GlobalStore.useContainer().usePostAPI;
  const { storeToStorage, list } = GlobalStore.useContainer().asyncStore;

  const navigation = useNavigation()

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

  const addToCart = React.useCallback((item: Item) => {
    storeToStorage(item);
  }, [storeToStorage])

  React.useEffect(() => {
    if (initialState !== undefined) {
      getPostFromApi(checkCatagory())
    }
  }, []);

  return { items, checkCatagory, addToCart };
}

export const CategoriesStore = createContainer(useCategoriesStore);