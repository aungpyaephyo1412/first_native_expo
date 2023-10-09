import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
export default function App({navigation}) {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{title:"Register"}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{title:"Login"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

