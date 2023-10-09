import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View  style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                       source={{uri: "https://snack-web-player.s3.us-west-1.amazonaws.com/v2/48/assets/src/react-native-logo.png"}}/>
            </View>
            <View style={styles.mainWrapper}>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        keyboardType={"email-address"}
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder={"Enter your email"}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        maxLength={15}
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder={"Enter your password"}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity onPress={()=>alert("min")} style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <View style={styles.descriptionText}>
                    <Text>
                        You have an account!
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text style={{color:"blue"}}>Login Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        padding: 10
    },
    logoContainer:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:25
    },
    logo: {
        width: 100,
        height: 100,
        margin:15,
        resizeMode:"contain"
    },
    mainWrapper:{
        width:"100%",
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start"
    },
    wrapper: {
        width: "100%",
        marginBottom: 15
    },
    label: {
        marginBottom: 10,
        fontSize: 15,
        fontWeight: "bold"
    },
    input: {
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        elevation: 1,
        color: "black"
    },
    buttonWrapper:{
        width:"100%",
        paddingHorizontal:5,
        paddingVertical:15,
        backgroundColor:"#1b39b4",
        elevation:4
    },
    buttonText:{
        textAlign:"center",
        color:"white"
    },
    descriptionText:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"flex-start",
        marginTop:15,
        gap:5
    }
})