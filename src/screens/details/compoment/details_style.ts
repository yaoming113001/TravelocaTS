import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  imageDetail: {
    width: "100%",
    height: 150,
    borderRadius: 15,
    marginBottom: 5
  },
  ratingContainerDetail: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10
  },
  ratingDetail: {
    fontSize: 18,
    fontWeight: "bold"
  },
  titleDetail: {
    fontSize: 26,
    fontWeight: "bold",
  },
  whiteContainerDetail: {
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonDetailContainer: {
    width: width,
    position: "absolute",
    bottom: 0,
    height: 60,
    backgroundColor: "white",
    paddingTop: 5,
    justifyContent: "space-around"
  },
  buttonDetails: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#337ab7",
    height: 50,
    width: 150,
    justifyContent: "center",
    borderRadius: 10,
  },
  phoneDetail: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
  phoneIconDetail: {
    color: "white",
    padding: 10,
  },
  emailDetail: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  contentlDetail: {
    fontSize: 18,
  },
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
  comment: { fontSize: 17, fontWeight: "bold", marginTop: 5 }
});