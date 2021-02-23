import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"
import { Item } from "../../../share/types/item";
import { GlobalStore } from "../../../share/useStore/global_store";

export interface IID {
  params: number
}

export const useCommentStore = (initialState: IID | undefined) => {
  const [comments, setComments] = React.useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }])
  const [voteNumber, setVoteNumber] = React.useState<number>(5)
  const id = initialState?.params;
  const [comment, setComment] = React.useState<string>("");
  const { user } = GlobalStore.useContainer().userStore;
  const { postPost } = GlobalStore.useContainer().usePostAPI;

  const postComment = React.useCallback(async () => {
    const commentPost = { idUser: user.id, idPost: id, cmt: comment, vote: voteNumber }
    console.log(commentPost)
    await postPost("commemt", commentPost).then(result => {
    })
  }, [postPost])

  return { comments, voteNumber, setVoteNumber, comment, setComment, postComment };
}

export const CommentStore = createContainer(useCommentStore);