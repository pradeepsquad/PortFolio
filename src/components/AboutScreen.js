import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function AboutScreen({navigation}) {
  const [showAward, setShowAward] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(true);
  const [btnStyleA, setBtnStyleA] = useState(true);
  const [btnStyleB, setBtnStyleB] = useState(false);
  const [btnStyleC, setBtnStyleC] = useState(false);
  const [btnStyleD, setBtnStyleD] = useState(false);

  const [currentText, setCurrentText] = useState('');
  const [fullText, setFullText] = useState('Greetings and a warm welcome to my portfolio !');
  const [index, setIndex] = useState(0);

useEffect(() => {
  if(index < fullText.length){
    setTimeout(() => {
      setCurrentText(currentText + fullText[index])
      setIndex(index + 1)
    },40);
  }
},[index]);

  // HANDLE TECHNICAL-SKILLS
  const handleMainSkills = () => {
    setShowAward(false);
    setShowEducation(false);
    setShowExperience(false);
    setShowSkills(true);
    setBtnStyleA(true);
    setBtnStyleB(false);
    setBtnStyleC(false);
    setBtnStyleD(false)
  };
  // HANDLE JOURNEY
  const handleAwards = () => {
    setShowAward(true);
    setShowEducation(false);
    setShowExperience(false);
    setShowSkills(false);
    setBtnStyleA(false);
    setBtnStyleB(true);
    setBtnStyleC(false);
    setBtnStyleD(false)
  };
  // HANDLE EXPERIENCE
  const handleExperience = () => {
    setShowAward(false);
    setShowEducation(false);
    setShowExperience(true);
    setShowSkills(false);
    setBtnStyleA(false);
    setBtnStyleB(false);
    setBtnStyleC(true);
    setBtnStyleD(false)
  };
  // HANDLE EDUCATION
  const handleEducation = () => {
    setShowAward(false);
    setShowEducation(true);
    setShowExperience(false);
    setShowSkills(false);
    setBtnStyleA(false);
    setBtnStyleB(false);
    setBtnStyleC(false);
    setBtnStyleD(true)
  };
  return (
    <LinearGradient colors={['#69686D', '#69686D']} style={styles.mainView}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={{marginTop: 40, marginLeft: 20, alignSelf: 'center'}}>
          <Text style={styles.About}>About Me</Text>
          <Text style={[styles.skillsSubHeading, {marginTop: 5}]}>{currentText}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
          As a CEO  with above 10 years of professional
            experience, specializing in information technology, technical
            project management, software development, and Agile. A proven track
            record of managing and building cross-functional teams from the
            ground up to execute multimillion-dollar enterprise-level projects.
            A strong history of interfacing with stakeholders and C-level
            executives to develop overarching IT strategy.
            {'\n'}
            {'\n'}
            {/* Strong professional with a Master of Computer Application (M.C.A.)
            focused in Computer Programming, Specific Application from Indra
            Gandhi National Open University (IGNOU). */}
            My proficiency in requirement analysis, solution design, implementation,
             and rigorous testing has enabled me to deliver exceptional results on numerous projects.
             {'\n'}
            {'\n'}
            Over the years, I have collaborated with diverse clients from various industries, 
            devising customized and effective solutions that align with their unique needs, 
            hence enabling them to achieve their business objectives. 
            I am a staunch believer for building long-term relationships with clients by providing exceptional 
            customer service and ensuring their complete satisfaction.
            {'\n'}
            {'\n'}
            Kindly peruse through some of my notable projects and accomplishments showcased in my portfolio. 
            If you wish to learn more about my qualifications, 
            feel free to get in touch & I would be delighted to provide you with a comprehensive copy of 
            my Curriculum Vitae and an overview of my professional background.
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 8}}>
          <TouchableOpacity onPress={() => handleMainSkills()}>
        <LinearGradient
              colors={btnStyleA ? ['#FDB777', '#FF3000']: ['#FDB777', '#FF9900']}
              style={[styles.buttonView,{width: 130}]}>
              <Text style={[styles.buttonText]}>Technical Skills</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleAwards()}>
            <LinearGradient
              colors={btnStyleB ? ['#FDB777', '#FF3000']: ['#FDB777', '#FF9900']}
              style={[styles.buttonView, {width: 130}] }>
              <Text style={styles.buttonText}>Achievements</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity  onPress={() => handleExperience()}>
            <LinearGradient
              colors={btnStyleC ? ['#FDB777', '#FF3000']: ['#FDB777', '#FF9900']}
              style={styles.buttonView}>
              <Text style={styles.buttonText}>Experience</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity  onPress={() => handleEducation()}>
          <LinearGradient
            colors={btnStyleD ? ['#FDB777', '#FF3000']: ['#FDB777', '#FF9900']}
            style={[styles.buttonView, {width: 130, marginTop: 10, marginLeft: 17}]}>
            <Text style={styles.buttonText}>Qualification</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* TECHNICAL-SKILLS SCREEN */}
        <View style={{marginBottom: 130, marginTop: 30}}>
        {!showSkills ? null : (
          <View style={styles.skillsView}>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Languages
              </Text>
              <Text style={styles.skillsSubHeading}>
              Ruby, Python, PHP, javaScript.
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
               Front End/GUI
              </Text>
              <Text style={styles.skillsSubHeading}>
               HTML, ERB, CSS, HAML.
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Frameworks
              </Text>
              <Text style={styles.skillsSubHeading}>Rails, Django, Laravel, Symfony.</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Databases
              </Text>
              <Text style={styles.skillsSubHeading}>MongoDB, MYSQL, SQLite, Postgres.</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Job Functions
              </Text>
              <Text style={styles.skillsSubHeading}>Analysis, Designing and Programming.</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                OS/Environments
              </Text>
              <Text style={styles.skillsSubHeading}>Linux, Windows, DOS, MAC.</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                SCM Tools
              </Text>
              <Text style={styles.skillsSubHeading}>Git, SVN.</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Web Servers
              </Text>
              <Text style={styles.skillsSubHeading}>Nginx, Apache, Puma, Unicorn.</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Familiar With Hosting's
              </Text>
              <Text style={styles.skillsSubHeading}>AWS, GoDaddy, Digital-Ocean, Hostgator, Rackspace, LiquidWeb.</Text>
            </View>
          </View>
          
        )}

        {/* ACHIVMENT SCREEN */}
        {!showAward ? null : (
          <View style={styles.skillsView}>

            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Reaching the Pinnacle as an MD
              </Text>
              <Text style={styles.skillsSubHeading}>
              Here i am responsible for Develop a clear vision and strategy,
              Build and manage a strong team, Focus on innovation, Foster a positive company culture,
              Stay on top of industry trends and Manage finances wisely.
              </Text>
              <Text style={[styles.skillsSubHeading, {color: 'silver'}]}>(2019-Current)</Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
              Advancing to Senior Project Manager
              </Text>
              <Text style={styles.skillsSubHeading}>
              As a Senior Manager, the focus shifts to managing multiple projects, leading teams, and driving organizational growth. 
              This position developed my leadership skills, fostering innovation, and promoting collaboration within the organization.
              </Text>
              <Text style={[styles.skillsSubHeading, {color: 'silver'}]}>(2015-2018)</Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
              Transitioning to a Project Manager.
              </Text>
              
              <Text style={styles.skillsSubHeading}>
              After gaining extensive experience as a web developer, 
              I got the opportunity & was assigned with Project Manager role. This explored the challenges associated with
               managing software development projects, including team coordination, stakeholder management, and project delivery.
              </Text>
              <Text style={[styles.skillsSubHeading, {color: 'silver'}]}>(2014-2015)</Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
              Becoming a Web Developer.
              </Text>
              
              <Text style={styles.skillsSubHeading}>
              {/* This is an exciting and constantly evolving field that offers plenty of opportunities for growth and learning. */}
              As a Developer, the journey begins with mastering the basics of web development, including programming 
              languages, software tools, and design patterns.{'\n\t\t'}
              (Ruby on Rails (ROR), Django and Laravel.)
              </Text>
              <Text style={[styles.skillsSubHeading, {color: 'silver'}]}>(2010-2014)</Text>
            </View>
          </View>
        )}

        {/* EXPERIENCE SCREEN */}
        {!showExperience ? null : (
         <View style={styles.skillsView}>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
              Client-Server solutions.
              </Text>
              <Text style={styles.skillsSubHeading}>
              10 year above of strong IT experience in implementing Client-Server 
              solutions using Ruby on Rails (RoR),
              Django, and Laravel.
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
              Web development.
              </Text>
              <Text style={styles.skillsSubHeading}>
              Extensive knowledge of Web development, from concept through implementation 
              and optimization and Well-versed with Design Patterns like MVC Architecture.
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
              Object Oriented Analysis and Design.
              </Text>
              <Text style={styles.skillsSubHeading}>Strong knowledge of Object Oriented 
              Analysis and Design with experience in the full life cycle of the
                software design and process(SDLC) including requirement analysis, design, 
                implementation, and testing.</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                Backend Service.
              </Text>
              <Text style={styles.skillsSubHeading}>Excellent experience in SQL and PL/SQL
               and Worked with various Databases like MongoDB, MS-SQL Server, MySQL, SQLite, and Postgres.</Text>
            </View>
          </View> 
        )}
        {/* EDUCATION SCREEN */}
        {!showEducation ? null : (
          <View style={styles.skillsView}>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>
                INDRA GANDHI NATIONAL OPEN UNIVERSITY (IGNOU)
              </Text>
              <Text style={styles.skillsSubHeading}>
                Master of Computer Application (M.C.A.)
              </Text>
              <Text style={styles.skillsSubHeading}>
                Computer Programming, Specific Application
              </Text>
              {/* <Text style={[styles.skillsSubHeading, {color: 'black', fontWeight: 'bold'}]}>2010-2014</Text> */}
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.skillsHeading}>DOABA COLLEGE</Text>
              <Text style={styles.skillsSubHeading}>
                Bachelor of Science (B.S.C. IT)
              </Text>
              <Text style={styles.skillsSubHeading}>
                Information Technology
              </Text>
              {/* <Text style={[styles.skillsSubHeading, {color: 'black', fontWeight: 'bold'}]}>2007-2010</Text> */}
            </View>
          </View>
        )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: windowWidth,
  },
  About: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    // textShadowColor: 'black',
    // textShadowRadius: 15,
    alignSelf: 'center',
  },
  content: {
    width: '95%',
    marginHorizontal: 20,
    alignSelf: 'center',
    marginTop: 30,
  },
  contentText: {
    color: 'white',
    fontWeight: '600',
    width: '95%',
    alignSelf: 'center',
    fontSize: 17,
    // textAlign: 'center',
    // textShadowColor: 'black',
    // textShadowRadius: 15,
  },
  skillsView: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#FF00',
  },
  skillsHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    // textShadowColor: 'black',
    // textShadowRadius: 15,
  },
  skillsSubHeading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  buttonView: {
    height: 45,
    borderRadius: 10,
    width: 110,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 12,
    fontSize: 15,
  },
});
