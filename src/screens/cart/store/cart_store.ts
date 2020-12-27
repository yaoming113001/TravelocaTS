import { isUndefined } from "lodash";
import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useCartStore = () => {
  const { getFromStore } = GlobalStore.useContainer().asyncStore;
  const [listCart, setListCart] = React.useState<Item>()

  React.useEffect(() => {
    getFromStore().then(result => {
      if (!isUndefined(result)) {
        let jsonObject: Item = JSON.parse(result)
        setListCart(jsonObject);
      }
    })
  }, []);

  return { listCart }
}

export const CartStore = createContainer(useCartStore);