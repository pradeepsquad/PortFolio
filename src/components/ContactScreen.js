import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  Linking,
} from 'react-native';
import React, {useState, createRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import email from 'react-native-email';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default function ContactScreen({navigation}) {
  const [name, setName] = useState('');
  const [emails, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [about, setAbout] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [aboutError, setAboutError] = useState('');

  const [currentText, setCurrentText] = useState('');
  const [fullText] = useState(
    'Thank you for considering my portfolio, and I look forward to connecting with you !',
  );
  const [index, setIndex] = useState(0);

  const emailRef = createRef('');
  const subjectRef = createRef('');
  const aboutRef = createRef();

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setCurrentText(currentText + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  useEffect(() => handleValidation())
  const handleValidation = () => {
    if (name.trim() === '') {
      setNameError('Name is empty');
    } else if (name.trim().length < 5) {
      setNameError('name is less then five');
    } else {
      setNameError('');
    }

    if (emails.trim() === '') {
      setEmailError('Email is empty');
    } else if (!re.test(emails)) {
      setEmailError('invalid email');
    } else {
      setEmailError('');
    }

    if (subject.trim() === '') {
      setSubjectError('subject is empty');
    } else if (subject.trim().length < 5) {
      setSubjectError('invalid subject');
    } else {
      setSubjectError('');
      
    }

    if (about.trim() === '') {
      setAboutError('subject is empty');
    } else if (about.trim().length < 10) {
      setAboutError('message less 10 character');
    } else {
      setAboutError('');
    
    }
   
  };
  const handleSubmit =  () => {
    if(name.trim() === '' || emails.trim() === '' || subject.trim() === '' || about.trim() === ''){
      alert('Input field are Empty')
    }else{
      const to = 'info@squadminds.com';
       email(to, {
        cc: '',
        bcc: '',
        subject: subject,
        body: about,
        checkCanOpen: false,
      }).catch(console.error);
      alert('success');
      setName('');
      setEmail('');
      setSubject('');
      setAbout('');
    }
    navigation.navigate('Home');
  };
  return (
    <LinearGradient colors={['#4F4E52', '#4F4E52']} style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headingView}>
          <Text style={styles.headingText}>Let's get in touch!</Text>
          <Text style={styles.headingSubText}>
            For quick and friendly support
          </Text>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30, height: 800}}>
          <TextInput
            style={styles.inputText}
            placeholder="Your Name *"
            placeholderTextColor="white"
            onSubmitEditing={() => emailRef.current && emailRef.current.focus()}
            value={name}
            onChangeText={name => setName(name)}
          />
          {!nameError ? null : (
            <Text style={{color: 'red', fontWeight: '600', marginLeft: 20}}>
              {nameError}
            </Text>
          )}
          <TextInput
            style={styles.inputText}
            placeholder="Your Email *"
            placeholderTextColor="white"
            onSubmitEditing={() =>
              subjectRef.current && subjectRef.current.focus()
            }
            ref={emailRef}
            value={emails}
            onChangeText={emails => setEmail(emails)}
          />
          {!emailError ? null : (
            <Text style={{color: 'red', fontWeight: '600', marginLeft: 20}}>
              {emailError}
            </Text>
          )}
          <TextInput
            style={styles.inputText}
            placeholder="Subject *"
            placeholderTextColor="white"
            onSubmitEditing={() => aboutRef.current && aboutRef.current.focus()}
            ref={subjectRef}
            value={subject}
            onChangeText={subject => setSubject(subject)}
          />
          {!subjectError ? null : (
            <Text style={{color: 'red', fontWeight: '600', marginLeft: 20}}>
              {subjectError}
            </Text>
          )}
          <TextInput
            style={styles.inputTextMsg}
            editable
            multiline
            numberOfLines={12}
            textAlignVertical="top"
            ref={aboutRef}
            onSubmitEditing={() => Keyboard.dismiss()}
            placeholder="Your Message"
            placeholderTextColor="white"
            value={about}
            onChangeText={about => setAbout(about)}
          />
          {!aboutError ? null : (
            <Text style={{color: 'red', fontWeight: '600', marginLeft: 20}}>
              {aboutError}
            </Text>
          )}
        </View>

        <TouchableOpacity
          style={styles.touchButton} 
          onPress={() => handleSubmit()}>
          <LinearGradient
            colors={['#FDB777', '#FF9900']}
            style={{height: 45, borderRadius: 10}}>
            <Text style={styles.touchText}>SUBMIT</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 270,
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={styles.iconView}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/squadminds')
            }>
            <Image
              source={require('../assets/facebook.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconView}
            onPress={() =>
              Linking.openURL('https://www.upwork.com/ag/squadminds/')
            }>
            <Image
              source={require('../assets/upwork.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconView}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/chetan-b-batra/')
            }>
            <Image
              source={require('../assets/linkedin.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconView}
            onPress={() => Linking.openURL('https://twitter.com/squad_minds')}>
            <Image
              source={require('../assets/twitter.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.thanks}>{currentText}</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headingView: {
    alignSelf: 'center',
    marginLeft: 20,
    marginTop: 40,
  },
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 10,
    // textShadowColor: 'black',
    // textShadowRadius: 15,
  },
  inputText: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'silver',
    backgroundColor: 'silver',
    marginTop: 20,
    paddingLeft: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  inputTextMsg: {
    height: 120,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'silver',
    backgroundColor: 'silver',
    marginTop: 20,
    paddingLeft: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  touchButton: {
    // backgroundColor:  '#FF6600',
    width: 300,
    height: 45,
    position: 'absolute',
    top: 560,
    bottom: 50,
    alignSelf: 'center',
    borderRadius: 30,
  },
  touchText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 13,
    fontWeight: '900',
  },
  headingSubText: {
    color: 'silver',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconView: {
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    height: 40,
    width: 40,
  },
  thanks: {
    color: 'silver',
    fontWeight: 'bold',
    marginHorizontal: 30,
    position: 'absolute',
    bottom: 220,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
