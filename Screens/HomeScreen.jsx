import {ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>header</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <FontAwesome5 name="user-circle" size={30} color="black"/>
                </TouchableOpacity>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={styles.body}>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.post}>
                        <View style={styles.postHeader}>
                            <FontAwesome5 name="user-circle" size={35} color="black"/>
                            <View>
                                <Text style={styles.postAuthor}>MG MG</Text>
                                <Text style={styles.postDate}>13 321 3333</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.postBodyText}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias architecto deserunt dicta dolorum enim explicabo ipsa nemo nisi numquam, porro quaerat quo rem, rerum ullam voluptatibus voluptatum? Pariatur, recusandae.
                            </Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        width:"100%",
        maxWidth:"700"
    },
    header: {
        width: "100%",
        backgroundColor: "lightblue",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "500"
    },
    body:{
        flex:1,
        backgroundColor:"#eff8f9",
        padding:5,
    },
    post:{
        width:"100%",
        backgroundColor:"#ffffff",
        borderRadius:6,
        elevation:3,
        padding:10,
        marginVertical:5
    },
    postHeader:{
        flexDirection:"row",
        gap:5,
        alignItems:"center",
        marginBottom:5
    },
    postAuthor:{
        fontSize:15,
        fontWeight:"700",
        color:'#2f8f89'
    },
    postDate:{
        color:"#6e6161"
    },
    postBodyText:{
        color:"black"
    }
});
