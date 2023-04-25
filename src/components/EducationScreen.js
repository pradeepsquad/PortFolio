import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function EducationScreen({navigation}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim,{
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  },[fadeAnim]);
  return (
    <LinearGradient colors={['#69686D', '#69686D']} style={styles.mainContainer}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginLeft: 20, marginTop: 40, alignSelf: 'center'}}>
          <Text style={styles.About}>Technologies & Services</Text>
        </View>
        
        <View style={{alignSelf: 'center', marginTop: 30, marginBottom: 50}}>
        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
          <Image source={require('../assets/healthcare.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>HealthCare</Text>
          <Text style={styles.cardContent}>
          Provide HealthCare systems allow healthcare providers to share patient medical information 
          securely and efficiently, improving coordination of care and reducing the risk of medical errors
          </Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/web-design.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>Website Development</Text>
          <Text style={styles.cardContent}>
          Believe in providing a wide range of customized solutions with an edge by taking various 
          measures including cost-effective and on-time development</Text>
          </LinearGradient>
        </Animated.View>


        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/delivery.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>Logistics</Text>
          <Text style={[styles.cardContent, {}]}>Provide Transportation Management Systems (TMS) help businesses manage their transportation operations, 
          including carrier selection, route optimization, and tracking of shipments.</Text>
          </LinearGradient>
        </Animated.View>


        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/app-development.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>Mobile Apps Development</Text>
          <Text style={[styles.cardContent, {}]}>Deliver the best native and hybrid/ cross-platform mobile apps which are 
          compatible, reliable, best in performance and security</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/crm.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>CRM</Text>
          <Text style={[styles.cardContent, {}]}>Provide CRM system that offers a range of tools for sales, marketing, customer service, and analytics.</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/internet-of-things.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>IOT - Internet Of Things</Text>
          <Text style={styles.cardContent}>Offer our clients an effective business enabled using 
          smart sensors and automated devices with the help of IOT</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/deal.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>RealEstate</Text>
          <Text style={styles.cardContent}>Real Estate  websites to showcase your listings and services 
          include features like property search, lead capture forms, and customizable templates.</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/chain.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>BlockChain</Text>
          <Text style={styles.cardContent}>Emphasize security and encourage our 
          clients to apply Blockchain Technology to minimize risks</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/shopping.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>ECommerce</Text>
          <Text style={styles.cardContent}>E-commerce service software is a type of software solution that helps 
          businesses manage their online sales operations. </Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/chatbot.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>Chat Bots & VAC</Text>
          <Text style={styles.cardContent}>Support our clients with bot services that 
          impact their business with the best customer engagement</Text>
          </LinearGradient>
        </Animated.View>
       
        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/devops.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>Cloud & DevOps</Text>
          <Text style={styles.cardContent}>provide the best-suited cloud-based solution combined with 
          expertise DevOps to meet all business end needs</Text>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{opacity: fadeAnim}}>
        <LinearGradient colors={['#4F4E52', '#4F4E52']} style={styles.cardView}>
        <Image source={require('../assets/e-learning.png')} 
                style={styles.image} />
          <Text style={styles.cardHeading}>ELearning</Text>
          <Text style={styles.cardContent}>E-learning allows educators to create and manage online courses. 
          It includes features like course management, content creation, assessment and grading, and student tracking.</Text>
          </LinearGradient>
        </Animated.View>

        </View>
        </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: windowWidth,
  },
  About: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'silver',
    textShadowRadius: 5,
  },
  cardView: {
    // height: windowHeight/1.4, 
    width: windowWidth/1.2, 
    marginTop: 15, 
    borderRadius: 10,
  },
  cardHeading: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    fontFamily: 'notoserif',
    textShadowColor: 'gray',
    textShadowRadius: 10,
  },
  cardContent: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
    paddingHorizontal: 20,
    marginBottom: 20,
    textAlign: 'center',
    // textShadowColor: 'black',
    // textShadowRadius: 5,
    
  },
  image: {
    height: 130, 
    width: 130,
    alignSelf: 'center',
    marginTop: 20,
  },
});
