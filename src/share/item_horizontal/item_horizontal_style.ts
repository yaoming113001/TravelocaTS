import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8
  },
  itemContainer: {
    marginBottom: 20,
    width: "100%",
    marginRight: 10,
    borderRadius: 10,
    padding: 2,
    borderWidth: 3,
    borderColor: "#f73b4c",
    backgroundColor: "white"
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 4,
    width: "70%"
  },
  priceTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
    color: "#c9302c"
  },
  justifyContainer: { alignItems: "center", justifyContent: "space-between" },
  ratingNumber: {
    fontSize: 16,
    padding: 4
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 4,
    color: "#1877f2"
  },
  iconItem: { borderWidth: 1, borderColor: "#c5c5c5", backgroundColor: "white", margin: 5, borderRadius: 8 }

});