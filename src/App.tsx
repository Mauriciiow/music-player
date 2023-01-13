import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import ProgressBar from './components/ProgressBar';
import { styles } from './styles';

const App = () => {

  let [initial, setInitial] = useState(0)
  const finalTime = 5
  let [progress, setProgress] = useState(0)
  let intervalRef = useRef<number | null>(null) 
  
 const play = ()=>{
  intervalRef.current = setInterval(()=>{
    initial = initial + 1
    progress = (initial / finalTime) * 100
    setInitial(initial)
    setProgress(progress)
 
    if (initial === finalTime) {  
      clearInterval(intervalRef.current as number)
      intervalRef.current = null;
    }
  }, 1000)
 }

 return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerImage}>
          <Image source={require("../src/assets/image.jpg")} style={styles.image} />
        </View>
        <View style={styles.containerTexts}>
          <Text style={styles.text}>Player</Text>
          <Text style={styles.textOpacity}>Player</Text>
        </View>
        <View style={styles.progressBar}>
          <ProgressBar progress={progress}/>
        </View>   
      <View style={styles.minutes}>
        <Text style={styles.textMinutes}>{initial}</Text>
        <Text style={styles.textMinutes}>{finalTime}</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};


export default App;
