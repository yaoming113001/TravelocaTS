import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20
    },
    titleContainer: {
        height: 100,
        justifyContent: "flex-end"
    },
    headerTitle: {
        fontSize: 45,
        fontWeight: "bold",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerSession: {
        marginTop: 20,
        width: 120,
        height: 100,
        marginRight: 10,
        borderRadius: 10,
        padding: 2,
        borderWidth: 3,
        borderColor: "#f73b4c"
    },
    imageSession: {
        width: "100%",
        height: "100%",
        borderRadius: 8
    },
    imagePoster1: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    imagePoster2: {
        width: "100%",
        height: "60%",
        borderRadius: 5,
        marginBottom: 10
    },
    posterTitle: {
        fontSize: 34,
        fontWeight: "600",
    },
    posterContainer: {
        marginTop: 30,
        height: 250,
        marginBottom: 90
    },
    imagePosterContainer: {
        height: "100%",
        marginTop: 10,
        flexDirection: "row"
    },
    imageContainer: {
        width: "50%",
        padding: 5
    },
    discountContainer: {
        marginTop: 30
    },
    discountItemContainer: {
        marginTop: 20,
        width: 200,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
        padding: 2,
        borderWidth: 3,
        borderColor: "#f73b4c"
    }
});