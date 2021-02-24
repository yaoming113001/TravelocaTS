import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  bookingContainer: { height: "83%", position: "relative" },
  imageItem: { height: 150, borderRadius: 15 },
  containerInfor: { justifyContent: "space-between", backgroundColor: "white", padding: 10, borderRadius: 10, marginTop: 10 },
  bookingButtonContainer: { position: "absolute", bottom: 0, width: "100%", justifyContent: "space-between", backgroundColor: "white", padding: 5, borderRadius: 10, marginTop: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  price: { width: "50%", fontSize: 18, fontWeight: "bold", color: "#1877f2" },
  email: { fontSize: 18, fontStyle: "italic" },
  phoneTitle: { fontSize: 18 },
  phone: { fontSize: 18, fontWeight: "bold" },
  bookingButton: { backgroundColor: "#d83737", borderRadius: 10, padding: 5 },
  line1ButtonContainer: { justifyContent: "center", alignItems: "center" },
  line2ButtonContainer: { justifyContent: "space-around", alignItems: "center", padding: 5 },
  orderButtonTitle: { fontSize: 24, color: "white", fontWeight: "bold", marginRight: 10 },
  dateTimeButtonTitle: { fontSize: 18, color: "white", fontWeight: "bold", marginRight: 10 },
  timepickerContainer: { width: "48%", padding: 0, alignItems: "center", justifyContent: "center" }
});