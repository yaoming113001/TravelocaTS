import React from "react"
import { InformationStackParamList } from "../../navigation/RouteParramList"
import { InformationScreen } from "./compoment/information_screen"
import { InformationStore } from "./store/information_store"

export const Information: React.FunctionComponent<InformationStackParamList<"Information">> = props => {
  return (
    <InformationStore.Provider >
      <InformationScreen {...props} />
    </InformationStore.Provider >
  )
}