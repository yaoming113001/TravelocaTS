import React from "react"
import { Text } from "react-native"
import { RouteStackParamList } from "../../../navigation/RouteParramList"
import { Container } from "../../../share/styles/container"
import styles from "../../../share/styles/global_style"
import { SearchBar } from 'react-native-elements';
import { Header } from "react-native/Libraries/NewAppScreen";
import { SearchStore } from "../store/search_store";
import { FlatList } from "react-native-gesture-handler";
import { ItemHorizontal } from "../../../share/item_horizontal/item_horizontal";
import { useNavigation } from "@react-navigation/native";

export const SearchScreen: React.FunctionComponent<RouteStackParamList<"SignIn">> = props => {
  const { searchPost, items, addToCart, searchKey } = SearchStore.useContainer();
  const navigation = useNavigation()

  const hasKeyword = () => {
    return (
      <>
        <FlatList
          showsHorizontalScrollIndicator={true}
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ItemHorizontal item={item} existInCart={true} isCart={false}
              moveToDeteil={() => navigation.navigate("Detail", { params: item })}
              deleteItem={() => { }} addCart={() => addToCart(item)} />
          )} />
      </>
    )
  }
  const noKeyword = () => {
    return (
      <>
        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 16, fontWeight: "bold" }}>Search item...</Text>
      </>
    )
  }

  const noResult = () => {
    return (
      <>
        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 16, fontWeight: "bold" }}>
          No item has been found...</Text>
      </>
    )
  }

  const result = searchKey === "" ? noKeyword : items.length === 0 ? noResult : hasKeyword;

  return (
    <Container style={{ marginTop: 30 }}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value) => { searchPost(value) }}
        value={searchKey}
        showCancel
        lightTheme
        inputContainerStyle={{ height: 35, backgroundColor: "white" }}
        containerStyle={{ padding: 5 }}
      />
      <Container style={{ marginBottom: 110, padding: 15 }}>
        {result()}
      </Container>
    </Container>
  )
}
