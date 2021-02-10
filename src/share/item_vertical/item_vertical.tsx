import React from "react"
import { Text, Image } from "react-native"
import { Button, Icon, Rating } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Container } from "../styles/container"
import { Item } from "../types/item"
import styles from "./item_vertical_style"
import { Overlay } from 'react-native-elements';
import { Message } from "../message/message"

interface IItem {
  item: Item;
  existInCart: boolean;
  moveToDeteil: () => void;
  addCart: () => void;
}

export const ItemVertical: React.FunctionComponent<IItem> = props => {
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Container style={styles.itemContainer}>
      <TouchableOpacity onPress={() => props.moveToDeteil()} style={{ height: 150 }}>
        <Image
          source={{ uri: `${props.item.image}` }}
          style={styles.itemImage}
        />
      </TouchableOpacity>
      <Text style={styles.itemTitle} numberOfLines={1}>{props.item.title}</Text>
      <Container horizontal style={styles.justifyContainer}>
        <Rating
          type='heart'
          startingValue={props.item.rating}
          imageSize={26}
        />
        <Text style={styles.ratingNumber}>{props.item.rating}</Text>
      </Container>
      <Container horizontal style={styles.justifyContainer}>
        <Text style={styles.price}>{props.item.price}$</Text>
        <Button
          icon={
            <Icon
              name="heart"
              type="font-awesome"
              size={20}
              color={props.existInCart ? "red" : "gray"}
            />
          }
          onPress={() => { props.addCart(), setVisible(true) }}
          buttonStyle={styles.iconItem}
        />
      </Container>
      <Message
        type="Add"
        title="Add cart successfully"
        isVisible={visible}
        messageContent="You have added item successfully!"
        onBackdropPress={() => { toggleOverlay() }}
        yesButton={true}
        submit={() => setVisible(false)}
      />
    </Container>
  )
}
