import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RouteNavigation from './src/navigation/RouteNavigation';
import TabNav from './src/navigation/TabNav';
import { screensEnabled } from 'react-native-screens';


export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinRegular: require("./assets/fonts/JosefinSans-Regular.ttf"),
    JosefinBold: require("./assets/fonts/JosefinSans-Bold.ttf")
  })
  
  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer style={styles.container} >
      {/* <RouteNavigation/> */}
      <TabNav    />
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  }
});
