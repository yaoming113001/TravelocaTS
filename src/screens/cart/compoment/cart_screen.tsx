import { useNavigation } from "@react-navigation/native"
import React from "react"
import { ScrollView } from "react-native-gesture-handler"
import { Header } from "../../../share/header/header"
import { RowItem } from "../../../share/rowItem/row_item"
import { Container } from "../../../share/styles/container"
import styles from "../../home/home_style"


export const CartScreen: React.FunctionComponent = ({ }) => {
  const navigation = useNavigation()
  return (
    <Container style={styles.container}>
      <Header title="Favorite" main={false} onPress={() => navigation.goBack()} />
      <ScrollView style={{ height: "85%" }} showsVerticalScrollIndicator={false}>
        <RowItem title="Khach san" rating={4} addToCart={() => console.log("add")} price={135}
          moveToDetail={() => console.log("move")} image={"https://i.pinimg.com/736x/85/4b/31/854b31592e74f75e9715fa7c5bcbbd20.jpg"} inCart={true} />
      </ScrollView>
    </Container>
  )
}
