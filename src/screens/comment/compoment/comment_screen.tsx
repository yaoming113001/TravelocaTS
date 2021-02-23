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
import { FlatList } from "react-native-gesture-handler"
import { CommentStore } from "../store/comment_store"

export interface IID {
  params: number
}

export const CommentScreen: React.FunctionComponent<HomeStackParamList<"Detail">> = props => {
  const { comments, voteNumber, setVoteNumber, comment, setComment, postComment } = CommentStore.useContainer()

  const commentContainer = () => {
    return (
      <Container style={detailStyle.commentSession}>
        <Container horizontal style={{ justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, fontStyle: "italic" }}>Nguyen Phuoc Duc</Text>
          <Rating
            type='heart'
            startingValue={4}
            imageSize={20}
            readonly
          />
        </Container>
        <Container horizontal >
          <Text style={detailStyle.comment}>Khach san dep lam</Text>

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
          commentContainer()
        )} />
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
          <IButton
            title={"Comment"}
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
        </Container>
        {loadComments()}
      </Container>
    </Container>
  )
}
