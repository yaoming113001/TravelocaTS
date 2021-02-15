import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  modalContainer: { width: 350, padding: 15 },
  title: { textAlign: "center", fontSize: 18, fontWeight: "700", letterSpacing: 2, marginBottom: 15 },
  titleInfo: { flex: 1 },
  inputInfo: { marginLeft: 5, borderBottomWidth: 1, flex: 3, height: 35, padding: 0, borderColor: "#989898" },
  changeInfoContainer: { alignItems: "center", marginTop: 10 },
  button: { width: 100, marginTop: 40, borderRadius: 10 },
  container: { position: "relative", height: 450 }
});