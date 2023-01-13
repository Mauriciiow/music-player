import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        backgroundColor: "#2A2141", 
        
    },
    content:{
        width: "100%",
        marginTop: 80
    },
    containerImage: {
        alignSelf: "center",
        marginBottom: 40
    },
    progressBar:{
        marginHorizontal: 75,
        marginBottom: 20
    },
    image:{
        width: 260,
        height: 260,
        borderRadius: 5
    },
    containerTexts:{
        marginLeft: 80
       
    },
    text:{
        fontSize: 29,
        color: "#E1E1E6",
        fontWeight: "bold",
        marginBottom: 5
        
    },
    textOpacity:{
        fontSize: 20,
        color: "rgba(225, 225, 230, 0.4)",
        marginBottom: 30
    },
    minutes:{
        flexDirection: "row",
        justifyContent: "space-around",
        // marginHorizontal: -30
    },
    textMinutes:{
        color: "rgba(196, 196, 204, 0.6)",
        fontSize: 20,
       
    }
})