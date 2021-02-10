import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useCartStore = () => {

  const [listItem, setListItem] = React.useState<Item[]>([]);
  const { list,deleteItemCartStore } = GlobalStore.useContainer().asyncStore;

  const deleteItemCart = React.useCallback((item:Item)=>{
    deleteItemCartStore(item);
    setListItem(list)
  },[setListItem,list])

  React.useEffect(() => {
    setListItem(list)
  }, [list]);

  return { deleteItemCart , listItem};
}

export const CartStore = createContainer(useCartStore);