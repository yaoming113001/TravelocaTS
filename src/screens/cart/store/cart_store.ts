import React from "react"
import { createContainer } from "unstated-next"
import { ItemHelper } from "../../../share/helper/postHelper";
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useCartStore = () => {
  const [listItem, setListItem] = React.useState<Item[]>([]);
  const { list, deleteItemCartStore } = GlobalStore.useContainer().asyncStore;
  const { user } = GlobalStore.useContainer().userStore;
  const { getPost, deletePost } = GlobalStore.useContainer().usePostAPI;
  const [visible, setVisible] = React.useState(false);
  const [post, setPost] = React.useState<Item>(ItemHelper);

  const deleteItemStoreCart = React.useCallback((item: Item) => {
    deleteItemCartStore(item);
    setListItem(list)
  }, [list])

  const deleteItemUserCart = React.useCallback((item: Item) => {
    const postItem = { data: { id_user: user.id, id_post: item.id } };
    const result = deletePost(`removebookmark`, postItem);
    result.then(() => {
      getPostFromApi()
    })
  }, [list, listItem])

  const deleteItemCart = React.useCallback((item: Item) => {
    user.id === 0 ? deleteItemStoreCart(item) : deleteItemUserCart(item)
  }, [setListItem, list, listItem])

  const getPostFromApi = React.useCallback(async () => {
    const result = getPost(`history-bookmark?id=${user.id}`);
    result.then(result => {
      setListItem(result.data)
    })
  }, [setListItem, listItem])

  const showListCart = React.useCallback(() => {
    user.id === 0 ? setListItem(list) : getPostFromApi()
  }, [list, listItem])

  React.useEffect(() => {
    showListCart()
  }, [list]);

  return { deleteItemCart, listItem, visible, post, setVisible, setPost };
}

export const CartStore = createContainer(useCartStore);