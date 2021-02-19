import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  imageBanner: { width: "100%", height: "100%", borderRadius: 15 },
  buttonContainer: {
    justifyContent: "center",
    flex: 2,
    width: width,
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20
  },
});