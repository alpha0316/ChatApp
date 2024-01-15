import React from "react";
import { SafeAreaView ,View , Text, StyleSheet, TextInput,} from "react-native";
import Svg, { Path } from "react-native-svg"
import PrimaryButton from '../components/Primarybutton'

const SignUp = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.back}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="#000E08" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </Svg>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sign up with Email</Text>
                <Text style={styles.Textp}>Get chatting with friends and family today by {'\n'} signing up for our chat app!</Text>
            </View>
            <View style={styles.input}>
                <View style={styles.inputfield}>
                    <Text>Your name</Text>
                    <TextInput 
                     style={styles.inputStyle}
                     placeholder="Micheal"
                     />
                </View>
                <View style={styles.inputfield}>
                    <Text>Your email</Text>
                    <TextInput 
                     style={styles.inputStyle}
                     placeholder="Micheal316@gmail.com"
                     />
                </View>
                <View style={styles.inputfield}>
                    <Text>Password</Text>
                    <TextInput 
                     style={styles.inputStyle}
                     placeholder="*****"
                     />
                </View>
                <View style={styles.inputfield}>
                    <Text>Confirm Password</Text>
                    <TextInput 
                     style={styles.inputStyle}
                     placeholder="*****"
                     />
                </View>
            </View>
            <View style={styles.button}>
                <PrimaryButton title={'Create an account'} color={'white'} backgroundColor={'#24786D'}/>
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex : 1, 
      backgroundColor: 'white',
      gap : 16,
      marginHorizontal : 24
    },
    header : {
        paddingTop : 90,
        justifyContent : 'center',
        alignItems : 'center',
        gap : 12
    },
    headerText : {
        fontSize : 18,
        fontWeight : '600'
    },
    Textp : {
        textAlign : 'center',
        color : '#797C7B'
    },
    input : {
        paddingVertical : 60,
        flexDirection : 'column',
        gap: 30
    },
    inputfield : {
        gap : 8
    },
    inputStyle : {
        paddingTop : 16,
        borderBottomWidth : 1,
        borderColor : '#CDD1D0',
        paddingBottom : 3
    },
    button : {
        paddingTop : 70,
        alignItems : 'flex-end',
    }
  
  });
  


export default SignUp