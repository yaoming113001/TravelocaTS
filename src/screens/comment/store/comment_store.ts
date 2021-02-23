import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"
import { ICommnet } from "../../../share/types/comment";
import { GlobalStore } from "../../../share/useStore/global_store";

export interface IID {
  params: number
}

export const useCommentStore = (initialState: IID | undefined) => {
  const [comments, setComments] = React.useState<ICommnet[]>([]);
  const [voteNumber, setVoteNumber] = React.useState<number>(5)
  const id = initialState?.params;
  const [comment, setComment] = React.useState<string>("");
  const { user } = GlobalStore.useContainer().userStore;
  const { postPost, getPost } = GlobalStore.useContainer().usePostAPI;
  const [isVisible, setVisible] = React.useState<boolean>(false)
  const navigation = useNavigation()

  const postComment = React.useCallback(async () => {
    const commentPost = { idUser: user.id, idPost: id, cmt: comment, vote: voteNumber }
    await postPost("commemt", commentPost).then(() => {
      getComments()
      toggle()
    })
  }, [postPost, comment, voteNumber])

  const getComments = React.useCallback(() => {
    const result = getPost(`get-post/${id}`);
    result.then(result => {
      let count = 0
      var reformattedArray = result.data.comment.map((obj: ICommnet) => {
        var rObj = obj;
        count++
        rObj[`id`] = count;
        return rObj;
      });
      setComments(reformattedArray);
    })
  }, [])

  const toggle = React.useCallback(() => {
    setVisible(!isVisible)
  }, [isVisible])

  React.useEffect(() => {
    getComments()
  }, [])

  return { comments, voteNumber, setVoteNumber, comment, setComment, postComment, isVisible, toggle, navigation };
}

export const CommentStore = createContainer(useCommentStore);