import { useNavigation } from "@react-navigation/native";
import { isNil, isUndefined, result } from "lodash";
import React, { useCallback, useState } from "react"
import { createContainer } from "unstated-next"
import { number } from "yup/lib/locale";
import { Item } from "../../../share/types/item";
import { IUser } from "../../../share/types/user";
import { IUserForm } from "../../../share/types/user_type";
import { GlobalStore } from "../../../share/useStore/global_store";



export const useHomeStore = () => {
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");
  const [listItem, setListItem] = React.useState<Item[]>([]);
  const { storeToStorage, list } = GlobalStore.useContainer().asyncStore;
  const { getPost, postPost } = GlobalStore.useContainer().usePostAPI
  const { user, getUser } = GlobalStore.useContainer().userStore
  const [item, setItem] = React.useState<Item[]>([])
  const navigation = useNavigation()

  const [image] = React.useState([
    {
      id: "0",
      image: "https://cf.bstatic.com/images/hotel/max1024x768/268/26886500.jpg",
      name: "hotel"
    },
    {
      id: "1",
      image: "https://i.pinimg.com/736x/85/4b/31/854b31592e74f75e9715fa7c5bcbbd20.jpg",
      name: "food"
    },
    {
      id: "2",
      image: "https://vietnamembassy-turkey.org/wp-content/uploads/2019/12/V%C6%B0%E1%BB%9Dn-hoa-%C4%90%C3%A0-L%E1%BA%A1t.jpg",
      name: "place"
    }
  ])

  const [poster, setPoster] = React.useState([
    { id: "1", image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/92/2019/11/20071939/0919-AJS-NOI-Hotel-des-Arts-SGN-1275-Web-1500x690.jpg" },
    { id: "2", image: "https://maifootsteps.com/wp-content/uploads/2019/08/vocuc.jpg" },
    { id: "3", image: "https://www.101corpuschristi.com/uploads/media/default/0001/23/fef92b31aa597167a112c932f2777db7941a79d3.jpeg" },

  ])


  const addToCartStore = React.useCallback((item: Item) => {
    storeToStorage(item);
  }, [list])

  const addToCartAccount = React.useCallback(async (item: Item) => {
    await postPost("book-mark", { user: user.id, post: item.id });
  }, [])

  const addToCart = React.useCallback((item: Item) => {
    user.id !== 0 ? addToCartAccount(item) : addToCartStore(item)
  }, [addToCartAccount, addToCartStore])



  const getPostFromApi = React.useCallback(async () => {
    const result = getPost("get-homepage");
    result.then(result => {
      setItem(result.data[`FoodAndDrink`])
    })
  }, [item])

  const gotoCatetory = (pageNumber: number) => {
    navigation.navigate("Category", { params: pageNumber })
  }

  React.useEffect(() => {
    getPostFromApi()
    getUser()
  }, []);


  return { title, info, image, poster, item, listItem, gotoCatetory, addToCart };
}

export const HomeStore = createContainer(useHomeStore);