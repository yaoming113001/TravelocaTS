import React from "react"
import { Text, Image, View } from "react-native"
import { Container } from "../../share/styles/container"
import styles from "./row_item_style"
import { Icon, Rating } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native-gesture-handler"

export interface Iitem {
  title: string;
  price: number;
  image: string;
  inCart: boolean;
  rating: number;
  moveToDetail: () => void;
  addToCart: () => void;
}

export const RowItem: React.FunctionComponent<Iitem> = props => {
  return (
    <Container style={styles.discountItemContainer}>
      {/* <TouchableOpacity onPress={props.moveToDetail}>
        <Image
          source={{ uri: `${props.image}` }}
          style={styles.discountImage}
        />
      </TouchableOpacity> */}
      <TouchableOpacity style={{ height: "100%", flexDirection: "row" }}>
        <Container style={{ width: "100%" }}>
          <Image
            source={{ uri: `${props.image}` }}
            style={styles.discountImage}
          />

        </Container>
        {/* <Text style={styles.discountTitle} numberOfLines={1}>
          {props.title}
        </Text> */}

      </TouchableOpacity>
      {/* <Container style={styles.starContainer}>
        <Rating
          type='star'
          startingValue={props.rating}
          imageSize={22}
        />
        <Text style={styles.rating}>{props.rating}</Text>
      </Container> */}
      {/* <Container style={styles.priceAndHeartContainer}>
        <Text style={styles.price}>{props.price}</Text>
        <Icon
          raised
          name='heart'
          type='font-awesome'
          color='#f50'
          size={18}
          onPress={props.addToCart} />
      </Container> */}
    </Container>
  )
}
