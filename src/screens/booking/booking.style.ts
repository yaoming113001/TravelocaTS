import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  extentButtonContainer: { height: height / 3 - 40, borderRadius: 10, alignItems: "flex-end" },
  buttonContainer: { width: 70, height: "100%", justifyContent: "center" },
  buttonStyle: { height: "100%", borderRadius: 10, backgroundColor: "red" },
  buttonTitleStyle: { fontSize: 18, fontWeight: "bold", color: "white", textAlign: "center" },
  noItemTitle: { textAlign: "center", fontSize: 22, fontWeight: "bold", letterSpacing: 2, paddingTop: 20 }
});