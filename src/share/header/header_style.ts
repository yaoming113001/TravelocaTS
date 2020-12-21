import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    },
    titleContainer: {
        marginTop: 30,
        height: 100,
        alignItems:"center"
    },
    headerTitle: {
        fontSize: 45,
        fontWeight: "bold",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowReverse: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },
});