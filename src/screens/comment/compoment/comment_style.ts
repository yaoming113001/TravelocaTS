import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  commentContainer: { height: 200, marginBottom: 10 },
  ratingCommentContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  commentSession: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  titleComment: { fontSize: 16, fontStyle: "italic" },
  comment: { fontSize: 17, fontWeight: "bold", marginTop: 5 },
  noComment: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginTop: 20 }
});