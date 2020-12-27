import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20
  },
  titleContainer: {
    height: 100,
    justifyContent: "flex-end"
  },
  headerTitle: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 10
  },
  rowContainer: {
    justifyContent: "space-between",
  },

});