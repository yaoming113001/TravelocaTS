import React from "react"
import { Text, Image } from "react-native"
import { Button, Icon, Rating } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Container } from "../styles/container"
import { Item } from "../types/item"
import styles from "./item_horizontal_style"

interface IItem {
  item: Item;
  existInCart: boolean;
  moveToDeteil: () => void;
  addCart: () => void;
}

export const ItemHorizontal: React.FunctionComponent<IItem> = props => {
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
          onPress={() => props.addCart()}
          buttonStyle={styles.iconItem}
        />
      </Container>
    </Container>
  )
}
