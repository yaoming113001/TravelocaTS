import { useNavigation } from "@react-navigation/native"
import React from "react"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Header } from "../../../share/header/header"
import { Container } from "../../../share/styles/container"
import { CartStore } from "../store/cart_store"
import styles from "../../../share/styles/global_style"
import cartStyle from "../cart.style"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { ItemHorizontal } from "../../../share/item_horizontal/item_horizontal"
import { Dimensions, Text, View } from "react-native"
import { SwipeListView } from 'react-native-swipe-list-view';
import { Button } from "react-native-elements"
import { Message } from "../../../share/message/message"
const height = Dimensions.get("window").height;

export const CartScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { deleteItemCart, listItem } = CartStore.useContainer()
  const [visible, setVisible] = React.useState(false);

  const navigation = useNavigation();
  const session = () => {
    return (
      <SwipeListView
        data={listItem}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemHorizontal
            item={item}
            moveToDeteil={() => {
              navigation.navigate("Detail", { params: item })
            }}
            existInCart={true}
            deleteItem={() => { }}
            isCart={true}
            addCart={() => { }} />
        )}
        renderHiddenItem={({ item }) => (
          <View style={cartStyle.extentButtonContainer}>
            <Container style={cartStyle.buttonContainer}>
              <Button
                title={"Delete item"}
                buttonStyle={cartStyle.buttonStyle}
                titleStyle={cartStyle.buttonTitleStyle}
                onPress={() => { setVisible(!visible) }}
              />
            </Container>
            <Message
              type={"Delete"}
              title={"Delete item"}
              isVisible={visible}
              messageContent={"Do you really want to delete item from the cart ?"}
              onBackdropPress={() => { setVisible(!visible) }}
              yesButton={true}
              noButton={true}
              submit={() => { deleteItemCart(item) }}
              onCancelPress={() => setVisible(false)}
            />
          </View >
        )}
        rightOpenValue={- 75}
      />
    )
  }

  const noItem = () => {
    return (
      <Text style={cartStyle.noItemTitle}>No item in cart</Text>
    )
  }
  const content = listItem.length ? session() : noItem()

  return (
    <Container style={styles.container}>
      <Header iconTitle={"arrow-left"} mainScreen={false} onPress={() => navigation.goBack()} title={"Cart"} />
      <Container style={{ height: "83%" }}>
        {content}
      </Container>

    </Container >
  )
}
