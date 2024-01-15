import React from "react";
import { Text , View , SafeAreaView, StyleSheet} from 'react-native'
import SplashScreen from "./screens/SplashScreen";
import Onboarding from './screens/Onboarding'

const App = () => {
  return(
    <View style={styles.container}>
     
            <Onboarding/>
      
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