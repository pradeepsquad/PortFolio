import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  Easing,
  Animated,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {WebView} from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SkillsScreen({navigation}) {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim,{
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  },[fadeAnim]);
const handleVicePing = async () => {
  await Linking.openURL('https://voice-ping.com')
}
  return (
    <LinearGradient colors={['#4F4E52', '#4F4E52']} style={{flex: 1, width: windowWidth}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 40}}>
          <Text style={styles.mainHeading}>My Latest Projects</Text>
        </View>
        <View style={{marginHorizontal: 20, marginTop: 30, marginBottom: 50}}>

        <TouchableOpacity onPress={() =>  Linking.openURL('https://www.freshvoice.net/')}>
          <Animated.View style={[styles.containerView, {opacity: fadeAnim}]}>
            <Animated.Image source={require('../assets/lfv.png')} style={styles.image}/>
            <Text style={styles.viewHeading}>LiteFreshVoice</Text>
            <Text style={styles.subHeading}>Reactjs, Ruby on Rails, Firebase</Text>
          </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleVicePing()}>
          <Animated.View style={[styles.containerView, {opacity: fadeAnim}]}>
            <Image source={require('../assets/ping-me.png')} style={styles.image}/>
            <Text style={styles.viewHeading}>Voice-Ping</Text>
            <Text style={styles.subHeading}>Reactjs, Ruby on Rails, Firebase</Text>
          </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>  Linking.openURL('https://healthtree.org/')}>
          <Animated.View style={[styles.containerView, {opacity: fadeAnim}]}>
          <Image source={require('../assets/healthTree.png')} style={styles.image}/>
            <Text style={styles.viewHeading}>HealthTree Foundation</Text>
            <Text style={styles.subHeading}>Ruby on Rails, Wordpress</Text>
          </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>  Linking.openURL('http://tabstart.com/')}>
          <Animated.View style={[styles.containerView, {opacity: fadeAnim}]}>
          <Image source={require('../assets/tabStart.png')} style={styles.image}/>
            <Text style={styles.viewHeading}>TabStart</Text>
            <Text style={styles.subHeading}>WordPress</Text>
          </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>  Linking.openURL('https://www.sondermind.com/')}>
          <Animated.View style={[styles.containerView, {opacity: fadeAnim}]}>
          <Image source={require('../assets/sonderminds.png')} style={styles.image}/>
            <Text style={styles.viewHeading}>SonderMind</Text>
            <Text style={styles.subHeading}>Ember js, Node js, Firebase</Text>
          </Animated.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>  Linking.openURL('https://squadminds.com/portfolio')}>
          <LinearGradient colors={['#FDB777', '#FF9900']}
            style={{height: 45, borderRadius: 10, width: 120, marginTop: 20, alignSelf: 'center'}}>
            <Text style={styles.touchText}>For More ...</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
mainHeading: {
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  alignSelf: 'center',
  marginTop: 0,
  textShadowColor: 'black',
    textShadowRadius: 15,
},
containerView: {
  backgroundColor: '#F9F9F8',
  height: 270,
  width: '100%',
  marginTop: 15,
  borderRadius: 10,
},
viewHeading: {
  color: 'black',
  alignSelf: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  marginTop: 8,
  // textShadowColor: 'gray',
  // textShadowRadius: 5,
},
subHeading: {
  color: '#FF5800',
  alignSelf: 'center',
  fontWeight: '600',
  fontSize: 17,
  // textShadowColor: 'orange',
  // textShadowRadius: 5,
},
image: {
  height: 200,
  width: '100%',
  borderRadius: 10,
  resizeMode:'stretch'
},
touchText: {
  color: 'white',
  alignSelf: 'center',
  marginTop: 13,
  fontWeight: '900',
},
});
