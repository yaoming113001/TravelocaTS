import React from "react"
import { HomeStackParamList } from "../../navigation/RouteParramList"
import { CommentScreen } from "./compoment/comment_screen"
import { CommentStore } from "./store/comment_store"

export const Comment: React.FunctionComponent<HomeStackParamList<"Detail">> = props => {
  return (
    <CommentStore.Provider initialState={props.route.params}>
      <CommentScreen {...props} />
    </CommentStore.Provider>
  )
}