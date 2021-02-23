import React from "react"
import { Text } from "react-native"
import { Rating } from "react-native-elements"
import { Header } from "../../../share/header/header"
import { HomeStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import detailStyle from "./comment_style"
import { IButton } from "../../../share/base_button/base_button"
import { BaseInput } from "../../../share/base_input/base_input"
import { FlatList, ScrollView } from "react-native-gesture-handler"
import { CommentStore } from "../store/comment_store"
import { ICommnet } from "../../../share/types/comment"
import { Message } from "../../../share/message/message"

export interface IID {
  params: number
}

export const CommentScreen: React.FunctionComponent<HomeStackParamList<"Detail">> = props => {
  const { comments, voteNumber, setVoteNumber, comment, setComment, postComment, isVisible, toggle, navigation } = CommentStore.useContainer()

  const commentContainer = (comment: ICommnet) => {
    return (
      <Container style={detailStyle.commentSession}>
        <Container horizontal style={{ justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, fontStyle: "italic" }}>{comment.name}</Text>
          <Rating
            type='heart'
            startingValue={comment.vote}
            imageSize={20}
            readonly
          />
        </Container>
        <Container horizontal >
          <Text style={detailStyle.comment}>{comment.comment}</Text>
        </Container>
      </Container>
    )
  }

  const loadComments = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={comments}
        keyExtractor={comments => comments.id.toString()}
        renderItem={({ item }) => (
          commentContainer(item)
        )} />
    )
  }

  const message = () => {
    return (
      <>
        <Message
          type={"Add"}
          title={"Successfully"}
          isVisible={isVisible}
          messageContent={"Your comment has been added ssuccessfully!"}
          onBackdropPress={() => { toggle() }}
          yesButton={true}
          noButton={false}
          submit={() => { navigation.goBack() }}
        />
      </>
    )
  }

  const button = () => {
    return (
      <IButton
        title={"Comment"}
        disable={!comment.length ? true : false}
        typeButton={"outline"}
        backgroundColor="#434567"
        icon={"comments"}
        addStyle={true}
        fontColor="white"
        iconSize={25}
        titleSize={18}
        iconRight
        onSubmit={() => { postComment() }}
        borderRadius={10}
        width={100} />
    )
  }

  return (
    <Container style={styles.container}>
      <Container>
        <Header iconTitle="arrow-left" title="Commnet" mainScreen={false} onPress={() => props.navigation.goBack()} />
      </Container>
      <Container>
        <Container style={detailStyle.commentContainer}>
          <BaseInput
            numOfLine={3}
            placeholder="Comment your opion"
            multiLine={true}
            height={80}
            value={comment}
            onChangeText={(val) => setComment(val)} />

          <Container style={detailStyle.ratingCommentContainer}>
            <Rating
              type='heart'
              startingValue={voteNumber}
              imageSize={30}
              onFinishRating={(val) => setVoteNumber(val)}
            />
          </Container>
          {button()}
        </Container>
        <Container style={{ height: "55%" }}>
          {loadComments()}
        </Container>
      </Container>
      {message()}
    </Container>
  )
}
