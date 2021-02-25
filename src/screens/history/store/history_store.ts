import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useHistoryStore = () => {
  const [list, setList] = React.useState<Item[]>([]);
  const { getPost } = GlobalStore.useContainer().usePostAPI;
  const { user } = GlobalStore.useContainer().userStore;

  const getListHistory = React.useCallback(() => {
    const result = getPost(`history-booking?id=${user.id}`)
    result.then(result => {
      setList(result.data)
    })
  }, [list])

  React.useEffect(() => {
    getListHistory()
  }, []);

  return { list };
}

export const HistoryStore = createContainer(useHistoryStore);