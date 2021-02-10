import React from "react"
import { Text, Image } from "react-native"
import { Button, Icon, Rating } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Message } from "../message/message"
import { Container } from "../styles/container"
import { Item } from "../types/item"
import styles from "./item_horizontal_style"

interface IItem {
  item: Item;
  existInCart: boolean;
  moveToDeteil: () => void;
  addCart?: () => void;
  deleteItem: () => void;
}

export const ItemHorizontal: React.FunctionComponent<IItem> = props => {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <Container style={styles.itemContainer}>
      <TouchableOpacity onPress={() => props.moveToDeteil()} style={{ height: 90 }}>
        <Image
          source={{ uri: `${props.item.image}` }}
          style={styles.itemImage}
        />
      </TouchableOpacity>
      <Container horizontal style={styles.justifyContainer}>
        <Text style={styles.itemTitle} numberOfLines={1}>{props.item.title}</Text>
        <Text style={styles.priceTitle} numberOfLines={1}>{props.item.price}$</Text>
      </Container>
      <Container horizontal style={styles.justifyContainer}>
        <Rating
          type='heart'
          startingValue={props.item.rating}
          imageSize={26}
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
          onPress={() => { setVisible(true) }}
          buttonStyle={styles.iconItem}
        />
      </Container>
      <Message
        type={"Delete"}
        title="Delete item"
        isVisible={visible}
        messageContent="Do you really want to delete item from the cart ?"
        onBackdropPress={() => { toggleOverlay() }}
        yesButton={true}
        noButton={true}
        submit={() => { setVisible(false), props.deleteItem() }}
        onCancelPress={() => setVisible(false)}
      />
    </Container>
  )
}
