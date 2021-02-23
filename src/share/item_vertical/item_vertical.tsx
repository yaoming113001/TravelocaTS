import React from "react"
import { Text, Image } from "react-native"
import { Button, Icon, Rating } from "react-native-elements"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Container } from "../styles/container"
import { Item } from "../types/item"
import styles from "./item_vertical_style"
import NumberFormat from 'react-number-format';
import { Message } from "../message/message"
import { ipconfig } from "../config/config"

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
          source={{ uri: `${ipconfig}/${props.item.image.replace("public", "")}` }}
          style={styles.itemImage}
        />
      </TouchableOpacity>
      <Text style={styles.itemTitle} numberOfLines={1}>{props.item.title}</Text>
      <Container horizontal style={styles.justifyContainer}>
        <TouchableOpacity>
          <Rating
            type='heart'
            startingValue={props.item.vote}
            imageSize={26}
          />
        </TouchableOpacity>
      </Container>
      <Container horizontal style={styles.justifyContainer}>
        <NumberFormat value={props.item.price} displayType={'text'} thousandSeparator={true} prefix={''} renderText={value =>
          <Text style={styles.price}>{value}</Text>
        }
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
