import React from "react"
import { Text, Image } from "react-native"
import { Button, Icon, Rating } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ipconfig } from "../config/config"
import { Message } from "../message/message"
import { Container } from "../styles/container"
import { Item } from "../types/item"
import styles from "./item_horizontal_style"
import Moment from 'moment';

interface IItem {
  item: Item;
  existInCart: boolean;
  moveToDeteil?: () => void;
  addCart?: () => void;
  deleteItem?: () => void;
  isCart: boolean;
  showMessage: boolean;
  submitWithoutMessage?: () => void;
  dateOrder?: Date;
}

export const ItemHorizontal: React.FunctionComponent<IItem> = props => {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const submit = () => {
    if (props.addCart !== undefined && props.deleteItem !== undefined) {
      setVisible(false);
      props.isCart ? props.deleteItem() : props.addCart()
    }
  }

  const dateAndTimeOrder = () => {
    return (
      <Container horizontal style={[styles.justifyContainer, { paddingLeft: 5, paddingRight: 10 }]}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Date order: {Moment(props.dateOrder).format("L")}</Text>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>Time: {Moment(props.dateOrder).format("LT")}</Text>
      </Container>
    )
  }

  const booking = () => {
    return (
      <Container horizontal style={styles.justifyContainer}>
        <Rating
          type='heart'
          startingValue={props.item.vote}
          imageSize={26}
          readonly={true}
        />
        <Button
          icon={
            <Icon
              name="heart"
              type="font-awesome"
              size={20}
              color={props.existInCart ? "red" : "gray"}
            />
          }
          onPress={!props.showMessage ? props.submitWithoutMessage : toggleOverlay}
          buttonStyle={styles.iconItem}
        />
      </Container>
    )
  }

  const result = props.dateOrder !== undefined ? dateAndTimeOrder() : booking()

  return (
    <Container style={styles.itemContainer}>
      <TouchableOpacity onPress={props.moveToDeteil} style={{ height: 90 }}>
        <Image
          source={{ uri: `${ipconfig}/${props.item.image.replace("public", "")}` }}
          style={styles.itemImage}
        />
      </TouchableOpacity>
      <Container horizontal style={styles.justifyContainer}>
        <Text style={styles.itemTitle} numberOfLines={2}>{props.item.title}</Text>
        <Text style={styles.priceTitle} numberOfLines={1}>{props.item.price}$</Text>
      </Container>
      {result}
      <Message
        type={props.isCart ? "Delete" : "Add"}
        title={props.isCart ? "Delete item" : "Add item successfully"}
        isVisible={props.showMessage ? visible : false}
        messageContent={props.isCart ? "Do you really want to delete item from the cart ?" : "You have added item successfully!"}
        onBackdropPress={() => { toggleOverlay() }}
        yesButton={true}
        noButton={props.isCart}
        submit={submit}
        onCancelPress={() => setVisible(false)}
      />
    </Container>
  )
}
