import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>header</Text>
                <TouchableOpacity onPress={()=>alert("hello")}>
                    <FontAwesome5 name="user-circle" size={30} color="black"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#562aac',
        paddingTop: StatusBar.currentHeight
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
});
