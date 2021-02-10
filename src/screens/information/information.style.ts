import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  informationContainer: {
    position: "absolute",
    width: width - 20,
    height: height,
    backgroundColor: "white",
    top: 100,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    flex: 1
  },
  title: { flex: 2, fontSize: 18, fontWeight: "700", color: "#929292" },
  titleInfo: { flex: 5, fontSize: 18, fontWeight: "500", color: "#929292" },
  titleName: { textAlign: "center", fontSize: 24, fontWeight: "700", color: "#929292" },
});