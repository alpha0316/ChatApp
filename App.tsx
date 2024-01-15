import React from "react";
import { Text , View , SafeAreaView, StyleSheet} from 'react-native'
import SplashScreen from "./screens/SplashScreen";
import SignIn from './screens/SignIn'
import SignUp from "./screens/SignUp";

const App = () => {
  return(
    <View style={styles.container}>
     
            <SignIn/>
      
    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor : 'white',
    flex : 1,
    alignContent: 'center',
    
  }
});



export default App