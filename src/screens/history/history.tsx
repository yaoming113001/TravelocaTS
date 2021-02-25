import React from "react"
import { InformationStackParamList } from "../../navigation/RouteParramList"
import { HistoryScreen } from "./compoment/history_screen"
import { HistoryStore } from "./store/history_store"



export const History: React.FunctionComponent<InformationStackParamList<"Information">> = props => {
  return (
    <HistoryStore.Provider>
      <HistoryScreen {...props} />
    </HistoryStore.Provider>
  )
}