import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useCartStore = () => {

  const [listItem, setListItem] = React.useState<Item[]>([]);
  const { list } = GlobalStore.useContainer().asyncStore;

  React.useEffect(() => {
    setListItem(list)

  }, [list]);

  return { listItem };
}

export const CartStore = createContainer(useCartStore);