import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:3,color:"white"}}>
        Hello world
      </Text>
      <AntDesign name="infocirlce" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#562aac',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
