import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  informationContainer: {
    position: "absolute",
    width: width - 20,
    height: height / 2 + 170,
    backgroundColor: "white",
    top: 80,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    paddingTop: 0,
    flex: 1
  },
  title: { flex: 2, fontSize: 18, fontWeight: "700", color: "#929292" },
  titleInfo: { flex: 5, fontSize: 18, fontWeight: "500", color: "#929292" },
  titleName: { textAlign: "center", fontSize: 24, fontWeight: "700", color: "#929292" },
  titleInfoContainer: { marginTop: 20 },
  buttonContainer: {
    flex: 1, position: "relative",
    justifyContent: "center", alignItems: "center"
  },
  button: { width: 100 },
  inforImage: {
    position: "absolute", width: 100, height: 100, left: width / 2, top: 40, borderRadius: 50,
    transform: [{ translateX: -50 }]
  },
  loginWarning: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 50 },
});