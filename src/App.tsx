import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';
import ProgressBar from './components/ProgressBar';
import { styles } from './styles';
import Icon from "react-native-vector-icons/FontAwesome"

const App = () => {

  let [initial, setInitial] = useState(0)
  const totalTime = 140
  let [progress, setProgress] = useState(0)
  let [remainingTime, setRemainingTime] = useState(totalTime)
  let intervalRef = useRef<number | null>(null) 
  const [pressed, setPressed] = useState(false)
  
 const play = ()=>{
  setPressed(true)
  if (remainingTime === 0) {  
    initial = 0
    progress = 0
    remainingTime = totalTime
  }
  intervalRef.current = setInterval(()=>{
    initial = initial + 1
    progress = (initial / totalTime) * 100
    remainingTime = totalTime - initial
    setInitial(initial)
    setProgress(progress)
    setRemainingTime(remainingTime)
    
    if (remainingTime === 0) {  
      clearInterval(intervalRef.current as number)
      setPressed(false)
    }
  }, 1000)
 }

 const pause = ()=>{
  setPressed(false)
  clearInterval(intervalRef.current as number)
 }

 const convertTime = (time: number)=>{
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
 
 const minutesConverted = minutes.toString().padStart(2, '0')
 const secondsConverted = seconds.toString().padStart(2, '0');
 return `${minutesConverted}:${secondsConverted}`
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
        <View style={styles.containerPlayer}> 
        <TouchableOpacity>
          <Icon name='backward' size={25} color="white"/>
        </TouchableOpacity>
        {pressed ? (
             <TouchableOpacity onPress={pause}>
             <Icon name='pause' size={25} color="white"/>
           </TouchableOpacity>
        )
      :
      (
        <TouchableOpacity onPress={play}>
        <Icon name='play' size={25} color="white"/>
      </TouchableOpacity>
      )}
        <TouchableOpacity>
         <Icon name='forward' size={25} color="white"/>
        </TouchableOpacity>
        </View>
        <View style={styles.progressBar}>
          <ProgressBar progress={progress}/>
        </View>   
      <View style={styles.minutes}>
        <Text style={styles.textMinutes}>{convertTime(initial)}</Text>
        <Text style={styles.textMinutes}>{convertTime(remainingTime)}</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};


export default App;
