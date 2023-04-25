import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  Image,
  ScrollView,
  SafeAreaView,
  Span,
} from 'react-native';
import React, {useEffect, useState, useCallback, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AboutScreen from './AboutScreen';
import EducationScreen from './EducationScreen';
import SkillsScreen from './SkillsScreen';
import ContactScreen from './ContactScreen';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function HomeScreen() {
  // const index  = useRef(0)
  // const [name, setName] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [fullText,] = useState('Software Developer.');
  const [index, setIndex] = useState(0)
    // const shuffle = useCallback(() => {
    //   const index = Math.floor(Math.random()* textArray.length);
    //   setName(textArray[index]);
    // }, []); 

    // useEffect(() => {
    //   const intervalID = setInterval(shuffle, 2000);
    //   return () => clearInterval(intervalID);
    // }, [shuffle])

 

    useEffect(() => {
      if(index < fullText.length){
        setTimeout(() =>{
          setCurrentText(currentText + fullText[index])
          setIndex(index + 1)
        },50); 
      }
      
    }, [index]);
  return (
    <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.safeView}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainView}>
        <View style={{width: windowWidth/1.9, marginTop: 70, borderWidth: 0, borderColor: 'black', position: 'relative', left: 10}}>
          <Text style={styles.name}>Hi, I am Chetan Batra</Text>
          <Text style={[styles.developer, {marginTop: 4}]}>{currentText}</Text>
          <Text style={[styles.name, {marginTop: 5}]}>based in INDIA.</Text>
        </View>
        <View style={[{width: windowWidth/4, marginTop: 0, borderWidth: 0,borderColor: 'black',}]}>
          <Image source={require('../assets/chetan.png')} style={styles.image}/>
        </View>
      </View>
      <AboutScreen />
      <SkillsScreen />
      <EducationScreen />
      <ContactScreen />
      
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    height: windowHeight,
    windowHeight: windowWidth,
  },
  image: {
    height: 400, 
    width: 300, 
    position: 'absolute',
    borderRadius: 8,
    elevation: 10,
    opacity: 0.8,
    // backgroundColor: 'red',
    left: -70,
    top: -30
  },
  name: {
    alignSelf: 'center',
    color: 'orange', 
    fontSize: 22, 
    fontWeight: '600',
    // textShadowRadius: 5,
    // textShadowColor: 'black',
  },
  welcome: {
    alignSelf: 'center', 
    marginTop: 360, 
    position: 'absolute',
    fontWeight: 'bold', 
    color: 'silver',
    // textShadowRadius: 5,
    // textShadowColor: 'gray',
  },
  mainView: {
    flex: 3,
    flexDirection: 'row', 
    marginTop: 50, 
    marginBottom: 170,
    borderWidth: 0,
    borderColor: 'red',
  },
  developer: {
    alignSelf: 'center',
    textAlign:'center',
    color: '#FF4400', 
    fontSize: 22, 
    fontWeight: '900',
    // textShadowRadius: 5,
    // textShadowColor: 'black',
  },

  
});

